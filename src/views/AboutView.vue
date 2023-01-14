<template>
  
  <div class="d-flex flex-column min-vh-100">
    <div class="container">
      <div class="row">
          <div class="col header" @clearmagtopform="setMagtopformInventoryComponent">
            <Headerone  class="center" :liclickedtextoff="navliclicktextoffstate"  />
            <burgerbtn v-bind:iscross="iscross" v-on:click="iscross=!iscross"  />
            <transition name="menu">
              <burgerlist v-if="iscross" class="burgerlist" :listate="navliclicktextoffstate" v-on:click="iscross=!iscross" v-on:navliclicktextoffevent="changenavliclicktextoffstate"  />
            </transition>
          </div>
      </div>
    </div>
        
    <main class="flex-fill">
    
      <AboutVac />
      <Divided 
       img="about_kia"
       typetext="false"
       imgposition="right"
       compName="BtnTextMission"
      />

    </main>

    <Footer class="center" />

  </div>
     
</template>



<script>

  import Headerone from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import burgerbtn from '@/components/primitives/BurgerBtn.vue'
  import burgerlist from '@/components/primitives/BurgerCollapceList.vue'
  import AboutVac from '@/components/ABOUT/AboutVac.vue'
  import Divided from '@/components/ABOUT/Divided.vue'

  export default {
            components: {
              Headerone,
              Footer,
              burgerbtn,
              burgerlist,
              AboutVac,
              Divided,
            },
            data() {
              return {
                iscross: false,
                navliclicktextoffstate:false,
                

                

              }
           },
          methods: {

            changenavliclicktextoffstate (newVal) {
              this.navliclicktextoffstate = newVal
            },

          },

          watch: {
            iscross (newVal) {
              this.navliclicktextoffstate = newVal 
            }
          },

  
  
  } 


  

</script>

<style lang="scss" scoped>
  @import '../assets/varmix.scss';

  .main {
    height: 100px;
    width: 100px;
    border-width:2px;
    border-style: solid;
    border-color: #000;
  }
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

