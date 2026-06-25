<script setup lang="ts">
defineProps<{
  data: {
    tag: string
    title: string
    description: string
    items: { num: string, title: string, description: string, examplesTitle?: string, examples?: string[] }[]
  }
}>()

const expandedCards = ref<Set<string>>(new Set())
const expandedTracks = ref<Set<string>>(new Set())

const toggleCard = (key: string) => {
  if (expandedCards.value.has(key)) {
    expandedCards.value.delete(key)
  } else {
    expandedCards.value.add(key)
  }
}

const toggleExamples = (num: string) => {
  if (expandedTracks.value.has(num)) {
    expandedTracks.value.delete(num)
  } else {
    expandedTracks.value.add(num)
  }
}
</script>

<template>
  <section id="tracks" class="bp-section-alt py-16 sm:py-24 px-6 sm:px-10">
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

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div
          v-for="track in data.items"
          :key="track.num"
          class="bp-card bg-(--bp-bg)! p-8 hover:bg-(--bp-accent-light)! transition-all cursor-pointer select-none"
          @click="toggleCard(track.num)"
        >
          <CornerMarks />
          <div class="flex items-start justify-between gap-2 mt-2">
            <div class="flex-1 min-w-0">
              <span class="font-heading text-xs font-semibold text-(--bp-accent) tracking-wider">
                {{ track.num }}
              </span>
              <h3 class="font-bold text-xl font-heading mt-2">
                {{ track.title }}
              </h3>
            </div>
            <UIcon
              :name="expandedCards.has(track.num) ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
              class="text-(--bp-text-secondary) shrink-0 size-5 mt-1"
            />
          </div>

          <div v-show="expandedCards.has(track.num)" @click.stop>
            <p class="text-[15px] leading-relaxed text-(--bp-text-secondary) mt-2.5">
              {{ track.description }}
            </p>
            <div v-if="track.examples?.length" class="mt-4">
              <UButton
                :label="track.examplesTitle || 'Examples'"
                :trailing-icon="expandedTracks.has(track.num) ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
                variant="ghost"
                size="sm"
                @click="toggleExamples(track.num)"
              />
              <ul
                v-show="expandedTracks.has(track.num)"
                class="mt-2 space-y-1.5 ps-4"
              >
                <li
                  v-for="example in track.examples"
                  :key="example"
                  class="text-sm leading-relaxed text-(--bp-text-secondary) list-disc"
                >
                  {{ example }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
