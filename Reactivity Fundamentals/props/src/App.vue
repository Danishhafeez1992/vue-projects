<script setup>
import {ref,reactive,isRef,isReactive,unref,toRef} from 'vue';



let a = 10;
console.log("a:",isRef(a));

let b = ref(20);
console.log("b:",b);

console.log("b:",isRef(b));

let num = reactive ({count:1});

console.log("num:",num);

console.log("is b Reactive",isReactive(b));


console.log("is num Reactive:", isReactive(num));

console.log("b",unref(b));

let student = reactive ({
    name:  "Ankita",
    rollNo : 101,
});

let nameRef = toRef(student,"name");



console.log("Student:",student);
console.log("Is Student Reactive:", isReactive(student));
console.log("Student.name",student.name);
console.log("Is Student.name Reactive", isReactive(student.name));

console.log("Is Student.name Ref",isRef(student.name));


console.log("nameRef",nameRef);
console.log("is nameRef Ref:", isRef(nameRef));
</script>
<template>
</template>
<style>
</style>