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
                let b = this.models.length
                let c = this.allmodels.length
                    if (b<c) {
                        this.modelstoshowfinal = this.models
                    } else {
                        this.modelstoshowfinal = this.allmodels
                    }
            },
            modelsfromcatalogview (val) {
                this.allmodels = val
            }

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