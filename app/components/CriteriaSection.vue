<script setup lang="ts">
defineProps<{
  data: {
    tag: string
    title: string
    description: string
    items: { title: string, description: string, examplesTitle?: string, examples?: string[] }[]
    disqualification: {
      title: string
      description: string
      items: string[]
    }
  }
}>()
const expandedCards = ref<Set<string>>(new Set())
const expandedCriteria = ref<Set<string>>(new Set())

const toggleCard = (key: string) => {
  if (expandedCards.value.has(key)) {
    expandedCards.value.delete(key)
  } else {
    expandedCards.value.add(key)
  }
}

const toggleExamples = (num: string) => {
  if (expandedCriteria.value.has(num)) {
    expandedCriteria.value.delete(num)
  } else {
    expandedCriteria.value.add(num)
  }
}
</script>

<template>
  <section id="criteria" class="bp-section-alt py-16 sm:py-24 px-6 sm:px-10">
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
          v-for="(item, i) in data.items"
          :key="item.title"
          class="bp-card p-6 cursor-pointer select-none"
          @click="toggleCard(item.title)"
        >
          <CornerMarks :size="8" />
          <div class="flex gap-4 items-start">
            <span class="text-2xl font-bold text-(--bp-accent) font-heading leading-none shrink-0">
              {{ i + 1 }}
            </span>
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between gap-2">
                <h4 class="font-bold text-xl font-heading">
                  {{ item.title }}
                </h4>
                <UIcon
                  :name="expandedCards.has(item.title) ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
                  class="text-(--bp-text-secondary) shrink-0 size-5"
                />
              </div>
              <div v-show="expandedCards.has(item.title)" @click.stop>
                <p class="text-base leading-relaxed whitespace-pre-line text-(--bp-text-secondary) mt-1">
                  {{ item.description }}
                </p>
                <div v-if="item.examples?.length" class="mt-4">
                  <UButton
                    :label="item.examplesTitle || 'Examples'"
                    :trailing-icon="expandedCriteria.has(item.title) ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
                    variant="ghost"
                    size="sm"
                    @click="toggleExamples(item.title)"
                  />
                  <ul
                    v-show="expandedCriteria.has(item.title)"
                    class="mt-2 space-y-1.5 ps-4"
                  >
                    <li
                      v-for="example in item.examples"
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
      </div>
      <div v-if="data.disqualification" class="mt-8">
        <div
          class="bp-card px-5 py-4 cursor-pointer select-none"
          @click="toggleCard('disqualification')"
        >
          <CornerMarks :size="6" />
          <div class="flex items-center justify-between gap-2">
            <h3 class="font-bold text-lg font-heading">
              {{ data.disqualification.title }}
            </h3>
            <UIcon
              :name="expandedCards.has('disqualification') ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
              class="text-(--bp-text-secondary) shrink-0 size-4"
            />
          </div>
          <div v-show="expandedCards.has('disqualification')" @click.stop>
            <p class="text-sm leading-relaxed whitespace-pre-line text-(--bp-text-secondary) mt-2 mb-3">
              {{ data.disqualification.description }}
            </p>
            <ul class="list-disc ps-5 space-y-1.5 text-(--bp-text-secondary)">
              <li
                v-for="(item, i) in data.disqualification.items"
                :key="i"
                class="text-sm leading-relaxed"
                v-html="item"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
