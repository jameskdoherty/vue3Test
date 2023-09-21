<template>
    <div class="table-classic__container">
        <table class="tbl3" tabindex="0">
            <colgroup>
                <col>
                <col>
                <col>
                <col>
                <col>
            </colgroup>
            <thead>
                <tr>
                    <th><span class="sort-alpha">Education system <i class="fa fa-chevron-down"></i><i
                                class="fa fa-chevron-up"></i></span></th>
                    <th>10th percentile score</th>
                    <th>Average score</th>
                    <th>90th percentile score</th>
                    <th><span class="sort-score-gap">90th&ndash;10th score gap <i class="fa fa-chevron-down"></i><i
                                class="fa fa-chevron-up"></i></span></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>370</td>
                    <td>0.6</td>
                    <td>489</td>
                    <td>0.4</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
 
<script>
import { onMounted, ref, watch, computed } from 'vue'
import { DataService } from '../../services/api/data-service';
//import ChildComponent from './child-component.vue'

// import FigureControl from './FigureControl.js';
// import PisaTable from './PisaTable.js'
// import PisaTable2 from './PisaTable2.js'
// import PisaTable3 from './PisaTable3.js'


export default {
    name: 'Table-Three',
    components: {
        //ChildComponent
    },
    // childInterface: {
    //     addCount: () => { },
    //     subtractCount: () => { },
    //     setKeyToSortBy: () => { },
    //     sortedProperties: () => { },
    //     addData: () => { },
    //     addHeaders: () => { },
    // },
    data() {
        return {
            data: [{ 'country': 'OECD average' }, { 'country': 'United States' }],
            tableData: [],
            tableHeaders: [],
            rawData: [],
            figureControls: {}


        };
    },
    methods: {
        // Setting the interface when emitted from child
        // getChildInterface(childInterface) {
        //     this.$options.childInterface = childInterface;
        // },

        // // Add count through the interface
        // addCount() {
        //     this.$options.childInterface.addCount();
        // },
        // addData(data) {
        //     console.log('add data', data)
        //     this.$options.childInterface.addData(data)
        // },
        // addHeaders(headers) {
        //     console.log('add headers', headers)
        //     this.$options.childInterface.addHeaders(headers)
        // },
        // subtractCount() {
        //     this.$options.childInterface.subtractCount();
        // },
        // setKeyToSortBy(key) {
        //     console.log(key)
        //     this.sort = this.$options.childInterface.setKeyToSortBy(key)
        // },
        // sortedProperties() {
        //     this.$options.childInterface.sortedProperties();
        // }


    },
    created() {

        this.subscription = DataService.getTable3Data().subscribe(
            allResults => {
                console.log('---table 3 allresults', allResults)



            })


        function M3Table(tableSelector, data) { // (String, DataRow[])
            this.rowHtmlTemplate = "";
            this.data = JSON.parse(JSON.stringify(data));
            this.tBody = $(tableSelector)
            this.sortFilterStatus = new SortFilterStatus();

            this.sort = function () {
                if (this.sortFilterStatus.isAlphaSort) {
                    this.data.sort(function (a, b) {
                        if (a.countryId == 'IN3') return -1;
                        if (b.countryId == 'IN3') return 1;
                        if (a.country < b.country) return -1;
                        else return 1;
                    })
                } else {
                    this.data.sort(function (a, b) {
                        if (a.countryId == 'IN3') return -1;
                        if (b.countryId == 'IN3') return 1;
                        if (a.p9 - a.p1 > b.p9 - b.p1) return -1;
                        else return 1;
                    })
                }
                if (!this.sortFilterStatus.isStandardDirection) {
                    this.data.reverse();
                    // data.push(data.shift())
                    this.data.unshift(this.data.pop());
                }
            }
            // var half_length = Math.floor(data.length / 2);
            // ret[1] = data.slice(0, half_length);
            // ret[0] = data.slice(data.length / 2, data.length);
            // return ret;

            // this.data = this.data.sort(function(a, b){
            //   if (a.country == 'OECD average') return -1;
            //   if (b.country == 'OECD average') return 1;
            //   if (a.country < b.country) return -1;
            //   else return -1;
            // })

            this.getRowHtmlTemplate = function () {
                this.rowHtmlTemplate = '<tr>' + $(tableSelector).find('tr:eq(0)').html() + '</tr>';
            }

            this.getRowHtmlTemplate();

            this.loadTable = function () {
                this.clearTable();
                this.sort();
                for (var i = 0; i < this.data.length; i++) {
                    this.addRow()
                    this.updateRow(this.data[i], i);
                }
            }

            this.removeFirstRow = function () {
                $(tableSelector).find('tr:eq(0)').remove();
            }

            this.addRow = function (dataRow, index) { // (DataRow dataRow)
                var tBody = $(tableSelector).append(this.rowHtmlTemplate.replace('422', index))
            }

            this.updateRow = function (dataRow) {
                var tBody = $(tableSelector)
                var lastRow = tBody.find('tr:last()');
                if (dataRow.country == 'United States') {
                    lastRow.find('th:eq(0)').html('<span>' + dataRow.country + '</span>')
                } else if (dataRow.countryId == 'IN3') {
                    lastRow.find('th:eq(0)').addClass('oecd').html(dataRow.country)
                } else {
                    lastRow.find('th:eq(0)').html(dataRow.country)
                }
                lastRow.find('td:eq(0)').html(Math.round(dataRow.p1));
                lastRow.find('td:eq(1)').html(Math.round(dataRow.mn));
                lastRow.find('td:eq(2)').html(Math.round(dataRow.p9));
                lastRow.find('td:eq(3)').html(Math.round(dataRow.diff) + ((dataRow.diffSig) ? '*' : ''));
                if (dataRow.country == 'United States') {
                    lastRow.addClass('usa')
                }
                // tBody.find('tr:last td:eq(4)').html(Math.round(dataRow.scores[2]))
                // tBody.find('tr:last td:eq(5)').html(dataRow.se[2])
                // tBody.find('tr:last td:eq(6)').html(Math.round(dataRow.scores[3]))
                // tBody.find('tr:last td:eq(7)').html(dataRow.se[3])
                // tBody.find('tr:last td:eq(8)').html(dataRow.scores[4])
                // tBody.find('tr:last td:eq(9)').html(dataRow.se[4])
            }

            this.getLastRow = function () {
                return $(tableSelector).find("tr:last-child()");
            }

            this.clearTable = function () {
                var tBody = $(tableSelector)
                // tBody.find('tr:not(:first-child)').remove();
                tBody.find('tr').remove();
            }

        }

    },
    beforeUnmount() {
        this.subscription.unsubscribe();
    },
    mounted() {
       // this.setKeyToSortBy('gap');
    }
}
</script>
 
<style></style>