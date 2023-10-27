<template>
  <Transition name="slide-fade">
    <div
      v-if="show"
      @click="$emit('close')"
      class="fixed w-full h-full bg-gray-800 bg-opacity-40 backdrop-blur-sm transition-opacity duration-300 ease-linear flex left-0 top-0">
      <div
        @click.capture="void"
        class="transition-container z-50 w-3/4 bg-white shadow-md px-8 py-5 rounded-r-lg overflow-hidden transition-all duration-300 ease-linear left-0 top-0 bottom-0">
        <slot />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
  interface Props {
    show: boolean;
  }
  defineProps<Props>();

  defineEmits(['close']);
</script>

<style scoped>
  .slide-fade-enter-active .transition-container {
    @apply delay-75;
  }

  .slide-fade-enter-from .transition-container,
  .slide-fade-leave-to .transition-container {
    @apply -translate-x-full opacity-0 -scale-x-100;
  }
</style>
