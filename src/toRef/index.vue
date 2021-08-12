<template>
<p>{{ageRef}}</p>
<p>{{nameRef}}</p>
<button @click="handleCilck">点击</button>
</template>


<script lang="ts">
import {defineComponent, reactive, ref, toRef, toRefs, watch, watchEffect} from 'vue'

export default defineComponent({

  setup() {
   
    const obj = {name: 'hseuh',age:20}
    const state = reactive(obj)
    const ageRef = toRef(obj,"age")
    const nameRef = toRef(state,"name")
    const handleCilck = () => {
      ageRef.value = 30
      nameRef.value = "jjj"
      console.log(obj)
      console.log(ageRef)
      console.log(nameRef)

    }

    return {
      ageRef,
      handleCilck,
      nameRef
    }
  }
})
</script>