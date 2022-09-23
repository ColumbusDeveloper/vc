<template>

    <div class="cardtype">    
        <div class="cardtype__item"
        @click="deletetype()"
        >
            <i class="fa-solid fa-xmark cardtype__xmark"></i>
            <span>{{cartypedata}}</span>
        </div>     
        
    </div>

</template>


<script>
    

    

    export default {
        name: 'ca-type',
        props:['cartype'],
        components: {

        },
        data() {
            return {

            cartypedata:this.cartype,
 
            }

        },
        methods: {
            
            deletetype() {
                this.$emit('deletedtypetoparent', this.cartypedata)
            }
                                  
        },
        
        watch: {

           

            cartype (val) {
                
                this.cartypedata = val
                this.cartypedata = [...new Set(this.cartypedata)]
            },
           


        },


        computed: {
           

        }



    }
</script>

<style lang="scss">
    @import '@/assets/varmix.scss';
   
    

    .cardtype {
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

            span {
                margin-left: 5px;
            }
        }
        

    }    

       











</style>