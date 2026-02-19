<template>
  <div class="patient-form-modal">
    <h2 class="patient-form-modal__title">
      Форма предварительного расчёта стоимости лечения – OPAL DENTAL
    </h2>

    <form @submit.prevent="handleSubmit" class="patient-form">
      <!-- 1. ИНФОРМАЦИЯ О ПАЦИЕНТЕ -->
      <section class="patient-form__section">
        <h3 class="patient-form__section-title">
          1) ИНФОРМАЦИЯ О ПАЦИЕНТЕ (обязательно)
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

      <!-- 2. ИНФОРМАЦИЯ О СОСТОЯНИИ ЗДОРОВЬЯ -->
      <section class="patient-form__section">
        <h3 class="patient-form__section-title">
          2) ИНФОРМАЦИЯ О СОСТОЯНИИ ЗДОРОВЬЯ
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

      <!-- 3. ПЛАНИРУЕМЫЕ СТОМАТОЛОГИЧЕСКИЕ УСЛУГИ В OPAL DENTAL -->
      <section class="patient-form__section">
        <h3 class="patient-form__section-title">
          3) ПЛАНИРУЕМЫЕ СТОМАТОЛОГИЧЕСКИЕ УСЛУГИ В OPAL DENTAL
        </h3>

        <div class="patient-form__services">
          <div class="patient-form__services-header">
            <span class="patient-form__services-col patient-form__services-col--service">Услуга</span>
            <span class="patient-form__services-col patient-form__services-col--comments">Комментарии</span>
            <span class="patient-form__services-col patient-form__services-col--action"></span>
          </div>
          <div
            v-for="(service, index) in form.services"
            :key="index"
            class="patient-form__services-row"
          >
            <div class="patient-form__services-col patient-form__services-col--service" data-label="Услуга">
              <select
                v-model="service.name"
                class="patient-form__input"
              >
                <option value="" disabled>Выберите услугу</option>
                <option
                  v-for="serviceOption in availableServices"
                  :key="serviceOption"
                  :value="serviceOption"
                >
                  {{ serviceOption }}
                </option>
              </select>
            </div>
            <div class="patient-form__services-col patient-form__services-col--comments" data-label="Комментарии">
              <input
                v-model="service.comments"
                type="text"
                class="patient-form__input"
                placeholder="—"
              />
            </div>
            <div class="patient-form__services-col patient-form__services-col--action">
              <button
                type="button"
                class="patient-form__remove-btn"
                :disabled="form.services.length <= 1"
                :aria-label="'Удалить услугу ' + (index + 1)"
                @click="removeService(index)"
              >
                −
              </button>
            </div>
          </div>
        </div>

        <button type="button" class="patient-form__add-service-btn" @click="addService">
          + Добавить услугу
        </button>

        <p class="patient-form__disclaimer">
          Данный расчёт является предварительным и основан на информации, предоставленной пациентом.
          Окончательная стоимость и продолжительность лечения могут измениться после очного осмотра врача и рентгенологического обследования (при необходимости).
        </p>
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
import { reactive, ref } from 'vue'
import { useFormEmail } from '../composables/useFormEmail'

interface Service {
  name: string
  comments: string
}

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
  services: Service[]
}

const availableServices = [
  'удаление зуба',
  'лечение кариеса',
  'имплант'
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
  services: [
    {
      name: '',
      comments: ''
    }
  ]
})

const addService = () => {
  form.services.push({
    name: '',
    comments: ''
  })
}

const removeService = (index: number) => {
  if (form.services.length > 1) {
    form.services.splice(index, 1)
  }
}

const { sendPatientForm } = useFormEmail()
const isSubmitting = ref(false)
const submitError = ref('')

const handleSubmit = async () => {
  submitError.value = ''
  isSubmitting.value = true
  try {
    const result = await sendPatientForm(form)
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

  &__services {
    margin-top: 24px;
    overflow-x: auto;
  }

  &__services-header,
  &__services-row {
    display: grid;
    grid-template-columns: 1fr 1fr 40px;
    gap: 8px;
    align-items: center;
    padding: 12px 0;

    @include mobile {
      grid-template-columns: 1fr;
      gap: 12px;
    }
  }

  &__services-header {
    font-weight: 600;
    font-size: 13px;
    color: $text-dark;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 12px;

    @include mobile {
      display: none;
    }
  }

  &__services-row {
    border-bottom: 1px solid #f0f0f0;
    padding: 16px 0;

    @include mobile {
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 16px;
    }
  }

  &__services-col {
    @include mobile {
      display: flex;
      flex-direction: column;
      gap: 4px;

      &::before {
        content: attr(data-label);
        font-size: 12px;
        font-weight: 600;
        color: $text-light;
        margin-bottom: 4px;
      }
    }

    &--code {
      @include mobile {
        &::before {
          content: 'Код услуги:';
        }
      }
    }

    &--service {
      @include mobile {
        &::before {
          content: 'Услуга:';
        }
      }
    }

    &--quantity {
      @include mobile {
        &::before {
          content: 'Кол-во:';
        }
      }
    }

    &--price {
      @include mobile {
        &::before {
          content: 'Цена за единицу (VND):';
        }
      }
    }

    &--sum {
      @include mobile {
        &::before {
          content: 'Сумма:';
        }
      }
    }

    &--discount {
      @include mobile {
        &::before {
          content: 'Скидка (VND):';
        }
      }
    }

    &--topay {
      @include mobile {
        &::before {
          content: 'К оплате:';
        }
      }
    }

    &--visits {
      @include mobile {
        &::before {
          content: 'Кол-во визитов:';
        }
      }
    }

    &--comments {
      @include mobile {
        &::before {
          content: 'Комментарии:';
        }
      }
    }

    &--action {
      @include mobile {
        &::before {
          content: '';
        }
      }
    }
  }

  &__add-service-btn {
    margin-top: 16px;
    padding: 10px 20px;
    background-color: #f5f5f5;
    border: 2px dashed #ccc;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    color: $text-dark;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #e8e8e8;
      border-color: $primary-color;
      color: $primary-color;
    }
  }

  &__remove-btn {
    width: 32px;
    height: 32px;
    border: none;
    background-color: #ffebee;
    color: #c62828;
    border-radius: 50%;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover:not(:disabled) {
      background-color: #ffcdd2;
      transform: scale(1.1);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  &__total {
    margin-top: 32px;
    padding: 24px;
    background-color: #f9f9f9;
    border-radius: 12px;
  }

  &__total-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    font-size: 16px;

    &:last-child {
      margin-bottom: 0;
    }

    &--final {
      margin-top: 24px;
      padding-top: 24px;
      border-top: 2px solid #e0e0e0;
      font-weight: 700;
      font-size: 18px;
    }
  }

  &__total-label {
    color: $text-dark;
  }

  &__total-value {
    font-weight: 600;
    color: $text-dark;

    &--final {
      font-size: 20px;
      color: $accent-color;
    }
  }

  &__disclaimer {
    margin-top: 24px;
    font-size: 13px;
    color: $text-light;
    line-height: 1.6;
    font-style: italic;
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
