<script setup lang="ts">
import { mySkill } from "../../scripts/skill";
</script>

<template>
  <section class="p-10 mx-auto text-white font-mono overflow-hidden">
    <div class="flex items-center justify-center text-[80px] py-10 font-bold">
      My Skills
    </div>

    <div class="relative flex overflow-hidden bg-gray-800 rounded-full py-4 mx-10">
        <div class="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-800 to-transparent z-10 pointer-events-none"></div>
        <div class="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-800 to-transparent z-10 pointer-events-none"></div>

      <div class="flex animate-marquee whitespace-nowrap gap-3 items-center">
        <div
          v-for="skill in mySkill"
          :key="skill.name"
          class="flex flex-col items-center gap-2 min-w-[150px] hover:scale-130 transition-all duration-300 cursor-pointer"
        >
          <img
            :src="skill.img"
            :alt="skill.name"
            class="w-10 h-10 object-contain"
          />
          <p class="text-center">{{ skill.name }}</p>
        </div>

        <div
          v-for="skill in mySkill"
          :key="`copy-${skill.name}`"
          class="flex flex-col items-center gap-2 min-w-[150px] hover:scale-150 transition-all duration-300 cursor-pointer"
        >
          <img
            :src="skill.img"
            :alt="skill.name"
            class="w-10 h-10 object-contain"
          />
          <p class="text-center">{{ skill.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 20s linear infinite;
}

/* หยุดวิ่งเมื่อเอาเมาส์วาง */
.animate-marquee:hover {
  animation-play-state: paused;
}
</style>
