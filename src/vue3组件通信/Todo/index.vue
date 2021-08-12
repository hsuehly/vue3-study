<template>
  <todo-add ref="todoAddRef" @add="add"/>
  <todo-list  :data="data" @del="del" />
</template>

<script lang="ts">
import {  defineComponent, onMounted, provide, reactive, ref } from 'vue'
import todoAdd from './TodoAdd/index.vue'
import todoList from './TodoList/index.vue'


export default defineComponent({
  name: 'Todo',
  components: {
    todoAdd,
    todoList
  },
  setup() {
    const data = reactive([
      '吃饭',
      '睡觉',
      '打豆豆'
    ])
    const del = (i: number) => {
      data.splice(i,1)
    }
    const todoAddRef = ref()
    onMounted(()=> {
     console.log(todoAddRef.value);
     
    })
    const add = (item: string) => {
      data.push(item)
    }
    // provide 提供
    provide("listData", data)
    return {
      data,
      del,
      todoAddRef,
      add
    }
  },
})
</script>