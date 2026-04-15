<template>
  <div class="wrapper">

    <div class="flex justify-between items-center">
      <h3 class="title">Navigation & Voyage</h3>
      <MoreVertical class="w-5 h-5 text-gray-400 cursor-pointer" />
    </div>

    <div class="map">
      MAP HERE
    </div>

    <div class="route">

      <div class="text-left">
        <p class="code">IDMRK</p>
        <p class="port">MERAK</p>
      </div>

      <div class="line">
        <div class="progress"></div>
        <div class="dot"></div>
      </div>

      <div class="text-right">
        <p class="code">IDTJPRK</p>
        <p class="port">TANJUNG PERAK</p>
      </div>

    </div>

    <div class="info-list">

      <div class="info-item">
        <span>Navigational Status</span>
      </div>

      <div class="info-item">
        <span>Reported ETA</span>
      </div>

      <div class="info-item">
        <span>Reported Destination</span>
      </div>

      <div class="info-item">
        <span>Last AIS Update</span>
      </div>

      <div class="info-item flex justify-between items-center">
        <span>Speed</span>
        <span class="status">● Underway</span>
      </div>

    </div>

  </div>
</template>

<script setup>
import { MoreVertical } from "lucide-vue-next";
</script>

<style scoped>

.wrapper {
  @apply bg-white rounded-xl shadow-sm p-5 space-y-4;
}

.title {
  @apply text-sm font-semibold text-gray-700;
}

.map {
  @apply h-60 bg-gray-300 rounded-lg flex items-center justify-center text-sm text-gray-500;
}

.route {
  @apply flex items-center justify-between text-xs mt-2;
}

.code {
  @apply text-blue-600 font-semibold;
}

.port {
  @apply text-gray-500;
}

.line {
  @apply relative flex-1 mx-4 h-[2px] bg-gray-300;
}

.progress {
  @apply absolute left-0 top-0 h-[2px] bg-blue-600 w-[70%];
}

.dot {
  @apply absolute top-1/2 -translate-y-1/2 left-[70%] w-3 h-3 bg-blue-600 rounded-full;
}

.info-list {
  @apply mt-3;
}

.info-item {
  @apply py-2 border-b text-sm text-gray-600;
}

.status {
  @apply text-green-600 font-medium;
}

</style>