<script setup lang="ts">
defineProps<{
  data: {
    title: string
    description: string
    primaryCta: { label: string, to: string, color?: string, size?: string }
    secondaryCta: { label: string, to: string, color?: string, variant?: string, size?: string }
  }
}>()
</script>

<template>
  <section id="register" class="bp-section-dark py-16 sm:py-24 px-6 sm:px-10 text-center">
    <div class="max-w-[600px] mx-auto">
      <h2 class="font-bold text-[clamp(28px,3.5vw,44px)] leading-[1.15] font-heading text-[var(--bp-text-on-dark)] mb-4 whitespace-pre-line">
        {{ data.title }}
      </h2>
      <p class="text-[17px] leading-relaxed text-[var(--bp-text-on-dark)]/60 mb-9">
        {{ data.description }}
      </p>
      <div class="flex justify-center gap-4 flex-wrap">
        <UButton
          :label="data.primaryCta.label"
          :to="data.primaryCta.to"
          color="primary"
          size="lg"
        />
        <UButton
          :label="data.secondaryCta.label"
          :to="data.secondaryCta.to"
          color="neutral"
          variant="outline"
          size="lg"
          class="border-white/20 hover:bg-white/70"
        />
      </div>
    </div>
  </section>
</template>
