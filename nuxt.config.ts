export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    'motion-v/nuxt'
  ],

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  content: {
    experimental: {
      sqliteConnector: 'native'
    }
  },

  i18n: {
    locales: [
      { code: 'en', name: 'English', language: 'en-US', dir: 'ltr' },
      { code: 'ar', name: 'العربية', language: 'ar', dir: 'rtl' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default'
  },

  fonts: {
    provider: 'local'
  },

  compatibilityDate: '2025-01-15',

  nitro: {
    prerender: {
      routes: ['/', '/ar']
    }
  }
})
