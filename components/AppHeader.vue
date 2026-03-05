<template>
  <header class="header">
    <div class="container">
      <nav class="header__nav">
        <div class="header__logo">
          <NuxtLink to="/" class="header__logo-link">
            <img
              src="/images/LOGO.svg"
              alt="ЗубТур Вьетнам"
              class="header__logo-image"
            />
          </NuxtLink>
          <h1 class="header__title">
            <span class="header__title_first">ЗубТур</span>
            <span class="header__title_last">Вьетнам</span>
          </h1>
        </div>
        <ul class="header__buttons">
          <li>
            <button
              class="btn btn--primary header__cta"
              @click="openTariffModalFromHeader"
            >
              Тарифы
            </button>
          </li>
          <li>
            <button
              class="btn btn--primary header__cta"
              @click="openPrecalcModalFromHeader"
            >
              Предварительный расчет
            </button>
          </li>
          <li>
            <button class="btn btn--primary header__cta">Контакты</button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const openTariffModalFromHeader = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-tariff-modal'))
  }
}

const openPrecalcModalFromHeader = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-patient-form-modal'))
  }
}
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 16px 0;

  &__title {
    &_first {
      color: $primary-color;
    }

    &_last {
      color: $accent-color;
    }
  }

  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__buttons {
    display: flex;
    gap: 10px;

    > li {
      list-style-type: none;
    }
  }

  &__logo {
    display: flex;
    align-items: center;

    &-link {
      display: inline-flex;
      align-items: center;
      text-decoration: none;
    }

    &-image {
      display: block;
      height: 80px;
      width: auto;
    }
  }

  &__menu {
    display: none;
    list-style: none;
    gap: 32px;

    @include desktop {
      display: flex;
    }

    li {
      a {
        text-decoration: none;
        color: $text-dark;
        font-weight: 500;
        transition: color 0.3s ease;

        &:hover {
          color: $primary-color;
        }
      }
    }
  }

  &__cta {
    padding: 10px;
    font-size: 14px;
  }
}
</style>
