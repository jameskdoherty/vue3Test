<template>
    <div id="Chart-M8">
        <div id="legend">
            <dl>
                <dt class="red"></dt>
                <dd>OECD avergage</dd>

                
            </dl>
            <dl>
                <dt class="yellow"></dt>
                <dd>United States</dd>
            </dl>
        </div>
        <responsive-bar-chart :data="data" :groups="groups" :bardata="bardata" :subgroups="subgroups" :width="width"
            :height="height" :viewbox="viewbox" :image="imageSrc" :bottom="padding" />
    </div>
    <div class="chart-title">
        <h5>National quarters of the ESCS index</h5>
    </div>
</template>

<script>
import { DataService } from '../../../services/api/data-service.js';
import M8StaticData from '../../../assets/testdata/M8StaticData.json';
import ResponsiveBarChart from "../../../components/ResponsiveBarChart.vue";


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
            finalChartData: [],
            width: 800,
            height: 400,
            padding: 55,
            viewbox: "viewBox='0 0 60 55'",
            imageSrc: "http://poseidon.research.ets.org/jhsu/pisa2022/inc/css/images/subject-home.png",
        };
    },
    created() {
        console.log('chart m8 created')

        let groupds = [];
        // let subgroups = [];
        // let finaldata = [];


        this.subscription = DataService.getChartEightData().subscribe(
            allResults => {

                console.log('chartM8 M8 allresults', allResults);

                allResults.forEach((element, index, array) => {
                    this.finalChartData.push(allResults[index]);
                });

                console.log('finalchartdata m8', this.finalChartData)

                // if (allResults.response) {
                //     this.finalChartData.push(allResults);
                // } else {
                //     console.log('chartM8 M8 allresults res', allResults.response);
                //     this.finalChartData = M8StaticData.result;
                // }

                var filteredData = this.finalChartData.filter(function (element) {
                    return element.targetJurisdiction == 'USA';
                })


                let finalMappedData = filteredData.map((ele, index) => {
                    
                      if (ele.valLabel === 'Lowest ESCS Quartile (US Based)') {
                        this.groups.push('Bottom quarter')
                    } else if (ele.valLabel === 'Second ESCS Quartile (US Based)') {
                         this.groups.push('Second quarter')
                    } else if (ele.valLabel === 'Third ESCS Quartile (US Based)') {
                        this.groups.push('Third quarter')
                    } else if (ele.valLabel === 'Highest ESCS Quartile (US Based)') {
                        this.groups.push('Top quarter')
                    }
                    //this.data.push(Math.floor(ele.targetValue));
                    //console.log(ele.valLabel,'this.groups[index] ele.valLabel')
                   // this.groups.push(ele.valLabel);

                    console.log('this.groups[index]',this.groups[index]);

                    return {
                        group: this.groups[index],
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

                    console.log('finalmappedData chart8 element.group', element)

                    this.data.push(element)

                  

                    groupds.push(element.group);

                    console.log('chart8 groupds',groupds)

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
        this.subscription.unsubscribe();
    }
}
</script>

<style>
#Chart-M8 {
    padding: 50px 50px 10px 50px;
}

#legend {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 40px;
}

.chart-title {
    text-align: center;
    padding-bottom: 60px;
}

dl dt {
    display: inline-block;
    width: 16px;
    height: 16px;
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
    border: 1px solid #ddd;
}

dl dt.yellow {
    background: #fbb03b;
    border: 1px solid #ddd;
}
</style>