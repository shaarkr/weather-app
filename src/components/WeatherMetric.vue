<template>
  <div class="flex gap-4">
    <div
      class="flex flex-shrink-0 items-center justify-center p-4 border border-gray-400 rounded-md">
      <slot name="icon"></slot>
    </div>
    <div class="flex flex-col gap-2 items-start justify-center" v-if="$slots.metric || $slots.meta">
      <p class="text-4xl sm:text-6xl text-zinc-700 relative font-secondary">
        <slot name="metric"></slot>
      </p>
      <div class="flex items-center gap-4 flex-wrap">
        <slot name="meta"></slot>
      </div>
    </div>
  </div>
</template>
