<template>

    <div class="cardmagtop">    
        <div class="cardmagtop__item"
        @click="deletemagtop()"
        >
            
            <span class="cardmagtop__item-text"

            :class="{active:clicked.includes(index)}"
            >{{carmagtopdata}}</span>
        </div>     
        
    </div>

</template>


<script>
    

    

    export default {
        name: 'ca-magtop',
        props:['carmagtop','clicked','index'],
        components: {

        },
        data() {
            return {

            carmagtopdata:this.carmagtop,
 
            }

        },
        methods: {
            
            deletemagtop() {
                this.$emit('magtopsharedata', this.carmagtopdata)
            }
                                  
        },
        
        watch: {

           

            carmagtop (val) {
                
                this.carmagtopdata = val
                this.carmagtopdata = [...new Set(this.carmagtopdata)]
            },
           


        },


        computed: {
           

        }



    }
</script>

<style lang="scss">
    @import '@/assets/varmix.scss';
   
    

    .cardmagtop {
        &__item {
            display: inline-block;
            align-items: center;
        
            @include letterH4HeadingBurgerMenuTextNumbersDarkBlue;
            margin-left: 5px;
            margin-right: 5px;
            margin-bottom: 3px;
            margin-top: 3px;
            
            cursor: pointer;
            &:hover {
                color: #7481FF;
            }

            .active {
                color: #7481FF;
            }
        }
        

    }    

       











</style>