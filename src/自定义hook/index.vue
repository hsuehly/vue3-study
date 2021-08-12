<template>
 <p>{{nameRef}}</p>
 <p>{{name}}==={{age}}</p>
 <p>{{ageRef}}</p>
 <p>鼠标位置: {{xRef}} ==== {{yRef}}</p>
</template>

<script lang="ts">
  import {defineComponent, reactive, ref, toRef, toRefs} from 'vue'
  import { useMouse } from './mouseHook'

  export default defineComponent({
    setup() {
      const { xRef, yRef}  = useMouse()
      const nameRef = ref("hsueh")
      
      const data = reactive({
        name: nameRef,
        age: 20
      })
      console.log(data)
      const ageRef = toRef(data,"age")
      const dataRefs = toRefs(data)
      setTimeout(()=> {
        data.name = "jjjjj"
      },1000)
      return {
        nameRef,
        ...dataRefs,
        ageRef,
        xRef,
        yRef
      }
    }
  })
</script>