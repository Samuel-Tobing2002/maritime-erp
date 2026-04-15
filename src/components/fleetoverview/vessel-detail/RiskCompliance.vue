<template>
  <div class="wrapper">

    <!-- HEADER -->
    <div class="flex justify-between items-center">
      <h3 class="title">Risk & Compliance</h3>
      <span class="view">View All</span>
    </div>

    <!-- LIST -->
    <div class="list">

      <div class="item">
        Class & Surveys
        <ChevronRight class="icon" />
      </div>

      <div class="item">
        Certificates
        <ChevronRight class="icon" />
      </div>

      <div class="item">
        Maintenance Risk
        <ChevronRight class="icon" />
      </div>

      <div class="item">
        Operational Risk
        <ChevronRight class="icon" />
      </div>

      <div class="item">
        Next Dry Dock
        <ChevronRight class="icon" />
      </div>

    </div>

  </div>
</template>

<script setup>
import { ChevronRight } from "lucide-vue-next";
</script>

<style scoped>

.wrapper {
  @apply bg-white rounded-xl shadow-sm p-5 space-y-4;
}

.title {
  @apply text-sm font-semibold text-gray-700;
}

.view {
  @apply text-xs text-gray-500 cursor-pointer;
}

.list {
  @apply divide-y;
}

.item {
  @apply flex justify-between items-center py-3 text-sm text-gray-700 cursor-pointer hover:bg-gray-50 px-2 rounded;
}

.icon {
  @apply w-4 h-4 text-gray-400;
}

</style>