// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/styles/main.scss'],

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
        { name: 'description', content: 'Лечение зубов и отдых у моря под ключ в Нячанге. Экономия до 50%. Современные клиники. Сопровождение на русском языке.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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