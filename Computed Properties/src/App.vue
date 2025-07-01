<script setup>

import { computed, ref } from 'vue';
//✅ Example 2: Number Double Karna

let number = ref(1);

let double = computed(() => {
    return number.value * 2;
})

let triple = computed(() => {
    return number.value * 3;
    if (number.value >= 100) {
        alert("Too much")
    }
})


let myfunc = () => {

    number.value++;
}

let newNumber = computed(() => {
    return number.value * 2;
})


//double automatically number ka double value return karta hai. Agar number change karein, double bhi change ho jata hai.
</script>

<template>
    <!--computed(() => {}) ka matlab:
Automatically calculate hone wali property.-->
    <p>{{ number }}</p>
    <p>{{ newNumber }}</p>
    <p class="bg-red-300 border p-5 text-xl">Original Number: {{ number }}</p>

    <h1 class="bg-green-300 border p-5 text-xl">Double Number: {{ double }}</h1>

    <h2 class="bg-yellow-300 border p-5 text-xl">Triple Number:{{ triple }}</h2>


    <!-- <button class="bg-red-800 border  py-4 px-10 mt-5 text-white" @click="counted()">Click me</button> -->


    <button @click="myfunc()" class="bg-green-700 text-white px-10 py-3 mt-4">Click me</button>

</template>