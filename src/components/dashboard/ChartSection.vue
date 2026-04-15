<template>
  <div class="grid grid-cols-3 gap-6">

    <div class="bg-white p-5 rounded-xl shadow-sm">
      <h3 class="font-semibold text-gray-700 mb-4">Vessel Type</h3>

      <div class="w-40 mx-auto">
        <DonutChart
          :labels="['Tug Boat', 'Barge', 'Cargo', 'Tanker']"
          :data="[40, 25, 20, 15]"
          :colors="['#2BBBAD', '#4285F4', '#FF8C42', '#F4C542']"
        />
      </div>

      <div class="flex justify-center gap-6 mt-4 text-sm text-gray-700">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 bg-[#2BBBAD]"></span> Tug Boat
        </div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 bg-[#4285F4]"></span> Barge
        </div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 bg-[#FF8C42]"></span> Cargo
        </div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 bg-[#F4C542]"></span> Tanker
        </div>
      </div>
    </div>

    <div class="bg-white p-5 rounded-xl shadow-sm">
      <h3 class="font-semibold text-gray-700 mb-4">Vessel Status</h3>
      <div class="w-40 mx-auto">
        <DonutChart
          :labels="['Underway', 'At port', 'Inactive', 'Docking']"
          :data="[50, 20, 15, 15]"
          :colors="['#2BBBAD', '#4285F4', '#FF8C42', '#F4C542']"
        />
      </div>

      <div class="flex justify-center gap-6 mt-4 text-sm text-gray-700">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 bg-[#2BBBAD]"></span> Underway
        </div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 bg-[#4285F4]"></span> At port
        </div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 bg-[#FF8C42]"></span> Inactive
        </div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 bg-[#F4C542]"></span> Docking
        </div>
      </div>
    </div>

    <div class="bg-white p-5 rounded-xl shadow-sm">
      <h3 class="font-semibold text-gray-700 mb-4">Recent Activity</h3>

      <div class="h-40 flex items-center justify-center text-gray-400">
        No activity yet
      </div>
    </div>

  </div>
</template>

<script setup>
import DonutChart from "../ui/DonutChart.vue";
</script>