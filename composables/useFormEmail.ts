/**
 * Отправка данных форм на почту через Web3Forms.
 * Работает на статическом хостинге (в т.ч. GitHub Pages) без своего бэкенда.
 * Бесплатно: 250 отправок в месяц.
 *
 * Настройка: зарегистрируйтесь на https://web3forms.com, получите Access Key
 * и укажите в .env: NUXT_PUBLIC_WEB3FORMS_ACCESS_KEY=ваш_ключ
 */

export interface ConsultationFormData {
  name: string
  phone: string
  email: string
}

export interface PatientFormData {
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
  services: Array<{
    name: string
    comments: string
  }>
}

export interface FormEmailResult {
  success: boolean
  error?: string
}

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

export function useFormEmail() {
  const config = useRuntimeConfig().public
  const accessKey = config.web3formsAccessKey as string

  /**
   * Отправить заявку «Запись на консультацию» на почту.
   */
  async function sendConsultation(data: ConsultationFormData): Promise<FormEmailResult> {
    if (!accessKey) {
      return { success: false, error: 'Форма не настроена: укажите NUXT_PUBLIC_WEB3FORMS_ACCESS_KEY' }
    }

    return sendToWeb3Forms(accessKey, {
      subject: 'Запись на консультацию — ЗубТур',
      type: 'consultation',
      name: data.name,
      phone: data.phone,
      email: data.email
    })
  }

  /**
   * Отправить анкету пациента на почту.
   */
  async function sendPatientForm(data: PatientFormData): Promise<FormEmailResult> {
    if (!accessKey) {
      return { success: false, error: 'Форма не настроена: укажите NUXT_PUBLIC_WEB3FORMS_ACCESS_KEY' }
    }

    return sendToWeb3Forms(accessKey, {
      subject: 'Анкета пациента / расчёт стоимости — OPAL DENTAL',
      type: 'patient_form',
      ...flattenForEmail(data)
    })
  }

  return {
    sendConsultation,
    sendPatientForm
  }
}

interface Web3FormsResponse {
  success: boolean
  message?: string
}

async function sendToWeb3Forms(accessKey: string, fields: Record<string, unknown>): Promise<FormEmailResult> {
  try {
    const res = await $fetch<Web3FormsResponse>(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: {
        access_key: accessKey,
        ...fields
      }
    })

    if (res.success) {
      return { success: true }
    }
    return {
      success: false,
      error: res.message || 'Не удалось отправить заявку'
    }
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'Ошибка отправки'
    return { success: false, error: message }
  }
}

/** Преобразует вложенную структуру анкеты в плоский объект для письма. */
function flattenForEmail(data: PatientFormData): Record<string, string | number> {
  const flat: Record<string, string | number> = {}

  Object.entries(data.patientInfo || {}).forEach(([k, v]) => {
    flat[`patient_${k}`] = String(v ?? '')
  })
  Object.entries(data.healthInfo || {}).forEach(([k, v]) => {
    flat[`health_${k}`] = String(v ?? '')
  })
  ;(data.services || []).forEach((s, i) => {
    flat[`service_${i + 1}_name`] = s.name || ''
    flat[`service_${i + 1}_comments`] = s.comments || ''
  })

  return flat
}
