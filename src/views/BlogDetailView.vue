<template>
  <div v-if="blog" class="max-w-[1440px] mx-auto">
    <div v-html="blog.content"></div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import router from "@/router";

interface Blog {
  title: string;
  link: string;
  image: string;
  description: string;
  formattedDate: string;
  content: string;
}

const blog = ref<Blog | null>(null);

// Get the current route
const route = useRoute();

const fetchBlogDetails = async () => {
  try {
    // Get the slug from the route parameters
    const slug = router.currentRoute.value.params.id as string;
    // Fetch the blog details from the API using the slug
    const response = await axios.get(
      `https://rss-feed-rose.vercel.app/api/blog/${slug}`
    );
    const blogData = response.data;
    blog.value = {
      ...blogData,
      content: blogData["content:encoded"] || "",
    };
  } catch (error) {
    console.error("Error fetching blog details:", error);
  }
};

onMounted(() => {
  fetchBlogDetails();
});
</script>

<style scoped lang="scss">
/* Add your styles here */
</style>
