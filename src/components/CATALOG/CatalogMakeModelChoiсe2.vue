<template >
    <div class="catalog">
        
     
       <div class="catalog__title" 
       
       
       >
       
                    <p class="catalog__title-text"
                    @click="showAutoMake"
            
                    >Make, Model</p> 

                    <div class="catalog__arrow-box">

                        <span class="catalog__title-arrow catalog__title-arrow-up"
                        v-if="arrowRightPartUp"
                        ><i class="fa-solid fa-chevron-up catalog__arrows-up-down"></i></span>

                        <span class="catalog__title-arrow catalog__title-arrow-down"
                        @click="showAutoMake"
                        v-if="arrowRightPartDawn"
                        ><i class="fa-solid fa-chevron-down catalog__arrows-up-down"></i></span>

                    </div>

                    

                    
       
       </div>

       <div class="catalog__select-wrapper"
     
       >

            <div class="catalog__select-wrapper-window">
                <div class="col catalog__select-wrapper-window-make-model-box">

                    <div class="catalog__select-wrapper-window-make-model-box-make-part">
                            <template
                            v-for="carMakeUniq in carsMakeUniqs" :key="carMakeUniq"
                            >
                                
                                <div class="catalog__uniqmake-models-box"> 

                                    <i class="fa-solid fa-xmark catalog__icon-cross"
                                    @click="removeFromFinalCustomerChoice(carMakeUniq)"
                                    ></i>

                                    <p class="catalog__pointer"
                                    @click="set(carMakeUniq)"
                                    >{{carMakeUniq}}</p>
                                    

                                </div>
                              
                                
                            </template> 
                    </div>

                    <div class="catalog__select-wrapper-window-make-model-box-model-part">
                            <template 
                            
                            >
                                <div class="catalog__model-cross-btn-block">
                                    <button class="catalog__model-cross-btn-block-btn">
                                        
                                        <div
                                        
                                    
                                        >
                                        <i class="fa-solid fa-xmark catalog__icon-cross"
                       
                                        ></i>
                                        </div>
                                         

                                        
                                       
                                        
                                        <!-- <i class="fa-solid fa-check " ></i> -->
                                        
                                      
                                    </button>
                                        
                                    <div class="catalog__model-cross-btn-block-models catalog__pointer"
                 
                                    >
                       
                                    </div>

                                </div>
                                  
                            </template>
                    </div>

                </div>
                
                
            </div>
            <div class="catalog__select-wrapper-arrow">
              
            </div>

            

       </div>


       <div class=" col catalog__total-bottom-show-box">
                <p class="catalog__pointer"
                v-for="(carsToShowAtFirst,index) in carsToShowAtFirsts" :key="index"
                > 
                <i class="fa-solid fa-xmark catalog__icon-cross"
                
                ></i>  
                {{carsToShowAtFirst.make}} {{carsToShowAtFirst.model}} year - {{carsToShowAtFirst.year}} price - {{carsToShowAtFirst.price}}
                </p>
       
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
            
            cars:[],
            carsToShowAtFirsts:[],
            removeFromCustomerChoiceWithMake:[],
            carsMakeUniqs:[],
            arrowRightPartUp:false,
            arrowRightPartDawn:true,
            makeCustomerChoice:[],
            
            
        }
    
    },
    methods:{

        showAutoMake () {
            this.cars = cars
            this.carsToShowAtFirsts = this.cars 
            let a = []
            for (let i = 0; i<this.cars.length; i++) {
                let b = this.cars[i].make
                a.push(b)
                a = [...new Set(a)]
            }
            this.carsMakeUniqs = a   
        },
        set(carMakeUniq) {
            this.makeCustomerChoice.push(carMakeUniq)
            this.makeCustomerChoice = [...new Set(this.makeCustomerChoice)]
            this.carsToShowAtFirsts = this.allAutoAfterCustomerChoices
        },
        removeFromFinalCustomerChoice(value) {     
            this.removeFromCustomerChoiceWithMake.push(value)
            this.removeFromCustomerChoiceWithMake = [...new Set(this.removeFromCustomerChoiceWithMake)]
            this.carsToShowAtFirsts = this.allAutoAfterCustomerChoices
        }
        
        
        
       
       
       
       
      
    },

       
    computed:{
        
        

        allAutoAfterCustomerChoices () {
            let f = []
    
            for (let i = 0; i<this.makeCustomerChoice.length; i++) {
                let a = this.makeCustomerChoice[i]
                let m = this.cars.filter(el=>el.make===a)
                for (let i = 0; i<m.length; i++){
                    let v = m[i]
                    f.push(v)
                }
            }
            for (let i = 0;  i<this.removeFromCustomerChoiceWithMake.length; i++) {
      
                let d = this.removeFromCustomerChoiceWithMake[i]
                
                let r = f.findIndex(el=>el.make===d)
                f.splice(r,1)
            }
         
            
            return f     
        }
              
    
    },
    
  
    
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
            width: 50%;
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
        &__icon-cross{
            padding-left: 5px;
            padding-right: 5px;
            cursor: pointer;
            &:hover {
                color: red;
                font-size: 30px;
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

        





}
.active {
    color: red;
    font-weight: 900;
}











    
</style>