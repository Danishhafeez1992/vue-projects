<script setup>
import {ref,reactive,computed} from 'vue';

import MyComponent from './components/MyComponent.vue';

// v-for example
const items = ref([
    {message:"Foo"},
    {message:"Bar"},
    {message:"Coo"}
])

// const fruits = ref(["Apple","Mango","Banana"])



    const fruits2 = ref([
        {name:'Apple', color: 'Red'},
         {name:'Banana', color: 'Yellow'},
          {name:'Mango', color: 'orange'},
    ]);

// Example no 2
const parentMessage = ref('Parent');


//v-for with an Object
const myobject = ref({
    title:" How to do list in vue js",
    author: "Jane do",
    publishedat: '20-03-2025'
})

//v-for with v-if
// const todo = ref(true)
// const todos = ref(["Azeem","Hafiz","Bakar"]);


//:key="item.id" ka Matlab Kya Hai?
const newItems = ref([
    {id:1, name:"Cat"},
    {id:2, name:"Dog"},
    {id:3, name:"Rat"}
]);











const fruits = ref([
  { id: 1, name: 'Mango' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Apple' }
])

let nextId = 4

function addFruit() {
  // push: akhir mein item add karta hai
  fruits.value.push({ id: nextId++, name: 'Peach' })
}

function removeLast() {
  // pop: akhir ka item hata deta hai
  fruits.value.pop()
}

function removeFirst() {
  // shift: pehla item hata deta hai
  fruits.value.shift()
}

function addFirst() {
  // unshift: shuru mein item add karta hai
  fruits.value.unshift({ id: nextId++, name: 'Kiwi' })
}

function customSplice() {
  // splice(index, howMany, newItem) => beech se hata ya add karta hai
  // 2nd position se 1 item hata kar new item add kar rahe hain
  fruits.value.splice(1, 1, { id: nextId++, name: 'Grapes' })
}

function sortFruits() {
  // sort: items ko A-Z naam ke hisaab se sort karta hai
  fruits.value.sort((a, b) => a.name.localeCompare(b.name))
}

function reverseFruits() {
  // reverse: array ko ulta kar deta hai
  fruits.value.reverse()
}
</script>




<template setup>
<!-- <MyComponent v-for="item in items"  :key="item.id"/> -->

<!--v-for example-->
<!-- <li v-for="item in items">{{ item.message }}</li> -->

<!--Example no 2-->

<!-- <li v-for="(item,i) in items">
    {{ parentMessage }} - {{ i }} - {{ item.message }}
</li> -->


<!--Example no 3-->

<!-- <li v-for="{message} in items">
    {{ message }}
</li> -->

<!--v-for with an Object-->



<!-- <ul>
    <li v-for="value in myobject">{{ value }}</li>
</ul> -->


<!--U CAN ALSO GET KEY WITH ANY KEYWORD LIKE KEY OR ANY OTHER ALSO GET INDEX WITH ANY ALPHA A TO Z-->
<!-- <li v-for="(value,key) in myobject">  {{ key }} : {{ value }}</li> -->


<!--v-for with a Range-->

<!--v-for can also take an integer. In this case it will repeat the template that many times, based on a range of 1...n.-->
<span v-for="n in 10">{{ n }}</span>





<!-- v-for with div-->

 <!--mean   Iska matlab: Har item ke liye ek div banega.-->
 <!--Exmaple 1 -->


 <!-- <div v-for="item in items" >
    {{ item }}
</div>  -->



<!--Exmaple 2 -->

<!-- <div v-for="fruit in fruits">
    {{ fruit }}
</div> -->

<!-- Yani: Ek div banega har item ke liye. Simple hai, lekin sirf ek element repeat ho raha hai.-->



<!--v-for on <template>-->



 <template v-for="fruitList in fruits2">
    <div class="flex">
          <span>{{ fruitList.name }}:</span>
<h3>{{ fruitList.color }}</h3>
    </div>

</template>



<!--v-for with v-if-->
<!--When they exist on the same node, v-if has a higher priority than v-for. That means the v-if condition will not have access to variables from the scope of the v-for:-->



<template v-for="todo in todos">
    <li v-if="!todoisComplete"></li>
    {{ todo.name }}
</template>

<!--This will throw an error because property "todo"
is not defined on instance.-->





<!--:key="item.id" ka Matlab Kya Hai?-->
<template v-for="itemz in newItems" :key="itemz.id">
    {{ itemz }} 
</template>
<!--Har item ka ek unique pehchan (identity) hai.-->
<!--item.id is unique for each fruit.

Vue ye id use karke samajhta hai ke kaunsa <div> kis item ka hai.-->








<!--v-for with a Component-->





<div class="p-4">
    <h1 class="text-xl font-bold mb-4">🧺 Fruits List</h1>

    <ul class="mb-4">
      <li v-for="fruit in fruits" :key="fruit.id" class="mb-1">
        🍎 {{ fruit.name }}
      </li>
    </ul>

    <div class="space-x-2">
      <button @click="addFruit" class="btn">push()</button>
      <button @click="removeLast" class="btn">pop()</button>
      <button @click="removeFirst" class="btn">shift()</button>
      <button @click="addFirst" class="btn">unshift()</button>
      <button @click="customSplice" class="btn">splice()</button>
      <button @click="sortFruits" class="btn">sort()</button>
      <button @click="reverseFruits" class="btn">reverse()</button>
    </div>
  </div>
</template>







<style scoped>
.btn {
  background-color: #4f46e5;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
}
</style>