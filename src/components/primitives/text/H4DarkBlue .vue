<template>
              <span class="h4DarkBlue">
                <slot></slot>
              </span>
</template>

<script>

export default {
  name: 'H4-darkBlue',
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
   .h4DarkBlue {
    @include letterH4HeadingBurgerMenuTextNumbersDarkBlue;
   }

</style>