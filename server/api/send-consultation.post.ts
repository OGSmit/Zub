import nodemailer from 'nodemailer'
import type { H3Event } from 'h3'
import { defineEventHandler, readBody } from 'h3'

// TS in this project may not include Node types by default
declare const process: any

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody<{
    name: string
    phone: string
    email: string
  }>(event)

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

  const subject = 'Запись на консультацию — ЗубТур'

  const text = [
    subject,
    '',
    `Имя: ${body.name}`,
    `Телефон: ${body.phone}`,
    `Email: ${body.email}`
  ].join('\n')

  try {
    await transporter.sendMail({
      from: `"ZubTour Site" <${mailFrom}>`,
      to: mailTo,
      subject,
      text
    })

    return { success: true }
  } catch (e: any) {
    return {
      success: false,
      error: e?.message || 'Ошибка отправки письма'
    }
  }
})

