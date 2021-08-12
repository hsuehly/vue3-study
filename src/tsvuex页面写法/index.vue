<template>
<h1>当前求和为: {{sum}}</h1>
<h1>当前求和放大10倍后为: {{store.getters.bigSum}}</h1>
<h3>我在{{school}} 学习{{subject}}</h3>
<h3 style="color: red;">Person组件的总人数为: {{store.state.personList.length}}</h3>
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
import {defineComponent, reactive, ref, toRef, toRefs, watch, watchEffect} from 'vue'
import {useStore} from '../store'
import  Person  from './person.vue'
export default defineComponent({
  components: {
    Person
  },
  setup() {
    const sumRef = ref(0)
    const nRef = ref(1)

    const store = useStore()
    console.log(store)
    // console.log({...store.state})
    // console.log({...toRefs(store.state)});
    

    // 方法
    const increment = () => {
      store.commit("JIA",nRef.value)
      
    }
    const decrement = () => {
     store.commit("JIAN",nRef.value)
    }
    const incrementOdd = () => {
      if(store.state.sum %2) {
        store.dispatch("jiaOdd",nRef.value)

      }
    }
    const incrementWait = () => {
      setTimeout(()=> {
        store.dispatch("jiaWait",nRef.value)

      },1000)
    }
    
    return {
      sumRef,
      nRef,
      increment,
      decrement,
      incrementOdd,
      incrementWait,
      store,
      ...toRefs(store.state),

    }
  }

})
</script>