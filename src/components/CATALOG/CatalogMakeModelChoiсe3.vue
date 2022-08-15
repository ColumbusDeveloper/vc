<template>
    <div class="make-model">

        <div class="make-model__btn-arrow-box">
            <div class="make-model__nameBtn" @click="form=!form,startDemoOfFinalArr()" >Make, Model</div>
            <div class="make-model__arrow-box" @click="form=!form,startDemoOfFinalArr()">
                <div class="make-model__arrow-Up"><i class="fa-solid fa-angle-up" v-if="form"></i></div>
                <div class="make-model__arrow-Down"><i class="fa-solid fa-angle-down" v-if="form===false"></i></div>
            </div>
        </div>
        <div class="make-model__form"
        v-if="form" 
        >
                <div class="make-model__list">
                        <template
                        v-for="(car,index) in carsUniqMakes" :key="index"
                        >
                        <div class="make-model__make"
                        
                        >
                            {{car}} {{findModels(car)}}
                            <div class="make-model__model"
                            v-for="item in findModelsComp" :key="item"
                            >
                            {{item}}
                            </div>
                        </div>
                        </template>
                </div>

                <div class="make-model__final-collection" 
                v-for="(item) in finalMakeModels" :key="item.id"
                >
                <div class="make-model__final-collection-item-box"
                >
                    <input id="in" type="checkbox" checked="checked" 
                    v-bind:value="item"
                    v-model="finalMakeModels" 
                    @click="setFinal(item.id)"
                    >                 
                    <label>{{item.make}} {{item.model}} year - {{item.year}} price - {{item.price}}</label><br>
                </div>
                
                </div>
                


        </div>







    </div>
</template>


<script>
    const car = (id, make, model, bodytype, transmission, price, year, kilometers, image) => ({
        id,
        make,
        model,
        bodytype,
        transmission,
        price,
        year,
        kilometers,
        image
    })
    const cars = [
        car(0, 'Porsche', 'Panamera', 'Sedan', 'Automatic', 50000, 2012, 30000, '../../assets/images/Panamera.jpg'),
        car(1, 'Audi', 'A3', 'Sedan', 'Automatic', 30000, 2010, 10000, '../../assets/images/AudiA3.jpg'),
        car(2, 'Ford', 'Mondeo', 'Sedan', 'Automatic', 20000, 2013, 19000, '../../assets/images/FordMondeo.jpg'),
        car(3, 'Porsche', 'Porsche-911', 'Sedan', 'Automatic', 60000, 2011, 33000,'../../assets/images/Porsche911.jpg'),
        car(4, 'Audi', 'Q7', 'Hatchback', 'Automatic', 52000, 2018, 15000, '../../assets/images/AudiQ7.jpg'),
        car(5, 'Ford', 'Electra', 'Sedan', 'Automatic', 11000, 2015, 38000, '../../assets/images/FordElectra.jpg'),
        car(6, 'Ford', 'Electra', 'Sedan', 'Automatic', 15000, 2017, 40000, '../../assets/images/FordElectra1.jpg'),
        car(7, 'Ford', 'Electra', 'Sedan', 'Automatic', 12000, 2016, 45000, '../../assets/images/FordElectra2.jpg')
    ]

    export default {
        name: 'Makemodel-select',
        components: {

        },
        data() {
            return {

                cars: cars,
                form: false,
                varModels:[],
                varCross:[],
                varCrossStr:'',
                finalMakeModels:[],
                finalMakeModelsToServer:[],
                












            }

        },
        methods: {
            startDemoOfFinalArr() {
               
                for (let i = 0; i<this.cars.length; i++) {
                    let a = this.cars[i]
                    this.finalMakeModels.push(a)
                    this.finalMakeModels = [...new Set(this.finalMakeModels)]
                }
                for (let i = 0; i<this.finalMakeModels.length; i++) {
                    let a = this.finalMakeModels[i]
                    this.finalMakeModelsToServer.push(a)
                    this.finalMakeModelsToServer = [...new Set(this.finalMakeModelsToServer)]
                }
                
            },

            findModels(valCar) {
                this.varModels = valCar             
            },

            setFinal(val) {
                let a = val     
                let b = this.finalMakeModelsToServer.findIndex(el=>el.id===a)
                console.log(a)
                this.finalMakeModelsToServer.splice(b,1)
             
                this.finalMakeModels.push(val) 
                
                                        
            },
            
            
        },
        watch: {




        },


        computed: {
            carsUniqMakes () {
              let a =[]
              this.cars.forEach(car=>{
                let b = car.make
                a.push(b)
              })
              a = [...new Set(a)]
              return a      
            },
            findModelsComp () { 
                let m = []         
                let a = this.varModels  
                let b = this.cars.filter(el=>el.make.indexOf(a)>-1)
                b.forEach(el=>{
                    let s = el.model
                    m.push(s)
                })
                m = [...new Set(m)]
                return m
            },
                  


        }



    }
</script>

<style lang="scss">
    @import '@/assets/varmix.scss';
    .make-model {

		&__btn-arrow-box {
            display: flex;
            align-items: center;
            justify-content: space-between;
		}

		&__nameBtn {
            font-weight: 900;
		}

		&__arrow-box {
		}

		&__arrow-Up {
		}

		&__arrow-Down {
		}

        &__make {
            font-weight: 700;
            color: blue;
        }

        &__model {
            color: red;
        }

        &__final-collection-item-box {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
        }

        &__icon-cross {
            padding-left: 5px;
            padding-right: 3px;
        }

        
}

.crossClicked {
    font-size: 2rem;
}


</style>