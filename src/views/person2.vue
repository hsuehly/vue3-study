<template>
<h1>人员列表</h1>
<p>第一个人的名字: {{store.getters.firstPersonName}}</p>
<h3 style="color: red;">Count组件的求和为: {{store.state.count.sum}}</h3>
<input type="text" placeholder="请输入名字" v-model="nameRef">
<button @click="add">添加</button>
<button @click="addXue">添加姓薛的人</button><br>
<button @click="addJt">添加鸡汤</button>
<ul>
  <li v-for="item in store.state.person" :key="item.id">{{item.name}}</li>

</ul>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue'
// import { useStore } from '../store'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const nameRef = ref("")

    console.log(store,"++++")
    console.log((store.state as any).person.personList)
    console.log(store.state)

    const add = () => {
      const personObj = {
        id: new Date().getTime().toString(),
        name: nameRef.value
      }
  
      console.log(personObj)
      store.commit("ADD_PERSON",personObj)
      nameRef.value = ""
    }
    const addXue = () => {
      const personObj = {
        id: new Date().getTime().toString(),
        name: nameRef.value
      }
        store.dispatch("addPersinXue",personObj)
        nameRef.value = ""

      }
      const addJt = () => {
        store.dispatch("addPersonServer")
   
    }
     

    return { 
      store,
      nameRef,
      add,
      addXue,
      addJt
    }

  }

})

</script>