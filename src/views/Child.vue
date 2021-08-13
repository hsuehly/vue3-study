<template>
  <div class="child">
    <h3>我是Child组件</h3>
    <Son />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Son from './Son.vue'
export default defineComponent({
  components: {Son},
  setup() {
    
  },
})
</script>

<style scoped>
.child {
  background-color: rgb(31, 128, 83);
  padding: 18px;
}
</style>
