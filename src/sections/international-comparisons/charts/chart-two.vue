<template>
    <div class="chart__controller d-flex j-center">
        <div class="grouping">
            <span class="directive">Sort by:</span>
            <button class="sort-alpha button-sort">Education system <span class=""></span></button>
            <button class="sort-below-two button-sort opt-2">Below level 2 <span class=""></span></button>
            <button class="sort-five-and-below button-sort opt-3">Levels 5 and above <span class=""></span></button>
        </div>
        <div class="grouping">
            <span class="directive">Filter by:</span>
            <input class="all-education-systems" type="radio" name="m2chart-toggle-one" id="m2chart-all-education-systems"
                checked="checked">
            <label for="m2chart-all-education-systems">
                All education systems
            </label>
            <input class="oecd-only" type="radio" name="m2chart-toggle-one" id="m2chart-oecd-only">
            <label for="m2chart-oecd-only">
                OECD members only
            </label>
        </div>
    </div>
    <div class="chart__graphic">
        <div class="left-column"><responsive-stacked-bar-chart :scores="dataSentToChart" /></div>
        <div class="right-column"><responsive-stacked-bar-chart :scores="dataSentToChart" /></div>
        
        
    </div>
</template>
 
<script>
import { onMounted, ref, watch, computed } from 'vue'
import { DataService } from '../../../services/api/data-service';
import ResponsiveStackedBarChart from "../../../components/ResponsiveStackedBarChart.vue";
//import ChildComponent from './child-component.vue'

// import FigureControl from './FigureControl.js';
// import PisaTable from './PisaTable.js'
// import PisaTable2 from './PisaTable2.js'
// import PisaTable3 from './PisaTable3.js'


export default {
    name: 'Chart-Two',
    components: {
        ResponsiveStackedBarChart,
    },
    data() {
        return {
            data: [{ 'country': 'OECD average' }, { 'country': 'United States' }],
            chartData: [],
            tableHeaders: [],
            rawData: [],
            figureControls: {},
            Chart2SortFilterStatus: {},
            dataSentToChart: []


        };
    },
    methods: {
        // Setting the interface when emitted from child



    },
    created() {

        this.subscription = DataService.getTable2Data().subscribe(
            allResults => {
                console.log('---chart 2 allresults', allResults)




                function _processM2Data(rawData) {
                    let cvData = rawData.pop();
                    let m2Data = rawData.map((element) => element);
                    console.log('m2Data', m2Data)
                    m2Data = m2Data.filter((element) => {
                        console.log('-----m2data', element)
                        if (element[0].targetJurisdiction == 'USA' && (element[0].focalErrorFlag & 64)) return false;
                        if (element[0].focalJurisdiction == 'USA' && (element[0].targetErrorFlag & 64)) return false;
                        return true;
                    })
                    let firstRowCopy = JSON.parse(JSON.stringify(m2Data[0]));
                    let firstRowOtherCountry = (firstRowCopy.targetJurisdiction == 'USA') ? firstRowCopy.focalJurisdiction : firstRowCopy.targetJurisdiction;
                    m2Data = m2Data.map(function (element) {
                        return createDataRow(element, 'USA');
                    })
                    m2Data[m2Data.length] = createDataRow(firstRowCopy, firstRowOtherCountry);


                    function createDataRow(dataSet, notFocal) {
                        let scoresInput = [];
                        let sigs = [];
                        let errorCodes = [];
                        let country;
                        let countryId;
                        dataSet.forEach(function (row) {
                            if (row.focalJurisdiction != notFocal) {
                                if (row.valValue == 4) {
                                    country = row.focalJurisLabel
                                    countryId = row.focalJurisdiction
                                    scoresInput[0] = row.focalValue
                                    errorCodes[0] = row.focalErrorFlag;
                                    // if (row.focalValue == '999') scoresInput[0] = '‡';
                                    scoresInput[0] = scoresInput[0];
                                    sigs[0] = (row.sig == 'HIGHER' || row.sig == 'LOWER') ? true : false;
                                } else if (row.valValue == 1) {
                                    scoresInput[1] = row.focalValue
                                    // if (row.focalValue == '999') scoresInput[1] = '‡';
                                    scoresInput[1] = scoresInput[1];
                                    errorCodes[1] = row.focalErrorFlag;
                                    sigs[1] = (row.sig == 'HIGHER' || row.sig == 'LOWER') ? true : false;
                                } else if (row.valValue == 2) {
                                    // if (row.focalValue == '999') scoresInput[2] = '‡';
                                    scoresInput[2] = row.focalValue
                                    errorCodes[2] = row.focalErrorFlag;
                                    sigs[2] = (row.sig == 'HIGHER' || row.sig == 'LOWER') ? true : false;
                                } else if (row.valValue == 3) {
                                    // if (row.focalValue == '999') scoresInput[3] = '‡';
                                    scoresInput[3] += row.cv;
                                    errorCodes[3] = row.focalErrorFlag;
                                    scoresInput[3] = row.focalValue
                                    sigs[3] = (row.sig == 'HIGHER' || row.sig == 'LOWER') ? true : false;
                                } else if (row.valValue == 5) {
                                    scoresInput[4] = row.focalValue
                                    // if (row.focalValue == '999') scoresInput[4] = '‡';
                                    // scoresInput[4] += row.cv;
                                    errorCodes[4] = row.focalErrorFlag;
                                    sigs[4] = (row.sig == 'HIGHER' || row.sig == 'LOWER') ? true : false;
                                }
                            }
                        })

                        if (countryId == 'IN3') country = 'OECD average';
                        if (countryId == 'USA') sigs = [false, false, false, false, false];
                        var isOECD = false;
                        if (_isOECDCountry(countryId)) isOECD = true;
                        return {
                            country: country,
                            countryId: countryId,
                            scores: scoresInput,
                            sigs: sigs,
                            errorCodes: errorCodes,
                            isOECD: isOECD
                        }
                    }
                    return m2Data;
                }

                //let m2Data = _processM2Data(allResults);
                //console.log('CHART2 Processed m2Data', m2Data);



                this.chartData = _processM2Data(allResults);
                console.log('CHART2 Chart Data', this.chartData);

                //updateCharts();

                // var formattedData = getFormattedData(this.chartData)

                var ret = []
                var sortFilterDataFunctions = []

                sortFilterDataFunctions.alphaSort = function (a, b) {
                    if (a.country == 'OECD average') return 1;
                    if (b.country == 'OECD average') return -1;
                    if (a.country < b.country) return 1;
                    else return -1;
                }

                sortFilterDataFunctions[0] = function (a, b) {
                    if (a.country == 'OECD average') return 1;
                    if (b.country == 'OECD average') return -1;
                    if (b.scores[0] == 999) return -1;
                    if (a.scores[0] > b.scores[0]) return 1;
                    else return -1;
                }

                sortFilterDataFunctions[1] = function (a, b) {
                    if (a.country == 'OECD average') return 1;
                    if (b.country == 'OECD average') return -1;
                    if (b.scores[1] == 999) return -1;
                    if (a.scores[1] > b.scores[1]) return 1;
                    else return -1;
                }

                sortFilterDataFunctions[2] = function (a, b) {
                    if (a.country == 'OECD average') return 1;
                    if (b.country == 'OECD average') return -1;
                    if (a.scores[4] == 999) return -1;
                    if (b.scores[4] == 999) return 1;
                    if (a.scores[4] > b.scores[4]) return 1;
                    else return -1;
                }

                sortFilterDataFunctions[3] = function (a, b) {
                    if (a.country == 'OECD average') return 1;
                    if (b.country == 'OECD average') return -1;
                    if (a.p9 - a.p1 > b.p9 - b.p1) return 1;
                    else return -1;
                }

                if (this.Chart2SortFilterStatus.oecdOnly) {

                    console.log('this.Chart2SortFilterStatus.oecdOnly', this.Chart2SortFilterStatus.oecdOnly)
                    this.chartData = this.chartData.filter(function (row) {
                        return row.isOECD;
                    })
                }




                if (this.Chart2SortFilterStatus.isAlphaSort) {
                    this.chartData.sort(sortFilterDataFunctions.alphaSort)
                    if (!this.Chart2SortFilterStatus.isStandardDirection) {
                        this.chartData.reverse();
                    }
                } else {
                    this.chartData.sort(sortFilterDataFunctions[this.Chart2SortFilterStatus.numericSortIndex])
                    let self = this;
                    console.log(this.Chart2SortFilterStatus.numericSortIndex)
                    let sortIndex = (this.Chart2SortFilterStatus.numericSortIndex == 2) ? 4 : this.Chart2SortFilterStatus.numericSortIndex;
                    let doubleDaggerArray = this.chartData.filter(element => {
                        let score = element.scores[sortIndex]
                        let errorCode = element.errorCodes[sortIndex];
                        return score == 999 && (errorCode & 8192) > 0
                    });
                    // console.log('double dagger array', JSON.stringify(doubleDaggerArray))
                    let hashtagArray = this.chartData.filter(element => {
                        let score = element.scores[sortIndex]
                        let errorCode = element.errorCodes[sortIndex];
                        return score == 999 && (errorCode & 128) > 0
                    });
                    // console.log('hashtag array', JSON.stringify(hashtagArray))
                    let validScoresArray = this.chartData.filter(element => element.scores[sortIndex] != 999);
                    // console.log('double dagger array', JSON.stringify(validScoresArray))
                    doubleDaggerArray.sort((a, b) => (a.country < b.country) ? 1 : -1);
                    hashtagArray.sort((a, b) => (a.country < b.country) ? 1 : -1);

                    validScoresArray.sort((a, b) => {
                        let aValue = a.scores[sortIndex];
                        let bValue = b.scores[sortIndex];
                        if (aValue > bValue) return 1;
                        return -1;
                    });

                    if (!this.Chart2SortFilterStatus.isStandardDirection) {
                        validScoresArray.reverse();
                        this.chartData = doubleDaggerArray.concat(validScoresArray).concat(hashtagArray)
                    } else {
                        this.chartData = doubleDaggerArray.concat(hashtagArray).concat(validScoresArray)
                    }
                }

                let oecdIndex = this.chartData.findIndex(element => element.countryId == 'IN3')
                let oecdRowInArray = this.chartData.splice(oecdIndex, 1);
                this.chartData.push(oecdRowInArray[0])
                var half_length = Math.floor(this.chartData.length / 2);
                ret[1] = this.chartData.slice(0, half_length);
                ret[0] = this.chartData.slice(this.chartData.length / 2, this.chartData.length);
                //return ret;

                console.log('Chart2 Ret', ret)

                this.dataSentToChart = ret

            })





        function SortFilterStatus2() {
            this.isAlphaSort = false;
            this.isStandardDirection = true;
            this.numericSortIndex = 2;
            this.filterCountries = false
            this.oecdOnly = false;

            this.changeDirection = function () {
                this.isStandardDirection = !this.isStandardDirection;
            }

            this.setDirectionToDefault = function () {
                this.isStandardDirection = true;
            }

            this.setAlphaSort = function () {
                if (!this.isAlphaSort) {
                    this.setDirectionToDefault();
                    this.isAlphaSort = true;
                } else {
                    this.changeDirection();
                }
            }

            this.setNumericSort = function (newNumericSortIndex) {
                if (this.isAlphaSort || newNumericSortIndex != this.numericSortIndex) {
                    this.setDirectionToDefault();
                    this.numericSortIndex = newNumericSortIndex;
                    this.isAlphaSort = false;
                } else {
                    this.changeDirection();
                }
            }
        }


        function _isOECDCountry(countryId) {
            var oecdCountries = ['AUS', 'AUT', 'BEL', 'CAN', 'CHL', 'COL', 'CRI', 'CZE', 'DNK', 'EST', 'FIN', 'FRA', 'DEU', 'GRC', 'HUN', 'IN3', 'ISL', 'IRL', 'ISR', 'ITA', 'JPN', 'KOR', 'LTU', 'LUX', 'LVA', 'MEX', 'NLD', 'NZL', 'NOR', 'POL', 'PRT', 'SVK', 'SVN', 'ESP', 'SWE', 'CHE', 'TUR', 'GBR', 'USA'];
            return oecdCountries.indexOf(countryId) != -1
        }

        this.Chart2SortFilterStatus = new SortFilterStatus2();
        console.log('CHART2 sort filter -----', this.Chart2SortFilterStatus)

        function updateCharts() {
            var data = getFormattedData()
        }

        function getFormattedData(data) {


            console.log('CHART2 getFormattedData Chart Data', data);
            // console.log('CHART2 getFormattedData Chart Data', this.chartData);
            var ret = []
            //var data = JSON.parse(JSON.stringify(this.data));

            // if (this.Chart2SortFilterStatus.oecdOnly) {
            //     data = data.filter(function (row) {
            //         return row.isOECD;
            //     })
            // }


        }



    },
    beforeUnmount() {
        this.subscription.unsubscribe();
    },
    mounted() {
        //this.setKeyToSortBy('gap');
    }
}
</script>
 
<style></style>