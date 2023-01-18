<template>
                <div class="let ">
                    <div class="let__headh2 ">
                        <headh2text>Let`s figure out how much you can afford</headh2text>
                    </div>

                    <div class="let__regular ">
                        <textregular>Before you start shopping, let`s figure out how much you can afford. Move the sliders to see how the loan duration and the total loan amount affect your monthly payments.</textregular>  
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
    display: flex;
    gap: 40px;
    @media (min-width:150px) {
       flex-direction: column;
    }
    @media (min-width:768px) {
       flex-direction: row;
    }
}

.let__headh2 {
    
    width: 50%;
    padding-bottom: 50px;
  
    @media (min-width:150px) {
       width: 100%;
      
    }


}

.let__regular {
    
    width: 50%;
    padding-bottom: 50px;

    @media (min-width:150px) {
        width: 100%;
    }
}












  
</style>