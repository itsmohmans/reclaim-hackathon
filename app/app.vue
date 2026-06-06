<script setup lang="ts">
const { locale, dir } = useLocale()

const lang = computed(() => locale.value)

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400&display=swap' }
  ],
  htmlAttrs: {
    lang,
    dir
  }
})
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
