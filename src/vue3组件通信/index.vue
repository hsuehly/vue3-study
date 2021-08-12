<template>
  <todo />
</template>

<script lang="ts">
  import {defineComponent} from 'vue'
  import Todo from './Todo/index.vue'
  export default defineComponent({

    components: {
      Todo,
    }
  })
</script>