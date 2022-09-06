<template>
    <div class="card">

        <div class="card__img-box ">
            <div class="card__img-box-wrapper ">
                <img :src="require('../../assets/images/'+ cardata.image)" alt="img" class="card__img" >
            </div> 
        </div>

        <div class="card__text-box">
            <div class="card__text-box-make-model">
                {{cardata.make}} {{cardata.model}}
            </div>
            <div class="card__text-box-price">
               $ {{cardata.price}}
            </div>
            <div class="card__text-box-values">
                <p>{{cardata.year}} year</p>
                <p>{{cardata.bodytype}}</p>
                <p>{{cardata.transmission}}</p>
                <p>{{cardata.kilometers}}</p>                
            </div>
        </div>


         
        
        
            

    </div>

</template>


<script>
    

    

    export default {
        name: 'card-catalog',
        props:['car'],
        components: {

        },
        data() {
            return {

            cardata:this.car,
           
              


                

                
          

            }

        },
        methods: {
            
       
                                  
        },
        
        watch: {

           

            car (val) {
                
                this.cardata = val
                this.cardata = [...new Set(this.cardata)]
            },
           


        },


        computed: {
           

        }



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