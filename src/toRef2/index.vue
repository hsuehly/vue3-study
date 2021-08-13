<template>
  <p>{{ageRef}}</p>
  <button @click="ageRef ++">+</button>
  
  <hr>
  <p>data: {{data}}</p>
  <p>y: {{y}}</p>
  <button @click="y ++">+</button>
  <p>{{person.age}}</p>
  <button @click="person.age ++">+</button>
  <hr>
  <p>薪资:{{person.job.k.xinzhi}}k</p>
  <p>{{x}}</p>
  <button @click="person.job.k.xinzhi ++">+</button>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive, ref, toRef, watch, watchEffect } from 'vue'
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
      const data = {
        name: 'hsueh',
        age: 23
      }
      const x = toRef(person.job.k,"xinzhi")
      const y = toRef(data,"age")
      console.log(x.value)
      console.log(y,"==")
      return {
        ageRef,
        person,
        x,
        y,
        data
      }
  
    }
  
  
  })
  </script>
  