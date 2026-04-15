<template>
  <div class="card">

    <div class="left">

      <h3 class="title">General Information</h3>

      <div class="left-box">
        <div class="row" v-for="item in leftData" :key="item.label">
          <span>{{ item.label }}</span>
          <span class="value">{{ item.value }}</span>
        </div>
      </div>

    </div>

    <div class="right">

      <h3 class="title">Equipment</h3>

      <div class="space-y-3">

        <div class="highlight">
          <span>Vacancies</span>
          <span class="value bold">5/5 Onboard</span>
        </div>

        <div 
          class="row-dotted"
          v-for="i in 3"
          :key="i"
        >
          <span>Net Tonnage</span>
          <span class="value">200 NT</span>
        </div>

      </div>

    </div>

  </div>
</template>

<script setup>
const leftData = [
  { label: "GT", value: "250 GT" },
  { label: "Net Tonnage", value: "200 NT" },
  { label: "Length Overall", value: "40,0 M" },
  { label: "Year Built", value: "2018" },
  { label: "Flag", value: "Indonesia" },
  { label: "Class Society", value: "DNV" },
  { label: "Builder", value: "PT. Bahari Shipyard" },
];
</script>

<style scoped>

.card {
  @apply bg-white rounded-xl shadow-sm p-6 grid grid-cols-2 gap-6;
}

.left {
  @apply pr-6 border-r border-dashed border-gray-300;
}

.right {
  @apply pl-6;
}

.title {
  @apply text-sm font-semibold text-gray-700 mb-3;
}

.left-box {
  @apply bg-gray-50 rounded-lg p-3 space-y-2;
}

.row {
  @apply flex justify-between text-sm text-gray-700 py-2 border-b border-gray-200 last:border-none;
}

.row-dotted {
  @apply flex justify-between text-sm text-gray-700 pb-2 border-b border-dashed border-gray-300;
}

.highlight {
  @apply flex justify-between items-center text-sm bg-gray-100 px-3 py-2 rounded-lg;
}

.value {
  @apply text-gray-600;
}

.bold {
  @apply font-semibold text-gray-800;
}

</style>