<script setup lang="ts">
// import
import linkin from "../../assets/skills/linkedin.svg";
import github from "../../assets/skills/github-142-svgrepo-com.svg";
import gmail from "../../assets/skills/gmail.svg";
import portfolio from "../../assets/skills/portfolio.svg";
</script>
<template>
  <section class="my-10">
    <div
      class="relative overflow-hidden rounded-3xl bg-mist-900/90 p-8 md:p-12"
    >
      <div
        class="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl"
      ></div>
      <div
        class="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"
      ></div>
      <div
        class="relative flex flex-col items-center md:items-start gap-8 md:gap-12"
      >
        <h1 class="font-semibold text-xl text-white font-mono">
          Contact | ช่องทางติดต่อเรา
        </h1>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          <!-- Email -->
          <a
            href="mailto:your-email@example.com"
            class="flex flex-col items-center gap-2 p-4 rounded-lg border border-white/10 bg-white/5 hover:border-emerald-400/50 hover:bg-white/10 transition-all duration-200"
          >
            <img :src="gmail" alt="Email" class="w-10 h-10" />
            <span class="text-sm font-medium text-white">Email</span>
          </a>

          <!-- LinkedIn -->
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col items-center gap-2 p-4 rounded-lg border border-white/10 bg-white/5 hover:border-emerald-400/50 hover:bg-white/10 transition-all duration-200"
          >
            <img :src="linkin" alt="LinkedIn" class="w-10 h-10" />
            <span class="text-sm font-medium text-white">LinkedIn</span>
          </a>

          <!-- GitHub -->
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col items-center gap-2 p-4 rounded-lg border border-white/10 bg-white/5 hover:border-emerald-400/50 hover:bg-white/10 transition-all duration-200"
          >
            <img :src="github" alt="GitHub" class="w-10 h-10" />
            <span class="text-sm font-medium text-white">GitHub</span>
          </a>

          <!-- CV -->
          <a
            href="/files/my-cv.pdf"
            download="my-cv.pdf"
            class="flex flex-col items-center gap-2 p-4 rounded-lg border-2 border-emerald-400/60 bg-emerald-500/10 hover:bg-emerald-500/20 transition-all duration-200"
          >
            <img :src="portfolio" alt="CV" class="w-10 h-10" />
            <span class="text-sm font-medium text-white">Download CV</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
