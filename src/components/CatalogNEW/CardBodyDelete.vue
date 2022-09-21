<template>

    <div class="cardbody">    
        <div class="cardbody__item"
        @click="deletebody()"
        >
            <i class="fa-solid fa-xmark cardbody__xmark"></i>
            <span>{{carbohydrate.model}}</span>
        </div>     
        
    </div>

</template>


<script>
    

    

    export default {
        name: 'ca-body',
        props:['carbody'],
        components: {

        },
        data() {
            return {

            carbodydata:this.carbody,
 
            }

        },
        methods: {
            
            deletebody() {
                this.$emit('deletedbodytoparent', this.carbodydata)
            }
                                  
        },
        
        watch: {

           

            carbody (val) {
                
                this.carbodydata = val
                this.carbodydata = [...new Set(this.carbodydata)]
            },
           


        },


        computed: {
           

        }



    }
</script>

<style lang="scss">
    @import '@/assets/varmix.scss';
   
    

    .cardbody {
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