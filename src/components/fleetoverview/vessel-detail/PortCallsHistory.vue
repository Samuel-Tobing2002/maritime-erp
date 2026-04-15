<template>
  <div class="wrapper">

    <h3 class="title">Port Calls History</h3>

    <div class="table-wrapper">

      <table class="table">
        <thead>
          <tr>
            <th>Departure</th>
            <th>Destination</th>
            <th>Actual Time of Departure</th>
            <th>Actual Time of Arrival</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="i in 5" :key="i">
            <td colspan="4"></td>
          </tr>
        </tbody>

      </table>

    </div>

  </div>
</template>

<style scoped>

.wrapper {
  @apply bg-white rounded-xl shadow-sm p-5 space-y-4;
}

.title {
  @apply text-sm font-semibold text-gray-700;
}

.table-wrapper {
  @apply overflow-hidden rounded-lg border;
}

.table {
  @apply w-full text-sm;
}

th {
  @apply text-left text-gray-400 font-medium py-3 px-4 bg-gray-50;
}

td {
  @apply py-5 px-4 border-t;
}

tbody tr td {
  @apply bg-white;
}

</style>