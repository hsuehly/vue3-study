import { ActionTree, GetterTree, MutationTree } from "vuex"


  type Person = {
    id: string,
    name: string,
  }
  enum Mutation {
    ADD_PERSON = "ADD_PERSON"
  }
  type Mutations<S = Person > = {
    [Mutation.ADD_PERSON](state: S[], value: S): void
  }
  const state: ()=>Person[]  = ()=>(
    [
      {id:'001',name: '张三'}
    ]
  )
  const mutations: MutationTree<Person[]> & Mutations = {
    [Mutation.ADD_PERSON](state, value) {
      console.log("mutation",state,value)
      state.unshift(value)
    },
  }
  const actions: ActionTree<Person,Person> = {
    addPersinXue(context, value: Person) {
      if(value.name.indexOf("薛") === 0) {
        context.commit("ADD_PERSON",value)
      }else {
        alert("添加的人必须姓薛")
      }

    },
    addPersonServer(context) {
      fetch(`https://api.uixsj.cn/hitokoto/get?type=social`)
      .then(res=> res.text())
      .then(res=> {
        console.log(res)
        context.commit("ADD_PERSON",{id: new Date().getTime().toString(), name:res})
      })
    }

  }
  const getters: GetterTree<Person[],Person>= {
    firstPersonName(state) {
      console.log(state,"getters")
      return state[0].name
    }

  }
export default  {
  state,
  actions,
  mutations,
  getters
}