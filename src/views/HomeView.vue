<template>
  <div>
    <div class="container-fluid page">
      <div class="row">
        <div class="col">
          <div class="container">
            <div class="row">
              <div class="col back">
                <div class="back__text"></div>
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
  </div>
  





</template>



<script>
  import btnreqcar from '@/components/primitives/btnWhiteReqCar.vue'


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
    border-width: 2px;
    border-style: solid;
    border-color: #000;
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
      border-width:2px;
      border-style: solid;
      border-color: #000;
      grid-area: a;
      
		}

		&__btn {
      border-width:2px;
      border-style: solid;
      border-color: #000;
      grid-area: b;
      justify-self: flex-start;
      align-self: center;
		}

		&__carousel {
      border-width:2px;
      border-style: solid;
      border-color: #000;
      grid-area: c;
      padding-left: 50px;
      padding-right: 50px;
      align-self: center; 
		}

    @media (max-width:992px) {
      display: grid;
      grid-template-columns: repeat(4,1fr);
      grid-template-rows: 150px 300px 150px;
      grid-template-areas:

    "a a a a"
    "c c c c"
    "b b b b";

		&__text {
      border-width:2px;
      border-style: solid;
      border-color: #000;
      grid-area: a;
      
		}

		&__btn {
      border-width:2px;
      border-style: solid;
      border-color: #000;
      grid-area: b;
      justify-self: center;
      align-self: flex-start;
      padding-top: 20px;
		}

		&__carousel {
      border-width:2px;
      border-style: solid;
      border-color: #000;
      grid-area: c;
      
		}
  }
  @media (max-width:768px) {
     grid-template-rows: 100px 200px 100px;
  }
  @media (max-width:500px) {
     grid-template-rows: 75px 150px 75px;
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

  
</style>