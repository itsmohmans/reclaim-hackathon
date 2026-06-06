<script setup lang="ts">
defineProps<{
  data: {
    tag: string
    title: string
    description: string
    pillars: { title: string, description: string }[]
    challenge: {
      title: string
      paragraphs: string[]
    }
  }
}>()
</script>

<template>
  <section id="about" class="py-16 sm:py-24 px-6 sm:px-10">
    <div class="max-w-[1120px] mx-auto">
      <div class="mb-12">
        <p class="bp-label mb-3">{{ data.tag }}</p>
        <h2 class="font-bold text-[clamp(28px,3.5vw,44px)] leading-[1.15] font-[family-name:var(--font-sans)] mb-3.5">
          {{ data.title }}
        </h2>
        <p class="text-[17px] leading-relaxed text-[var(--bp-text-secondary)] max-w-[580px]">
          {{ data.description }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-20">
        <div
          v-for="(pillar, i) in data.pillars"
          :key="pillar.title"
          class="bp-card p-7"
        >
          <CornerMarks />
          <div class="w-9 h-9 rounded-xs bg-[var(--bp-accent-light)] flex items-center justify-center mb-4 text-[15px] font-bold text-[var(--bp-accent)] font-[family-name:var(--font-sans)]">
            {{ i + 1 }}
          </div>
          <h3 class="font-bold text-lg font-[family-name:var(--font-sans)] mb-2">
            {{ pillar.title }}
          </h3>
          <p class="text-[15px] leading-relaxed text-[var(--bp-text-secondary)]">
            {{ pillar.description }}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 class="font-bold text-[clamp(24px,2.5vw,32px)] leading-[1.2] font-[family-name:var(--font-sans)] mb-4">
            {{ data.challenge.title }}
          </h3>
          <p
            v-for="(para, i) in data.challenge.paragraphs"
            :key="i"
            class="text-base leading-[1.7] text-[var(--bp-text-secondary)] mb-4 last:mb-0"
          >
            {{ para }}
          </p>
        </div>
        <div class="bp-card aspect-[4/3] flex items-center justify-center p-6">
          <span class="font-mono text-[13px] text-[var(--bp-text-secondary)] opacity-50 text-center">
            [ illustration placeholder ]
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
