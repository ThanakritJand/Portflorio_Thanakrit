<script setup lang="ts">
import { getAllActivities } from "../../scripts/getActivity";
</script>

<template>
  <section
    class="relative overflow-hidden rounded-3xl bg-mist-900 my-10 px-6 py-10 md:p-14"
  >
    <div class="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-yellow-500/20 blur-3xl"></div>
    <div class="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-yellow-500/40 blur-3xl"></div>
    <div class="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-yellow-500/40 blur-3xl"></div>
    <div class="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-yellow-500/20 blur-3xl"></div>

    <div class="relative">
      <div class="inline-flex items-center gap-2 rounded-full border-2 border-yellow-500 bg-yellow-500/10 px-4 py-1">
        <p class="text-xs font-medium text-yellow-400">กิจกรรมอื่นๆ</p>
      </div>

      <div class="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="activity in getAllActivities"
          :key="activity.name"
          class="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-yellow-400/40 hover:bg-white/10"
        >
          <span class="h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400"></span>
          <p class="text-sm font-medium text-white">{{ activity.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>