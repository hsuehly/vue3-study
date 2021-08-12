<template>
<h1>人员列表</h1>
<h3 style="color: red;">Count组件的求和为: {{store.state.sum}}</h3>
<input type="text" placeholder="请输入名字" v-model="name">
<button @click="add">添加</button>
<ul>
  <li v-for="item of store.state.personList" :key="item.id">{{item.name}}</li>

</ul>

</template>


<script lang="ts">
import {defineComponent, ref} from 'vue'
import { useStore } from '../store'

export default defineComponent({
  name: "Person",
  setup() {
    const name = ref<string>("")
    const store = useStore()


    const add = () => {
      const personObj = {
        id: new Date().getTime().toString(),
        name: name.value
      }
      console.log(personObj)
      store.commit("ADD_PERSON",personObj)
      name.value = ""
    }
    return { 
      store,
      name,
      add
    }
  },

})

</script>