<template>
  <h1>
    {{ props.text }}
  </h1>
</template>

<script setup>
const props = defineProps({
  text: String,
})
</script>
