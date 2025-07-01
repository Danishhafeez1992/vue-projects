<!-- BlogPost.vue -->

<!--This is a child component -->

<!-- BlogPost.vue -->




<script setup>
defineProps(['name', 'greeting'])
</script>

<template>
  <h4>{{greeting}} {{ name }}</h4>
</template>