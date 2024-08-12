<template>
  <div>
    <footer class="footer px-1 lg:px-2 mb-4">
      <div class="footer-section">
        <img
          :src="brandLogo"
          alt="logo without text"
          height="120"
          width="120"
        />
        <p class="mb-2">
          Finance Investment
          <br />
          Providing reliable partnership since 1992
        </p>
        <div class="contact-info">
          <img :src="callIcon" alt="Call Icon" class="contact-icon" />
          <span class="contact-number">989-898-9898</span>
        </div>
        <div class="mail-info">
          <img :src="mailIcon" alt="Mail Icon" class="mail-icon" />
          <span class="mail-id">xafere1313@leacore.com</span>
        </div>
        <div class="map-info">
          <img :src="mapIcon" alt="Map Icon" class="map-icon" />
          <span class="location-detail">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
            placeat?
          </span>
        </div>
      </div>
      <div class="footer-section">
        <span class="h6 uppercase">Getting Started</span>
        <nav class="footer-nav">
          <a href="#" class="footer-link">Introduction</a>
          <a href="#" class="footer-link">Documentation</a>
          <a href="#" class="footer-link">Usage</a>
          <a href="#" class="footer-link">Global</a>
          <a href="#" class="footer-link">API</a>
          <a href="#" class="footer-link">Elements</a>
        </nav>
      </div>
      <div class="footer-section">
        <span class="h6 uppercase">Services</span>
        <nav class="footer-nav">
          <a href="#" class="footer-link">Branding</a>
          <a href="#" class="footer-link">Design</a>
          <a href="#" class="footer-link">Marketing</a>
          <a href="#" class="footer-link">Advertisement</a>
        </nav>
      </div>
      <div class="footer-section">
        <span class="h6 uppercase">Company</span>
        <nav class="footer-nav">
          <a href="#" class="footer-link">About us</a>
          <a href="#" class="footer-link">Contact</a>
          <a href="#" class="footer-link">Jobs</a>
          <a href="#" class="footer-link">Press kit</a>
        </nav>
      </div>
      <div class="footer-section">
        <span class="h6 uppercase">Legal</span>
        <nav class="footer-nav">
          <router-link to="{ name: 'terms-and-conditions' }" class="footer-link"
            >Terms of use</router-link
          >
          <router-link to="{ name: 'privacy-policy' }" class="footer-link"
            >Privacy policy</router-link
          >
          <a href="#" class="footer-link">Cookie policy</a>
        </nav>
      </div>
    </footer>
    <footer class="footer border-t py-4">
      <div class="grid-flow-col items-center">
        <p class="">
          Copyright © {{ new Date().getFullYear() }} - All right reserved by
          Finance Investment Ltd.
        </p>
      </div>
      <nav class="md:place-self-center md:justify-self-end">
        <div class="grid grid-flow-col gap-4">
          <a>
            <img :src="facebookSVG" alt="facebook" height="24" width="24" />
          </a>
          <a>
            <img :src="xSVG" alt="twitter" height="24" width="24" />
          </a>
          <a>
            <img :src="instagramSVG" alt="instagram" height="24" width="24" />
          </a>
        </div>
      </nav>
    </footer>
  </div>
</template>

<script setup lang="ts">
import {
  brandLogo,
  callIcon,
  mailIcon,
  mapIcon,
  instagramSVG,
  facebookSVG,
  xSVG,
} from "../../utils/index.ts";

const year = new Date().getFullYear();
</script>

<style scoped>
.footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: #111827;
  font-size: 14px;
}

.footer-section .h6 {
  color: #6b7280;
}

.footer-nav {
  display: flex;
  flex-direction: column;
}

.footer-link {
  text-decoration: none;
  margin-bottom: 8px;
}

.footer-link:hover {
  text-decoration: underline;
}

.contact-info,
.mail-info,
.map-info {
  display: flex;
}

.contact-info span,
.mail-info span,
.map-info span {
  margin-left: 4px;
}

.contact-icon,
.mail-icon,
.map-icon {
  width: 24px;
  height: 24px;
}

.footer-bottom {
  text-align: center;
  padding: 10px;
}

@media (max-width: 842px) {
  .footer-section {
    min-width: 200px;
  }
}
@media (max-width: 768px) {
  .footer-section {
    min-width: 150px;
  }
}
</style>
