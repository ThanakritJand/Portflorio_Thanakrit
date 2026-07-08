<script setup lang="ts">
import Navbar from "../components/navbar.vue";
import hero from "../components/about/hero.vue";
import skill from "../components/about/skill.vue";
import myApproach from "../components/about/myApproach.vue";
import passion from "../components/about/passion.vue";
import lifeOutside from "../components/about/lifeOutside.vue";
import contact from "../components/about/contact.vue";
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main class="mx-10 my-5">
    <hero />
    <skill />
    <section class="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
        <myApproach />
        <passion />
        <lifeOutside />
    </section>
    <contact />
  </main>
</template>
