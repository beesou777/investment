<template>
  <div class="font-medium mb-0 lg:flex hidden py-4 items-center gap-8 ">
    <router-link
      v-for="(item, index) in routeData"
      :key="index"
      class="py-2 hover:text-primary capitalize relative after:content-[''] after:w-0 after:absolute after:h-[2px] hover:after:w-full after:bg-primary after:bottom-[4px] after:left-0 hover:after:duration-300"
      :class="{ 'text-primary relative after:content-[\'\'] after:absolute after:h-[2px] after:!w-full after:bg-primary after:bottom-[4px] after:left-0': route.name == item}"
      :to="{ name: item }"
      >{{ item }}</router-link
    >
   
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

const routeData : readonly string[] = [
  "home",
  "about",
  "service",
  "faq",
  "blogs",
  "contact",
];
</script>