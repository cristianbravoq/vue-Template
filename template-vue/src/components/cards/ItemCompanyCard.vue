<template>
  <div class="items-container border">
    <div class="flex gap-2">
      <img :src="data.image" alt="Item Image" class="logo rounded-full" />
      <span class="item-title">{{ data.title }}</span>
    </div>
    <div class="flex gap-4 flex-wrap">
      <span
        class="item-text"
        v-for="(item, index) in data.items"
        :key="index"
        >{{ item }}</span
      >
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["data"]);
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
  border-radius: 10px;
  background: #e3f2fd;
  display: flex;
  width: 68px;
  padding: 0px 5px;
  justify-content: center;
  align-items: center;
  color: var(--colores-semnticos-info-info-1, #2196f3);
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.5px;
}
</style>
