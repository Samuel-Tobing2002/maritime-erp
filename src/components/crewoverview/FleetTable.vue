<template>
  <div class="bg-white rounded-xl shadow-sm p-5 space-y-4">
    <div class="flex items-center justify-between">
      <h2 class="font-semibold text-gray-800">Crew List</h2>
    </div>

    <div class="flex items-center justify-between">

      <div class="flex items-center gap-3 flex-wrap">
        <button class="chip active">ALL</button>
        <button class="chip green">Onboard</button>
        <button class="chip yellow">Stand By</button>
        <button class="chip red">On Leave</button>

        <select class="chip bg-gray-200 text-gray-700 cursor-pointer">
          <option>Vessel</option>
        </select>
      </div>

      <button class="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700">
        Add Crew
      </button>

    </div>

    <div>
      <input
        type="text"
        placeholder="Search..."
        class="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead class="text-gray-500 text-xs border-b">
          <tr>
            <th class="text-left py-3">No</th>
            <th class="text-left">Crew Name</th>
            <th class="text-left">Rank</th>
            <th class="text-left">Vessel</th>
            <th class="text-left">Nationality</th>
            <th class="text-left">Status</th>
            <th class="text-left">Contract End</th>
            <th class="text-left">Actions</th>
          </tr>
        </thead>

        <tbody class="text-gray-700">
          <tr class="border-b hover:bg-gray-50">
            <td class="py-3">1</td>
            <td class="text-blue-600 font-medium">Bayu Pradana</td>
            <td>Captain</td>
            <td>Samudera Perkasa</td>
            <td>Indonesia</td>
            <td>
              <span class="status green">Onboard</span>
            </td>
            <td>17 Aug 2026</td>
            <td>•••</td>
          </tr>

          <tr class="border-b hover:bg-gray-50">
            <td class="py-3">2</td>
            <td class="text-blue-600 font-medium">Rafael Tan</td>
            <td>Crew</td>
            <td>Samudera Perkasa</td>
            <td>Indonesia</td>
            <td>
              <span class="status green">Onboard</span>
            </td>
            <td>17 Aug 2026</td>
            <td>•••</td>
          </tr>

          <tr v-for="i in 6" :key="i">
            <td colspan="8" class="h-10 border-b"></td>
          </tr>

        </tbody>
      </table>
    </div>

  </div>
</template>

<style scoped>
.chip {
  @apply px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-600;
}

.chip.active {
  @apply bg-gray-200 text-black font-medium;
}

.chip.green {
  @apply bg-green-100 text-green-600;
}

.chip.yellow {
  @apply bg-yellow-100 text-yellow-600;
}

.chip.red {
  @apply bg-red-100 text-red-600;
}

.status {
  @apply px-2 py-1 rounded-full text-xs font-medium;
}

.status.green {
  @apply bg-green-100 text-green-600;
}
</style>