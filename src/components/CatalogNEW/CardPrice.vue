<template>

    <div class="cardprice">    
        <div class="cardprice__item"
        @click="deletprice()"
        >
            <i class="fa-solid fa-xmark cardprice__xmark"></i>
            <span>{{carpricedata.price}}</span>
        </div>     
        
    </div>

</template>


<script>
    

    

    export default {
        name: 'ca-price',
        props:['carprice'],
        components: {

        },
        data() {
            return {

            carpricedata:this.carprice,
 
            }

        },
        methods: {
            
            deletprice() {
                this.$emit('deletedpricetoparent', this.carpricedata)
            }
                                  
        },
        
        watch: {

           

            carprice (val) {
                
                this.carpricedata = val
                this.carpricedata = [...new Set(this.carpricedata)]
            },
           


        },


        computed: {
           

        }



    }
</script>

<style lang="scss">
    @import '@/assets/varmix.scss';
   
    

    .cardprice {
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