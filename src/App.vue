<template>

  
        <div class="d-flex flex-column min-vh-100">
          <div class="container">
            <div class="row">
                <div class="col header">
                  <Headerone v-bind:btninventory="inventorystatus" class="center" />
                  <burgerbtn v-bind:iscross="iscross" v-on:click="iscross=!iscross"  />
                  <transition name="menu">
                    <burgerlist v-if="iscross" class="burgerlist" v-on:click="iscross=!iscross"  />
                  </transition>
              </div>
            </div>
          </div>
              
          <main class="flex-fill">
          
            <router-view />
          </main>

          <Footer class="center" />

        </div>
     

</template>

<script>
  import Headerone from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import burgerbtn from '@/components/primitives/BurgerBtn.vue'
  import burgerlist from '@/components/primitives/BurgerCollapceList.vue'

  export default {
    components: {
      Headerone,
      Footer,
      burgerbtn,
      burgerlist,
    },
    data() {
      return {
        iscross: false,
        
        inventorystatus:false,

      }
    },
    methods: {
      
    },
    watch: {
      iscross (newVal) {
        this.inventorystatus = newVal
      }
    },

    computed: {
      
    }
  }
</script>


<style lang="scss">
  @import './assets/varmix.scss';

  .wrapper {
    max-width: 1440px;
    
    
  }
  .header {
    display: flex;
    justify-content: space-between;
  }
  .burgerlist {
    position: absolute;
  }

  .menu-enter-active,
  .menu-leave-active {
    transition: all .5s;
  }
  .menu-enter,
  .menu-leave-to {
    opacity: 0;
   
  }

  
</style>