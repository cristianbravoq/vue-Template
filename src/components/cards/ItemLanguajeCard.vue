<template>
  <div class="items-container border">
    <div class="flex gap-2">
      <img :src="User" alt="Item Image" class="logo rounded-full" />
      <span class="item-title">Idiomas</span>
    </div>
    <div class="flex gap-10">
        <div class="flex flex-col gap-1 flex-wrap container-text" v-for="language in languages" :key="language.id">
      <span class="item-text font-semibold" >
        {{ language.name }}
      </span>
      <span class="item-text">
        {{ language.level }}
      </span>
    </div>
    </div>

  </div>
</template>

<script setup>
import User from "@/assets/icons/user.svg";
import { defineProps } from 'vue';

const props = defineProps(['languages']);
</script>

<style scoped>
.logo {
  background: #f6f6f6;
}
.items-container {
  border-radius: 10px;
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
  align-self: stretch;
}

.item-title {
  color: var(--principales-primary-primary-1, #1a237e);
  text-align: center;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%; /* 21.25px */
  letter-spacing: 0.5px;
}

.item-text {
  color: var(--colores-semnticos-gray-gray-1, #212121);
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  line-height: 150%;
  letter-spacing: 0.5px;
}
</style>
