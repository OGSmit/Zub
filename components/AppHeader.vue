<template>
  <header class="header">
    <div class="container">
      <nav class="header__nav">
        <div class="header__logo">
          <NuxtLink to="/">ЗубТур <span>Вьетнам</span></NuxtLink>
        </div>
        <ul class="header__menu">
          <li><a href="#how-it-works">Как это работает</a></li>
          <li><a href="#reviews">Отзывы</a></li>
          <li><a href="#what-included">Что входит</a></li>
        </ul>
        <!-- <button class="btn btn--primary header__cta">
          Получить расчет
        </button> -->
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
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

  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    font-size: 24px;
    font-weight: 700;
    color: $primary-color;

    a {
      text-decoration: none;
      color: inherit;
    }

    &:deep(span) {
      color: red;
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
    @include mobile {
      padding: 10px 20px;
      font-size: 14px;
    }
  }
}
</style>
