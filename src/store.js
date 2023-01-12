
import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        carpageid: null,
        storecars:[],
        screenwidth:0,
        swipercarpageex:true,
        swipheight:0,
        menubtnclickedid: 5,
      }
    },
    
    mutations: {

      setCarPageSwiperWidth (state,payload) {
        state.swipheight = payload
      },
      setParr (state,payload) {
        state.menubtnclickedid = payload
      }

    },

    getters: {
      menubtnclickedid (state) {
        return state.menubtnclickedid
      },
      appliedCar (state) {
        return state.carpageid
      }
    }
    
})

export default store


