<script setup lang="ts">
import {
  sendMail,
  form,
  sending,
  statusMessage,
  statusClass,
} from "../../scripts/sendMail";
</script>

<template>
  <main class="mx-5 my-10">
    <section class="relative overflow-hidden rounded-3xl bg-mist-900/90 p-8 md:p-12 text-white">
      <div class="pointer-events-none absolute -top-24 -left-24 w-72 h-72 bg-teal-500/20 blur-3xl rounded-full"></div>
      <div class="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-teal-500/40 blur-3xl rounded-full"></div>
      <div class="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 bg-teal-500/40 blur-3xl rounded-full"></div>
      <div class="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 bg-teal-500/20 blur-3xl rounded-full"></div>

      <form @submit.prevent="sendMail" class="relative z-10 flex flex-col gap-5">
        
        <div class="flex flex-col md:flex-row gap-5">
          <input 
            type="text" 
            v-model="form.name" 
            placeholder="ชื่อของคุณ"
            required 
            class="w-full rounded-xl bg-mist-800/50 border border-mist-700 px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors"
          />
          <input 
            type="email" 
            v-model="form.email" 
            placeholder="อีเมล"
            required 
            class="w-full rounded-xl bg-mist-800/50 border border-mist-700 px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors"
          />
        </div>

        <textarea 
          v-model="form.description" 
          placeholder="ข้อความของคุณ..."
          rows="4"
          required 
          class="w-full rounded-xl bg-mist-800/50 border border-mist-700 px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors resize-none"
        ></textarea>

        <div>
          <button 
            type="submit" 
            :disabled="sending"
            class="rounded-xl bg-teal-600 px-6 py-3 font-medium hover:bg-teal-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {{ sending ? "กำลังส่ง..." : "ส่งข้อความ" }}
          </button>
        </div>

        <p v-if="statusMessage" :class="['mt-2 text-sm', statusClass]">
          {{ statusMessage }}
        </p>
      </form>
    </section>
  </main>
</template>