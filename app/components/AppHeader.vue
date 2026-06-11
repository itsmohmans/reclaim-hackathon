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
const colorMode = useColorMode()
const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink :to="$nuxt.$localePath('/')" class="font-bold text-lg font-heading">
        {{ data.brand }}
      </NuxtLink>
    </template>

    <UNavigationMenu
      :items="data.links"
      variant="link"
      :ui="{
        link: 'transition-colors hover:bg-transparent hover:outline hover:outline-dashed hover:text-(--bp-text-secondary)',
      }"
      class="hidden lg:flex"
    />

    <template #right>
      <UButton
        :icon="colorMode.value === 'dark' ? 'i-lucide-sun' : 'i-lucide-moon'"
        color="neutral"
        variant="ghost"
        size="sm"
        class="max-lg:hidden text-(--bp-text-secondary) cursor-pointer"
        @click="toggleColorMode"
      />
      <UButton
        :label="locale === 'en' ? 'عربي' : 'EN'"
        :to="switchLocalePath(otherLocale)"
        color="primary"
        variant="ghost"
        size="sm"
        class="text-(--bp-text-secondary) font-medium max-lg:hidden transition-none focus-visible:outline focus-visible:outline-(--bp-accent) focus-visible:outline-offset-2 cursor-pointer"
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
          linkLabel: 'w-full text-center text-xl p-4',
          link: 'bg-(--bp-bg)'
        }"
      />
      <div class="mt-4 flex flex-col gap-2">
        <UButton
          :label="data.cta.label"
          :to="$nuxt.$localePath(data.cta.to)"
          block
          color="primary"
          class="text-lg"
          size="lg"
        />
        <UButton
          :icon="colorMode.value === 'dark' ? 'i-lucide-sun' : 'i-lucide-moon'"
          :label="colorMode.value === 'dark' ? (locale === 'en' ? 'Light Mode' : 'الوضع الفاتح') : (locale === 'en' ? 'Dark Mode' : 'الوضع الداكن')"
          color="neutral"
          variant="ghost"
          block
          @click="toggleColorMode"
        />
        <UButton
          :label="locale === 'en' ? 'عربي' : 'English'"
          :to="switchLocalePath(otherLocale)"
          color="neutral"
          variant="ghost"
          block
        />
      </div>
    </template>
  </UHeader>
</template>
