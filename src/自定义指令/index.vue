<template>
<input type="text" v-focus> 编辑
<input type="text" v-fff> 编辑
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    // 自定指令
    
    
  },
  directives: {
    fff: {
      mounted(e) {
        e.focus()
      }
    }
  }
})
</script>
