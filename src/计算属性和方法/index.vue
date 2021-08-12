<template>
<p>价格: {{price}}</p>
<p>{{data}}</p>
<p>苹果的价格: {{dataPrice}}</p>
<p>苹果的价格: {{dataPrice}}</p>
<p>苹果的价格: {{dataPrice}}</p>
<p>苹果的价格: {{dataP(data[2].price)}}</p>
<p>苹果的价格: {{dataP(data[2].price)}}</p>
<p>苹果的价格: {{dataP(data[2].price)}}</p>
<hr>
<ul>
<li v-for=" item of data" :key="item.pdi">
  {{item.pdi}} | {{item.pname}} | 价格: {{item.price.toFixed(2)}} | {{item.count}}
  小计: {{(item.price * item.count).toFixed(2)}}
</li>

</ul>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, ref, onBeforeMount } from 'vue'
interface Data {
  pdi: number;
  pname: string;
  price: number;
  count: number;
}
export default defineComponent({
  setup() {
    console.log("sss")
    const data = reactive<Data[]>([
      {pdi: 1,pname: "华为", price: 4452, count: 5},
      {pdi: 2,pname: "小米", price: 2352, count: 3},
      {pdi: 3,pname: "苹果", price: 6452, count: 6}
    ])
    const jiage = ref(9)
    const price = computed(()=> jiage.value * 3 )
    const dataPrice = computed<number>(()=> {
      console.log("计算属性")
      return data[2].price + 2
    })
    const dataP = (price: number) => {
      console.log('方法')
      return price + 2
    }
    onBeforeMount(()=> {
      console.log("备挂载时")
    })




    return {
      price,
      data,
      dataPrice,
      dataP,

    }
  }


})
</script>