<template>
  <div>
    <!-- Header conent -->
    <div class="bg-white">
      <Marquee />
      <div class="max-w-[1440px] mx-auto">
        <Header />
      </div>
    </div>
    <!-- Main content -->
    <RouterView />
    <div class="bg-[#f1f1f1]">
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Marquee from "@/components/Marquee.vue";
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

