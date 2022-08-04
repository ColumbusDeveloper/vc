<template >
    <div 
    v-for="model in modStr" :key="model"
    >
        {{model}}
    </div>
</template>

<script>
export default {
    name:'V-catalog-show-box',
    props:['carmodel'],
    data () {
        return {
            models:this.carmodel,
            
        }
    },
    watch:{
        carmodel (newVal) {
            this.models = newVal
        }
    },
    methods:{
        
    },
    computed:{
        modStr () {
            const a = [...new Set(this.models)]
            return a.join(',')
        }
    }
    
   
    





    
}
</script>

<style lang="scss">
    @import '@/assets/varmix.scss';
</style>