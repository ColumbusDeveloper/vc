<template>
  <div class="container ">
    <div class="row">
      <div class="col footerContainer">

        <navbarwhite class="navbarwhite" v-on:click="$router.push('/')"/>

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











        <!-- <div class="created">

        </div>
        <div class="copyright">

        </div> -->
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

  .footerContainer {
    background-color: $colorMainBlue;
    height: 120px;
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











</style>

