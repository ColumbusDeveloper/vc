<template>
  <div class="d-flex flex-column min-vh-100">
    <div class="container">
      <div class="row">
        <div class="col">

          <div class="col header" @clearmagtopform="setMagtopformInventoryComponent">
            <Headerone  class="center" :liclickedtextoff="navliclicktextoffstate"  />
            <burgerbtn v-bind:iscross="iscross" v-on:click="iscross=!iscross,getPar"  />
            <transition name="menu">
              <burgerlist v-if="iscross" class="burgerlist" :listate="navliclicktextoffstate" v-on:click="iscross=!iscross" v-on:navliclicktextoffevent="changenavliclicktextoffstate"  />
            </transition>
          </div>

        </div>
      </div>
    </div>

    <main class="flex-fill">
          <div class="container-fluid page">
              <div class="row">
                <div class="col">
                  <div class="container">
                    <div class="row">
                      <div class="col back">
                        <div class="back__text">The easiest way to buy a car in Canada</div>
                        <div class="back__btn"><btnreqcar/></div>
                        <div class="back__carousel">
                          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                  <div class="carousel-item active">
                                    <img src="../assets/images/Car_carusel.png" class="d-block w-100" alt="img">
                                  </div>
                                  <div class="carousel-item">
                                    <img src="../assets/images/Car_carusel.png" class="d-block w-100" alt="img">
                                  </div>
                                  <div class="carousel-item">
                                    <img src="../assets/images/Car_carusel.png" class="d-block w-100" alt="img">
                                  </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                  <span class="carousel-control-prev-icon" aria-hidden="true"><i class="fa-solid fa-angle-left"></i></span>
                                  <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                  <span class="carousel-control-next-icon" aria-hidden="true"><i class="fa-solid fa-angle-right"></i></span>
                                  <span class="visually-hidden">Next</span>
                                </button>
                          </div>
                        </div> 
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
              
              
            </div>
            <div class="container-fluid">
              <div class="row">
                                    <div class="howDoesPlusImg col">
                                      
                                      <div class="howDoesPlusImg__leftPart">
                                        <img src="../assets/images/Honda_Accord.png"  alt="honda">
                                      </div>

                                      <div class="howDoesPlusImg__rightPart">
                                        <img src="../assets/images/Lexus.png"  alt="lexus">
                                      </div>

                                      <div class="howDoesPlusImg__central">

                                        <div class="howDoesPlusImg__headingBox">
                                          <h2 class="howDoesPlusImg__headingBoxH2">
                                            How does it work?
                                          </h2>
                                          <h3 class="howDoesPlusImg__headingBoxH3">
                                            From your Phone to your Home
                                          </h3>
                                        </div>

                                        <div class="howDoesPlusImg__contentBox">
                                          <p class="howDoesPlusImg__contentBoxP">
                                            We make it easy for you to buy your dream car from
                                            your phone without ever having to step into a dealership! 
                                            We deliver your vehicle to your home for you to test drive 
                                            before you sign anything.
                                          </p>
                                        </div>

                                      </div>

                                    </div>
                                    
              </div>

              <div class="container">
                  <div class="row ">
                      <div class="col perfCarBlok">
                        <perfcar/>
                      </div>
                  </div>
              </div>

            <div class="container">
                  <div class="row ">
                      <div class="col advantages">
                        <advantages/>
                      </div>
                  </div>
            </div> 

            <div class="container">
                  <div class="row ">
                      <div class="col choose">
                        <choose/>
                      </div>
                  </div>
            </div> 

            <div class="container">
                  <div class="row ">
                      <div class="col happy">
                      <happy/>
                      </div>
                  </div>
            </div> 

            <div class="container">
                  <div class="row ">
                      <div class="col what">
                      <what/>
                      </div>
                  </div>
            </div> 

            <div class="container">
                  <div class="row ">
                      <div class="col letH">
                        <letblock />
                        
                        
                      </div>
                  </div>
            </div> 

            <div class="container">
                  <div class="row ">
                      <div class="col progressH">
                        <progblock />
                        
                        
                      </div>
                  </div>
            </div> 

            <div class="container">
                  <div class="row ">
                      <div class="col interestH">
                        <interest />
                        
                        
                      </div>
                  </div>
            </div> 
            

            


              



          </div>
    
    </main>
    <Footer class="center" />

    
  </div>
  

</template>



<script>
  import btnreqcar from '@/components/primitives/BTN/btnWhiteReqCar.vue'
  import perfcar from '@/components/HOME/PerfHome.vue'
  import advantages from '@/components/HOME/Advantages.vue'
  import choose from '@/components/HOME/ChooseHomeP.vue'
  import happy from '@/components/HOME/HappyHomeP.vue'
  import what from '@/components/HOME/WhatHomeP.vue'
  import progblock from '@/components/HOME/ProginputblockH.vue'
  import letblock from '@/components/HOME/LetP.vue'
  import interest from '@/components/HOME/InterestHome.vue'
  import Headerone from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import burgerbtn from '@/components/primitives/BurgerBtn.vue'
  import burgerlist from '@/components/primitives/BurgerCollapceList.vue'

  export default {
    name: 'HomeView',
    components: {
      btnreqcar,
      perfcar,
      advantages,
      choose,
      happy,
      what,
      progblock,
      letblock,
      interest,
      Headerone,
      Footer,
      burgerbtn,
      burgerlist,
      
    },
    data () {
      return {
        iscross: false,
        navliclicktextoffstate:false,

        menubtnclickedid:0,

         
        
      }
    },
    methods:{
        changenavliclicktextoffstate (newVal) {
          this.navliclicktextoffstate = newVal
        },
        getPar () {
          this.menubtnclickedid = this.$store.getters.menubtnclickedid
        },
    },
    watch: {
        iscross (newVal) {
          this.navliclicktextoffstate = newVal 
        }
    },
    created () {
      this.getPar ()
    },
    beforeUpdate () {
      this.getPar ()
    }

    
  }
</script>

<style lang="scss" scoped>
  @import '../assets/varmix.scss';

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

  .page {
    
    background: url(../../src/assets/images/bg_img.png) center center no-repeat,
      #7481FF url(../../src/assets/images/Road_bg_home.png) 35vw 12vh no-repeat;
      @media (max-width:992px) {
        background:#7481FF url(../../src/assets/images/bg_img.png) center center no-repeat
      }

  }


.back {
  
  display: grid;
  height: 600px;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: 150px 150px 150px 150px;
  grid-template-areas:

    "a a c c"
    "a a c c"
    "b b c c"
    "b b c c";

		&__text {
      
      @include letterH1textWhite;
      grid-area: a;
      align-self: flex-end;
     
		}

		&__btn {
      
      grid-area: b;
      justify-self: flex-start;
      align-self: flex-start;
      padding-top: 60px;
		}

		&__carousel {
      
      grid-area: c;
      padding-left: 50px;
      padding-right: 50px;
      align-self: center; 
      
		}

    @media (max-width:992px) {
      
      grid-template-areas:

    "a a a a"
    "c c c c"
    "c c c c"
    "b b b b";

		&__text {
     
     
      text-align: center;
      
		}

		&__btn {
      
      
      justify-self: center;
      padding: 0;
      
		}

	
  }
  @media (max-width:768px) {
   
     &__text {
      font-size: 1.7rem;
      line-height: 2.2rem;
      
		}
  }
  @media (max-width:500px) {
   
     &__text {
      font-size: 1.7rem;
      line-height: 1.7rem;
      
		}
  }
}

  .carousel-control-prev-icon {
    border: 4px solid white;
    border-radius: 50%;
    background-color: white;
    color: #7481FF;
  }

  .carousel-control-prev {
    position: absolute;
    left: -60px;
  }

  .carousel-control-next-icon {
    border: 4px solid white;
    border-radius: 50%;
    background-color: white;
    color: #7481FF;
  }

  .carousel-control-next {
    position: absolute;
    right: -60px;
  }


.howDoesPlusImg {
  padding: 0;
  
  position: relative;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-auto-rows: minmax(100px, auto);
  &__leftPart {
    
    height: 300px;
    position: relative;
    @media (max-width:992px) {
        height: 355px;
    }
    @media (max-width:630px) {
        height: 290px;
    }
    @media (max-width:500px) {
        height: 260px;
    }
    img {
      position: absolute;
      bottom: 0;
      width:Min(500px,calc(100vw * #{$adaptiveHondaWidthHomePage})) ;
      height:Min(209.71px,calc(100vw * #{$adaptiveHondaHeightHomePage})) ;


    }
  }

  &__rightPart {
    
    
    position: relative;
    @media (max-width:992px) {
        height: 200px;
    }
    @media (max-width:630px) {
        height: 60vw;
    }
    img {
      position: absolute;
      top: 0;
      right: 0;
      width:Min(500px,calc(100vw * #{$adaptiveLexusWidthHomePage})) ;
      height:Min(255.81px,calc(100vw * #{$adaptiveLexusHeightHomePage})) ;
      @media (max-width:992px) {
        top: 140px;
      }
    }
  }

		&__central {
      border-width:2px;
      border-style: solid;
      border-color: white;
      border-radius: 5px;
      max-height: 365px;
      max-width: 605px;
      position:absolute;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      background-color: white;
      z-index: 8;
      display: flex;
      flex-direction: column;
    
      @media (max-width:992px) {
        width: 80vw;
        top: -40px;
      }
		}

    &__headingBox {
      
      height:100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-top: 5px;
      

		}

		&__contentBox {
      
      height: 14vw;
        
		}

    &__headingBoxH2 {
      @include letterH2textTitleDarkBlue;
      text-align: center;
		}

		&__headingBoxH3 {
      @include letterH3textSubtitleBlue;
      text-align: center;
		}

		&__contentBoxP {
      @include letterContentSecondarySmallGray;
      text-align: center;
      max-width: 300px;
      @media (max-width:768px) {
         font-size: 1rem;
      }
      @media (max-width:752px) {
         width: 200px;
         
      }
      
      @media (max-width:472px) {
         width: 130px;
      }
      @media (width:545px) {
         line-height: 1.6rem;
         font-size: 0.8rem;
         width: 150px;
      }
          

		}

    &__contentBox {
      padding-top: 30px;
      display: flex;
      justify-content: center;
    }

    
}





		




  
</style>

