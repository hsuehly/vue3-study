<template>
<h1>当前求和为: {{store.state.count.sum}}</h1>
<h1>当前求和放大10倍后为: {{store.getters.bigSum}}</h1>
<h3>我在{{store.state.count.school}} 学习{{store.state.count.subject}}</h3>
<h3 style="color: red;">Person组件的总人数为: {{store.state.person.length}}</h3>
<select v-model.number="nRef">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select>
<button @click="increment">+</button>
<button @click="decrement">-</button>
<button @click="incrementOdd">当前求和为奇数再加</button>
<button @click="incrementWait">等一等再加</button>
<br>
<br>
<hr>
<Person />
</template>


<script lang="ts">
import { defineComponent, ref, toRefs } from 'vue'
import { useStore } from 'vuex'
import Person from './person2.vue'

export default defineComponent({
  components: {
    Person
  },
    setup() {
      const store = useStore()

      const nRef = ref(1)
      console.log(store.state.count.sum,"3333")

      const increment = () => {
      store.commit("JIA",nRef.value)
      
    }
    const decrement = () => {
     store.commit("JIAN",nRef.value)
    }
    const incrementOdd = () => {
      
        store.dispatch("jiaOdd",nRef.value)

      
    }
    const incrementWait = () => {
        store.dispatch("jiaWait",nRef.value)
    }

      return {
        store,
        // ...toRefs(store.state)
        nRef,
        increment,
        decrement,
        incrementWait,
        incrementOdd

      }
    } 
})
</script>