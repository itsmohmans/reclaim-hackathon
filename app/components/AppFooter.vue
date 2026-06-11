<script setup lang="ts">
defineProps<{
  data: {
    brand: string
    tagline: string
    eventLinks: { label: string, to: string }[]
    connectLinks: { label: string, to: string }[]
    copyright: string
  }
}>()
</script>

<template>
  <footer class="bp-section-dark border-t border-white/6">
    <div class="max-w-280 mx-auto px-6 sm:px-10 py-12">
      <div class="flex flex-col sm:flex-row justify-between items-start gap-8">
        <div>
          <p class="font-bold text-base font-heading mb-2">
            {{ data.brand }}
          </p>
          <p class="text-sm opacity-45">{{ data.tagline }}</p>
        </div>

        <div class="flex gap-12">
          <div>
            <p class="text-[11px] uppercase tracking-[0.12em] opacity-35 font-semibold mb-3">
              Event
            </p>
            <NuxtLink
              v-for="link in data.eventLinks"
              :key="link.label"
              :to="$nuxt.$localePath(link.to)"
              class="block text-sm opacity-55 mb-2 hover:opacity-80 transition-opacity"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
          <div>
            <p class="text-[11px] uppercase tracking-[0.12em] opacity-35 font-semibold mb-3">
              Connect
            </p>
            <NuxtLink
              v-for="link in data.connectLinks"
              :key="link.label"
              :to="$nuxt.$localePath(link.to)"
              class="block text-sm opacity-55 mb-2 hover:opacity-80 transition-opacity"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="mt-8 pt-6 border-t border-white/6 text-sm opacity-35">
        {{ data.copyright }}
      </div>
    </div>
  </footer>
</template>
