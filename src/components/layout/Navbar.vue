<template>
  <header
    class="flex bg-primary justify-between items-center p-4 text-white font-roboto"
  >
    <router-link :to="{ name: 'home' }" class="flex items-center">
      <img :src="Title" alt="Title" />
    </router-link>

    <nav class="max-md:hidden lg:flex">
      <ul class="flex gap-2 space-x-4">
        <li><router-link :to="{ name: 'home' }">Conectate</router-link></li>
        <li><router-link :to="{ name: 'home' }">Mis muros</router-link></li>
        <li><router-link :to="{ name: 'home' }">Mis listas</router-link></li>
        <li><router-link :to="{ name: 'home' }">Aprende</router-link></li>
      </ul>
    </nav>

    <div class="flex items-center space-x-4">
      <button class="max-sm:hidden bg-accent flex items-center gap-2">
        Comenzar<img :src="Plus" alt="Link" />
      </button>

      <div class="flex space-x-2">
        <img :src="Mail" alt="Mail" class="w-6 h-6" />
        <img :src="Notification" alt="Notification" class="w-6 h-6" />
      </div>

      <div class="flex relative items-center space-x-2">
        <img :src="Avatar" alt="Avatar" class="w-8 h-8 rounded-full" />
        <span class=""
          ><img :src="Expand" alt="Expand" class="w-3 h-3 rounded-full"
        /></span>
      </div>
    </div>
  </header>
</template>

<script setup>
import Title from "@/assets/icons/title.svg";
import Mail from "@/assets/icons/mail.svg";
import Notification from "@/assets/icons/notification.svg";
import Avatar from "@/assets/icons/avatar.svg";
import Expand from "@/assets/icons/expand.svg";
import Plus from "@/assets/icons/plus.svg";
</script>

<style scoped>
header {
  padding: 23px 141px 21px 141px;
  justify-content: space-between;
  align-items: center;
}
</style>
