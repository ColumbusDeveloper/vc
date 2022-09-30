<template>

  
  <div class="d-flex flex-column min-vh-100">
    
        
    

    

  </div>


</template>

<script>
  
  

export default {
      name: 'Car-pass',
      props:['dt'],
      components: {
        

      },
      data() {
        return {
          
          f:this.dt,
          data:4,
          

        }
    },
    methods: {

      emittoapp () {
        this.$emit('emittoapp',this.data)
      }


    },
    watch: {
     dt (val) {
        this.f = val
     }
    },

    computed: {
      
    },
    created () {
      this.emittoapp ()
    }
    
}

</script>


<style lang="scss">
@import '../assets/varmix.scss';


  


</style>

