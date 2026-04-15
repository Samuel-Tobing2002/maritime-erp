<template>
  <div class="p-6 bg-[#F3F4FA] space-y-6">
    <VesselHeader />
    <VesselStatusRow />
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-2 space-y-6">
        <VesselInfoCard />
        <VesselOperational />
      </div>
      <VesselMap />
    </div>
    <div class="grid grid-cols-3 gap-6 mt-6">
      <div class="col-span-2">
        <RiskCompliance />
      </div>
      <div>
        <RecentActivity />
      </div>
    </div>
    <div class="mt-6">
      <PortCallsHistory />
    </div>
  </div>
</template>

<script setup>
import VesselHeader from "@/components/fleetoverview/vessel-detail/VesselHeader.vue";
import VesselStatusRow from "@/components/fleetoverview/vessel-detail/VesselStatusRow.vue";
import VesselInfoCard from "@/components/fleetoverview/vessel-detail/VesselInfoCard.vue";
import VesselOperational from "@/components/fleetoverview/vessel-detail/VesselOperational.vue";
import VesselMap from "@/components/fleetoverview/vessel-detail/VesselMap.vue";
import RiskCompliance from "@/components/fleetoverview/vessel-detail/RiskCompliance.vue";
import RecentActivity from "@/components/fleetoverview/vessel-detail/RecentActivity.vue";
import PortCallsHistory from "@/components/fleetoverview/vessel-detail/PortCallsHistory.vue";
</script>