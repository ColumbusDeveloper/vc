<template>
  <div class="container-fluid">
          <div class="container mycontainer">
            <div class="row">
              <div class="col mycontainer">
                <div class="topLine">
                  <div class="topLineNavBar">
                    <button>NAVBAR</button>
                  </div>
                  <div class="topLineRightPart">
                    <button>One</button>
                    <button>Two</button>
                    <burgerbtn v-bind:iscross="iscross" v-on:click="iscross=!iscross, cover(), covermain " />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <transition name="menu">
              <menulist v-if="iscross"/>
             
          </transition>

          
          

  </div>
  
</template>

<script>
  import burgerbtn from './primitives/BurgerBtn.vue'
  import menulist from './primitives/BurgerCollapceList.vue'


  export default {
    props:['mainback'],
    name: 'Header-one',
    components: {
      burgerbtn,
      menulist,


    },
    data() {
      return {

        iscross: false,
        iscover: false,
        state:this.mainback,



      }
    },

    methods:{
      cover () {
        this.iscover=!this.iscover
      },

      covermain () {
        this.$emit('covermain',this.state)
      }
    }





  }
</script>


<style lang="scss" scoped>
  @import '../assets/varmix.scss';

  .topLineRightPart {
    display: flex;
  }

  .topLine {
    display: flex;
    justify-content: space-between;
  }

  .menu-enter-active, .menu-leave-active {
    transition: all .5s;
  }

  .menu-enter, .menu-leave-to {
    transform: translateX(50px);
    opacity: 0;
  }

  

  

  

  
</style>