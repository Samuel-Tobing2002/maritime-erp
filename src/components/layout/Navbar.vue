<template>
  <div class="h-16 bg-[#F3F4FA] flex items-center justify-between px-6">

    <!-- TITLE -->
    <h3 class="font-bold text-xl text-[#000348]">
      Dashboard
    </h3>

    <!-- RIGHT -->
    <div class="flex items-center gap-4">

      <!-- NOTIF -->
      <div class="relative cursor-pointer">
        <Bell class="w-5 h-5 text-black" />
        <span class="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
          2
        </span>
      </div>

      <!-- PROFILE -->
      <div class="flex items-center gap-2 cursor-pointer">
        <div class="w-9 h-9 rounded-lg bg-red-600 text-white flex items-center justify-center text-sm font-bold">
          KW
        </div>

        <span class="text-sm text-black font-medium">
          kelvinwilliam@gmail.com
        </span>
      </div>

    </div>

  </div>
</template>

<script setup>
import { Bell } from "lucide-vue-next";
</script>