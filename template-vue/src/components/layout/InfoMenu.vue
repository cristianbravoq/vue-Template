<template>
  <div class="info-menu flex gap-4 flex-wrap w-full max-lg:flex-col">
    <div class="flex gap-2 max-lg:flex-col">
      <span class=" text-secondary">Match con la cultura</span>
      <ProgressBar />
    </div>

    <div class="flex gap-2">
      <button class="bg-accent text-white">Enviar Pith</button>
      <button class="text-accent flex gap-2 border-2 border-accent">
        <img :src="UserPlus" alt="" srcset="" />
        Seguir
      </button>
    </div>
  </div>
</template>

<script setup>
import ProgressBar from "../utilities/ProgressBar.vue";
import UserPlus from "@/assets/icons/user-plus.svg";
</script>

<style scoped>
.info-menu {
  justify-content: space-between;
  align-items: center;
}

span {
  color: #9FA8DA;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 19.5px */
  letter-spacing: 0.5px;
}
</style>
