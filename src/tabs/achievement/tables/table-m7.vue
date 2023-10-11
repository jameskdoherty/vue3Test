<template>
    <div class="table-classic__container">
        <pisa-table-a :data="data" :headers="headers" :type="type"></pisa-table-a>
    </div>
</template>
  
<script>

import { onMounted, ref, watch, computed } from 'vue'
import { DataService } from '../../../services/api/data-service'
import Table7JSON from '../../../assets/testdata/table7_data.json'
const table7JSON = ref(Table7JSON);
import PisaTableA from '@/components/PisaTableA.vue';

import table7_data from '../../../assets/testdata/table7_data.json';

export default {
    name: 'TableM7',
    components: {
        PisaTableA
    },
    data() {
        return {
            headers: ['Race/ethnicity', 'Average score', 'Score difference from U.S. average score'],
            data: [],
            tableData: [],
            rawData: [],
            figureControls: {},
            sort: 0,
            type: 'table7'


        };
    },
    created() {

        console.log('Table7 created')
        this.subscription = DataService.getTableM7Data().subscribe(
            allResults => {
                if (allResults.response) {
                    //console.log('Table7 allresults', allResults.response);
                   // this.rawData.push(allResults);
                } else {
                    this.data = JSON.parse(JSON.stringify(table7JSON))
                    //console.log('Table7 JSON.parse', this.data)
                   
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
                       // console.log('Table7 ret.values', ret.values)
                        return ret;
                    }
                    // console.log('mapFunction tableM7', mapFunction)
                }

                const table7data = ref(table7_data.result)
                console.log('to send to child component table7 data', table7data.value)

                this.data = table7data.value

                this.tableData = JSON.parse(JSON.stringify(table7data.value))
                console.log('childcomp send to child component table7 data',this.tableData)


            })
    },
    beforeUnmount() {
        this.subscription.unsubscribe();
    },
   
}
</script>
<style scoped>
.table-classic__container td {
    border-left: none;
}
</style>