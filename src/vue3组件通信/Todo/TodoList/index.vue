<template>
  <ul>
    <todo-item v-for="item,i of data" :key="i" :item="item" :i="i" @click="handleDel(i)" >
      </todo-item>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType} from 'vue'
import todoItem from './TodoItem/index.vue'
type Del = (i: number)=>void
export default defineComponent({
  name: 'TodoList',
  props: {
    data: {
      type: Array as PropType<string[]>,
      require: true,
      default() {
        return []
      }
      
    },
    // del: {
    //   type: Function as PropType<Del>,
    //   require: true,
    //   default() {
    //     return ()=>{}
    //   }

    // }
  },
  components: {
    todoItem
  },
  setup(porps,{emit}) {

    const handleDel = (i: number) => {
      emit("del",i)
    }

   
    return {
      handleDel
    }
  },
})
</script>