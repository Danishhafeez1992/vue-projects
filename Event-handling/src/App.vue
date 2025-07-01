<script setup>
import { ref, reactive } from 'vue';
//Two types of Handlers
// (1 Inline Handlers)  (2 Method handlers)
// 1 Inline handler are typically used in simple cases 

const count = ref(0)
const result = ref(0)




//Calling Methods
function say(message) {
  console.log(message);
}
//with a parameter
function say2(str) {
  console.log(str);
}
//-Accessing Event Argument using $event Special -->

// function Myfunc(event) {
//   console.log("Event is true", event);
//   alert("Hey Danish")
// }



function Myfunc(str, event) {
  console.log("Event is true", str);
  console.log("Str is true", event);


}

// Method Handlers
function sayy(e) {
  console.log("Event is: ", e);
}

function say22() {
  console.log("Hello world");

}

// Key Modifier

function onPressEnter() {
  console.log("Enter key Pressed");
}

//  Event Modofiers

function checkData() {

  console.log("Chcecked Data");
}
function onsubmit() {
  console.log("This is submitted");

}

//System modifiers


</script>

<template>
  <!--Example of Inline Handler-->
  <h1>Count :{{ count }}</h1>

  <button v-on:click="count++" class="btn">Increase</button>

  <!--This is Short Hand of Click event -->
  <!-- <button @click="count++">Increase</button> -->

  <!-- <input v-on:focusin="count++" class="input-field" type="text">
  <input v-on:focusout="count--" class="input-field" type="text"> -->


  <!-- <h1>sum:{{ c }}</h1> -->
  <button @click="sum()" class="px-5 py-2 bg-red-700 text-white mx-4">Click meee</button>

  <!--Calling Methods-->
  <!-- <button @click="say()" class="px-5 py-2 bg-red-700 text-white mx-4">Click me</button> -->
  <button @click="say2('Bye.....')" class="px-5 py-2 bg-red-700 text-white mx-4">Click me</button>

  <!--Accessing Event Argument using $event Special -->
  <button @click="Myfunc('Hello', $event)" class="px-5 py-2 bg-orange-700 text-white mx-4">Click me</button>

  <button @click="sum()" class="bg-yellow-700 text-white px-5 py-2 mx-4">Click</button>

  <h1>Sum:{{ result }}</h1>
  <button @click="calculate" class="px-4 py-2 bg-blue-600 text-white rounded">
    Click to Add
  </button>




  <!--Method Handlers-->
  <!-- <button @click="sayy" class="bg-purple-700 text-white px-5 py-2 mx-4">Click</button> -->



  <button @click="say22()" class="bg-purple-700 text-white px-5 py-2 mx-4">Click</button>


















  <!--Event Modifiers-->
  <!--Example 1-->
  <a @click.prevent="checkData" class="border py-[7px] mx-10" href="https://www.google.com">Go to Google</a>

  <!--Example 2-->

  <form @submit.prevent="onsubmit">
    <button type="submit" class="border">Click me</button>
  </form>




  <!--Key Modifier-->

  <!-- only call `submit` when the `key` is `Enter` -->

  <input @keyup="onPressEnter" type="text" placeholder="Enter your text"
    class="w-full px-4 py-2 border mt-5 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />


  <!--System Modifier Keys-->

  <!--You can use the following modifiers to trigger mouse or keyboard event listeners only when the corresponding modifier key is pressed:-->

  <button @click="say('bye')">Say bye</button>
</template>



<style>
.input-field {
  height: 40px;
  border: 2px solid black;
  margin: 0 20px;
}

.btn {
  background-color: blueviolet;
  color: white;
  margin: 10px 0 0 0;
  padding: 10px 25px;
  border-radius: 6px;
}
</style>