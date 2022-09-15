<template>

    <div class="cardtrans">    
        <div class="cardtrans__item"
        >
            <i class="fa-solid fa-xmark cardtrans__xmark"></i>
            <span>{{cartransdata.transmission}}</span>
        </div>     
        
    </div>

</template>


<script>
    

    

    export default {
        name: 'ca-trans',
        props:['cartrans'],
        components: {

        },
        data() {
            return {

            cartransdata:this.cartrans,
 
            }

        },
        methods: {
            
            
                                  
        },
        
        watch: {

           

            cartrans (val) {
                
                this.cartransdata = val
                this.cartransdata = [...new Set(this.cartransdata)]
            },
           


        },


        computed: {
           

        }



    }
</script>

<style lang="scss">
    @import '@/assets/varmix.scss';
   
    

    .cardtrans {
        &__item {
            display: inline-block;
            align-items: center;
            background-color: aqua;
            @include letterH4HeadingBurgerMenuTextNumbersDarkBlue;
            margin-left: 5px;
            margin-right: 5px;
            margin-bottom: 3px;
            margin-top: 3px;
            
            cursor: pointer;
            &:hover {
                color: #7481FF;
            }
        }
        

    }    

       











</style>