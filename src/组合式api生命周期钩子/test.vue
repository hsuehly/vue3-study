<template>
  <p>我是子组件</p>
  <p>数字: {{numRef}}</p>
  <button @click="numRef ++">+1</button>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue'

export default defineComponent({
  setup() {
    // 组合api 的生命周期钩子
    const numRef = ref(0)

    onBeforeMount(()=> {
      console.log("---onBeforeMount---");
      
    })
    onMounted(()=> {
      console.log("---onMounted---");

    })
    onBeforeUpdate(()=> {
      console.log("---onBeforeUpdate---");

    })
    onUpdated(()=> {
      console.log("---onUpdated---");

    }),
    onBeforeUnmount(()=> {
      console.log("---onBeforeUnmount---");

    })
    onUnmounted(()=> {
      console.log("---onUnmounted---");

    })
    

    return {
      numRef
    
    }
  },
  //#region 
//   beforeCreate() {
//     console.log("----beforeCreate----")
//   },
//   created() {
//     console.log("----created----")

//   },
//   beforeMount() {
//     console.log("----beforeMount----")

//   },
//   mounted() {
//     console.log("----mounted----")

//   },
//   beforeUpdate() {
//     console.log("----beforeUpdate----")

//   },
//   updated() {
//     console.log("----updated----")

//   },
//  beforeUnmount() {
//   console.log("----beforeUnmount----")

//  },
//  unmounted() {
//   console.log("----unmounted----")

//  }
//#endregion
})
</script>
