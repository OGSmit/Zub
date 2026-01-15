<template>
  <section id="how-it-works" class="section">
    <div class="container">
      <h2 class="section__title">
        Как проходят <span class="section__title--highlight">ЗубТур</span>
      </h2>
      <div class="how-it-works__cards">
        <div class="how-it-works__card">
          <div class="how-it-works__icon">
            <!-- Иконка зуба с чатом -->
            <div class="icon-placeholder">💬🦷</div>
          </div>
          <h3 class="how-it-works__card-title">Онлайн-консультация</h3>
          <p class="how-it-works__card-text">
            Предварительно обсудим задачи и план лечения
          </p>
        </div>
        <div class="how-it-works__card">
          <div class="how-it-works__badge">Самый популярный</div>
          <div class="how-it-works__icon">
            <!-- Иконка пальмы и снежинки -->
            <div class="icon-placeholder">🌴❄️</div>
          </div>
          <h3 class="how-it-works__card-title">Поездка и лечение</h3>
          <p class="how-it-works__card-text">
            Полетите в Нячанг, где вас встретит координатор
          </p>
        </div>
        <div class="how-it-works__card">
          <div class="how-it-works__icon">
            <!-- Иконка пальмы и кокоса -->
            <div class="icon-placeholder">🌴🥥</div>
          </div>
          <h3 class="how-it-works__card-title">Отдых в Нячанге</h3>
          <p class="how-it-works__card-text">
            После лечения наслаждайтесь морем и экскурсиями
          </p>
        </div>
      </div>
      <div class="how-it-works__cta">
        <button class="btn btn--secondary">
          Подобрать формат ЗубТура >
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.how-it-works {
  &__cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
    margin-bottom: 40px;

    @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }

    @include desktop {
      grid-template-columns: repeat(3, 1fr);
      gap: 40px;
      margin-bottom: 60px;
    }
  }

  &__card {
    background: $white;
    border-radius: 16px;
    padding: 32px 24px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    text-align: center;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    }
  }

  &__badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background-color: $accent-color;
    color: $white;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
  }

  &__icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%);
    border-radius: 50%;
  }

  &__card-title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 16px;
    color: $text-dark;
  }

  &__card-text {
    font-size: 16px;
    color: $text-light;
    line-height: 1.6;
  }

  &__cta {
    text-align: center;
  }
}

.icon-placeholder {
  font-size: 32px;
}
</style>
