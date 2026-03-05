<template>
  <div class="consultation-modal">
    <h2 class="consultation-modal__title">Запись на консультацию</h2>
    <p class="consultation-modal__subtitle">
      Оставьте заявку или свяжитесь с нами напрямую
    </p>

    <div class="consultation-modal__content">
      <!-- Левая часть: Контакты -->
      <div class="consultation-modal__contacts">
        <h3 class="consultation-modal__section-title">Контакты ЗубТур Вьетнам</h3>
        
        <!-- Блок контактов 1 -->
        <div class="contact-block">
          <div class="contact-block__item">
            <span class="contact-block__icon contact-block__icon--phone">📞</span>
            <span class="contact-block__text">+84 888 09 44 58</span>
          </div>
          <div class="contact-block__item">
            <span class="contact-block__icon contact-block__icon--telegram">✈️</span>
            <span class="contact-block__text">t.me/zubtur</span>
          </div>
          <div class="contact-block__item">
            <span class="contact-block__icon contact-block__icon--email">✉️</span>
            <span class="contact-block__text">info@email.com</span>
          </div>
        </div>

        <!-- Блок контактов 2 -->
        <!-- <div class="contact-block">
          <div class="contact-block__item">
            <span class="contact-block__icon contact-block__icon--phone">📞</span>
            <span class="contact-block__text">+7 (999) 000-00-00</span>
          </div>
          <div class="contact-block__item">
            <span class="contact-block__icon contact-block__icon--telegram">✈️</span>
            <span class="contact-block__text">@name</span>
          </div>
          <div class="contact-block__item">
            <span class="contact-block__icon contact-block__icon--email">✉️</span>
            <span class="contact-block__text">info@email.com</span>
          </div>
        </div> -->
      </div>

      <!-- Правая часть: Форма -->
      <div class="consultation-modal__form-section">
        <h3 class="consultation-modal__section-title">
          Оставьте заявку — мы перезвоним!
        </h3>
        
        <form @submit.prevent="handleSubmit" class="consultation-form">
          <div class="consultation-form__field">
            <input
              id="consultation-name"
              v-model="form.name"
              type="text"
              class="consultation-form__input"
              placeholder="Ваше имя"
              required
            />
          </div>
          
          <div class="consultation-form__field">
            <input
              id="consultation-phone"
              v-model="form.phone"
              type="tel"
              class="consultation-form__input"
              placeholder="+7 (999) 000-00-00"
              required
            />
          </div>

          <div class="consultation-form__field">
            <input
              id="consultation-email"
              v-model="form.email"
              type="email"
              class="consultation-form__input"
              placeholder="Эл. почта"
              required
            />
          </div>

          <p v-if="submitError" class="consultation-form__error">{{ submitError }}</p>
          <button
            type="submit"
            class="consultation-form__submit"
            :disabled="isSubmitting"
          >
            {{ isSubmitting ? 'Отправка…' : 'Записаться' }}
          </button>
        </form>

        <!-- Преимущества -->
        <div class="consultation-benefits">
          <div class="consultation-benefit">
            <span class="consultation-benefit__check">✓</span>
            <span class="consultation-benefit__text">Это бесплатно!</span>
          </div>
          <div class="consultation-benefit">
            <span class="consultation-benefit__check">✓</span>
            <span class="consultation-benefit__text">Ответим в течение дня</span>
          </div>
          <div class="consultation-benefit">
            <span class="consultation-benefit__check">✓</span>
            <span class="consultation-benefit__text">Ваши данные конфиденциальны</span>
          </div>
        </div>

        <!-- Политика конфиденциальности -->
        <p class="consultation-modal__privacy">
          Нажимая кнопку, вы соглашаетесь с
          <a href="#" class="consultation-modal__privacy-link">политикой конфиденциальности</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  phone: '',
  email: ''
})

const { sendConsultation } = useFormEmail()
const isSubmitting = ref(false)
const submitError = ref('')

const handleSubmit = async () => {
  submitError.value = ''
  isSubmitting.value = true
  try {
    const result = await sendConsultation({
      name: form.name,
      phone: form.phone,
      email: form.email
    })
    if (result.success) {
      alert('Спасибо! Мы свяжемся с вами в ближайшее время.')
      form.name = ''
      form.phone = ''
      form.email = ''
    } else {
      submitError.value = result.error || 'Не удалось отправить заявку. Попробуйте позже.'
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped lang="scss">
.consultation-modal {
  &__title {
    font-size: $modal-title-font-size;
    font-weight: 700;
    text-align: center;
    margin-bottom: 12px;
    color: $text-dark;

    @include desktop {
      font-size: $modal-title-font-size + 2px;
    }
  }

  &__subtitle {
    font-size: $modal-subtitle-font-size-mobile;
    color: $text-light;
    text-align: center;
    margin-bottom: 32px;
    line-height: 1.5;

    @include desktop {
      font-size: $modal-subtitle-font-size;
      margin-bottom: 40px;
    }
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;

    @include desktop {
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }
  }

  &__section-title {
    font-size: $modal-heading-font-size-mobile;
    font-weight: 700;
    margin-bottom: 24px;
    color: $text-dark;

    @include desktop {
      font-size: $modal-heading-font-size;
      margin-bottom: 28px;
    }
  }

  &__privacy {
    font-size: $modal-caption-font-size-mobile;
    color: $text-light;
    text-align: center;
    margin-top: 20px;
    line-height: 1.5;

    @include desktop {
      font-size: $modal-caption-font-size;
      margin-top: 24px;
    }
  }

  &__privacy-link {
    color: $primary-color;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: darken($primary-color, 10%);
      text-decoration: underline;
    }
  }
}

.contact-block {
  background-color: $bg-light;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__icon {
    font-size: 20px;
    width: 24px;
    text-align: center;
    flex-shrink: 0;

    &--phone {
      color: $success-color;
    }

    &--telegram {
      color: $primary-color;
    }

    &--email {
      color: $text-light;
    }
  }

  &__text {
    font-size: $modal-body-font-size;
    color: $text-dark;
    line-height: 1.5;
  }
}

.consultation-form {
  &__error {
    color: #c62828;
    font-size: $modal-caption-font-size;
    margin-bottom: 12px;
  }

  &__field {
    margin-bottom: 16px;
  }

  &__input {
    width: 100%;
    padding: 14px 16px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: $modal-body-font-size;
    font-family: inherit;
    transition: border-color 0.3s ease;
    background-color: $white;

    &:focus {
      outline: none;
      border-color: $primary-color;
    }

    &::placeholder {
      color: #999;
    }
  }

  &__submit {
    width: 100%;
    padding: 16px 24px;
    background-color: $accent-color;
    color: $white;
    border: none;
    border-radius: 8px;
    font-size: $modal-heading-font-size-mobile;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 8px;

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

.consultation-benefits {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.consultation-benefit {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: $modal-body-font-size-mobile;

  @include desktop {
    font-size: 16px;
  }

  &__check {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: $success-color;
    color: $white;
    font-size: 12px;
    font-weight: 700;
    flex-shrink: 0;
  }

  &__text {
    color: $text-dark;
    line-height: 1.5;
  }
}
</style>
