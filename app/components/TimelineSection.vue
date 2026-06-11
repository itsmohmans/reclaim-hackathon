<script setup lang="ts">
defineProps<{
  data: {
    tag: string
    title: string
    events: { date: string, title: string, description: string }[]
  }
}>()
</script>

<template>
  <section id="timeline" class="bp-section-alt py-16 sm:py-24 px-6 sm:px-10">
    <div class="max-w-280 mx-auto">
      <div class="mb-12">
        <p class="bp-label mb-3">{{ data.tag }}</p>
        <h2 class="font-bold text-[clamp(28px,3.5vw,44px)] leading-[1.15] font-heading">
          {{ data.title }}
        </h2>
      </div>

      <div class="max-w-[600px] relative ps-10">
        <!-- Dashed vertical line -->
        <div
          class="absolute start-[7px] top-2 bottom-2 w-0.5"
          style="background: repeating-linear-gradient(to bottom, var(--bp-border) 0px, var(--bp-border) 6px, transparent 6px, transparent 12px)"
        />

        <div
          v-for="(event, i) in data.events"
          :key="event.title"
          class="relative"
          :class="{ 'pb-9': i < data.events.length - 1 }"
        >
          <!-- Dot -->
          <div
            class="absolute start-[-40px] top-1 w-4 h-4 rounded-full border-2"
            :class="i === 0
              ? 'border-(--bp-accent) bg-[var(--bp-accent)]'
              : 'border-[var(--bp-border)] bg-[var(--bp-bg)]'"
          />

          <p class="font-heading text-[13px] font-semibold text-(--bp-accent) tracking-[0.02em] mb-1">
            {{ event.date }}
          </p>
          <h4 class="font-bold text-lg font-heading mb-1">
            {{ event.title }}
          </h4>
          <p class="text-sm leading-relaxed text-(--bp-text-secondary)">
            {{ event.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
