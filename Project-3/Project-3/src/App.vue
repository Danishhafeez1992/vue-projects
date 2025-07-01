
<script setup>

import { RouterView, RouterLink } from "vue-router";

let name = "Danish";

let items = ["waqar","babar","danish"];

</script>

<template>

<nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
  </nav>
  <RouterView/>

<p>Hello, {{ name }}</p>

<p>{{ 5 + 10 }}</p>

<p>{{ name.toUpperCase() }}</p>


<ul>
  <!-- <li v-for="item in items">{{ item }}</li> -->

  <li v-for="(item,index) in items">{{ index }} - {{ item }}</li>

  <li></li>

</ul>

</template>


<style scoped>
nav {
  width: 100%;
  font-size: 24px;
  border-bottom: 1px solid red;
}

nav a {
  display: inline-block;
  padding: 5px 10px;
  text-decoration: none;
  margin: 10px;
  border-radius: 5px;
}
  
nav a.router-link-exact-active {
  color: #fff;
  background-color: coral;
}
</style>
