<template>
  <div class="space-y-6">
    <div class="grid grid-cols-4 gap-6 w-full">
      <div class="card">
        <h1 class="text-3xl font-bold">20</h1>
        <p class="text-sm text-gray-500 mt-1">Total Vessels</p>
      </div>
      <div class="card">
        <h1 class="text-3xl font-bold">100</h1>
        <p class="text-sm text-gray-500 mt-1">Total Crews</p>
      </div>
      <div class="card">
        <h1 class="text-3xl font-bold">400</h1>
        <p class="text-sm text-gray-500 mt-1">Total Documents</p>
      </div>
      <div class="card">
        <h1 class="text-3xl font-bold">3</h1>
        <p class="text-sm text-gray-500 mt-1">Inactive Vessel</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply bg-white rounded-xl shadow-sm p-6 h-28 w-full flex flex-col items-center justify-center transition hover:shadow-md;
}
</style>