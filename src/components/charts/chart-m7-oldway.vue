<template>
    <h1>Using Vue 3 Chart M7 with HighCharts and JS Class</h1>
    <div class="box"></div>
    <div id="Chart-M7-OldWay">
        <div id="m7-container"></div>

    </div>
    <div>
        <h1>Using Vue 3 Chart M7 with HighCharts</h1>
    </div>
</template>

<script>

import M7StaticTotal from '../../assets/testdata/M7StaticTotal.json';
import M7StaticRegular from '../../assets/testdata/M7StaticRegular.json';
import { DataService } from '../../services/api/data-service';
import M7Chart from './chart-m7-class.js'


export default {
    name: 'Chart-M7-OldWay',
    data() {
        return {
            data: []
        };
    },
    created() {

        let initTotalData = [];
        this.initTotalData = M7StaticTotal.result;
        let initRegData = [];
        this.initRegData = M7StaticRegular.result;
        //let totalAverageM7Data = [];

        // console.log(initTotalData);
        // console.log(initRegData);

        this.subscription = DataService.getChartM7Data().subscribe(
            allResults => {

                console.log('allresults', allResults.response);
                this.finalChartData = [M7StaticTotal.result, M7StaticRegular.result];
                console.log(this.finalChartData);

            //     totalAverageM7Data = allResults[0].result[0].value;
			// console.log("TCL: buildChartM7 -> totalAverageM7Data", totalAverageM7Data)



            //     var filteredData = allResults[1].result.filter(function (element, index, array) {
            //         return element.jurisdiction == 'USA' && element.stattype == 'MN:MN' && (
            //             element.varValueLabel == 'White' ||
            //             element.varValueLabel == 'Black' ||
            //             element.varValueLabel == 'Hispanic' ||
            //             element.varValueLabel == 'Asian' ||
            //             element.varValueLabel == 'More than one race'
            //         );
            //     })

            //     let finalMappedData = filteredData.map((ele, index, array) => {
            //         return [
            //             index,
            //             (index < 5 && Math.floor(ele.value) < totalAverageM7Data) ? Math.floor(ele.value) : totalAverageM7Data,
            //             (index < 5 && Math.floor(ele.value) > totalAverageM7Data) ? Math.floor(ele.value) : totalAverageM7Data,
            //             (index < 5 && Math.floor(ele.value) > totalAverageM7Data) ? 'up' : 'down',
            //             '*',
            //             ''
            //         ]
            //     });
                var m7Chart = new M7Chart('m7container')









            });



        //let finalMappedData = [];
        //let totalAverageM7Data = [];

        //var m7Chart = new M7Chart(finalMappedData, 'm7container', totalAverageM7Data);

        //console.log('m7chart',m7Chart);
    },

    beforeUnmount() {
        this.subscription.unsubscribe();
    }
}
</script>

<style>
svg {
    /* important for responsiveness */
    display: block;
    fill: none;
    stroke: none;
    width: 100%;
    height: 100%;
    overflow: visible;
    background: none;
}

#Chart-M8 {
    padding: 50px;
}

.box {
    height: 20px;
    width: 20px;
    background-color: hotpink;
    color: #fff;
}
</style>