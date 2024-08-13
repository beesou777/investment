<template>
  <div class="about pb-10">
     <AboutUs />
   <div class="px-[10px]  max-w-[1440px] mx-auto">
    <Mission />
    <Vision />
   </div>
    <Team />
  </div>
</template>

<script setup lang="ts">
import AboutUs from "@/components/About/AboutUs.vue";
import Mission from "@/components/About/Mission.vue";
import Vision from "@/components/About/Vision.vue";
import Team from "@/components/About/Team.vue";
</script>
