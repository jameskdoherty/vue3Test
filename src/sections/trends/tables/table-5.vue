<template>
    <div class="table-classic__container">
        <pisa-table-c :data="data" :headers="headers" :type="type"></pisa-table-c>
    </div>
</template>
  
<script>

import { onMounted, ref, watch, computed } from 'vue'
import { DataService } from '../../../services/api/data-service'
import Table7JSON from '../../../assets/testdata/table7_data_math.json'
const table7JSON = ref(Table7JSON);
import ChildComponent from '../../../components/child-component.vue'
import PisaTableC from '@/components/PisaTableC.vue';

export default {
    name: 'Table5',
    components: {
        PisaTableC
    },
    data() {
        return {
            data: [],
            tableData: [],
            headers: ['Average score and selected percentiles', '2000 score', '2003 score', '2009 score', '2012 score', '2015 score', '2018 score', '2022 score'],
            tableHeaders: ['race', 'averageScore', 'scoreDifferenceFromUSAvg', 'sig'],
            rawData: [],
            figureControls: {},
            sort: 0,
            type: 'table5',
            whichSection: ''


        };
    },
    created() {


        this.subscription = DataService.getTable5Data().subscribe(
            allResults => {
                console.log('Table 5 created', allResults)
                //_processPercentileData

                let trendYears = '2000,2003,2009,2012,2015,2018,2022';
                let lastYear = 2022;
                let firstYear = 2000;
                let priorYear = 2018;

                var filteredData = allResults.filter(function (element, index, array) {
                    return element.targetYear == lastYear || (element.focalYear == lastYear && element.targetYear == priorYear);

        
                })
                var finalData = [];

                filteredData.forEach((element, index, array) => {
                    console.log('table 5 element', element)
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


                var temp = finalData[0];
                console.log('TABLE 5 temp', temp)
                finalData[0] = finalData[1]
                console.log('TABLE 5 finalData[0]', finalData[0])
                finalData[1] = finalData[2];
                console.log('TABLE 5 finalData[1]', finalData[1])
                finalData[2] = temp;
                console.log('TABLE 5 finalData[2]', finalData[2])
                var mapFunction = function (element, index, array) {
                    var ret = {}
                    var labels = { 'P1': '10th percentile', 'P2': '25th percentile', 'MN': 'Average score', 'P7': '75th percentile', 'P9': '90th percentile' }
                    ret.statType = labels[element.statType]
                    ret.values = trendYears.split(',').map(element1 => Math.round(element['Year' + element1]))
                    ret.decorators = trendYears.split(',').map(element1 => element['sig' + element1])
                    return ret;
                }
                
                this.data = finalData.map(mapFunction);
                console.log('TABLE 5 MAPPED finaldata', this.data)


                let finalMappedData = this.data.map((ele, index) => {
                    
                //     if (ele.valLabel === 'Lowest ESCS Quartile (US Based)') {
                //       this.groups.push('Bottom quarter')
                //   } else if (ele.valLabel === 'Second ESCS Quartile (US Based)') {
                //        this.groups.push('Second quarter')
                //   } else if (ele.valLabel === 'Third ESCS Quartile (US Based)') {
                //       this.groups.push('Third quarter')
                //   } else if (ele.valLabel === 'Highest ESCS Quartile (US Based)') {
                //       this.groups.push('Top quarter')
                //   }
                  //this.data.push(Math.floor(ele.targetValue));
                  //console.log(ele.valLabel,'this.groups[index] ele.valLabel')
                 // this.groups.push(ele.valLabel);

                  console.log('table 5 finalmapped ele',ele);
                  console.log('table 5 finalmapped ele',ele.values[index]);

                  return {
                      statType: ele.statType,
                      pctValue1: ele.values[0],
                      pctValue2: ele.values[1],
                      pctValue3: ele.values[2],
                      pctValue4: ele.values[3],
                      pctValue5: ele.values[4],
                      pctValue6: ele.values[5]
                      
                  }
              });


              console.log('TABLE 5 absolutely MAPPED finaldata', finalMappedData)


                //const table5data = ref(finalData)
                //console.log('child component table 5 data', table5data.value)

                //this.tableData = table5data


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

table thead tr th {
    padding-top: 0.5em;
}
</style> 