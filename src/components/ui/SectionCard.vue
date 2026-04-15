<template>
  <div class="bg-white rounded-xl border shadow-sm">
    <div class="px-5 py-3 border-b font-semibold text-gray-700">
      {{ title }}
    </div>

    <div class="p-5">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String
});
</script>