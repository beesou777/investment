<template>
  <div class="max-w-[1440px] mx-auto px-[10px]">
    <h1 class="lg:text-[67px] md:text-[48px] text-[36px] leading-[1.1] pb-5 tracking-wider uppercase">Your loyal guardian</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div class="">
        <img :src="herosectionImag" alt="" />
      </div>
      <div class="bg-white flex flex-col justify-center items-start p-10">
        <h2 class="h1 leading-[1.1] max-w-[450px]">
          We’re here to safeguard what matters most to you
        </h2>
        <div class="text-muted text-pretty max-w-[450px] py-5 body-1">
          Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit.
        </div>
        <div class="text-center py-10">
          <router-link
            :to="{ name: 'service' }"
            class="bg-green-500 text-gray-950 font-medium px-10 py-4 duration-150 hover:bg-green-700"
            >Get Started</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import herosectionImag from "../../assets/img/homepage/hero-section.webp";
</script>