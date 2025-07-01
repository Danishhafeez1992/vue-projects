<template>
  <h1>This is a Parent Component</h1>
  <ChildComponent :text="'this is child component'" />
</template>

<script setup>
import ChildComponent from './ChildComponent.vue'
</script>
