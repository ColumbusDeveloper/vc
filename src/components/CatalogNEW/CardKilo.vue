<template>

    <div class="cardkilo">    
        <div class="cardkilo__item"
        @click="deletekilo()"
        >
            <i class="fa-solid fa-xmark cardkilo__xmark"></i>
            <span>{{carkilodata.kilometers}}</span>
        </div>     
        
    </div>

</template>


<script>
    

    

    export default {
        name: 'ca-catalog',
        props:['carkilo'],
        components: {

        },
        data() {
            return {

            carkilodata:this.carkilo,
 
            }

        },
        methods: {
            
            deletekilo() {
                this.$emit('deletedkilotoparent', this.carkilodata)
            }
                                  
        },
        
        watch: {

           

            carkilo (val) {
                
                this.carkilodata = val
                this.carkilodata = [...new Set(this.carkilodata)]
            },
           


        },


        computed: {
           

        }



    }
</script>

<style lang="scss">
    @import '@/assets/varmix.scss';
   
    

    .cardkilo {
        &__item {
            display: inline-block;
            align-items: center;
            background-color: aqua;
            @include letterH4HeadingBurgerMenuTextNumbersDarkBlue;
            margin-right: 7px;
            margin-bottom: 3px;
            margin-top: 3px;
            cursor: pointer;
            &:hover {
                color: #7481FF;
            }
        }
        

    }    

       











</style>