<!-- eslint-disable vue/no-unused-components -->
<template>
    <div class="ma-mo"
  
    >
    

        <div class="ma-mo__detailed-search-box">

            
            <div class="ma-mo__global-search-header">
                    <p class="ma-mo__global-search-header-stable">Detailed search</p>
                    <p class="ma-mo__global-search-header-changeable">Clear filters</p>
            </div>   

            <div class="ma-mo__detailed-search-box-calk-container" @click="setunduwarning">
                    <div class="ma-mo__detailed-search-box-doubleinprange-price inp-container"  :class="{activeinpbody:bodyform,activecross:bodyinpformcross}">
                        <div class="ma-mo__open-arrow-box arr-box">
                            <p class="ma-mo__open-arrow-box-text arr-box-text">
                                Make,Model
                            </p>
                            <div class="ma-mo__open-arrow-box-arrows arr-box-arrows-box" @click="getStartedBodyType()">
                                <div class="ma-mo__open-arrow-box-arrows-arrow-Up arr-box-arrows-box-el1"><i class="fa-solid fa-angle-up" v-if="bodyform"></i></div>
                                <div class="ma-mo__open-arrow-box-arrows-arrow-Down arr-box-arrows-box-el2"><i class="fa-solid fa-angle-down" v-if="bodyform===false"></i></div>
                            </div>
                        </div>

                        <div class="ma-mo__detailed-search-box-doubleinprange-price-box inp-cont-box" v-if="bodyform">

                            

                            <div class="ma-mo__detailed-search-box-doubleinprange-price-input-box inp-box" v-if="bodyforminput">
    
                                <div class="bodymake">
                                    <span class="bodymake__text">Make</span>
                                    <div class="bodymake__input-box make" >
                                        <input type="text" v-model="modelsearchmake" id="make" @input="setBodyTypeShowOrderCars (),clearModel()"  placeholder="Search Make..." >
                                        <i class="fa-sharp fa-solid fa-magnifying-glass bodymake__input-box-glass"></i>
                                    </div>
                                </div>

                                <div class="bodymodel">
                                    <span class="bodymodel__text">Model</span>
                                    <div class="bodymodel__input-box">
                                        <input type="text" v-model="modelsearchmodel" id="model" @input="setBodyTypeShowOrderCars ()"  placeholder="Search Model..." class="bodymodel__input-box-inp">
                                        <i class="fa-sharp fa-solid fa-magnifying-glass bodymodel__input-box-glass"></i>
                                    </div>
                                </div>

                            </div>
                            <div class="ma-mo__detailed-search-box-inprange-input-box-closed-cross-on inp-box inp-box-cross-on" v-if="bodyinpformcross">

                                <cardbodydelete
                                v-for="car in calculatedcars" :key="car"
                                :carbody="car"
                                @deletedbodytoparent="deletedbodyitem=$event"
                                @click="addToMakeModelCalc()"
                                >


                                </cardbodydelete>
                                <div class="inp-box-cross-on-undo"
                                @click="addToMakeModelCalc()"
                                >
                                    <div class="inp-box-cross-on-undo__text-undo-box" v-if="this.deletedbodyitemhistory.length>0" @click="undobodycomponent" >
                                        <span class="inp-box-cross-on-undo__text-undo-box-text"  >UNDO</span> 
                                    </div>
                                    <div class="inp-box-cross-on-undo__text-statement-box">
                                        <span class="inp-box-cross-on-undo__text-statement-box-text">Click the arrow up right until the searchfield restarted</span>
                                    </div>  
                                </div>

                            </div>

                        </div>
                        
                    </div>

                    <div class="ma-mo__detailed-search-box-doubleinprange-price inp-container"  :class="{activeinptype:typeform,activecross:typeinpformcross}">
                        <div class="ma-mo__open-arrow-box arr-box">
                            <p class="ma-mo__open-arrow-box-text arr-box-text">
                                Body type
                            </p>
                            <div class="ma-mo__open-arrow-box-arrows arr-box-arrows-box" @click="getStartedType()">
                                <div class="ma-mo__open-arrow-box-arrows-arrow-Up arr-box-arrows-box-el1"><i class="fa-solid fa-angle-up" v-if="typeform"></i></div>
                                <div class="ma-mo__open-arrow-box-arrows-arrow-Down arr-box-arrows-box-el2"><i class="fa-solid fa-angle-down" v-if="typeform===false"></i></div>
                            </div>
                        </div>

                        <div class="ma-mo__detailed-search-box-doubleinprange-price-box inp-cont-box" v-if="typeform">

                            

                            <div class="ma-mo__detailed-search-box-doubleinprange-price-input-box inp-box inp-box-type-inp" v-if="typeforminput">
    
                                <div class="inp-box-type-inp__trucks tib" @click="setTypeTRUCK">
                                    <i class="fa-solid fa-check inp-box-type-inp__trucks-icon tib__icon" :class="{visible:typetruck}"  ></i>                             
                                    <div class="inp-box-type-inp__trucks-img tib__img" ><img src="@/assets/images/Truck_icon.png" alt='truck'></div>
                                    <span class="inp-box-type-inp__trucks-text tib__text">Trucks</span>
                                </div>
                                <div class="inp-box-type-inp__suv tib" @click="setTypeSUV">
                                    <i class="fa-solid fa-check inp-box-type-inp__suv-icon tib__icon"  :class="{visible:typesuv}"></i>                             
                                    <div class="inp-box-type-inp__suv-img tib__img" ><img src="@/assets/images/SUV_icon.png" alt='truck'></div>
                                    <span class="inp-box-type-inp__suv-text tib__text">SUV</span>
                                </div>
                                <div class="inp-box-type-inp__sedan tib" @click="setTypeSEDAN">
                                    <i class="fa-solid fa-check inp-box-type-inp__sedan-icon tib__icon"  :class="{visible:typesedan}"></i>                             
                                    <div class="inp-box-type-inp__sedan-img tib__img" ><img src="@/assets/images/Sedan_icon.png" alt='truck'></div>
                                    <span class="inp-box-type-inp__sedan-text tib__text">Sedan</span>
                                </div>
                                <div class="inp-box-type-inp__hatchback tib" @click="setTypeHATCHBACK">
                                    <i class="fa-solid fa-check inp-box-type-inp__hatchback-icon tib__icon"  :class="{visible:typehatchback}"></i>                             
                                    <div class="inp-box-type-inp__hatchback-img tib__img" ><img src="@/assets/images/Sedan_icon.png" alt='truck'></div>
                                    <span class="inp-box-type-inp__hatchback-text tib__text">Hatchback</span>
                                </div>
                                <div class="inp-box-type-inp__coupe tib" @click="setTypeCOUPE">
                                    <i class="fa-solid fa-check inp-box-type-inp__coupe-icon tib__icon"  :class="{visible:typecoupe}"></i>                             
                                    <div class="inp-box-type-inp__coupe-img tib__img" ><img src="@/assets/images/Coupe_icon.png" alt='truck'></div>
                                    <span class="inp-box-type-inp__coupe-text tib__text">Coupe</span>
                                </div>
                                <div class="inp-box-type-inp__convertiable tib" @click="setTypeCONVERTIABLE">
                                    <i class="fa-solid fa-check inp-box-type-inp__convertiable-icon tib__icon"  :class="{visible:typeconvertiable}"></i>                             
                                    <div class="inp-box-type-inp__convertiable-img tib__img" ><img src="@/assets/images/Convertiable_icon.png" alt='truck'></div>
                                    <span class="inp-box-type-inp__convertiable-text tib__text">Convertiable</span>
                                </div>
                                <div class="inp-box-type-inp__van tib" @click="setTypeVAN">
                                    <i class="fa-solid fa-check inp-box-type-inp__van-icon tib__icon" :class="{visible:typevan}"></i>                             
                                    <div class="inp-box-type-inp__van-img tib__img" ><img src="@/assets/images/Convertiable_icon.png" alt='truck'></div>
                                    <span class="inp-box-type-inp__van-text tib__text">VAN</span>
                                </div>

                               

                            </div>
                            <div class="ma-mo__detailed-search-box-inprange-input-box-closed-cross-on inp-box inp-box-cross-on" v-if="typeinpformcross">
                                
                                <catypedelete
                                v-for="car in typecollector" :key="car"
                                :cartype="car"
                                @deletedtypetoparent="deletedtypeitem=$event"
                                @click="addToMakeModelCalc()"
                                >


                                </catypedelete>
                                <div class="inp-box-cross-on-undo"
                                @click="addToMakeModelCalc()"
                                >
                                    <div class="inp-box-cross-on-undo__text-undo-box" v-if="this.deletedtypeitemhistory.length>0" @click="undotypecomponent" >
                                        <span class="inp-box-cross-on-undo__text-undo-box-text"  >UNDO</span> 
                                    </div>
                                    <div class="inp-box-cross-on-undo__text-statement-box">
                                        <span class="inp-box-cross-on-undo__text-statement-box-text">Click the arrow up right until the searchfield restarted</span>
                                    </div>  
                                </div>

                            </div>

                        </div>
                        
                    </div>

                    <div class="ma-mo__detailed-search-box-trans inp-container"  :class="{activeinptrans:transinpform}">
                        <div class="ma-mo__open-arrow-box arr-box">
                            <p class="ma-mo__open-arrow-box-text arr-box-text">
                                Transmission
                            </p>
                            <div class="ma-mo__open-arrow-box-arrows arr-box-arrows-box" @click="getStartedInpTrans()">
                                <div class="ma-mo__open-arrow-box-arrows-arrow-Up arr-box-arrows-box-el1"><i class="fa-solid fa-angle-up" v-if="transinpform"></i></div>
                                <div class="ma-mo__open-arrow-box-arrows-arrow-Down arr-box-arrows-box-el2"><i class="fa-solid fa-angle-down" v-if="transinpform===false"></i></div>
                            </div>
                        </div>

                        <div class="transmission-choice-block" v-if="transinpform" >

                            <div class="transmission-choice-block__checkboxes" v-if="transinpformcheckboxes" :class="{activeinptrans:transinpform}">
                                <div class="transmission-choice-block__checkboxes_item" >
                                    <div class="transmission-choice-block__checkboxes_item-icon-bloc" :class="{visible:automatictrans}">
                                        <i class="fa-solid fa-check transmission-choice-block__checkboxes_item-icon-bloc-icon"></i>
                                    </div>
                                    <input type="checkbox" checked class="transmission-choice-block__checkboxes_item-icon-bloc-input" id="checkbox-trans1" v-model="automatictrans">
                                    <label for="checkbox-trans1" class="transmission-choice-block__checkboxes_item-icon-bloc-input-label" @click="automaticModelChange">Automatic</label>
                                </div>
                                <div class="transmission-choice-block__checkboxes_item" >
                                    <div class="transmission-choice-block__checkboxes_item-icon-bloc" :class="{visible:manualtrans}">
                                        <i class="fa-solid fa-check transmission-choice-block__checkboxes_item-icon-bloc-icon"></i>
                                    </div>
                                    <input type="checkbox" checked class="transmission-choice-block__checkboxes_item-icon-bloc-input" id="checkbox-trans2" v-model="manualtrans">
                                    <label for="checkbox-trans2" class="transmission-choice-block__checkboxes_item-icon-bloc-input-label" @click="manualModelChange">Manual</label>
                                </div>                         
                            </div>

                            
                            <div class="transmission-choice-block__result" v-if="transinpformcross" :class="{activecross:transinpformcross}">
                                <div class="transmission-choice-block__result-item" v-if="automatictransinpformcross" @click="setTransModelAutomatic()">
                                    <i class="fa-solid fa-xmark transmission-choice-block__result-item-xmark"></i>
                                    <span class="transmission-choice-block__result-item-text">Automatic</span>
                                </div>
                                <div class="transmission-choice-block__result-item" v-if="manualtransinpformcross" @click="setTransModelManual()">
                                    <i class="fa-solid fa-xmark transmission-choice-block__result-item-xmark"></i>
                                    <span class="transmission-choice-block__result-item-text">Manual</span>
                                </div> 
                            </div>
                            

                        </div>
                        
                        
                    </div>

                    <div class="ma-mo__detailed-search-box-doubleinprange-price inp-container"  :class="{activeinpprice:pricedbinpform,activecross:priceinpformcross}">
                        <div class="ma-mo__open-arrow-box arr-box">
                            <p class="ma-mo__open-arrow-box-text arr-box-text">
                                Price
                            </p>
                            <div class="ma-mo__open-arrow-box-arrows arr-box-arrows-box" @click="getStartedInpPrice(),setunduwarningprice ()">
                                <div class="ma-mo__open-arrow-box-arrows-arrow-Up arr-box-arrows-box-el1"><i class="fa-solid fa-angle-up" v-if="pricedbinpform"></i></div>
                                <div class="ma-mo__open-arrow-box-arrows-arrow-Down arr-box-arrows-box-el2"><i class="fa-solid fa-angle-down" v-if="pricedbinpform===false"></i></div>
                            </div>
                        </div>

                        <div class="ma-mo__detailed-search-box-doubleinprange-price-box inp-cont-box" v-if="pricedbinpform">

                            <div class="ma-mo__detailed-search-box-doubleinprange-price-text-box inp-cont-box-content" v-if="pricenumstartpoints">
                                <div class="ma-mo__detailed-search-box-doubleinprange-price-text-box-min inp-cont-box-content-min">
                                    {{minpricerealnum[0]}} 
                                </div>

                                <div class="ma-mo__detailed-search-box-doubleinprange-price-text-box-max inp-cont-box-content-max">
                                    {{maxpricerealnum[0]}}
                                </div>
                            </div>

                            <div class="ma-mo__detailed-search-box-doubleinprange-price-input-box inp-box" v-if="priceinpforminput">

                                <doubleinprangeprice class="ma-mo__detailed-search-box-doubleinprange-price-elem inp-box-component"
                                :carspropsprice="cars"
                                @minpricedata="minprice=$event"
                                @maxpricedata="maxprice=$event"
                                @input="addToTestArrPrice(),addToMakeModelCalc()"
                                >

                                </doubleinprangeprice> 

                            </div>
                            <div class="ma-mo__detailed-search-box-inprange-input-box-closed-cross-on inp-box inp-box-cross-on" v-if="priceinpformcross">

                                <cardprice
                                v-for="car in calculatedcars" :key="car"
                                :carprice="car"
                                @deletedpricetoparent="deletedpriceitem=$event"
                                @click="setunduwarningprice (),addToMakeModelCalc()"
                                >


                                </cardprice>
                                <div class="inp-box-cross-on-undo"
                                @click="setunduwarningprice (),addToMakeModelCalc()"
                                >
                                    <div class="inp-box-cross-on-undo__text-undo-box" v-if="unduwarningprice" @click="undopricecomponent" >
                                        <span class="inp-box-cross-on-undo__text-undo-box-text" @click="setunduwarningprice (),addToMakeModelCalc()"  >UNDO</span> 
                                    </div>
                                    <div class="inp-box-cross-on-undo__text-statement-box">
                                        <span class="inp-box-cross-on-undo__text-statement-box-text">Click the arrow up right until the searchfield restarted</span>
                                    </div>  
                                </div>

                            </div>

                        </div>
                        
                    </div>

                    <div class="ma-mo__detailed-search-box-doubleinprange-year inp-container" :class="{activeinpyear:yeardbinpform,activecross:yearinpformcross}">

                        <div class="ma-mo__open-arrow-box">
                            <p class="ma-mo__open-arrow-box-text">
                                Year
                            </p>
                            <div class="ma-mo__open-arrow-box-arrows" @click="getStartedInpYear(),setunduwarningyear (),addToMakeModelCalc()">
                                <div class="ma-mo__open-arrow-box-arrows-arrow-Up"><i class="fa-solid fa-angle-up" v-if="yeardbinpform"></i></div>
                                 <div class="ma-mo__open-arrow-box-arrows-arrow-Down"><i class="fa-solid fa-angle-down" v-if="yeardbinpform===false"></i></div>
                            </div>
                        </div>
                       

                        <div class="ma-mo__detailed-search-box-doubleinprange-year-box inp-cont-box" v-if="yeardbinpform">

                            <div class="ma-mo__detailed-search-box-doubleinprange-year-text-box inp-cont-box-content" v-if="yearnumstartpoints">
                                <div class="ma-mo__detailed-search-box-doubleinprange-year-text-box-min inp-cont-box-content-min">
                                    {{minyearrealnum[0]}}
                                </div>

                                <div class="ma-mo__detailed-search-box-doubleinprange-year-text-box-max inp-cont-box-content-max">
                                    {{maxyearrealnum[0]}}
                                </div>
                            </div>

                            <div class="ma-mo__detailed-search-box-doubleinprange-year-input-box inp-box" v-if="yearinpforminput">

                                <doubleinprangeyear class="ma-mo__detailed-search-box-doubleinprange-year-elem inp-box-component"
                                :carspropsyear="cars"
                                @minyeardata="minyear=$event"
                                @maxyeardata="maxyear=$event"
                                @input="addToTestArrYear(),addToMakeModelCalc()"
    
                                >

                                </doubleinprangeyear> 

                            </div>
                            <div class="ma-mo__detailed-search-box-inprange-input-box-closed-cross-on inp-box inp-box-cross-on" v-if="yearinpformcross">

                                <cardyear
                                v-for="car in calculatedcars" :key="car"
                                :caryear="car"
                                @deletedyeartoparent="deletedyearitem=$event"
                                @click="setunduwarningyear (),addToMakeModelCalc()"
                                >


                                </cardyear>
                                <div class="inp-box-cross-on-undo"
                                @click="setunduwarningyear (),addToMakeModelCalc()"
                                >
                                    <div class="inp-box-cross-on-undo__text-undo-box" v-if="unduwarningyear" @click="undoyearcomponent" >
                                        <span class="inp-box-cross-on-undo__text-undo-box-text" @click="setunduwarningyear (),addToMakeModelCalc()"  >UNDO</span> 
                                    </div>
                                    <div class="inp-box-cross-on-undo__text-statement-box">
                                        <span class="inp-box-cross-on-undo__text-statement-box-text">Click the arrow up right until the searchfield restarted</span>
                                    </div>  
                                </div>

                            </div>

                        </div>


                    </div>

                    

                    <div class="ma-mo__detailed-search-box-inprange inp-container" :class="{activeinpkilo:kiloinpform,activecross:kiloinpformcross}">  

                        <div class="ma-mo__open-arrow-box">
                            <p class="ma-mo__open-arrow-box-text">
                                Kilometers
                            </p>
                            <div class="ma-mo__open-arrow-box-arrows" @click="getStartedInpKilo(),setunduwarningkilo (),addToMakeModelCalc()">
                                <div class="ma-mo__open-arrow-box-arrows-arrow-Up"><i class="fa-solid fa-angle-up" v-if="kiloinpform"></i></div>
                                 <div class="ma-mo__open-arrow-box-arrows-arrow-Down"><i class="fa-solid fa-angle-down" v-if="kiloinpform===false"></i></div>
                            </div>
                        </div>

                        <div class="ma-mo__detailed-search-box-inprange-box inp-cont-box inp-cont-box" v-if="kiloinpform">

                            <div class="ma-mo__detailed-search-box-inprange-box-text-box inp-cont-box-content" v-if="kilonumstartpoints">
                                <div class="ma-mo__detailed-search-box-inprange-text inp-cont-box-content-elem">
                                    {{maxkilorealnum[0]}}   or less
                                </div>

                            </div>

                            <div class="ma-mo__detailed-search-box-inprange-input-box inp-box" v-if="kiloinpforminput">

                                <inprange class="ma-mo__detailed-search-box-inprange-input-box-elem inp-box-component"
                                :carspropsinprange="cars"
                                @datafromsingleinput="kilocompdata=$event"
                                @input="addToTestArrKilo(),addToMakeModelCalc()"
                                >

                                </inprange> 

                            </div>

                            <div class="ma-mo__detailed-search-box-inprange-input-box-closed-cross-on inp-box inp-box-cross-on" v-if="kiloinpformcross" >

                                    <cardkilo
                                    v-for="(car,index) in calculatedcars" :key="car"
                                    
                                    :class="{arrfirstitem:index===this.calculatedcarskiloactualmaxvalindex}"
                                    :carkilo="car"
                                    @deletedkilotoparent="deletedkiloitem=$event"
                                    @click="setunduwarningkilo (),addToMakeModelCalc()"
                                  
                                    >
                                   

                                    </cardkilo>
                                    <div class="inp-box-cross-on-undo"
                                    @click="setunduwarningkilo (),addToMakeModelCalc()"
                                  
                                    >
                                        <div class="inp-box-cross-on-undo__text-undo-box" v-if="unduwarning" @click="undokilocomponent" >
                                            <span class="inp-box-cross-on-undo__text-undo-box-text" @click="setunduwarningkilo (),addToMakeModelCalc()"  >UNDO</span> 
                                        </div>
                                        <div class="inp-box-cross-on-undo__text-statement-box">
                                            <span class="inp-box-cross-on-undo__text-statement-box-text">Click the arrow up right until the searchfield restarted</span>
                                        </div>                                     
                                    </div>

                            </div>

                        </div>


                        
                    </div>

            </div>
            
            
                 
        </div>
        <div class="ma-mo__global-search-and-card-box">
                <div class="ma-mo__global-search">
                    <div class="ma-mo__global-search-item-left">
                        <div class="ma-mo__global-search-item-left-search-vertical-trigger">

                            <div class="ma-mo__global-search-item-left-search-vertical-trigger-icon" v-if="tabletfiltericonon" @click="togglecrossicon">
                                <img src="@/assets/images/vertical_filter_icon.png" alt="vertical_filter_icon" class="ma-mo__global-search-item-left-search-vertical-trigger-icon-img">
                            </div>
                            <div class="ma-mo__global-search-item-left-search-vertical-trigger-cross-icon" v-if="tabletcrosson" @click="togglefiltericon">
                                <img src="@/assets/images/Cross_1_part.png" alt="tablet-cross" class="ma-mo__global-search-item-left-search-vertical-trigger-cross-icon-part1">
                                <img src="@/assets/images/Cross_2_part.png" alt="tablet-cross" class="ma-mo__global-search-item-left-search-vertical-trigger-cross-icon-part2">
                            </div>
                            <div >
                                <span class="ma-mo__global-search-item-left-search-vertical-trigger-span">Search Filter</span>
                            </div>
                            
                        </div>
                        <div class="ma-mo__global-search-item-left-magnifying magtop" v-if="magnifyingglasson">
                            <input type="text" @input="magtopchangeshow" v-model="modelmagtop" placeholder="Find a dream car..." class="magtop__input">
                            <i class="fa-sharp fa-solid fa-magnifying-glass magtop__glass"></i>
                            <div class="magtop__show-window" v-if="modelmagtopComputed.length<10">
                                <magtopshowitem class="magtop__show-window-item"
                                v-for="(make,index) in modelmagtopComputed" :key="index"
                                :carmagtop="make"
                                @magtopsharedata ='setmagtopchoicearr'
                                @click="getIndexModelmagtopComputed(index)"
                                :clicked="magtopindexofckickedelement"
                                :index="index"
                                >

                                </magtopshowitem>
                            </div>
                        </div>
                         <div class="ma-mo__global-search-item-left-arrow magtoparrow " 
                         @click="magtopshare"
                         v-if="magnifyingglasson"
                         >
                            <img src="@/assets/images/Share.png" alt="share" class="magtoparrow__arr">
                         </div>
                        
                    </div>

                    <div class="ma-mo__global-search-item-right drophometopright" v-if="recommendationfilteron"> 

                        <div class="ma-mo__global-search-item-right-textbox drophometopright__textbox">
                            <span class="ma-mo__global-search-item-right-textbox-text drophometopright__textbox-text">Sorted by</span>
                        </div>

                        <div class="ma-mo__global-search-item-right-dropdown drophometopright__dropdown">

                            <div class="drophometopright__dropdown-textarrowbox">
                                <div class="drophometopright__dropdown-textarrowbox-text">
                                    <span class="drophometopright__dropdown-textarrowbox-text-span">{{droparr[0]}}</span>
                                </div>

                                <div class="drophometopright__dropdown-textarrowbox-arrowbox" @click="getStartedDropHomeTopRight()" ref="arrowbox">
                                    <div class="drophometopright__dropdown-textarrowbox-arrowbox-arrowup"><i class="fa-solid fa-angle-up"  v-if="dropform"></i></div>
                                    <div class="drophometopright__dropdown-textarrowbox-arrowbox-arrowdown"><i class="fa-solid fa-angle-down"  v-if="dropform===false"></i></div>
                                </div>

                            </div>

                            
                            <div class="drophometopright__dropdown-showbox " id="showbox" ref="dropdown" v-if="dropshowboxform">
                                <div class="drophometopright__dropdown-showbox-iteration "
                                v-for="(item,index) in droparr" :key="index"
                                
                                >
                                    <div class="drophometopright__dropdown-showbox-iteration-item "
                                    @click="getdropindex(index)"
                                    
                                    >
                                        {{item}}
                                    </div>
                            
                                </div>
                            </div>

                            

                        </div>
                        
                    </div>
                    
                   
                </div>

                <div class="ma-mo__card-box ma-mo__card-box-calc" v-if="showcalculated">
                    <card 
                    v-for="car in calculatedcars" :key="car"
                    :car="car"
                    >

                    </card>
                </div>

                <div class="ma-mo__card-box ma-mo__card-box-main-screen" v-if="showcars">
                    <ca
                    v-for="car in cars" :key="car"
                    :car="car"
                    >

                    </ca>
                </div >
                <div class="ma-mo__card-box ma-mo__card-box-main-screen" v-if="typeformon">
                    <catype
                    v-for="car in typeComputed" :key="car"
                    :car="car"
                    >

                    </catype>
                </div >
                <div class="ma-mo__card-box ma-mo__card-box-main-screen" v-if="magtopform">
                    <camag
                    v-for="car in modelmagtopComputedFinalShow" :key="car"
                    :car="car"
                    >

                    </camag>
                </div >

               
                
                

                



                
                
                
        </div>

        

        

                     
                
                    
        
          

    </div>

</template>


<script>


    import card from '@/components/CatalogNEW/CardCatalog.vue'
    import ca from '@/components/CatalogNEW/Card.vue'
    import cardkilo from '@/components/CatalogNEW/CardKilo.vue'
    import cardyear from '@/components/CatalogNEW/CardYear.vue'
    import cardprice from '@/components/CatalogNEW/CardPrice.vue'
    import cardbodydelete from '@/components/CatalogNEW/CardBodyDelete.vue'
    import doubleinprangeprice from '@/components/CatalogNEW/DoubleInputRangePrice.vue'
    import doubleinprangeyear from '@/components/CatalogNEW/DoubleInputRangeYear.vue'
    import inprange from '@/components/CatalogNEW/InputRange.vue'
    import catype from '@/components/CatalogNEW/CardTypeMain.vue'
    import catypedelete from '@/components/CatalogNEW/CardTypeDelete.vue'
    import magtopshowitem from '@/components/CatalogNEW/CardMagTop.vue'
    import camag from '@/components/CatalogNEW/CardMagTopMainShow.vue'

   
  
    

    export default {
        name: 'Catalog-component',
        props:['catalogpropscars'],
        components: {
            card,
            ca,
            cardkilo,
            cardyear,
            cardprice,
            cardbodydelete,
            doubleinprangeprice,
            doubleinprangeyear,
            inprange,
            catype,
            catypedelete,
            magtopshowitem,
            camag,
 
        },
        data() {
            return {
                reference:[],
                cars:this.catalogpropscars,
                allid:[],//все имеющиеся в массиве cars id
                
                inputsAtWork:[],//массив с формами всех включенных компонентов, отслеживаем длинну, для отрисовки calcID через повторения
                calculatedcars:[],//объекты из массива cars, отобранные инпутами компонентов, из computed свойства selectedCARScomputed()
                showcalculated:false,// поведение прописано в методе show (), если true то показывается массив showcalculated                     
                showcars:true, //поведение прописано в методе show (), если true то показывается массив cars
                
                
                tabletfiltericonon:true,
                tabletcrosson:false,
                magnifyingglasson:true,
                recommendationfilteron:true,


                
                bodyform:false,   
                bodyinpformcross:false,
                bodycheck:Boolean,
                bodycross:Boolean,
                bodyclosed:Boolean,
                bodystatekeeper:[],
                modelsearchmake:'',
                modelsearchmodel:'',
                varconcat:[],
                bodyarrtoshow:[],
                bodyfinal:[],
                toshowobjects:[],
                deletedbodyitem:[],
                deletedbodyitemhistory:[],
                unduwarningbody:false,



                magtopform:false,
                magtoparrtofilter:[],//все имеющиеся на сайте торговые марки авто
                magtoparrforoperationsobj:this.catalogpropscars,//все объекты автомобилей для итерации именно этим компонентом
                modelmagtop:'',
                magtopchoicearr:[], //собирает кликнутые марки машин по мере кликанья клиента
                magtopchoicearrfinal:[],//после клика формирование окончательного массива производителей для формирования окончательного кейса
                magtopindexofckickedelement:[],//собирает индексы кликнутых элементов, нужен для подсветки кликнутого
              


                dropform:false,
                droparr:['Recommendations','Newest inventory','Lowest price','Highest prices'],
                dropindex:'',
                dropauxiliaryarr:[],
                dropshowboxform:false,
                hide:[],



                typeform:false,                
                typetruck:false,
                typesuv:false,
                typesedan:false,
                typehatchback:false,
                typecoupe:false,
                typeconvertiable:false,
                typevan:false,
                typeformon:false,
                typearrtofilter:this.catalogpropscars,
                typeforminput:true,
                typeinpformcross:false,
                typecheck:Boolean,
                typecross:Boolean,
                typeclosed:Boolean,
                typestatekeeper:[],
                typesearchmodel:[],               
                typevarconcat:[],               
                typecollector:[],
                deletedtypeitem:[],
                deletedtypeitemhistory:[],
                unduwarningtype:false,


                
                
            
                transinpform:false,
                automatictrans:true,
                manualtrans:true,
                transcompname:'transcheck',
                testarr:[],
                automaticstatename:'automatic',
                manualstatename:'manual',
                transinpformcheckboxes:true,
                transinpformcross:false,
                manualtransinpformcross:true,
                automatictransinpformcross:true,
                transcheck:Boolean,
                transcross:Boolean,
                transclosed:Boolean,
                transformstatekeeper:[],



                yeardbinpform:false,
                yearinpforminput:false, //если true то в форме открывается подформа, показывающая инпут
                yearinpformcross:false,//если true то в форме открывается подформа, показывающая кроссы
                yearinputopen:Boolean,
                yearcrossopen:Boolean,
                yearcomponentclosed:Boolean,
                yearnumstartpoints:true,
                yeartrigger:Boolean,
                yearformstatekeeper:[],//вспомогательный массив, относительно которого идут вычисления значений переменных по открытию подформ
                yeararrtest:[],  
                yearcompname:'yearslider',
                minyear:null,
                maxyear:null,
                minyearrealnum:[],
                maxyearrealnum:[],
                arrOfYears:[],
                deletedyearitem:[],
                deletedyearitemhistory:[],
                unduwarningyear:false,
             
            

                pricedbinpform:false,//если true, то открывается компонент, устанавливаются стартовые значения в методе getStartedInpPrice()
                priceinpforminput:false, //если true то в форме открывается подформа, показывающая инпут
                priceinpformcross:false,//если true то в форме открывается подформа, показывающая кроссы
                priceinputopen:Boolean,
                pricecrossopen:Boolean,
                pricecomponentclosed:Boolean,
                pricenumstartpoints:true,
                pricetrigger:Boolean,
                priceformstatekeeper:[],//вспомогательный массив, относительно которого идут вычисления значений переменных по открытию подформ
                pricearrtest:[],
                pricecompname:'priceslider',//наименование компонента
                minprice:null,//номера, которые приходят из дочернего компонента и будут преобразовываться в значения реальных цен
                maxprice:null,//номера, которые приходят из дочернего компонента и будут преобразовываться в значения реальных цен
                minpricerealnum:[],//хранит реальные цены на авто
                maxpricerealnum:[],//хранит реальные цены на авто         
                arrOfPrices:[],//хранит уникальные цены на все представленные на сайте авто, в порядке возрастания
                deletedpriceitem:[],
                deletedpriceitemhistory:[],
                unduwarningprice:false,
               


            
                kiloinpform:false,
                kiloinpforminput:false,
                kiloinpformcross:false,

                kiloinputopen:Boolean,
                kilocrossopen:Boolean,
                kilocomponentclosed:Boolean,
                kilonumstartpoints:true,

                kilotrigger:Boolean,
                kiloformstatekeeper:[], 
                kiloarrtest:[],            
                kilocompname:'kiloslider',
                kilocompdata:null,
                minkilorealnum:[],
                maxkilorealnum:[],
                arrOfKilometers:[],
                deletedkiloitem:[],
                deletedkiloitemhistory:[],
                unduwarning:false,
         
        
            }

        },
        methods: {
            togglefiltericon () {
                this.tabletcrosson = false
                this.tabletfiltericonon = true
                this.magnifyingglasson = true
                this.recommendationfilteron = true
                let a = document.querySelector('div.ma-mo__global-search-item-left')
                a.classList.remove('w100')
                let b = document.querySelector('div.ma-mo__global-search-item-left-search-vertical-trigger')
                b.classList.remove('w100')
               
            },
            togglecrossicon () {
                this.tabletcrosson = true
                this.tabletfiltericonon = false
                this.magnifyingglasson = false
                this.recommendationfilteron = false
                let a = document.querySelector('div.ma-mo__global-search-item-left')
                a.classList.add('w100')
                let b = document.querySelector('div.ma-mo__global-search-item-left-search-vertical-trigger')
                b.classList.add('w100')                
              
          },
            show () { //определяет состояние переменных и если хоть один компонент включен, то показывается итерация по массиву showcalculated
                
                
                
                if (this.yeardbinpform||this.pricedbinpform||this.kiloinpform||this.transinpform ||this.bodyform) {//если хоть один инпут включенный
                    this.showcars=false
                    this.showcalculated=true
                    this.magtopform=false
 
                    
                }else if (!this.yeardbinpform && !this.pricedbinpform && !this.kiloinpform && !this.transinpform && !this.bodyform) {
                    this.showcars=true
                    this.showcalculated=false
                    this.magtopform=false       
                }

                // if (!this.yeardbinpform && !this.pricedbinpform && !this.kiloinpform) {
                //     this.showcars=true
                //     this.showcalculated=false
                //     this.magtopform=false

                // }

                // if (this.typeform && !this.pricedbinpform && !this.kiloinpform && !this.transinpform && !this.bodyform) {
                //     this.showcars=false
                //     this.showcalculated=false 
                //     this.typeformon = true
                // }else if (!this.typeform && this.yeardbinpform||this.pricedbinpform||this.kiloinpform||this.transinpform ||this.bodyform) {
                //     this.typeformon = false
                //     this.showcalculated=true
                //     this.showcars=false
                // }else if (!this.typeform && !this.yeardbinpform && !this.pricedbinpform && !this.kiloinpform && !this.transinpform && !this.bodyform) {
                //     this.typeformon = false
                //     this.showcalculated=false
                //     this.showcars=true
                // }

                // if (this.typecollector.length>0) {
                //     this.showcars=false
                //     this.showcalculated=false 
                //     this.typeformon = true
                // } else if (!this.typecollector.length>0) {
                //     this.showcars=true
                //     this.showcalculated=false 
                //     this.typeformon = false 
                // }

                

               

                let a = this.catalogpropscars.slice()

                if (!this.testarr.includes('automatic') && this.testarr.includes('manual')) {
                    this.cars = a.filter(el=>el.transmission==='Manual')
                    this.calculatedcars = a.filter(el=>el.transmission==='Manual')
                } else if (this.testarr.includes('automatic') && !this.testarr.includes('manual')) {
                    this.cars = a
                    this.cars = this.cars.filter(el=>el.transmission==='Automatic')
                    this.calculatedcars = this.cars.filter(el=>el.transmission==='Automatic')
                } else if (this.testarr.includes('automatic') && this.testarr.includes('manual')) {
                    this.cars = this.catalogpropscars.slice()
                    // this.calculatedcars = this.catalogpropscars.slice()
                } else if (!this.testarr.includes('automatic') && !this.testarr.includes('manual')) {
                    this.cars = this.catalogpropscars.slice()
                    this.calculatedcars = this.catalogpropscars.slice()
                } 



                if (0<this.calculatedcars.length<14) {
                    this.bodyarrtoshow = this.calculatedcars.slice()
                } else {
                    this.bodyarrtoshow = this.cars.slice()
                }
                                  
            },



            addToMakeModelCalc() {      
                this.modelsearchmake = ''
                this.modelsearchmodel = ''
                
                this.toshowobjects = []
                this.bodyfinal = []
              
            },
            SetAllId () {//определяем все имеющиеся на сайте уникальные id объектов с машинами, отсортированы по возрастанию
                let a = this.cars.slice()
                for(let i=0; i<a.length; i++) {
                    let b = a[i].id
                    this.allid.push(b)
                }
                this.allid.sort(function(a,b){
                    return a-b
                })
                
            },
            addToTestArrKilo() {
                this.kiloarrtest.push(1)
            },
            addToTestArrYear() {
                this.yeararrtest.push(1)
            },
            addToTestArrPrice() {
                this.pricearrtest.push(1)
            },
            setunduwarningbody () {
                if (this.deletedbodyitemhistory.length>0 ) {
                    this.unduwarningbody = true  
             
                }else {
                    this.unduwarningbody = false
         
                }            
            },
            setunduwarningprice () {
                if (this.deletedpriceitemhistory.length>0 ) {
                    this.unduwarningprice = true  
                    this.pricenumstartpoints = false            
                }else {
                    this.unduwarningprice = false
                    this.pricenumstartpoints = true   
                }            
            },
            setunduwarningyear () {
                if (this.deletedyearitemhistory.length>0 ) {
                    this.unduwarningyear = true  
                    this.yearnumstartpoints = false            
                }else {
                    this.unduwarningyear = false
                    this.yearnumstartpoints = true   
                }            
            },
            setunduwarningkilo () {
                
                if (this.deletedkiloitemhistory.length>0) {
                    this.unduwarning = true  
                    this.kilonumstartpoints = false
                } else  {
                    this.unduwarning = false
                    this.kilonumstartpoints = true
                }         
            },

            setmagtopchoicearr (val) {
                let a = val
                if (!this.magtopchoicearr.includes(a)) {
                    this.magtopchoicearr.push(a)
                } else {
                    let b = this.magtopchoicearr.indexOf(a)
                    this.magtopchoicearr.splice(b,1)
                }      
                
                this.magtopchoicearr = [...new Set(this.magtopchoicearr)]
                
            },

            getdropindex(val) {
                let a = val
                this.dropindex=a
                let b = this.droparr[a]
                this.dropauxiliaryarr.unshift(b)
                this.droparr.splice(a,1)
                this.droparr.unshift(this.dropauxiliaryarr[0])
                this.dropauxiliaryarr = []
            },

           



            getStartedDropHomeTopRight() {
                this.dropform = !this.dropform
                if(this.dropform) {
                    this.dropshowboxform = true
                } else {
                    this.dropshowboxform = false
                }

            },

            dropdown(e){
                let el = this.$refs.dropdown
                let elarrow = this.$refs.arrowbox
                let a = e.composedPath().includes(el)
                let b = e.composedPath().includes(elarrow)
         
                if (a){
                    this.dropshowboxform = false
                    this.dropform = false
                    this.dropauxiliaryarr = []
                }

                if (this.dropform && this.dropshowboxform && b) {
                    this.dropshowboxform = true
                    this.dropform = true
                }else if (this.dropform && this.dropshowboxform && !b) {
                    this.dropshowboxform = false
                    this.dropform = false
                    this.dropauxiliaryarr = []
                }
                
            }, 
 
            

            getIndexModelmagtopComputed(ind) {
                let a = ind
                if(!this.magtopindexofckickedelement.includes(a)) {
                    this.magtopindexofckickedelement.unshift(a)
                }else {
                    let b = this.magtopindexofckickedelement.indexOf(a)
                    this.magtopindexofckickedelement.splice(b,1)
                }
                
            },

            magtopshare () {
               if (this.magtopchoicearr.length>0) {
                this.magtopchoicearrfinal=this.magtopchoicearr.slice()
               }else {
                this.magtopchoicearrfinal=this.magtoparrtofilter.slice()
               }
              
               this.magtopform = true
               this.magtopchoicearr = []
               this.modelmagtop=''
               this.magtopindexofckickedelement=[]
               this.showcalculated=false             
               this.showcars=false
               this.typeformon = false
            },

            magtopchangeshow () {
                this.magtopform = false 
                this.showcalculated=false             
                this.showcars=true
            },



            getStartedType() {
                this.typestatekeeper.push(1)

  

                if (this.typestatekeeper.length===1) {

                    this.typeform = true

                    this.typeforminput = true

                    this.typecheck=true

                    this.typecross=false

                    this.typeclosed=false



          


                } else if (this.typestatekeeper.length===2) {

                    this.typeforminput = false

                    this.typeinpformcross=true

                    this.typecheck=false

                    this.typecross=true

                    this.typeclosed=false

                }else {

                    this.typeform = false

                    this.typeforminput = false

                    this.typeinpformcross=false

                    this.typecheck=false

                    this.typecross=false

                    this.typeclosed=true 

                    this.typestatekeeper = []

                    this.typetoshowobjects = [] 

                    this.deletedtypeitemhistory = []

                    this.typecollector = []

                    this.typetruck=false
                    this.typesuv=false
                    this.typesedan=false
                    this.typehatchback=false
                    this.typecoupe=false
                    this.typeconvertiable=false
                    this.typevan=false

                }

                this.show ()
            },


           

            setTypeTRUCK () {
                
                this.typetruck=!this.typetruck
                if(!this.typecollector.includes('Trucks')) {
                    this.typecollector.push('Trucks')
                }else {
                    let a = this.typecollector.indexOf('Trucks') 
                    this.typecollector.splice(a,1)
                }

                if (this.typecollector.length>0) {
                    this.showcars=false
                    this.showcalculated=false 
                    this.typeformon = true
                } else if (!this.typecollector.length>0) {
                    this.showcars=true
                    this.showcalculated=false 
                    this.typeformon = false 
                }
            },
            setTypeSUV () {
                this.typesuv=!this.typesuv
                if(!this.typecollector.includes('SUV')) {
                    this.typecollector.push('SUV')
                }else {
                    let a = this.typecollector.indexOf('SUV') 
                    this.typecollector.splice(a,1)
                }

                if (this.typecollector.length>0) {
                    this.showcars=false
                    this.showcalculated=false 
                    this.typeformon = true
                } else if (!this.typecollector.length>0) {
                    this.showcars=true
                    this.showcalculated=false 
                    this.typeformon = false 
                }
            },
            setTypeSEDAN () {
                this.typesedan=!this.typesedan
                if(!this.typecollector.includes('Sedan')) {
                    this.typecollector.push('Sedan')
                }else {
                    let a = this.typecollector.indexOf('Sedan') 
                    this.typecollector.splice(a,1)
                }

                if (this.typecollector.length>0) {
                    this.showcars=false
                    this.showcalculated=false 
                    this.typeformon = true
                } else if (!this.typecollector.length>0) {
                    this.showcars=true
                    this.showcalculated=false 
                    this.typeformon = false 
                }
            },
            setTypeHATCHBACK () {
                this.typehatchback = !this.typehatchback
                if(!this.typecollector.includes('Hatchback')) {
                    this.typecollector.push('Hatchback')
                }else {
                    let a = this.typecollector.indexOf('Hatchback') 
                    this.typecollector.splice(a,1)
                }

                if (this.typecollector.length>0) {
                    this.showcars=false
                    this.showcalculated=false 
                    this.typeformon = true
                } else if (!this.typecollector.length>0) {
                    this.showcars=true
                    this.showcalculated=false 
                    this.typeformon = false 
                }
            },
            setTypeCOUPE () {
                this.typecoupe=!this.typecoupe
                if(!this.typecollector.includes('Coupe')) {
                    this.typecollector.push('Coupe')
                }else {
                    let a = this.typecollector.indexOf('Coupe') 
                    this.typecollector.splice(a,1)
                }

                if (this.typecollector.length>0) {
                    this.showcars=false
                    this.showcalculated=false 
                    this.typeformon = true
                } else if (!this.typecollector.length>0) {
                    this.showcars=true
                    this.showcalculated=false 
                    this.typeformon = false 
                }
            },
            setTypeCONVERTIABLE () {
                this.typeconvertiable=!this.typeconvertiable
                if(!this.typecollector.includes('Convertiable')) {
                    this.typecollector.push('Convertiable')
                }else {
                    let a = this.typecollector.indexOf('Convertiable') 
                    this.typecollector.splice(a,1)
                }

                if (this.typecollector.length>0) {
                    this.showcars=false
                    this.showcalculated=false 
                    this.typeformon = true
                } else if (!this.typecollector.length>0) {
                    this.showcars=true
                    this.showcalculated=false 
                    this.typeformon = false 
                }
            },
            setTypeVAN () {
                this.typevan=!this.typevan
                if(!this.typecollector.includes('VAN')) {
                    this.typecollector.push('VAN')
                }else {
                    let a = this.typecollector.indexOf('VAN') 
                    this.typecollector.splice(a,1)
                }

                if (this.typecollector.length>0) {
                    this.showcars=false
                    this.showcalculated=false 
                    this.typeformon = true
                } else if (!this.typecollector.length>0) {
                    this.showcars=true
                    this.showcalculated=false 
                    this.typeformon = false 
                }
            },

            undotypecomponent () {
                if (this.typecollector.length<=7) {
                    let a = this.deletedtypeitemhistory[0]
                  
                    this.typecollector.unshift(a)
                    this.deletedtypeitemhistory.splice(0,1)
                    let w = this.typecollector
                    w = [...new Set(w)]
                    this.typecollector = w
                    
                }
    
            },







































            getStartedBodyType() {
                this.show ()
                this.bodystatekeeper.push(1)
                
                
               
                if (this.bodystatekeeper.length===1) {
                    this.bodyform = true
                    this.bodyforminput = true
                    this.bodycheck=true
                    this.bodycross=false
                    this.bodyclosed=false
                                 
                } else if (this.bodystatekeeper.length===2) {
                    this.bodyforminput = false
                    this.bodyinpformcross=true
                    this.bodycheck=false
                    this.bodycross=true
                    this.bodyclosed=false
                    this.calculatedcars = this.toshowobjects.slice()
                    
                }else {
                    this.bodyform = false
                    this.bodyforminput = false
                    this.bodyinpformcross=false
                    this.bodycheck=false
                    this.bodycross=false
                    this.bodyclosed=true   
                    this.bodystatekeeper = [] 
                    this.modelsearchmake = ''
                    this.modelsearchmodel = ''
                    this.toshowobjects = []  
                    this.deletedbodyitemhistory = []
                    this.bodyarrtoshow = this.cars.slice()

                }

                

                
                
                
                

                

                

                

                

                

            },

            setBodyTypeShowOrderCars () {
                    this.showcars=false
                    this.showcalculated=true
                  

                    this.varconcat = this.modelSearchMakeSource.concat(this.modelSearchModelSource) 
                
                    if (this.modelSearchMakeSource.length>0 && this.modelSearchModelSource.length>0) {
                                let x = []
                                for (let i = 0; i<this.varconcat.length; i++) {
                                    let a = this.varconcat[i] 
                                    let b = this.varconcat.filter(el=>el===a).length
                                    if (b===2) {

                                        this.cars.forEach(el=>{
                                                let s = el
                                                let q = el.id 
                                                if (a===q) {
                                                    x.push(s)
                                                }
                                        })
                                        this.toshowobjects = x
                                        this.toshowobjects = [...new Set(this.toshowobjects)]
                                        this.calculatedcars = this.toshowobjects.slice()
                                    
                                }
                                
                        }

                    }
                    
                    if (this.modelSearchMakeSource.length>0 && !this.modelSearchModelSource.length>0) {
                            let x = []
                            for (let i = 0; i<this.modelSearchMakeSource.length; i++) {
                                let a = this.modelSearchMakeSource[i] 
                                
                                this.cars.forEach(el=>{
                                        let s = el
                                        let w = el.id
                                        if (a===w) {
                                            x.push(s)
                                        }
                                }) 
                                this.toshowobjects = x
                                this.toshowobjects = [...new Set(this.toshowobjects)]
                                this.calculatedcars = this.toshowobjects.slice()                 
                                
                            }
                            

                    }

                    if (!this.modelSearchMakeSource.length>0 && this.modelSearchModelSource.length>0) {
                            let x = []
                            for (let i = 0; i<this.modelSearchModelSource.length; i++) {
                                let a = this.this.modelSearchModelSource[i] 
                                
                                this.cars.forEach(el=>{
                                        let s = el
                                        let w = el.id
                                        if (a===w) {
                                            x.push(s)
                                        }
                                })

                                this.toshowobjects = x
                                this.toshowobjects = [...new Set(this.toshowobjects)]
                                this.calculatedcars = this.toshowobjects.slice()
                                
                            
                                
                            }
                            

                    }

                    
                    
                   
            },

            
           

            clearModel () {
 
                this.modelsearchmodel = ''
            },

            undobodycomponent () {
                this.cars = this.reference.slice()
           
                if (this.calculatedcars.length<14) {
                    let a = this.deletedbodyitemhistory[0]
                    let b = this.cars.find(el=>el.id===a)
                    this.calculatedcars.unshift(b)
                    this.deletedbodyitemhistory.splice(0,1)
                    let w = this.calculatedcars
                    w = [...new Set(w)]
                    this.calculatedcars = w
               
                }

                this.showcars=false
                this.showcalculated=true
    
            },
            

           

            
           
            getStartedInpTrans() {

                this.show ()
                this.modelsearchmake = ''
                this.modelsearchmodel = ''

                this.transformstatekeeper.push(1)
                   
                if (this.transformstatekeeper.length===1) {
                    this.testarr.unshift(this.automaticstatename)    
                    this.testarr.unshift(this.manualstatename)    
                    this.testarr = [...new Set(this.testarr)] 
                    this.transinpform = true
                    this.transinpformcheckboxes=true
                    this.transcheck = true
                    this.transcross = false
                    this.transclosed = false
                 
                
                } else if (this.transformstatekeeper.length===2) {
                   
                    this.transinpformcross = true
                    this.transinpformcheckboxes=false
                    this.transcheck = false
                    this.transcross = true
                    this.transclosed = false
                }else {
                    this.transinpform = false
                    this.transinpformcross = false
                    this.transinpformcheckboxes=false
                    this.transcheck = false
                    this.transcross = false
                    this.transclosed = true
                    this.transformstatekeeper = []
                    this.automatictrans=true
                    this.manualtrans=true
                    this.automatictransinpformcross = true
                    this.manualtransinpformcross = true
                    this.calculatedcars = this.catalogpropscars.slice()
                    this.cars = this.catalogpropscars.slice()
                    let x = this.testarr.indexOf('automatic')//нужно для использования в computed свойстве selectedCARScomputed()
                    this.testarr.splice(x,1)//чтобы знать по какому количеству повторений id отбирать для формирования calculatedcars
                    let z = this.testarr.indexOf('manual')//нужно для использования в computed свойстве selectedCARScomputed()
                    this.testarr.splice(z,1)//чтобы знать по какому количеству повторений id отбирать для формирования calculatedcars
               
                }

                
           
            },


            automaticModelChange () {
                
                if (this.automatictrans) {        
                    this.automatictransinpformcross = false
                    let w = this.testarr.indexOf('automatic')//нужно для использования в computed свойстве selectedCARScomputed()
                    this.testarr.splice(w,1)
                }else if(!this.automatictrans) {     
                    this.automatictransinpformcross = true
                    this.testarr.unshift(this.automaticstatename)
                    this.testarr = [...new Set(this.testarr)]   
                }

                if (!this.testarr.includes('automatic') && !this.testarr.includes('manual')) {
                    this.transinpform = false
                    this.transformstatekeeper = [1,1,1]
                    this.transcheck = false
                }


                this.show ()
                this.addToMakeModelCalc()
                          
            },

            manualModelChange () {
                
                if (this.manualtrans) {        
                    this.manualtransinpformcross = false
                    let w = this.testarr.indexOf('manual')//нужно для использования в computed свойстве selectedCARScomputed()
                    this.testarr.splice(w,1)//чтобы знать по какому количеству повторений id отбирать для формирования calculatedcars                 
                }else if (!this.manualtrans) {     
                    this.manualtransinpformcross = true
                    this.testarr.unshift(this.manualstatename)//если компонента по которому производится клик нет, то его имя добавляется
                    this.testarr = [...new Set(this.testarr)]   
                } 

                if (!this.testarr.includes('automatic') && !this.testarr.includes('manual')) {
                    this.transinpform = false
                    this.transformstatekeeper = [1,1,1]
                    this.transcheck = false
                } 

                this.show ()
                this.addToMakeModelCalc()
            },
            
            setTransModelAutomatic () {
                
                if (this.automatictransinpformcross && !this.manualtransinpformcross ) {
                    this.automatictrans = true
                    this.automatictransinpformcross = true
                    this.manualtrans = true
                    this.manualtransinpformcross = true
                    this.testarr.unshift(this.automaticstatename)//если компонента по которому производится клик нет, то его имя добавляется
                    this.testarr.unshift(this.manualstatename)//если компонента по которому производится клик нет, то его имя добавляется
                    this.testarr = [...new Set(this.testarr)]   
                } else if (this.automatictransinpformcross && this.manualtransinpformcross) {
                    this.automatictrans = false
                    this.automatictransinpformcross = false
                    this.manualtrans = true
                    this.manualtransinpformcross = true
                    this.testarr.unshift(this.manualstatename)//если компонента по которому производится клик нет, то его имя добавляется
                    this.testarr.unshift(this.manualstatename)//если компонента по которому производится клик нет, то его имя добавляется
                    let w = this.testarr.indexOf('automatic')//нужно для использования в computed свойстве selectedCARScomputed()
                    this.testarr.splice(w,1)//чтобы знать по какому количеству повторений id отбирать для формирования calculatedcars
                    let v = this.testarr.indexOf('transcheck')//нужно для использования в computed свойстве selectedCARScomputed()
                    this.testarr.splice(v,1)//чтобы знать по какому количеству повторений id отбирать для формирования calculatedcars
                    this.testarr = [...new Set(this.testarr)]  
                }

                this.show ()
                this.addToMakeModelCalc()
      
            },
            setTransModelManual () {
                if (!this.automatictransinpformcross && this.manualtransinpformcross ) {
                    this.automatictrans = true
                    this.automatictransinpformcross = true
                    this.manualtrans = true
                    this.manualtransinpformcross = true
                    this.testarr.unshift(this.automaticstatename)//если компонента по которому производится клик нет, то его имя добавляется
                    this.testarr.unshift(this.manualstatename)//если компонента по которому производится клик нет, то его имя добавляется
                    this.testarr = [...new Set(this.testarr)] 
                } else if (this.automatictransinpformcross && this.manualtransinpformcross) {
                    this.automatictrans = true
                    this.automatictransinpformcross = true
                    this.manualtrans = false
                    this.manualtransinpformcross = false
                    this.testarr.unshift(this.automaticstatename)//если компонента по которому производится клик нет, то его имя добавляется           
                    this.testarr.unshift(this.automaticstatename)//если компонента по которому производится клик нет, то его имя добавляется
                    let w = this.testarr.indexOf('manual')//нужно для использования в computed свойстве selectedCARScomputed()
                    this.testarr.splice(w,1)//чтобы знать по какому количеству повторений id отбирать для формирования calculatedcars
                    let v = this.testarr.indexOf(this.transcompname)//нужно для использования в computed свойстве selectedCARScomputed()
                    this.testarr.splice(v,1)//чтобы знать по какому количеству повторений id отбирать для формирования calculatedcars
                    this.testarr = [...new Set(this.testarr)] 
                }

                this.show ()
                this.addToMakeModelCalc()

                          
            },
          

            getStartedInpPrice() { //при клике на стрелку компонента запускается функция

                
                this.modelsearchmake = ''
                this.modelsearchmodel = ''
                
                this.priceformstatekeeper.push(1)//описывает в какой последовательности открывать и закрывать форму и части формы
                if (this.priceformstatekeeper.length===1) {
                    this.pricedbinpform = true
                    this.priceinpforminput = true
                    this.priceinpformcross = false
                    this.pricetrigger = true //нужен для определения промежуточного состояния, когда форма открыта, но последующий клик не перезапускает форму
                    this.priceinputopen=true
                    this.pricecrossopen=false
                    this.pricecomponentclosed=false 
                            
                }else if (this.priceformstatekeeper.length===2) {
                    this.priceinpforminput = false
                    this.priceinpformcross = true
                    this.pricetrigger = false
                    this.priceinputopen=false
                    this.pricecrossopen=true
                    this.pricecomponentclosed=false
                } else if (this.priceformstatekeeper.length===3) {
                    this.priceinpforminput = false
                    this.priceinpformcross = false
                    this.pricedbinpform = false
                    this.pricetrigger = true
                    this.priceinputopen=false
                    this.pricecrossopen=false
                    this.pricecomponentclosed=true
                    this.priceformstatekeeper = []

                    
                    
                    
                    
            
                }

                

                
                

                this.show ()//запускает метод, который определяет, какой массив показывать, то ли все авто на сайте, то ли вычисленные
                
                let a = []
                this.cars.forEach(el => {
                let b = el.price
                a.push(b)
                })
                a=[...new Set(a)]
                let x = a.sort()
                let b = Object.values(x)
                b.forEach(el=>{
                let q = el
                this.arrOfPrices.push(q) //подготавливает массив уникалных занчений цен на сайте, по возрастанию цены
                })
                this.arrOfPrices = [...new Set(this.arrOfPrices)]
                let k = Object.values(this.arrOfPrices)
                this.arrOfPrices = k
                this.arrOfPrices.sort(function(a,b){
                    return a-b
                })

                if(this.priceinputopen) {
                    this.minpricerealnum.unshift(this.arrOfPrices[0]) //устанавливает стартовый минимум инпута по умолчанию уже в цифрах реального минимального пробега реального авто
                    this.maxpricerealnum.unshift(this.arrOfPrices[this.arrOfPrices.length-1]) //устанавливает максимум инпута по умолчанию уже в цифрах реального пробега
                    this.inputsAtWork.push(this.pricecompname)//если компонента по которому производится клик нет, то его имя добавляется
                    this.inputsAtWork = [...new Set(this.inputsAtWork)]
                    this.pricenumstartpoints = true  
                    this.unduwarning = false
                    this.unduwarningyear = false

                }else if (this.pricecrossopen && !this.pricearrtest.length===0) {
                    let a = this.calculatedcars.map(car =>{
                        return car.price
                    })
                    a = [...new Set(a)]
                    a.sort(function(a,b) {
                        a-b
                    })
                    let b = a[a.length-1]
                    let z = a[0]
                    this.minpricerealnum.unshift(z)
                    this.maxpricerealnum.unshift(b)
                    this.pricenumstartpoints = true
                   
                } else if (this.pricecrossopen && this.pricearrtest.length===0) {
                    this.deletedkiloitemhistory = []
                    this.deletedyearitemhistory = []
                    this.unduwarning = false  
                    this.unduwarningyear = false
                    this.pricenumstartpoints = false   
                } else if (this.pricecomponentclosed) {
                    this.minpricerealnum=[]//если эта переменная пустой массив, то в computed свойство selectedCARScomputed() не могут попасть
                    this.maxpricerealnum=[]//данные для рассчетов по инпуту касательно этого компонента, рассчет идет по тем компонентам, что включены 
                    this.deletedpriceitemhistory=[] 
                    this.pricearrtest = []
                    this.unduwarning=false
                    this.unduwarningyear=false
                    this.deletedkiloitemhistory=[]
                    this.deletedyearitemhistory=[]
                    let w = this.inputsAtWork.indexOf('priceslider')//нужно для использования в computed свойстве selectedCARScomputed()
                    this.inputsAtWork.splice(w,1)//чтобы знать по какому количеству повторений id отбирать для формирования calculatedcars
                                 
                }

                                                   
            },
            undopricecomponent () {
                if (this.calculatedcars.length<14) {
                    let a = this.deletedpriceitemhistory[0]
                    let b = this.cars.find(el=>el.id===a)
                    this.calculatedcars.unshift(b)
                    this.deletedpriceitemhistory.splice(0,1)
                    let w = this.calculatedcars
                    w = [...new Set(w)]
                    this.calculatedcars = w
                    this.unduwarningprice = true
                }
    
            },







            getStartedInpYear() {//при клике на стрелку компонента запускается функция, аналогично указанному выше, только для другого компонента
              
                this.modelsearchmake = ''
                this.modelsearchmodel = ''
                
                this.yearformstatekeeper.push(1)//описывает в какой последовательности открывать и закрывать форму и части формы
                if (this.yearformstatekeeper.length===1) {
                    this.yeardbinpform = true
                    this.yearinpforminput = true
                    this.yearinpformcross = false
                    this.yeartrigger = true
                    this.yearinputopen=true
                    this.yearcrossopen=false
                    this.yearcomponentclosed=false
                 
                }else if (this.yearformstatekeeper.length===2) {
                    this.yearinpforminput = false
                    this.yearinpformcross = true
                    this.yeartrigger = false
                    this.yearinputopen=false
                    this.yearcrossopen=true
                    this.yearcomponentclosed=false
                } else {
                    this.yearinpforminput = false
                    this.yearinpformcross = false
                    this.yeardbinpform = false
                    this.yeartrigger = true
                    this.yearinputopen=false
                    this.yearcrossopen=false
                    this.yearcomponentclosed=true
                    this.yearformstatekeeper = []
                   
                }

                

                this.show ()//запускает метод, который определяет, какой массив показывать, то ли все авто на сайте, то ли вычисленные

                let a = []
                this.cars.forEach(el => {
                let b = el.year
                a.push(b)
                })
                a=[...new Set(a)]
                let x = a.sort()
                let b = Object.values(x)
                b.forEach(el=>{
                let q = el
                this.arrOfYears.push(q) //подготавливает массив уникалных занчений годов на сайте , по возрастанию годов
                })
                this.arrOfYears = [...new Set(this.arrOfYears)]
                let k = Object.values(this.arrOfYears)
                this.arrOfYears = k
                this.arrOfYears.sort(function(a,b){
                    return a-b
                })


                if(this.yearinputopen) {
                    this.minyearrealnum.unshift(this.arrOfYears[0]) //устанавливает стартовый минимум инпута по умолчанию уже в цифрах реального минимального пробега реального авто
                    this.maxyearrealnum.unshift(this.arrOfYears[this.arrOfYears.length-1]) //устанавливает максимум инпута по умолчанию уже в цифрах реального пробега
                    this.inputsAtWork.push(this.yearcompname)//если компонента по которому производится клик нет, то его имя добавляется
                    this.inputsAtWork = [...new Set(this.inputsAtWork)]
                    this.yearnumstartpoints = true  

                    this.unduwarning = false//!!!!!!!
                    this.unduwarningprice = false//!!!!!!!

                }else if (this.yearcrossopen && !this.yeararrtest.length===0) {
                    let a = this.calculatedcars.map(car =>{
                        return car.year
                    })
                    a = [...new Set(a)]
                    a.sort(function(a,b) {
                        a-b
                    })
                    let b = a[a.length-1]
                    let z = a[0]
                    this.minyearrealnum.unshift(z)
                    this.maxyearrealnum.unshift(b)
                    this.yearnumstartpoints = true
                   
                } else if (this.yearcrossopen && this.yeararrtest.length===0 ) {
                    this.deletedkiloitemhistory = []
                    this.deletedpriceitemhistory = []

                    this.unduwarning = false  
                    this.unduwarningprice = false

                    this.yearnumstartpoints = false
                } else if (this.yearcomponentclosed) {
                    this.minyearrealnum=[]//если эта переменная пустой массив, то в computed свойство selectedCARScomputed() не могут попасть
                    this.maxyearrealnum=[]//данные для рассчетов по инпуту касательно этого компонента, рассчет идет по тем компонентам, что включены 
                    this.deletedyearitemhistory=[] 
                    this.yeararrtest = []

                    this.unduwarning=false
                    this.unduwarningprice=false

                    this.deletedkiloitemhistory=[]
                    this.deletedpriceitemhistory=[]
                    
                    let w = this.inputsAtWork.indexOf('yearslider')//нужно для использования в computed свойстве selectedCARScomputed()
                    this.inputsAtWork.splice(w,1)//чтобы знать по какому количеству повторений id отбирать для формирования calculatedcars                     
                }

                            
            },
            undoyearcomponent () {
                if (this.calculatedcars.length<14) {
                    let a = this.deletedyearitemhistory[0]
                    let b = this.cars.find(el=>el.id===a)
                    this.calculatedcars.unshift(b)
                    this.deletedyearitemhistory.splice(0,1)
                    let w = this.calculatedcars
                    w = [...new Set(w)]
                    this.calculatedcars = w
                    this.unduwarningyear = true
                }
    
            },

            


            getStartedInpKilo() {
             
                this.modelsearchmake = ''
                this.modelsearchmodel = ''
                

                this.kiloformstatekeeper.push(1)//описывает в какой последовательности открывать и закрывать форму и части формы
                if (this.kiloformstatekeeper.length===1) {
                    this.kiloinpform = true
                    this.kiloinpforminput = true
                    this.kiloinpformcross = false
                    this.kilotrigger = true
                    this.kiloinputopen=true
                    this.kilocrossopen=false
                    this.kilocomponentclosed=false
                
                }else if (this.kiloformstatekeeper.length===2) {
                    this.kiloinpforminput = false
                    this.kiloinpformcross = true
                    this.kilotrigger = false
                    this.kiloinputopen=false
                    this.kilocrossopen=true
                    this.kilocomponentclosed=false
                } else {
                    this.kiloinpforminput = false
                    this.kiloinpformcross = false
                    this.kiloinpform = false
                    this.kilotrigger = true
                    this.kiloinputopen=false
                    this.kilocrossopen=false
                    this.kilocomponentclosed=true
                    this.kiloformstatekeeper = []
                  
                }

                this.show ()//запускает метод, который определяет, какой массив показывать, то ли все авто на сайте, то ли вычисленные
                
                

                let a = []
                this.cars.forEach(el => {
                let b = el.kilometers
                a.push(b)
                })
                a=[...new Set(a)]
                let x = a.sort()
                let b = Object.values(x)
                b.forEach(el=>{
                let q = el
                this.arrOfKilometers.push(q) //подготавливает массив уникалных занчений километражей на сайте , по возрастанию километража авто
                })
                this.arrOfKilometers = [...new Set(this.arrOfKilometers)]
                let k = Object.values(this.arrOfKilometers)
                this.arrOfKilometers = k
                this.arrOfKilometers.sort(function(a,b){ //очень важно отсортировать массив по ворастанию, тогда можно легко брать минимумы и максимумы
                    return a-b
                })

               

                if(this.kiloinputopen) {
                    this.minkilorealnum.unshift(this.arrOfKilometers[0]) //устанавливает стартовый минимум инпута по умолчанию уже в цифрах реального минимального пробега реального авто
                    this.maxkilorealnum.unshift(this.arrOfKilometers[this.arrOfKilometers.length-1]) //устанавливает максимум инпута по умолчанию уже в цифрах реального пробега
                    this.inputsAtWork.push(this.kilocompname)//если компонента по которому производится клик нет, то его имя добавляется
                    this.inputsAtWork = [...new Set(this.inputsAtWork)]
                    this.kilonumstartpoints = true

                    this.unduwarningyear=false//!!!!!!!
                    this.unduwarningprice = false//!!!!!!!
                   
                }else if (this.kilocrossopen && !this.kiloarrtest.length===0) {
                    let a = this.calculatedcars.map(car =>{
                        return car.kilometers
                    })
                    a = [...new Set(a)]
                    a.sort(function(a,b) {
                        a-b
                    })
                    let b = a[a.length-1]
                    this.maxkilorealnum.unshift(b)
                    this.kilonumstartpoints = true
                   
                }else if (this.kilocrossopen && this.kiloarrtest.length===0) {

                    this.deletedyearitemhistory = []
                    this.deletedpriceitemhistory = []

                    this.unduwarningyear=false
                    this.unduwarningprice = false

                    this.kilonumstartpoints = false    
                } else if (this.kilocomponentclosed) {
                    this.minkilorealnum=[]//если эта переменная пустой массив, то в computed свойство selectedCARScomputed() не могут попасть
                    this.maxkilorealnum=[]//данные для рассчетов по инпуту касательно этого компонента, рассчет идет по тем компонентам, что включены 
                    this.deletedkiloitemhistory=[]
                    this.kiloarrtest = []

                    this.unduwarningyear=false
                    this.unduwarningprice=false

                    this.deletedyearitemhistory=[]
                    this.deletedpriceitemhistory=[]

                    let w = this.inputsAtWork.indexOf('kiloslider')//нужно для использования в computed свойстве selectedCARScomputed()
                    this.inputsAtWork.splice(w,1)//чтобы знать по какому количеству повторений id отбирать для формирования calculatedcars   
                            
                } 

                
                    
            },
            undokilocomponent () {
                if (this.deletedkiloitemhistory.length!=0 && this.calculatedcars.length<=14) {
                    let a = this.deletedkiloitemhistory[0]
                    let b = this.cars.find(el=>el.id===a)
                    this.calculatedcars.unshift(b)
                    this.deletedkiloitemhistory.splice(0,1)
                    let w = this.calculatedcars
                    w = [...new Set(w)]
                    this.calculatedcars = w
                }
   
            },

            

            
            
           

            

            
        
                                          
        },
        
        
        watch: {

            
            
            catalogpropscars (val) {//получает от родительского компонента массив со всеми авто
                this.cars = val
                this.typearrtofilter = val           
                this.magtoparrforoperationsobj = val
            },
            selectedCARScomputed(val) { //вычисляемое свойство, которое динамически возвращает объекты из массива cars отобранные в ходе работы инпутов компонентов         
                this.calculatedcars = val  
                this.bodyarrtoshow = val                         
            },

            deletedtypeitem (val) {
                let a = val
                this.deletedtypeitemhistory.unshift(a)

                this.deletedtypeitemhistory = [...new Set(this.deletedtypeitemhistory)]
                let b = this.deletedtypeitemhistory[0]
                let c = this.typecollector.indexOf(b)
                this.typecollector.splice(c,1)

            },


            deletedbodyitem (val) {
                let a = val.id  
                this.deletedbodyitemhistory.unshift(a)

                this.deletedbodyitemhistory = [...new Set(this.deletedbodyitemhistory)]
                let b = this.deletedbodyitemhistory[0]
                let c = this.calculatedcars.findIndex(el=>el.id===b)
                this.calculatedcars.splice(c,1)
                
                
            },

          

            setMinPriceRealNumber (val) {//берет соответствующего названия computed свойство и в зависимости от приходящих данных
                
                if(val<=this.maxpricerealnum[0]) {//устанавливает динамически цену для минимального инпута
                    this.minpricerealnum.unshift(val)//все время пишет в начало массива и потом удаляет
                    this.minpricerealnum.splice(1)//таким образом в массиве всегда одно число и оно динамически меняется
                }
             
            },         
            setMaxPriceRealNumber (val) {//берет соответствующего названия computed свойство и в зависимости от приходящих данных
                
                if(val>=this.minpricerealnum[0]) {//устанавливает динамически цену для максимального инпута в компоненте цены
                    this.maxpricerealnum.unshift(val)//все время пишет в начало массива и потом удаляет
                    this.maxpricerealnum.splice(1)//таким образом в массиве всегда одно число и оно динамически меняется
                }
            },
            deletedpriceitem (val) {
                let a = val.id  
                this.deletedpriceitemhistory.unshift(a)

                this.deletedpriceitemhistory = [...new Set(this.deletedpriceitemhistory)]
                let b = this.deletedpriceitemhistory[0]
                let c = this.calculatedcars.findIndex(el=>el.id===b)
                this.calculatedcars.splice(c,1)

            },





            setMinYearRealNumber (val) {
                if(val<=this.maxyearrealnum[0]) {//устанавливает динамически цену для минимального инпута
                    this.minyearrealnum.unshift(val)//все время пишет в начало массива и потом удаляет
                    this.minyearrealnum.splice(1)//таким образом в массиве всегда одно число и оно динамически меняется
                }
            },
            setMaxYearRealNumber (val) {
                if(val>=this.minyearrealnum[0]) {//устанавливает динамически цену для максимального инпута в компоненте цены
                    this.maxyearrealnum.unshift(val)//все время пишет в начало массива и потом удаляет
                    this.maxyearrealnum.splice(1)//таким образом в массиве всегда одно число и оно динамически меняется
                }
            },
            deletedyearitem (val) {
                let a = val.id  
                this.deletedyearitemhistory.unshift(a)

                this.deletedyearitemhistory = [...new Set(this.deletedyearitemhistory)]
                let b = this.deletedyearitemhistory[0]
                let c = this.calculatedcars.findIndex(el=>el.id===b)
                this.calculatedcars.splice(c,1)

            },





            setMaxKiloRealNumber (val) {
                if(val) {//устанавливает динамически цену для максимального инпута в компоненте цены
                    this.maxkilorealnum.unshift(val)//все время пишет в начало массива и потом удаляет
                    this.maxkilorealnum.splice(1)//таким образом в массиве всегда одно число и оно динамически меняется
                }//инпут в данном случае один, нам не нужно выдерживать условия, сразу пишем данные если появились в переменную maxkilorealnum
            },
            deletedkiloitem (val) {//при удалении при закрытом компоненте элемента с крестиком он передает в родительский компонент данные о себе в переменную  deletedkiloitem 
                let a = val.id    //именно сейчас я проверяю приходящие из дочернего компонента данные, записываю id объектов в переменную deletedkiloitemhistory в начало
                this.deletedkiloitemhistory.unshift(a) // после того как записал удаляю из переменной с вычисленными объектами для показа этот объект по полученному id 
                this.deletedkiloitemhistory = [...new Set(this.deletedkiloitemhistory)]
                let b = this.deletedkiloitemhistory[0]
                let c = this.calculatedcars.findIndex(el=>el.id===b)
                this.calculatedcars.splice(c,1)
            },
            

           
                    
        },
      

        computed: {   
           
            modelmagtopComputedFinalShow () {
                let  t = []
                this.magtopchoicearrfinal.forEach(el=>{
                    let b = el
                    for (let i=0;i<this.magtoparrforoperationsobj.length; i++) {
                        let n = this.magtoparrforoperationsobj[i]
                        let d = this.magtoparrforoperationsobj[i].make
                        if (b===d) {
                            t.push(n)
                        }
                    }

                })

                return t

            },

            modelmagtopComputed () {
                
                
                let b = this.magtoparrtofilter.filter(make=>{
                    return make.toUpperCase().indexOf(this.modelmagtop.toUpperCase()) !== -1
                }) 
                
                return b
            },

            typeComputed () { 
                let a = []
                for (let i=0;i<this.typecollector.length; i++) {
                    let b = this.typecollector[i]
                    for(let i=0;i<this.typearrtofilter.length; i++) {
                        let c = this.typearrtofilter[i]
                        let s = this.typearrtofilter[i].bodytype 
                        if (b===s) {
                            a.push(c)
                        }
                    }
                }

                return a
            },
            
            modelSearchMakeSource () {
                let a = []
                let b = []
                
                b = this.bodyarrtoshow.filter(car=>{
                    return car.make.toUpperCase().indexOf(this.modelsearchmake.toUpperCase()) !== -1
                }) 
                for (let i = 0; i<b.length; i++) {
                    let c = b[i].id
                    a.push(c)
                }
                return a
            },
            modelSearchModelSource () {    
                let a = []
                let b = []        
                b = this.bodyarrtoshow.filter(car=>{
                    return car.model.toUpperCase().indexOf(this.modelsearchmodel.toUpperCase()) !== -1
                }) 
                for (let i = 0; i<b.length; i++) {
                    let c = b[i].id
                    a.push(c)
                }
                return a
            },
              
            setMinPriceRealNumber () {
                let a = this.minprice - 1//массив arrOfPrices отсортирован по возрастанию (это очень важно), соответственно, цифры в модели будут 
                return this.arrOfPrices[a]//совпадать с индексами значений цен, за минусом 1, так массивы начинаются с 0, 
            },          //длина (max) инпута соотвествтует длинне массива из всех уникальных значений, зарегистрированных на сайте цен, установил в методе slideP () выше

            setMaxPriceRealNumber () {//аналогично написанному выше
                let b = this.maxprice - 1
                return this.arrOfPrices[b]
            },






            setMinYearRealNumber () {//аналогично написанному выше только по другому компоненту
                let b = this.minyear - 1
                return this.arrOfYears[b]
            },

            setMaxYearRealNumber () {//аналогично написанному выше только по другому компоненту
                let b = this.maxyear - 1
                return this.arrOfYears[b]
            },






            setMaxKiloRealNumber () {//вычисляет динамически меняющееся значение максимального пробега авто по мере движения инпута
                let b = this.kilocompdata - 1
                return this.arrOfKilometers[b]
            },

            

            selectedCARScomputed() {//свойство выводит id элементов массива cars 
                
                let w = []
                let d = []             
                let calculatedCARS = []
       
                    for(let i = 0; i<this.arrOfYears.length;i++) {//отслеживаем компонент Input-year, итерируем массив arrOfYears с уникальными годами авто
                    let a = this.arrOfYears[i] //записываем в переменную элемент массива arrOfYears, по которому сейчас происходит итерация
                        if(a<=this.maxyearrealnum[0]&&a>=this.minyearrealnum[0]) {//если этот элемент больше минимальной выведенной сейчас цены, 
                                                            //но меньше выведенной сейчас цены инпутами компонентов, то принимается к рассмотрению
                            this.cars.forEach(el=>{//итерируем главный массив со всеми авто на сайте 
                                let m = el  //записываем в переменную элемент массива по которому происходит итерация
                                if (m.year===a) { //если этот элемент со значением свойства year равен отобранному при итерации выше элементу массива arrOfYears
                                d.push(m.id) //то его id записываем в массив d
                                }
                            })
                        }
                    }
                    for(let i = 0; i<this.arrOfPrices.length;i++) {//отслеживаем компонент Input-price, все аналогично указанному в комментариях выше
                    let a = this.arrOfPrices[i]                 
                        if(a<=this.maxpricerealnum[0]&&a>=this.minpricerealnum[0]) {
                            this.cars.forEach(el=>{
                                let m = el
                                if (m.price===a) {
                                d.push(m.id)    
                                }
                            })
                        }
                    }
                    for(let i = 0; i<this.arrOfKilometers.length;i++) {//отслеживаем компонент Single-input с одним инпутом, итерируем arrOfKilometers и на каждой итерации
                    let a = this.arrOfKilometers[i]                   //записываем в переменную элемент массива, по которому сейчас проходит итерация
                        if(a<=this.maxkilorealnum[0]) {//и если этот элемент соответствует условию, то есть он меньше выведенного инпутом сейчас километража
                            this.cars.forEach(el=>{ //то он принимается к рассмотрению, дальше производим итерацию главного массива со всеми авто
                                let m = el //записываем в переменную елемент по которому сейчас происходит итерация и если
                                if (m.kilometers===a) {//значение свойства kilometers элемента равен элементу, выведенному ранее в итерации массива километражей, 
                                d.push(m.id)      //то его id записываемв в массив d
                                }
                            })
                        }
                    }                    
                for(let i=0; i<d.length;i++) {//итерируемся по массиву d в котором вобрался весь сборняк выбранных ранее id элементов
                    let k = d[i]              //записываем в переменную элемент массива по которому сейчас происходит итерация
                    let v = d.filter(el=>el===k).length //выясняем сколько раз в массиве d встречается конкретный элемент массива d по которому сейчас происходит итерация
                    if (v===this.inputsAtWork.length) { //устанавливаем, что если элемент встречается столько раз сколько открыто компонентов, то его 
                        w.push(k)                       //записываем в массив w
                    }
                  
                }
           
                w = [...new Set(w)]//делаем массив состоящим из уникальных значений id выводимых после отбора компонентами авто
                w = Object.values(w)//на всякий случай делаем массив из значений имен объекта если это объект

                let z = w.sort(function(a,b){
                    return a-b
                })

                z.forEach (el=>{//итерируем массив с id, при каждой итерации итерируем массив cars и если есть совпадения
                    let a = el // объекты с таким id заносим в массив calculatedCARS, котороый и возвращаем
                    for(let i = 0; i<this.cars.length;i++) {//каждый раз при изменении инпутов компонентов все массивы становятся пустыми 
                        let b = this.cars[i] //и наполняются новыми значениями всякий раз при поступлении новых данных
                        let c = this.cars[i].id
                        if (a===c) {
                            calculatedCARS.push(b)
                        }
                    }
                })

               
                
                return calculatedCARS//!!!!КРАЙНЕ ВАЖНО ЭТО ДЕЛАТЬ В COMPUTED ТАК КАК ЭТИ СВОЙСТВА ПЕРЕСОЗДАЮТСЯ ПРИ КАЖДОМ ПОЯВЛЕНИИ
                                        //НОВЫХ ДАННЫХ, ТАК У НАС ПОСТОЯННО АКТУАЛЬНЫЕ ДАННЫЕ
            },
            
            

        
        },
        

        mounted () {
            
            this.SetAllId ()
          
            this.reference = this.catalogpropscars.slice()
            this.magtoparrtofilter = this.catalogpropscars.map(function(car){
                    return car.make
                })
            this.magtoparrtofilter = [...new Set(this.magtoparrtofilter)]
          
        },
        created() {
            document.addEventListener('click', this.dropdown)
           
        },
        unmounted () {
            document.removeEventListener('click', this.dropdown)
        }, 
        



    }
</script>

<style lang="scss">
    @import '@/assets/varmix.scss';

   
    .ma-mo {
        display: flex;
        
        
        


        .drophometopright {
            display: flex;
            align-items: center;
           
            justify-content: space-between;
            &__dropdown {
               width: 60%; 
               position: relative;
            }

            &__textbox {
                width: 40%;
               
                
               
                text-align: right;
            }

            &__textbox-text {
               margin-right: 20px;
            }

            &__dropdown-textarrowbox {
               
                align-items: center;
                border-width:1px;
                border-style: solid;
                border-color: #D7D7D7;
                
                justify-content: flex-end;
                position: relative;
                height: 22px;
               
            }

            &__dropdown-textarrowbox-text {

            }

            &__dropdown-textarrowbox-text-span {
                
                position: absolute;
                top:0;
                left:20px;
            }

            &__dropdown-textarrowbox-arrowbox {
                right: 10px;
                position: absolute;
                z-index: 2;
                top:0;
            }

            &__dropdown-textarrowbox-arrowbox-arrowup {

            }

            &__dropdown-textarrowbox-arrowbox-arrowdown {

            }

            &__dropdown-showbox {
                
                height: 110px;
                width: 100%;
                background-color: #fff;
                position: absolute;
                z-index: 1;
                padding: 10px;
                padding-left: 21px;
                padding-top: 1px;
                top:0;
            }
        }



      
        .magtop {
                position: relative;
                width: 80%;
                border-width:1px;
                border-style: solid;
                border-color: #D7D7D7;
                @media (max-width:992px) {
                     width: 45%;
                }
                input[type=text]{
                width:100%;
                
            }

            &__input {
                
            }

            &__glass {
                position: absolute;
                left: 90%;
                top:20%;
                color: #D7D7D7;
                @media (max-width:992px) {
                    left: 84%;
                }
            }
            &__show-window {
                position: absolute;
                z-index: 5;
                top:40px;
              
                width:100%;
                background-color: #fff;
                
            }
            
        }
        
        
        .magtoparrow {
            position: relative;
            
            width: 20%;
            height: 100%;
            &__arr {
                position:absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
            @media (max-width:992px) {
               width: 0;
            }
        }



        &__global-search-item-left {
            display: flex;
            align-items: center;
            padding-left: 5px;
        }



        .inp-box-type-inp {

            &__trucks {
            }

            &__trucks-icon {
            }

            &__trucks-img {
            }

            &__trucks-text {
            }

            &__suv {
            }

            &__suv-icon {
            }

            &__suv-img {
            }

            &__suv-text {
            }

            &__sedan {
            }

            &__sedan-icon {
            }

            &__sedan-img {
            }

            &__sedan-text {
            }

            &__hatchback {
            }

            &__hatchback-icon {
            }

            &__hatchback-img {
            }

            &__hatchback-text {
            }

            &__coupe {
            }

            &__coupe-icon {
            }

            &__coupe-img {
            }

            &__coupe-text {
            }

            &__convertiable {
            }

            &__convertiable-icon {
            }

            &__convertiable-img {
            }

            &__convertiable-text {
            }

            &__van {
            }

            &__van-icon {
            }

            &__van-img {
            }

            &__van-text {
            }
        }
        .tib {
            display: flex;
            align-items: center;

            &__icon {
                margin-right: 5px;
                opacity: 0;
            }

            &__img {
                margin-right: 5px;
            }

            &__text {
                margin-right: 5px;
            }
        }
        .visible {
            opacity: 1;
        }


        

        .bodymake {

            &__text {
               
            }

            &__input-box {
                position: relative;
            }

            &__input-box-inp {
            }

            &__input-box-glass {
                position:absolute;
                left: 160px;
                top: 8px;
            }

        }

        .bodymodel {

            &__text {
            }

            &__input-box {
                position: relative;
            }

            &__input-box-inp {
            }

            &__input-box-glass {
                position:absolute;
                left: 160px;
                top: 8px;
            }
        }

      
		&__detailed-search-box {
            display: flex;
            flex-direction: column;
           
            width: 30%;
            
           
		}

        &__detailed-search-box-calk-container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

		&__global-search-and-card-box {
            
            width: 70%;
            display: flex;
            flex-direction: column;
            @media (max-width:992px) {
                width: 100%;
            }
		}

		&__global-search {
            
            display: flex;
            
		}

		&__card-box {
          
            display: grid;
            grid-template-columns: 1fr 1fr;
            @media (max-width:576px) {
               grid-template-columns: 1fr;
            }
		}

        

		&__global-search-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
          
            height: 55px;
         
		}

		&__global-search-header-stable {
            @include letterSemiboldDarkBlue;
            margin-right: 20px;
            padding: 0;
            margin-bottom: 0;
		}

		&__global-search-header-changeable {
            @include letterContentSecondarySmallGrayClear;
            color: #7481FF;
            margin-bottom: 0;
		}

        &__global-search-item-left {
            
            height: 55px;
            width: 50%;
        }

        &__global-search-item-right {
            
            height: 55px;
            width: 50%;
        }


        &__open-arrow-box {
            display: flex;
            justify-content: space-between;
            @include letterSemiboldDarkBlue;

        }

        .inp-box-cross-on {
            display: flex;
            flex-wrap: wrap;
        }

        

        .inp-container {
            width: 300px;
            padding: 8px;
            margin-top: 5px;
            height: 45px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            @media (max-width:1440px) {
                width: 300px;
            }
            @media (max-width:1200px) {
                width: 275px;
            }
            @media (max-width:992px) {
                width: 200px;
            }
            @media (max-width:768px) {
                width: 150px;
            }
            

        }
        .inp-cont-box-content {
            display: flex;
            justify-content: space-between;
            padding-bottom: 23px;
            @include   letterSemiboldDarkBlue   ;
            font-size: 1.5rem;
        }

        .inp-box-cross-on-undo {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: $undo;
            border-radius: 5px;
          
            padding-left: 7px;
            padding-right: 7px;
            cursor: pointer;
            .inp-box-cross-on-undo__text-undo-box {
                border-width:2px;
                border-style: solid;
                border-color: #000;
                border-radius: 5px;

                .inp-box-cross-on-undo__text-undo-box-text {
                    padding: 10px;
                }
            }
            .inp-box-cross-on-undo__text-statement-box {
                padding-left: 5px;
                padding-right: 5px;
                text-align: center;
                .inp-box-cross-on-undo__text-statement-box-text {
                    
                    text-align: center;
                }



            }

            

        }
   

        .activeinptrans {
             height: 123px;
             padding-bottom: 25px;
        }
        .activeinpprice {
            height: 123px;
            padding-bottom: 25px; 
        }
        .activeinpbody {
            height: 180px;
            padding-bottom: 25px; 
        }
        .activeinpyear {
             height: 123px;
             padding-bottom: 25px;
        }
        .activeinpkilo {
             height: 123px;
             padding-bottom: 25px;
        }
        .activeinptype {
             height: 220px;
             padding-bottom: 25px;
        }
        
        .activecross {
            height: fit-content;
    
        }
        .arrfirstitem {
            background-color: $colorTitleBurgerBlueDark;
            border-radius: 5px;
        }
        .minitemclass {
            background-color: red;
            border-radius: 5px;
        }
        .clicked {
                color: #7481FF;
        }
        

        .transmission-choice-block {

            &__checkboxes {

                &_item {
                    display: flex;
                    align-items: center;
                }

                &_item-icon-bloc {
                    width: 20px;
                    height: 20px;
                    border-radius: 2px;
                    border-width:1px;
                    border-style: solid;
                    border-color: #D7D7D7;
                    position: relative;
                    opacity: 0;

                }

                &_item-icon-bloc-icon {
                    color: #7481FF;
                    font-size: 15px;
                    position:absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);

                }

                &_item-icon-bloc-input {
                    appearance: none;
                }
                &_item-icon-bloc-input-label {
                    @include   letterSemiboldDarkBlue   ;
                    font-size: 1.5rem;
                }
            }
            .visible {
                opacity: 1;
            }

            

            &__result {
            }

            &__result-item {
                cursor: pointer;
            }

            &__result-item-xmark {
                color: #7481FF;
            }

            &__result-item-text {
                @include   letterSemiboldDarkBlue   ;
                font-size: 1.5rem;
                background-color: aqua;
            }
            
        }

        &__detailed-search-box {
            @media (max-width:992px) {
               display: none;
            }
        }
        &__global-search-item-left {
            justify-content: space-around;
        }
        &__global-search-item-left-search-vertical-trigger {
            display: none;
            @media (max-width:992px) {
               display: flex;
               align-items: center;
               justify-content: center;
               position: relative;
            }
        }
        &__global-search-item-left-search-vertical-trigger-span {
            @media (max-width:992px) {
               margin-left: 10px;
            }
        }
        &__global-search-item-left-search-vertical-trigger-cross-icon {
            position: relative;
      
            display: none;
            @media (max-width:992px) {
               display: block;
               position: static;
            }
        }
        &__global-search-item-left-search-vertical-trigger-cross-icon-part1 {
            position: absolute;
            left:8px;
            top: 8px;
        }
        &__global-search-item-left-search-vertical-trigger-cross-icon-part2 {
            position: absolute;
            left:8px;
            top: 8px;
        }
        &__global-search-item-left-search-vertical-trigger-span {
            white-space: nowrap;
       
        }
        .w100 {
            width: 100%;
        }
        .mr200 {
            margin-right: 50px;
        }
        


        
            




       

        


}





    
    
</style>