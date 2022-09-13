<template>

    <div class="cardyear">    
        <div class="cardyear__item"
        @click="deletyear()"
        >
            <i class="fa-solid fa-xmark cardyear__xmark"></i>
            <span>{{caryeardata.year}}</span>
        </div>     
        
    </div>

</template>


<script>
    

    

    export default {
        name: 'ca-year',
        props:['caryear'],
        components: {

        },
        data() {
            return {

            caryeardata:this.caryear,
 
            }

        },
        methods: {
            
            deletyear() {
                this.$emit('deletedyeartoparent', this.caryeardata)
            }
                                  
        },
        
        watch: {

           

            caryear (val) {
                
                this.caryeardata = val
                this.caryeardata = [...new Set(this.caryeardata)]
            },
           


        },


        computed: {
           

        }



    }
</script>

<style lang="scss">
    @import '@/assets/varmix.scss';
   
    

    .cardyear {
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