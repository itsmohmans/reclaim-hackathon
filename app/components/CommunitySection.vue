<script setup lang="ts">
defineProps<{
  data: {
    tag: string
    title: string
    paragraphs: string[]
  }
}>()
</script>

<template>
  <section id="community" class="py-16 sm:py-24 px-6 sm:px-10">
    <div class="max-w-[1120px] mx-auto">
      <div class="max-w-[680px] mx-auto text-center">
        <p class="bp-label mb-3">{{ data.tag }}</p>
        <h2 class="font-bold text-[clamp(28px,3.5vw,44px)] leading-[1.15] font-[family-name:var(--font-sans)] mb-6">
          {{ data.title }}
        </h2>
        <p
          v-for="(para, i) in data.paragraphs"
          :key="i"
          class="text-lg leading-[1.7] text-[var(--bp-text-secondary)] mb-4 last:mb-0"
        >
          {{ para }}
        </p>
      </div>
    </div>
  </section>
</template>
