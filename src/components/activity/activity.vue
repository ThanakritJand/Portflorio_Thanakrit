<script setup lang="ts">
import { semesterOne, semesterTwo } from "../../scripts/getActivity";
</script>

<template>
  <section
    class="relative overflow-hidden rounded-3xl bg-mist-900/90 px-6 py-10 md:p-14 my-10"
  >
    <div
      class="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-800/20 blur-3xl"
    ></div>
    <div
      class="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-800/40 blur-3xl"
    ></div>
    <div
      class="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-800/20 blur-3xl"
    ></div>
    <div
      class="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-800/40 blur-3xl"
    ></div>

    <div class="relative`">
      <div
        class="inline-flex items-center gap-2 rounded-full border-2 border-green-500 bg-green-500/10 px-4 py-1"
      >
        <p class="text-xs font-medium text-green-400">กิจกรรมหลัก</p>
      </div>

      <!-- Semester 1 -->
      <div class="mt-4 flex items-baseline gap-3 border-b border-white/10 pb-3">
        <h3 class="text-2xl font-semibold text-white md:text-3xl">
          ปีสอง เทอมหนึ่ง
        </h3>
        <span class="text-sm font-normal text-mist-200/60"
          >Year 2 · Semester One</span
        >
      </div>

      <div class="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        <div
          v-for="activity in semesterOne"
          :key="activity.name"
          class="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-green-400/40 hover:bg-white/10"
        >
          <div class="mb-4 grid grid-cols-3 gap-1.5">
            <img
              v-for="(photo, i) in activity.photos"
              :key="i"
              :src="photo"
              :alt="activity.name"
              class="h-24 w-full rounded-lg object-cover"
            />
          </div>
          <h4 class="text-lg font-medium text-white">{{ activity.name }}</h4>
          <p class="mt-2 line-clamp-4 text-sm leading-relaxed text-mist-200/80">
            {{ activity.detail }}
          </p>
        </div>
      </div>

      <!-- Semester 2 -->
      <div
        class="mt-10 flex items-baseline gap-3 border-b border-white/10 pb-3"
      >
        <h3 class="text-2xl font-semibold text-white md:text-3xl">
          ปีสอง เทอมสอง
        </h3>
        <span class="text-sm font-normal text-mist-200/60"
          >Year 2 · Semester Two</span
        >
      </div>

      <div class="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        <div
          v-for="activity in semesterTwo"
          :key="activity.name"
          class="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-green-400/40 hover:bg-white/10"
        >
          <div class="mb-4 grid grid-cols-3 gap-1.5">
            <img
              v-for="(photo, i) in activity.photos"
              :key="i"
              :src="photo"
              :alt="activity.name"
              class="h-24 w-full rounded-lg object-cover"
            />
          </div>
          <h4 class="text-lg font-medium text-white">{{ activity.name }}</h4>
          <p class="mt-2 line-clamp-4 text-sm leading-relaxed text-mist-200/80">
            {{ activity.detail }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
