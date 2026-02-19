<template>
  <div class="tariff-selection">
    <h2 class="tariff-selection__title">Выберите формат ЗубТура</h2>
    <p class="tariff-selection__subtitle">
      Все тарифы включают сопровождение и помощь на высшем уровне
    </p>

    <div class="tariff-selection__cards">

      <div class="tariff-card tariff-card--economy">
        <div class="tariff-card__header">
          <h3 class="tariff-card__title">Ligth</h3>
          <p class="tariff-card__subtitle">Для туристов нуждающихся только в стомотологичиских услугах</p>
        </div>
        <div class="tariff-card__price">от 200 $</div>
        <ul class="tariff-card__features">
          <li class="tariff-card__feature">
            <span class="tariff-card__check">✓</span>
            Консультация
          </li>
          <li class="tariff-card__feature">
            <span class="tariff-card__check">✓</span>
            Клиника
          </li>
          <li class="tariff-card__feature">
            <span class="tariff-card__check">✓</span>
            Трансферы
          </li>
          <li class="tariff-card__feature">
            <span class="tariff-card__check">✓</span>
            Сопровождение
          </li>
        </ul>
        <button class="tariff-card__button tariff-card__button--economy" @click="handleLightTariffClick">
          Выбрать Ligth > >
        </button>
      </div>
      <!-- Тариф ЭКОНОМ -->
      <div class="tariff-card tariff-card--economy">
        <div class="tariff-card__header">
          <h3 class="tariff-card__title">ЭКОНОМ</h3>
          <p class="tariff-card__subtitle">Лечение + отдых в Нячанге</p>
        </div>
        <div class="tariff-card__price">от 2 500 $</div>
        <ul class="tariff-card__features">
          <li class="tariff-card__feature">
            <span class="tariff-card__check">✓</span>
            Консультация
          </li>
          <li class="tariff-card__feature">
            <span class="tariff-card__check">✓</span>
            Клиника, 3* отель
          </li>
          <li class="tariff-card__feature">
            <span class="tariff-card__check">✓</span>
           1 экскурсия на выбор
          </li>
          <li class="tariff-card__feature">
            <span class="tariff-card__check">✓</span>
            Трансферы
          </li>
          <li class="tariff-card__feature">
            <span class="tariff-card__check">✓</span>
            Сопровождение
          </li>
        </ul>
        <button class="tariff-card__button tariff-card__button--economy" @click="handleEconomyTariffClick">
          Выбрать Эконом >
        </button>
      </div>

     

      <!-- Тариф БИЗНЕС -->
      <div class="tariff-card tariff-card--business">
        <div class="tariff-card__header">
          <h3 class="tariff-card__title">
            БИЗНЕС
            <span class="tariff-card__icon">⭐</span>
          </h3>
          <p class="tariff-card__subtitle">Комфортное лечение и отдых без лишних забот</p>
        </div>
        <div class="tariff-card__price">от 2 500 $</div>
        <ul class="tariff-card__features">
          <li class="tariff-card__feature">
            <span class="tariff-card__check">✓</span>
            Консультация
          </li>
          <li class="tariff-card__feature">
            <span class="tariff-card__check">✓</span>
трансфер, отель, клиника 
          </li>

          <li class="tariff-card__feature">
            <span class="tariff-card__check">✓</span>
            4* отель
          </li>
          <li class="tariff-card__feature">
            <span class="tariff-card__check">✓</span>
           3 экскурсия на выбор
          </li>
          <li class="tariff-card__feature">
            <span class="tariff-card__check">✓</span>
            сопровождение
          </li>
          <li class="tariff-card__feature">
            <span class="tariff-card__check">✓</span>
            Быстрые сроки
          </li>
        </ul>
        <button class="tariff-card__button tariff-card__button--business" @click="handleBusinessTariffClick">
          Выбрать Бизнес >
        </button>
      </div>

      <!-- Тариф ПРЕМИУМ — на всю ширину -->
      <div class="tariff-card tariff-card--premium tariff-card--full-width">
        <div class="tariff-card__header">
          <h3 class="tariff-card__title">
            ПРЕМИУМ
            <span class="tariff-card__icon">👑</span>
          </h3>
          <p class="tariff-card__subtitle">Все выгодные предложения</p>
        </div>
        <div class="tariff-card__price">от 335 $</div>
        <ul class="tariff-card__features">
          <li class="tariff-card__feature">
            <span class="tariff-card__check">✓</span>
            Консультация
          </li>
          <li class="tariff-card__feature">
            <span class="tariff-card__check">✓</span>
          помощь в приобритении билетов
          </li>
          <li class="tariff-card__feature">
            <span class="tariff-card__check">✓</span>
трансфер, отель, клиника, сопровождение 
          </li>
          <li class="tariff-card__feature">
            <span class="tariff-card__check">✓</span>
            5* отель
          </li>
          <li class="tariff-card__feature">
            <span class="tariff-card__check">✓</span>
           5 экскурсия на выбор
          </li>
          <li class="tariff-card__feature">
            <span class="tariff-card__check">✓</span>
            Максимальные быстрые сроки
          </li>
          <li class="tariff-card__feature">
            <span class="tariff-card__check">✓</span>
            сопровождение 24/7
          </li>

        </ul>
        <button class="tariff-card__button tariff-card__button--premium" @click="handlePremiumTariffClick">
          Выбрать Премиум >
        </button>
      </div>
    </div>

    <!-- Дополнительные преимущества -->
    <div class="tariff-selection__benefits">
      <div class="benefit-item">
        <span class="benefit-item__check">✓</span>
        <span class="benefit-item__text">Бесплатная консультация</span>
      </div>
      <div class="benefit-item">
        <span class="benefit-item__check">✓</span>
        <span class="benefit-item__text">Поддержка до и после лечения</span>
      </div>
      <div class="benefit-item">
        <span class="benefit-item__check">✓</span>
        <span class="benefit-item__text">Расчёт под вашу ситуацию</span>
      </div>
      <div class="benefit-item">
        <span class="benefit-item__check">✓</span>
        <span class="benefit-item__text">Окончательная цена</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  selectTariff: [tariff: string]
}>()

const handleBusinessTariffClick = () => {
  emit('selectTariff', 'бизнес')
}

const handleEconomyTariffClick = () => {
  emit('selectTariff', 'эконом')
}

const handlePremiumTariffClick = () => {
  emit('selectTariff', 'премиум')
}

const handleLightTariffClick = () => {
  emit('selectTariff', 'light')
}

</script>

<style scoped lang="scss">
.tariff-selection {
  &__title {
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 12px;
    color: $text-dark;

    @include desktop {
      font-size: 32px;
    }
  }

  &__subtitle {
    font-size: 16px;
    color: $text-light;
    text-align: center;
    margin-bottom: 32px;
    line-height: 1.5;

    @include desktop {
      font-size: 18px;
      margin-bottom: 40px;
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 32px;

    @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }

    @include desktop {
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      margin-bottom: 40px;
    }
  }

  &__benefits {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    padding-top: 24px;
    border-top: 1px solid #e0e0e0;

    @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }

    @include desktop {
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }
  }
}

.tariff-card {
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @include desktop {
    padding: 32px 24px;
  }

  &--full-width {
    grid-column: 1 / -1;
    padding: 32px 40px;

    @include desktop {
      .tariff-card__features {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 32px;
      }
    }
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  &--economy {
    background-color: #f5f5f5;
  }

  &--business {
    background-color: #faf5e6;
  }

  &--premium {
    background-color: #f5eacb;
    // color: $white;
  }

  &__header {
    margin-bottom: 20px;
  }

  &__title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 8px;

    @include desktop {
      font-size: 24px;
    }
  }

  &__icon {
    font-size: 18px;
  }

  &__subtitle {
    font-size: 14px;
    color: $text-light;
    line-height: 1.4;

    .tariff-card--premium & {
      color: $text-dark;
    }
  }

  &__price {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 24px;
    color: $text-dark;

    @include desktop {
      font-size: 32px;
    }

    .tariff-card--premium & {
      color: $text-dark;
    }
  }

  &__features {
    list-style: none;
    margin-bottom: 24px;
    flex: 1;
  }

  &__feature {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 12px;
    font-size: 15px;
    line-height: 1.5;

    @include desktop {
      font-size: 16px;
    }
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
    margin-top: 2px;

    .tariff-card--premium & {
      background-color: $success-color;
      color: $white;
    }
  }

  &__button {
    width: 100%;
    padding: 14px 24px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: auto;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    &:active {
      transform: translateY(0);
    }

    &--economy {
      background-color: #e0e0e0;
      color: $text-dark;

      &:hover {
        background-color: #d0d0d0;
      }
    }

    &--business {
      background-color: $accent-color;
      color: $white;

      &:hover {
        background-color: darken($accent-color, 10%);
      }
    }

    &--premium {
      background-color:  $accent-color;
      color: $white;

      &:hover {
        background-color: darken($accent-color, 10%);
      }
    }
  }
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;

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
