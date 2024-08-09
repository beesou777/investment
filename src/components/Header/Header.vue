<template>
  <div class="flex justify-between h-[75px]">
    <div class="flex items-center pl-1 lg:pl-2">
      <img :src="brandLogo" alt="brandLogo" height="150" width="150" />
    </div>

    <Navbar />

    <div class="lg:hidden">
      <nav class="navbar">
        <div class="flex-none">
          <button class="btn btn-square btn-ghost" @click="toggleOverlay">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block h-5 w-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      <div
        :class="['overlay bg-[#f3f4f6]', { 'overlay-active': overlayActive }]"
      >
        <MobileNavbar @toggle-overlay="toggleOverlay" />
      </div>
    </div>
  </div>
</template>
<script setup>
import Navbar from "../Header/Navbar.vue";
import { brandLogo } from "../../../utils/index.ts";
import { ref } from "vue";
import { XMarkIcon } from "@heroicons/vue/16/solid";
import MobileNavbar from "./MobileNavbar.vue";

const overlayActive = ref(false);

const toggleOverlay = () => {
  overlayActive.value = !overlayActive.value;
};
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
}
</style>
