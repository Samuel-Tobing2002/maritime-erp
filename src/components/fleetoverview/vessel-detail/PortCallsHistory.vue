<template>
  <div class="wrapper">

    <!-- HEADER -->
    <h3 class="title">Port Calls History</h3>

    <!-- TABLE -->
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
          <!-- EMPTY ROWS -->
          <tr v-for="i in 5" :key="i">
            <td colspan="4"></td>
          </tr>
        </tbody>

      </table>

    </div>

  </div>
</template>

<style scoped>

/* WRAPPER */
.wrapper {
  @apply bg-white rounded-xl shadow-sm p-5 space-y-4;
}

/* TITLE */
.title {
  @apply text-sm font-semibold text-gray-700;
}

/* TABLE WRAPPER */
.table-wrapper {
  @apply overflow-hidden rounded-lg border;
}

/* TABLE */
.table {
  @apply w-full text-sm;
}

/* HEADER */
th {
  @apply text-left text-gray-400 font-medium py-3 px-4 bg-gray-50;
}

/* BODY */
td {
  @apply py-5 px-4 border-t;
}

/* EMPTY ROW STYLE */
tbody tr td {
  @apply bg-white;
}

</style>