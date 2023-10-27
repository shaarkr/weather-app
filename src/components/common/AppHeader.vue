<template>
  <div
    class="flex flex-col md:flex-row gap-6 md:items-center justify-between pb-8 border-b border-gray-100">
    <!-- Date -->
    <div>
      <p class="text-xl text-zinc-800 font-bold">{{ currentMonth }}</p>
      <p class="text-xs text-zinc-400">{{ currentDate }}</p>
    </div>

    <!-- Search Input -->
    <div class="relative rounded-md flex-grow md:flex-grow-0">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2">
        <icon
          class="text-gray-500 sm:text-sm"
          icon="solar:map-point-search-broken"
          height="16" />
      </div>
      <input
        type="search"
        name="location"
        id="location"
        class="block w-full rounded-md border-0 py-1.5 pl-8 pr-6 bg-gray-50 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-500 focus:ring-primary sm:text-sm sm:leading-6"
        placeholder="Search location"
        v-model="query"
        @keyup="onSearch" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  import dayjs from 'dayjs';

  const query = ref('');
  const emits = defineEmits(['search']);

  const currentMonth = computed(() => dayjs().format('MMMM, YYYY'));
  const currentDate = computed(() => dayjs().format('dddd, MMM D, YYYY'));

  const onSearch = () => {
    emits('search', query.value);
  };
</script>
