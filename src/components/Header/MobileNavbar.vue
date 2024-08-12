<template>
  <div>
    <div class="flex justify-between p-5">
      <div class="flex items-center pl-1 lg:pl-2">
        <img :src="brandLogo" alt="brandLogo" height="150" width="150" />
      </div>
      <XMarkIcon
        class="size-6 text-black close-overlay cursor-pointer"
        @click="emit('toggleOverlay')"
      />
    </div>
    <div class="overlay-content  flex flex-col w-fit px-10">
      <router-link
      v-for="(item, index) in routeData"
      :key="index"
      @click="emit('toggleOverlay')"
      class="py-2 hover:text-primary text-start h4  text-gray-950 capitalize relative after:content-[''] after:w-0 after:absolute after:h-[2px] hover:after:w-full after:bg-primary after:bottom-[4px] after:left-0 hover:after:duration-300"
      :class="{ 'text-primary': route.name == item}"
      :to="{ name: item }"
      >{{ item }}</router-link
    >
    </div>
  </div>
</template>
<script setup lang="ts">
import { brandLogo } from "../../../utils/index.ts";
import { XMarkIcon } from "@heroicons/vue/16/solid";
import { useRoute } from "vue-router";

const emit = defineEmits(["toggleOverlay"]);

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

<style scoped>
.overlay {
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  transition: top 0.5s;
  z-index: 1000;
}

.overlay-active {
  top: 0;
}

.overlay-content {
  text-align: center;
}

.overlay li {
  color: black;
  text-decoration: none;
  margin-bottom: 0 !important;
}
</style>
