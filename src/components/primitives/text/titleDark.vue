<template>
              <span class="titleDark">
                <slot></slot>
              </span>
</template>

<script>

export default {
  name: 'title-darkBlue',
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
   .titleDark {
       @include letterSemiboldDarkBlue ;
   }

</style>