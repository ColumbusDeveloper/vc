
import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        carpageid: 0,
        storecars:{},
        swipercarpageex:true,
       
      }
    },
    
})

export default store;