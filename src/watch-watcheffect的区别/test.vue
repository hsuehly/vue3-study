<template>


</template>


<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  beforeCreate() {
    console.log("beforeCreate")
  },
  created() {
    console.log("created")
  },
  data() {
    return {
      name: 'ssss'
    }
  },
  setup() {
    console.log("setup")
    // console.log(this.name)
  }
})
</script>