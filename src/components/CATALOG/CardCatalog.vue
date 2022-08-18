<template>
    <div class="make-model">

        <div class="make-model__btn-arrow-box">
            <div class="make-model__nameBtn" @click="form=!form,getStarted()" >Make, Model</div>
            <div class="make-model__arrow-box" @click="form=!form,getStarted()">
                <div class="make-model__arrow-Up"><i class="fa-solid fa-angle-up" v-if="form"></i></div>
                <div class="make-model__arrow-Down"><i class="fa-solid fa-angle-down" v-if="form===false"></i></div>
            </div>
        </div>

        <div class="make-model__form"
        v-if="form" 
        >
            <div class="make-model__form-show-box">
                
                    <div class="make-model__choice-form"
                    v-for="(value, name, index) in object" :key="index" 
                    >
                    
                       
                        <input type="checkbox" v-bind:value="name" 
                        v-model="originalMakes"     
                        @change="deleteAddItemFromMakes(name)"
                        
                        >

                        <label class="make-model__label">{{name}}{{findModels(name)}}</label>
                    
                            <div class="make-model__choice-form-models"
                            v-for="item in findModelsComp" :key="item"
                            @change="deleteAddItemFromModels(name,item)"
                            >
                                <input type="checkbox" v-bind:value="item" v-model="models">
                                <label class="make-model__label">{{item}}</label>
                            </div>


                    
                
                    </div>

            </div>
                
        </div>

    </div>

</template>


<script>
    

    

    export default {
        name: 'Makemodel-select',
        props:['catalogpropscars'],
        components: {

        },
        data() {
            return {

                cars: this.catalogpropscars,
                form: false,
                originalMakes:[],
                makes:[],
                varModels:[],
                models:[], 
              


                object: {
                Porsche: 'Porsche',
                Audi: 'Audi',
                Ford: 'Ford'
                }

                
          

            }

        },
        methods: {
            
            getStarted() {
                
                for (let i = 0; i<this.cars.length; i++) {
                let a = this.cars[i].make
                let b = this.cars[i].model
                this.models.push(b)
                this.models = [...new Set(this.models)]  
                this.originalMakes.push(a)
                this.originalMakes = [...new Set(this.originalMakes)]        
                }
            },

           
           deleteAddItemFromMakes(val) {
                let b = val
                let z = this.makes.findIndex(el=>el===b)
                console.log(z);
                let s = this.cars.filter(el=>el.make.indexOf(b)>-1)
                if (s!==[]) {
                    
                    for (let i = 0; i<s.length; i++) {
                        let m = s[i].model
                        let g = this.models.findIndex(el=>el===m)
             
                            if (g!=-1) { 
                                this.models.splice(g,1)
                                this.originalMakes.splice(z,0,1)
                               
                            } else {
                                this.models.splice(g,0,m)
                                this.originalMakes.splice(z,0,1)
                            }                    
                    }
                }
            },

           deleteAddItemFromModels(make,model) {
                let a = make
                let f = model
                let d = this.models.includes(f)
                if (d) {
                    this.originalMakes.push(a)
                    this.originalMakes = [...new Set(this.originalMakes)]
                }    else {
                    let w = this.originalMakes.findIndex(el=>el===a)
                    if (w>-1) {
                        this.originalMakes.splice(w,1)
                    }
                  
                    console.log(w); 
                }
                                         
           },


           findModels(valCar) {
                this.varModels = valCar        
            },


                               







           
                                   
        },
        created(){
           
            for (let i = 0; i<this.cars.length; i++) {
            let a = this.cars[i].make
            let b = this.cars[i].model
            this.models.push(b)
            this.models = [...new Set(this.models)]  
            this.originalMakes.push(a)
            this.originalMakes = [...new Set(this.originalMakes)]  
            this.makes.push(a)
            this.makes = [...new Set(this.makes)]           
            }

            
                    
        },
        watch: {

            catalogpropscars (val) {
                this.cars=val
            }


        },


        computed: {
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

		&__form-show-box {
		}

		&__choice-form {
		}

		&__choice-form-models {
            padding-left: 13px;
		}

        &__label {
            padding-left: 5px;
        }
}






</style>