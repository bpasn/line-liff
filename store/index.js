const store = state => ({
dialog:{
  isShow:false,
  title:'',
  message:''
},
register:{
  firstname:'',
  lastname:'',
  gender:1
}
}
)

export const getters = {
getRegister(){
  return store.register
}
}
export const mutations = {
SET_REGISTER(state , data){
  state.register = {
    ...state.register,
    ...data
  }
},
SET_DIALOG(state, data){
  state.dialog = {
    ...state.dialog,
    ...data
  }
}
}
export const actions = {
setRegister({commit} , data){
  commit('SET_REGISTER' , data)
},
setDialog({commit} , data){
  commit('SET_DIALOG',data)
}
}
