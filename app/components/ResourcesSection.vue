<script setup lang="ts">
defineProps<{
  data: {
    tag: string
    title: string
    description: string
    items: { name: string, description: string }[]
  }
}>()
</script>

<template>
  <section id="resources" class="bp-section-alt py-16 sm:py-24 px-6 sm:px-10">
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

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="resource in data.items"
          :key="resource.name"
          class="bp-card px-6 py-5"
        >
          <CornerMarks :size="8" />
          <h4 class="font-bold text-base font-[family-name:var(--font-sans)] mb-1 text-[var(--bp-accent)]">
            {{ resource.name }}
          </h4>
          <p class="text-sm leading-relaxed text-[var(--bp-text-secondary)]">
            {{ resource.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
