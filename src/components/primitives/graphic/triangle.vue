<template>
              <span class="h2DarkBlue">
                <div class="triangle-top"></div>
              </span>
</template>

<script>

export default {
  name: 'H2-darkBlue',
  components: {
  
  },
 
  
  data () {
      return {
       
      }
  },

  
  
}
</script>


<style lang="scss" scoped>
  @import '../../../assets/varmix.scss';
   .triangle-top {
    width: 0;
    height: 0;
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
    border-bottom: 200px solid #f95959;
}

</style>