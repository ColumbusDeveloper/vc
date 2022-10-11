<template>

  
  <div>
            <router-view
            @emittoapp = "setdataforcarpage"
            :dt="dataforcarpage"
            @click="setPar"
            >
              

            </router-view>

            <contactmain
            class="contactmain"
            v-if="menubtnclickedid===2"
            >

            </contactmain>

            <div 
            class="contactmain-mask"
            @click="dellMask"
            v-if="mascon"
            >

            </div>

            <anima>
              
            </anima>
            
  </div>

  
        
          
            
         
     

</template>

<script>


  import contactmain from './components/Modals/ModalContactUstMain.vue'

  import anima from './components/CATALOG/Expert.vue'




  export default {
    components: {
      contactmain,
      anima,
    
    },
    data() {
      return {
        
        dataforcarpage:[],
        menubtnclickedid:Number,
        mascon:false,
        

      }
    },
    methods: {
     
      setdataforcarpage (val) {
        
        this.dataforcarpage = val
      },

      setPar() {
        this.menubtnclickedid = this.$store.getters.menubtnclickedid
        if (this.menubtnclickedid===2) {
          this.mascon = true
        }else {
          this.mascon = false
        }
      },

      dellMask () {
        this.$store.state.menubtnclickedid = 0
        this.menubtnclickedid = 0
        this.mascon = false
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

  
 .contactmain {
  
  position: absolute;
  top: 0;
  z-index: 10;
 }
 .contactmain-mask {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: black;
  opacity: 0.5;
  z-index: 9;
 }
  
</style>