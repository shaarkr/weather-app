<template>
  <div class="flex h-full">
    <!-- Main -->
    <div
      class="flex flex-col h-full flex-1 bg-gradient-to-tr from-slate-50 to-slate-100 dark:from-slate-500 dark:to-slate-800 px-6 py-8 overflow-y-auto">
      <AppHeader />

      <div class="flex items-center justify-between">
        <h2 class="text-zinc-800 font-semibold">Search Results</h2>
      </div>

      <section class="flex flex-col mt-4 text-sm gap-2 flex-grow-0 overflow-y-auto">
        <ListItem v-for="item in 50" :key="item" />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
  import ListItem from '@/components/list/ListItem.vue';
  import AppHeader from '@/components/common/AppHeader.vue';
</script>
