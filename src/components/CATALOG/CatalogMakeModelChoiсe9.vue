<template>
    <div class="make-model"
   
    >
        

        <div class="make-model__btn-arrow-box">
            <div class="make-model__nameBtn" @click="form=!form,getStarted()" >Make, Model</div>
            <div class="make-model__arrow-box" @click="form=!form,getStarted()">
                <div class="make-model__arrow-Up"><i class="fa-solid fa-angle-up" v-if="form"></i></div>
                <div class="make-model__arrow-Down"><i class="fa-solid fa-angle-down" v-if="form===false"></i></div>
            </div>
        </div>

        

        <div class="make-model__form"
        v-if="form" 
        @click="passToParentComp()"
      
        >
            <div class="make-model__form-show-box">
                
                    <div class="make-model__choice-form"
                    v-for="(value, name, index) in makesobject" :key="index" 
                    
                    >
                        <div
                        @click="parentInputClick(name)"

                        >
                        <span class="make-model__form-show-parent-name">
                        <i class="fa-solid fa-xmark activeNone" :class="{activeCrossModel:this.statusofparent.includes(name)}"></i>
                        <i class="fa-solid fa-check activeNone" :class="{activeCrossModel:!this.statusofparent.includes(name)}"></i>
                        {{name}}{{findModels(name)}}</span>
                        </div>          
                                   
                            <div class="make-model__choice-form-models"
                            v-for="(model,index) in findModelsComp" :key="index"
                            >
                                <div
                                @click="daughterInputClick(model,make)"
                                >
                                <span class="make-model__form-show-parent-name">
                                <i class="fa-solid fa-xmark activeNone" :class="{activeCross:this.statusofdaughter.includes(model)}"></i>
                                <i class="fa-solid fa-check activeNone" :class="{activeCross:!this.statusofdaughter.includes(model)}"></i>
                                {{model}}</span>
                                </div>
                                                              
                            </div>
                        
                    </div>
                    
            {{statusofparent}} {{statusofdaughter}} {{findModels(name)}}
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
                id:[],
                varModels:[],
                models:[], 
                statusofparent:[],
                statusofdaughter:[],
              


                makesobject: {
                Porsche: 'Porsche',
                Audi: 'Audi',
                Ford: 'Ford'
                },
                
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
            passToParentComp() {
                this.$emit('changeovers', this.id)
             
            },
            
           findModels(valCar) {
                this.varModels = valCar 
              
            },
            
            parentInputClick(make) {  
                if(!this.statusofparent.includes(make)) {
                    let x = []
                    x.unshift(make) 
                    this.statusofparent.push(x[0])
                    this.statusofparent = [...new Set(this.statusofparent)] 



                    let values = Object.values(this.statusofparent)      
                    values.forEach(el=>{
                        let s = el
                        let w = []
                        let f = this.cars.filter(el=>el.make===s)
                        f.forEach(el=>{
                            let z = el
                            w.push(z)
                        })
                        w.forEach(el=>{
                            let k = el.model
                            this.statusofdaughter.push(k)
                            this.statusofdaughter = [...new Set(this.statusofdaughter)]
                        })                   
                    })


                           
                } else if (this.statusofparent.includes(make)) {
                    let v = []
                    v.unshift(make) 
                    let d = this.statusofparent.indexOf(v[0])
                    this.statusofparent.splice(d,1) 


                }    

                
                
            },

            daughterInputClick(model,make) {
                console.log(model,make);
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
            },
            
           
            
            




          
            

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
            // dot () {
            //     let a = []
            //     let b = this.st
               
            //     this.statusofdaughter.forEach(el=>{
            //         let b = el
            //         a.push(b)
            //     })
            //     a.forEach(el=>{
            //         let g = el
            //         let s = this.cars.filter(el=>el.make===g)
            //         s.forEach(el=>{
            //             let q = el.model
            //             b.push(q)
            //         })
                    
            //     })

            //     b = [...new Set(b)]
            //     return b
            // }
           
            

        }



    }
</script>

<style lang="scss">
    @import '@/assets/varmix.scss';
   .make-model {
    display: flex;
    flex-direction: column;

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

        &__form-show-parent-name {
            display: flex;
            align-items: center;
        }


        
}
.activeNone {
    display: none;
}
.activeCross {
    display: block;
}
.activeCrossModel {
    display: block;
}






</style>