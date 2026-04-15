<template>
  <div class="wrapper">

    <h3 class="section-title">Operational Status</h3>

    <div class="grid grid-cols-2 gap-4">

      <div class="card">
        <div class="card-header">
          <Plus class="icon green" />
          <span>Overall Health</span>
        </div>

        <div class="card-body">
          <div class="flex justify-between items-center text-sm">
            <span class="text-gray-600">Completion:</span>
            <span class="font-semibold text-gray-800">90%</span>
          </div>

          <div class="progress">
            <div class="progress-fill green w-[90%]"></div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <ClipboardCheck class="icon blue" />
          <span>Compliance Status</span>
        </div>

        <div class="card-body">
          <div class="text-sm text-gray-600">
            3 Certificates Expiring in 
            <span class="font-semibold text-gray-800">45 days</span>
          </div>

          <div class="progress">
            <div class="progress-fill blue w-[60%]"></div>
          </div>
        </div>
      </div>

      <div class="card empty">
        <div class="card-header">
          <Calendar class="icon gray" />
          <span>Next Dry Dock</span>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <Users class="icon navy" />
          <span>Crew On Board</span>
        </div>

        <div class="card-body flex justify-between items-center">
          <div>
            <p class="text-lg font-semibold text-gray-800">
              5/5 Safely Depart
            </p>
            <p class="text-xs text-gray-500">
              1 Contracts expiring in 30 days
            </p>
          </div>

          <ChevronRight class="w-5 h-5 text-gray-400" />
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
import { 
  Plus, 
  ClipboardCheck, 
  Calendar, 
  Users, 
  ChevronRight 
} from "lucide-vue-next";
</script>

<style scoped>

.wrapper {
  @apply bg-white rounded-xl shadow-sm p-5 space-y-4;
}

.section-title {
  @apply text-sm font-semibold text-gray-700;
}

.card {
  @apply bg-gray-50 rounded-lg overflow-hidden border;
}

.card-header {
  @apply flex items-center gap-2 px-3 py-2 border-b bg-gray-100 text-sm font-medium text-gray-700;
}

.card-body {
  @apply p-3 space-y-2;
}

.empty {
  @apply min-h-[80px];
}

.icon {
  @apply w-4 h-4;
}

.green { @apply text-green-600; }
.blue { @apply text-blue-600; }
.gray { @apply text-gray-500; }
.navy { @apply text-[#000348]; }

.progress {
  @apply h-2 bg-gray-200 rounded mt-2;
}

.progress-fill {
  @apply h-2 rounded;
}

.progress-fill.green {
  @apply bg-green-500;
}

.progress-fill.blue {
  @apply bg-blue-500;
}

</style>