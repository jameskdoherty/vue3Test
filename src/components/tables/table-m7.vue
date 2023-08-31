<template>
    <div class="table-classic__container">
        <button v-on:click="addCount">Add count to child</button>
        <button v-on:click="subtractCount">subtractCount count to child</button>
    <child-component @interface="getChildInterface"></child-component>
    </div>
</template>
  
<script>

import { onMounted, ref, watch, computed } from 'vue'
import { DataService } from '../../services/api/data-service'
import Table7JSON from '../../assets/testdata/table7data.json'
const table7JSON = ref(Table7JSON);
// import { MyComponent } from './my-component'
//import FigureSortFilterTest from './figure-sort-test'
import ChildComponent from './child-component.vue'
//import FigureControl from './FigureControl.js';
// import PisaTable from './PisaTable.js'
// import PisaTable2 from './PisaTable2.js'
//import PisaTable3 from './PisaTable3.js'

export default {
    name: 'TableM7',
    components: {
        ChildComponent
    },
    childInterface: {
        addCount: () => { },
        subtractCount: () => { },
        setKeyToSortBy: () => {},
        //sortedProperties: () => {}
    },
    data() {
        return {
            data: [],
            rawData: [],
            figureControls: {},
            sort:0


        };
    },
    methods: {
        // Setting the interface when emitted from child
        getChildInterface(childInterface) {
            this.$options.childInterface = childInterface;
        },

        // Add count through the interface
        addCount() {
            this.$options.childInterface.addCount();
        },
        subtractCount() {
            this.$options.childInterface.subtractCount();
        },
        setKeyToSortBy(key) {
            console.log(key)
            this.sort = this.$options.childInterface.setKeyToSortBy(key)
            
        },
        // sortedProperties() {
        //     this.$options.childInterface.sortedProperties();
        // }


    },
    created() {
        this.subscription = DataService.getTableM7Data().subscribe(
            allResults => {
                if (allResults.response) {
                    //console.log('allresults', allResults.response);
                    this.rawData.push(allResults);
                } else {
                    this.data = table7JSON;
                    console.log('table7', this.data)
                    var mapFunction = function (element, index, array) {
                        var ret = {}
                        ret.headers = [element.race]
                        // if(element.countryId == 'USA') ret.headers = ['<span>' + element.country + '</span>']
                        var score = Math.round(element['mnScore'])
                        var gap = Math.round(element['gap'])
                        if (element['sig'] == 'HIGHER' || element['sig'] == 'LOWER') score += '*';
                        if (element['sig'] == 'NA') gap = '\u2020';
                        if (gap == 0) gap = ''
                        ret.values = [score, gap];
                        return ret;
                    }
                    console.log('mapFunction tableM7', mapFunction)
                    console.log('this.data tableM7', this.data)

                    console.log('sort created',this.sort)

                    //MyComponent.test();
                    //ComponentClass.setKeyToSortBy('femaleScore');
                    //console.log('ComponentClass',this.test)
                    //var TableMyFigureControl = new FigureControl(this.data, mapFunction, [new PisaTable3('table.tblm7')]);
                    // figureControls['tableM7'].sortFilterStatus.keyToSortBy = '';
                    // figureControls['tableM7'].sortFilterStatus.isOECDFirst = false;
                    // figureControls['tableM7'].sortFilterStatus.isOECDOnly = false;
                    // figureControls['tableM7'].updateFigures();

                    // console.log('TableMyFigureControl', this.TableMyFigureControl)





                }

            })
    },
    setup() {


    },
    beforeUnmount() {
        this.subscription.unsubscribe();
    },
    mounted() {
        this.setKeyToSortBy('gap');
        
        
    }
}
</script>
  