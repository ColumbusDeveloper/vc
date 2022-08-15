<template >
    <div class="catalog">
        
     
       <div class="catalog__title" 
       
       
       >
       
                    <p class="catalog__title-text"
                    @click="showStartForm=!showStartForm,formAppearance()"
                    
            
                    >Make, Model</p> 

                    <div class="catalog__arrow-box">

                        <span class="catalog__title-arrow catalog__title-arrow-up"
                        
                        ><i class="fa-solid fa-chevron-up catalog__arrows-up-down"
                        v-if="arrowRightPartUp"
                        @click="showStartForm=!showStartForm,formAppearance()"
                        ></i></span>

                        <span class="catalog__title-arrow catalog__title-arrow-down"
                        
                        ><i class="fa-solid fa-chevron-down catalog__arrows-up-down"
                        @click="showStartForm=!showStartForm,formAppearance()"
                        v-if="arrowRightPartDawn"
                        ></i></span>

                    </div>

                    

                    
       
       </div>

       <div class="catalog__select-wrapper"
     
       >

            <div class="catalog__select-wrapper-window">
                <div class="col catalog__select-wrapper-window-make-model-box">

                    <div class="catalog__select-wrapper-window-make-model-box-make-part">
                            <template
                            v-for="(item) in makesInitialLeftPartComp" :key="item"
                            
                            >
                                
                                <div class="catalog__uniqmake-models-box"
                                v-if="showStartForm"
                                @click="changeAppModelsToInput()"
                                > 
                                    <input  type="checkbox" v-bind:value="item" v-model="inputMakes"
                                    
                                    >
                                    <label 
                                  
                                    >{{item}}</label><br>
                                </div>
                              
                                
                            </template> 
                    </div>

                    <div class="catalog__right-part-models-box"
                    v-if="showStartForm"
                    
                    >
                        

                        <div class="catalog__select-wrapper-window-make-model-box-model-part modelsInitial"
             
                        >
                            <template 
                            v-for="item in modelInitialsRightPartComp" :key="item"
                            >
                                <div class="catalog__model-cross-btn-block"
                                v-if="showInitialModels"
                                >
                                    <input type="checkbox" v-bind:value="item" v-model="inputModels"
                                    @click="changeAppTotalAfterChoice()"
                                    >
                                    <label
                                    
                                    >{{item}}</label><br>
                                </div>
                                  
                            </template>
                        </div>

                        <div class="catalog__select-wrapper-window-make-model-box-model-part modelsAfterChoice"
             
                        >
                            <template 
                            v-for="item in modelsAfterChoice" :key="item"
                            >
                                <div class="catalog__model-cross-btn-block"
                                v-if="showAfterChoiceModels"
                                >
                                    <input type="checkbox" v-bind:value="item" v-model="inputModels"
                                    @click="changeAppTotalAfterChoice()"
                                    >
                                    <label
                                    >{{item}}</label><br>
                                </div>
                                  
                            </template>
                        </div>

                    </div>


                    
                    

                </div>
                
                
            </div>
            <div class="catalog__select-wrapper-arrow">
              
            </div>

            

       </div>


       <div class=" col catalog__total-bottom-show-box"
       v-if="showStartForm"
       >
        <template
        v-for="item in cars" :key="item"
        >
        <div class="catalog__total-bottom-show-box-selected finalTotalInitials"
        v-if="finalTotalInitials"
        >
        <p><i class="fa-solid fa-check catalog__icon-check" ></i>{{item.make}} {{item.model}} year - {{item.year}} price - {{item.price}}</p>
        
        </div> 

        </template> 
        


        <template
        v-for="item in finalChoiceBottomPart" :key="item"
        >
        <div class="catalog__total-bottom-show-box-selected finalTotalAfterChoice"
        v-if="finalTotalAfterChoice"
        >
        <p><i class="fa-solid fa-check catalog__icon-check" ></i>{{item.make}} {{item.model}} year - {{item.year}} price - {{item.price}}</p>
        
        </div> 

        </template>

        

            
                      
       </div> 

   
    </div>
</template>


<script>



const car = (id,make,model,bodytype,transmission,price,year,kilometers,image)=>({id,make,model,bodytype,transmission,price,year,kilometers,image})
const cars = [
    car(0,'Porsche','Panamera','Sedan','Automatic',50000,2012,30000,'../../assets/images/Panamera.jpg'),
    car(1,'Audi','A3','Sedan','Automatic',30000,2010,10000,'../../assets/images/AudiA3.jpg'),
    car(2,'Ford','Mondeo','Sedan','Automatic',20000,2013,19000,'../../assets/images/FordMondeo.jpg'),
    car(3,'Porsche','Porsche-911','Sedan','Automatic',60000,2011,33000,'../../assets/images/Porsche911.jpg'),
    car(4,'Audi','Q7','Hatchback','Automatic',52000,2018,15000,'../../assets/images/AudiQ7.jpg'),
    car(5,'Ford','Electra','Sedan','Automatic',11000,2015,38000,'../../assets/images/FordElectra.jpg'),
    car(6,'Ford','Electra','Sedan','Automatic',15000,2017,40000,'../../assets/images/FordElectra1.jpg'),
    car(7,'Ford','Electra','Sedan','Automatic',12000,2016,45000,'../../assets/images/FordElectra2.jpg')
]

export default {
    name:'Makemodel-select',
    components: {

    },
    data () {
        return {
            
            cars:cars,
            makes:[],
            inputMakes:[],
            inputModels:[],
            arrowRightPartUp:false,
            arrowRightPartDawn:true,
            showInitialModels:true,
            showAfterChoiceModels:false,
            showStartForm:false,
            finalTotalInitials:true,
            finalTotalAfterChoice:false,
      
         
            
            
            
            
            

            
            
            
        }
    
    },
    methods:{
        formAppearance () {
            if (this.showStartForm) {
                this.arrowRightPartUp = true
                this.arrowRightPartDawn = false
                this.showInitialModels=true
                this.showAfterChoiceModels=false
                this.makes = cars
                this.inputMakes.splice(0)
             
               
              
              
            } else {
                this.arrowRightPartUp = false
                this.arrowRightPartDawn = true
                this.makes = []
                this.inputModels.splice(0)
                this.finalChoiceBottomPart.splice(0)
                this.finalTotalInitials=true
                this.finalTotalAfterChoice=false
             
                          
            }
            
        },
        changeAppModelsToInput() {
          
                this.showInitialModels=false
                this.showAfterChoiceModels=true
                this.finalChoiceBottomPart.splice(0)
                this.inputModels.splice(0)       
        },
        changeAppTotalAfterChoice () {
            this.finalTotalInitials = false
            this.finalTotalAfterChoice = true
        },
       
        
  
    
    },
    watch:{
        
        


    },

       
    computed:{
        makesInitialLeftPartComp () {
            let a = []
            for (let i = 0;i<this.makes.length; i++) {
                let b = this.makes[i].make
                a.push(b)
                a = [...new Set(a)]
            }
            return a
        },
        modelInitialsRightPartComp () {
            let a = []
            for (let i = 0;i<this.makes.length; i++) {
                let b = this.makes[i].model
                a.push(b)
                a = [...new Set(a)]
            }
            return a
        },
        modelsAfterChoice () {
            let a = []
            for (let i = 0;i<this.inputMakes.length; i++) {
                let b = this.inputMakes[i]
                let c = this.makes.filter(el=>el.make===b)
                for (let i = 0; i<c.length; i++) {
                    let k = c[i].model
                    a.push(k)
                    a = [...new Set(a)]
                }
                
                
            }
            return a
        },
        finalChoiceBottomPart () {
            let a = []
            for (let i = 0; i<this.inputModels.length; i++) {
                let b = this.inputModels[i]
                let k = this.makes.filter(el=>el.model===b)
                for (let i = 0; i<k.length; i++){
                    let m = k[i]
                    a.push(m)
                    a = [...new Set(a)]
                }
                
            }
            return a
        }


        

            
    
    
            
       
    }

        
       
        
        
        

        
              
    
    
    
  
    
}
</script>

<style lang="scss">
@import '@/assets/varmix.scss';

.catalog {
    p{
        margin: 0;
    }

		&__title {
            width: 100%;
            border-width:2px;
            border-style: solid;
            border-color: #000;
            display: flex;
            justify-content: space-between;
            align-items: center;
            
		}

		&__title-text {
            
            display: inline-block;
            background: aqua;
		}

	

        &__calc-li-none {
            display: none;
        }

        &__show-box {
            border-width:2px;
            border-style: solid;
            border-color: #000;
            display: flex;
            flex-wrap: wrap;
        }

        &__select-wrapper-window-make-model-box {
            border-width:2px;
            border-style: solid;
            border-color: #000;
            display: flex;
		}

		&__select-wrapper-window-make-model-box-make-part {
            border-width:2px;
            border-style: solid;
            border-color: #000;
            width: 50%;
            p{
                display: flex;
                align-items: center;
            }
		}

		&__select-wrapper-window-make-model-box-model-part {
            border-width:2px;
            border-style: solid;
            border-color: #000;
           
		}
        &__model-cross-btn-block {
            display: flex;
            align-items: center;
        }
        &__model-cross-btn-block-btn {
            border: none;
        }
        &__total-bottom-show-box {
            display: flex;
            align-items: center;
            width: 100%;
            flex-wrap: wrap;
            border-width:2px;
            border-style: solid;
            border-color: #000;
            p {
                margin: 0;
                display: flex;
                align-items: center;
            }
        }
        &__icon-check{
            padding-left: 7px;
            padding-right: 2px;
            cursor: pointer;
            &:hover {
                color: red;
              
            }
        }
        &__arrow-box {
            height: 30px;
            width: 30px;
            border-width:2px;
            border-style: solid;
            border-color: #000;
            position: relative;
        }
        &__title-arrow {
            position:absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            
        }
        &__uniqmake-models-box {
            display: flex;
            align-items: center;
        }
        &__arrows-up-down {
            padding: 5px;
            cursor: pointer;
        }
        &__pointer{
            cursor: pointer;
        }
        &__total-bottom-show-box-inputSelected {
            background-color: red;
        }
        &__right-part-models-box {
            width: 50%;
        }

        





}
.active {
    color: red;
    font-weight: 900;
}











    
</style>