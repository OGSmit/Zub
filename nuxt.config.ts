// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/styles/main.scss'],

  runtimeConfig: {
    // Приватные переменные только на сервере
    mailHost: process.env.MAIL_HOST,
    mailPort: process.env.MAIL_PORT,
    mailSecure: process.env.MAIL_SECURE,
    mailUser: process.env.MAIL_USER,
    mailPass: process.env.MAIL_PASS,
    mailFrom: process.env.MAIL_FROM,
    mailTo: process.env.MAIL_TO,
    public: {}
  },

  // Настройка для GitHub Pages
  ssr: false, // Отключаем SSR для статической генерации
  app: {
    // ВАЖНО: Замените 'Zub' на имя вашего репозитория на GitHub
    // Если репозиторий называется username.github.io, используйте '/'
    // Для локальной разработки можно временно изменить на '/'
    baseURL: process.env.GITHUB_ACTIONS || process.env.NODE_ENV === 'production' ? '/Zub/' : '/',
    head: {
      title: 'ZubTour - Лечение зубов в Нячанге',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Лечение зубов и отдых у моря под ключ в Нячанге. Экономия до 50%. Современные клиники. Сопровождение на русском языке.' },
        { name: 'theme-color', content: '#ffffff' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icons/android-chrome-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/icons/android-chrome-512x512.png' },
        { rel: 'manifest', href: '/icons/site.webmanifest' }
      ]
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/styles/_variables.scss";'
        }
      }
    }
  },

  compatibilityDate: '2026-01-15'
})