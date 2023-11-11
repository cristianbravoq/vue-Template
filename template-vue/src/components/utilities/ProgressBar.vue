<template>
  <div class="flex gap-2 items-center">
    <span class="text-info">80%</span>
    <div class="progress-bar-container border bg-secondary">
      <div class="progress-bar" :style="{ width: `${progress}%` }"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const progress = ref(80);
</script>

<style scoped>

span {
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.5px;
}
.progress-bar-container {
  width: 276px;
  height: 14px;
  border-radius: 30px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background-color: #4caf50;
  transition: width 0.3s ease-in-out;
}
</style>
