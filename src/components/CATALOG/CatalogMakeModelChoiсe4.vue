<template>
    <div class="make-model">

        <div class="make-model__btn-arrow-box">
            <div class="make-model__nameBtn" @click="form=!form,getID()" >Make, Model</div>
            <div class="make-model__arrow-box" @click="form=!form,getID()">
                <div class="make-model__arrow-Up"><i class="fa-solid fa-angle-up" v-if="form"></i></div>
                <div class="make-model__arrow-Down"><i class="fa-solid fa-angle-down" v-if="form===false"></i></div>
            </div>
        </div>
        <div class="make-model__form"
        v-if="form" 
        >
            <div class="make-model__prev-make-model-box">
                <div class="make-model__prev-make-model-box-add">
                    <template
                    v-for="(itemAdd,index) in inputAdd" :key="index"
                    >
                        <div class="make-model__prev-make-model-box-checked">
                            <input type="checkbox" 
                            v-bind:value="itemAdd "
                            @click="setItemAddToInputDelete(itemAdd,index)"
                            v-model="checkboxAdd" 
                            @change="getStatus()"
                            >
                            <label class="make-model__prev-make-model-box-checked-label">{{itemAdd}}</label><br>
                            
                           
                        </div>

                    </template>
                </div>

                
                <div class="make-model__prev-make-model-box-delete">
                    <template
                    v-for="itemDel in inputDelete" :key="itemDel"
                    >
                        <div class="make-model__prev-make-model-box-checked">
                            <input type="checkbox" 
                            v-bind:value="itemDel"
                            v-model="inputDelete"
                      
                            >
                            <label></label><br>
                        </div>

                    </template>
                </div>
                

                 


            </div>
        
                

                

                

                <!-- <div class="make-model__final-collection" 
                v-for="(item) in finalMakeModels" :key="item.id"
                >
                <div class="make-model__final-collection-item-box"
                >
                    <input id="in" type="checkbox" checked="checked" 
                    v-bind:value="item"
                    v-model="finalMakeModels" 
                    @click="setFinal(item.id,$event)"
                    >                 
                    <label>{{item.make}} {{item.model}} year - {{item.year}} price - {{item.price}}</label><br>
                </div>
                
                </div> -->
                


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
                inputAdd:[],
                inputDelete:[],  
                checkboxAdd: false,
             

                
          

            }

        },
        methods: {
            
           setItemAddToInputDelete(itemAdd,index) {
                this.inputDelete.splice(index,0,itemAdd)
                this.inputDelete = [...new Set(this.inputDelete)]    
           },
           setCheckboxAdd () {
               return this.checkboxAdd = false
           },
            getStatus(){
                this.checkboxAdd = false
            }              
        },
        created(){
           
                for (let i = 0; i<this.cars.length; i++) {
                let a = this.cars[i].make
                this.inputDelete.push(a)
                this.inputDelete = [...new Set(this.inputDelete)]          
                }
                for (let i = 0; i<this.cars.length; i++) {
                let a = this.cars[i].make
                this.inputAdd.push(a)
                this.inputAdd = [...new Set(this.inputAdd)] 
                }
               
        },
        watch: {




        },


        computed: {
           
            

        }



    }
</script>

<style lang="scss">
    @import '@/assets/varmix.scss';
    .make-model {

		&__btn-arrow-box {
            display: flex;
            align-items: center;
		}

		&__nameBtn {
		}

		&__arrow-box {
		}

		&__arrow-Up {
		}

		&__arrow-Down {
		}

		&__form {
		}

        &__prev-make-model-box {
            display: flex;
        }

        &__prev-make-model-box-add {
         
        }

        &__prev-make-model-box-delete {
            
        }
}


</style>