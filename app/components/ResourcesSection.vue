<script setup lang="ts">
defineProps<{
  data: {
    tag: string
    title: string
    description: string
    items: { name: string, description: string, link: string }[]
  }
}>()
</script>

<template>
  <section id="resources" class="py-16 sm:py-24 px-6 sm:px-10">
    <div class="max-w-280 mx-auto">
      <div class="mb-12">
        <p class="bp-label mb-3">{{ data.tag }}</p>
        <h2 class="font-bold text-[clamp(28px,3.5vw,44px)] leading-[1.15] font-heading mb-3.5">
          {{ data.title }}
        </h2>
        <p class="text-lg  leading-relaxed text-(--bp-text-secondary) max-w-145">
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
          <NuxtLink :to="resource.link" target="_blank">
            <h4 class="font-bold text-base font-heading mb-1 text-(--bp-accent)">
              {{ resource.name }}
            </h4>
            <p class="text-sm leading-relaxed text-(--bp-text-secondary)">
              {{ resource.description }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
