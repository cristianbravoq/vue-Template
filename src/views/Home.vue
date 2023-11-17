<template>
    <UserInfo />
    <div class="flex-grow overflow-hidden mt-5">
      <InfoMenu />
      <RouterMenu :menuData="menuData"/>
      <div>
        <router-view />
      </div>
    </div>
</template>

<script setup>
import UserInfo from "@/components/layout/UserInfo.vue";
import InfoMenu from "@/components/layout/InfoMenu.vue";
import RouterMenu from "@/components/layout/RouterMenu.vue";

const menuData = [
  { name: 'Perfil', path: '/company' },
  { name: 'Vacantes', path: '/jobs' },
  { name: 'Listas', path: '/as' }
];
</script>

<style scoped>

</style>