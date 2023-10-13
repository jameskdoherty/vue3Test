<template>
  <div class="chart__controller">
    <div class="sub-contain d-flex j-around">
      <div class="grouping">
        <div class="thead d-flex j-space align-e">
          <span class="like-th m6-sort-alpha">Education system <i class="fa fa-chevron-down"></i><i
              class="fa fa-chevron-up"></i></span>
          <span class="like-th m6-sort-score-gap"><span>Score difference
              between<br>male and female students</span> <i class="fa fa-chevron-down"></i><i
              class="fa fa-chevron-up"></i></span>
        </div>
        <double-horizontal-bar-chart :data="THEFINALFINALdataLeftSide" />
      </div>
      <div class="grouping">
        <div class="thead d-flex j-space align-e">
          <span class="like-th">Education system</span>
          <span class="like-th">Score difference between<br>male and female
            students</span>
        </div>
        <double-horizontal-bar-chart :data="THEFINALFINALdataRightSide" />
      </div>
    </div>
    <p class="axis-title">Difference in average mathematics literacy scores</p>
  </div>
  <div id="Chart-6">
    <h1>Chart 6</h1>
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
      processedData: [],
      finalData: [],
      THEFINALFINALdataLeftSide: [],
      THEFINALFINALdataRightSide: [],
    };
  },
  created() {

    this.subscription = DataService.getChartSixData().subscribe(
      allResults => {
        console.log('&&&Chart 6 allresults', allResults)

        var allResultsData = allResults

        function _processChartData(data) {
          var filteredData = data.filter(function (element, index, array) {
            return element.focalValLabel == 'Male';
          })
          console.log('&&&Chart 6 filteredData', filteredData)
          var finalData = [];
          var figureControls = {};
          filteredData.forEach((element, index, array) => {

            if (element.targetValue != 999 && element.focalValue != 999) {
              var currentRow = {}
              finalData[finalData.length] = currentRow;
              currentRow['country'] = element.jurisLabel;
              if (element.jurisdiction == 'IN3') currentRow['country'] = 'OECD average'
              currentRow['countryId'] = element.jurisdiction;
              currentRow['maleScore'] = element.focalValue;
              currentRow['femaleScore'] = element.targetValue;
              currentRow['gap'] = element.gap;
              currentRow['sig'] = element.sig;
            }
          })
          return finalData;
        }

        this.processedData = _processChartData(allResultsData)
        console.log('&&&Chart 6 processeddata', this.processedData)

        this.string = JSON.stringify(this.processedData)
        console.log('&&&Chart 6 the stringified processed data string', this.string)

        var THEFINALdata = getSortedFilteredData(this.string, this.sortFilterStatus)
        console.log('&&&Chart 6 the THEFINALdata', THEFINALdata)

        var half_length = Math.floor(THEFINALdata.length / 2);

        console.log('half_length', half_length)

        this.THEFINALFINALdataLeftSide = THEFINALdata.slice(0, half_length);
        this.THEFINALFINALdataRightSide = THEFINALdata.slice(THEFINALdata.length / 2, THEFINALdata.length);
      })



    class FigureSortFilterStatus {
      constructor() {
        this.keyToSortBy = 'gap';
        this.sortDirection = -1;
        this.isOECDOnly = true;
        this.isOECDFirst = true;
      }

      setKeyToSortBy(key) {
        if (key == this.keyToSortBy) {
          this.sortDirection = -this.sortDirection;
          return;
        } else {
          this.keyToSortBy = key;
          this.sortDirection = (this.keyToSortBy == 'country') ? 1 : -1
        }
      }
    }
    this.sortFilterStatus = new FigureSortFilterStatus();
    console.log('sort filter', this.sortFilterStatus.keyToSortBy)


    function _isOECDCountry(countryId) {
      var oecdCountries = ['AUS', 'AUT', 'BEL', 'CAN', 'CHL', 'COL', 'CRI', 'CZE', 'DNK', 'EST', 'FIN', 'FRA', 'DEU', 'GRC', 'HUN', 'IN3', 'ISL', 'IRL', 'ISR', 'ITA', 'JPN', 'KOR', 'LTU', 'LUX', 'LVA', 'MEX', 'NLD', 'NZL', 'NOR', 'POL', 'PRT', 'SVK', 'SVN', 'ESP', 'SWE', 'CHE', 'TUR', 'GBR', 'USA'];
      return oecdCountries.indexOf(countryId) != -1
    }

    function getSortedFilteredData(data, sortFilterStat) {

      const propComparator = (propName, direction) => (a, b) => {
        if (direction == -1) return a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? 1 : -1
        return a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1
      }


      var ret = JSON.parse(data)
      console.log('retas', ret)

      ret.sort(propComparator(sortFilterStat.keyToSortBy, sortFilterStat.sortDirection))

      let finalMappedData = ret.map((element, index, array) => {
        console.log('element finalmappeddata chart6', element)
        var ret = {}
        ret.country = element.country
        ret.countryId = element.countryId
        if (ret.countryId == 'IN3') ret.country = 'OECD average';
        var gap = Math.round(element['gap'])
        var maleScore = Math.round(element['maleScore']);
        var femaleScore = Math.round(element['femaleScore'])
        ret.values = [maleScore, femaleScore, gap];
        var gapDecorator = null;
        var maleScoreDecorator = null;
        var femaleScoreDecorator = null;
        if (gap == 0) gapDecorator = { 'transform': '#' };
        if (element['sig'] == 'HIGHER' || element['sig'] == 'LOWER') gapDecorator = { 'afterValue': '*' };
        ret.decorators = [maleScoreDecorator, femaleScoreDecorator, gapDecorator];
        return ret;
      });


      console.log('finalmappeddata Chart6', finalMappedData)

      return finalMappedData;

    }
  },
  beforeUnmount() {
    this.subscription.unsubscribe();
  },
  methods: {
    addData() {
      // add random value from 0 to 50 to array
      //this.data = [...this.data, Math.round(Math.random() * 50)];
    },
    filterData() {
      this.data = this.data.filter((v) => v <= 35);
    },
  },
};
</script>
  
<style scoped></style>