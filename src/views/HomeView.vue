<template>
  <div class="py-10 max-w-[1440px] mx-auto px-[10px]">
    <div class="flex justify-center">
      <img src="../assets//img/Hero.png" alt="hero image" width="100%" />
    </div>
    <home/>
  </div>
</template>

<script setup lang="ts">
import Home from "../components/Home/Main.vue";
</script>

<style lang="scss" scoped>
img{
  mix-blend-mode: darken;
}

</style>
