<template>
  <div ref="root">hahha</div>
  <p>当前数字: {{num}}</p>
  <button @click="handleClick">+1</button>
  </template>
  
  
  <script lang="ts">
  import { 
    defineComponent, onBeforeMount, onMounted, 
    onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, 
    onActivated, onDeactivated, onErrorCaptured, ref 
  } from 'vue'
  
  export default defineComponent({
    setup() {
      console.log("stup 钩子函数")
      console.log(this);
  
      const root = ref<HTMLDivElement>()
      const num = ref<number>(0)
      const handleClick = () => {
        num.value ++
      }
      
      onBeforeMount(()=> {
        console.log("onBeforeMount 挂载开始前调用 钩子")
      })
      onMounted(()=> {
        console.log("onMounted 挂载后调用 钩子")
      console.log(root.value,"===")
      console.log(this,"++++")
  
      })
      onBeforeUpdate(()=> {
        console.log("onbeforeUpdata 当响应数据改变，且重新渲染前调用 钩子");
        
      })
      onUpdated(()=>{
        console.log("onUpdate 重新渲染后调用 钩子")
      })
      onBeforeUnmount(()=> {
        console.log("onBeforeUnmount  Vue 实列销毁前调用 钩子");
        
      })
      onUnmounted(()=>{
        console.log("onUnmounted 实列销毁后调用 钩子")
      }) 
      onActivated(()=> {
        console.log("onActivated 当 keep-alive组件北激活后调用 钩子");
        
      })
      onDeactivated(()=> {
        console.log("onDeactivated 当keep-alive 组件取消激活时调用 钩子");
        
      })
      onErrorCaptured(()=> {
        console.log("onErrorCaptured 从字组件中捕获错误时调用 钩子");
        
      })
      
  
      return {
        root,
        num,
        handleClick
  
      }
    },
    mounted() {
      console.log(this.$el.innerHTML,'root')
    }
  
  })
  </script>