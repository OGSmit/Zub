<template>
  <section class="hero">
    <div class="container">
      <div class="hero__content">
        <div class="hero__text">
          <h1 class="hero__title">
            За красивой улыбкой в Нячанг!
          </h1>
          <p class="hero__subtitle">
            Лечение зубов и отдых у моря под ключ
          </p>
          <ul class="hero__features">
            <li class="hero__feature">
              <span class="hero__checkmark">✓</span>
              Курортный город у моря
            </li>
            <li class="hero__feature">
              <span class="hero__checkmark">✓</span>
              Современная стоматология
            </li>
            <li class="hero__feature">
              <span class="hero__checkmark">✓</span>
              Экономия до 50%
            </li>
            <li class="hero__feature">
              <span class="hero__checkmark">✓</span>
              Сопровождение на русском языке
            </li>
          </ul>
          <button class="btn btn--primary hero__cta">
            Получить расчет ЗубТура
          </button>
          <!-- <p class="hero__response-time">
            Ответим в течение 15 минут
          </p> -->
        </div>
        <div class="hero__images">
          <div class="hero__main-image">
            <!-- Здесь будет основное изображение пары -->
            <div class="hero__image-placeholder">
              <span>Основное изображение</span>
            </div>
          </div>
          <div class="hero__inset-image">
            <!-- Здесь будет круглое изображение стоматолога -->
            <div class="hero__inset-placeholder">
              <span>Изображение стоматолога</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.hero {
  padding-top: 120px;
  padding-bottom: 80px;
  background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%);
  min-height: 600px;
  display: flex;
  align-items: center;

  @include desktop {
    padding-top: 140px;
    min-height: 700px;
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    align-items: center;

    @include desktop {
      grid-template-columns: 1fr 1fr;
      gap: 60px;
    }
  }

  &__text {
    @include desktop {
      order: 1;
    }
  }

  &__title {
    font-size: 36px;
    font-weight: 700;
    color: $text-dark;
    margin-bottom: 20px;
    line-height: 1.2;

    @include desktop {
      font-size: 48px;
      margin-bottom: 24px;
    }
  }

  &__subtitle {
    font-size: 20px;
    color: $text-light;
    margin-bottom: 32px;

    @include desktop {
      font-size: 24px;
      margin-bottom: 40px;
    }
  }

  &__features {
    list-style: none;
    margin-bottom: 32px;

    @include desktop {
      margin-bottom: 40px;
    }
  }

  &__feature {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 18px;
    margin-bottom: 16px;
    color: $text-dark;

    @include desktop {
      font-size: 20px;
    }
  }

  &__checkmark {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background-color: $success-color;
    color: $white;
    border-radius: 50%;
    font-weight: 700;
    flex-shrink: 0;
  }

  &__cta {
    margin-bottom: 16px;
  }

  &__response-time {
    font-size: 14px;
    color: $text-light;
  }

  &__images {
    position: relative;
    @include desktop {
      order: 2;
    }
  }

  &__main-image {
    width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  }

  &__image-placeholder {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #BBDEFB 0%, #90CAF9 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: $white;
    font-size: 18px;
    font-weight: 600;
  }

  &__inset-image {
    position: absolute;
    bottom: -20px;
    right: -20px;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    overflow: hidden;
    border: 6px solid $white;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);

    @include mobile {
      width: 120px;
      height: 120px;
      bottom: -10px;
      right: -10px;
    }
  }

  &__inset-placeholder {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #81C784 0%, #66BB6A 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: $white;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    padding: 10px;
  }
}
</style>
