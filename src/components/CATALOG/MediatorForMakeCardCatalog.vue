<template>
    <div class="mediator-catalog">

        

        
            

    </div>

</template>


<script>
    

    

    export default {
        name: 'Mediatorformakecard-catalog',
        props:['carsfromcatalog','modelsfromcatalog'],
        components: {

        },
        data() {
            return {

            cars:this.carsfromcatalog,
            models:this.modelsfromcatalog, 
            carstoshow:[],   
              


                

                
          

            }

        },
        methods: {
            
       
                                  
        },

        created: {

        },
        
        watch: {

            carsfromcatalog (val) {
                this.cars = val
            },
            modelsfromcatalog (val) {
                this.models = val
            }


        },


        computed: {
           

        }



    }
</script>

<style lang="scss">
    @import '@/assets/varmix.scss';
   






</style>