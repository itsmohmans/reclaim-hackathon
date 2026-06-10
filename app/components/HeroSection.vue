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
  <section class="relative min-h-[calc(100vh-64px)] flex flex-col justify-center items-center text-center px-6 py-10 overflow-hidden">
    <ClientOnly>
      <div class="absolute inset-0 pointer-events-none">
        <PixelBlast
          variant="square"
          :pixel-size="3"
          color="var(--bp-accent)"
          :pattern-scale="2"
          :pattern-density="0.8"
          :speed="0.3"
          :edge-fade="0.4"
          :enable-ripples="true"
          :ripple-speed="0.3"
          :ripple-thickness="0.1"
          :ripple-intensity-scale="1"
          :transparent="true"
          :auto-pause-offscreen="true"
        />
      </div>
    </ClientOnly>

    <div class="relative z-10 max-w-190">
      <p class="bp-label mb-4">{{ data.tag }}</p>

      <h1 class="font-bold text-[clamp(42px,6vw,80px)] leading-[1.04] rtl:leading-normal font-heading mb-6 whitespace-pre-line">
        {{ data.title }}
      </h1>

      <p class="text-[17px] leading-relaxed text-(--bp-text-secondary) max-w-135 mx-auto mb-9 bg-(--bp-bg) rounded-md px-4 py-2">
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
          class="text-[15px] font-medium text-(--bp-text-secondary) hover:opacity-75 transition-opacity py-2 px-4 bg-(--bp-bg) rounded-md"
        >
          {{ data.secondaryCta.label }}
        </a>
      </div>

      <p class="text-lg font-bold text-(--bp-text-secondary) bg-(--bp-bg) rounded-md px-4 py-2 inline-block">{{ data.date }}</p>

      <BlueprintDiagram />
    </div>
  </section>
</template>
