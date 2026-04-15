<template>
  <div :class="[
    'relative h-screen bg-[#0B0F3B] text-white flex flex-col justify-between transition-all duration-300',
    isCollapsed ? 'w-20' : 'w-64'
  ]">

    <!-- TOP -->
    <div>
      <!-- LOGO -->
      <div class="p-5 text-lg font-bold text-center">
        <span v-if="!isCollapsed">*LOGO*</span>
        <Ship v-else class="w-6 h-6 mx-auto" />
      </div>

      <!-- MENU -->
      <ul class="space-y-1 px-2">

        <li>
          <router-link 
            to="/" 
            :class="['menu', isActive('Dashboard')]"
          >
            <Home class="w-5 h-5" />
            <span v-if="!isCollapsed">Dashboard</span>
          </router-link>
        </li>

        <li>
          <router-link 
            to="/fleetoverview" 
            :class="['menu', isActive('FleetOverview')]"
          >
            <Ship class="w-5 h-5" />
            <span v-if="!isCollapsed">Fleet Overview</span>
          </router-link>
        </li>

        <li>
          <router-link 
            to="/crewoverview" 
            :class="['menu', isActive('CrewOverview')]"
          >
            <Users class="w-5 h-5" />
            <span v-if="!isCollapsed">Crew Overview</span>
          </router-link>
        </li>

        <li>
          <router-link 
            to="/documents" 
            :class="['menu', isActive('Documents')]"
          >
            <FileText class="w-5 h-5" />
            <span v-if="!isCollapsed">Document Library</span>
          </router-link>
        </li>

      </ul>
    </div>

    <!-- BOTTOM -->
    <div class="px-2 pb-10 space-y-1">

      <router-link 
        to="/help" 
        :class="['menu', isActive('Help')]"
      >
        <HelpCircle class="w-5 h-5" />
        <span v-if="!isCollapsed">Help</span>
      </router-link>

      <router-link 
        to="/info" 
        :class="['menu', isActive('Info')]"
      >
        <Info class="w-5 h-5" />
        <span v-if="!isCollapsed">Information</span>
      </router-link>

      <router-link 
        to="/settings" 
        :class="['menu', isActive('Settings')]"
      >
        <Settings class="w-5 h-5" />
        <span v-if="!isCollapsed">Settings</span>
      </router-link>

    </div>

    <!-- TOGGLE -->
    <button
      @click="isCollapsed = !isCollapsed"
      class="absolute bottom-20 -right-3 
             bg-blue-600 hover:bg-blue-700 
             w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
    >
      <ChevronRight v-if="isCollapsed" class="w-4 h-4" />
      <ChevronLeft v-else class="w-4 h-4" />
    </button>

  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

import {
  Home,
  Ship,
  Users,
  FileText,
  HelpCircle,
  Info,
  Settings,
  ChevronLeft,
  ChevronRight
} from "lucide-vue-next";

const isCollapsed = ref(false);
const route = useRoute();

/* ACTIVE MENU FUNCTION */
const isActive = (name) => {
  return route.name === name ? 'active' : '';
};
</script>

<style scoped>

/* MENU BASE */
.menu {
  @apply flex items-center gap-3 px-4 py-2 rounded-lg text-sm 
         hover:bg-blue-600 transition;
}

/* ACTIVE MENU */
.active {
  @apply bg-blue-700;
}

</style>