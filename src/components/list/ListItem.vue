<template>
  <div
    class="flex items-center gap-2 flex-wrap cursor-pointer select-none group text-gray-800 border border-gray-200 hover:text-gray-50 hover:bg-secondary hover:border-secondary active:bg-primary transition-all duration-75 rounded-md px-3 py-4">
    <icon class="self-start mt-1" icon="solar:map-arrow-square-broken" height="16" />

    <div class="flex flex-col sm:flex-row sm:items-center sm:flex-grow gap-4 flex-wrap">
      <div class="flex flex-col gap-2 flex-1 font-medium">
        <p>{{ location.name }}</p>
        <p
          class="text-xs text-gray-400 group-hover:text-gray-300 flex items-center gap-2">
          <span>Lat: {{ location.lat }}</span>
          <span>Lon: {{ location.lon }}</span>
        </p>
      </div>
      <p
        class="text-sm font-normal tracking-wide text-gray-500 group-hover:text-gray-200">
        {{ region }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Location } from '@/composables/useSearchApi';
  import { computed } from 'vue';

  interface Props {
    location: Location;
  }
  const props = defineProps<Props>();

  const region = computed(() => `${props.location.region}, ${props.location.country}`);
</script>
