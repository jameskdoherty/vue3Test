<template>
   <div class="table-classic__container">
        <button v-on:click="addCount">Add count to child</button>
        <button v-on:click="subtractCount">subtractCount count to child</button>
        <child-component @interface="getChildInterface" ></child-component>
    </div>
</template>

<script>
import { onMounted, ref, watch, computed } from 'vue'
import { DataService } from '../../../services/api/data-service';
import M8chart_data from '../../../assets/testdata/m8chart_data.json';
import ChildComponent from '../../../components/child-component.vue'

import table8_data from '../../../assets/testdata/table8_data.json';
// import FigureControl from './FigureControl.js';
// import PisaTable from './PisaTable.js'
// import PisaTable2 from './PisaTable2.js'
// import PisaTable3 from './PisaTable3.js'


export default {
    name: 'Table-M8',
    components: {
        ChildComponent
    },
    childInterface: {
        addCount: () => { },
        subtractCount: () => { },
        setKeyToSortBy: () => { },
        sortedProperties: () => { },
        addData: () => {},
        addHeaders: () => {},
    },
    data() {
        return {
            data: [{ 'country': 'OECD average' }, { 'country': 'United States' }],
            tableData:[],
            tableHeaders:[],
            rawData: [],
            figureControls: {}


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
        addData(data){
            console.log('add data',data)
            this.$options.childInterface.addData(data)
        },
        addHeaders(headers){
            console.log('add headers',headers)
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

        this.subscription = DataService.getChartEightData().subscribe(
            allResults => {
                console.log('---table 8 allresults', allResults)

                let data = [];
                let theHeaders = ['group', 'oecd', 'unitedstates', 'significant'];
               

                data[0] = { 'country': 'OECD average', 'countryId': 'IN3' };
                data[1] = { 'country': 'United States', 'countryId': 'USA' };


                var filteredData = allResults.filter(function (element) {
                    return element.targetJurisdiction == 'USA';
                })

                console.log('table 8 filteredata', filteredData)

                let finalMappedData = filteredData.map((ele) => {

                    //this.data.push(Math.floor(ele.targetValue));
                    //this.groups.push(ele.valLabel);

                    return {
                        group: ele.valLabel,
                        oecd: Math.floor(ele.focalValue),
                        unitedstates: Math.floor(ele.targetValue),
                        significant: ele.sig == 'LOWER' || ele.sig == 'HIGHER' ? true : false,
                    }
                });

                console.log('tablem8 finalmappedata',finalMappedData)
                // finalMappedData.forEach((element, index, array) => {

                //     let keys = Object.keys(array[index]);
                //     console.log(keys)
                //     theHeaders.push(keys);

                // })

                console.log(theHeaders)

                this.tableHeaders = theHeaders
                this.tableData = finalMappedData
                this.addData(this.tableData)
                this.addHeaders(this.tableHeaders)

                //  var mapFunction = function (element) {
                //     console.log('table 8', element)
                    
                //     var ret = {}
                //     ret.headers = [element.country]
                //     ret.values = [element['Bottom quarter'], element['Second quarter'], element['Third quarter'], element['Top quarter'], element['All students']];
                //     return ret;
                // }

                // if (allResults) {
                //     console.log('8 allresults', allResults);

                // } else {
                //     this.rawData = M8chart_data;
                //     console.log('table8 raw', this.rawData['Array'])
                // }

                // for (var i = 0; i < this.allResults.length; i++) {
                //     var group = this.allResults[i].group
                //     console.log('group', group)
                //     this.data[0][group] = this.allResults[i].oecd;
                //     if (i < 3) {
                //         this.data[0][group] += '*';
                //     }
                //     this.data[1][group] = this.allResults[i].unitedstates;
                // }

                // this.data[0]['All students'] = '490*';
                // this.data[1]['All students'] = '505';

               

                // console.log('mapFunction', mapFunction)



                // figureControls['tableM8'] = new FigureControl(data, mapFunction, [new PisaTable3('table.tblm8')]);
                // figureControls['tableM8'].sortFilterStatus.keyToSortBy = '';
                // figureControls['tableM8'].sortFilterStatus.isOECDFirst = false;
                // figureControls['tableM8'].sortFilterStatus.isOECDOnly = false;
                // figureControls['tableM8'].updateFigures();
                //console.log('figureControls',figureControls)


            })





    },
    beforeUnmount() {
        this.subscription.unsubscribe();
    },
    mounted() {
        this.setKeyToSortBy('gap');
       


    }


}
</script>

<style></style>