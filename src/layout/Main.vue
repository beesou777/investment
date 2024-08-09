<template>
  <div>
    <!-- Header conent -->
    <div class="bg-white">
      <Marquee />
      <div class="max-w-[1440px] mx-auto ">
        <Header />
      </div>
    </div>
    <!-- Main content -->
    <div>
      <div>
        <RouterView />
      </div>
    </div>
    <div>
      <div class="max-w-[1440px] mx-auto">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
import Marquee from "@/components/Marquee.vue";
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<style lang="scss" scoped></style>
