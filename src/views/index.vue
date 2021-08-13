<template>
<h1>home页面</h1>
<p>{{helloRef}}</p>
<router-link to="/cou">去计算页面</router-link>
<router-link to="/per">去展示页面</router-link>
<p>{{num}}</p>
<button @click="getname">修改num</button>
<Demo @saihai="saihai">
  <template #data >
    <p>我是内容</p>
  </template>
</Demo>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import Demo from './solt.vue'
export default defineComponent({
  components: {Demo},
  mounted() {
    console.log(this)
  },
  setup(props, context) { 
    const helloRef = ref("hello")
    const sayhai = () => {
      console.log("hello")
    }
    const saihai = (value: string) => {
      alert(value +"你好")
    }
    //普通写法
    const num2 = computed(() => helloRef.value + " sss")
    // 完全写法
    const num = computed({
      get() {
        return helloRef.value + "有人调用"
      },
      set(value: string) {
        console.log("+++++",value);
        

      }
    })

    const getname = () => {
      num.value = " hahaha"
    }

    return {
      helloRef,
      sayhai,
      saihai,
      num,
      getname
    }
  }
})
</script>
