<template>
  <div class="child">
    <h3>我是Child组件</h3>
    {{p}}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  async setup() {
    const sum = ref(0)
    
    

    // 只有 异步组件和suspense 配合才能返回promise 并且setup 也可以写async
  const data =  new Promise<number>((resolve,reject)=> {

      setTimeout(()=> {
        resolve(sum.value)
      },1000)
    })
    const p = await data
    console.log(p);
    
    return {
      p
    }
    
  },
})
</script>

<style scoped>
.child {
  background-color: rgb(31, 128, 83);
  padding: 18px;
}
</style>
