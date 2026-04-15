<template>
  <div class="space-y-6">

    <div class="grid grid-cols-3 gap-6">

      <div class="bg-white p-5 rounded-xl shadow-sm">
        <h3 class="font-semibold text-gray-700 mb-4">Fleet Status</h3>

        <div class="flex items-center justify-between">
          <div class="w-40">
            <DonutChart
              :labels="['Underway', 'At port', 'Maintenance', 'Off-hire']"
              :data="[55, 20, 15, 10]"
              :colors="['#2BBBAD', '#4285F4', '#F4C542', '#FF8C42']"
            />
          </div>

          <div class="space-y-2 text-sm">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 bg-[#2BBBAD]"></span> Underway
            </div>
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 bg-[#4285F4]"></span> At port
            </div>
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 bg-[#F4C542]"></span> Maintenance
            </div>
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 bg-[#FF8C42]"></span> Off-hire
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-2 bg-white p-5 rounded-xl shadow-sm">
        <h3 class="font-semibold text-gray-700 mb-4">Crew Overview</h3>

        <div class="h-40 flex items-center justify-center text-gray-400">
          No data yet
        </div>
      </div>

    </div>

    <div class="grid grid-cols-3 gap-6">

      <!-- Document Status -->
      <div class="bg-white p-5 rounded-xl shadow-sm">
        <h3 class="font-semibold text-gray-700 mb-4">Document Status</h3>

        <div class="flex items-center justify-between">
          <div class="w-40">
            <DonutChart
              :labels="['Valid', 'Expiring', 'Overdue']"
              :data="[60, 25, 15]"
              :colors="['#2BBBAD', '#F4C542', '#FF8C42']"
            />
          </div>

          <div class="space-y-2 text-sm">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 bg-[#2BBBAD]"></span> Valid
            </div>
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 bg-[#F4C542]"></span> Expiring
            </div>
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 bg-[#FF8C42]"></span> Overdue
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white p-5 rounded-xl shadow-sm">
        <h3 class="font-semibold text-gray-700 mb-4">Overall Compliance</h3>

        <div class="text-3xl font-bold text-center mb-2">95%</div>

        <div class="w-full bg-gray-200 rounded-full h-2">
          <div class="bg-green-500 h-2 rounded-full w-[95%]"></div>
        </div>

        <div class="mt-4 text-sm text-gray-500 text-center">
          Updated today
        </div>
      </div>

      <div class="bg-white p-5 rounded-xl shadow-sm">
        <h3 class="font-semibold text-gray-700 mb-4">Activity log</h3>

        <div class="divide-y text-sm">
          <div class="py-2">Document has been updated 10 minutes ago</div>
          <div class="py-2">Document has been updated 10 minutes ago</div>
          <div class="py-2">Document has been updated 10 minutes ago</div>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
import DonutChart from "../ui/DonutChart.vue";
</script>