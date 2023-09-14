<template>
    <div id="Chart-M8">
        <div id="legend">
            <dl>
                <dt class="red"></dt>
                <dd>OECD avergage</dd>

                <dt class="yellow"></dt>
                <dd>United States</dd>
            </dl>
        </div>
        <responsive-bar-chart :data="data" :groups="groups" :bardata="bardata" :subgroups="subgroups" />
    </div>
    <div class="chart-title">
        <h4>National quarters of the ESCS index</h4>
    </div>
</template>

<script>
import { DataService } from '../../services/api/data-service';
import M8StaticData from '../../assets/testdata/M8StaticData.json';
import ResponsiveBarChart from "./ResponsiveBarChart.vue";

export default {
    name: 'Chart-M8',
    components: {
        ResponsiveBarChart,
    },
    data() {
        return {
            data: [],
            groups: [],
            subgroups: [],
            bardata: [],
            finalChartData: []
        };
    },
    created() {
        console.log('chart m8 created')

        let groupds = [];
        // let subgroups = [];
        // let finaldata = [];


        this.subscription8 = DataService.getChartM8DataA().subscribe(
            allResults => {

                console.log('chartM8 M8 allresults', allResults);

                allResults.forEach((element, index, array ) => {
                this.finalChartData.push(allResults[index]);
            });

            console.log('finalchartdata m8',this.finalChartData)

                // if (allResults.response) {
                //     this.finalChartData.push(allResults);
                // } else {
                //     console.log('chartM8 M8 allresults res', allResults.response);
                //     this.finalChartData = M8StaticData.result;
                // }

                var filteredData = this.finalChartData.filter(function (element) {
                    return element.targetJurisdiction == 'USA';
                })


                let finalMappedData = filteredData.map((ele) => {

                    //this.data.push(Math.floor(ele.targetValue));
                    this.groups.push(ele.valLabel);

                    return {
                        group: ele.valLabel,
                        oecd: Math.floor(ele.focalValue),
                        unitedstates: Math.floor(ele.targetValue),
                        significant: ele.sig == 'LOWER' || ele.sig == 'HIGHER' ? true : false,
                        xAxisLabel: ele.variableLabel
                    }
                });

                console.log('chartM8 final', finalMappedData);



                // finalMappedData.forEach((element, index) => {
                //     console.log(element)
                //     // this.data.push(element);
                //     this.data[index] = element;

                // });

                finalMappedData.forEach((element, index, array) => {

                    this.data.push(element)
                    groupds.push(element.group);

                    let keys = Object.keys(array[index]);
                    var subindexes = keys.filter((element, index) => {
                        if (this.subgroups.length < 2) {
                            var sg = index !== 0 ? this.subgroups.push(element) : null;
                        }
                    })
                   
                })

            });
    },

    beforeUnmount() {
        this.subscription8.unsubscribe();
    }
}
</script>

<style>
#Chart-M8 {
    padding: 50px;
}

#legend {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
}

.chart-title {
    text-align: center;
}

dl dt {
    display: inline-block;
    width: 12px;
    height: 12px;
    vertical-align: middle;
}

dl dd {
    display: inline-block;
    margin: 0px 6px;
    padding-bottom: 0;
    vertical-align: middle;
    font-size: 12px;
}

dl dt.red {
    background: #00843d;
}

dl dt.yellow {
    background: #fbb03b;
}
</style>