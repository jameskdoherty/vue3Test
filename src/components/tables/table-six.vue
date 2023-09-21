<template>
    <div class="table-classic__container">
        <!-- <button v-on:click="addCount">Add count to child</button>
         <button v-on:click="subtractCount">subtractCount count to child</button> -->
        <table class="tbl6" tabindex="0">
            <colgroup>
                <col>
                <col>
                <col>
                <col>
            </colgroup>
            <thead>
                <tr>
                    <th><span>Education system</span> <span><i class="fa fa-chevron-down"></i><i
                                class="fa fa-chevron-up"></i></span></th>
                    <th><span>Male score</span> <span><i class="fa fa-chevron-down"></i><i
                                class="fa fa-chevron-up"></i></span></th>
                    <th><span>Female score</span> <span><i class="fa fa-chevron-down"></i><i
                                class="fa fa-chevron-up"></i></span></th>
                    <th><span>Score difference between<br>male and female students</span>
                        <span><i class="fa fa-chevron-down"></i><i class="fa fa-chevron-up"></i></span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <child-component @interface="getChildInterface"></child-component>

            </tbody>
        </table>
    </div>
</template>
 
<script>
import { onMounted, ref, watch, computed } from 'vue'
import { DataService } from '../../services/api/data-service';
import M8chart_data from '../../assets/testdata/m8chart_data.json';
import ChildComponent from './child-component.vue'

import table8_data from '../../assets/testdata/table8_data.json';
// import FigureControl from './FigureControl.js';
// import PisaTable from './PisaTable.js'
// import PisaTable2 from './PisaTable2.js'
// import PisaTable3 from './PisaTable3.js'


export default {
    name: 'Table-Six',
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
            data: [{ 'country': 'OECD average' }, { 'country': 'United States' }],
            tableData: [],
            tableHeaders: [],
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
        addData(data) {
            console.log('add data', data)
            this.$options.childInterface.addData(data)
        },
        addHeaders(headers) {
            console.log('add headers', headers)
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

                console.log('tablem8 finalmappedata', finalMappedData)
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