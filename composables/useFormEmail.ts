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
  /** Необязательный блок услуг (сейчас не используется в форме) */
  services?: Array<{
    name: string
    comments: string
  }>
  tariff: string
}

export interface FormEmailResult {
  success: boolean
  error?: string
}

export function useFormEmail() {
  /**
   * Отправить заявку «Запись на консультацию» на почту.
   */
  async function sendConsultation(data: ConsultationFormData): Promise<FormEmailResult> {
    try {
      const res = await (globalThis as any).$fetch('/api/send-consultation', {
        method: 'POST',
        body: data
      })
      if (res?.success) return { success: true }
      return { success: false, error: res?.error || 'Не удалось отправить заявку. Попробуйте позже.' }
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : 'Не удалось отправить заявку. Попробуйте позже.'
      return { success: false, error: message }
    }
  }

  /**
   * Отправить анкету пациента на почту.
   */
  async function sendPatientForm(data: PatientFormData): Promise<FormEmailResult> {
    try {
      const res = await (globalThis as any).$fetch('/api/send-patient-form', {
        method: 'POST',
        body: data
      })
      if (res?.success) return { success: true }
      return { success: false, error: res?.error || 'Не удалось отправить заявку. Попробуйте позже.' }
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : 'Не удалось отправить заявку. Попробуйте позже.'
      return { success: false, error: message }
    }
  }

  return {
    sendConsultation,
    sendPatientForm
  }
}
