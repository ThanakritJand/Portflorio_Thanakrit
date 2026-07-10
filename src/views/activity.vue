<script setup lang="ts">
    import Navbar from '../components/navbar.vue';
    import hero from '../components/activity/hero.vue';
    import activity from '../components/activity/activity.vue';
    import aillActivity from '../components/activity/aillActivity.vue';
</script>

<template>
        <header>
            <Navbar />
        </header>
        <main class="mx-10 my-5">
            <hero />
            <activity />
            <aillActivity />
        </main>
</template>