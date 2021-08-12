<template>
  <li :key="i">{{item}} <button @click="del(i)">x</button></li>
  <p>{{listData}}</p>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'TodoItem',
  props: {
    item: {
      type: String ,
      require: true,
      default() {
        return []
      }
      
    },
    i: {
      type: Number,
      default: 0

    }
  },
  setup(props,{emit}) {
    const del = (i: number) => {
      emit("del",i)
    }
    const listData = inject("listData")

    return {
      del,
      listData
    }
  },
})
</script>
