<template>
  <section id="what-included" class="section">
    <div class="container">
      <h2 class="section__title">Что входит под ключ</h2>
      <p class="section__subtitle">
        Мы организуем ваше лечение и отдых во Вьетнаме под ключ. Вам останется только наслаждаться поездкой.
      </p>
      <div class="what-included__cards">
        <div class="what-included__card">
          <div class="what-included__icon">
            <!-- Иконка зуба с чатом -->
            <div class="icon-placeholder">💬🦷</div>
          </div>
          <h3 class="what-included__card-title">Онлайн-консультация</h3>
          <p class="what-included__card-text">
            Предварительно обсудим задачи и план лечения
          </p>
        </div>
        <div class="what-included__card">
          <div class="what-included__icon">
            <!-- Иконка зуба с лупой -->
            <div class="icon-placeholder">🔍🦷</div>
          </div>
          <h3 class="what-included__card-title">Диагностика зубов</h3>
          <p class="what-included__card-text">
            Детальная диагностика и план лечения
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.what-included {
  &__cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
    max-width: 800px;
    margin: 0 auto;

    @include desktop {
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
    }
  }

  &__card {
    background: $white;
    border-radius: 16px;
    padding: 40px 32px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    text-align: center;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }
  }

  &__icon {
    width: 100px;
    height: 100px;
    margin: 0 auto 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%);
    border-radius: 50%;
  }

  &__card-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
    color: $text-dark;
  }

  &__card-text {
    font-size: 16px;
    color: $text-light;
    line-height: 1.6;
  }
}

.icon-placeholder {
  font-size: 40px;
}
</style>
