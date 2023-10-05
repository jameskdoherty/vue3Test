<template>
    <div class="table-classic__container">
        <button v-on:click="addCount">Add count to child</button>
        <button v-on:click="subtractCount">subtractCount count to child</button>
        <child-component @interface="getChildInterface"></child-component>
    </div>
</template>
  
<script>

import { onMounted, ref, watch, computed } from 'vue'
import { DataService } from '../../../services/api/data-service'
import Table7JSON from '../../../assets/testdata/table7_data.json'
const table7JSON = ref(Table7JSON);
//import FigureSortFilterTest from './figure-sort-test'
import ChildComponent from '../../../components/child-component.vue'
//import FigureControl from './FigureControl.js';
// import PisaTable from './PisaTable.js'
// import PisaTable2 from './PisaTable2.js'
//import PisaTable3 from './PisaTable3.js'

//import table7_data from '../../assets/testdata/table7_data.json';

export default {
    name: 'Table5',
    components: {
        ChildComponent
    },
    childInterface: {
        addCount: () => { },
        subtractCount: () => { },
        setKeyToSortBy: () => { },
        sortedProperties: () => { },
        addData: () => { },
        addHeaders: () => { },
    },
    data() {
        return {
            data: [],
            tableData: [],
            tableHeaders: ['race', 'averageScore', 'scoreDifferenceFromUSAvg', 'sig'],
            rawData: [],
            figureControls: {},
            sort: 0


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
        addData(data) {
            this.$options.childInterface.addData(data)
        },
        addHeaders(headers) {
            this.$options.childInterface.addHeaders(headers)
        },
        subtractCount() {
            this.$options.childInterface.subtractCount();
        },
        setKeyToSortBy(key) {
            console.log(key)
            this.sort = this.$options.childInterface.setKeyToSortBy(key)
        },
        sortedProperties() {
            this.$options.childInterface.sortedProperties();
        }


    },
    created() {

        console.log('Table 5 created')
        this.subscription = DataService.getTable5Data().subscribe(
            allResults => {
                console.log(allResults)
                //_processPercentileData
                //var data = JSON.parse(rawData)
                var filteredData = allResults.filter(function (element, index, array) {
                    return element.targetYear == '2022' || (element.focalYear == '2022' && element.targetYear == '2018');
                })
                var finalData = [];
                filteredData.forEach((element, index, array) => {
                    var statType = element.statType.split(':')[1];
                    var testArray = finalData.filter((element) => {
                        return element.statType == statType;
                    })
                    if (element.targetValue != 999 && element.focalValue != 999) {
                        var currentRow = {}
                        if (testArray.length == 0) {
                            finalData[finalData.length] = currentRow;
                            currentRow.statType = statType
                        } else {
                            currentRow = testArray[0]
                        }
                        currentRow["Year" + element.focalYear] = element.focalValue;
                        currentRow['gap' + element.focalYear] = element.gap;
                        currentRow['sig' + element.focalYear] = element.sig;
                        currentRow['errorFlag' + element.focalYear] = element.focalErrorFlag;
                    }
                })

                console.log('TABLE 5 finaldata', finalData)


                const table5data = ref(finalData)
                console.log('child component table 5 data', table5data.value)

                this.tableData = table5data
                this.addData(this.tableData)
                this.addHeaders(this.tableHeaders)














                if (allResults.response) {
                    // console.log('Table 7 allresults', allResults.response);
                    // this.rawData.push(allResults);
                } else {
                    // this.data = table7JSON;
                    // console.log('table7', this.data)
                    // var mapFunction = function (element, index, array) {
                    //     var ret = {}
                    //     ret.headers = [element.race]
                    //     // if(element.countryId == 'USA') ret.headers = ['<span>' + element.country + '</span>']
                    //     var score = Math.round(element['mnScore'])
                    //     var gap = Math.round(element['gap'])
                    //     if (element['sig'] == 'HIGHER' || element['sig'] == 'LOWER') score += '*';
                    //     if (element['sig'] == 'NA') gap = '\u2020';
                    //     if (gap == 0) gap = ''
                    //     ret.values = [score, gap];
                    //     console.log('tablem7 ret.values', ret.values)
                    //     return ret;
                    // }
                    // console.log('mapFunction tableM7', mapFunction)
                    //console.log('this.data tableM7', this.data)

                    // console.log('sort created',this.sort)

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

                // const table7data = ref(table7_data.result)
                // console.log('child component table8 data', table7data.value)

                // this.tableData = table7data
                // this.addData(this.tableData)
                // this.addHeaders(this.tableHeaders)


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
  