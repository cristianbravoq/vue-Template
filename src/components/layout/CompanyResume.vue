<template>
  <div class="flex flex-col gap-4 p-4 border">
    <div class="flex">
      <img :src="User" alt="" class="logo rounded-full" />
      <h4 class="text-primary">Resumen de la empresa</h4>
    </div>
    <div class="flex flex-col gap-5">
      <div>
        <h5>Descripcion</h5>
        <p>
          En ac telecom somos expertos en telecomunicaciones con mas de 25 años
          comprobables en el mercado, brindando empleo a mas de 321 empleados al
          rededor de todo el mundo
        </p>
      </div>
      <div class="flex gap-5 w-full">
        <div class="flex flex-col gap-4 flex-1">
          <div>
            <h5>Correo electronico</h5>
            <p>ejemplo@ejemplo.com</p>
          </div>
          <div>
            <h5>Estados deseados buscados</h5>
            <p>Emprendedor, practicas, primer empleo</p>
          </div>
        </div>
        <div class="flex flex-col gap-4 flex-1">
          <div>
            <h5>Numero de contacto</h5>
            <p>3005895648</p>
          </div>
          <div>
            <h5>Rol mas buscado</h5>
            <p>Lider UX</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import User from "@/assets/icons/user.svg";
</script>

<style scoped>
.logo {
  background: #f6f6f6;
}

h4 {
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%;
  letter-spacing: 0.5px;
}

h5 {
  color: var(--colores-semnticos-gray-gray-1, #212121);
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 19.5px */
  letter-spacing: 0.5px;
}
p {
  color: var(--colores-semnticos-gray-gray-2, #666);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.5px;
}
</style>
