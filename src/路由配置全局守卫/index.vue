<template>
<h1>home页面</h1>
<p>{{helloRef}}</p>
<router-link to="/cou">去计算页面</router-link>
<router-link to="/per">去展示页面</router-link>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() { 
    const helloRef = ref("hello")
    return {
      helloRef
    }
  }
})
</script>
