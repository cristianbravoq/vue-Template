<template>
  <div>
    <CompanyResume />
    <div class="grid grid-cols-2 gap-4 mt-5">
      <ItemCompanyCard :data="AreasInteres" />
      <ItemCompanyCard :data="SugesrenciasAI" />
    </div>
    <div class="seccion my-4">
      Lo que buscamos en el talento
      <div class="line"></div>
    </div>
    <div class="grid grid-cols-2 gap-4 mt-5">
      <ItemCompanyCard :data="Conocimientos" />
      <ItemCompanyCard :data="Habilidades" />
      <ItemCompanyCard :data="Herramientas" />
      <ItemLanguajeCard :languages="languageData" />
    </div>
    <ItemCompanyCard class="mt-4" :data="Metodologias" />
    <div class="seccion my-4">
      Lo que ofrecemos en la empresa
      <div class="line"></div>
    </div>
    <div class="grid grid-cols-2 gap-4 mt-5">
      <ItemCompanyCard :data="Beneficios" />
      <ItemCompanyCard :data="FormasTrabajo" />
      <ItemCompanyCard :data="Cultura" />
      <ItemCompanyCard :data="Comunidades" />
    </div>
  </div>
</template>

<script setup>
import CompanyResume from "@/components/layout/CompanyResume.vue";
import ItemCompanyCard from "@/components/cards/ItemCompanyCard.vue";
import ItemLanguajeCard from "@/components/cards/ItemLanguajeCard.vue";
import { ref } from "vue";

import User from "@/assets/icons/user.svg";

const AreasInteres = ref({
  image: User,
  title: "Areas de Interes",
  items: ["Copy", "Copy", "Copy"],
});
const SugesrenciasAI = ref({
  image: User,
  title: "Vacantes sugeridad por AI",
  items: ["Copy", "Copy", "Copy"],
});

const Conocimientos = ref({
  image: User,
  title: "Conocimientos",
  items: ["Copy", "Copy", "Copy", "Copy", "Copy", "Copy", "Copy", "Copy"],
});
const Habilidades = ref({
  image: User,
  title: "Habilidades",
  items: ["Copy", "Copy", "Copy", "Copy", "Copy", "Copy", "Copy", "Copy"],
});
const Herramientas = ref({
  image: User,
  title: "Habilidades",
  items: ["Copy", "Copy", "Copy", "Copy", "Copy", "Copy", "Copy", "Copy"],
});
const Metodologias = ref({
  image: User,
  title: "Metodologias",
  items: ["Copy", "Copy", "Copy", "Copy"],
});

const Beneficios = ref({
  image: User,
  title: "Beneficios",
  items: ["Copy", "Copy", "Copy", "Copy", "Copy", "Copy", "Copy", "Copy"],
});
const FormasTrabajo = ref({
  image: User,
  title: "Formas de trabajo que ofrecemos",
  items: ["Copy", "Copy", "Copy", "Copy", "Copy", "Copy", "Copy", "Copy"],
});
const Cultura = ref({
  image: User,
  title: "Cultura que ofrecemos",
  items: ["Copy", "Copy", "Copy", "Copy"],
});
const Comunidades = ref({
  image: User,
  title: "Comunidades",
  items: ["Copy", "Copy", "Copy", "Copy"],
});

const languageData = ref([
  { id: 1, name: "Inglés", level: "Avanzado" },
  { id: 2, name: "Español", level: "Avanzado" },
  { id: 3, name: "Frances", level: "Avanzado" },
]);
</script>

<style scoped>
.seccion {
  color: var(--principales-primary-primary-1, #1a237e);
  width: 100%;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%; /* 25px */
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
}

.line {
  flex-grow: 1;
  height: 1px;
  background-color: #e8eaf6; /* Color de la línea */
  margin-left: 10px; /* Ajusta según sea necesario */
}
</style>
