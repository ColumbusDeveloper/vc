<template>
            <div >
                    
                <proginputprise v-on:progbarchagedata="priceinputset"/>
                <span class="">{{priceinput}}</span>
            </div>
  
</template>

<script>
    import proginputprise from '@/components/HOME/ProgressInputprice.vue'
   

  export default {
    
    name: 'Perf-Home',
    components: {
        proginputprise


    },
    data() {
      return {

     priceinput:0,

      }
    },

    methods:{
       priceinputset (val) {
        this.priceinput=val
      }
    }





  }
</script>


<style lang="scss" scoped>
  @import '../../assets/varmix.scss';
    .perfCar {
        

		&__leftPart {
            
            height: 850px;
            
		}

		&__rightPart {
            
            height: 850px;
            
          
		}
        &__flexMain {
            display: flex;
            @media (max-width:768px) {
               flex-direction: column;
               align-items: center;
            }
        }
        &__itemLeftPart {
            display: flex;
            align-items: center;
           
            height: 16.7%;
            
           
        }
        &__itemLeftPartInnerFlexColumn {
            display: flex;
            flex-direction: column;
            padding-left: 30px;
            justify-content: space-between;
        }
        &__centralHeading {
            padding-top: 60px;
            padding-bottom: 30px;
            @media (max-width:576px) {
               text-align: center;
            }

        }
        &__rightPart {
            display: flex;
            align-items: center;
            justify-content: center;
            @media (max-width:768px) {
               height: auto;
            }
        }
       
}

  

  

  

  

  

  
</style>