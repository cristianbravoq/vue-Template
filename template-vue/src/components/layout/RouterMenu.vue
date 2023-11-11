<template>
  <nav>
    <ul class="flex gap-4 border-accent">
      <li
        v-for="item in menuItems"
        :key="item.name"
        :class="{ 'border-b-2 border-accent': isLinkActive(item.path) }"
      >
        <router-link :to="item.path" exact-active-class="text-accent">{{
          item.name
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const menuItems = ref([]);

const props = defineProps({
  menuData: {
    type: Array,
    required: true,
  },
});

const route = useRoute();

menuItems.value = props.menuData;

const isLinkActive = (path) => route.path === path;
</script>

<style scoped>
li {
  padding: 16px;
}

.underline {
  text-decoration: underline;
}
</style>
