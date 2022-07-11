<template>

  
        <div class="d-flex flex-column min-vh-100">
          <div class="container">
            <div class="row">
                <div class="col header">
                  <Headerone class="center" />
                  <burgerbtn v-bind:iscross="iscross" v-on:click="iscross=!iscross"  />
                  <transition name="menu">
                    <burgerlist v-if="iscross" class="burgerlist" v-on:click="iscross=!iscross" />
                  </transition>
              </div>
            </div>
          </div>
              
          <main class="flex-fill">
            <div class="cover" v-bind:class="{coverNone:!iscross}"></div>
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
      }
    },
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
  .cover {
    background-color:rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin-top: 80px;
    margin-bottom: 120px;
  }
  .coverNone {
    display: none;
  }

  .menu-enter-active,
  .menu-leave-active {
    transition: all .5s;
  }
  .menu-enter,
  .menu-leave-to {
    opacity: 0;
    transform: translateY(70px);
  }

  
</style>