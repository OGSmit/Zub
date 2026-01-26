<template>
  <section id="how-it-works" class="section">
    <div class="container">
      <h2 class="section__title">
        Как проходят <span class="section__title--highlight">ЗубТур</span>
      </h2>
      <div class="how-it-works__cards">
        <div class="how-it-works__card"  >
          <!-- <div class="how-it-works__badge">Самый популярный</div> -->
          <div class="how-it-works__icon">
            <!-- Иконка пальмы и снежинки -->
            <div class="icon-placeholder">🌴❄️</div>
          </div>
          <h3 class="how-it-works__card-title">Поездка и лечение</h3>
          <p class="how-it-works__card-text">
            Полетите в Нячанг, где вас встретит координатор
          </p>
        </div>

        <div class="how-it-works__card" @click="openNhaTrangModal">
          <div class="how-it-works__icon">
            <!-- Иконка пальмы и кокоса -->
            <div class="icon-placeholder">🌴🥥</div>
          </div>
          <h3 class="how-it-works__card-title">Отдых в Нячанге</h3>
          <p class="how-it-works__card-text">
            После лечения наслаждайтесь морем и экскурсиями
          </p>
        </div>
         
        <div class="how-it-works__card" @click="openTariffModal">
          <div class="how-it-works__icon">
            <!-- Иконка зуба с чатом -->
            <div class="icon-placeholder">💬🦷</div>
          </div>
          <h3 class="how-it-works__card-title">Тарифы</h3>
          <p class="how-it-works__card-text">
            Тарифы
          </p>
        </div>

        <div class="how-it-works__card" @click="openPatientFormModal">
          <div class="how-it-works__icon">
            <!-- Иконка зуба с чатом -->
            <div class="icon-placeholder">💬🦷</div>
          </div>
          <h3 class="how-it-works__card-title">Предварительный расчет стоимости лечения</h3>
          <p class="how-it-works__card-text">
            Заполните анкету для предварительного расчёта
          </p>
        </div>

        <div class="how-it-works__card" @click="openTariffModal">
          <div class="how-it-works__icon">
            <!-- Иконка зуба с чатом -->
            <div class="icon-placeholder">💬🦷</div>
          </div>
          <h3 class="how-it-works__card-title">Заглушка</h3>
          <p class="how-it-works__card-text">
            Тарифы
          </p>
        </div>

        <div class="how-it-works__card">
          <div class="how-it-works__icon">
            <!-- Иконка пальмы и кокоса -->
            <div class="icon-placeholder">🌴🥥</div>
          </div>
          <h3 class="how-it-works__card-title">Клиника-партнер</h3>
          <p class="how-it-works__card-text">
            Клиника
          </p>
        </div>
      </div>
      
 
      <div class="how-it-works__cta">
        <button class="btn btn--secondary" @click="openTariffModal">
          Подобрать формат ЗубТура >
        </button>
      </div>
    </div>

    <!-- Модальное окно с выбором тарифа -->
    <Modal v-model="isTariffModalOpen" size="full">
      <TariffSelectionModal />
    </Modal>

    <!-- Модальное окно с формой консультации -->
    <Modal v-model="isConsultationModalOpen" size="large">
      <ConsultationModal />
    </Modal>

    <!-- Модальное окно с информацией о Нячанге -->
    <Modal v-model="isNhaTrangModalOpen" size="large">
      <div class="nha-trang-modal">
        <h2 class="nha-trang-modal__title">🌴 Отдых в Нячанге — больше, чем просто лечение</h2>
        <p class="nha-trang-modal__intro">
          Нячанг — один из самых комфортных курортов Вьетнама,
          где лечение зубов легко совмещается с полноценным отдыхом.
        </p>
        
        <h3 class="nha-trang-modal__subtitle">Почему туристы выбирают Нячанг:</h3>
        
        <div class="nha-trang-modal__section">
          <h4 class="nha-trang-modal__section-title">☀️ Море и климат круглый год</h4>
          <p class="nha-trang-modal__section-text">
            Тёплое море, мягкий климат и солнечные дни почти весь год.
            Идеально для восстановления после лечения и расслабленного отдыха.
          </p>
        </div>

        <div class="nha-trang-modal__section">
          <h4 class="nha-trang-modal__section-title">🏖 Чистые пляжи и курортная атмосфера</h4>
          <p class="nha-trang-modal__section-text">
            Длинная береговая линия, ухоженные городские пляжи и острова
            всего в нескольких минутах от центра.
          </p>
        </div>

        <div class="nha-trang-modal__section">
          <h4 class="nha-trang-modal__section-title">🧘 Спокойный ритм и восстановление</h4>
          <p class="nha-trang-modal__section-text">
            Нячанг — не шумный мегаполис.
            Здесь легко отдыхать без суеты, восстанавливаться и чувствовать себя комфортно.
          </p>
        </div>

        <div class="nha-trang-modal__section">
          <h4 class="nha-trang-modal__section-title">🚤 Экскурсии и впечатления</h4>
          <p class="nha-trang-modal__section-text">
            Острова, снорклинг, водопады, грязевые источники,
            канатная дорога, пагоды и морские прогулки —
            отдых можно сделать активным или максимально расслабленным.
          </p>
        </div>

        <div class="nha-trang-modal__section">
          <h4 class="nha-trang-modal__section-title">🍜 Вьетнамская кухня и морепродукты</h4>
          <p class="nha-trang-modal__section-text">
            Свежие морепродукты, фрукты, локальная и европейская кухня.
            Подходит даже тем, кто осторожен с питанием после лечения.
          </p>
        </div>

        <div class="nha-trang-modal__section">
          <h4 class="nha-trang-modal__section-title">💆 СПА и термальные источники</h4>
          <p class="nha-trang-modal__section-text">
            Грязевые ванны, массажи и СПА-процедуры
            помогают снять напряжение и ускоряют восстановление.
          </p>
        </div>

        <div class="nha-trang-modal__section">
          <h4 class="nha-trang-modal__section-title">🗣 Комфорт для туристов из СНГ</h4>
          <p class="nha-trang-modal__section-text">
            Русскоязычные гиды, меню, экскурсии и поддержка.
            Вы чувствуете себя уверенно и спокойно.
          </p>
        </div>

        <div class="nha-trang-modal__section">
          <h4 class="nha-trang-modal__section-title">✨ Идеальное сочетание</h4>
          <p class="nha-trang-modal__section-text">
            Вы лечите зубы — отдыхаете у моря и возвращаетесь с новой улыбкой.
          </p>
        </div>
      </div>
    </Modal>

    <!-- Модальное окно с формой анкеты пациента -->
    <Modal v-model="isPatientFormModalOpen" size="full">
      <PatientFormModal />
    </Modal>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isTariffModalOpen = ref(false)
const isConsultationModalOpen = ref(false)
const isNhaTrangModalOpen = ref(false)
const isPatientFormModalOpen = ref(false)

const openTariffModal = () => {
  isTariffModalOpen.value = true
}

const openConsultationModal = () => {
  isConsultationModalOpen.value = true
}

const openNhaTrangModal = () => {
  isNhaTrangModalOpen.value = true
}

const openPatientFormModal = () => {
  isPatientFormModalOpen.value = true
}
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
    cursor: pointer;

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

.nha-trang-modal {
  &__title {
    font-size: 28px;
    font-weight: 700;
    color: $text-dark;
    margin-bottom: 20px;
    line-height: 1.3;

    @include mobile {
      font-size: 24px;
    }
  }

  &__intro {
    font-size: 18px;
    color: $text-dark;
    margin-bottom: 32px;
    line-height: 1.6;

    @include mobile {
      font-size: 16px;
      margin-bottom: 24px;
    }
  }

  &__subtitle {
    font-size: 22px;
    font-weight: 700;
    color: $text-dark;
    margin-bottom: 24px;

    @include mobile {
      font-size: 20px;
      margin-bottom: 20px;
    }
  }

  &__section {
    margin-bottom: 24px;

    @include mobile {
      margin-bottom: 20px;
    }
  }

  &__section-title {
    font-size: 18px;
    font-weight: 600;
    color: $text-dark;
    margin-bottom: 8px;
    line-height: 1.4;

    @include mobile {
      font-size: 16px;
    }
  }

  &__section-text {
    font-size: 16px;
    color: $text-light;
    line-height: 1.6;
    margin: 0;

    @include mobile {
      font-size: 14px;
    }
  }
}
</style>
