<template>

<div>
  <p>我是子组件</p>
  <p @click="$emit('saihai','hsueh')">点我向父亲通信</p>
  <p>下边是插槽</p>
  <slot name="data" :person="person"></slot>
</div>

</template>


<script lang="ts">

import { defineComponent, reactive } from 'vue'


export default defineComponent({

  setup(props,context) {

    console.log(context);
    const person = reactive({
      name: "hsueh",
      age: 20
    })
   
    
    return {
      context,
      person
    }
  }
})


</script>