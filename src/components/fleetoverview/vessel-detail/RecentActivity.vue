RecentActivity<template>
  <div class="wrapper">

    <h3 class="title">Recent Activity</h3>

    <div class="list">

      <div class="item">
        <ChevronRight class="icon" />
        <p><span>3 days ago</span> - Vessel Depart From Merak</p>
      </div>

      <div class="item">
        <ChevronRight class="icon" />
        <p><span>7 days ago</span> - Insurance Certificate Renewed</p>
      </div>

      <div class="item">
        <ChevronRight class="icon" />
        <p><span>30 days ago</span> - Vessel Has Finished Engine Maintenance</p>
      </div>

      <div class="item">
        <ChevronRight class="icon" />
        <p><span>30 days ago</span> - Vessel Has Finished Engine Maintenance</p>
      </div>

      <div class="item">
        <ChevronRight class="icon" />
        <p><span>30 days ago</span> - Vessel Has Finished Engine Maintenance</p>
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

.list {
  @apply space-y-2;
}

.item {
  @apply flex items-center gap-2 text-sm text-gray-700;
}

.item span {
  @apply text-gray-500;
}

.icon {
  @apply w-4 h-4 text-gray-400;
}

</style>