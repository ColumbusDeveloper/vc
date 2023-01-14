<template>

  
    <div class="about__about-vac-wrapper">
      <div class="container">
        <h1 class="about__about-vac-text">About VAC</h1>           
      </div>  
    </div>
  
    
          
            
              
           
       
  
  </template>
  
  <script>
  
    export default {
      name:'about-vac',
      components: {
        
      
      },
        data() {
                return {
                    
               
                    

            }
        },
      
       
    
        
   
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
  
    .about {
        &__about-vac-wrapper {
          display: flex;
          align-items: center;
          justify-content: left;
          width: 100%;
          height: 145px;
          background:#7582FF url(@/assets/images/about_vac_pattern.png) right center no-repeat;
          background-size: cover;
          @media (max-width:576px) {
              height: 116px;
          }
        }
        &__about-vac-text {
          margin-left: 4%;
          color: #fff;
          font-weight: 700;
          font-size: 60px;
          line-height: 65px;
          @media (max-width:992px) {
            margin-left: 5%;
          }
          @media (max-width:768px) {
            margin-left: 7%;
          }
          @media (max-width:576px) {
            margin-left: 8%;
          }
          @media (max-width:576px) {
            font-size: 35px;
            line-height: 37px;
          }
        }
    }

    
   
    
  </style>
