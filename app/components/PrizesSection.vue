<script setup lang="ts">
defineProps<{
  data: {
    tag: string
    title: string
    description: string
    items: { place: string, label: string, amount: string, featured?: boolean }[]
  }
}>()
</script>

<template>
  <section id="prizes" class="bp-section-alt py-16 sm:py-24 px-6 sm:px-10">
    <div class="max-w-280 mx-auto">
      <div class="mb-12">
        <p class="bp-label mb-3">{{ data.tag }}</p>
        <h2 class="font-bold text-[clamp(28px,3.5vw,44px)] leading-[1.15] font-heading mb-3.5">
          {{ data.title }}
        </h2>
        <p class="text-lg leading-relaxed text-(--bp-text-secondary) max-w-145">
          {{ data.description }}
        </p>
      </div>

      <div class="flex flex-col sm:flex-row items-stretch sm:items-end justify-center gap-5 max-w-175 mx-auto">
        <div
          v-for="prize in data.items"
          :key="prize.place"
          class="flex-1 text-center rounded-xs relative p-7"
          :class="[
            prize.featured
              ? 'border-2 max-sm:order-1 border-(--bp-accent) bg-(--bp-accent-light) sm:-translate-y-3'
              : 'bp-card max-sm:order-2'
          ]"
        >
          <CornerMarks v-if="!prize.featured" />
          <span class="font-heading text-sm font-semibold text-(--bp-accent)">
            {{ prize.place }}
          </span>
          <div
            class="font-bold font-heading my-2"
            :class="prize.featured ? 'text-[32px]' : 'text-2xl'"
          >
            {{ prize.amount }}
          </div>
          <span class="text-[13px] text-(--bp-text-secondary)">
            {{ prize.label }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
