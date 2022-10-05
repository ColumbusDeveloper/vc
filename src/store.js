
import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        carpageid: 0,
        storecars:{},
        screenwidth:0,
        swipercarpageex:true,
        
       
      }
    },
    
})

export default store;