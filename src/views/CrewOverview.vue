<script setup>
import Stats from "@/components/crewoverview/Stats.vue";
import FleetTable from "@/components/crewoverview/FleetTable.vue";
import SideTable from "@/components/crewoverview/SideTable.vue";
</script>

<template>
  <div class="space-y-6">
    <Stats />
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-2">
        <FleetTable />
      </div>
      <SideTable />
    </div>
  </div>
</template>