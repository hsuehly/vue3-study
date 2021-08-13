<template>
<h1>home页面</h1>
<p>{{helloRef}}</p>
<router-link to="/cou">去计算页面</router-link>
<router-link to="/per">去展示页面</router-link>
<Demo @saihai="saihai">
  <template #data >
    <p>我是内容</p>
  </template>
</Demo>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
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

    return {
      helloRef,
      sayhai,
      saihai,
    }
  }
})
</script>
