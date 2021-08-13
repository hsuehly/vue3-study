<template>
  <div class="son">
    <h3>我是Son组件</h3>
    <Dialog />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Dialog from './Dialog.vue'
export default defineComponent({
  components: {Dialog},
  setup() {
    
  },
})
</script>

<style scoped>
.son {
  background-color: gray;
  padding: 18px;
}
</style>
