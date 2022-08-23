<template>
    <div class="card-catalog">

         <img :src="require('../../assets/images/'+ carproperties.image)" alt="img">
        {{carproperties.model}}
        
            

    </div>

</template>


<script>
    

    

    export default {
        name: 'cardmakemodel-catalog',
        props:['car'],
        components: {

        },
        data() {
            return {

            carproperties:this.car,
           
              


                

                
          

            }

        },
        methods: {
            
       
                                  
        },
        
        watch: {

           

            car (val) {
                this.carproperties = val
            },
           


        },


        computed: {
           

        }



    }
</script>

<style lang="scss">
    @import '@/assets/varmix.scss';
   






</style>