<script  setup lang="ts">
import calculateAge from "../../scripts/birthDate";
import profileAbout from "../../assets/profiles/IMG_1384.png";

const birthDate = new Date("2006-06-16"); // replace with real value or prop
const age = calculateAge(birthDate);
</script>
<template>
  <section class="font-mono text-white flex justify-center font-black text-5xl">
    {{ age.year }} years {{ age.month }} month {{ age.day }} day
  </section>

  <section class="myself py-10">
    <div class="relative overflow-hidden rounded-3xl bg-mist-900/90 p-8 md:p-12">
      <!-- ambient glow accents -->
      <div
        class="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl"
      ></div>
      <div
        class="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl"
      ></div>

      <div
        class="relative flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"
      >
        <!-- profile image with gradient ring -->
        <div
          class="shrink-0 rounded-full bg-gradient-to-br from-teal-400 via-cyan-500 to-amber-400 p-[3px]"
        >
          <img
            :src="profileAbout"
            class="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover ring-4 ring-[#0B1120]"
            alt="ธนกฤต"
          />
        </div>

        <div
          class="text-white text-center md:text-left flex flex-col gap-4 max-w-xl"
        >
          <div>
            <span
              class="inline-block font-mono text-xs tracking-widest text-teal-400 uppercase mb-2"
            >
              Frontend Dev · Data & AI Explorer
            </span>
            <h1 class="text-3xl md:text-4xl font-bold tracking-tight">
              สวัสดีครับ ผม ธนกฤต ครับ <span class="inline-block"> 🚀</span>
            </h1>
          </div>

          <p
            class="text-sm md:text-base leading-relaxed text-slate-300"
          >
            ตอนนี้กำลังเรียนอยู่ที่ SIT KMUTT ครับ ผมเป็นคนที่อินกับการพัฒนา
            Frontend พอๆ กับโลกของข้อมูล (Data & AI)
            ปกติเวลาปั้นหน้าเว็บผมจะสนุกกับการหยิบ Vue และ React
            มาใช้เป็นหลักครับ นอกจากการทำ UI ให้ใช้งานง่ายแล้ว
            ตอนนี้ผมกำลังอินกับการศึกษาเรื่อง Machine Learning
            เพื่อนำมาต่อยอดสร้างโปรเจกต์ให้ฉลาดและตอบโจทย์ผู้ใช้มากขึ้นครับ
            ยินดีที่ได้รู้จักนะครับ!
          </p>

          <!-- stack badges: real info, not decoration -->
        </div>
      </div>
    </div>
  </section>
</template>
