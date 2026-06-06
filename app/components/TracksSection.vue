<script setup lang="ts">
defineProps<{
  data: {
    tag: string
    title: string
    description: string
    items: { num: string, title: string, description: string }[]
  }
}>()
</script>

<template>
  <section id="tracks" class="bp-section-alt py-16 sm:py-24 px-6 sm:px-10">
    <div class="max-w-[1120px] mx-auto">
      <div class="mb-12">
        <p class="bp-label mb-3">{{ data.tag }}</p>
        <h2 class="font-bold text-[clamp(28px,3.5vw,44px)] leading-[1.15] font-[family-name:var(--font-sans)] mb-3.5">
          {{ data.title }}
        </h2>
        <p class="text-[17px] leading-relaxed text-[var(--bp-text-secondary)] max-w-[580px]">
          {{ data.description }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div
          v-for="track in data.items"
          :key="track.num"
          class="bp-card p-8"
        >
          <CornerMarks />
          <span class="font-mono text-xs font-semibold text-[var(--bp-accent)] tracking-[0.05em]">
            {{ track.num }}
          </span>
          <h3 class="font-bold text-xl font-[family-name:var(--font-sans)] mt-2 mb-2.5">
            {{ track.title }}
          </h3>
          <p class="text-[15px] leading-relaxed text-[var(--bp-text-secondary)]">
            {{ track.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
