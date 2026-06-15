<script setup lang="ts">
const { locale, locales } = useI18n()

const dir = computed(() => {
  const current = locales.value.find(l => typeof l === 'object' && l.code === locale.value)
  return (current && typeof current === 'object' && 'dir' in current ? current.dir : 'ltr') as "ltr" | "rtl"
})

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
  ],
  htmlAttrs: {
    lang: locale,
    dir
  }
})
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
