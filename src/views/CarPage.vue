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

            <div class="swiper-part__text spt">

              <div class="spt__top-part">

                <div class="spt__top-part-item">

                    <div class="spt__top-part-item-left">
                      <div class="spt__top-part-item-left-info-box">
                        <span class="spt__top-part-item-left-info-box-text">Price</span>
                        <span class="spt__top-part-item-left-info-box-value_blue">{{price}} $</span>
                      </div>
                      <div class="spt__top-part-item-left-info-box">
                        <span class="spt__top-part-item-left-info-box-text">Body</span>
                        <span class="spt__top-part-item-left-info-box-value">{{body}}</span>
                      </div>
                      <div class="spt__top-part-item-left-info-box">
                        <span class="spt__top-part-item-left-info-box-text">Transmission</span>
                        <span class="spt__top-part-item-left-info-box-value">{{transmission}} </span>
                      </div>
                      
                    </div>

                    <div class="spt__top-part-item-right">

                      <div class="spt__top-part-item-right-info-box">
                        <span class="spt__top-part-item-right-info-box-text">Year</span>
                        <span class="spt__top-part-item-right-info-box-value">{{year}}</span>
                      </div>
                      <div class="spt__top-part-item-right-info-box">
                        <span class="spt__top-part-item-right-info-box-text">Kilometers</span>
                        <span class="spt__top-part-item-right-info-box-value">{{kilometers}} </span>
                      </div>

                    </div>

                </div>

                <div class="spt__top-part-item">

                    <div class="spt__top-part-item-left">
                      <span class="spt__top-part-item-left-info-box-text">Detail</span>
                      <span class="spt__top-part-item-left-info-box-text-semibold">Rear wheel drive</span>
                      <span class="spt__top-part-item-left-info-box-text-semibold">6 cylinders</span>
                      <span class="spt__top-part-item-left-info-box-text-semibold">11 l. per 100 km.</span>
                      <span class="spt__top-part-item-left-info-box-text-semibold">Rear wheel drive</span>
                    </div>

                    <div class="spt__top-part-item-right">
                      <span class="spt__top-part-item-right-info-box-text-semibold">2500-4000 rpm</span>
                      <span class="spt__top-part-item-right-info-box-text-semibold">0-100 in 2.7 s.</span>
                      <span class="spt__top-part-item-right-info-box-text-semibold">Power steering</span>
                      <span class="spt__top-part-item-right-info-box-text-semibold">2500-4000 rpm</span>
                    </div>

                </div>

              </div>

              <div class="spt__bottom-part">
                <span class="spt__bottom-part-title spt__top-part-item-left-info-box-text">Detail</span>
                <div class="spt__bottom-part-content-box">
                  <p class="spt__bottom-part-content-box-content">
                    Porsche 911 - a sports car manufactured by the German company Porsche AG in the
                     back of a two-door coupe or a convertible based on it, produced
                      in different generations from 1964 to the present day.
                      The 911 index was not originally planned for the timeless designation 
                      of different generations of the same car, and was no more than one of 
                      many similar in the through three-digit internal factory numbering 
                      of all Porsche models assigned to a very specific 1964 model.
                  </p>
                </div>
                <div class="spt__bottom-part-btn-box">
                  <btnreqinfo>
                    Request more information
                  </btnreqinfo>
                </div>
              </div>
              
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
  import btnreqinfo from '@/components/primitives/BTN/btnBlueSlot.vue'
  
  

export default {
      name: 'Car-page',
      props:['dt'],
      components: {
        Headerone,
        Footer,
        burgerbtn,
        burgerlist,
        carpageswiper,
        btnreqinfo,
      

      },
      data() {
        return {
          iscross: false,
          navliclicktextoffstate:false,

          from:[],
          
          carpagedataid:this.$store.state.carpageid,
          cars:this.$store.state.storecars

          

        }
      },
    methods: {

      


    },
    watch: {
      
    },

    computed: {

      price () {
        let a 
        this.cars.forEach(el=>{
          let b = el.id
          let c = el.price
          if (b===this.carpagedataid) {
            a = c
          }
        })
        return a  
      },
      body () {
        let a
        this.cars.forEach(el=>{
          let b = el.id
          let c = el.bodytype
          if (b===this.carpagedataid) {
            a=c
          }
        })
        return a  
      },
      year () {
        let a 
        this.cars.forEach(el=>{
          let b = el.id
          let c = el.year
          if (b===this.carpagedataid) {
            a = c
          }
        })
        return a  
      },
      transmission () {
        let a
        this.cars.forEach(el=>{
          let b = el.id
          let c = el.transmission
          if (b===this.carpagedataid) {
            a = c
          }
        })
        return a  
      },
      kilometers () {
        let a 
        this.cars.forEach(el=>{
          let b = el.id
          let c = el.kilometers
          if (b===this.carpagedataid) {
            a = c
          }
        })
        return a  
      },

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

