<template>

  
    <div>
              <h2 ref="container" >GSUP</h2>
              
    </div>
  
    
          
            
              
           
       
  
  </template>
  
  <script>
  
  
  import {ref, onMounted} from '@vue/composition-api'
  import gsap from 'gsap';
  
  const container = ref(null);
  
    export default {
      name:'anima-comp',
      components: {
        
      
      },
      
      onMounted(() => {
        gsap.from(container.value, {
            delay:0.5,
            duration:1,
            y:'+100',
            autoAlpha:0,
            ease:'back.out(1.7)',
        })
      }),
      methods: {
       
        
        
       
      },
      watch: {
        
      },
  
      computed: {
        
      },
      
      
  
    }
  </script>
  
  
  <style lang="scss">
    @import '../../assets/varmix.scss';
  
    
   
    
  </style>
