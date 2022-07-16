<template>
  <div>
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
      <div class="row ">
        <div class="col perfCarBlok">
          <div class="perfCar">
            <h2darkblue>Your perfect car in 5 easy steps</h2darkblue>
          </div>
        </div>

      </div>
    </div>
  </div>
  

</template>



<script>
  import btnreqcar from '@/components/primitives/BTN/btnWhiteReqCar.vue'
  import h2darkblue from '@/components/primitives/text/H2DarkBlue.vue'

  export default {
    name: 'HomeView',
    components: {
      btnreqcar,
      h2darkblue
    },
  }
</script>

<style lang="scss" scoped>
  @import '../assets/varmix.scss';

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
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-auto-rows: minmax(100px, auto);
  &__leftPart {
    
    height: 30vw;
    position: relative;
    @media (max-width:992px) {
        height: 50vw;
    }
    @media (max-width:630px) {
        height: 60vw;
    }
    img {
      position: absolute;
      bottom: 0;
      width: calc(100vw * #{$adaptiveHondaWidthHomePage});
      height: calc(100vw * #{$adaptiveHondaHeightHomePage});


    }
  }

  &__rightPart {

    height: 30vw;
    position: relative;
    @media (max-width:992px) {
        height: 50vw;
    }
    @media (max-width:630px) {
        height: 60vw;
    }
    img {
      position: absolute;
      top: 0;
      right: 0;
      width: calc(100vw * #{$adaptiveLexusWidthHomePage});
      height: calc(100vw * #{$adaptiveLexusHeightHomePage});
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
      height: auto;
      width: 45vw;
      position:absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%,-50%);
      background-color: white;
      z-index: 8;
      display: flex;
      flex-direction: column;
      @media (max-width:992px) {
        width: 80vw;
        top: 15%;
      }
		}

    &__headingBox {
      
      height: 12vw;
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
      @media (max-width:545px) {
         line-height: 1.6rem;
      }

		}

    
}



		




  
</style>