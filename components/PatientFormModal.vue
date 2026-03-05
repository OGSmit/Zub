<template>
  <div class="patient-form-modal">
    <h2 class="patient-form-modal__title">
      Форма предварительного расчёта стоимости лечения – OPAL DENTAL
    </h2>

    <form @submit.prevent="handleSubmit" class="patient-form">
      <!-- 1. ВЫБОР ТАРИФА -->
      <section class="patient-form__section">
        <h3 class="patient-form__section-title">
          1) ВЫБОР ТАРИФА
        </h3>

        <div class="patient-form__field">
          <label class="patient-form__label">Выберите тариф *</label>
          <div class="patient-form__radio-group">
            <label
              v-for="tariff in availableTariffs"
              :key="tariff"
              class="patient-form__radio"
            >
              <input
                v-model="form.tariff"
                type="radio"
                :value="tariff"
                required
              />
              <span>{{ tariff }}</span>
            </label>
          </div>
        </div>
      </section>

      <!-- 2. ИНФОРМАЦИЯ О ПАЦИЕНТЕ -->
      <section class="patient-form__section">
        <h3 class="patient-form__section-title">
          2) ИНФОРМАЦИЯ О ПАЦИЕНТЕ (обязательно)
        </h3>

        <div class="patient-form__row">
          <div class="patient-form__field">
            <label for="fullName" class="patient-form__label">ФИО *</label>
            <input
              id="fullName"
              v-model="form.patientInfo.fullName"
              type="text"
              class="patient-form__input"
              placeholder="Введите ФИО"
              required
            />
          </div>

          <div class="patient-form__field">
            <label for="birthDate" class="patient-form__label">Дата рождения *</label>
            <input
              id="birthDate"
              v-model="form.patientInfo.birthDate"
              type="date"
              class="patient-form__input"
              required
            />
          </div>
        </div>

        <div class="patient-form__row">
          <div class="patient-form__field">
            <label for="phone" class="patient-form__label">Телефон *</label>
            <input
              id="phone"
              v-model="form.patientInfo.phone"
              type="tel"
              class="patient-form__input"
              placeholder="+7 (999) 000-00-00"
              required
            />
          </div>

          <div class="patient-form__field">
            <label for="email" class="patient-form__label">Email *</label>
            <input
              id="email"
              v-model="form.patientInfo.email"
              type="email"
              class="patient-form__input"
              placeholder="example@email.com"
              required
            />
          </div>
        </div>

        <div class="patient-form__row">
          <div class="patient-form__field">
            <label for="nationality" class="patient-form__label">Национальность</label>
            <input
              id="nationality"
              v-model="form.patientInfo.nationality"
              type="text"
              class="patient-form__input"
              placeholder="Введите национальность"
            />
          </div>

          <div class="patient-form__field">
            <label for="submissionDate" class="patient-form__label">Дата отправки</label>
            <input
              id="submissionDate"
              v-model="form.patientInfo.submissionDate"
              type="date"
              class="patient-form__input"
            />
          </div>
        </div>

        <div class="patient-form__field">
          <label for="complaints" class="patient-form__label">Основные жалобы / потребности</label>
          <textarea
            id="complaints"
            v-model="form.patientInfo.complaints"
            class="patient-form__textarea"
            rows="4"
            placeholder="Опишите ваши жалобы и потребности"
          ></textarea>
        </div>
      </section>

      <!-- 3. ИНФОРМАЦИЯ О СОСТОЯНИИ ЗДОРОВЬЯ -->
      <section class="patient-form__section">
        <h3 class="patient-form__section-title">
          3) ИНФОРМАЦИЯ О СОСТОЯНИИ ЗДОРОВЬЯ
          <span class="patient-form__section-subtitle">
            (помогает врачу более точно рассчитать план и стоимость лечения)
          </span>
        </h3>

        <div class="patient-form__field">
          <label for="chronicDiseases" class="patient-form__label">
            Есть ли у вас хронические заболевания / принимаете ли вы какие-либо лекарства?
          </label>
          <textarea
            id="chronicDiseases"
            v-model="form.healthInfo.chronicDiseases"
            class="patient-form__textarea"
            rows="3"
            placeholder="Укажите хронические заболевания и принимаемые лекарства"
          ></textarea>
        </div>

        <div class="patient-form__field">
          <label for="allergies" class="patient-form__label">
            Есть ли у вас аллергия на лекарства или анестезию?
          </label>
          <textarea
            id="allergies"
            v-model="form.healthInfo.allergies"
            class="patient-form__textarea"
            rows="3"
            placeholder="Укажите аллергии, если есть"
          ></textarea>
        </div>

        <div class="patient-form__field">
          <label class="patient-form__label">Курите ли вы?</label>
          <div class="patient-form__radio-group">
            <label class="patient-form__radio">
              <input
                v-model="form.healthInfo.smoking"
                type="radio"
                value="yes"
              />
              <span>Да</span>
            </label>
            <label class="patient-form__radio">
              <input
                v-model="form.healthInfo.smoking"
                type="radio"
                value="no"
              />
              <span>Нет</span>
            </label>
          </div>
        </div>

        <div class="patient-form__field">
          <label class="patient-form__label">
            (Для женщин) Беременность или период грудного вскармливания (при наличии)
          </label>
          <div class="patient-form__radio-group">
            <label class="patient-form__radio">
              <input
                v-model="form.healthInfo.pregnancy"
                type="radio"
                value="yes"
              />
              <span>Да</span>
            </label>
            <label class="patient-form__radio">
              <input
                v-model="form.healthInfo.pregnancy"
                type="radio"
                value="no"
              />
              <span>Нет</span>
            </label>
            <label class="patient-form__radio">
              <input
                v-model="form.healthInfo.pregnancy"
                type="radio"
                value="not-applicable"
              />
              <span>Не применимо</span>
            </label>
          </div>
        </div>
      </section>

      <!-- Кнопка отправки -->
      <div class="patient-form__submit-section">
        <p v-if="submitError" class="patient-form__error">{{ submitError }}</p>
        <button
          type="submit"
          class="patient-form__submit"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? 'Отправка…' : 'Отправить заявку' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { useFormEmail } from '../composables/useFormEmail'

interface Props {
  initialTariff?: string
}

const props = withDefaults(defineProps<Props>(), {
  initialTariff: ''
})

interface FormData {
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

const availableTariffs = [
  'light',
  'эконом',
  'бизнес',
  'премиум'
]

const form = reactive<FormData>({
  patientInfo: {
    fullName: '',
    birthDate: '',
    phone: '',
    email: '',
    nationality: '',
    submissionDate: new Date().toISOString().split('T')[0],
    complaints: ''
  },
  healthInfo: {
    chronicDiseases: '',
    allergies: '',
    smoking: '',
    pregnancy: 'not-applicable'
  },
  tariff: ''
})

// Устанавливаем начальный тариф при изменении prop
watch(() => props.initialTariff, (newTariff) => {
  if (newTariff && availableTariffs.includes(newTariff)) {
    form.tariff = newTariff
  }
}, { immediate: true })

const { sendPatientForm } = useFormEmail()
const isSubmitting = ref(false)
const submitError = ref('')

const handleSubmit = async () => {
  submitError.value = ''
  isSubmitting.value = true
  try {
    const result = await sendPatientForm({
      ...(form as any),
      services: []
    })
    if (result.success) {
      alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.')
    } else {
      submitError.value = result.error || 'Не удалось отправить заявку. Попробуйте позже.'
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped lang="scss">
.patient-form-modal {
  &__title {
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 32px;
    color: $text-dark;
    line-height: 1.3;

    @include mobile {
      font-size: 20px;
      margin-bottom: 24px;
    }
  }
}

.patient-form {
  &__section {
    margin-bottom: 40px;
    padding-bottom: 32px;
    border-bottom: 1px solid #e0e0e0;

    &:last-of-type {
      border-bottom: none;
    }

    @include mobile {
      margin-bottom: 32px;
      padding-bottom: 24px;
    }
  }

  &__section-title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 24px;
    color: $text-dark;

    @include mobile {
      font-size: 16px;
      margin-bottom: 20px;
    }
  }

  &__section-subtitle {
    font-size: 14px;
    font-weight: 400;
    color: $text-light;
    display: block;
    margin-top: 4px;
  }

  &__row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    margin-bottom: 16px;

    @include tablet {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__field {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__label {
    display: block;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
    color: $text-dark;
  }

  &__input {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 16px;
    font-family: inherit;
    transition: border-color 0.3s ease;
    background-color: $white;

    &:focus {
      outline: none;
      border-color: $primary-color;
    }

    &--small {
      padding: 8px 12px;
      font-size: 14px;
    }

    &--inline {
      width: 100px;
      display: inline-block;
      margin: 0 12px;
    }
  }

  select.patient-form__input {
    cursor: pointer;
    appearance: none;
    background-color: $white;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    padding-right: 40px;
    color: $text-dark;

    &:focus {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%232196f3' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
    }

    option {
      background-color: $white;
      color: $text-dark;
      padding: 8px 12px;

      &:hover {
        background-color: #f5f5f5;
      }

      &:checked,
      &:focus {
        background-color: #e3f2fd;
        color: $text-dark;
      }

      &:disabled {
        color: #999;
        background-color: $white;
      }
    }
  }

  &__textarea {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 16px;
    font-family: inherit;
    transition: border-color 0.3s ease;
    background-color: $white;
    resize: vertical;

    &:focus {
      outline: none;
      border-color: $primary-color;
    }
  }

  &__radio-group {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
  }

  &__radio {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 16px;
    color: $text-dark;

    input[type="radio"] {
      width: 18px;
      height: 18px;
      cursor: pointer;
    }
  }


  &__submit-section {
    margin-top: 40px;
    text-align: center;
  }

  &__error {
    color: #c62828;
    font-size: 14px;
    margin-bottom: 12px;
  }

  &__submit {
    padding: 16px 48px;
    background-color: $accent-color;
    color: $white;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: darken($accent-color, 10%);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    &:active {
      transform: translateY(0);
    }
  }
}
</style>
