<template>
<p>父组件</p>
<p>{{name}} == {{age}}</p>
<hr />
<Children 
v-model:name="name"
v-model:age="age"


/>
<!-- 
  上面是语法糖
:age="age"
@update:age="age = $event" -->
</template>



<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'
import Children from './children.vue'
export default defineComponent({

  components :{
    Children
  },

  setup() {
    const state = reactive({
      name: 'hsueh',
      age: "20"
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>