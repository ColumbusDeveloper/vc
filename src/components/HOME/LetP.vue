<template>
                <div class="let col">
                    <div class="let__headh2 col-md-6">
                        <headh2text></headh2text>
                    </div>

                    <div class="let__regular col-md-6">
                        <textregular></textregular>  
                    </div>
                </div>
</template>

<script>
 import headh2text from '@/components/primitives/text/H2DarkBlue.vue'
 import textregular from '@/components/primitives/text/textRegular.vue'
  export default {
    
    name: 'Let-Home',
    components: {
        headh2text,
        textregular,
       


    },
    data() {
      return {

        



      }
    },

    methods:{
      
    }





  }
</script>


<style lang="scss" scoped>
  @import '../../assets/varmix.scss';
    
.let {

}

.let__headh2 {

}

.let__regular {
    
}












  
</style>