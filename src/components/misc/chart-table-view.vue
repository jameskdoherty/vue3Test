<template>
    <div v-if="isShown">I am an element</div>
    <div v-else>I'm not rendered!</div>

    <div v-for="(message, index) in messages" :key="index" class="alert alert-success">{{ message.text }}</div>
    <!-- <responsive-bar-chart :data="data" :groups="groups" :bardata="bardata" :subgroups="subgroups" /> -->
</template>

<script>
import { MessageService } from '../services/message-service';
import { DataService } from '../services/api/data-service';
// import ResponsiveBarChart from "../components/charts/ResponsiveBarChart.vue";

export default {
    name: 'Chart-Table-View',
    components: {
        ResponsiveBarChart,
    },
    data() {
        return {
            messages: [],
            isShown: true,
            chart8results: [],
            data: [],
            groups: [],
            subgroups: [],
            bardata: [],
            finalChartData: [],
        };
    },
    created() {

        console.log('chart table view created')

        // this.subscription = MessageService.getHidden().subscribe(isHidden => {
        //     if (isHidden) {
        //         console.log('from view', isHidden)
        //         if (isHidden == 'tab1') {
        //             this.isShown = true;
        //         } else {
        //             this.isShown = false
        //         }
        //     }
        // });

        // this.subscription2 = MessageService.getMessage().subscribe(message => {
        //     if (message) {
        //         // add message to local state if not empty
        //         console.log('what is message', message)
        //         this.messages.push(message);
        //     } else {
        //         // clear messages when empty message received
        //         this.messages = [];
        //     }
        // });

        // this.subscription3 = DataService.getChartEightData().subscribe(allResults => {
        //     let groupds = [];

        //     console.log('chart table view chart8mA', allResults)

        //     allResults.forEach((element, index, array ) => {
        //         this.finalChartData.push(allResults[index]);
        //     });

        //     var filteredData = this.finalChartData.filter(function (element) {
        //         return element.targetJurisdiction == 'USA';
        //     })

        //     let finalMappedData = filteredData.map((ele) => {
        //         this.groups.push(ele.valLabel);
        //         return {
        //             group: ele.valLabel,
        //             oecd: Math.floor(ele.focalValue),
        //             unitedstates: Math.floor(ele.targetValue),
        //             significant: ele.sig == 'LOWER' || ele.sig == 'HIGHER' ? true : false,
        //             xAxisLabel: ele.variableLabel
        //         }
        //     });

        //     console.log('final', finalMappedData);

        //     finalMappedData.forEach((element, index, array) => {
        //         this.data.push(element)
        //         groupds.push(element.group);
        //         let keys = Object.keys(array[index]);
        //         console.log('keys', keys);
        //         var subindexes = keys.filter((element, index) => {
        //             if (this.subgroups.length < 2) {
        //                 var sg = index !== 0 ? this.subgroups.push(element) : null;
        //                 console.log('sg', sg)
        //             }
        //         })
             
        //     })
        // });

    },
    beforeUnmount() {
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();
        this.subscription3.unsubscribe();
    }
}
</script>


<style scoped></style>