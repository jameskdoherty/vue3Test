<template>
    <div class="table-classic__container">
        <pisa-table-9 :data="data" :headers="headers"></pisa-table-9>
    </div>
</template>
  
<script>

import { onMounted, ref, watch, computed } from 'vue'
import { DataService } from '../../../services/api/data-service'
import Table9JSON from '../../../assets/testdata/table9_data_math.json'
const table9JSON = ref(Table9JSON);
import PisaTable9 from '@/components/PisaTable9.vue';

import table9_data_math from '../../../assets/testdata/table9_data_math.json';
import table9_data_reading from '../../../assets/testdata/table9_data_reading.json';
import table9_data_science from '../../../assets/testdata/table9_data_science.json';

export default {
    name: 'TableM9',
    components: {
        PisaTable9
    },
    data() {
        return {
            headers: ['Percentage of students enrolled in schools eligible for FRPL', 'Average score', 'Score difference from U.S. average score'],
            data: [],
            tableData: [],
            rawData: [],
            figureControls: {},
            whichSection: '',


        };
    },
    created() {

        this.subscription = DataService.getTableM7Data().subscribe(
            allResults => {
                if (allResults.response) {
                    console.log('Table9 allresults', allResults.response);
                    this.rawData.push(allResults);
                } else {
                    this.data = table9JSON;

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
                        console.log('tablem9 ret.values', ret.values)
                        return ret;
                    }
                }



                console.log('table9 what current section', this.whichSection)
                if (this.whichSection.includes('/mathematics')) {
                    const table9data = ref(table9_data_math.result)
                    this.data = table9data.value
                } else if (this.whichSection.includes('/reading')) {
                    const table9data = ref(table9_data_reading.result)
                    this.data = table9data.value
                } else if (this.whichSection.includes('/science')) {
                    const table9data = ref(table9_data_science.result)
                    this.data = table9data.value
                }

            })


        console.log('Table9 created')

    },
    mounted() {
        this.whichSection = this.$route.path;
        console.log('table9 current', this.whichSection)
    },
    beforeUnmount() {
        this.subscription.unsubscribe();
    },

}
</script>
  