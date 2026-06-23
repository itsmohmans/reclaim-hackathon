<script setup lang="ts">
defineProps<{
  sponsorData: {
    title: string
    items: { name: string, logo_dark: string, logo_light: string, url: string }[]
  },
  organizerData: {
    title: string
    items: { name: string, logo_dark: string, logo_light: string, url: string }[]
  }
}>()
</script>

<template>
  <section class="py-12 bp-section-dark sm:py-16 px-6 sm:px-10 flex flex-row gap-10 justify-center max-sm:flex-col">
    <div class="max-w-280 text-center">
      <p class="text-sm text-(--bp-text-secondary) mb-4">{{ organizerData.title }}</p>

      <div class="flex justify-center items-center gap-10 sm:gap-16 flex-wrap">
        <template v-for="sponsor in organizerData.items" :key="sponsor.name">
          <a
            :href="sponsor.url"
            target="_blank"
            rel="noopener noreferrer"
            class="light:opacity-80 hover:opacity-100 transition-all"
          >
            <img
              :src="sponsor.logo_dark"
              :alt="sponsor.name"
              :title="sponsor.name"
              class="h-10 sm:h-12 w-auto"
            >
          </a>
        </template>
      </div>
    </div>
    <div class="max-w-280 text-center">
      <p class="text-sm text-(--bp-text-secondary) mb-4">{{ sponsorData.title }}</p>

      <div class="flex justify-center items-center gap-10 sm:gap-16 flex-wrap">
        <template v-for="sponsor in sponsorData.items" :key="sponsor.name">
          <a
            :href="sponsor.url"
            target="_blank"
            rel="noopener noreferrer"
            class="light:opacity-80 hover:opacity-100 transition-all"
          >
            <img
              :src="sponsor.logo_dark"
              :alt="sponsor.name"
              :title="sponsor.name"
              class="h-10 sm:h-12 w-auto"
            >
          </a>
        </template>
      </div>
    </div>
  </section>
</template>
