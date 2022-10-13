<template>

  
    <div>
        <div class="box green"></div>
   
        <div class="nav">
            <button id="play">play()</button>
            <button id="pause">pause()</button>
            <button id="resume">resume()</button>
            <button id="reverse">reverse()</button>
            <button id="restart">restart()</button>
        </div>

        <div class="swg-box">
          
          <svg class="text-box" width="205" height="47" viewBox="0 0 205 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            
            <mask id="path-1-inside-1_797_38679" fill="white">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H205V8.67844e-05H199.286L205 9.40009L194.286 47.0001L0 47V46.9999H5.71429L0 37.5999L10.7143 1.90735e-05H0V0Z"/>
          
            </mask>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H205V8.67844e-05H199.286L205 9.40009L194.286 47.0001L0 47V46.9999H5.71429L0 37.5999L10.7143 1.90735e-05H0V0Z" fill="url(#paint0_linear_797_38679)"/>
      
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H205V8.67844e-05H199.286L205 9.40009L194.286 47.0001L0 47V46.9999H5.71429L0 37.5999L10.7143 1.90735e-05H0V0Z" fill="#F9C06A"/>
            <path  d="M205 0H206V-1H205V0ZM0 0V-1H-1V0H0ZM205 8.7142e-05V1.00009H206V8.7142e-05H205ZM199.286 8.7142e-05V-0.999913H197.508L198.431 0.519539L199.286 8.7142e-05ZM205 9.40009L205.962 9.67413L206.081 9.25396L205.854 8.88064L205 9.40009ZM194.286 47.0001V48.0001H195.041L195.247 47.2741L194.286 47.0001ZM0 47H-1V48H-4.51593e-07L0 47ZM0 46.9999V45.9999H-1V46.9999H0ZM5.71429 46.9999V47.9999H7.49246L6.56879 46.4805L5.71429 46.9999ZM0 37.5999L-0.961717 37.3259L-1.08145 37.746L-0.854499 38.1194L0 37.5999ZM10.7143 2.0504e-05L11.676 0.274067L12.039 -0.999979H10.7143V2.0504e-05ZM0 2.0504e-05H-1V1.00002H0V2.0504e-05ZM205 -1H0V1H205V-1ZM206 8.7142e-05V0H204V8.7142e-05H206ZM199.286 1.00009H205V-0.999913H199.286V1.00009ZM205.854 8.88064L200.14 -0.519365L198.431 0.519539L204.146 9.91954L205.854 8.88064ZM204.038 9.12604L193.324 46.7261L195.247 47.2741L205.962 9.67413L204.038 9.12604ZM-4.51593e-07 48L194.286 48.0001V46.0001L4.51593e-07 46L-4.51593e-07 48ZM-1 46.9999V47H1V46.9999H-1ZM5.71429 45.9999H0V47.9999H5.71429V45.9999ZM-0.854499 38.1194L4.85979 47.5194L6.56879 46.4805L0.854499 37.0805L-0.854499 38.1194ZM9.75257 -0.274026L-0.961717 37.3259L0.961717 37.874L11.676 0.274067L9.75257 -0.274026ZM0 1.00002H10.7143V-0.999979H0V1.00002ZM-1 0V2.0504e-05H1V0H-1Z" fill="url(#paint1_linear_797_38679)" mask="url(#path-1-inside-1_797_38679)"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M195.29 43.4745H3.57118L5.71404 46.9995H194.286L195.29 43.4745Z" fill="#F9AE3D"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M85 3.525L82.8572 0V3.525H85Z" fill="#F9AE3D"/> <text class="text">Hello SVG</text>
            <defs>
        
            <linearGradient id="paint0_linear_797_38679" x1="102.5" y1="0" x2="102.5" y2="47.0001" gradientUnits="userSpaceOnUse">
            <stop stop-color="#333333" stop-opacity="0.8"/>
            <stop offset="1" stop-color="#111111" stop-opacity="0.9"/>
            </linearGradient>
            <linearGradient id="paint1_linear_797_38679" x1="102.5" y1="0" x2="102.5" y2="47.0001" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="#F9C06A"/>
            </linearGradient>
            </defs>
            <text class="text" x="50" y="55%">{{text}}</text>
          </svg>
          


        </div>
        

              
    </div>
  
    
          
            
              
           
       
  
  </template>
  
  <script>
  
  
 
  import gsap from 'gsap'
  
 



  
    export default {
      name:'anima-comp',
      components: {
        
      
      },
        data() {
                return {
                    
                text:'Hello SVG'
                    

            }
        },
      
        mounted() {
            document.querySelector("#play").onclick = () => tween.play();
            document.querySelector("#pause").onclick = () => tween.pause();
            document.querySelector("#resume").onclick = () => tween.resume();
            document.querySelector("#reverse").onclick = () => tween.reverse();
            document.querySelector("#restart").onclick = () => tween.restart();
            var tween = gsap.to(".green", {
                duration: 4, 
                x: 750, 
                rotation: 360, 
                ease: "none", 
                paused: true
                });
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
  
    body {
    margin: 10px;
    }

    .box {
        height: 20px;
        width: 20px;
        background-color: green;
    }

    button {
    text-transform: none;
    }

    .text-box {
      position: relative;
    }

    .text {
      fill: black;
      color: black;
      font-size: 16px;
      position: absolute;
      z-index: 10;
      top:20px;
    }
    .swg-box {
      background-color: black;
    }
   
    
  </style>
