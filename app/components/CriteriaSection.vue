<script setup lang="ts">
defineProps<{
  data: {
    tag: string
    title: string
    items: { title: string, description: string }[]
  }
}>()
</script>

<template>
  <section id="criteria" class="bp-section-alt py-16 sm:py-24 px-6 sm:px-10">
    <div class="max-w-[1120px] mx-auto">
      <div class="mb-12">
        <p class="bp-label mb-3">{{ data.tag }}</p>
        <h2 class="font-bold text-[clamp(28px,3.5vw,44px)] leading-[1.15] font-[family-name:var(--font-sans)]">
          {{ data.title }}
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[800px]">
        <div
          v-for="(item, i) in data.items"
          :key="item.title"
          class="bp-card flex gap-4 p-6"
        >
          <CornerMarks :size="8" />
          <span class="text-2xl font-bold text-[var(--bp-accent)] font-[family-name:var(--font-sans)] leading-none shrink-0">
            {{ i + 1 }}
          </span>
          <div>
            <h4 class="font-bold text-base font-[family-name:var(--font-sans)] mb-1">
              {{ item.title }}
            </h4>
            <p class="text-sm leading-relaxed text-[var(--bp-text-secondary)]">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
