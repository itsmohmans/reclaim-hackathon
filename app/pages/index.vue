<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const { locale } = useI18n()

const { data: page } = await useAsyncData(
  () => `homepage-${locale.value}`,
  () => {
    const collection = (`homepage_${locale.value}`) as keyof Collections
    return queryCollection(collection).path('/').first()
  },
  { watch: [locale] }
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const seo = computed(() => page.value?.seo)

useSeoMeta({
  title: () => seo.value?.title,
  ogTitle: () => seo.value?.title,
  description: () => seo.value?.description,
  ogDescription: () => seo.value?.description
})
</script>

<template>
  <div v-if="page">
    <AppHeader :data="page.nav" />

    <UMain>
      <HeroSection :data="page.hero" />
      <AboutSection :data="page.about" />
      <TracksSection :data="page.tracks" />
      <HowItWorksSection :data="page.howItWorks" />
      <ResourcesSection :data="page.resources" />
      <TimelineSection :data="page.timeline" />
      <CriteriaSection :data="page.criteria" />
      <CommunitySection :data="page.community" />
      <PrizesSection :data="page.prizes" />
      <FAQSection :data="page.faq" />
      <CTASection :data="page.cta" />
    </UMain>

    <AppFooter :data="page.footer" />
  </div>
</template>
