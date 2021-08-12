<template>
<p>watch 和 watcheffect的区别</p>
<p>两者都可监听data 的属性变化</p>
<p>watch需要明确监听的那个属性</p>
<p>watcheffect 会根据其中的属性自动监听其变化, 第一次会自动执行(用于收集依赖)</p>
<p>--- {{ageRef}}</p>
<hr>
<p>{{name}}--- {{name}}</p>
<Test/>
</template>


<script lang="ts">
import {defineComponent, reactive, ref, toRefs, watch, watchEffect} from 'vue'
import Test from './test.vue'
export default defineComponent({
  components: {
    Test
  },
  setup() {
    const state = reactive({
      name: 'hsueh',
      age:20
    })
    const ageRef = ref(25) 

    watchEffect(()=> {
      // 初始化就会执行一次 用于收集要监听的数据
      console.log("state.name",state.name);
      

    })
    watchEffect(()=> {
      console.log('ref',ageRef.value)
      console.log("state.age",state.age)
    })

    setTimeout(()=> {
      ageRef.value = 30
    },1000)
    setTimeout(()=> {
      state.age = 90
},2000)
      

    // watch(ageRef,(newValue, oldValue) => {

    //   console.log("newValue",newValue)
    //   console.log("oldValue",oldValue)
      
    // },{
    //   immediate: true, // 初始化之前就监听, 可选
    //   deep: true // 是否深度监听

    // })
    // watch(
    // // 第一个需要监听对象中的那个值  
    // ()=>state.name,
    // // 回调函数
    // (newVal, oldVal)=> {
    //   console.log("新值",newVal,"旧值",oldVal);
      
    // })

    // setTimeout(()=> {
    //   ageRef.value = 90
    // },1000)
    // setTimeout(()=> {
    //   state.name = "kkk"
    // },2000)
    return {
      ...toRefs(state),
      ageRef
    }
  }
})
</script>