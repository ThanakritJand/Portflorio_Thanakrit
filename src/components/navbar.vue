<script setup lang="ts">
import logo from "../../src/assets/Print.svg";
</script>
<template>
  <nav class="flex items-center justify-center px-5 py-5">
    <div>
      <img :src="logo" alt="logo" class="rounded-full w-30 h-30 object-cover" />
    </div>

    <div class="flex list-none px-80 font-bold">
      <ul class="flex gap-10 bg-sky-500 px-10 py-5 rounded-full">
        <li>
          <router-link
            to="/"
            class="flex items-center gap-2 hover:text-white hover:scale-110 transition-all"
          >
            <i class="pi pi-home"></i>
            <span>Home</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/activity"
            class="flex items-center gap-2 hover:text-white hover:scale-110 transition-all"
          >
            <i class="pi pi-objects-column"></i>
            <span>Activity</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/project"
            class="flex items-center gap-2 hover:text-white hover:scale-110 transition-all"
          >
            <i class="pi pi-briefcase"></i>
            <span>Projects</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/contact"
            class="flex items-center gap-2 hover:text-white hover:scale-110 transition-all"
          >
            <i class="pi pi-phone"></i>
            <span>Contact</span>
          </router-link>
        </li>
      </ul>
    </div>

    <div>
      <router-link
        to="/about"
        class="group flex items-center gap-1 whitespace-nowrap rounded-full bg-blue-400 px-5 py-2 font-bold transition-all duration-500 hover:scale-125 hover:bg-blue-900 hover:text-white"
      >
        <span>About Me</span>
        <i
          class="pi pi-arrow-right transition-transform duration-500 group-hover:translate-x-2"
        ></i>
      </router-link>
    </div>
  </nav>
</template>
