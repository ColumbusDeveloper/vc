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
        props:['carsfromcatalogmain','modelsfromcatalogmain','modelsfromcatalogview'],
        components: {
            card,
        },
        data() {
            return {

            cars:this.carsfromcatalogmain,
            models:this.modelsfromcatalogmain, 
            allmodels:this.modelsfromcatalogview,
            modelstoshowfinal:[],
            var:false,
            
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
            },
            modelsfromcatalogview (val) {
                this.allmodels = val
            },
            models (val) {   
                this.modelstoshowfinal = val
            },

        },
        created () {
                this.models = this.allmodels 
                this.modelstoshowfinal = this.allmodels           
        },
       
        computed: {

           carstoshow () {
                      let c = []
                     
                      this.modelstoshowfinal.forEach(el=>{
                            let a = el
                            let b = this.cars.filter(el=>el.model===a)
                            b.forEach(el=>c.push(el))
                        })

                      return c
           },

        }

    }
</script>

<style lang="scss">
    @import '@/assets/varmix.scss';
   






</style>