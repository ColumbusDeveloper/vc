<template>
  
      <div class="menuListDisplayNone >

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
    
  
    .menuListDisplay {
      
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 815px;
      padding-top: 80px;
      padding-bottom: 50px;
      margin-top: -39px;
      box-shadow: inset 0px 0px 10px rgba(116, 129, 255, 0.3);
      position: absolute;
      right: 0;
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