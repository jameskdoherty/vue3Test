<template>
   <div class="table-classic__container">
    <pisa-table-8 :data="data" :headers="headers" :type="type"></pisa-table-8>
    </div>
</template>

<script>
import { onMounted, ref, watch, computed } from 'vue'
import { DataService } from '../../../services/api/data-service';
import M8chart_data from '../../../assets/testdata/m8chart_data.json';
import PisaTable8 from '@/components/PisaTable8.vue';

import table8_data from '../../../assets/testdata/table8_data.json';


export default {
    name: 'Table-M8',
    components: {
        PisaTable8
    },
    data() {
        return {
            headers: ['Bottom quarter', 'Second quarter', 'Third quarter', 'Top quarter', 'All students'],
            data: [],
            tableData:[],
            tableHeaders:[],
            rawData: [],
            figureControls: {},
            type: 'table8'


        };
    },
    created() {

        this.subscription = DataService.getChartEightData().subscribe(
            allResults => {
                console.log('---pisa table 8 allresults', allResults)

                let data = [];
                let temporaryData = [];
                let AllStudentsOECD = [];
                let AllStudentsUSA = [];
                let USAvalues = [];
                let USAsig = [];
                let OECDsig = [];
                let OECDvalues = [];
                let allStudentsUSAValue = 504;
                let AllStudentsOECDAvgValue = "476*";
                //let theHeaders = ['group', 'oecd', 'unitedstates', 'significant'];
               

                temporaryData[0] = { 'country': 'OECD average', 'countryId': 'IN3' };
                temporaryData[1] = { 'country': 'United States', 'countryId': 'USA' };

                let row = allResults.find(element => element.focalJurisdiction == 'USA');
                console.log('table8 row', row)


                var filteredData = allResults.filter(function (element) {
                    return element.targetJurisdiction == 'USA';
                })
                var filteredDataOECD = allResults.filter(function (element) {
                    return element.targetJurisdiction == 'IN3';
                })

                console.log('table8 filteredata', filteredData)

                let finalMappedDataUSA = filteredData.map((ele) => {
                    console.log('table8 element', ele)
                    let allStudents0 = Math.round(ele.targetValue) ;
                    AllStudentsUSA.push(Math.round(ele.targetValue))
                    USAvalues.push(allStudents0)
                    USAsig.push(ele.sig)
                    
                    let total = AllStudentsUSA.reduce((accumulator, currentValue) => {
                        return accumulator + currentValue
                    },0);
                    let allTotal = Math.round((total/filteredData.length))

                    console.log('table8 usa',allStudents0)
                    console.log('table8 total',total)
                    console.log('table8 allTotal',allTotal)
                    console.log('table8 USAsig',USAsig)

                    return {
                        country: 'United States' ,
                        countryId: 'USA',
                        allstudents: allStudentsUSAValue,
                        valValue1: USAvalues[0],
                        valValue1sig: USAsig[0],
                        valValue2: USAvalues[1],
                        valValue2sig: USAsig[1],
                        valValue3: USAvalues[2],
                        valValue3sig: USAsig[2],
                        valValue4: USAvalues[3],
                        valValue4sig: USAsig[3],
                    }
                });

                let finalMappedDataOED = filteredDataOECD.map((ele) => {
                    console.log('table8 element', ele)
                    var allStudents1 = Math.round(ele.targetValue) + ((ele.sig == 'HIGHER' || ele.sig =='LOWER') ? '*':'');
                    OECDvalues.push(allStudents1);
                    AllStudentsOECD.push(Math.round(ele.targetValue));
                    OECDsig.push(ele.sig);
                    
                    var total = AllStudentsOECD.reduce((accumulator, currentValue) => {
                        return accumulator + currentValue
                    },0);
                    var allTotal = Math.round((total/filteredDataOECD.length))

                    console.log('table8 oecd',allStudents1)
                    console.log('table8 total',total)
                    console.log('table8 allTotal',allTotal)

                    return {
                        country: 'OECD average' ,
                        countryId: 'IN3',
                        allstudents: AllStudentsOECDAvgValue,
                        valValue1: OECDvalues[0],
                        valValue1sig: OECDsig[0],
                        valValue2: OECDvalues[1],
                        valValue2sig: OECDsig[1],
                        valValue3: OECDvalues[2],
                        valValue3sig: OECDsig[2],
                        valValue4: OECDvalues[3],
                        valValue4sig: OECDsig[3],
                    }
                });

                if (finalMappedDataOED.length == 4) {
                    console.log('table8 finalMappedDataUSA',finalMappedDataUSA[3])
                    console.log('table8 finalMappedDataOED',finalMappedDataOED[3])

                    this.data.push(finalMappedDataOED[3])
                    this.data.push(finalMappedDataUSA[3])

                    console.log('table8 DATA SENT', this.data)
                }
                
                // finalMappedData.forEach((element, index, array) => {

                //     let keys = Object.keys(array[index]);
                //     console.log(keys)
                //     theHeaders.push(keys);

                // })

                //console.log(theHeaders)
                
               // this.tableHeaders = theHeaders
               // this.tableData = finalMappedData

                //this.data = finalMappedData;
              //  console.log('table8 adding data to child component table8',this.tableData)
                //this.addData(this.tableData)
               // this.addHeaders(this.tableHeaders)

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
  


}
</script>

<style>


table thead tr th {
  padding-top: 0.5em;
}

.main-content .table-classic table thead tr th[colspan] {
  background-color: var(--clr-showy);
  border-bottom: none;
  border-radius: 0.4em 0.4em 0 0;
  padding: 0.4em 0;
  text-align: center;
}

.main-content .table-classic table thead tr th {
    border-bottom: 3px solid var(--clr-dark);
    line-height: 1.2;
    text-align: right;
    vertical-align: bottom;
}

.main-content .table-classic table thead tr.headers th:first-child {
  text-align: right;
}

/* .main-content .table-classic table th, .main-content .table-classic table td {
    padding: 0.2em 0.5em;
} */


</style>