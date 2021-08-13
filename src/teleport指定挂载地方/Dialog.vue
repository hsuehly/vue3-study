<template>
  <div>
    <button @click="showRef = true">点我弹窗</button>
  <teleport to="body">
      <div  v-if="showRef" class="mask">
        <div  class="dialog">
            <h3>我是弹窗</h3>
            <h4>一些内容</h4>
            <h4>一些内容</h4>
            <h4>一些内容</h4>
            <h4>一些内容</h4>
            <button @click="showRef = false">关闭弹窗</button>
        </div>
      </div>
  </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Dialog',
  setup() {
    const showRef = ref(false)
    return {
      showRef
    }
  },
})
</script>
<style >
.mask {
  position: absolute;
  top: 0;bottom: 0;left: 0;right: 0;
  background-color: rgba(112, 128, 144, 0.514);
}
.dialog {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 300px;
  height: 300px;
  background-color: seagreen;
}

</style>
