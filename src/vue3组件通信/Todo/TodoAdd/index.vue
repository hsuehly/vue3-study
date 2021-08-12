<template>
  <input type="text" v-model="inputValue" > 
  <button @click="handleAdd">添加事件</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TodoAdd',
  setup(props,{emit}) {
    // const inputRef = ref<HTMLInputElement>()
      const inputValue = ref("")
    const handleAdd = () => {
      // console.log(inputRef.value?.value)
      // console.log("ss")
      emit("add",inputValue.value)
      inputValue.value = ""
      
    }


      return {
        inputValue,
        handleAdd
      }
  },
})
</script>