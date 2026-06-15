<script setup lang="ts">
defineProps<{
  data: {
    title: string
    items: { name: string, logo: string, url: string }[]
  }
}>()
</script>

<template>
  <section class="py-12 bg-(--bp-bg-alt) sm:py-16 px-6 sm:px-10 border-t border-(--bp-border)">
    <div class="max-w-280 mx-auto text-center">
      <p class="text-sm text-(--bp-text-secondary) mb-8">{{ data.title }}</p>

      <div class="flex justify-center items-center gap-10 sm:gap-16 flex-wrap">
        <a
          v-for="sponsor in data.items"
          :key="sponsor.name"
          :href="sponsor.url"
          target="_blank"
          rel="noopener noreferrer"
          class="light:opacity-80 hover:opacity-100 transition-all dark:brightness-110 dark:hover:brightness-150"
        >
          <img
            :src="sponsor.logo"
            :alt="sponsor.name"
            :title="sponsor.name"
            class="h-10 sm:h-12 w-auto"
          >
        </a>
      </div>
    </div>
  </section>
</template>
