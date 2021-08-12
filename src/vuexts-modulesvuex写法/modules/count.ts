import { ActionContext, ActionTree, GetterTree, MutationTree } from "vuex"



interface Count {
  sum : number,
  school: string,
  subject: string,
}
 const state = ()=>({
    sum: 0,
    school: "家里",
    subject: "计算机",
  })

  enum CountMutation {
    JIA = "JIA",
    JIAN = "JIAN",
  }
  type CountMutations<T = Count> = {
    [CountMutation.JIA](state: T,value: number): void
  }
 const  mutations: MutationTree<Count> & CountMutations = {
    JIA(state,value) {
      console.log("mutations JIA",value,)
      state.sum += value
      console.log(state.sum)
    },
    JIAN(state,value) {
      state.sum -= value
    },
  }
  enum CountAction {
    jiaOdd = "jiaOdd",
    jiaWait = "jiaWait",
  }
  interface CountActions {
    [CountAction.jiaOdd](context: ActionContext<Count,Count>,value: number): void
    [CountAction.jiaWait](context: ActionContext<Count,Count>,value: number): void
  }

  const actions: ActionTree<Count,Count>  & CountActions= {
    [CountAction.jiaOdd](context, value) {
      console.log(context,"wwww")
      if(context.state .sum % 2) {

        context.commit("JIA",value)
      }
    },
    [CountAction.jiaWait](context, value) {
     setTimeout(() => {
      context.commit("JIA",value)
     },1000)
    },
  }

  const getters: GetterTree<Count,Count> = {
    bigSum(state) {
      return state.sum * 10
    }

  }

  export default {
    state,
    actions,
    mutations,
    getters
  }

