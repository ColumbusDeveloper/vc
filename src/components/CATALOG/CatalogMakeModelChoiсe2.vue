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
                            v-for="(itemMake,index) in makesList" :key="index"
                            >
                                
                                <div class="catalog__uniqmake-models-box"
                                
                                > 
                                    <input type="checkbox" v-bind:value="itemMake" v-model="inputModels">
                                    <label
                                    @click="addToInputModelsArr(itemMake),changeModelsSource()"
                                    >{{itemMake}}</label><br>
                                </div>
                              
                                
                            </template> 
                    </div>

                    <div class="catalog__select-wrapper-window-make-model-box-model-part modelsSource"
                    v-if="showModelsSource"
                    >
                            <template 
                            v-for="itemModel in modelsList" :key="itemModel"
                            >
                                <div class="catalog__model-cross-btn-block">
                                    <input type="checkbox" v-bind:value="itemModel" v-model="inputSelectedCars">
                                    <label>{{itemModel}}</label><br>
                                </div>
                                  
                            </template>
                    </div>
                    <div class="catalog__select-wrapper-window-make-model-box-model-part inputModelsList"
                    v-if="showInputModelsSource"
                    >
                            <template 
                            v-for="inputItemModel in inputModelsList" :key="inputItemModel"
                            >
                                <div class="catalog__model-cross-btn-block">
                                    <input type="checkbox" v-bind:value="inputItemModel" v-model="inputSelectedCars">
                                    <label>{{inputItemModel}}</label><br>
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

                > 
                <i class="fa-solid fa-xmark catalog__icon-cross"
                
                ></i>  

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
            
            cars:cars,
            makes:[],
            models:[],
            inputModels:[],
            selectedCars:[],
            inputSelectedCars:[],
            arrowRightPartUp:false,
            arrowRightPartDawn:true,
            showModelsSource:true,
            showInputModelsSource:false,
            
            
            
            
            

            
            
            
        }
    
    },
    methods:{
        formAppearance () {
            if (this.showStartForm) {
                this.arrowRightPartUp = true
                this.arrowRightPartDawn = false
                this.makes = cars
                this.models = cars
                this.selectedCars = cars
            } else {
                this.arrowRightPartUp = false
                this.arrowRightPartDawn = true
                this.makes = []
                this.models = []
                this.selectedCars = []
                this.showModelsSource = true
                this.showInputModelsSource = false
                this.inputModelsList = []
                this.inputModels = []
            }
            
        },
        changeModelsSource() {
            if (this.inputModelsList.length !=0) {
                this.showModelsSource = false
                this.showInputModelsSource = true
            } else {
                this.showModelsSource = true
                this.showInputModelsSource = false
            }
        },

        addToInputModelsArr(itemMake) {
            
            this.inputModels.push(itemMake)

        }
        

        

        

        
    },

       
    computed:{
        makesList () {
            let a = []
            for (let i = 0; i<this.makes.length; i++) {
                let b = this.makes[i].make
                a.push(b)
                a = [...new Set(a)]
            }
            return a 
        },
        modelsList () {
            let a = []
            for (let i = 0; i<this.models.length; i++) {
                let b = this.models[i].model
                a.push(b)
                a = [...new Set(a)]
            }
            return a 
        },
        inputModelsList () {
            let a = []
            let k = []
            for (let i = 0; i<this.inputModels.length; i++) {
                let b = this.inputModels[i]
                k = this.cars.filter(el=>el.make===b)
                for (let i = 0; i<k.length; i++) {
                let s = k[i].model
                a.push(s)
                a = [...new Set(a)]
                }
            }
            
            return a 
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