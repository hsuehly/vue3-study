<template>
  <div class="app">
    <h3>我是app组件</h3>
    <Suspense>
      <template v-slot:default>
            <Child />
      </template>
      <template v-slot:fallback>
        <h3>加载中请稍候...</h3>
      </template>
    </Suspense>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
// import Child from './Child.vue' 
const Child = defineAsyncComponent(()=>import('./Child.vue')) // 异步
export default defineComponent({
  components: {Child},

  mounted() {
    console.log((this as any).x, "ddd")
  },
  setup(props,context) {

    console.log(props);
    
    console.log(context)
    
  },
})
</script>

<style scoped>
.app {
  background-color: rgb(31, 80, 187);
  padding: 18px;
}
</style>
