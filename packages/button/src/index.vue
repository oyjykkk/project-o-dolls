<template>
    <el-button @click="handleClick">默认按钮</el-button>
</template>

<script setup lang="ts" name="DButton">
import {ref} from "vue"
const props = defineProps({
    /**
     * 防抖，默认一秒
     */
    time: {
        type: Number,
        default: 1000
    },
    /**
     * 默认开启防抖
     */
    debounce: {
        type: Boolean,
        default: true
    }
})
const emits = defineEmits(["click"])
const timer = ref(0)
const handleClick = () => {
    if (!props.debounce) return emits("click")
    const newTime = new Date()
    if (newTime.getTime() - timer.value > props.time) {
        emits("click")
    }
    timer.value = newTime.getTime()
}
</script>

<style>

</style>