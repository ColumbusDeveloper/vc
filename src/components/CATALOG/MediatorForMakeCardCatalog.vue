<template>
    <div class="mediator-catalog">

        <card
        v-for="car in carstoshow" :key="car"
        :car="car"
        >
    
        </card>



        
            

    </div>

</template>


<script>
    
    import card from '@/components/CATALOG/CardForMakeModelCatalog.vue'
    

    export default {
        name: 'Mediatorformakecard-catalog',
        props:['carsfromcatalogmain','modelsfromcatalogmain'],
        components: {
            card,
        },
        data() {
            return {

            cars:this.carsfromcatalogmain,
            models:this.modelsfromcatalogmain, 
          
          
              


                

                
          

            }

        },
        methods: {
            
   
                                  
       },
       
        
        watch: {

            carsfromcatalogmain (val) {
                this.cars = val
            },
            modelsfromcatalogmain (val) {
                this.models = val
            }


        },


        computed: {

           carstoshow () {
                      let c = []
                      this.models.forEach(el=>{
                            let a = el
                            let b = this.cars.filter(el=>el.model===a)
                            b.forEach(el=>c.push(el))
                        })

                        return c
           }

        }



    }
</script>

<style lang="scss">
    @import '@/assets/varmix.scss';
   






</style>