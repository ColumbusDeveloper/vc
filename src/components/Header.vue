<template>
  <div class="container mycontainer">

        <burgerbtn v-bind:iscross="iscross" v-on:click="iscross=!iscross"/>
        <div class="menuListDisplayNone" v-bind:class="{menuListDisplay:iscross}">
            <ul class="nav">
              <li class="nav-item" v-for="(menuitem,id) in burgerMenuList" :key="id" >
                  <router-link class="nav-link" :to="menuitem.path">
                      {{menuitem.name}}
                  </router-link>
              </li>
            </ul>
        </div>
   
  </div>
</template>

<script>
  
import burgerbtn from './primitives/BurgerBtn.vue'


  export default {
    name: 'Header-one',
    components:{
      burgerbtn,
    
   
    },
    data () {
        return {
          
        iscross:false,
        burgerMenuList: [
            {name:'Home', path:'/'},
            {name:'Contact us', path:'/contact'},
            {name:'About VAC', path:'/about'},
            {name:'Loan Rates', path:'/loan'},
            {name:'Video', path:'/video'},
            {name:'Blog', path:'/blog'},
            {name:'Calculate', path:'/calculate'},
        ],
          
          
        }
      },
    

    
    
    
  }

    

  
</script>


<style lang="scss" scoped>
  @import '../assets/varmix.scss';

  .mycontainer {
    position: relative;
    padding-top: 18px;
    padding-bottom: 18px;
  }

  .menuListDisplayNone {
      opacity: 0;
      margin-top: 100px;
      border-width:2px;
      border-style: solid;
      border-color: #000;
      position: absolute;
      right: 0;
      @media (max-width:576px) {
        width: 100vw;
      }
          .nav {
          flex-direction: column;
          .nav-item {
            width: 100%;
          }
        }


    }

    .menuListDisplay {
      opacity: 1;
      margin-top: 100px;
      border-width:2px;
      border-style: solid;
      border-color: #000;
      position: absolute;
      right: 0;
      @media (max-width:576px) {
        width: 100vw;
      }
          .nav {
          flex-direction: column;
          .nav-item {
            width: 100%;
          }
        }
    }

  
  
  

</style>

