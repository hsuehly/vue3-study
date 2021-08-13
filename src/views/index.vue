<template>
  <p>我是父组件</p>
  <button @click="showRef = !showRef">卸载子组件</button>
  <hr />
  <Demo  v-if="showRef"/>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Demo from './test.vue'
export default defineComponent({
  components: {Demo},
  setup() {
    const showRef = ref(true)


    
    return {
      showRef
    }
  },
})
</script>
