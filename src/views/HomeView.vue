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
                          <h1 class="textBlock__text">The easiest way to buy a car in Canada</h1>

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






export default {
  name: 'HomeView',
  components: {
    
  }
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




  

</style>
