<template>
    <div class="chart__controller">
        <div class="m3__legend">
            <svg viewBox="0 0 450 50" role="img">
                <g transform="translate(0,30)">
                    <text x="0" y="0" dominant-baseline="middle" class="m3__legend__title">KEY:</text>
                    <g transform="translate(100,0)">
                        <text x="0" y="-15" text-anchor="middle" class="m3__legend__item__text">10th Percentile</text>
                        <text x="150" y="-15" text-anchor="middle" class="m3__legend__item__text">Average Score</text>
                        <text x="300" y="-15" text-anchor="middle" class="m3__legend__item__text">90th Percentile</text>
                        <line stroke="black" x1="0" y1="0" x2="300" y2="0"></line>
                        <polygon points="-6,4 0,-6 6,4" fill="#ffffff" stroke="#00843d"></polygon>
                        <circle r="5" cx="150" cy="0" fill="#FBB03B" stroke="#000000"></circle>
                        <polygon points="294,0 300,-6 306,0 300,6" fill="#0647ae" stroke="#000000"></polygon>
                    </g>
                </g>
            </svg>
        </div>
        <div class="sub-contain d-flex j-around">
            <div class="grouping">
                <div class="thead d-flex j-space align-e">
                    <span class="like-th sort-alpha">Education system <i class="fa fa-chevron-down"></i><i
                            class="fa fa-chevron-up"></i></span>
                    <span class="like-th sort-score-gap hi-col">90th&ndash;10th<br>score gap <i
                            class="fa fa-chevron-down"></i><i class="fa fa-chevron-up"></i></span>
                </div>
                <responsive-one-dimension-scatter-plot :scores="leftSideData" />

            </div>
            <div class="grouping">
                <div class="thead d-flex j-space align-e">
                    <span class="like-th">Education system</span>
                    <span class="like-th hi-col">90th&ndash;10th<br>score gap<br></span>
                </div>
                <responsive-one-dimension-scatter-plot :scores="rightSideData" />

            </div>
        </div>
    </div>
</template>
<script>
import { DataService } from '../../../services/api/data-service';
import ResponsiveOneDimensionScatterPlot from '../../../components/ResponsiveOneDimensionScatterPlot.vue';

export default {
    name: 'Chart-Three',
    components: {
        ResponsiveOneDimensionScatterPlot,
    },
    data() {
        return {
            processedData: [],
            leftSideData: [],
            rightSideData:[]
        }
    },
    created() {

        this.subscription = DataService.getTable3Data().subscribe(
            allResults => {
                //console.log('---chart 3 allresults', allResults)

                var allResultsData = allResults[1]
                var allResultsMeanData = allResults[0]


                

                //console.log('chart 3 data', allResultsData);
                //console.log('chart 3 meandata', allResultsMeanData);

                function _isOECDCountry(countryId) {
                    var oecdCountries = ['AUS', 'AUT', 'BEL', 'CAN', 'CHL', 'COL', 'CRI', 'CZE', 'DNK', 'EST', 'FIN', 'FRA', 'DEU', 'GRC', 'HUN', 'IN3', 'ISL', 'IRL', 'ISR', 'ITA', 'JPN', 'KOR', 'LTU', 'LUX', 'LVA', 'MEX', 'NLD', 'NZL', 'NOR', 'POL', 'PRT', 'SVK', 'SVN', 'ESP', 'SWE', 'CHE', 'TUR', 'GBR', 'USA'];
                    return oecdCountries.indexOf(countryId) != -1
                }


                function _processM3Data(data, meanData) {
                    var filteredData = data.filter(function (element) {
                        // console.log('chart 3', element)
                        return (element.targetJuris == 'USA' && element.stat1 != 999) || (element.targetJurisdiction == 'IN3' && element.focalJurisdiction == 'USA')
                    })

                    var finalData = filteredData.map(function (element) {
                        // console.log('chart 3', element)
                        var country = element.focalJurisLabel;
                        var countryId = element.focalJuris;
                        if (element.focalJuris == 'IN3') country = 'OECD average'
                        var rowWithMean = meanData.find(function (meanElement) { return meanElement.targetJuris === element.focalJuris })
                        var isOECD = false;
                        if (_isOECDCountry(countryId)) isOECD = true;
                        var elementSig = (element.sig == 'HIGHER' || element.sig == 'LOWER') ? true : false;
                        return {
                            country: country,
                            countryId: countryId,
                            isOECD: isOECD,
                            mn: rowWithMean.stat1,
                            p1: element.stat2,
                            p9: element.stat1,
                            diff: Math.abs(element.innerDiff1),
                            diffSig: elementSig
                        }
                    })
                    return finalData;
                }


                this.processedData = _processM3Data(allResultsData, allResultsMeanData)


                var splitDataIntoColumns = []
                // var data = JSON.parse(JSON.stringify(this.data));

                // if (this.sortFilterStatus.isAlphaSort) {
                //     data.sort(this.sortFilterDataFunctions.alphaSort)
                // } else {
                //     data.sort(function (a, b) {
                //         if (a.country == 'OECD average') return 1;
                //         if (b.country == 'OECD average') return -1;
                //         if (a.p9 - a.p1 > b.p9 - b.p1) return 1;
                //         else return -1;
                //     })
                // }

                // if (!this.sortFilterStatus.isStandardDirection) {
                //     data.reverse();
                //     data.push(data.shift())
                // }
                var half_length = Math.floor(this.processedData.length / 2);
                splitDataIntoColumns[1] = JSON.parse(JSON.stringify(this.processedData.slice(0, half_length))) ;
                splitDataIntoColumns[0] = JSON.parse(JSON.stringify(this.processedData.slice(this.processedData.length / 2, this.processedData.length))) ;
                //return ret;

                this.leftSideData = splitDataIntoColumns[1]
                this.rightSideData = splitDataIntoColumns[0]

                console.log('Chart 3 splitDataIntoColumns[1]',splitDataIntoColumns[1])
                console.log('Chart 3 splitDataIntoColumns[0]',splitDataIntoColumns[0])
                
                console.log('Chart 3 processeddata', this.processedData)





            })

    },
    beforeUnmount() {
        this.subscription.unsubscribe();
    },
    mounted() {
        //this.setKeyToSortBy('gap');
    }

}
</script>
      <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>