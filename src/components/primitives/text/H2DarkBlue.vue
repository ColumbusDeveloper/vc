<template>
              <span class="h2DarkBlue">
                <slot></slot>
              </span>
</template>

<script>

export default {
  name: 'H2-darkBlue',
  components: {
  
  },
  props:['iscross'],
  
  data () {
      return {
       
      }
  },

  
  
}
</script>


<style lang="scss" scoped>
  @import '../../../assets/varmix.scss';
   .h2DarkBlue {
    @include letterH2textTitleDarkBlue;
   }

</style>