<template>
<p>子组件</p>
<input type="text" :value="name" @input="inputnameHandle "/>
<input type="text" :value="age" @input="inputageHandle"/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String

    },
    age: {
      type: String
    }
  },

  setup (props,{emit}) {
    const inputnameHandle = (e: any) => {
      console.log(e.target.value)
      emit("update:name",e.target.value)
    }
    const inputageHandle = (e:any) => {
      console.log(e.target.value)
      emit("update:age",e.target.value)
    }

    return {
      inputnameHandle,
      inputageHandle
    }

  }
})
</script>