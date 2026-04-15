<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Content -->
    <div class="flex-1 flex flex-col">
      <Navbar />

      <div class="p-6 bg-gray-100 min-h-screen">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "../components/layout/Sidebar.vue";
import Navbar from "../components/layout/Navbar.vue";
</script>