<template>
  <div class="flex h-screen overflow-hidden">
    
    <!-- Sidebar -->
    <Sidebar />

    <!-- Content -->
    <div class="flex-1 flex flex-col">
      
      <!-- Navbar -->
      <Navbar />

      <!-- Content (SCROLL DI SINI) -->
      <div class="flex-1 overflow-y-auto p-6 bg-gray-100">
        <router-view />
      </div>

    </div>

  </div>
</template>

<script setup>
import Sidebar from "../components/layout/Sidebar.vue";
import Navbar from "../components/layout/Navbar.vue";
</script>