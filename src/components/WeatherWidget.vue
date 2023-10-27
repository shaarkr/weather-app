<template>
  <div
    class="flex flex-col gap-6 flex-grow h-full overflow-y-auto px-8 py-5 bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100"
    v-if="weather">
    <div class="flex items-center justify-between">
      <div class="inline-flex items-center gap-2">
        <icon icon="solar:map-point-broken" />
        <p>
          <strong class="text-zinc-800 font-semibold">{{ weather.location.name }}</strong>
          <span class="ml-2 text-sm font-normal text-zinc-500">{{
            weather.location.country
          }}</span>
        </p>
      </div>

      <span v-if="lastUpdatedAt" class="ml-2 text-sm font-normal text-zinc-500">{{
        lastUpdatedAt
      }}</span>
    </div>

    <div
      class="flex items-center justify-center sm:justify-start flex-wrap gap-4 sm:gap-8 py-4 sm:py-8">
      <div
        class="flex flex-shrink-0 items-center justify-center p-4 border border-gray-400 rounded-md">
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
        <p class="text-xl font-normal text-zinc-800 sm:ml-2">
          {{ weather.current.condition.text }}
        </p>
      </div>
    </div>

    <div class="flex flex-wrap justify-between gap-4">
      <weather-metric>
        <template #icon>
          <icon icon="solar:wind-broken" height="48" />
        </template>
        <template #metric>
          <p class="text-4xl sm:text-6xl text-zinc-700 relative font-secondary">
            {{ weather.current.wind_kph }}
            <span class="text-lg text-zinc-400">km/h</span>
          </p>
        </template>

        <template #meta>
          <p class="text-xs text-zinc-400 inline-flex gap-1 items-center">
            <icon icon="solar:compass-broken" height="16" />
            <span>{{ weather.current.wind_dir }}</span>
          </p>
          <p class="text-xs text-zinc-400 inline-flex gap-1 items-center">
            <icon icon="wi:barometer" height="16" />
            <span>{{ weather.current.wind_degree }} &deg;</span>
          </p>
        </template>
      </weather-metric>

      <weather-metric>
        <template #icon>
          <icon icon="carbon:humidity-alt" height="48" />
        </template>

        <template #metric>
          <p class="text-4xl sm:text-6xl text-zinc-700 relative font-secondary">
            {{ weather.current.humidity }}
            <span class="text-lg text-zinc-400">%</span>
          </p>
        </template>
      </weather-metric>

      <weather-metric>
        <template #icon>
          <icon icon="solar:cloud-bolt-minimalistic-broken" height="48" />
        </template>
        <template #metric>
          <p class="text-4xl sm:text-6xl text-zinc-700 relative font-secondary">
            {{ weather.current.precip_mm }}
            <span class="text-lg text-zinc-400">mm</span>
          </p>
        </template>
      </weather-metric>

      <weather-metric>
        <template #icon>
          <icon icon="pajamas:tachometer" height="48" />
        </template>
        <template #metric>
          <p class="text-4xl sm:text-6xl text-zinc-700 relative font-secondary">
            {{ weather.current.pressure_in }}
            <span class="text-lg text-zinc-400">in</span>
          </p>
        </template>
      </weather-metric>
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
  import WeatherMetric from '@/components/WeatherMetric.vue';
  import { Response } from '@/composables/useWeatherApi';
  import { computed } from 'vue';
  import dayjs from 'dayjs';
  import relativeTime from 'dayjs/plugin/relativeTime';
  dayjs.extend(relativeTime);

  interface Props {
    weather?: Response;
  }
  const props = defineProps<Props>();

  const lastUpdatedAt = computed(() => {
    const { weather } = props;
    if (!weather) return null;

    const localTime = dayjs(weather.location.localtime);
    return dayjs(weather.current.last_updated).from(localTime);
  });
</script>

<style scoped></style>
