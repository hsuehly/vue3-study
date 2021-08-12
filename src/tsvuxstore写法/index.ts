import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

  export interface State { 
    sum : number,
    school: string,
    subject: string,
    personList: Person[],

  }
  type Person = {
    id: string,
    name: string,
  }


  //定义key
  export const key: InjectionKey<Store<State>> = Symbol()






export const store = createStore<State>({
  state: {
    sum: 0,
    school: "家里",
    subject: "计算机",
    personList: [
      {id:'001',name: '张三'}
    ]
  },
  mutations:{
    JIA(state,value: number) {
      console.log("mutations JIA",value,)
      state.sum += value
      console.log(state.sum)
    },
    JIAN(state,value: number) {
      state.sum -= value
    },
    ADD_PERSON(state, value: Person) {
    // console.log(value,"===");
    console.log("mutation",state,value)
    state.personList.unshift(value)
    

    }
  },
  actions: {
    jia(context, value) {
      // console.log("action jia",context,value)
      context.commit("JIA",value)
    },
    jian(context, value) {
      // action 异步更新完成后调用motations 更新数据
      context.commit("JIAN",value)
    },
    jiaOdd(context, value: number) {
      if(context.state.sum % 2) {

        context.commit("JIA",value)
      }
    },
    jiaWait(context, value: number) {
     setTimeout(() => {
      context.commit("JIA",value)
     },1000)
    },
  },
  getters: {
    bigSum(state) {
      return state.sum * 10
    }
  },
  modules: {}
})

// export const store = createStore<Person>({
//   modules: {
//     // a: count,
//     b: person
//   }
// })













// export function useStore () {
//   return baseUseStore(key)
// }
// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}