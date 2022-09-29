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

      <div class="container">
        <div class="row">
          <div class="col  banner">
            <h2 class="banner__h2">Porsche Panamera 4S</h2>
            <span class="banner__title">Watching now 8 people</span>
          </div>
        </div>
        <div class="row">
          <div class="col swiper-part">

            <div class="swiper-part__swiper">
              <carpageswiper>

              </carpageswiper>
            </div>

            <div class="swiper-part__text">
              <itemforpage
              @getitemforpage="from=$event"
              >

              </itemforpage>
            </div>

          </div>

        </div>
        <div class="row">
          <div class="col">
            
          </div>
        </div>

      </div>
      
      
    </main>

    <Footer class="center" />

  </div>


</template>

<script>
  import Headerone from '@/components/HeaderCarPage.vue'
  import Footer from '@/components/Footer.vue'
  import burgerbtn from '@/components/primitives/BurgerBtn.vue'
  import burgerlist from '@/components/primitives/BurgerCollapceList.vue'
  import carpageswiper from '@/components/CatalogNEW/CarPageSwiper.vue'
  import itemforpage from '@/components/CatalogNEW/CardForPage.vue'
  

export default {
      name: 'Car-page',
      components: {
        Headerone,
        Footer,
        burgerbtn,
        burgerlist,
        carpageswiper,
        itemforpage,

      },
      data() {
        return {
          iscross: false,
          navliclicktextoffstate:false,

          from:[],
          

          

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

    computed: {

    },
    
}

</script>


<style lang="scss">
@import '../assets/varmix.scss';


  .swiper-part {
    border-width:2px;
    border-style: solid;
    border-color: #000;
    width: 100%;
    display: flex;

      &__swiper {
        width: 50%;
        border-width:2px;
        border-style: solid;
        border-color: #000;
      }

      &__text {
        width: 50%;
        border-width:2px;
        border-style: solid;
        border-color: #000;
      }
  }

  .banner {
    border-width:2px;
    border-style: solid;
    border-color: #000;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 60px;
    margin-bottom: 60px;

      &__h2 {
      }

      &__title {
      }
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

