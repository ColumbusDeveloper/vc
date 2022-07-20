<template>
                

                  
    <div class="what">
        <div class="what__heading">

            <hdarkblue>What our client say about us!</hdarkblue>

        </div>
        <div class="what__c">
          <carouselswiper/>
        </div>
 
    </div>

               
                    

               
</template>

<script>

    import hdarkblue from '@/components/primitives/text/H2DarkBlue.vue'
    //import textregular from '@/components/primitives/text/textRegular.vue'
    // import btnbluetextwite100 from '@/components/primitives/BTN/btnBlueTextWhiteSlotMob100.vue'
    // import btnbluetextwite from '@/components/primitives/BTN/btnBlueTextWhiteSlot.vue'
    // import h4darkblue from '../primitives/text/H4DarkBlue.vue'
    import carouselswiper from '@/components/HOME/CarouselSwiper.vue'
    
  export default {
    
    name: 'Advantages-Home',
    components: {
        hdarkblue,
        carouselswiper,
        // textregular,
        // h4darkblue,
        // btnbluetextwite100,
        // btnbluetextwite,

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
    .what {
        padding-bottom: 50px;
        border-width:2px;
        border-style: solid;
        border-color: #000;
        display: flex;
        flex-direction: column;
        align-items: center;
        

		&__heading {
            width: 100%;
            padding-bottom: 40px;
            border-width:2px;
            border-style: solid;
            border-color: #000;
            text-align: start;
		}

		&__c {
            
            width: 100%;
        
            border-width:2px;
            border-style: solid;
            border-color: #000;

		}
}





  
</style>