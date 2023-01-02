<template>

  
  <div class="app">
            <router-view
            @emittoapp = "setdataforcarpage"
            :dt="dataforcarpage"
            @click="setPar"
            >
              

            </router-view>

            <contactmain
            class="contactmain1"
            v-if="menubtnclickedid===2"
            >

            </contactmain>

            <div 
            class="contactmain-mask"
            @click="dellMask"
            v-if="mascon"
            >

            </div>

           

            
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
        this.$store.state.menubtnclickedid = ''
        this.menubtnclickedid = 0
        this.mascon = false
        this.$store.state.carpageid = ''
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

  .app {
    position: relative;
  }
 .contactmain1 {
  border-width:2px;
  border-style: solid;
  border-color: #000;
  width: clamp(360px, 2vw, 570px);
  height: clamp(640px, 2vw, 815px);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 11;
  @media (max-width:576px) {
     width: 100%;
  }
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