<script setup lang="ts">
defineProps<{
  data: {
    tag: string
    title: string
    description: string
    pillars: { title: string, description: string }[]
    challenge: {
      title: string
      paragraphs: string[]
    }
  }
}>()
</script>

<template>
  <section id="about" class="py-16 sm:py-24 px-6 sm:px-10">
    <div class="max-w-280 mx-auto">
      <div class="mb-12">
        <p class="bp-label mb-3">{{ data.tag }}</p>
        <h2 class="font-bold text-[clamp(28px,3.5vw,44px)] leading-[1.15] mb-3.5">
          {{ data.title }}
        </h2>
        <p class="text-lg leading-relaxed text-(--bp-text-secondary) max-w-145">
          {{ data.description }}
        </p>
      </div>

      <div
        class="grid grid-cols-1 gap-5 mb-20"
        :class="data.pillars.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'"
      >
        <div
          v-for="pillar in data.pillars"
          :key="pillar.title"
          class="bp-card p-7"
        >
          <CornerMarks />
          <h3 class="font-bold text-lg mb-2.5 mt-2">
            {{ pillar.title }}
          </h3>
          <p class="text-[15px] leading-relaxed text-(--bp-text-secondary)">
            {{ pillar.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
