import nodemailer from 'nodemailer'
import { join } from 'path'
import type { H3Event } from 'h3'
import { defineEventHandler, readBody } from 'h3'
import { fillPatientQuestionnaire } from '../utils/fillPatientQuestionnaire'

// TS in this project may not include Node types by default
declare const process: any

type PatientFormData = {
  patientInfo: {
    fullName: string
    birthDate: string
    phone: string
    email: string
    nationality: string
    submissionDate: string
    complaints: string
  }
  healthInfo: {
    chronicDiseases: string
    allergies: string
    smoking: string
    pregnancy: string
  }
  tariff: string
}

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody<PatientFormData>(event)
  const mailHost = process.env.MAIL_HOST
  const mailPort = Number(process.env.MAIL_PORT || 587)
  const mailSecure =
    String(process.env.MAIL_SECURE ?? '').toLowerCase() === 'true' || mailPort === 465
  const mailUser = process.env.MAIL_USER
  const mailPass = process.env.MAIL_PASS
  const mailFrom = process.env.MAIL_FROM || mailUser
  const mailTo = process.env.MAIL_TO

  if (!mailHost || !mailUser || !mailPass || !mailTo) {
    return {
      success: false,
      error: 'Почта не настроена на сервере'
    }
  }

  const transporter = nodemailer.createTransport({
    host: mailHost,
    port: mailPort,
    secure: mailSecure,
    auth: {
      user: mailUser,
      pass: mailPass
    }
  })

  const subject = 'Анкета пациента / расчёт стоимости — OPAL DENTAL'

  const lines: string[] = []
  lines.push(subject, '')

  // Пациент
  lines.push('=== Пациент ===')
  lines.push(`ФИО: ${body.patientInfo.fullName}`)
  lines.push(`Дата рождения: ${body.patientInfo.birthDate}`)
  lines.push(`Телефон: ${body.patientInfo.phone}`)
  lines.push(`Email: ${body.patientInfo.email}`)
  lines.push(`Национальность: ${body.patientInfo.nationality}`)
  lines.push(`Дата отправки анкеты: ${body.patientInfo.submissionDate}`)
  lines.push(`Жалобы и запрос: ${body.patientInfo.complaints}`)
  lines.push('')

  // Здоровье
  lines.push('=== Здоровье ===')
  lines.push(`Хронические заболевания и лекарства: ${body.healthInfo.chronicDiseases}`)
  lines.push(`Аллергии на лекарства или анестезию: ${body.healthInfo.allergies}`)
  lines.push(`Курение: ${body.healthInfo.smoking}`)
  lines.push(`Беременность или ГВ: ${body.healthInfo.pregnancy}`)
  lines.push('')

  // Тариф
  lines.push('=== Тариф ===')
  lines.push(`Выбранный тариф: ${body.tariff}`)

  const text = lines.join('\n')

  const attachments: nodemailer.SendMailOptions['attachments'] = []
  const templatePath = process.env.PATIENT_QUESTIONNAIRE_TEMPLATE_PATH ||
    join(process.cwd(), 'Анкета пациента Opal Dental.xlsx')
  try {
    const filledBuffer = fillPatientQuestionnaire(templatePath, body)
    attachments.push({
      filename: 'Анкета пациента Opal Dental.xlsx',
      content: filledBuffer
    })
  } catch (templateErr: any) {
    // Шаблон не найден или ошибка заполнения — отправляем письмо без вложения
    console.warn('Не удалось заполнить шаблон анкеты:', templateErr?.message)
  }

  try {
    await transporter.sendMail({
      from: `"ZubTour Site" <${mailFrom}>`,
      to: mailTo,
      subject,
      text,
      attachments
    })

    return { success: true }
  } catch (e: any) {
    return {
      success: false,
      error: e?.message || 'Ошибка отправки письма'
    }
  }
})

