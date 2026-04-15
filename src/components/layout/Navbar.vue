<template>
  <div class="h-16 bg-[#F3F4FA] flex items-center justify-between px-6">

    <!-- TITLE DINAMIS -->
    <h1 class="text-3xl font-bold text-[#000348]">
      {{ pageTitle }}
    </h1>

    <!-- RIGHT -->
    <div class="flex items-center gap-4">

      <div class="relative cursor-pointer">
        <Bell class="w-5 h-5 text-black" />
        <span class="absolute -top-1 -right-1 
                     bg-red-500 text-white text-[10px] 
                     w-4 h-4 flex items-center justify-center 
                     rounded-full font-semibold">
          2
        </span>
      </div>

      <div class="flex items-center gap-2 cursor-pointer">
        <div class="w-9 h-9 rounded-lg bg-red-600 text-white 
                    flex items-center justify-center text-sm font-bold">
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
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const pageTitle = computed(() => {
  return route.meta.title || "Dashboard";
});
</script>