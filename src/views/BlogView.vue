<template>
 <div class="max-w-[1440px] mx-auto px-[10px] md:py-10 py-5">
  <h1 class="text-center md:mb-10 my-5 border-bottom">Blogs</h1>
   <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
    <router-link :to="`/blog/${slugify(item.title)}`" v-for="(item, index) in dataItems" :key="index">
      <div class="aspect-[480/258] overflow-hidden rounded-[4px] bg-[#f5f5f5]">
        <img
          :src="item.image"
          alt="blog1"
          width="100%"
          height="100%"
          class="w-full aspect-[480/258] group-hover:scale-[1.1] object-cover duration-300 max-w-full h-auto"
        />
      </div> 
      <div class="text-pretty">
        <p class="body-2 group-hover:underline duration-300 font-bold mt-4 mb-0 text-gray-950 leading-[150%] text-pretty">{{ item.title }}</p>
        <span class="text-pretty text-muted">{{ item.description }}</span>
      </div>
    </router-link>
  </div>
 </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
interface RSSFeedItem {
  title: string;
  link: string;
  guid: {
    _: string;
    $: {
      isPermaLink: string;
    };
  };
  category: string[];
  "dc:creator": string;
  pubDate: string;
  "atom:updated": string;
  "content:encoded": string;
  image: string;
  description: string;
  formattedDate: string;
}

const dataItems = ref<RSSFeedItem[]>([]);

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://rss-feed-rose.vercel.app/api/rss"
    );
    dataItems.value = response.data;
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
  }
};

const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .trim(); // Trim leading and trailing -
};

onMounted(fetchData);
</script>