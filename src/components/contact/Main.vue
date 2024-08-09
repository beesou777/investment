<template>
  <div class="max-w-[1440px] mx-auto px-[10px] md:py-10 py-5">
    <h1 class="text-center border-bottom md:my-10 my-5">Contact</h1>
    <div class="md:pb-10 pb-5 grid md:grid-cols-3 grid-cols-1">
      <div
        class="text-center md:py-0 py-3"
        v-for="(item, index) in minimalData"
        :key="index"
      >
        <div class="">
          <img :src="item.icons" alt="icon" class="w-[45px] mx-auto text-gray-950" />
        </div>
        <h2 class="py-3 h3 mx-auto">{{ item.title }}</h2>
        <p class="body-1">{{ item.desc1 }}</p>
        <p class="body-1">{{ item.desc2 }}</p>
        <p class="body-1">{{ item.desc3 }}</p>
      </div>
    </div>
  </div>
  <div
    class="relative bg-center h-full md:mt-10 mt-5"
    :style="{
      background: 'url(' + contact_main_image + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <div class="md:py-[15rem] py-[6rem] text-center text-white">
      <h6 class="uppercase">Business Service</h6>
      <h2
        class="md:text-[56px] text-[36px] max-w-[770px] leading-[1.1] text-pretty text-center mx-auto"
      >
        Your result are our top priority
      </h2>
      <div class="text-center py-10">
        <router-link
          :to="{ name: 'about' }"
          class="bg-green-500 text-gray-950 font-medium px-10 py-4 duration-150 hover:bg-green-700"
          >Make an Appointment</router-link
        >
      </div>
    </div>
  </div>
  <div class="md:py-10 py-5">
    <h2 class="h2 border-bottom text-center mx-auto md:mb-10 mb-5">Our Location</h2>
    <iframe
    class="outline-none"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14130.74920371556!2d85.304718!3d27.696058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b47153008f%3A0xa68e5075b1ab1a17!2sDetech%20Solution%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1723200834573!5m2!1sen!2snp"
      width="100%"
      height="500"
      style="border: 0"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import contact_main_image from "../../assets/img/contact/contact-large-image.webp";
import time_reporting from "../../assets/icons/time_reporting.svg";
import location from "../../assets/icons/location.svg";
import phone from "../../assets/icons/phone.svg";


interface ContactHeader {
  title: string;
  desc1?: string;
  desc2?: string;
  desc3?: string;
  icons: string;
}

const minimalData: readonly ContactHeader[] = [
  {
    title: "Open Hour",
    desc1: "Mon-Fri: 9 AM – 6 PM",
    desc2: "Sat: 9 AM – 5 PM",
    desc3: "Sunday : Closed",
    icons: time_reporting,
  },
  {
    title: "Address",
    desc1: "123 street name",
    desc2: "NY 10014",
    desc3: "postal code",
    icons: location,
  },
  {
    title: "Get In Touch",
    desc1: "Telephone: +1(800)123-4566",
    desc2: "Email: info@yoursite.com",
    desc3: "Skype: yourskypeid",
    icons: phone,
  },
];
</script>