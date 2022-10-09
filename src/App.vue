<template>

  
  <div>
            <router-view
            @emittoapp = "setdataforcarpage"
            :dt="dataforcarpage"
            @click="setPar"
            >
              

            </router-view>

            <contactmain
            
            >

            </contactmain>

            
            
  </div>

  
        
          
            
         
     

</template>

<script>


  import contactmain from './components/Modals/ModalContactUstMain.vue'




  export default {
    components: {
      contactmain,
    
    },
    data() {
      return {
        
        dataforcarpage:[],
        menubtnclickedid:Number,

        

      }
    },
    methods: {
     
      setdataforcarpage (val) {
        
        this.dataforcarpage = val
      },

      setPar() {
        this.menubtnclickedid = this.$store.getters.menubtnclickedid
      }
      
     
    },
    watch: {
      
    },

    computed: {
      
    },
    update () {
      this.setPar()
    },
    created () {
     this.setdataforcarpage ()
     this.setPar()
    },

  }
</script>


<style lang="scss">
  @import './assets/varmix.scss';

  
 .exp {
  font-size: 100px;
  position: absolute;
  top:0;
 }
  
</style>