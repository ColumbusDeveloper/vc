<template>
  <div class="container-fluid footercontainer">
    <div class="container ">
    <div class="row">
      <div class="col footerContainer">
        <div>
          <navbarwhite  v-on:click="$router.push('/')"/>
        </div>
        <div class="termsPrivacy">
          <span class="termsPrivacy__firstItem">Terms</span>
          <span>Privacy</span>
        </div>
        <div class="socials">
          <div class="socials__1">
            <a href="#" target="blank"><i class="fa-brands fa-instagram icon"></i></a>
          </div >
          <div class="socials__2">
            <a href="#" target="blank"><i class="fa-brands fa-facebook-f icon"></i></a>
          </div >
          <div class="socials__3">
            <a href="#" target="blank"><i class="fa-brands fa-youtube icon"></i></a>
          </div>
        </div>

         <div class="created">
            <span class="created__text">Created by</span>
            <img src="../assets/images/Subtract.png" class="created__img" alt="id">
        </div>


        <div class="copyright">
          <span class="copyright__text">©Copyright, 2020. Vehicle Approval</span>
        </div>
      </div>

    </div>
         
    
  </div>
  </div>
  
</template>

<script>
import navbarwhite from './primitives/navBarWhite.vue'
export default {
  name: 'Footer-single',
  components: {
    navbarwhite,
  }
  
}

</script>


<style lang="scss" scoped>
  @import '../assets/varmix.scss';

  .footercontainer {
    background-color: $colorMainBlue;
  }

  .footerContainer {
    background-color: $colorMainBlue;
    height: $heightFooter;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  
  

  .termsPrivacy {
    display: flex;
    justify-content: center;
    font-weight: 600;
    font-family: $fontFamily600;
    font-size: 1rem;
    line-height: 1rem;
    color: #FFFFFF;
    @media (max-width:768px) {
      display: none;
    }
		&__firstItem {
      margin-right: 10px;
		}
}
.socials {
  
  
  color: $colorMainBlue;
  display: flex;

 
		&__1 {
      position: relative;
      background-color: #FFFFFF;
      margin-right: 10px;
      width: 30px;
      height: 30px;
      border-width:2px;
      border-style: solid;
      border-color: #7481FF;
		}

		&__2 {
      position: relative;
      background-color: #FFFFFF;
      margin-right: 10px;
      width: 30px;
      height: 30px;
      border-width:2px;
      border-style: solid;
      border-color: #7481FF;
		}

		&__3 {
      position: relative;
      background-color: #FFFFFF;
      width: 30px;
      height: 30px;
      border-width:2px;
      border-style: solid;
      border-color: #7481FF;
		}
}

.icon {
  position:absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

.created {

		&__text {
      margin-right: 10px;
      font-weight: 600;
      font-family: $fontFamily600;
      font-size: 1rem;
      line-height: 1rem;
      color: #FFFFFF;
		}

		
}

.copyright {
  @media (max-width:768px) {
      display: none;
    }

		&__text {
      font-weight: 400;
      font-family: $fontFamily400;
      font-size: 0.9rem;
      line-height: 1.3rem;
      color: #FFFFFF;
		}
}













</style>

