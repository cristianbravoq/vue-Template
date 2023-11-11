<template>
  <div class="additional-info bg-white w-full">

    <ul>
      <li v-for="(item, index) in infoArray" :key="index" class="flex w-full justify-between py-5 border-b">
        <div class="info-item flex gap-2">
          <img :src="item.imagen" class="" alt="" />
          <span>{{ item.texto }}</span>
        </div>
        <span>{{ item.numero }}</span>
      </li>
    </ul>

  </div>
</template>

<script setup>
import Eye from "@/assets/icons/eye.svg";
import Talent from "@/assets/icons/talent.svg";
import Camera from "@/assets/icons/camera.svg";
import Show from "@/assets/icons/Show.svg";
import Curriculum from "@/assets/icons/curriculum.svg";
import Multimedia from "@/assets/icons/multimedia.svg";

const infoArray = [
  { imagen: Eye, texto: "TALENTOS", numero: "20" },
  { imagen: Talent, texto: "VISTAS DEL PERFIL", numero: "20" },
  { imagen: Camera, texto: "PITCHES RECIBIDOS", numero: "20" },
  { imagen: Show, texto: "EXHIBICIONES", numero: "20" },
  { imagen: Curriculum, texto: "VACANTES", numero: "20" },
  { imagen: Multimedia, texto: "CONTENIDOS", numero: "20" },
];
</script>

<style scoped>

.additional-info {
    margin: 5px 10px;
}

ul > li:last-child {
  border: 0;
}

</style>
