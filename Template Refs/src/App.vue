<script setup>
import { ref, reactive, onMounted, watchEffect } from 'vue';

const inputRef = ref(null);

onMounted(() => {
  console.log(inputRef.value);
  inputRef.value.focus();
})


// <!--*Example no 1-->
const myInput = ref(null);
function focusInput() {
  //yeh directly input field pe focus kare ga
  myInput.value.focus();
}

const myRef = ref(null);



function showValue() {
  console.log('INPUT VALUE WILL BE', myRef.value.value);

}

const input = useTemplateRef('myref');

onMounted(() => {
  input.value.focus();
})

watchEffect(() => {
  if (input.value) {
    input.value.focus()
  }
  else {
    // not mounted yet, or the element was unmounted (e.g. by v-if)
  }
})


const list = ref([])



</script>

<template>

  <!--*Template Refs Vue.js mein aik tareeqa hota hai jisse hum directly kisi HTML element ya Vue component ko JavaScript mein access kar sakte hain.-->


  <!--*Register Refs-->
  <div>
    <label class="" for="username">Username:</label>
    <input class="border border-black-400" type="text" id="username" ref="inputRef" />
  </div>


  <!--*Watching the ref-->

  <!--*Example no 1-->


  <!--Yahan humne input field mein ref="myInput" lagaya hai.

  //Yeh myInput aik reference ban gaya hai jo ab directly JavaScript se access ho sakta hai.

  //Jab button click hota hai to focusInput function chal raha hai jo ke directly input field pe focus laga raha hai.-->

  <div class="flex mt-5">
    <input class="border border-green-700" type="text" ref="myInput" placeholder="Type something......" />
    <button class="border border-brown-700 bg-orange-500 text-white p-3" @click="focusInput">Focus Input</button>
  </div>




  <!--Example 2: Reading Value from Input using Template Ref-->

  <div>
    <input type="text" ref="myInput" placeholder="Enter your name" />
    <button @click="showValue">Show Input Value</button>
  </div>




  <!--Accessing the Refs-->
  <!--To obtain the reference with Composition API, we can use the useTemplateRef()  helper:-->



  <input ref="myref" type="text">




  <!--*Refs inside v-for-->
  <ul>
    <li v-for="item in list" ref="items">
      {{ item }}
    </li>
  </ul>

</template>



<style scoped></style>
