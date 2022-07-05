<template>
  <div class="container">
    <h1>Header!</h1>
    <burger/>
  </div>
</template>

<script>
  import burger from './primitives/BurgerBtn.vue'
  export default {
    name: 'Header-one',
    components:{
      burger,
    }

  }
</script>


<style lang="scss" scoped>
  @import '../assets/varmix.scss';
</style>