<script setup>
import { ref } from 'vue'

const myContent = ref('')

myContent.value = `<div class="border w-[400px] mt-[100px] ml-5 p-5">
<div class="text-blue-600 font-bold">My Name is Danish Hafeez</div>
<div class="text-red-600 font-bold">I Am 32 years old</div>
<div class="text-green-600 font-bold">I Am working as a Front End Developer</div>`

const myfunc = () =>{
    myContent.value = `<div class="border w-[400px] mt-[100px] ml-5 p-5">
<div class="text-blue-600 font-bold">My Name is Azeem</div>
<div class="text-red-600 font-bold">I Am 21 years old</div>
<div class="text-green-600 font-bold">I Am working as a Back End Developer</div>`
}

const rawHtml = `<span style="color: red; font-weight:700; font-size:50px">This should be red.</span>`;

const Raww = `<span style="color: orange; font-weight:700; font-size:20px">This should be red.</span>`;

const name = `<span style="color: blue; font-size:22px;">Danish</span>`;



</script>



<template>
<p>Using text interpolation: {{ rawHtml }}</p>

<p>using v-html directive <span v-html="rawHtml"></span></p>

<div v-html="myContent" class="w-full">

</div>

<button @click="myfunc()" class="mt-[20px] ml-[20px] bg-orange-600 text-white border px-[30px] py-[10px] rounded font-bold padding">Click me</button>



<p>Using text interpolation: {{ rawHtml }}</p>

<p>Using v-html directive: <span v-html="rawHtml"></span></p>

<p>Hey its me Sunny{{ Raww }}</p>

<p>Using v-html directive:<h2 v-html="Raww"></h2></p>


<p>My Name is <span v-html="name"></span></p>


<div v-bind:id="dynamicId"></div>


</template>



<style>


</style>