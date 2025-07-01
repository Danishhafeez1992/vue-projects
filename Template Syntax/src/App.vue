<script setup>

const mydataId = "jack";
const url = "http://www.google.com";
const url2= "http:///www.facebook.com";

const DynamicObj = {
  id:"jack",
  href:"http://www.google.com",
};



const attributeName = "href";

const isDisabled = true;
</script>

<template>

<!--This is Attribute Bindings-->

<h1>{{mydataId}}</h1>

<h1 id="jack">Hello 1</h1>

<h1 v-bind:id="mydataId">Hello 2</h1>

<h1 :id="mydataId">Hello 3</h1>

<a v-bind:href="url">Vist 1</a><br/>

<a :href="url2">Vist 2</a><br/>

<!--Dynamically Binding Multiple Attributes-->
<a v-bind="DynamicObj">Visit 3 </a><br/>
<!--Dynamically Binding Multiple Attributes-->

<!--Dynamically Binding Multiple Attributes-->





<!--Dynamic Arguments-->
<a v-bind:[attributeName]="url">Visit 4 </a><br/>







<!--Boolean Attributes-->
<button :disabled="isDisabled" class="bg-orange-700 mr-4 px-8 py-4 text-white text-lg mt-4">Click me</button>

<button class="bg-orange-700 px-8 py-4 text-white text-lg mt-4">Click me</button>
</template>



<style scoped>

</style>




