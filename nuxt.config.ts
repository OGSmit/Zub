// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/styles/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/styles/_variables.scss";'
        }
      }
    }
  },

  app: {
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

  compatibilityDate: '2026-01-15'
})