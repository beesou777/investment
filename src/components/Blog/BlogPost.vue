<template>
  <div class="blog-post flex flex-col w-full group">
    <router-link :to="`/blog/${item.name}`">
      <div class="aspect-[480/258] overflow-hidden rounded-[4px] bg-[#f5f5f5]">
        <img
          :src="item.imgUrl"
          alt="blog1"
          width="100%"
          height="100%"
          class="w-full aspect-[480/258] group-hover:scale-[1.1] object-cover duration-300 max-w-full h-auto"
        />
      </div> 
      <div class="text-pretty">
        <p class="body-2 group-hover:underline duration-300 font-bold mt-4 mb-0 text-gray-950 leading-[150%] text-pretty">{{ item.name }}</p>
        <span class="text-pretty text-muted">{{ item.details }}</span>
      </div>
    </router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object,
});
</script>

<style scoped>
</style>
