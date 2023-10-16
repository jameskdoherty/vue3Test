<template>
    <div class="table-classic__container">
        <pisa-table-7 :data="data" :headers="headers" :type="type"></pisa-table-7>
    </div>
</template>
  
<script>

import { onMounted, ref, watch, computed } from 'vue'
import { DataService } from '../../../services/api/data-service'
import Table7JSON from '../../../assets/testdata/table7_data_math.json'
const table7JSON = ref(Table7JSON);
import PisaTable7 from '@/components/PisaTable7.vue';

import table7_data_math from '../../../assets/testdata/table7_data_math.json';
import table7_data_reading from '../../../assets/testdata/table7_data_reading.json';
import table7_data_science from '../../../assets/testdata/table7_data_science.json';

export default {
    name: 'TableM7',
    components: {
        PisaTable7
    },
    data() {
        return {
            headers: ['Race/ethnicity', 'Average score', 'Score difference from U.S. average score'],
            data: [],
            tableData: [],
            rawData: [],
            figureControls: {},
            sort: 0,
            type: 'table7',
            whichSection: '',


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

                if (this.whichSection.includes('/mathematics')) {
                    const table7data = ref(table7_data_math.result)
                    this.data = table7data.value
                } else if (this.whichSection.includes('/reading')) {
                    const table7data = ref(table7_data_reading.result)
                    this.data = table7data.value
                } else if (this.whichSection.includes('/science')) {
                    const table7data = ref(table7_data_science.result)
                    this.data = table7data.value
                }



                // this.tableData = JSON.parse(JSON.stringify(table7data.value))
                // console.log('childcomp send to child component table7 data',this.tableData)


            })
    },
    mounted() {
        this.whichSection = this.$route.path;
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