<template>
                <div class="choose">
                    

                </div>
</template>

<script>
    import h2darkblue from '@/components/primitives/text/H2DarkBlue.vue'
    import textregular from '@/components/primitives/text/textRegular.vue'

  export default {
    
    name: 'Advantages-Home',
    components: {
        h2darkblue,
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
    

.advantages {

		&__centralHeading {
            padding-top: 90px;
            padding-bottom: 30px;
		}
}

.advantagesFlex {
    display: flex;
    @media (max-width:992px) {
       flex-direction: column;
    }

		&__mainFlexPartItem1 {
            position: relative;
            
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

		}

		&__mainFlexPartItem2 {
            position: relative;
       
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

		}

		&__mainFlexPartItem3 {
            position: relative;
            
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
		}

        &__iconTextBlock1 {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: absolute;
            
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            z-index: 10;
         
            img {
                height: 42.85px;
                width: 54.72px;
            }
        }
        &__iconTextBlock2 {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: absolute;
            
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            z-index: 10;
            img {
                height: 50px;
                width: 39px;
            }
        }
        &__iconTextBlock3 {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            z-index: 10;
            img {
                height: 33px;
                width: 66px;
            }
        }
        &__regularText1 {
            text-align: center;
            width:320px ;
            height: 116px;
        }
        &__regularText2 {
            text-align: center;
            width:204px ;
            height: 174px;
        }
        &__regularText3 {
            text-align: center;
            width:275px ;
            height: 116px;
        }
        &__title {
            padding-top: 15px;
            padding-bottom: 5px;
        }
}









  
</style>