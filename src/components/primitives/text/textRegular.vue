<template>
              <span class="textRegular">
                <slot></slot>
              </span>
</template>

<script>

export default {
  name: 'text-regular',
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
   .textRegular {
       @include letterContentSecondarySmallGray ;
   }

</style>