<template>
  <!-- wnajarian -> only way I could find to get rid of white space below the chart -->
  <div id="Chart-5" style="height: 500px;">
  <!-- <div id="Chart-5"> -->
    

    <!-- <h1>Chart 5</h1> -->
    <!-- <div class="chart chart-5" style="height: auto;"> -->

      <!-- chart m5 goes here -->

      <responsive-horizontal-line-chart @interface="getChildInterface" :data="THEFINALFINALdata" :height="height" :width="width" :bottom="padding"
        :trendyears="trendyears" />

    <!-- </div> -->

  </div>
</template>
  
<script>
import { DataService } from '../../../services/api/data-service';
import { PropComparator } from '../../../services/api/prop-comparator';
import ResponsiveHorizontalLineChart from "../../../components/ResponsiveHorizontalLineChart.vue";

export default {
  name: "Chart-Five",
  components: {
    ResponsiveHorizontalLineChart
  },
  childInterface: {
        sendData: () => {},
    },
  data() {
    return {
      data: [],
      // width: 920,
      width: 800,
      // height: 520,
      height: 400,
      padding: 100,/* this is a percentage*/
      trendyears: '2003,2006,2009,2012,2015,2018,2022',
      string: 'this is the string',
      THEFINALFINALdata: [],
    };
  },
  created() {

    let trendYears = '2003,2006,2009,2012,2015,2018,2022';
    let numberOfDataSets = 1;


    this.subscriptionFive = DataService.getTable5Data().subscribe(
      allResults => {
        console.log('---chart 5 allresults', allResults)
        console.log('trendy', this.trendyears)
        //Process Percentile
        var filteredData = allResults.filter(function (element, index, array) {
          return element.targetYear == '2022' || (element.focalYear == '2022' && element.targetYear == '2018');
        })
        //var finalData = [];
        var figureControls = {};

        filteredData.forEach((element, index, array) => {
          var statType = element.statType.split(':')[1];
          console.log('stat type', statType)
          var testArray = this.data.filter((element) => {
            console.log('TEST ARRAY', element)
            return element.statType == statType;
          })
          if (element.targetValue != 999 && element.focalValue != 999) {
            var currentRow = {}
            if (testArray.length == 0) {
              this.data[this.data.length] = currentRow;
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


        // var preFinalData = JSON.parse(string)
        //console.log('prefinal', this.preFinalData)

        //var ret = JSON.parse(JSON.stringify(this.data))
        //console.log('ret parse',ret)
        //let ret = this.data
        // console.log('SortFilterStatus', this.sortFilterStatus)
        //getSortedFilteredDatas(this.data);

        class FigureControl {
          // constructor(data, mapFunction, figures) {
          //   console.log('figurecontrol', data)
          //   console.log('figures', figures)
          //   this.data = data;
          //   this.mapFunction = mapFunction;
          //   this.figures = figures;
          //   this.sortFilterStatus = new FigureSortFilterStatus();
          //   this.numberOfDataSets = 1;
          //   this.showDataAfterMap;
          // }

          // updateFigures() {
          //   var data = this.getSortedFilteredData()
          //   console.log('updatefigu', data)
          //   for (var i = 0; i < this.figures.length; i++) {
          //     // console.log('update', i)

          //     // $(this.figures[i].selector).html('')
          //     console.log('remove these figures', this.figures[i].selector)
          //     this.figures[i].generate(data[i])
          //   }
          // }

          // getSortedFilteredData() {
          //   var ret = JSON.parse(JSON.stringify(this.data))
          //   ret.sort(propComparator(this.sortFilterStatus.keyToSortBy, this.sortFilterStatus.sortDirection))

          //   if (this.debug) {
          //     console.log(JSON.stringify(ret))
          //   }
          //   if (this.sortFilterStatus.isOECDFirst) {
          //     var oecdIndex = ret.map(function (element) { return element.countryId }).indexOf('IN3');
          //     ret.unshift(ret.splice(oecdIndex, 1)[0]);
          //   }
          //   if (this.sortFilterStatus.isOECDOnly) {
          //     ret = ret.filter((element) => {
          //       return _isOECDCountry(element.countryId)
          //     })
          //   }
          //   ret = ret.map(this.mapFunction);

          //   if (this.numberOfDataSets == 2) {
          //     var half_length = Math.floor(ret.length / 2);
          //     return [ret.slice(0, half_length), ret.slice(ret.length / 2, ret.length)];
          //   }
          //   return [ret];
          // }

        }



        //figureControls['figureM5'] = new FigureControl(finalData, mapFunction, [new HorizontalLineChart('figure.chart-5 svg')]);
        // figureControls['figureM5'].sortFilterStatus.keyToSortBy = 'statType';
        // figureControls['figureM5'].sortFilterStatus.isOECDFirst = false;
        // figureControls['figureM5'].sortFilterStatus.sortDirection = 1;
        // figureControls['figureM5'].sortFilterStatus.isOECDOnly = false;
        // figureControls['figureM5'].updateFigures();

        
        console.log('Chart5 thedata', this.data)
        this.string = JSON.stringify(this.data)
        console.log('string', this.string)
        var THEFINALdata = getSortedFilteredData(this.string, this.sortFilterStatus)
        console.log('finalfinaldata', THEFINALdata)
        //this.sendData(THEFINALdata)
        this.THEFINALFINALdata = THEFINALdata
        // console.log('FINALFINAL',this.THEFINALFINALdata)

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


    this.filterData()





    function isOECDCountry(countryId) {
      var oecdCountries = ['AUS', 'AUT', 'BEL', 'CAN', 'CHL', 'COL', 'CRI', 'CZE', 'DNK', 'EST', 'FIN', 'FRA', 'DEU', 'GRC', 'HUN', 'IN3', 'ISL', 'IRL', 'ISR', 'ITA', 'JPN', 'KOR', 'LTU', 'LUX', 'LVA', 'MEX', 'NLD', 'NZL', 'NOR', 'POL', 'PRT', 'SVK', 'SVN', 'ESP', 'SWE', 'CHE', 'TUR', 'GBR', 'USA'];
      return oecdCountries.indexOf(countryId) != -1
    }



    function getSortedFilteredData(data, sortFilterStat) {

      console.log('where is the data', data)
     
      const propComparator = (propName, direction) => (a, b) => {
        if (direction == -1) return a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? 1 : -1
        return a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1
      }

      var ret = JSON.parse(data)
      console.log('retas', ret)
      // console.log('the loaded data', data)
      // console.log('inside', sortFilterStat)
      // console.log('ret before', ret)
      ret.sort(propComparator(sortFilterStat.keyToSortBy, sortFilterStat.sortDirection))
      console.log('ret', ret)


      let finalMappedData = ret.map((element, index, array) => {
        console.log('element finalmappeddata 211', element)
        var ret = {}
        ret.statType = element.statType;
        ret.values = trendYears.split(',').map(element1 => Math.round(element['Year' + element1])) //[Math.round(element['Year2003']), Math.round(element['Year2006']), Math.round(element['Year2009']), Math.round(element['Year2012']), Math.round(element['Year2015']), Math.round(element['Year2018']), Math.round(element['Year2022'])];
        ret.decorators = trendYears.split(',').map(element1 => element['sig' + element1])
        return ret;
      });

      
      // if (this.debug) {
        //   console.log(JSON.stringify(ret))
      // }
      // if (sortFilterStat.isOECDFirst) {
      //   var oecdIndex = finalMappedData.map(function (element) { return element.countryId }).indexOf('IN3');
      //   finalMappedData.unshift(finalMappedData.splice(oecdIndex, 1)[0]);
      //   console.log('ret ', finalMappedData)
      // }
      // if (sortFilterStat.isOECDOnly) {
      //   console.log('sortFilterStat.isOECDOnly', finalMappedData)
      //   finalMappedData = finalMappedData.filter((element) => {
      //     return isOECDCountry(element.countryId)
      //   })
      // }


      
      // if (numberOfDataSets == 2) {
      //   console.log('data sets',this.numberOfDataSets)
      //   var half_length = Math.floor(finalMappedData.length / 2);
      //   return [finalMappedData.slice(0, half_length), finalMappedData.slice(finalMappedData.length / 2, finalMappedData.length)];
      // }

      console.log('finalmappeddata 229',finalMappedData)
      
      return finalMappedData;
    }

    // updateFigures() {
    //   var data = this.getSortedFilteredData()
    //   console.log('updatefigu', data)
    //   for (var i = 0; i < this.figures.length; i++) {
    //     // console.log('update', i)

    //     // $(this.figures[i].selector).html('')
    //     console.log('remove these figures', this.figures[i].selector)
    //     this.figures[i].generate(data[i])
    //   }
    // }


  },
  methods: {
    addData() {
      // add random value from 0 to 50 to array
      this.data = [...this.data, Math.round(Math.random() * 50)];
    },
    filterData() {
      this.data = this.data.filter((v) => v <= 35);
      console.log('this data methods', this.data)
    },
    sendData(finalData){
      console.log('senddata',finalData)
      this.$options.childInterface.sendData(finalData)
    }


  },
  beforeUnmount() {
    this.subscriptionFive.unsubscribe();
  },

};
</script>
  
<style></style>