<template>
            <div class="col">
                    
                <proginputprise v-on:progbarchagedata="priceinputset"/>
                <span class="">{{priceinput}}</span>
            </div>
  
</template>

<script>
    import proginputprise from '@/components/HOME/ProgressInputprice.vue'
   

  export default {
    
    name: 'Perf-Home',
    components: {
        proginputprise


    },
    data() {
      return {

     priceinput:0,

      }
    },

    methods:{
       priceinputset (val) {
        this.priceinput=val
      }
    }





  }
</script>


<style lang="scss" scoped>
  @import '../../assets/varmix.scss';
    

  

  
</style>