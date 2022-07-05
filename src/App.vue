<template>
  <headerone/>
    
  
  
  <router-view/>
</template>

<script>

import headerone from '@/components/Header.vue'

export default {
  components:{
    headerone,
  }
}


</script>


<style lang="scss">
@import './assets/varmix.scss';


</style>
