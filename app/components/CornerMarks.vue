<script setup lang="ts">
withDefaults(defineProps<{ size?: number }>(), { size: 10 })
</script>

<template>
  <div class="absolute inset-0 pointer-events-none">
    <span
      class="absolute -top-px inset-s-[-1px] opacity-30 border-t-2 border-s-2 border-(--bp-accent)"
      :style="{ width: `${size}px`, height: `${size}px` }"
    />
    <span
      class="absolute -top-px inset-e-[-1px] opacity-30 border-t-2 border-e-2 border-(--bp-accent)"
      :style="{ width: `${size}px`, height: `${size}px` }"
    />
    <span
      class="absolute -bottom-px inset-s-[-1px] opacity-30 border-b-2 border-s-2 border-(--bp-accent)"
      :style="{ width: `${size}px`, height: `${size}px` }"
    />
    <span
      class="absolute -bottom-px inset-e-[-1px] opacity-30 border-b-2 border-e-2 border-(--bp-accent)"
      :style="{ width: `${size}px`, height: `${size}px` }"
    />
  </div>
</template>
