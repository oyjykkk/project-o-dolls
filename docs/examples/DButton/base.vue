<template>
    <d-button @click="handleClick">默认按钮</d-button>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const num = ref(0)
const handleClick = () => {
    num.value += 1
    console.log(num)
}
</script>

<style>

</style>