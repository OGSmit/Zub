<template>
  <section id="reviews" class="section section--light">
    <div class="container">
      <h2 class="section__title">
        Отзывы <span class="section__title--accent">довольных клиентов</span>
      </h2>
      <div class="testimonials__cards">
        <div class="testimonials__card">
          <div class="testimonials__header">
            <div class="testimonials__avatar">
              <!-- Аватар Оксаны -->
              <div class="avatar-placeholder">О</div>
            </div>
            <div class="testimonials__info">
              <h3 class="testimonials__name">Оксана</h3>
              <div class="testimonials__stars">★★★★★</div>
            </div>
          </div>
          <p class="testimonials__text">
            Установила 2 импланта + отдых в Нячанге! Цены выгоднее, чем в России, и отдых неплохой!
          </p>
          <div class="testimonials__image">
            <!-- Изображение Оксаны на пляже -->
            <div class="testimonials__image-placeholder">Фото Оксаны</div>
          </div>
        </div>
        <div class="testimonials__card">
          <div class="testimonials__header">
            <div class="testimonials__avatar">
              <!-- Аватар Ивана -->
              <div class="avatar-placeholder">И</div>
            </div>
            <div class="testimonials__info">
              <h3 class="testimonials__name">Иван</h3>
              <div class="testimonials__stars">★★★★★</div>
            </div>
          </div>
          <p class="testimonials__text">
            Установил 4 импланта в Нячанге. Всё организовано и комфортно. Сэкономил до 50% от Москвы!
          </p>
          <div class="testimonials__image">
            <!-- Изображение Ивана и пары на пляже -->
            <div class="testimonials__image-placeholder">Фото Ивана</div>
          </div>
        </div>
        <div class="testimonials__card">
          <div class="testimonials__header">
            <div class="testimonials__avatar">
              <!-- Аватар Алексея -->
              <div class="avatar-placeholder">А</div>
            </div>
            <div class="testimonials__info">
              <h3 class="testimonials__name">Алексей</h3>
              <div class="testimonials__stars">★★★★★</div>
            </div>
          </div>
          <p class="testimonials__text">
            Установили 12 зубов. Очень доволен работой и запоминающимися экскурсиями в отпуске.
          </p>
          <div class="testimonials__image">
            <!-- Изображение Алексея на пляже -->
            <div class="testimonials__image-placeholder">Фото Алексея</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.section--light {
  background-color: $bg-light;
}

.testimonials {
  &__cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;

    @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }

    @include desktop {
      grid-template-columns: repeat(3, 1fr);
      gap: 40px;
    }
  }

  &__card {
    background: $white;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
  }

  &__avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
  }

  &__info {
    flex: 1;
  }

  &__name {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 4px;
    color: $text-dark;
  }

  &__stars {
    color: #FFD700;
    font-size: 16px;
    letter-spacing: 2px;
  }

  &__text {
    font-size: 16px;
    color: $text-light;
    line-height: 1.6;
    margin-bottom: 16px;
  }

  &__image {
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 12px;
    overflow: hidden;
  }

  &__image-placeholder {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #BBDEFB 0%, #90CAF9 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: $white;
    font-weight: 600;
  }
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, $primary-color 0%, lighten($primary-color, 10%) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: $white;
  font-size: 24px;
  font-weight: 700;
}
</style>
