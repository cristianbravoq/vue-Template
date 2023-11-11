<template>
    <Navbar />
    <CoverPhoto />
    <main class="flex relative gap-2">
        <router-view />
    </main>
</template>

<script setup>
import CoverPhoto from './CoverPhoto.vue';
import Navbar from './Navbar.vue';
</script>

<style scoped>

</style>