<template>

  
  <div>
            <router-view
            @emittoapp = "setdataforcarpage"
            :dt="dataforcarpage"
            >
              
            </router-view>

            
            
  </div>

  
        
          
            
         
     

</template>

<script>







  export default {
    components: {
      
    
    },
    data() {
      return {
        
        dataforcarpage:[]

        

      }
    },
    methods: {
     
      setdataforcarpage (val) {
        
        this.dataforcarpage = val
      }
     
    },
    watch: {
      
    },

    computed: {
      
    },
    created () {
     this.setdataforcarpage ()
    }
  }
</script>


<style lang="scss">
  @import './assets/varmix.scss';

  

  
</style>