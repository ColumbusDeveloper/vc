<template >
    <div>
     
       
     
        


        <div class="vcatdrop__category-name"
        v-on:click="this.$emit('isCategoryItem')"
        >
       
        </div>

       


        <div class="get-subitem-make"
        v-for="(subitemslocal,index) in subitemslocals" :key="index"
        v-on="subitemslocalArrAdd(subitemslocal.make)"
        
        v-on:click="this.$emit('addToSelected',index)"
        >

        {{subitemslocalNoRepeat}}

        
        
        </div>
        
        
            

            
            
          
       
    </div>
</template>


<script>




export default {
    name:'Drop-main',
    props:['subitems','iscategoryitem'],
    components:{
     
    },
    data () {
        return {
            subitemslocals:this.subitems,
            categoryClicked:this.iscategoryitem,
            subitemslocalArr:[],
           
            
        }
    },
    watch: {
       
        iscategoryitem (neVal) {
            this.categoryClicked = neVal
        },
        subitems (neVal) {
            this.subitemslocals = neVal
        },


    },
    methods:{
        subitemslocalArrAdd (newVal) {
            this.subitemslocalArr.push(newVal)
        }
    },
    computed:{
        subitemslocalNoRepeat () {
            const dell = subitemslocalArr.splice(6);
            return [...new Set(dell)].join(' ')
        }
    }
    
}
</script>


<style lang="scss">
@import '@/assets/varmix.scss';
    .vcatdrop {

		&__category {

		}

		&__category-name {
            cursor: pointer;
		}
}

</style>