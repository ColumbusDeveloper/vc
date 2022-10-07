
import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        carpageid: 0,
        storecars:{},
        screenwidth:0,
        swipercarpageex:true,
        swipheight:0,
       
      }
    },
    mutations: {

      setCarPageSwiperWidth (state,payload) {
        state.swipheight = payload
      }

    }
    
})

export default store;