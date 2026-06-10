<script setup lang="ts">
defineProps<{
  data: {
    tag: string
    title: string
    steps: { num: string, title: string, description: string }[]
  }
}>()
</script>

<template>
  <section id="howitworks" class="py-16 sm:py-24 px-6 sm:px-10">
    <div class="max-w-280 mx-auto">
      <div class="mb-12">
        <p class="bp-label mb-3">{{ data.tag }}</p>
        <h2 class="font-bold text-[clamp(28px,3.5vw,44px)] leading-[1.15] font-heading">
          {{ data.title }}
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div
          v-for="step in data.steps"
          :key="step.num"
          class="text-center"
        >
          <div class="w-12 h-12 rounded-xs bg-(--bp-accent) text-white flex items-center justify-center text-xl font-bold font-heading mb-4 mx-auto">
            {{ step.num }}
          </div>
          <h3 class="font-bold text-xl font-heading mb-2">
            {{ step.title }}
          </h3>
          <p class="text-[15px] leading-relaxed text-(--bp-text-secondary)">
            {{ step.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
