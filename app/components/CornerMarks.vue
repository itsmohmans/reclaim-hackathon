<script setup lang="ts">
withDefaults(defineProps<{ size?: number }>(), { size: 10 })
</script>

<template>
  <div class="absolute inset-0 pointer-events-none">
    <span
      class="absolute top-[-1px] start-[-1px] opacity-30 border-t-2 border-s-2 border-(--bp-accent)"
      :style="{ width: `${size}px`, height: `${size}px` }"
    />
    <span
      class="absolute top-[-1px] end-[-1px] opacity-30 border-t-2 border-e-2 border-(--bp-accent)"
      :style="{ width: `${size}px`, height: `${size}px` }"
    />
    <span
      class="absolute bottom-[-1px] start-[-1px] opacity-30 border-b-2 border-s-2 border-(--bp-accent)"
      :style="{ width: `${size}px`, height: `${size}px` }"
    />
    <span
      class="absolute bottom-[-1px] end-[-1px] opacity-30 border-b-2 border-e-2 border-(--bp-accent)"
      :style="{ width: `${size}px`, height: `${size}px` }"
    />
  </div>
</template>
