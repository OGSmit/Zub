import * as XLSX from 'xlsx'
import { readFileSync } from 'fs'
import { join } from 'path'

export type PatientFormData = {
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

/** Нормализуем подпись из ячейки для сравнения (без звёздочки, trim) */
function normalizeLabel(val: unknown): string {
  const s = String(val ?? '').trim().replace(/\s*\*?\s*$/, '')
  return s
}

/**
 * Плоский объект "поле формы -> значение" и возможные подписи в шаблоне для каждого поля.
 * Если в шаблоне в столбце A есть подпись из списка — в столбец B пишем значение.
 */
function getLabelToValueMap(data: PatientFormData): Map<string, string> {
  const map = new Map<string, string>()

  const pairs: Array<{ labels: string[]; value: string }> = [
    { labels: ['ФИО'], value: data.patientInfo.fullName },
    { labels: ['Дата рождения'], value: data.patientInfo.birthDate },
    { labels: ['Телефон'], value: data.patientInfo.phone },
    { labels: ['Email', 'Эл. почта', 'E-mail'], value: data.patientInfo.email },
    { labels: ['Национальность'], value: data.patientInfo.nationality },
    {
      labels: ['Дата отправки', 'Дата отправки анкеты', 'Дата заполнения'],
      value: data.patientInfo.submissionDate
    },
    {
      labels: [
        'Основные жалобы',
        'Жалобы',
        'Основные жалобы / потребности',
        'жалобы / потребности'
      ],
      value: data.patientInfo.complaints
    },
    {
      labels: [
        'Хронические заболевания',
        'хронические заболевания',
        'хронические заболевания / принимаете ли вы какие-либо лекарства',
        'Есть ли у вас хронические заболевания'
      ],
      value: data.healthInfo.chronicDiseases
    },
    {
      labels: [
        'Аллергия',
        'Аллергии',
        'аллергия на лекарства или анестезию',
        'Есть ли у вас аллергия'
      ],
      value: data.healthInfo.allergies
    },
    {
      labels: ['Курение', 'Курите ли вы', 'Курите'],
      value: data.healthInfo.smoking
    },
    {
      labels: [
        'Беременность',
        'беременность или период грудного вскармливания',
        '(Для женщин) Беременность'
      ],
      value: data.healthInfo.pregnancy
    },
    {
      labels: ['Тариф', 'Выберите тариф', 'Выбранный тариф', 'ВЫБОР ТАРИФА'],
      value: data.tariff
    }
  ]

  for (const { labels, value } of pairs) {
    for (const label of labels) {
      map.set(normalizeLabel(label), value ?? '')
    }
  }
  return map
}

/** Проверяем, совпадает ли подпись из ячейки с одним из наших ключей (по нормализованному сравнению) */
function findValueForLabel(
  cellLabel: string,
  labelToValue: Map<string, string>
): string | undefined {
  const normalized = normalizeLabel(cellLabel)
  if (!normalized) return undefined
  for (const [key, value] of labelToValue) {
    const keyNorm = normalizeLabel(key)
    if (
      normalized === keyNorm ||
      normalized.includes(keyNorm) ||
      keyNorm.includes(normalized)
    ) {
      return value
    }
  }
  return undefined
}

/**
 * Заполняет шаблон анкеты пациента данными формы.
 * Ищет в первом столбце (A) подписи полей и записывает значения во второй столбец (B).
 * Пустые блоки и остальная разметка шаблона не удаляются.
 *
 * @param templatePath — путь к файлу «Анкета пациента Opal Dental.xlsx»
 * @param formData — данные из формы
 * @returns Buffer заполненного xlsx для вложения в письмо
 */
export function fillPatientQuestionnaire(
  templatePath: string,
  formData: PatientFormData
): Buffer {
  const buf = readFileSync(templatePath)
  const workbook = XLSX.read(buf, { type: 'buffer' })
  const labelToValue = getLabelToValueMap(formData)

  for (const sheetName of workbook.SheetNames) {
    const sheet = workbook.Sheets[sheetName]
    if (!sheet || !sheet['!ref']) continue

    const range = XLSX.utils.decode_range(sheet['!ref'])
    const labelCol = 0
    const valueCol = 1

    for (let R = range.s.r; R <= range.e.r; R++) {
      const labelAddr = XLSX.utils.encode_cell({ r: R, c: labelCol })
      const valueAddr = XLSX.utils.encode_cell({ r: R, c: valueCol })
      const labelCell = sheet[labelAddr]
      const labelStr = labelCell && (labelCell as any).v != null ? String((labelCell as any).v) : ''
      const valueToWrite = findValueForLabel(labelStr, labelToValue)
      if (valueToWrite !== undefined) {
        if (!sheet[valueAddr]) {
          (sheet as any)[valueAddr] = { t: 's', v: valueToWrite }
        } else {
          ((sheet as any)[valueAddr] as any).v = valueToWrite
          ((sheet as any)[valueAddr] as any).t = 's'
        }
      }
    }
  }

  const out = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' })
  return Buffer.from(out as ArrayBuffer)
}
