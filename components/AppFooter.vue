<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <NuxtLink to="/" class="footer__logo">
            ЗубТур <span>Вьетнам</span>
          </NuxtLink>
          <p class="footer__tagline">
            Лечение зубов и отдых у моря в Нячанге под ключ
          </p>
        </div>

        <nav class="footer__nav">
          <h4 class="footer__heading">Навигация</h4>
          <ul class="footer__links">
            <li><a href="#how-it-works">Как это работает</a></li>
            <li><a href="#reviews">Отзывы</a></li>
            <li><a href="#what-included">Что входит</a></li>
          </ul>
        </nav>

        <div class="footer__contacts">
          <h4 class="footer__heading">Контакты</h4>
          <ul class="footer__contact-list">
            <li class="footer__contact-item">
              <span class="footer__contact-label">Телефон</span>
              <span class="footer__contact-value footer__contact-value--placeholder">
                <!-- Сюда добавим номер позже -->
                —
              </span>
            </li>
            <li class="footer__contact-item">
              <span class="footer__contact-label">Мессенджеры / почта</span>
              <span class="footer__contact-value footer__contact-value--placeholder">
                <!-- Сюда добавим контакты позже -->
                —
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <p class="footer__copyright">
          © {{ currentYear }} ЗубТур Вьетнам. Предварительный расчёт и организация поездки.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped lang="scss">
.footer {
  background: linear-gradient(180deg, #E3F2FD 0%, #BBDEFB 100%);
  color: $text-dark;
  padding-top: 48px;
  padding-bottom: 24px;
  margin-top: 60px;

  @include desktop {
    padding-top: 56px;
    padding-bottom: 32px;
    margin-top: 80px;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
    margin-bottom: 40px;

    @include tablet {
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }

    @include desktop {
      grid-template-columns: 1.2fr 1fr 1fr;
      gap: 48px;
      margin-bottom: 48px;
    }
  }

  &__brand {
    grid-column: 1 / -1;

    @include tablet {
      grid-column: auto;
    }
  }

  &__logo {
    display: inline-block;
    font-size: 22px;
    font-weight: 700;
    color: $primary-color;
    text-decoration: none;
    margin-bottom: 8px;
    transition: color 0.2s ease;

    &:hover {
      color: darken($primary-color, 8%);
    }

    span {
      color: $accent-color;
    }
  }

  &__tagline {
    font-size: 14px;
    color: $text-light;
    line-height: 1.5;
    margin: 0;
    max-width: 280px;
  }

  &__heading {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: $text-light;
    margin: 0 0 16px;
  }

  &__links {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__links li {
    margin-bottom: 10px;
  }

  &__links a {
    color: $text-dark;
    text-decoration: none;
    font-size: 15px;
    transition: color 0.2s ease;

    &:hover {
      color: $primary-color;
      text-decoration: underline;
    }
  }

  &__contact-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__contact-item {
    margin-bottom: 14px;
  }

  &__contact-label {
    display: block;
    font-size: 12px;
    color: $text-light;
    margin-bottom: 4px;
  }

  &__contact-value {
    font-size: 15px;
    color: $text-dark;

    &--placeholder {
      color: $text-light;
      font-style: italic;
      opacity: 0.8;
    }
  }

  &__bottom {
    padding-top: 24px;
    border-top: 1px solid rgba($primary-color, 0.25);
  }

  &__copyright {
    font-size: 13px;
    color: $text-light;
    margin: 0;
    text-align: center;

    @include desktop {
      text-align: left;
    }
  }
}
</style>
