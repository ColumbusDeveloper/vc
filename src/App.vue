<template>

  <div>
    <headerone/>
      <main>
        <router-view/>
      </main>
    <footer/>
  </div>
  
</template>

<script>

import headerone from '@/components/Header.vue'
import footer from '@/components/Footer.vue'

export default {
  components:{
    headerone,
    footer,
  }
}


</script>


<style lang="scss">
@import './assets/varmix.scss';


</style>
