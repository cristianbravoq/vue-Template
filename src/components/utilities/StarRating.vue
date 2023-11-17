<template>
  <div class="star-rating">
    <div
      v-for="(star, index) in stars"
      :key="index"
      @click="selectStar(index + 1)"
    >
      <img
        :src="
          star === 'filled'
            ? StarFilled
            : StarEmpty
        "
        alt="star"
      />
    </div>
  </div>
</template>

<script setup>
import StarFilled from "@/assets/icons/star-filled.svg"
import StarEmpty from "@/assets/icons/star-empty.svg";
import { ref } from "vue";

const stars = ref(Array(5).fill("empty")); // Inicialmente, las estrellas están vacías

const selectStar = (selectedStars) => {
  stars.value = stars.value.map((star, index) =>
    index < selectedStars ? "filled" : "empty"
  );
};
</script>

<style scoped>
.star-rating {
  display: flex;
  align-items: center;
  gap: 3px;
}

.star-rating img {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>
