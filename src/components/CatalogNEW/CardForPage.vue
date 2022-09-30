<template>
    <div class="cardforpage">

        


         
        
        
            

    </div>

</template>


<script>
    

    

    export default {
        name: 'ca-cardforpage',
        props:['cardforpage'],
        components: {

        },
        data() {
            return {

            itemclickedforpage:this.cardforpage,
           
           


                

                
          

            }

        },
        methods: {
            
            
                                   
        },
        
        watch: {

           

            cardforpage (val) {
                
                this.itemclickedforpage = val
             
            },
           


        },


        computed: {
           

        },
        




    }
</script>

<style lang="scss">
    @import '@/assets/varmix.scss';
   .card {
    

    display: flex;
    flex-direction: column;

		&__img-box {
            padding-left: 5px;
            padding-right: 5px;
    
		}

        &__img-box-wrapper {
            position: relative;
            padding-top: 56.25%;
        }

		&__img {
           position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: auto;
		}

		&__text-box {
        
            padding: 15px;
		}

        &__text-box-make-model {
            display: flex;
            @include letterSemiboldDarkBlue;

        }

        &__text-box-price {
            @include letterSemiboldDarkBlue;
            color: #7481FF;
        }

        &__text-box-values{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            @include letterContentSecondarySmallGrayClear;
            p{
                padding-right: 50px;
                margin-bottom: 0;
            }
           
        }
}







</style>