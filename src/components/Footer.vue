<template>
  <footer class="footer text-base-content py-10">
    <aside>
      <img :src="brandLogo" alt="logo without text" height="120" width="120" />
      <p class="mb-3">
        Finance Investment
        <br />
        Providing reliable partnership since 1992
      </p>
      <div class="contact-info flex">
        <img :src="callIcon" alt="Call Icon" class="contact-icon" />
        <span class="contact-number ml-3">989-898-9898</span>
      </div>
      <div class="mail-info flex">
        <img :src="mailIcon" alt="Mail Icon" class="mail-icon" />
        <span class="mail-id ml-3">xafere1313@leacore.com</span>
      </div>
      <div class="map-info flex">
        <img :src="mapIcon" alt="Map Icon" class="map-icon" />
        <span class="location-detail ml-3"
          >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
          placeat?</span
        >
      </div>
    </aside>
    <nav>
      <h6 class="footer-title">Getting Started</h6>
      <a class="link link-hover">Introduction</a>
      <a class="link link-hover">Documentation</a>
      <a class="link link-hover">Usage</a>
      <a class="link link-hover">Global</a>
      <a class="link link-hover">API</a>
      <a class="link link-hover">Elements</a>
    </nav>
    <nav>
      <h6 class="footer-title">Services</h6>
      <a class="link link-hover">Branding</a>
      <a class="link link-hover">Design</a>
      <a class="link link-hover">Marketing</a>
      <a class="link link-hover">Advertisement</a>
    </nav>
    <nav>
      <h6 class="footer-title">Company</h6>
      <a class="link link-hover">About us</a>
      <a class="link link-hover">Contact</a>
      <a class="link link-hover">Jobs</a>
      <a class="link link-hover">Press kit</a>
    </nav>
    <nav>
      <h6 class="footer-title">Legal</h6>
      <a class="link link-hover">Terms of use</a>
      <a class="link link-hover">Privacy policy</a>
      <a class="link link-hover">Cookie policy</a>
    </nav>
  </footer>
  <footer class="footer text-base-content border-base-300 border-t py-4">
    <aside class="grid-flow-col items-center">
      <p>
        Copyright © {{ year }} - All right reserved by Finance Investment Ltd.
      </p>
    </aside>
    <nav class="md:place-self-center md:justify-self-end">
      <div class="grid grid-flow-col gap-4">
        <a>
          <img :src="facebookSVG" alt="facebook" height="30" width="30" />
        </a>
        <a>
          <img :src="xSVG" alt="twitter" height="30" width="30" />
        </a>
        <a>
          <img :src="instagramSVG" alt="instagram" height="30" width="30" />
        </a>
      </div>
    </nav>
  </footer>
</template>
<script setup>
import {
  brandLogo,
  callIcon,
  mailIcon,
  mapIcon,
  xSVG,
  instagramSVG,
  facebookSVG,
} from "../../utils/index.ts";

const year = new Date().getFullYear();
</script>
