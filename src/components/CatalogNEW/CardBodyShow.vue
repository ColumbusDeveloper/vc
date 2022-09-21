<template>

    <div class="cardbodyshow">    
        <div class="cardbodyshow__item"
        @click="deletebodyshow()"
        >
            <i class="fa-solid fa-xmark cardbodyshow__xmark"></i>
            <span>{{carbodyshowdata.model}}</span>
        </div>     
        
    </div>

</template>


<script>
    

    

    export default {
        name: 'ca-bodyshow',
        props:['cardbodyshow'],
        components: {

        },
        data() {
            return {

            carbodyshowdata:this.carbodyshow,
 
            }

        },
        methods: {
            
            deletebodyshow() {
                this.$emit('deletedbodyshowtoparent', this.carbodyshowdata)
            }
                                  
        },
        
        watch: {

           

            carbodyshow (val) {
                
                this.carbodyshowdata = val
                this.carbodyshowdata = [...new Set(this.carbodyshowdata)]
            },
           


        },


        computed: {
           

        }



    }
</script>

<style lang="scss">
    @import '@/assets/varmix.scss';
   
    

    .cardbodyshow {
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