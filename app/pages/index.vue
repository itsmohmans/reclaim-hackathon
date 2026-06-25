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
      <PrizesSection :data="page.prizes" />
      <HowItWorksSection :data="page.howItWorks" />
      <CriteriaSection :data="page.criteria" />
      <TimelineSection :data="page.timeline" />
      <ResourcesSection :data="page.resources" />
      <CommunitySection :data="page.community" />
      <FAQSection :data="page.faq" />
      <CTASection :data="page.cta" />
      <SponsorsSection :sponsor-data="page.sponsors" :organizer-data="page.organizers" />
    </UMain>

    <AppFooter :data="page.footer" />
  </div>
</template>
