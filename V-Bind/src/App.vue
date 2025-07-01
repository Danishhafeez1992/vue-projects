<script>
export default {
  data() {
    return {
      isMenuOpen: false, // Controls mobile menu toggle
    };
  },
};
</script>

<template>
  <!-- <h1>Hello App!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p> -->


  <nav class="sticky top-0 z-50  shadow-md w-[100%] bg-[#333]">

    <div class="flex items-center justify-around  max-w-[1400px] mx-auto ">
      <img class="w-[50px]" src="../src/assets/images/logo.png">
        <!-- Toggle Button -->
    <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen">
      ☰
    </button>
        <ul class="sticky ['nav-links', { open: isMenuOpen }]">

  <li><router-link to="/">Home Page</router-link></li>
  <li><router-link to="/about">About Page</router-link></li>
  <li><router-link to="/contact">Contact Page</router-link></li>
 <li><router-link to="/resources">Resources</router-link></li>
 <li><router-link to="/templatesyntax">Template Syntax</router-link></li>
  </ul>

  <div>
    <button class="bg-white text-[#333] hover:bg-gray-100 px-4 py-2 rounded">Contact Us</button>
  </div>

    </div>



  </nav>



  <main>
    <RouterView />
  </main>
</template>


<style>
body{
  margin: 0;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 10;
  overflow: hidden;

  padding: 20px;
}

li {
  float: left;
   padding-right: 26px;
}


ul li a {
    color: white;
    text-decoration: none;
    font-family: system-ui;
}

@media only screen and (max-width:768px){
  .menu-toggle {
    display: none;
  }
 
  
}


</style>