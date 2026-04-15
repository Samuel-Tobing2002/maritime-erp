<template>
  <div class="space-y-4">

    <!-- BACK -->
    <div 
      class="text-sm text-gray-500 cursor-pointer hover:text-black"
      @click="$router.push('/fleetoverview')"
    >
      ← Back to Fleet Overview
    </div>

    <!-- HEADER -->
    <div class="flex items-start justify-between">

      <!-- LEFT -->
      <div class="space-y-2">

        <!-- TITLE + STATUS -->
        <div class="flex items-center gap-3">
          <h1 class="text-[28px] font-bold text-[#000348]">
            SAMUDERA PERKASA
          </h1>

          <span class="status">
            Active ▾
          </span>
        </div>

        <!-- INFO -->
        <div class="flex gap-2 flex-wrap text-xs">
          <span class="chip">IMO: 918273645</span>
          <span class="chip">MMSI: 564738291</span>
          <span class="chip">Call Sign: AADC1</span>
          <span class="chip">Tug Boat</span>
        </div>

      </div>

      <!-- RIGHT -->
      <div class="flex items-center gap-3">

        <button class="btn-main">
          Download Report
        </button>

        <button class="btn-icon">
          •••
        </button>

      </div>

    </div>

  </div>
</template>

<style scoped>

/* CHIP */
.chip {
  @apply bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs;
}

/* STATUS BADGE */
.status {
  @apply bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium;
}

/* BUTTON MAIN */
.btn-main {
  @apply bg-white border px-4 py-2 rounded-lg text-sm shadow-sm hover:bg-gray-50;
}

/* BUTTON DOT */
.btn-icon {
  @apply bg-white border px-3 py-2 rounded-lg text-sm shadow-sm hover:bg-gray-50;
}

</style>