<template>
  <div class="bg-white rounded-xl shadow-sm p-5 space-y-4">

    <!-- HEADER -->
    <div class="flex items-center justify-between">
      <h2 class="font-semibold text-gray-800">Vessel List</h2>

    <button 
      @click="$router.push('/add-vessel')"
      class="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700"
    >
      + Add new vessel
    </button>
    </div>

    <!-- FILTER -->
    <div class="flex items-center gap-3">
      <button class="chip active">ALL</button>
      <button class="chip green">Active</button>
      <button class="chip yellow">At Port</button>
      <button class="chip red">Inactive</button>
    </div>

    <!-- SEARCH -->
    <div>
      <input
        type="text"
        placeholder="Search..."
        class="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <!-- TABLE -->
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead class="text-gray-500 text-xs border-b">
          <tr>
            <th class="text-left py-3">No</th>
            <th class="text-left">Vessel Name</th>
            <th class="text-left">Type</th>
            <th class="text-left">IMO</th>
            <th class="text-left">Location</th>
            <th class="text-left">Status</th>
            <th class="text-left">Last Updated</th>
            <th class="text-left">Actions</th>
          </tr>
        </thead>

        <tbody class="text-gray-700">
          <tr class="border-b hover:bg-gray-50">
            <td class="py-3">1</td>
            <td 
              class="text-blue-600 font-medium cursor-pointer hover:underline"
              @click="goToDetail(1)"
            >
              SAMUDERA PERKASA
            </td>            
            <td>Tug Boat</td>
            <td>918273645</td>
            <td>Surabaya</td>
            <td>
              <span class="status green">Underway</span>
            </td>
            <td>15 minutes ago</td>
            <td>•••</td>
          </tr>

          <!-- EMPTY SPACE -->
          <tr v-for="i in 6" :key="i">
            <td colspan="8" class="h-10 border-b"></td>
          </tr>

        </tbody>
      </table>
    </div>

  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToDetail = (id) => {
  router.push(`/vessel/${id}`);
};
</script>

<style scoped>
/* FILTER CHIP */
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

/* STATUS BADGE */
.status {
  @apply px-2 py-1 rounded-full text-xs font-medium;
}

.status.green {
  @apply bg-green-100 text-green-600;
}

.status.yellow {
  @apply bg-yellow-100 text-yellow-600;
}
</style>