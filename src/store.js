
import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        carpageid: 0,
        storecars:{},
        swiperexon:0,
      }
    },
    
})

export default store;