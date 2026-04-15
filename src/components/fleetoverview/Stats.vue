<template>
  <div class="grid grid-cols-4 gap-6">

    <div class="card">
      <h1 class="number">20</h1>
      <p class="label">Total Vessels</p>
    </div>

    <div class="card">
      <h1 class="number">100</h1>
      <p class="label">At Sea</p>
    </div>

    <div class="card">
      <h1 class="number">8</h1>
      <p class="label">At Port</p>
    </div>

    <div class="card">
      <h1 class="number">5</h1>
      <p class="label">Under Maintenance</p>
    </div>

  </div>
</template>

<style scoped>
.card {
  @apply bg-white rounded-xl shadow-sm px-6 py-4 flex flex-col items-center justify-center 
         transition hover:shadow-md;
}

.number {
  @apply text-2xl font-bold text-black;
}

.label {
  @apply text-xs text-gray-500 mt-1 text-center;
}
</style>