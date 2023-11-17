<template>
  <div class="profile-container bg-white flex flex-col items-center border">
    <div
      class="avatar-container text-primary bg-secondary rounded-full flex justify-center items-center"
    >
      <span class="avatar-text">AC</span>
    </div>

    <div class="info-container font-inter text-center">
      <h2 class="company-name text-primary">A.C. Telecom</h2>
      <span>@ac_telecom</span>
      <span class="text-secondary">Startup - Tecnología</span>
      <span class="status text-success">Empresa activa</span>
      <div class="location flex gap-2 justify-center">
        <img :src="Maps" alt="" srcset="" />
        <span>Floridablanca - Colombia</span>
      </div>
      <div class="ratings flex justify-around">
        <StarRating />
        <span>(10 Reviews)</span>
      </div>
      <div class="social-media">Redes sociales:</div>
      <p class="text-accent flex gap-2">
        <img :src="Link" alt="Link" />https://www.actelecom.net/telecom
      </p>
    </div>

    <div class="image bg-secondary">
      <img :src="Foto" alt="" srcset="">
    </div>

    <div class="qr-code bg-secondar flex justify-center">
      <img :src="QR" alt="" srcset="">
    </div>

    <button
      class="share-profile-btn flex text-white justify-center gap-2 items-center w-full bg-accent"
    >
      <img :src="Shared" alt="" srcset="" />
      Compartir Perfil
    </button>

    <button
      class="download-summary-btn p-0 flex text-white justify-between gap-2 items-center w-full border"
    >
      <div class="bg-accent rounded-l-md border-0">
        <img :src="Download" class=" " alt="" srcset="" />
      </div>
      <span class="w-full text-left ml-4 text-black">Descargar Resumen</span>
    </button>

    <UserList />

  </div>
</template>

<script setup>
import Maps from "@/assets/icons/map.svg";
import Link from "@/assets/icons/link.svg";
import Shared from "@/assets/icons/shared.svg";
import Download from "@/assets/icons/download.svg";
import QR from "@/assets/img/qr.png";
import Foto from "@/assets/img/foto.png";
import StarRating from "../utilities/StarRating.vue";
import UserList from "./UserList.vue";
</script>

<style scoped>
.profile-container {
  transform: translateY(-115px);
  border-radius: 10px;
  padding: 32px 24px 16px 24px;
  max-width: 336px;
}

.avatar-container {
  width: 170px;
  height: 170px;
}

.avatar-text {
  text-align: center;
  font-weight: 700;
  font-size: 80px;
  letter-spacing: -16px;
  line-height: 1;
}

.company-name {
  font-weight: 600;
  font-size: 24px;
}

.info-container > * {
  line-height: 30px;
  letter-spacing: 0.5px;
  font-size: 12px;
}

span {
  display: block;
}

.image {
  width: 288px;
  height: 306px;
}

.qr-code {
  width: 288px;
  height: 240px;
}

.share-profile-btn,
.download-summary-btn {
  min-height: 40px;
  max-width: 288px;
  margin: 10px 0;
}

.download-summary-btn > div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
}

</style>