<script setup>
import {ref,reactive,computed} from 'vue';

const fruits = ref([
    {id:1 , name:'Mango'},
    {id:2 , name: 'Banana'},
    {id:3 , name : 'Apple'}
])

let nextId = 4

function addFruit(){
     // push: akhir mein item add karta hai
     fruits.value.push({id: nextId++ , name:'Peach'})
}

function removeLast(){
     // pop: akhir ka item hata deta hai
    fruits.value.pop();
}
function removeFirst(){
    //shift: pehla item hata deta hai
    fruits.value.shift();
}
function addFirst(){
    // unshift: shuru me eik item add karta hai
    fruits.value.unshift({id:nextId++ , name:'kiwi'});
}
function customSplice(){
     // splice(index, howMany, newItem) => beech se hata ya add karta hai
     // 2nd position se 1 item hata kar new item add kar rahe hain
    fruits.value.splice(1,1, {id:nextId , name: 'Grapes'});
}

function sortFruits(){
     // sort: items ko A-Z naam ke hisaab se sort karta hai
    fruits.value.sort((a,b)=> a.name.localeCompare(b.name));
}
function reverseFruits(){

    fruits.value.reverse()
}
</script>


<template>

<div class="p-4">
    <h1 class="text-xl font-bold mb-4">🧺 Fruits List</h1>

    <ul class="mb-4">
        <li v-for="fruit in fruits" :key="fruit.id" class="mb-1"> 🍎  {{ fruit.name }}</li>
    </ul>

    

</div>

    <div class="flex items-center justify-around ">
        <button @click="addFruit()" class="btn">Push()</button>
         <button @click="removeLast()" class="btn">Pop()</button>
          <button @click="removeFirst()" class="btn">Shift()</button>
           <button @click="addFirst()" class="btn">Unshift()</button>
            <button @click="customSplice()" class="btn">Splice()</button>
             <button @click="sortFruits()" class="btn">Sort()</button>
              <button @click="reverseFruits()" class="btn">Reverse()</button>
    </div>
    

</template>



<style scoped>
.btn{
    background-color: blue;
    color: white;
    padding: 10px 12px;
    border-radius: 10px;
}

</style>