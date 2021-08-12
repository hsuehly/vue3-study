<template>
<keep-alive>
<test-tem v-if="show" />

</keep-alive>
<button @click="handleShow">卸载/挂载组件</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import testTem from './Test.vue'
export default defineComponent({
  components:{
    testTem,

  },
  setup() {
    const show = ref(true)
    const handleShow = () => {
      show.value = !show.value
    }

    return {
      show,
      handleShow
    }

  },
})
</script>
