<template>
    <div class="card-catalog">

        

        
            

    </div>

</template>


<script>
    

    

    export default {
        name: 'cardmakemodel-catalog',
        props:[''],
        components: {

        },
        data() {
            return {

            carproperties:this.carsfromcatalog,
           
              


                

                
          

            }

        },
        methods: {
            
       
                                  
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