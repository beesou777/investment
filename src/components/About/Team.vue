<template>
  <div class="mt-20 xl:px-[50px]">
    <div class="my-4 text-center">
      <h2 class="mission-title mx-auto border-bottom">Our Team</h2>
      <p class="my-4 text-gray-500">Lorem ipsum dolor sit amet consectetur.</p>
    </div>
    <div class="flex flex-col h-[600px]">
      <div
        class="upper bg-gray-100 h-full flex flex-col items-center justify-start pt-12"
      >
        <h3
          class="h2 font-bold w-3/4 text-center tracking-wide max-w-[1024px] text-pretty"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, sed.
        </h3>
        <p class="font-medium md:text-lg w-2/3 text-center mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          laborum in sit sint exercitationem dignissimos voluptatem quis autem
          magni ab.
        </p>
      </div>
      <div class="lower border-t-2 w-full h-1/2 relative">
        <div
          class="absolute sm:top-[-150px] top-[-100px] sm:pl-[40px] pl-[25px] h-[320px] w-full"
        >
          <div>
            <swiper
              :slidesPerView="1"
              :spaceBetween="0"
              :breakpoints="{
                495: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                980: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }"
              :pagination="{
                dynamicBullets: true,
              }"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide v-for="team in teamData" :key="team">
                <div class="h-56 w-56 text-center bg-gray-200 rounded-lg team">
                  <img
                    :src="team.image"
                    alt="team"
                    class="w-full h-full rounded-lg object-cover"
                  />
                </div>
                <span class="text-lg font-medium">{{ team.name }}</span
                ><br />
                <span class="text-md font-medium text-gray-500">{{
                  team.role
                }}</span>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import { reactive, ref } from "vue";

const modules = ref([Pagination]);
const teamData = reactive([
  {
    name: "John Doe",
    role: "CEO & Founder",
    image:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  },
  {
    name: "Jane Smith",
    role: "Chief Operating Officer",
    image:
      "https://i.pinimg.com/236x/fa/9c/4b/fa9c4bccfffa98a27009017c63c27d26.jpg",
  },
  {
    name: "Michael Johnson",
    role: "Chief Technology Officer",
    image:
      "https://t3.ftcdn.net/jpg/01/94/24/91/360_F_194249112_O0jR3G68zPz8w6mjFlSf0I0OaMB7tS8V.jpg",
  },
  {
    name: "Emily Davis",
    role: "Chief Financial Officer",
    image:
      "https://t3.ftcdn.net/jpg/03/14/32/38/360_F_314323821_Pt4As0BrvRpRC57YxI7Gbs9Fhguo3EG4.jpg",
  },
  {
    name: "Chris Brown",
    role: "Chief Marketing Officer",
    image:
      "https://t3.ftcdn.net/jpg/02/64/90/41/360_F_264904168_mW06VHEauhdScHJ9MZks2YIg1E7Y8TUz.jpg",
  },
  {
    name: "Amanda Wilson",
    role: "Chief Human Resources Officer",
    image:
      "https://t3.ftcdn.net/jpg/03/12/48/72/360_F_312487207_X2CH3IXzKk67bFSd9GbR3yMWDi6D9RTH.jpg",
  },
  {
    name: "David Martinez",
    role: "Chief Product Officer",
    image:
      "https://t3.ftcdn.net/jpg/02/45/59/93/360_F_245599357_jgQJpZ2v8apCHReMFGI3InleXBGsdEYs.jpg",
  },
  {
    name: "Sophia Lee",
    role: "Chief Customer Officer",
    image:
      "https://t3.ftcdn.net/jpg/03/15/47/83/360_F_315478308_5SGJw5hhGcZgRCHpWPIvE4Ty0yL9kK7H.jpg",
  },
]);
</script>
<style scoped>
.team {
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}

.mySwiper {
  height: 320px !important;
}
</style>
