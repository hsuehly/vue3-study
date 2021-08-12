import { MutationTree } from "vuex"


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
  const state = ()=>(
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
  const actions = {

  }
  const getters = {

  }
export default  {
  state,
  actions,
  mutations,
  getters
}