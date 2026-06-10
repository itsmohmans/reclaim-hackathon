<script setup lang="ts">
withDefaults(defineProps<{ size?: number }>(), { size: 10 })
</script>

<template>
  <span
    class="absolute opacity-30 border-(--bp-accent)"
    :style="{ width: `${size}px`, height: `${size}px`, top: '-1px', insetInlineStart: '-1px', borderBlockStart: '2px solid', borderInlineStart: '2px solid' }"
  />
  <span
    class="absolute opacity-30 border-(--bp-accent)"
    :style="{ width: `${size}px`, height: `${size}px`, top: '-1px', insetInlineEnd: '-1px', borderBlockStart: '2px solid', borderInlineEnd: '2px solid' }"
  />
  <span
    class="absolute opacity-30 border-(--bp-accent)"
    :style="{ width: `${size}px`, height: `${size}px`, bottom: '-1px', insetInlineStart: '-1px', borderBlockEnd: '2px solid', borderInlineStart: '2px solid' }"
  />
  <span
    class="absolute opacity-30 border-(--bp-accent)"
    :style="{ width: `${size}px`, height: `${size}px`, bottom: '-1px', insetInlineEnd: '-1px', borderBlockEnd: '2px solid', borderInlineEnd: '2px solid' }"
  />
</template>
