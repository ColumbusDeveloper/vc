<template>
            <div class="col progressblock">
                    <div class="progressblock__inputblock">
                      <div class="progressblock__inputblock-btnblock">
                        <div class="progressblock__inputblock-btnblock-item">
                          <btnblue >{{btnbltext}}</btnblue>
                        </div>

                        <div class="progressblock__inputblock-btnblock-item">
                          <btnwhite 
                          v-bind:proginputprise="priceinput"
                          v-bind:proginputmonth="monthinput"
                          v-on:changeInpPr="changeAvPr"
                          v-on:changeInpMon="changeAvMon"
                          >{{btwhitetextaverage}}</btnwhite>
                        </div>

                        <div class="progressblock__inputblock-btnblock-item">
                          <btnwhite >{{btnwhitegood}}</btnwhite>
                        </div>


                      </div>
                      <div class="progressblock__inputblock-inputprice">
                        <div class="progressblock__inputblock-inputprice-textnumblock">
                          <span class="progressblock__inputblock-inputprice-textnumblock_text">Loan Amount</span>
                          <span class="progressblock__inputblock-inputprice-textnumblock_number">$  {{priceinput}}</span>
                        </div>
                        <div class="progressblock__inputblock-inputprice-sliderblock">
                            <proginputprise 
                            v-on:progbarchagedata="priceinputset"
                            v-bind:proginputprise="priceinput"
                            
                            
                            />
                           
                        </div>
                      </div>
                      <div class="progressblock__inputblock-inputmonth">
                        <div class="progressblock__inputblock-inputmonth-textnumblock">
                          <span class="progressblock__inputblock-inputmonth-textnumblock_text">Loan Duration</span>
                          <div class="progressblock__inputblock-inputmonth-textnumblock_number">
                            <span class="progressblock__inputblock-inputmonth-textnumblock-number-text-var">{{monthinput}}</span>
                            <p class="progressblock__inputblock-inputmonth-textnumblock-number-text">MONTH</p>
                          </div>
                          
                        </div>
                        <div class="progressblock__inputblock-inputmonth-sliderblock">
                            <proginputmonth v-on:progbarchangemonth="monthinputset"/>
                          
                        </div>
                      </div>

                    </div>
                    <div class="progressblock__textnumblock">
                          <div class="progressblock__textnumblock-innerflex">
                              <div class="progressblock__textnumblock-innerflex-weeklyblue">
                                <div class="progressblock__textnumblock-innerflex-weeklyblue-column">
                                  <span class="progressblock__textnumblock-innerflex-weeklyblue-column-text">Bi-Weekly Payment</span>
                                  <span class="progressblock__textnumblock-innerflex-weeklyblue-column-num">${{biweek(priceinput,monthinput)}}</span>
                                </div>
                              </div>
                              <div class="progressblock__textnumblock-innerflex-medweeklydurk">
                                <div class="progressblock__textnumblock-innerflex-medweeklydurk-item">
                                    <span class="progressblock__textnumblock-innerflex-medweeklydurk-item_text">Monthly Payment</span>
                                    <span class="progressblock__textnumblock-innerflex-medweeklydurk-item_num">{{payMonth(priceinput,monthinput)}}</span>
                                </div>
                                <div class="progressblock__textnumblock-innerflex-medweeklydurk-item">
                                    <span class="progressblock__textnumblock-innerflex-medweeklydurk-item_text">Weekly Payment</span>
                                    <span class="progressblock__textnumblock-innerflex-medweeklydurk-item_num">{{payWeek(priceinput,monthinput)}}</span>
                                </div>
                              </div>
                          </div>
                      
                          <div class="progressblock__textnumblock-btnblock">
                              <btnbluemob100>REQUEST A CAR</btnbluemob100>
                          </div>

                    </div>
                
            </div>
  
</template>

<script>

  import btnblue from '@/components/primitives/BTN/btnBlueTextWhiteSlot112px.vue'
  import btnwhite from '@/components/primitives/BTN/btnWhiteSlot112px.vue'
  import proginputprise from '@/components/HOME/ProgressInputprice.vue'
  import proginputmonth from '@/components/HOME/ProgressInputmonth.vue'
  import btnbluemob100 from '@/components/primitives/BTN/btnBlueTextWhiteSlotMob100.vue'



   
    // <span class="">{{priceinput}}</span>
    // <span class="">{{monthinput}}</span>

   

export default {
    
    name: 'Progress-Home',
    components: {
      btnblue,
      btnwhite,
      proginputprise,
      proginputmonth,
      btnbluemob100,



    },
    data() {
      return {

        priceinput:1,
        monthinput:1,
        btnbluetext:'poor',
        btnwhitetextaverage:'Average',
        btnwhitegood:'Good',
        fullWidth:document.documentElement.clientWidth,
        issmbtn:false,
        
       
      }
    },

  

    methods:{
       priceinputset (val) {
        this.priceinput=val
      },

      monthinputset (val) {
        this.monthinput=val
      },

      biweek(valPr,valMon) {
        return Math.trunc(valPr/valMon)/4*2
      },

      payMonth(valPr,valMon) {
        return Math.trunc(valPr/valMon)
      },

      payWeek(valPr,valMon) {
        return Math.trunc(valPr/valMon) / 4
      },
      poor () {
        this.priceinput = 10000
        this.monthinput = 36
      },
      changeAvPr () {
        this.priceinput = 50000
      },
      changeAvMon () {
        this.monthinput = 24
      },
      good () {
        this.priceinput = 150000
        this.monthinput = 36
      }


      


      
      

      
      

      
      

    },

    watch:{
      
      
    },

    computed:{
      btnbltext () {
        return this.btnbluetext.toUpperCase()
      },
      btwhitetextaverage () {
        return this.btnwhitetextaverage.toUpperCase()
      },
      btwhitegood () {
        return this.btnwhitegood.toUpperCase()
      },
      isbtn80px(){
          if(document.documentElement.clientWidth <= 576){
            return true
          }
      else return this.issmbtn
     },
     
     
     


    },
    



}

</script>


<style lang="scss" scoped>
  @import '../../assets/varmix.scss';
    
.progressblock {
  display: flex;
  
  @media (max-width:768px) {
     flex-direction: column;
  }

		&__inputblock {
      
      width: 75%;
      @media (max-width:1050px) {
         width: 67%;
      }
      @media (max-width:768px) {
      width: 100%;
     }
		}

		&__inputblock-btnblock {
      
      display: flex;
      padding-bottom: 50px;
      justify-content: flex-start;
    
		}

		

		&__inputblock-inputprice {
      
      
      display: flex;
      flex-direction: column;
      padding-bottom: 50px;
		}

		&__inputblock-inputprice-textnumblock {
      
      
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 30px;

			&_text {
        @include   letterSemiboldDarkBlue   ;
        font-size: 1.25rem;
        line-height: 1.56rem;
			}

			&_number {
        @include letterSemiboldDarkBlue;
        width: 90px;
        
        text-align: end;

			}
		}

		&__inputblock-inputprice-sliderblock {
     
      min-height: 25px;
      
		}

		&__inputblock-inputmonth {
      
      
      display: flex;
      flex-direction: column;
      padding-bottom: 50px;
		}

		&__inputblock-inputmonth-textnumblock {
      
      
      display: flex;
      justify-content: space-between;
      padding-bottom: 30px;

			&_text {
        @include   letterSemiboldDarkBlue   ;
        font-size: 1.25rem;
        line-height: 1.56rem;
        
			}

			&_number {
        
        width: 90px;
        
        text-align: end;
        display: flex;
        align-items: center;
        justify-content: space-between;
			}
		}

    &__inputblock-inputmonth-textnumblock-number-text-var {
        @include letterSemiboldDarkBlue;
    }

    &__inputblock-inputmonth-textnumblock-number-text {
       @include letterH4HeadingBurgerMenuTextNumbersDarkBlue     ;
       font-size: 1rem;
       line-height: 0.9rem;
       margin-bottom: 0;
       margin-top: 0;
       
    }

		&__inputblock-inputmonth-sliderblock {
    
      min-height: 25px;
      
		}










		&__textnumblock {
      
      width: 25%;
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-left: 70px;
      @media (max-width:1050px) {
         width: 33%;
      }
      @media (max-width:768px) {
      width: 100%;
      padding-left: 0;
      height: 250px;
     }
     @media (max-width:576px) {
        height: 270px;
     }
		}

		&__textnumblock-innerflex {
      display: flex;
      flex-direction: column;
      
      justify-content: space-between;
      height: 330px;
      @media (max-width:768px) {
      flex-direction: row;
      height: 168px;
      }
      @media (max-width:576px) {
         flex-direction: column;
         height: 200px;
      }
      
		}

		&__textnumblock-innerflex-weeklyblue {
      height: 50px;
      
      @media (max-width:768px) {
      width: 50%;
      }
      @media (max-width:576px) {
         width: 100%;
      }
		}

    &__textnumblock-innerflex-weeklyblue-column {
      display: flex;
      flex-direction: column;
      

		}

    &__textnumblock-innerflex-weeklyblue-column-text {
      padding-bottom: 25px;
      @include letterContentSecondarySmallGray     ;
      font-size: 1rem;

		}

    &__textnumblock-innerflex-weeklyblue-column-num {
      @include    letterH2textTitleDarkBlue  ;
      font-size: 2.81rem;
      color:#7481FF;
		}

		&__textnumblock-innerflex-medweeklydurk {
   
      min-height: 50px;
      
      @media (max-width:768px) {
      width: 50%;
      }
      @media (max-width:576px) {
         width: 100%;
         display: flex;
         justify-content: space-between;
      }
		}

    &__textnumblock-innerflex-medweeklydurk-item {
      display: flex;
      flex-direction: column;
      padding-bottom: 25px;
      

			&_text {
        padding-bottom: 20px;
        @include letterContentSecondarySmallGray     ;
        font-size: 1rem;
			}

			&_num {
        @include  letterH4HeadingBurgerMenuTextNumbersDarkBlue    ;
        font-size: 1.56rem;
			}
		}

    

		

    

		

		

		

		

		


    
}


  

  
</style>