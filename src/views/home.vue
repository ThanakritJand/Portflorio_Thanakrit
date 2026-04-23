<script setup lang="ts">
import Navbar from "../components/navbar.vue";
import Profile from "../assets/profiles/profile.JPG";
</script>
<template>
  <header>
    <Navbar />
  </header>

  <main class="text-white">
<!-- introduction -->
    <section class="flex items-center justify-around p-10 mx-auto max-w-s font-mono">
      <div class="flex flex-col gap-5">
        <p class="text-[80px] font-extrabold">Hello</p>
        <p class="text-[30px] font-bold">I'm <span class="text-[50px] text-sky-400 font-black">Thanakrit Jand</span></p>
        <p class=" max-w-sm text-l text-gray-500">Always passionate about emerging technologies like AI and Frontend
          Design. I bridge the gap between technical execution and business
          analysis, constantly pushing my boundaries to learn, grow, and deliver
          better solutions.</p
        >
        <div class="flex gap-10">
            <button class="group bg-sky-700 px-4 py-2 font-bold flex items-center gap-1 rounded-full hover:px-4 hover:scale-110 hover:gap-2 transition-all duration-500"><i class="pi pi-book"></i>Projects<i class="pi pi-arrow-down-right transition-transform group-active:translate-x-1 duration-500"></i></button>
            <router-link to="/contact" class="group bg-green-700 px-4 py-2 font-bold flex items-center gap-1 rounded-full hover:px-4 hover:scale-110 hover:gap-2 transition-all duration-500"><i class="pi pi-inbox"></i>Contact<i class="pi pi-arrow-up-right ransition-transform group-active:translate-x-1 duration-500"></i></router-link>
        </div>
      </div>

      <div class="flex flex-col gap-15 font-bold">
        <p class="bg-blue-500 px-4 py-2 rounded-full border-2 border-blue-700 hover:shadow-[4px_4px_10px_#ffffff] hover:scale-105 transition-all duration-500">Machine Learning Engineering</p>
        <p class="bg-green-500 px-4 py-2 rounded-full border-2 border-green-700 hover:shadow-[4px_4px_10px_#ffffff] hover:scale-105 transition-all duration-500">Data Analysis</p>
        <p class="bg-violet-500 px-4 py-2 rounded-full border-2 border-violet-700 hover:shadow-[4px_4px_10px_#ffffff] hover:scale-105 transition-all duration-500">Business Analysis</p>
        <p class="bg-pink-500 px-4 py-2 rounded-full border-2 border-pink-700 hover:shadow-[4px_4px_10px_#ffffff] hover:scale-105 transition-all duration-500">Frontend Developer</p>
      </div>

      <div>
        <img :src=Profile alt="Profile" class="w-80 h-80 rounded-full border border-black object-cover">
      </div>
    </section>
<!-- introduction -->

  </main>
</template>
