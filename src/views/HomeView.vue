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

            </div>

            <div class="howDoesPlusImg__rightPart">

            </div>

            <div class="howDoesPlusImg__central">

            </div>

          </div>
      </div>
    </div>
  </div>
  

</template>



<script>
  import btnreqcar from '@/components/primitives/BTN/btnWhiteReqCar.vue'


  export default {
    name: 'HomeView',
    components: {
      btnreqcar,
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
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: 300px 300px;
  grid-template-areas:

    "a a c c"
    "b b c c";

		&__text {
      
      @include letterH1textWhite;
      grid-area: a;
      align-self: flex-end;
      padding-bottom: 30px;
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
      display: grid;
      grid-template-columns: repeat(4,1fr);
      grid-template-rows: 180px 300px 180px;
      grid-template-areas:

    "a a a a"
    "c c c c"
    "b b b b";

		&__text {
     
      grid-area: a;
      text-align: center;
      align-self: flex-end;
		}

		&__btn {
      
      grid-area: b;
      justify-self: center;
      align-self: flex-start;
      padding-top: 20px;
		}

		&__carousel {
      
      grid-area: c;
      
		}
  }
  @media (max-width:768px) {
     grid-template-rows: 100px 200px 130px;
     &__text {
      font-size: 2rem;
      line-height: 2.2rem;
      padding-bottom: 20px;
		}
  }
  @media (max-width:500px) {
     grid-template-rows: 75px 150px 130px;
     &__text {
      font-size: 1.7rem;
      line-height: 1.7rem;
      padding-bottom: 10px;
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
  border-width:2px;
  border-style: solid;
  border-color: #000;
  position: relative;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-auto-rows: minmax(100px, auto);
		&__leftPart {
      border-width:2px;
      border-style: solid;
      border-color: #000;
      height: 35vw;
		}

		&__rightPart {
      border-width:2px;
      border-style: solid;
      border-color: #000;
      height: 35vw;
		}



		&__central {
      border-width:2px;
      border-style: solid;
      border-color: #000;
      height: 30vw;
      width: 45vw;
      position:absolute;
      top: 10vw;
      left: 50%;
      transform: translate(-50%,-50%);
      background-color: white;
      z-index: 8;
		}
}

  
</style>