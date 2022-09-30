<template>

  
  <div>
            <router-view
            @fromcatalog="getappdata"
            
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
        
       appdata:Number,

        

      }
    },
    methods: {
     
      getappdata (val) {
        this.appdata = val
      }
    },
    watch: {
      
    },

    computed: {
      
    },
    created () {
      this.getappdata ()
    }
   
  }
</script>


<style lang="scss">
  @import './assets/varmix.scss';

  

  
</style>