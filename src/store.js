
import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        carpageid: 0,
        storecars:{},
        screenwidth:0,
        swipercarpageex:true,
        swipheight:0,
        menubtnclickedid:5,
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
      }
    }
    
})

export default store


