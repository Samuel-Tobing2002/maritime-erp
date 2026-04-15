<template>
  <div class="wrapper">

    <div class="item">
      <div class="icon green">
        <Check class="w-4 h-4" />
      </div>
      <span>Class Valid</span>
    </div>

    <div class="item">
      <div class="icon yellow">
        <Bell class="w-4 h-4" />
      </div>
      <span>3 Certificates Expiring</span>
    </div>

    <div class="item">
      <div class="icon red">
        <Wrench class="w-4 h-4" />
      </div>
      <span>1 Overdue PMS</span>
    </div>

    <div class="item">
      <div class="icon green">
        <Circle class="w-3 h-3 fill-green-600" />
      </div>
      <span>Underway</span>
    </div>

    <div class="item">
      <div class="icon gray">
        <Calendar class="w-4 h-4" />
      </div>
      <div class="flex flex-col leading-tight">
        <span class="text-xs text-gray-400">Next Dry Dock</span>
        <span class="font-medium">Mar 2027</span>
      </div>
    </div>

    <div class="item">
      <div class="icon gray">
        <Calendar class="w-4 h-4" />
      </div>
      <span class="font-medium">Jan 2027</span>
    </div>

  </div>
</template>

<script setup>
import { Check, Bell, Wrench, Circle, Calendar } from "lucide-vue-next";
</script>

<style scoped>

.wrapper {
  @apply bg-white rounded-xl shadow-sm flex overflow-hidden;
  height: 72px;
}

.item {
  @apply flex items-center gap-3 px-6 text-sm text-gray-700;
  flex: 1;
  border-right: 1px solid #e5e7eb;
}

.item:last-child {
  border-right: none;
}

/* ICON */
.icon {
  @apply w-10 h-10 rounded-full flex items-center justify-center;
}

.green { @apply bg-green-100 text-green-600; }
.yellow { @apply bg-yellow-100 text-yellow-600; }
.red { @apply bg-red-100 text-red-600; }
.gray { @apply bg-gray-100 text-gray-600; }

</style>