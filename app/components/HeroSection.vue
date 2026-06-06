<script setup lang="ts">
const props = defineProps<{
  data: {
    tag: string
    title: string
    description: string
    date: string
    primaryCta: { label: string, to: string, color?: string, size?: string }
    secondaryCta: { label: string, to: string, color?: string, variant?: string, size?: string }
  }
}>()
</script>

<template>
  <section class="relative min-h-[calc(100vh-64px)] flex flex-col justify-center items-center text-center px-6 py-10">
    <div class="absolute inset-0 bp-dot-grid pointer-events-none" />

    <div class="relative z-10 max-w-[760px]">
      <p class="bp-label mb-4">{{ data.tag }}</p>

      <h1 class="font-bold text-[clamp(42px,6vw,80px)] leading-[1.04] rtl:leading-normal font-heading mb-6 whitespace-pre-line">
        {{ data.title }}
      </h1>

      <p class="text-[17px] leading-relaxed text-[var(--bp-text-secondary)] max-w-[540px] mx-auto mb-9">
        {{ data.description }}
      </p>

      <div class="flex justify-center items-center gap-4 mb-7 flex-wrap">
        <UButton
          :label="data.primaryCta.label"
          :to="data.primaryCta.to"
          color="primary"
          size="lg"
        />
        <a
          :href="data.secondaryCta.to"
          class="text-[15px] font-medium text-[var(--bp-text-secondary)] hover:opacity-75 transition-opacity py-3.5"
        >
          {{ data.secondaryCta.label }}
        </a>
      </div>

      <p class="text-lg font-bold text-[var(--bp-text-secondary)]">{{ data.date }}</p>

      <BlueprintDiagram />
    </div>
  </section>
</template>
