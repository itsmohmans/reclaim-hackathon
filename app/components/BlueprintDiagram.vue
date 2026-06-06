<template>
  <svg viewBox="0 0 600 180" class="w-full max-w-[520px] mt-10 mx-auto">
    <g v-for="(box, i) in boxes" :key="'b' + i">
      <rect
        :x="box.x" :y="box.y" :width="box.w" :height="box.h"
        fill="none" stroke="var(--bp-accent)" stroke-width="1"
        opacity="0.3" stroke-dasharray="4 3" rx="2"
      />
      <text
        :x="box.x + box.w / 2" :y="box.y + box.h / 2 + 4"
        text-anchor="middle" fill="var(--bp-accent)"
        font-size="11" font-family="var(--font-body)" font-weight="500" opacity="0.5"
      >{{ box.label }}</text>
    </g>
    <line
      v-for="(a, i) in arrows" :key="'a' + i"
      :x1="a[0]" :y1="a[1]" :x2="a[2]" :y2="a[3]"
      stroke="var(--bp-accent)" stroke-width="1" opacity="0.2" stroke-dasharray="6 4"
    />
  </svg>
</template>

<script setup lang="ts">
const boxes = [
  { x: 20, y: 70, w: 120, h: 50, label: 'Your Data' },
  { x: 240, y: 20, w: 120, h: 50, label: 'Federation' },
  { x: 240, y: 110, w: 120, h: 50, label: 'Self-Host' },
  { x: 460, y: 70, w: 120, h: 50, label: 'Open Web' }
]

const arrows = [
  [140, 95, 240, 45],
  [140, 95, 240, 135],
  [360, 45, 460, 95],
  [360, 135, 460, 95]
]
</script>
