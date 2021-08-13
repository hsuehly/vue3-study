<template>
  <div class="app">
    <h3>我是app组件</h3>
    <Child />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Child from './Child.vue'
export default defineComponent({
  components: {Child},
  setup() {
    
  },
})
</script>

<style scoped>
.app {
  background-color: rgb(31, 80, 187);
  padding: 18px;
}
</style>
