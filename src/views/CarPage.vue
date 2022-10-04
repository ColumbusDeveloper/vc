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
                                        <h2 class="banner__h2">{{model}}</h2>
                                        <span class="banner__title">Watching now 8 people</span>
                                      </div>
                                </div>
                                <div class="row">
                                      <div class="col swiper-part"
                                      @click="changeswiperex"
                                      >

                                        <div class="swiper-part__swiper"
                                        @click="changeswiperin"
                                        >

                                          <carpageswiper
                                          v-if="swiperexon"
                                          ref="swiperex"
                                          >

                                          </carpageswiper>

                                          <carpageswiperin
                                          v-if="swiperexon===false"
                                          ref="swiperin"
                                          >

                                          </carpageswiperin>

                                          <div class="swiper-part__swiper-btn-box"
                                          
                                          @click="changeswiperexon"
                                          >
                                            <btnswiperexin
                                            
                                            >
                                              <template v-slot:btn_1>
                                                  Exterior
                                              </template>
                                              <template v-slot:btn_2>
                                                  Interior
                                              </template>
                                            </btnswiperexin>
                                          </div>

                                        </div>

                                        <div class="swiper-part__btnblueapply">
                                          <btnblueapply>

                                          </btnblueapply>
                                        </div>

                                        <div class="swiper-part__text spt">

                                                          <div class="spt__top-part">

                                                                    <div class="spt__top-part-item">

                                                                              <div class="spt__top-part-item-title-box">
                                                                                            <div class="spt__top-part-item-left-info-box">
                                                                                              <span class="spt__top-part-item-left-info-box-text">Price</span>
                                                                                              <span class="spt__top-part-item-left-info-box-value_blue">{{price}} $</span>
                                                                                            </div>
                                                                              </div>

                                                                              <div class="spt__top-part-item-content-box">

                                                                                          <div class="spt__top-part-item-left">

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

                                                                        

                                                                    </div>

                                                                    <hr class="spt__top-part-hr">

                                                                    <div class="spt__top-part-item itm-top-bott">

                                                                            <div class="spt__top-part-item-title-box bot">
                                                                              <span class="spt__top-part-item-left-info-box-text">Detail</span>
                                                                            </div>

                                                                            <div class="spt__top-part-item-content-box">                                                                           

                                                                              <div class="spt__top-part-item-left bot">                      
                                                                                <span class="spt__top-part-item-left-info-box-text-semibold bot">Rear wheel drive</span>
                                                                                <span class="spt__top-part-item-left-info-box-text-semibold bot">6 cylinders</span>
                                                                                <span class="spt__top-part-item-left-info-box-text-semibold bot">11 l. per 100 km.</span>
                                                                                <span class="spt__top-part-item-left-info-box-text-semibold bot">Rear wheel drive</span>
                                                                              </div>

                                                                              <div class="spt__top-part-item-right ">
                                                                                <span class="spt__top-part-item-right-info-box-text-semibold bot">2500-4000 rpm</span>
                                                                                <span class="spt__top-part-item-right-info-box-text-semibold bot">0-100 in 2.7 s.</span>
                                                                                <span class="spt__top-part-item-right-info-box-text-semibold bot">Power steering</span>
                                                                                <span class="spt__top-part-item-right-info-box-text-semibold bot">2500-4000 rpm</span>
                                                                              </div>

                                                                            </div> 

                                                                    </div>
                                                                    <hr>

                                                                    

                                                          </div>

                                                        

                                                          <div class="spt__bottom-part">

                                                            <span class="spt__bottom-part-title spt__top-part-item-left-info-box-text">Description</span>

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
  import carpageswiperin from '@/components/CatalogNEW/CarPageSwiperIn.vue'
  import btnreqinfo from '@/components/primitives/BTN/btnBlueSlot.vue'
  import btnswiperexin from '@/components/primitives/BTN/btnSwiperClickableDoubleBtn .vue'
  import btnblueapply from '@/components/primitives/BTN/btnBlueInventory.vue'
  
  

export default {
      name: 'Car-page',
      props:['dt'],
      components: {
        Headerone,
        Footer,
        burgerbtn,
        burgerlist,
        carpageswiper,
        carpageswiperin,
        btnreqinfo,
        btnswiperexin,
        btnblueapply,
        
      

      },
      data() {
        return {
          iscross: false,
          navliclicktextoffstate:false,

          from:[],
          
          carpagedataid:this.$store.state.carpageid,
          cars:this.$store.state.storecars,
          
          swiperexon:true,
         
       
          

        }
      },
    methods: {

      changeswiperexon () {
        this.swiperexon=this.$store.state.swipercarpageex
      },
      changeswiperin () {
        this.$refs.swiperin.resizeHandler()
      },
      changeswiperex () {
        this.$refs.swiperex.resizeHandler()
      }


      
    },
    watch: {
      

    },

    computed: {
      
      model () {
        let a 
        this.cars.forEach(el=>{
          let b = el.id
          let c = el.model
          if (b===this.carpagedataid) {
            a = c
          }
        })
        return a  
      },

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


.spt {

  &__top-part {
    
    
    display: flex;
    flex-direction: column;
  }

  &__top-part-item {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    height: 175px;
    // background-color: yellow;
    padding-left: 50px;
    @media (max-width:370px) {
       height: 220px;
    }
    @media (max-width:576px) {
      padding-left: 0;
    }
  }

  &__top-part-hr {
    padding-left: 50px;
  }

  .itm-top-bott {
    justify-content: flex-end;
    // background-color: red;
  }

  &__top-part-item-title-box {
    display: flex;
    flex-direction: column;
    
  }

  &__top-part-item-left-info-box {
    display: flex;
    flex-direction: column;
  }

  &__top-part-item-left-info-box-text {
  }

  &__top-part-item-left-info-box-value {
    @include    letterH4HeadingBurgerMenuTextNumbersDarkBlue  ;

    &_blue {
      color: $colorMainBlue;
      font-family: $fontFamily700;
      font-weight: 700;
      font-size: 1.56rem;
    }
  }

  &__top-part-item-content-box {
    display: flex;
    flex-direction: row;
   
  }

  &__top-part-item-left {
    width: 50%;
  
  }

  &__top-part-item-right {
    width: 50%;
   
  }

  &__top-part-item-right-info-box {
    display: flex;
    flex-direction: column;
  }

  &__top-part-item-right-info-box-text {
    color: $colorSmallLetterContentGray;
    font-family: $fontFamily400;
    font-weight: 500;
    font-size: 1rem;
  }

  &__top-part-item-right-info-box-value {
    @include    letterH4HeadingBurgerMenuTextNumbersDarkBlue  ;
  }

  &__top-part-item-left-info-box-text-semibold {
    display: block;
    @include    letterSemiboldDarkBlue  ;
  }

  &__top-part-item-right-info-box-text-semibold {
    display: block;
    @include    letterSemiboldDarkBlue  ;
  }

  &__bottom-part {
    padding-left: 50px;
    @media (max-width:576px) {
      padding-left: 0;
    }
  }

  .bot:not(:last-child) {
    margin-bottom: 7px;
  }

  &__bottom-part-title {
  }

  &__bottom-part-content-box {
  }

  &__bottom-part-content-box-content {
    @include      letterContentSecondarySmallGrayClear;
  }

  &__bottom-part-btn-box {
  }
}


 
  



  .swiper-part {
    
    width: 100%;
    display: flex;
    @media (max-width:992px) {
       flex-direction: column;
    }
    

      &__swiper {
        width: 50%;
        height: fit-content;
        position: relative;
        @media (max-width:992px) {
          width: 100%;
        }
     
      }

      &__swiper-btn-box {
        display: flex;
        position: absolute;
        top: 270px;
        left: 35px;

        z-index: 1;
        display: inline-block;

        @media (max-width:992px) {
          top: 61%;
          left: 3%;
        }
      }

      &__btnblueapply {
        display: none;
        @media (max-width:576px) {
           display: block;
        }
      }

      &__swiper-btn-box-btn {
        margin-right: 10px;
      }

      &__text {
        width: 50%;
        @media (max-width:992px) {
          width: 100%;
        }
     
      }
  }

  .banner {
 
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 60px;
    margin-bottom: 60px;
    @media (max-width:768px) {
      margin-top: 0px;
      margin-bottom: 0px;
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

