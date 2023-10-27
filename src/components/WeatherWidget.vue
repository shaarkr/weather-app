<template>
  <div
    class="flex flex-col gap-6 flex-grow h-full overflow-y-auto px-8 py-5 bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100"
    v-if="weather">
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

    <div class="flex flex-wrap justify-between gap-4">
      <div class="flex gap-4">
        <div
          class="flex flex-shrink-0 items-center justify-center p-4 border border-gray-200 rounded-sm">
          <icon icon="solar:wind-broken" height="48" />
        </div>
        <div class="flex flex-col gap-2 items-start">
          <p class="text-4xl sm:text-6xl text-zinc-700 relative font-secondary">
            {{ weather.current.wind_kph }}
            <span class="text-lg text-zinc-400">km/h</span>
          </p>
          <div class="flex items-center gap-4 flex-wrap">
            <p class="text-xs text-zinc-400 inline-flex gap-1 items-center">
              <icon icon="solar:compass-broken" height="16" />
              <span>{{ weather.current.wind_dir }}</span>
            </p>
            <p class="text-xs text-zinc-400 inline-flex gap-1 items-center">
              <icon icon="wi:barometer" height="16" />
              <span>{{ weather.current.wind_degree }} &deg;</span>
            </p>
          </div>
        </div>
      </div>

      <div class="flex gap-4">
        <div
          class="flex flex-shrink-0 items-center justify-center p-4 border border-gray-200 rounded-sm">
          <icon icon="carbon:humidity-alt" height="48" />
        </div>
        <div class="flex flex-col gap-2 items-start">
          <p class="text-4xl sm:text-6xl text-zinc-700 relative font-secondary">
            {{ weather.current.humidity }}
            <span class="text-lg text-zinc-400">%</span>
          </p>
        </div>
      </div>

      <div class="flex gap-4">
        <div
          class="flex flex-shrink-0 items-center justify-center p-4 border border-gray-200 rounded-sm">
          <icon icon="solar:cloud-bolt-minimalistic-broken" height="48" />
        </div>
        <div class="flex flex-col gap-2 items-start">
          <p class="text-4xl sm:text-6xl text-zinc-700 relative font-secondary">
            {{ weather.current.precip_mm }}
            <span class="text-lg text-zinc-400">mm</span>
          </p>
        </div>
      </div>

      <div class="flex gap-4">
        <div
          class="flex flex-shrink-0 items-center justify-center p-4 border border-gray-200 rounded-sm">
          <icon icon="pajamas:tachometer" height="48" />
        </div>
        <div class="flex flex-col gap-2 items-start">
          <p class="text-4xl sm:text-6xl text-zinc-700 relative font-secondary">
            {{ weather.current.pressure_in }}
            <span class="text-lg text-zinc-400">in</span>
          </p>
        </div>
      </div>
    </div>

    <a
      class="sm:self-end self-center mt-16"
      href="https://www.weatherapi.com/"
      title="Free Weather API"
      ><img
        src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
        alt="Weather data by WeatherAPI.com"
        border="0"
    /></a>
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
