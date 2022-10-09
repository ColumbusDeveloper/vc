<template>

  
      
         <div class="menuListDisplay">
                  <ul class="nav">
                    <li class="nav-item" v-for="item in burgerMenuList" :key="item.menubtnid"  v-on:click="navliclicktextoff=!navliclicktextoff,this.$emit('navliclicktextoffevent',this.navliclicktextoff)"  >
                      <router-link 
                      
                      :to="{path:item.path}" 
                      @click="setPar(item.menubtnid)"
                      
                      class="nav-link"  >

                        {{item.name}}
                      </router-link>
                    </li>
                    <li class="nav-item1" v-for="item in burgerMenuList1" :key="item.menubtnid" >
                      <router-link 
                      
                      :to="{path:item.path}" 
                      @click="setPar(item.menubtnid)"
                      
                      class="nav-link"  >
                        {{item.name}}
                      </router-link>
                    </li>
                    
                  </ul>
                  <div class="socials">
                    <div class="socials__SingleBlock">
                      <a href="#" target="blank"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                    <div class="socials__SingleBlock">
                      <a href="#" target="blank"><i class="fa-brands fa-facebook-f"></i></a>
                    </div>
                    <div class="socials__SingleBlock">
                      <a href="#" target="blank"><i class="fa-brands fa-youtube"></i></a>
                    </div>
                    
                  </div>
                  
         </div>
     


</template>

<script>
  
  export default {
    name: 'BurgerCollapce-list',
    

    components: {
     
    },

    props:['listate'],
    

    data() {
      return {

        navliclicktextoff:this.listate,

        menubtnclickedid:0,

        burgerMenuList: [
          {
            name: 'Home',
            path: '/',
            menubtnid:1
          },
          {
            name: 'Contact us',
            path: '#',
            menubtnid:2
          },
          {
            name: 'About VAC',
            path: '/about',
            menubtnid:3
          },
          {
            name: 'Loan Rates',
            path: '/loan',
            menubtnid:4
          },
          {
            name: 'Video',
            path: '/video',
            menubtnid:5
          },
          {
            name: 'Blog',
            path: '/blog',
            menubtnid:6
          },
          {
            name: 'Calculate',
            path: '/calculate',
            menubtnid:7
          },
          
        ],
        burgerMenuList1: [
          {
            name: 'Home',
            path: '/',
            menubtnid:1
          },
          {
            name: 'Contact us',
            path: '/contact',
            menubtnid:2
          },
          {
            name: 'About VAC',
            path: '/about',
            menubtnid:3
          },
          {
            name: 'Loan Rates',
            path: '/loan',
            menubtnid:4
          },
          {
            name: 'Video',
            path: '/video',
            menubtnid:5
          },
          {
            name: 'Blog',
            path: '/blog',
            menubtnid:6
          },
          {
            name: 'Calculate',
            path: '/calculate',
            menubtnid:7
          },
          {
            name: 'Inventory',
            path: '/catalog',
            menubtnid:8
          }
        ],



      }
    },
    watch: {
      listate (newVal) {
        this.navliclicktextoff = newVal
      }
    },
    methods: {
      setPar (val) {
        this.menubtnclickedid = val
        this.$store.commit('setPar',this.menubtnclickedid)
      }
    }
    






  }
</script>


<style lang="scss" scoped>
  @import '../../assets/varmix.scss';


  .menuListDisplay {
    z-index: 60;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // height: calc(100vh - #{$heightFooter});
    height: 100vh;
    padding-top: 100px;
    padding-bottom: 50px;
    margin-top: -39px;
    box-shadow: inset 0px 0px 10px rgba(116, 129, 255, 0.3);
    right: 0;
    background-color: #e0e0e0;
    
    @include letterH4HeadingBurgerMenuTextNumbersDarkBlue;

    @media (max-width:576px) {
      width: 100vw;
      padding-left: 70px;
    }

    &__invisible {
      width: 0;
    }

    .nav {
      flex-direction: column;

      .nav-item {
        width: 30vw;
        @media (max-width:768px) {
           display: none;
        }
        
        a {
          color: $colorTitleBurgerBlueDark;
          white-space: nowrap;
            &:hover {
            color: #7481FF;
          }
        }

      }
      .nav-item1 {
        display: none;
        width: 30vw;
        @media (max-width:768px) {
           display: block;
        }
        
        a {
          color: $colorTitleBurgerBlueDark;
          white-space: nowrap;
            &:hover {
            color: #7481FF;
          }
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
      background-color: #7481FF;
      width: 30px;
      height: 30px;
      margin-right: 5px;
      position: relative;

      a {
        color: #e0e0e0;
        position: absolute;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1rem;
        padding: 4px;

        &:hover {
          color: $colorTitleBurgerBlueDark;
        }
      }
    }
  }

  

</style>