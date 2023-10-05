<template>
  <div id="Chart-6">
    <h1>Chart 6</h1>
    <double-horizontal-bar-chart :data="processedData" />

  </div>
</template>
  
<script>
import { DataService } from '../../../services/api/data-service';
import DoubleHorizontalBarChart from "../../../components/DoubleHorizontalBarChart.vue"

export default {
  name: "Chart-Six",
  components: {
    DoubleHorizontalBarChart,
  },
  data() {
    return {
      processedData: [1,2,3,4],
      finalData:[]
    };
  },
  created() {

    this.subscription = DataService.getTableSixData().subscribe(
      allResults => {
        console.log('&&&Chart 6 allresults', allResults)

        var allResultsData = allResults

        var filteredData = allResults.filter(function (element, index, array) {
          // console.log('&&&Chart 6 element',element)
          return element.valLabel == 'Male';
        })
        var finalData = [];
        var figureControls = {};
        filteredData.forEach((element, index, array) => {

          if (element.targetValue != 999 && element.focalValue != 999) {
            var currentRow = {}
            finalData[finalData.length] = currentRow;
            currentRow['country'] = element.focalJurisLabel;
            if (element.jurisdiction == 'IN3') currentRow['country'] = 'OECD average'
            currentRow['countryId'] = element.focalJurisdiction;
            currentRow['maleScore'] = element.focalValue;
            currentRow['femaleScore'] = element.targetValue;
            currentRow['gap'] = element.gap;
            currentRow['sig'] = element.sig;
          }
        })
        console.log('&&&Chart 6 finaldata', finalData);

        function _processChart6Data(data){
          console.log('&&&Chart 6 data processed', data)
       
        // this.final = finalData
      }
      

      
        
        //console.log('&&&Chart 6 this processed data',this.processedData)
        
        function _isOECDCountry(countryId) {
          var oecdCountries = ['AUS', 'AUT', 'BEL', 'CAN', 'CHL', 'COL', 'CRI', 'CZE', 'DNK', 'EST', 'FIN', 'FRA', 'DEU', 'GRC', 'HUN', 'IN3', 'ISL', 'IRL', 'ISR', 'ITA', 'JPN', 'KOR', 'LTU', 'LUX', 'LVA', 'MEX', 'NLD', 'NZL', 'NOR', 'POL', 'PRT', 'SVK', 'SVN', 'ESP', 'SWE', 'CHE', 'TUR', 'GBR', 'USA'];
          return oecdCountries.indexOf(countryId) != -1
        }
        
        
        //this.processedData = _processChart6Data(allResultsData)

        //console.log('chart 3 data', allResultsData);
        //console.log('chart 3 meandata', allResultsMeanData);



      })
  },
  beforeUnmount() {
    this.subscription.unsubscribe();
  },
  methods: {
    addData() {
      // add random value from 0 to 50 to array
      this.data = [...this.data, Math.round(Math.random() * 50)];
    },
    filterData() {
      this.data = this.data.filter((v) => v <= 35);
    },
  },
};
</script>
  
<style scoped></style>