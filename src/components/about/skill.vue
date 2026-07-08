<script setup lang="ts">
import { frontend, backend, aiAndData, devTool } from "../../scripts/techStack.ts";
</script>
<template>
  <section>
    <div class="text-center md:text-left mb-8">
      <span
        class="inline-block font-mono text-xs tracking-widest text-teal-400 uppercase mb-2"
      >
        What I work with
      </span>
      <h1 class="text-3xl md:text-4xl font-bold tracking-tight text-white">
        Tech Stacks
      </h1>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <!-- Frontend -->
      <div
        class="flex flex-col gap-4 rounded-2xl bg-[#131B2E] border border-teal-500/20 p-5"
      >
        <h4 class="font-mono text-xs uppercase tracking-widest text-teal-400">
          Frontend
        </h4>
        <div class="flex flex-wrap gap-3">
          <div
            v-for="(skill, index) in frontend"
            :key="index"
            class="group relative"
          >
            <img
              :src="skill.img"
              class="w-8 h-8 object-contain opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200"
            />
          </div>
        </div>
      </div>

      <!-- Backend -->
      <div
        class="flex flex-col gap-4 rounded-2xl bg-[#131B2E] border border-cyan-500/20 p-5"
      >
        <h4 class="font-mono text-xs uppercase tracking-widest text-cyan-400">
          Backend
        </h4>
        <div class="flex flex-wrap gap-3">
          <div
            v-for="(skill, index) in backend"
            :key="index"
            class="group relative"
          >
            <img
              :src="skill.img"
              class="w-8 h-8 object-contain opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200"
            />
          </div>
        </div>
      </div>

      <!-- Data & AI -->
      <div
        class="flex flex-col gap-4 rounded-2xl bg-[#131B2E] border border-amber-500/20 p-5"
      >
        <h4 class="font-mono text-xs uppercase tracking-widest text-amber-400">
          Data & AI
        </h4>
        <div class="flex flex-wrap gap-3">
          <div
            v-for="(skill, index) in aiAndData"
            :key="index"
            class="group relative"
          >
            <img
              :src="skill.img"
              class="w-8 h-8 object-contain opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200"
            />
          </div>
        </div>
      </div>

      <!-- Tools -->
      <div
        class="flex flex-col gap-4 rounded-2xl bg-[#131B2E] border border-slate-500/20 p-5"
      >
        <h4 class="font-mono text-xs uppercase tracking-widest text-slate-400">
          Tools
        </h4>
        <div class="flex flex-wrap gap-3">
          <div
            v-for="(skill, index) in devTool"
            :key="index"
            class="group relative"
          >
            <img
              :src="skill.img"
              class="w-8 h-8 object-contain opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
