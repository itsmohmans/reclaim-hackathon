<script setup lang="ts">
const props = defineProps<{
  data: {
    tag: string
    title: string
    items: { question: string, answer: string }[]
  }
}>()

const accordionItems = computed(() =>
  props.data.items.map(item => ({
    label: item.question,
    content: item.answer
  }))
)
</script>

<template>
  <section id="faq" class="py-16 sm:py-24 px-6 sm:px-10">
    <div class="max-w-280 mx-auto">
      <div class="mb-12">
        <p class="bp-label mb-3">{{ data.tag }}</p>
        <h2 class="font-bold text-[clamp(28px,3.5vw,44px)] leading-[1.15] font-heading">
          {{ data.title }}
        </h2>
      </div>

      <div class="max-w-[720px]">
        <UAccordion
          :items="accordionItems"
          type="single"
          collapsible
        />
      </div>
    </div>
  </section>
</template>
