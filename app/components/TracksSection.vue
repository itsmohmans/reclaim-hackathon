<script setup lang="ts">
defineProps<{
  data: {
    tag: string
    title: string
    description: string
    items: { num: string, title: string, description: string, examplesTitle?: string, examples?: string[] }[]
  }
}>()

const expandedTracks = ref<Set<string>>(new Set())

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
          class="bp-card bg-(--bp-bg)! p-8 hover:scale-105 hover:bg-(--bp-accent-light)! transition-all"
        >
          <CornerMarks />
          <span class="font-heading text-xs font-semibold text-(--bp-accent) tracking-wider">
            {{ track.num }}
          </span>
          <h3 class="font-bold text-xl font-heading mt-2 mb-2.5">
            {{ track.title }}
          </h3>
          <p class="text-[15px] leading-relaxed text-(--bp-text-secondary)">
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
  </section>
</template>
