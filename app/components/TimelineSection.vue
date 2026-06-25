<script setup lang="ts">
const props = defineProps<{
  data: {
    tag: string
    title: string
    events: { date: string, title: string, description: string }[]
  }
}>()
const currentDateIndex = computed(() => {
  return props.data.events.findIndex(event => {
    const eventDateString = event.date.split(' - ')[0]?.replace(/(st|nd|rd|th)/, '') || event.date
    const eventDate = new Date(eventDateString + ', 2026')
    const today = new Date()
    return eventDate >= today
  }) - 1
})
</script>

<template>
  <section id="timeline" class="py-16 sm:py-24 px-6 sm:px-10">
    <div class="max-w-280 mx-auto">
      <div class="mb-12">
        <p class="bp-label mb-3">{{ data.tag }}</p>
        <h2 class="font-bold text-[clamp(28px,3.5vw,44px)] leading-[1.15] font-heading">
          {{ data.title }}
        </h2>
      </div>

      <div class="max-w-150 relative ps-10">
        <!-- Dashed vertical line -->
        <div
          class="absolute inset-s-1.75 top-2 bottom-2 w-0.5"
          style="background: repeating-linear-gradient(to bottom, var(--bp-border) 0px, var(--bp-border) 6px, transparent 6px, transparent 12px)"
        />

        <div
          v-for="(event, i) in data.events"
          :key="event.title"
          class="relative pb-9"
        >
          <!-- Dot -->
          <div
            class="absolute -inset-s-10 top-1 w-4 h-4 rounded-none border-2"
            :class="i === 0 || i <= currentDateIndex
              ? 'border-(--bp-accent) bg-(--bp-accent)'
              : 'border-(--bp-border) bg-(--bp-bg)'"
          />

          <p class="font-heading text-sm font-semibold text-(--bp-accent) tracking-[0.02em] mb-1">
            {{ event.date }}
          </p>
          <h4 class="font-bold text-lg font-heading mb-1">
            {{ event.title }}
          </h4>
          <p class="text-base leading-relaxed text-(--bp-text-secondary)" v-html="event.description" />
        </div>
      </div>
    </div>
  </section>
</template>
