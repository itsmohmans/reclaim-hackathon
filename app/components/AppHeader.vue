<script setup lang="ts">
defineProps<{
  data: {
    brand: string
    links: { label: string, to: string }[]
    cta: { label: string, to: string }
  }
}>()

const { locale, toggleLocale } = useLocale()
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/" class="font-bold text-[17px] font-[family-name:var(--font-sans)]">
        {{ data.brand }}
      </NuxtLink>
    </template>

    <UNavigationMenu
      :items="data.links.map(l => ({ label: l.label, to: l.to }))"
      variant="link"
      class="hidden lg:flex"
    />

    <template #right>
      <UButton
        :label="locale === 'en' ? 'عربي' : 'EN'"
        color="neutral"
        variant="ghost"
        size="sm"
        class="font-medium"
        @click="toggleLocale"
      />
      <UButton
        :label="data.cta.label"
        :to="data.cta.to"
        color="primary"
        size="sm"
        class="hidden sm:flex"
      />
    </template>

    <template #body>
      <UNavigationMenu
        :items="data.links.map(l => ({ label: l.label, to: l.to }))"
        orientation="vertical"
      />
      <div class="mt-4 flex flex-col gap-2">
        <UButton
          :label="locale === 'en' ? 'عربي' : 'English'"
          color="neutral"
          variant="soft"
          block
          @click="toggleLocale"
        />
        <UButton
          :label="data.cta.label"
          :to="data.cta.to"
          color="primary"
          block
        />
      </div>
    </template>
  </UHeader>
</template>
