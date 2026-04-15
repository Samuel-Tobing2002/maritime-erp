<template>
  <div class="w-56 h-screen bg-slate-800 text-white p-5">
    <h2 class="text-xl font-bold mb-6">My App</h2>

    <ul class="space-y-2">
      <li>
        <router-link to="/" class="block p-2 rounded hover:bg-slate-700">
          Dashboard
        </router-link>
      </li>
      <li>
        <router-link to="/konten" class="block p-2 rounded hover:bg-slate-700">
          KONTEN
        </router-link>
      </li>
    </ul>
  </div>
</template>