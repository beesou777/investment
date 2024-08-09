<template>
  <div class="navbar-center hidden lg:flex items-center z-50">
    <ul class="menu menu-horizontal font-medium mb-0">
      <li><router-link :to="{ name: 'home' }">Home</router-link></li>
      <li><router-link :to="{ name: 'about' }">About</router-link></li>
      <li><router-link :to="{ name: 'blogs' }">Blog</router-link></li>
      <li><router-link :to="{ name: 'faq' }">Faqs</router-link></li>
      <li><router-link :to="{name: 'service'}">Services</router-link></li>
      <li><router-link :to="{ name: 'contact' }">Contact</router-link></li>
    </ul>
  </div>
</template>
