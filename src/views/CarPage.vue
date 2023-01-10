<template>

  
        <div class="d-flex flex-column min-vh-100" @before-update="setSWwidth">
          <contactmain
            class="contactmain1"
            :id="this.$store.state.carpageid"
            v-if="menubtnclickedid===2"
            @closeForm="dellMask"
            >

            </contactmain>

            <div 
            class="contactmain-mask"
            @click="dellMask"
            v-if="mascon"
            >

                  </div>
                  <div class="container">
                        <div class="row">
                                <div class="col header" @clearmagtopform="setMagtopformInventoryComponent">
                                      <Headerone  class="center" :liclickedtextoff="navliclicktextoffstate"  
                                      @clickApply="this.menubtnclickedid=2, this.mascon = true"
                                      />
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
                                        ref="swiperwidth"
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
                                            @click="setSWwidth"
                                            >
                                              <template v-slot:btn_1>
                                                <p class="swiper-part__text">Exterior</p>                                               
                                              </template>
                                              <template v-slot:btn_2>
                                                <p class="swiper-part__text">Interior</p>                                               
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

                    <div class="container">
                      <div class="row">
                        <div class="col heading">
                          <div class="heading__text-part">
                            <h2>Calculate the installment plan for this car.</h2>
                          </div>
                          <div class="heading__empty-part"></div>
                        </div>
                      </div>
                    </div>

                    <div class="container">
                      <div class="row">
                        <inpblock class="inpblock">

                        </inpblock>
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
  import inpblock from '@/components/CatalogNEW/ProginputblockCatalog.vue'
  import contactmain from '@/components/Modals/ModalContactUstMain.vue'

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
        inpblock,
        contactmain,
      

      },
      data() {
        return {
          iscross: false,
          navliclicktextoffstate:false,

          from:[],
          
          carpagedataid:this.$store.state.carpageid,
          cars:this.$store.state.storecars,
          
          swiperexon:this.$store.state.swipercarpageex,
         
          storeheight:0,
          
          menubtnclickedid:Number,
          mascon:false,

        }
      },
      watch: {
          '$store.state.screenwidth': {
              handler() {
                  this.setSWwidth ();
              }            
          }
      },
       
    methods: {

      changeswiperexon () {
        this.swiperexon=this.$store.state.swipercarpageex
      },
    
      setSWwidth () {
           this.$store.state.screenwidth = this.$refs.swiperwidth.offsetWidth 
      },

      setCarPageSwiperWidth () {
        let a = this.$refs.swiperwidth.offsetWidth
        this.$store.commit('setCarPageSwiperWidth',a)
        this.storeheight=this.$store.state.swipheight
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
      },
      setdataforcarpage (val) {
        
        this.dataforcarpage = val
      },

      

      
    


      



      
    },
   
    
    mounted () {
      this.setCarPageSwiperWidth () 
    },

    update () {
      this.setPar()
    },

    created () {

      
      window.addEventListener("resize", this.setCarPageSwiperWidth)
      window.addEventListener("hashchange", this.setSWwidth, false)
      window.addEventListener("onresize", this.setCarPageSwiperWidth)
      window.addEventListener("onload", this.setSWwidth)

      this.setdataforcarpage ()
      this.setPar()

    },
    
    

    unmounted() {
      window.removeEventListener("resize", this.setCarPageSwiperWidth)
      window.removeEventListener("hashchange", this.setSWwidth, false)
      window.removeEventListener("onresize", this.setCarPageSwiperWidth)
      window.removeEventListener("onload", this.setSWwidth)
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

.inpblock{
  margin-bottom: 70px;           
}

.heading {
  padding-top: 80px;
  padding-bottom: 50px;
  &__text-part {
    width: 50%;
  }

  &__empty-part {
    width: 50%;
  }
}


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

  // &__top-part-item-left-info-box-text {
  // }

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

  // &__bottom-part-title {
  // }

  // &__bottom-part-content-box {
  // }

  &__bottom-part-content-box-content {
    @include      letterContentSecondarySmallGrayClear;
  }

  // &__bottom-part-btn-box {
  // }
}


 
  



  .swiper-part {
    
    width: 100%;
    display: flex;
    @media (max-width:992px) {
       flex-direction: column;
    }

      &__text {
        font-family: $fontFamily700;
        font-size: 1rem;
        font-weight: 700;
        margin: 0;
        padding: 0;
        
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

        @media (max-width:1200px) {
          top: 61%;
          left: 3%;
        }

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

