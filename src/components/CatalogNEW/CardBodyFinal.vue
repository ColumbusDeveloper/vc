<template>

    <div class="cardbodyfinal">    
        <div class="cardbodyfinal__item"
        @click="deletebodyfinal()"
        >
            <i class="fa-solid fa-xmark cardbodyfinal__xmark"></i>
            <span>{{carbodyfinaldata.model}}</span>
        </div>     
        
    </div>

</template>


<script>
    

    

    export default {
        name: 'ca-bodyfinal',
        props:['cardbodyfinal'],
        components: {

        },
        data() {
            return {

            carbodyfinaldata:this.carbodyfinal,
 
            }

        },
        methods: {
            
            deletebodyfinal() {
                this.$emit('deletedbodyfinaltoparent', this.carbodyfinaldata)
            }
                                  
        },
        
        watch: {

           

            carbodyfinal (val) {
                
                this.carbodyfinaldata = val
                this.carbodyfinaldata = [...new Set(this.carbodyfinaldata)]
            },
           


        },


        computed: {
           

        }



    }
</script>

<style lang="scss">
    @import '@/assets/varmix.scss';
   
    

    .cardbodyfinal {
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