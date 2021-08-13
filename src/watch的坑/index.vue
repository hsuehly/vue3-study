<template>
<p>{{ageRef}}</p>
<button @click="ageRef ++">+</button>

<hr>

<p>{{person.age}}</p>
<button @click="person.age ++">+</button>
<hr>
<p>薪资:{{person.job.k.xinzhi}}k</p>
<button @click="person.job.k.xinzhi ++">+</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch, watchEffect } from 'vue'
export default defineComponent({
  setup() { 
    const ageRef = ref(0)
    const person = reactive({
      name:"hsueh",
      age: 0,
      job: {
        k:{
          xinzhi: 20
        }
      }
    })
//     watch(person.job.k,(newval,oldval)=> {
//       console.log(newval,"新值")
//       console.log(oldval,"旧值");
//       // 监视reactive所定义的一个响应式数据 全部属性
// // 1.注意 此处无法正确的获取oldvalue
// //  2. 强制开启深度监听(deep: 配置无效)
//     },{deep: false})
//     watch(ageRef,()=> {

//       console.log("新值",ageRef.value)

//     },{deep: false})

//     watch(()=>person.job.k.xinzhi,(newval,oldval)=> {
//       console.log(newval,"新值")
//       console.log(oldval,"旧值");
//     })
//     watch([()=>person.job.k.xinzhi,()=>person.age],(newval,oldval)=> {
//       console.log(newval,"新值")
//       console.log(oldval,"旧值");
//     })
 watchEffect(()=>{},{flush:"pre",})
watch(()=> person.job,(val,oldval)=> {
  
  console.log(val,oldval)
},{deep:true})   // 此处监控的是reactive定义的对象中的某个属性, 所以deep配置有效.不开启不会深度监听
    return {
      ageRef,
      person
    }

  }


})
</script>
