<script setup lang="ts">
defineProps<{
  data: {
    brand: string
    links: { label: string, to: string }[]
    cta: { label: string, to: string }
  }
}>()

const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const otherLocale = computed(() => locale.value === 'en' ? 'ar' : 'en')
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/" class="font-bold text-[17px] font-heading">
        {{ data.brand }}
      </NuxtLink>
    </template>

    <UNavigationMenu
      :items="data.links"
      variant="link"
      :ui="{
        link: 'transition-colors hover:rounded-none hover:bg-transparent hover:outline hover:outline-dashed hover:text-[var(--bp-text-secondary)]',
      }"
      class="hidden lg:flex"
    />

    <template #right>
      <UButton
        :label="locale === 'en' ? 'عربي' : 'EN'"
        :to="switchLocalePath(otherLocale)"
        color="primary"
        variant="ghost"
        size="sm"
        class="text-[var(--bp-text-secondary)] font-medium max-lg:hidden transition-none focus-visible:outline focus-visible:outline-[var(--bp-accent)] focus-visible:outline-offset-2 rounded-sm cursor-pointer"
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
        :ui="{
          linkLabel: 'w-full rtl:text-right'
        }"
      />
      <div class="mt-4 flex flex-col gap-2">
        <UButton
          :label="locale === 'en' ? 'عربي' : 'English'"
          :to="switchLocalePath(otherLocale)"
          color="neutral"
          variant="soft"
          block
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
