<template>
  <div >
    
     
        <div class="container-fluid page">
          <div class="row">
            <div class="col">
              <div class="container">
                <div class="row">
                  <div class="col back">

                      <div class="col-6 back__partLeft"  >
                        <div class="textBlock">
                          <div class="textBlock__text">
                            <h1 >The easiest way to buy a car in Canada</h1>
                          </div>
                          <div class="textBlock__btn">
                            <btnreqcar/>
                          </div>
                          
                          
                          
                        </div>

                      </div>


                      <div class="col-6 back__partRight" >

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
    height: 600px;
    border-width:2px;
    border-style: solid;
    border-color: #000;
    background:  url(../../src/assets/images/bg_img.png) center center no-repeat, 
                 #7481FF url(../../src/assets/images/Road_bg_home.png) 35vw 12vh no-repeat;
  
  }




.back {
  display: flex;
		&__partLeft {
      height: 600px;
      border-width:2px;
      border-style: solid;
      border-color: #000;
		}

		&__partRight {
      height: 600px;
      border-width:2px;
      border-style: solid;
      border-color: #000;
		}
}
.textBlock {
  display: flex;
  flex-direction: column;
		&__text {
      @include letterH1textWhite;
		}
}





  

</style>
