<template>
   <hero-section />
  <div class="bg-[#f1f1f1] md:my-10 my-5 px-[10px]">
    <try-now />
    <program />
  </div>
  <customer-review />
  <recent-news />
</template>
<script setup lang="ts">
import tryNow from "./TryNow.vue";
import program from "./Programs.vue";
import recentNews from "./RecentNews.vue";
import heroSection from "./HeroSection.vue";
import customerReview from "../customerReview.vue";
</script>
