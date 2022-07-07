<template>
  
      <div class="menuListDisplayNone col" v-bind:class="{menuListDisplay:iscross}">

        <ul class="nav">
          <li class="nav-item" v-for="(menuitem,id) in burgerMenuList" :key="id" >
              <router-link class="nav-link" :to="menuitem.path">
                  {{menuitem.name}}
              </router-link>
          </li>
        </ul>

        <div class="socials">
          <div class="socials__SingleBlock">
            <a href="#" target="blanc"><i class="fa-brands fa-instagram"></i></a>
          </div>
          <div class="socials__SingleBlock">
            <a href="#" target="blanc"><i class="fa-brands fa-facebook-f"></i></a>
          </div>
          <div class="socials__SingleBlock">
            <a href="#" target="blanc"><i class="fa-brands fa-youtube"></i></a>
          </div>
        </div>

      </div>
    
</template>

<script>


  export default {
    name: 'BurgerCollapce-list',
    props:['iscross'],
   
    data () {
    return {
      
        burgerMenuList: [
            {name:'Home', path:'/'},
            {name:'Contact us', path:'/contact'},
            {name:'About VAC', path:'/about'},
            {name:'Loan Rates', path:'/loan'},
            {name:'Video', path:'/video'},
            {name:'Blog', path:'/blog'},
            {name:'Calculate', path:'/calculate'},
        ],
     
      
       
    }},

   
    
    
  }

    

  
</script>


<style lang="scss" scoped>
  @import '../../assets/varmix.scss';
    
    

    .menuListDisplayNone {
    
      visibility: hidden;
      // opacity: 0;
      padding-top: 80px;
      margin-top: -39px;
      position: absolute;
      right:-127px;
      background-color: #e0e0e0;
      overflow: hidden;
      @include letterH4HeadingBurgerMenuTextNumbersDarkBlue;
          .nav {
          flex-direction: column;
          .nav-item {
            width: 30vw;
          }
          .nav-link {
            color: #41456B; 
          }
        }
    }

    .menuListDisplay {
      
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 815px;
      visibility: visible;
      // opacity: 1;
      padding-top: 80px;
      padding-bottom: 50px;
      margin-top: -39px;
      box-shadow: inset 0px 0px 10px rgba(116, 129, 255, 0.3);
      position: absolute;
      right: -4px;
      transition: 0.1s linear;
      background-color: #e0e0e0;
      @include letterH4HeadingBurgerMenuTextNumbersDarkBlue;
      @media (max-width:576px) {
        width: 100vw;
        padding-left: 70px;
      }
          .nav {
          flex-direction: column;
          .nav-item {
            width: 30vw;
          }
          .nav-link {
            color: #41456B;  
            &:hover {
              color: rgba(116, 129, 255, 0.3);
            }
          }
        }
    }

    .socials {
      display: flex;
      padding-left: 16px;
      padding-right: 16px;
      padding-top: 8px;
      padding-bottom: 8px;
		&__SingleBlock {
      background-color:#7481FF ;
      width: 30px;
      height: 30px;
      margin-right: 5px;
      position: relative;
      a {
        color: #e0e0e0;
        position: absolute;
        position:absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-size: 1rem;
        padding: 4px;
        &:hover {
              color: $colorTitleBurgerBlueDark;
            }
      }
		}
}




   


    

   

  


  
  

</style>