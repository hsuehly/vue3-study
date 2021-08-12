

import { reactive, onMounted, onUnmounted, toRefs, ref } from 'vue'


interface Mouse {
  x: number;
  y: number;

}

export const useMouse = () => {


  const state = reactive<Mouse>({
    x: 0,
    y:0
  })
  const xRef = ref(0)
  const yRef = ref(0)


  const mouseHandle = (e: MouseEvent)=> {

    xRef.value = e.screenX;
    yRef.value = e.screenY

  }
  onMounted(()=> {
    console.log("ss")
    document.body.addEventListener("mouseover", mouseHandle)
  })

  onUnmounted(()=> {
    console.log("卸载组件")
    document.body.removeEventListener("mouseover", mouseHandle)
  })
  const data = toRefs(state)
  Reflect

  return {
    ...data,
    xRef,
    yRef

  }
}