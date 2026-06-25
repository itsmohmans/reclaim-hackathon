<script setup lang="ts">
defineProps<{
  data: {
    tag: string
    title: string
    description: string
    items: { name: string, description: string, link: string }[]
  }
}>()

const expandedCards = ref<Set<string>>(new Set())

const toggleCard = (key: string) => {
  if (expandedCards.value.has(key)) {
    expandedCards.value.delete(key)
  } else {
    expandedCards.value.add(key)
  }
}
</script>

<template>
  <section id="resources" class="bp-section-alt py-16 sm:py-24 px-6 sm:px-10">
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

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="resource in data.items"
          :key="resource.name"
          class="bp-card px-6 py-5 cursor-pointer select-none"
          @click="toggleCard(resource.name)"
        >
          <CornerMarks :size="8" />
          <div class="flex items-center justify-between gap-2">
            <h4 class="font-bold text-base font-heading text-(--bp-accent)">
              {{ resource.name }}
            </h4>
            <UIcon
              :name="expandedCards.has(resource.name) ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
              class="text-(--bp-text-secondary) shrink-0 size-4"
            />
          </div>
          <div v-show="expandedCards.has(resource.name)" @click.stop>
            <p class="text-sm leading-relaxed text-(--bp-text-secondary) mt-1.5">
              {{ resource.description }}
            </p>
            <NuxtLink
              :to="resource.link"
              target="_blank"
              class="inline-flex items-center gap-1 text-sm text-(--bp-accent) mt-2 hover:underline"
              @click.stop
            >
              Open link
              <UIcon name="i-lucide-external-link" class="size-3.5" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
