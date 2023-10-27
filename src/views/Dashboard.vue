<template>
  <div class="flex h-full">
    <!-- Main -->
    <div
      class="flex flex-col h-full flex-1 bg-gradient-to-tr from-slate-100 to-slate-200 dark:from-slate-500 dark:to-slate-800 px-6 py-8 overflow-y-auto">
      <AppHeader @search="findLocations" />

      <error-message v-if="loading" class="text-secondary opacity-60 animate-spin">
        <icon icon="solar:refresh-circle-broken" height="64" />
      </error-message>

      <error-message v-else-if="error" class="text-red-400">
        <icon icon="tdesign:search-error" height="128" />
        <p class="font-medium">{{ error }}</p>
      </error-message>

      <template v-else-if="locations">
        <div class="flex items-center justify-between">
          <h2 class="text-zinc-800 font-semibold">Search Results</h2>
        </div>

        <error-message v-if="locations.length === 0" class="text-secondary">
          <icon icon="solar:danger-triangle-broken" height="128" />
          <p class="font-medium">No data found!</p>
        </error-message>

        <section
          v-else
          class="flex flex-col mt-4 text-sm gap-2 flex-grow-0 overflow-y-auto">
          <ListItem
            v-for="location in locations"
            :key="location.id"
            :location="location"
            @click="fetchWeatherInfo(location.id)" />
        </section>
      </template>

      <error-message v-else class="text-zinc-500">
        <icon icon="solar:cloud-snowfall-minimalistic-broken" height="128" />
        <p class="font-medium">Enter a location to find the weather information</p>
      </error-message>
    </div>

    <Teleport to="body">
      <!-- use the modal component, pass in the prop -->
      <app-drawer :show="open" @close="open = false">
        <div class="flex items-center justify-center">
          <error-message
            v-if="weatherLoading"
            class="text-secondary opacity-60 animate-spin">
            <icon icon="solar:refresh-circle-broken" height="64" />
          </error-message>

          <error-message v-else-if="weatherError" class="text-red-400">
            <icon icon="tdesign:search-error" height="128" />
            <p class="font-medium">{{ weatherError }}</p>
          </error-message>

          <weather-widget v-if="weather" :weather="weather" />
        </div>
      </app-drawer>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
  import AppHeader from '@/components/common/AppHeader.vue';
  import AppDrawer from '@/components/common/AppDrawer.vue';
  import ErrorMessage from '@/components/common/ErrorMessage.vue';
  import ListItem from '@/components/list/ListItem.vue';
  import WeatherWidget from '@/components/WeatherWidget.vue';
  import { useSearchApi } from '@/composables/useSearchApi';
  import { useWeatherApi } from '@/composables/useWeatherApi';
  import { ref } from 'vue';

  const { data: locations, error, loading, fetch: findLocations } = useSearchApi();

  const {
    data: weather,
    weatherError,
    weatherLoading,
    loadWeatherInfo,
  } = useWeatherApi();

  const open = ref(true);

  function fetchWeatherInfo(id: number) {
    const query = `id:${id}`;
    loadWeatherInfo(query);
    open.value = true;
  }
</script>
