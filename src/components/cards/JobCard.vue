<template>
  <div class="job-container border flex flex-col font-roboto overflow-hidden">
    <div class="job-container__image">
      <img
        :src="offert.image"
        alt=""
        srcset=""
        class="object-cover w-full h-full"
      />
    </div>

    <div class="job-container__details flex gap-2 items-center justify-between">
      <div class="flex gap-2 items-center">
        <span class="job-container__expertise">Experticia</span>
        <StarRating />
      </div>
      <img :src="Conexion" alt="" srcset="" class="w-6 h-6" />
    </div>

    <div class="job-container__description overflow-hidden">
      <h3 class="job-container__title text-2xl">Lider UX/UI</h3>

      <span class="job-container__organization">{{ offert.company_name }}</span>
      <p class="job-container__text capitalize">{{ offert.description }}</p>

      <div class="job-container__info flex justify-between">
        <div
          v-for="info in infoItems"
          :key="info.label"
          class="flex flex-col items-center"
        >
          <span class="job-container__info-item text-white">{{
            offert[info.property]
          }}</span>
          <span>{{ info.label }}</span>
        </div>
      </div>

      <div class="job-container__apply border-t pt-5">
        <button class="job-container__apply-button bg-accent text-white">
          Aplicar a vacante
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import StarRating from "../utilities/StarRating.vue";
import Conexion from "@/assets/icons/conexion.svg";
import { defineProps } from "vue";

const { offert } = defineProps(["offert"]);

const infoItems = [
  { label: "Vistas", property: "views_count" },
  { label: "Comentarios", property: "comments_count" },
  { label: "Pitches", property: "pitches_count" },
];
</script>

<style scoped>
.job-container {
  border-radius: 10px;
  max-width: 256px;
  flex-shrink: 0;
}

.job-container__image {
  height: 73px;
}

.job-container__details {
  background: #fafafa;
  padding: 5px 12px;
  height: 40px;
}

.job-container__description {
  margin: 11px;
  gap: 16px;
}

.job-container__title {
  font-size: 16px;
}

.job-container__organization {
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.5px;
  padding: 5px;
  color: #2196f3;
  background: #e3f2fd;
  border-radius: 10px;
}

.job-container__text {
  font-size: 12px;
  font-weight: 400;
  height: 75px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.job-container__info-item {
  background: #e565a5;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.5px;
  text-align: center;
  border-radius: 10px;
  height: 18px;
  width: 24px;
}

.job-container__apply {
  margin-top: 10px;
}

.job-container__apply-button {
  border-radius: 6px;
  min-width: 117px;
  padding: 5px 12px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.5px;
}
</style>
