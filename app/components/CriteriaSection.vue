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
const expandedCriteria = ref<Set<string>>(new Set())

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
          class="bp-card flex gap-4 p-6"
        >
          <CornerMarks :size="8" />
          <span class="text-2xl font-bold text-(--bp-accent) font-heading leading-none shrink-0">
            {{ i + 1 }}
          </span>
          <div>
            <h4 class="font-bold text-xl font-heading mb-1">
              {{ item.title }}
            </h4>
            <p class="text-base leading-relaxed whitespace-pre-line text-(--bp-text-secondary)">
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
      <div v-if="data.disqualification" class="mt-12">
        <h3 class="font-bold text-2xl font-heading mb-4">
          {{ data.disqualification.title }}
        </h3>
        <p class="text-base leading-relaxed whitespace-pre-line text-(--bp-text-secondary) mb-4">
          {{ data.disqualification.description }}
        </p>
        <ul class="list-disc ps-6 space-y-2 text-(--bp-text-secondary)">
          <li
            v-for="(item, i) in data.disqualification.items"
            :key="i"
            class="text-base leading-relaxed"
            v-html="item"
          />
        </ul>
      </div>
    </div>
  </section>
</template>
