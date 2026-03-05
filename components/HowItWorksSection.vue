<template>
  <section id="how-it-works" class="section">
    <div class="container">
      <h2 class="section__title">
        Как проходят <span class="section__title--highlight">ЗубТур</span>
      </h2>
      <div class="how-it-works__cards">
        <div class="how-it-works__card" @click="openTripTreatmentModal">
          <div class="how-it-works__icon">
            <div class="icon-placeholder">✈️🦷</div>
          </div>
          <h3 class="how-it-works__card-title">Поездка и лечение</h3>
          <p class="how-it-works__card-text">
            От вылета до клиники: трансфер и координатор уже ждут
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

        <div class="how-it-works__card how-it-works__card--image">
          <img
            src="/images/nhatrang6.webp"
            alt="Пляж в Нячанге"
            class="how-it-works__card-image"
            loading="lazy"
          />
        </div>

        <div class="how-it-works__card" @click="openPartnerClinicModal">
          <div class="how-it-works__icon">
            <!-- Иконка пальмы и кокоса -->
            <div class="icon-placeholder">🌴🥥</div>
          </div>
          <h3 class="how-it-works__card-title">Клиника-партнер</h3>
          <p class="how-it-works__card-text">
            Opal Dental — надёжная стоматология в Нячанге
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
      <TariffSelectionModal @select-tariff="handleTariffSelect" />
    </Modal>

    <!-- Модальное окно с формой консультации -->
    <Modal v-model="isConsultationModalOpen" size="large">
      <ConsultationModal />
    </Modal>

    <!-- Модальное окно «Поездка и лечение» -->
    <Modal v-model="isTripTreatmentModalOpen" size="large">
      <div class="trip-treatment-modal">
        <h2 class="trip-treatment-modal__title">✈️ Поездка и лечение — всё под ключ</h2>
        <p class="trip-treatment-modal__intro">
          От вылета до клиники: трансфер и координатор уже ждут.
          Вы прилетаете — мы берём на себя встречу, сопровождение и организацию лечения.
          ЗубТур — это спокойствие и уверенность на каждом этапе поездки.
        </p>

        <h3 class="trip-treatment-modal__subtitle">Как это работает:</h3>

        <div class="trip-treatment-modal__section">
          <h4 class="trip-treatment-modal__section-title">🛫 Вылет из вашего города</h4>
          <p class="trip-treatment-modal__section-text">
            Вылетаете в Нячанг из удобного аэропорта — прямые рейсы доступны из Москвы, Новосибирска, Владивостока и других городов. Время в пути — около 8–9 часов. При тарифе Премиум мы помогаем с подбором оптимальных дат, поиском выгодных авиабилетов и их покупкой. Вы сообщаете предпочтения — мы находим лучшие варианты и экономим ваше время.
          </p>
        </div>

        <div class="trip-treatment-modal__section">
          <img src="/images/trip1.webp" alt="Встреча в аэропорту" class="trip-treatment-modal__section-image" loading="lazy">
          <h4 class="trip-treatment-modal__section-title">🏁 Встреча в аэропорту</h4>
          <p class="trip-treatment-modal__section-text">
            Сразу после выхода из зоны прилёта вас встречает координатор ЗубТур с табличкой. Никакого ожидания и поиска — вы сразу в надёжных руках. Координатор говорит по-русски, поэтому не будет языкового барьера. Поможем с визой по прилёту, обменом валюты и первыми вопросами о городе. Вы чувствуете себя как дома с первой минуты.
          </p>
        </div>

        <div class="trip-treatment-modal__section">
          <img src="/images/trip2.webp" alt="Трансфер до отеля и клиники" class="trip-treatment-modal__section-image" loading="lazy">
          <h4 class="trip-treatment-modal__section-title">🚗 Трансфер до отеля и клиники</h4>
          <p class="trip-treatment-modal__section-text">
            Комфортный автомобиль с кондиционером доставит вас до отеля. Дорога от аэропорта Нячанга до центра — около 30–40 минут. В дни лечения — регулярная доставка в клинику Opal Dental и обратно. Не нужно искать такси или разбираться с маршрутами: мы знаем расписание ваших приёмов и забираем вас точно вовремя. Трансферы включены во все тарифы ЗубТур.
          </p>
        </div>

        <div class="trip-treatment-modal__section">
          <img src="/images/trip4.webp" alt="Лечение в клинике" class="trip-treatment-modal__section-image" loading="lazy">
          <h4 class="trip-treatment-modal__section-title">🦷 Лечение в клинике</h4>
          <p class="trip-treatment-modal__section-text">
            Координатор сопровождает вас на приёмах: помогает с переводами, объясняет рекомендации врача и фиксирует детали лечения. Врачи Opal Dental работают по международным протоколам, а мы обеспечиваем понятную коммуникацию на русском. От первого осмотра до последнего визита — вы в надёжных руках. При необходимости организуем связь с врачами после возвращения домой.
          </p>
        </div>

        <div class="trip-treatment-modal__section">
          <img src="/images/trip3.webp" alt="Поездка под ключ" class="trip-treatment-modal__section-image" loading="lazy">
          <h4 class="trip-treatment-modal__section-title">✨ Без лишних забот</h4>
          <p class="trip-treatment-modal__section-text">
            Логистика, трансферы, согласование визитов и связь с клиникой — всё на нашей стороне. Вы сосредоточены на лечении и отдыхе у моря. Один координатор ведёт вас от прилёта до вылета, поэтому не нужно повторять историю и объяснять детали разным людям. Мы рядом в мессенджере 24/7 — на любые вопросы отвечаем быстро и по делу.
          </p>
        </div>
      </div>
    </Modal>

    <!-- Модальное окно с информацией о Нячанге -->
    <Modal v-model="isNhaTrangModalOpen" size="large">
      <div class="nha-trang-modal">
        <h2 class="nha-trang-modal__title">🌴 Отдых в Нячанге — больше, чем просто лечение</h2>
        <p class="nha-trang-modal__intro">
          Нячанг — один из самых комфортных курортов Вьетнама,
          где лечение зубов легко совмещается с полноценным отдыхом.
        </p>

        <div class="nha-trang-modal__gallery">
          <img src="/images/nhatrang1.webp" alt="Нячанг — пляж и море" class="nha-trang-modal__image" loading="lazy">
          <img src="/images/nhatrang2.webp" alt="Нячанг — достопримечательности" class="nha-trang-modal__image" loading="lazy">
          <img src="/images/nhatrang3.webp" alt="Нячанг — отдых" class="nha-trang-modal__image" loading="lazy">
        </div>
        
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
      <PatientFormModal :initial-tariff="selectedTariff" />
    </Modal>

    <!-- Модальное окно с контактами -->
    <Modal v-model="isContactsModalOpen" size="large">
      <div class="contacts-modal">
        <div class="contacts-modal__header">
          <h2 class="contacts-modal__title">Связаться с ЗубТур Вьетнам</h2>
          <p class="contacts-modal__subtitle">
            Ответим на вопросы о лечении, тарифах и поездке в Нячанг.
          </p>
        </div>

        <div class="contacts-modal__content">
          <div class="contacts-modal__info">
            <div class="contacts-modal__item">
              <span class="contacts-modal__label">Телефон (WhatsApp / Telegram)</span>
              <a href="tel:+79990000000" class="contacts-modal__value">
                +7 (999) 000-00-00
              </a>
            </div>

            <div class="contacts-modal__item">
              <span class="contacts-modal__label">Email</span>
              <a href="mailto:info@zubtour.vn" class="contacts-modal__value">
                info@zubtour.vn
              </a>
            </div>

            <div class="contacts-modal__item">
              <span class="contacts-modal__label">Социальные сети</span>
              <div class="contacts-modal__socials">
                <a href="https://t.me/zubtour" target="_blank" rel="noopener" class="contacts-modal__chip">
                  Telegram
                </a>
                <a href="https://wa.me/79990000000" target="_blank" rel="noopener" class="contacts-modal__chip">
                  WhatsApp
                </a>
                <a href="https://vk.com/zubtour" target="_blank" rel="noopener" class="contacts-modal__chip">
                  VK
                </a>
              </div>
            </div>
          </div>

          <div class="contacts-modal__image-wrap">
            <img
            src="/images/nhatrang3.webp"
              alt="Нячанг — море и отдых"
              class="contacts-modal__image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Modal>

    <!-- Модальное окно с информацией о клинике-партнёре -->
    <Modal v-model="isPartnerClinicModalOpen" size="large">
      <div class="partner-clinic-modal">
        <h2 class="partner-clinic-modal__title">🦷 Opal Dental Clinic — клиника-партнёр ЗубТур</h2>
        <p class="partner-clinic-modal__intro">
          Opal Dental Clinic — это надёжная стоматологическая сеть в Нячанге с 8-летним опытом работы.
          На сегодняшний день клиника располагает 2 филиалами и около 15 стоматологических кресел
          и уже обслужила почти 15 000 пациентов из Вьетнама и других стран.
        </p>

        <div class="partner-clinic-modal__gallery">
          <img src="/images/partner1.webp" alt="Opal Dental Clinic — интерьер" class="partner-clinic-modal__image" loading="lazy">
          <img src="/images/partner2.webp" alt="Opal Dental Clinic — оборудование" class="partner-clinic-modal__image" loading="lazy">
          <img src="/images/partner3.webp" alt="Opal Dental Clinic — приём пациентов" class="partner-clinic-modal__image" loading="lazy">
        </div>

        <h3 class="partner-clinic-modal__subtitle">Почему Opal Dental:</h3>

        <div class="partner-clinic-modal__section">
          <h4 class="partner-clinic-modal__section-title">👨‍⚕️ Команда экспертов</h4>
          <p class="partner-clinic-modal__section-text">
            В клинике работает команда высококвалифицированных врачей с десятками лет практического опыта.
            Среди них — специалисты, ранее занимавшие должность бывшего заведующего отделением
            челюстно-лицевой хирургии в крупных государственных больницах Вьетнама.
            Это гарантирует высокий уровень профессионализма и строгое соблюдение международных протоколов лечения.
          </p>
        </div>

        <div class="partner-clinic-modal__section">
          <h4 class="partner-clinic-modal__section-title">⭐ Репутация и доверие</h4>
          <p class="partner-clinic-modal__section-text">
            Opal Dental получила более 1 400 отзывов с оценкой 5★ на Google Maps,
            что отражает высокий уровень удовлетворённости пациентов, устойчивое доверие
            и стабильное качество услуг на протяжении многих лет.
          </p>
        </div>

        <div class="partner-clinic-modal__section">
          <h4 class="partner-clinic-modal__section-title">🛡️ Безопасность и прозрачность</h4>
          <p class="partner-clinic-modal__section-text">
            Клиника работает по чётко выстроенным лечебным протоколам с особым акцентом на безопасность,
            стерильность и прозрачность. Используется современное стоматологическое оборудование
            и персонализированный подход к каждому пациенту, обеспечивающий комфортное, понятное и спокойное лечение.
          </p>
        </div>

        <div class="partner-clinic-modal__section">
          <h4 class="partner-clinic-modal__section-title">✨ Надёжный выбор</h4>
          <p class="partner-clinic-modal__section-text">
            Благодаря сильной медицинской базе, безупречной репутации и внимательному сервису,
            Opal Dental является надёжным выбором как для местных жителей, так и для пациентов,
            приезжающих в Нячанг в рамках стоматологического туризма.
          </p>
        </div>
      </div>
    </Modal>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isTariffModalOpen = ref(false)
const isConsultationModalOpen = ref(false)
const isTripTreatmentModalOpen = ref(false)
const isNhaTrangModalOpen = ref(false)
const isPatientFormModalOpen = ref(false)
const isPartnerClinicModalOpen = ref(false)
const isContactsModalOpen = ref(false)
const selectedTariff = ref('')

const openTariffModal = () => {
  isTariffModalOpen.value = true
}

const handleTariffSelect = (tariff: string) => {
  selectedTariff.value = tariff
  isTariffModalOpen.value = false
  isPatientFormModalOpen.value = true
}

const openConsultationModal = () => {
  isConsultationModalOpen.value = true
}

const openTripTreatmentModal = () => {
  isTripTreatmentModalOpen.value = true
}

const openNhaTrangModal = () => {
  isNhaTrangModalOpen.value = true
}

const openPatientFormModal = () => {
  isPatientFormModalOpen.value = true
}

const openPartnerClinicModal = () => {
  isPartnerClinicModalOpen.value = true
}

const openContactsModal = () => {
  isContactsModalOpen.value = true
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('open-tariff-modal', openTariffModal)
    window.addEventListener('open-patient-form-modal', openPatientFormModal)
    window.addEventListener('open-contacts-modal', openContactsModal)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('open-tariff-modal', openTariffModal)
    window.removeEventListener('open-patient-form-modal', openPatientFormModal)
    window.removeEventListener('open-contacts-modal', openContactsModal)
  }
})
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

    &--image {
      padding: 0;
      cursor: default;
      overflow: hidden;
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

  &__card-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
  }

  &__cta {
    text-align: center;
  }
}

.icon-placeholder {
  font-size: 32px;
}

.trip-treatment-modal {
  &__title {
    font-size: $modal-title-font-size;
    font-weight: 700;
    color: $text-dark;
    margin-bottom: 20px;
    line-height: 1.3;

    @include mobile {
      font-size: $modal-title-font-size-mobile;
    }
  }

  &__intro {
    font-size: $modal-body-font-size;
    color: $text-dark;
    margin-bottom: 32px;
    line-height: 1.6;

    @include mobile {
      font-size: $modal-body-font-size-mobile;
      margin-bottom: 24px;
    }
  }

  &__section-image {
    display: block;
    width: 50%;
    max-width: 400px;
    height: auto;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    margin: 0 auto 16px;

    @include mobile {
      width: 85%;
      max-width: none;
    }
  }

  &__subtitle {
    font-size: $modal-heading-font-size;
    font-weight: 700;
    color: $text-dark;
    margin-bottom: 24px;

    @include mobile {
      font-size: $modal-heading-font-size-mobile;
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
    font-size: $modal-heading-font-size-mobile;
    font-weight: 600;
    color: $text-dark;
    margin-bottom: 8px;
    line-height: 1.4;

    @include mobile {
      font-size: 16px;
    }
  }

  &__section-text {
    font-size: $modal-body-font-size;
    color: $text-light;
    line-height: 1.6;
    margin: 0;

    @include mobile {
      font-size: 14px;
    }
  }
}

.partner-clinic-modal {
  &__title {
    font-size: $modal-title-font-size;
    font-weight: 700;
    color: $text-dark;
    margin-bottom: 20px;
    line-height: 1.3;

    @include mobile {
      font-size: $modal-title-font-size-mobile;
    }
  }

  &__intro {
    font-size: $modal-body-font-size;
    color: $text-dark;
    margin-bottom: 32px;
    line-height: 1.6;

    @include mobile {
      font-size: $modal-body-font-size-mobile;
      margin-bottom: 24px;
    }
  }

  &__gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 32px;

    @include mobile {
      grid-template-columns: 1fr;
      gap: 12px;
      margin-bottom: 24px;
    }
  }

  &__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

    @include mobile {
      height: 180px;
    }
  }

  &__subtitle {
    font-size: $modal-heading-font-size;
    font-weight: 700;
    color: $text-dark;
    margin-bottom: 24px;

    @include mobile {
      font-size: $modal-heading-font-size-mobile;
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
    font-size: $modal-heading-font-size-mobile;
    font-weight: 600;
    color: $text-dark;
    margin-bottom: 8px;
    line-height: 1.4;

    @include mobile {
      font-size: 16px;
    }
  }

  &__section-text {
    font-size: $modal-body-font-size;
    color: $text-light;
    line-height: 1.6;
    margin: 0;

    @include mobile {
      font-size: 14px;
    }
  }
}

.nha-trang-modal {
  &__title {
    font-size: $modal-title-font-size;
    font-weight: 700;
    color: $text-dark;
    margin-bottom: 20px;
    line-height: 1.3;

    @include mobile {
      font-size: $modal-title-font-size-mobile;
    }
  }

  &__intro {
    font-size: $modal-body-font-size;
    color: $text-dark;
    margin-bottom: 32px;
    line-height: 1.6;

    @include mobile {
      font-size: $modal-body-font-size-mobile;
      margin-bottom: 24px;
    }
  }

  &__gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 32px;

    @include mobile {
      grid-template-columns: 1fr;
      gap: 12px;
      margin-bottom: 24px;
    }
  }

  &__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

    @include mobile {
      height: 180px;
    }
  }

  &__subtitle {
    font-size: $modal-heading-font-size;
    font-weight: 700;
    color: $text-dark;
    margin-bottom: 24px;

    @include mobile {
      font-size: $modal-heading-font-size-mobile;
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
    font-size: $modal-heading-font-size-mobile;
    font-weight: 600;
    color: $text-dark;
    margin-bottom: 8px;
    line-height: 1.4;

    @include mobile {
      font-size: 16px;
    }
  }

  &__section-text {
    font-size: $modal-body-font-size;
    color: $text-light;
    line-height: 1.6;
    margin: 0;

    @include mobile {
      font-size: 14px;
    }
  }
}

.contacts-modal {
  &__header {
    margin-bottom: 24px;
  }

  &__title {
    font-size: $modal-title-font-size;
    font-weight: 700;
    color: $text-dark;
    margin-bottom: 8px;
  }

  &__subtitle {
    font-size: $modal-subtitle-font-size;
    color: $text-light;
    line-height: 1.6;
  }

  &__content {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 24px;
    align-items: center;

    @include mobile {
      grid-template-columns: 1fr;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__item {
    padding: 12px 0;
    border-bottom: 1px solid #e0e0e0;

    &:last-child {
      border-bottom: none;
    }
  }

  &__label {
    display: block;
    font-size: $modal-caption-font-size-mobile;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: $text-light;
    margin-bottom: 6px;
  }

  &__value {
    font-size: $modal-body-font-size;
    font-weight: 600;
    color: $accent-color;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  &__socials {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  &__chip {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 14px;
    border-radius: 999px;
    border: 1px solid #e0e0e0;
    font-size: $modal-caption-font-size;
    color: $text-dark;
    text-decoration: none;
    background-color: #f9f9f9;
    transition: all 0.2s ease;

    &:hover {
      border-color: $accent-color;
      color: $accent-color;
      background-color: #f3f7ff;
    }
  }

  &__image-wrap {
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);

    @include mobile {
      order: -1;
      margin-bottom: 8px;
    }
  }

  &__image {
    display: block;
    width: 100%;
    height: 220px;
    object-fit: cover;
  }
}
</style>
