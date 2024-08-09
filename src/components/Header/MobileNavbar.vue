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
    <div class="overlay-content">
      <ul class="menu rounded-box sm:text-lg">
        <li><router-link :to="{ name: 'home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'about' }">About</router-link></li>
        <li><router-link :to="{ name: 'blogs' }">Blog</router-link></li>
        <li><router-link to="">Features</router-link></li>
        <li>
          <details>
            <summary>Reports</summary>
            <ul class="rounded-t-none">
              <li><router-link to="">Annual Report</router-link></li>
              <li><router-link to="">Quarterly Report</router-link></li>
              <li><router-link to="">Weekly Report</router-link></li>
            </ul>
          </details>
        </li>
        <li><router-link to="">Announcements</router-link></li>
        <li><router-link to="">Company</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { brandLogo } from "../../../utils/index.ts";
import { XMarkIcon } from "@heroicons/vue/16/solid";

const emit = defineEmits(["toggleOverlay"]);
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
