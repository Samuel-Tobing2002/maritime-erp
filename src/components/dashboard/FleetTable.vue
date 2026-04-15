<template>
  <div class="bg-white rounded-xl shadow-sm p-5">

    <h3 class="font-semibold text-gray-700 mb-4">
      Fleet Destination
    </h3>

    <div class="overflow-x-auto">
      <table class="w-full text-sm">

        <thead>
          <tr class="text-gray-400 text-left border-b">
            <th class="py-3">Vessel Name</th>
            <th>Type</th>
            <th>Departure</th>
            <th>Destination</th>
            <th>Time of Departure</th>
            <th>Estimated Time Arrival</th>
          </tr>
        </thead>

        <tbody>

          <tr class="border-b hover:bg-gray-50">
            <td class="py-3 text-blue-600 font-medium">
              Samudera Perkasa
            </td>
            <td>Tug Boat</td>
            <td>Jakarta</td>
            <td>Samarinda</td>
            <td>08/02/2026 18:56</td>
            <td>12/02/2026 18:56</td>
          </tr>

          <tr class="border-b hover:bg-gray-50">
            <td class="py-3 text-blue-600 font-medium">
              Samudera Perkasa 1
            </td>
            <td>Tug Boat</td>
            <td>Jakarta</td>
            <td>Samarinda</td>
            <td>08/02/2026 18:56</td>
            <td>12/02/2026 18:56</td>
          </tr>

          <tr v-for="i in 3" :key="i" class="border-b h-12"></tr>

        </tbody>

      </table>
    </div>

  </div>
</template>