import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 1 //variable por defecto 1
  },
  getters: {   // valor computado, variable time2, necesita el state, y devuelve el conter * 2
    times2(state) {
      return state.counter * 2
    }
  },
  mutations: {  // hacemos un metodo llamado setCounter, necesita los dos valores a modificar
    setCounter(state, value){
      state.counter = value
    }
  }
  
})
