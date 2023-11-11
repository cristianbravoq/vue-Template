<template>
  <div class="my-6 flex flex-col gap-4">
    <h3 class="text-primary">Publicadas recientemente</h3>
    <div v-if="loading" class="loader">Loading...</div>

    <div v-else class="container flex relative" ref="containerRef">
      <button @click="scrollLeft" class="scroll-button left">&lt;</button>
      <JobCard v-for="offert in offerts" :key="offert.id" :offert="offert" />
      <button @click="scrollRight" class="scroll-button right">&gt;</button>
    </div>
  </div>
</template>

<script setup>
import JobCard from "@/components/cards/JobCard.vue";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const offerts = ref([]);
const loading = ref(true);
const containerRef = ref(null);

onMounted(async () => {
  try {
    await store.dispatch("jobs/fetchOfferts");
    offerts.value = store.getters["jobs/allOfferts"];
  } finally {
    loading.value = false;
  }
});

const scrollLeft = () => {
  if (containerRef.value) {
    const newScrollLeft = containerRef.value.scrollLeft - 250;
    smoothScroll(containerRef.value, newScrollLeft, 500);
  }
};

const scrollRight = () => {
  if (containerRef.value) {
    const newScrollLeft = containerRef.value.scrollLeft + 250;
    smoothScroll(containerRef.value, newScrollLeft, 500);
  }
};

const smoothScroll = (element, to, duration) => {
  const start = element.scrollLeft;
  const change = to - start;
  const increment = 10;
  let currentTime = 0;

  const animateScroll = () => {
    currentTime += increment;
    const val = Math.easeInOutQuad(currentTime, start, change, duration);
    element.scrollLeft = val;
    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  animateScroll();
};

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};
</script>

<style scoped>
h3 {
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0.5px;
}
.container {
  overflow-x: scroll;
  gap: 16px;
  position: relative;
  transition: scroll-left 0.5s ease;
}

.scroll-button {
  position: sticky;
  top: 50%;
  background-color: #e8eaf6;
  color: #1a237e;
  font-size: 17px;
  border: 10px;
  padding: 8px;
  cursor: pointer;
}

.scroll-button.left {
  left: -2px;
}

.scroll-button.right {
  right: -2px;
}

.loader {
  display: inline-block;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { opacity: 1; }
  100% { opacity: 0; }
}
</style>
