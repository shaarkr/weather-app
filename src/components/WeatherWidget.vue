<template>
  <div class="flex flex-col gap-6 flex-grow" v-if="weather">
    <div class="flex items-center justify-between">
      <div class="inline-flex items-center gap-2">
        <icon icon="solar:map-point-broken" />
        <p>
          <strong class="text-zinc-800 font-semibold">{{ weather.location.name }}</strong>
          <span class="ml-2 text-sm font-normal text-zinc-400">{{
            weather.location.country
          }}</span>
        </p>
      </div>
    </div>

    <div
      class="flex items-center justify-center sm:justify-start flex-wrap gap-4 sm:gap-8 py-4 sm:py-8">
      <div
        class="flex flex-shrink-0 items-center justify-center p-4 border border-gray-200 rounded-sm">
        <img
          class="w-20 sm:w-32 h-20 sm:h-32 object-contain"
          :src="weather.current.condition.icon"
          :alt="weather.current.condition.text" />
      </div>
      <div class="flex flex-col gap-4 items-start">
        <p class="text-6xl sm:text-8xl text-zinc-700 relative font-secondary">
          {{ weather.current.temp_c }}
          <span
            class="text-lg text-zinc-400 font-medium absolute sm:-right-16 sm:top-4 -right-8 top-2"
            >&deg; C</span
          >
        </p>
        <p class="text-xl font-normal text-zinc-300 sm:ml-2">
          {{ weather.current.condition.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Response } from '@/composables/useWeatherApi';

  interface Props {
    weather?: Response;
  }
  defineProps<Props>();
</script>

<style scoped></style>
