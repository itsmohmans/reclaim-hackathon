<script setup lang="ts">
const { locale, dir } = useLocale()

const lang = computed(() => locale.value)

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
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
