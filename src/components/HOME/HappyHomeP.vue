<template>
                

                  
                        <div class="col hap">
                            <div class="hap__headingH2 ">
                                <h2darkblue>Happy customers</h2darkblue>
                                <textregular>Since 2017, we have helped thousands of Canadians get their dream vehicles from the comfort of their homes. </textregular>
                            </div>

                            <div class="hap__headingH4 ">

                            </div>

                            <div class="hap__num ">

                            </div>
                        </div>

               
                    

               
</template>

<script>
    import h2darkblue from '@/components/primitives/text/H2DarkBlue.vue'
    import textregular from '@/components/primitives/text/textRegular.vue'
    // import btnbluetextwite100 from '@/components/primitives/BTN/btnBlueTextWhiteSlotMob100.vue'
    // import btnbluetextwite from '@/components/primitives/BTN/btnBlueTextWhiteSlot.vue'

  export default {
    
    name: 'Advantages-Home',
    components: {
        h2darkblue,
        textregular,
        // btnbluetextwite100,
        // btnbluetextwite,

    },
    data() {
      return {

        



      }
    },

    methods:{
      
    }





  }
</script>


<style lang="scss" scoped>
  @import '../../assets/varmix.scss';
    

.hap {
    border-width:2px;
    border-style: solid;
    border-color: #000;
    padding-top: 30px;
    padding-bottom: 30px;
    display: grid;
    grid-template-columns: repeat(6,1fr);
    grid-template-rows: 12vw 12vw 12vw 12vw 12vw 12vw;
    grid-template-areas: 
        "a a a c c c"
        "a a a c c c"
        "a a a c c c"
        "b b b c c c"
        "b b b c c c"
        "b b b c c c";
        @media (max-width:768px) {
           grid-template-rows: 10vw 10vw 13vw 13vw 10vw 10vw;
           grid-template-areas: 
            "a a a a a a"
            "a a a a a a"
            "c c c c c c"
            "c c c c c c"
            "b b b b b b"
            "b b b b b b";
        }

		&__headingH2 {
            grid-area: a;
            background-color: blue;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
		}

		&__headingH4 {
            grid-area: b;
            background-color: yellow;
		}

		&__num {
            grid-area: c;
            background-color: red;
		}
}









 









  
</style>