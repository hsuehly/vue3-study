<template>
 <input type="text" v-model="dataRef">
 <p>{{dataRef}}</p>
</template>

<script lang="ts">
import { defineComponent, ref,customRef} from 'vue'

export default defineComponent({
  setup() {
  

      function myRef(value: string,delay: number) {
          let timer: number;
        return customRef<string>((track,trigger)=> ({
        
          get() {
            console.log("有人读取数据了",value);
            track()// 通知vue追踪value的变化
            return value
            

          },
          set(newval) {
            console.log("有人修改数据了",newval);
           clearTimeout(timer)
            timer = setTimeout(() => {
              value = newval
               trigger() // 通知vue去重新解析模板
            }, delay);
          }
        }))
      }
        const dataRef = myRef("",1500)

    return {
      dataRef
    }
  },
})
</script>
