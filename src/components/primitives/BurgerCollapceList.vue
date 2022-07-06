<template>
  <ul>
    <li v-for="(menuitem,id) in burgerMenuList" :key="id">
        <router-link :to="menuitem.path">
            {{menuitem.name}}
        </router-link>
    </li>
  </ul>
</template>

<script>
  

  export default {
    name: 'BurgerCollapce-list',
   
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
        ]
      
       
    }},

   
    
    
  }

    

  
</script>


<style lang="scss" scoped>
  @import '../../assets/varmix.scss';

 
  
  

</style>