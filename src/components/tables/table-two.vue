<template>
    <div class="table-classic__container">
        <div class="table-control d-flex justify-center">
            <p><strong>Filter by:</strong></p>
            <input class="all-education-systems" type="radio" id="m2tbl-all-education-systems" name="m2tbl-toggle-one"
                checked="checked">
            <label for="m2tbl-all-education-systems">
                All education systems
            </label>
            <input class="oecd-only" type="radio" id="m2tbl-oecd-only" name="m2tbl-toggle-one">
            <label for="m2tbl-oecd-only">
                OECD members only
            </label>
        </div>
        <table class="tbl2" tabindex="0">
            <caption>

            </caption>
            <colgroup>
                <col>
                <col>
                <col>
                <col>
                <col>
                <col>
            </colgroup>
            <thead>
                <tr>
                    <th><span class="">Education system <i class="fa fa-chevron-down"></i><i class="fa fa-chevron-up"></i>
                        </span></th>
                    <th><span class="">Below level 2 <i class="fa fa-chevron-down"></i><i
                                class="fa fa-chevron-up"></i></span></th>
                    <th><span class="">Level 2 <i class="fa fa-chevron-down"></i><i class="fa fa-chevron-up"></i></span>
                    </th>
                    <th><span class="">Level 3 <i class="fa fa-chevron-down"></i><i class="fa fa-chevron-up"></i></span>
                    </th>
                    <th><span class="">Level 4 <i class="fa fa-chevron-down"></i><i class="fa fa-chevron-up"></i></span>
                    </th>
                    <th><span class=""><span>Levels 5<br>and above</span> <i class="fa fa-chevron-down"></i><i
                                class="fa fa-chevron-up"></i></span></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th class="country">commodi distinctio</th>
                    <td class="">422</td>
                    <td>21</td>
                    <td>332</td>
                    <td>17</td>
                    <td>22</td>

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
    name: 'Table-Two',
    // components: {
    //     ChildComponent
    // },
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

        this.subscription = DataService.getTable2Data().subscribe(
            allResults => {
                console.log('---table 2 allresults', allResults)

              

            })

        // function M2Table(tableSelector, data) { // (String, DataRow[])
        //     this.rowHtmlTemplate = "";
        //     this.data = data;
        //     this.tBody = $(tableSelector)
        //     this.sortFilterStatus = new SortFilterStatus();

        //     this.getRowHtmlTemplate = function () {
        //         this.rowHtmlTemplate = '<tr>' + $(tableSelector).find('tr:eq(0)').html() + '</tr>';
        //     }

        //     this.getRowHtmlTemplate();

        //     this.loadTable = function () {
        //         this.removeFirstRow();
        //         for (var i = 0; i < this.data.length; i++) {
        //             if (!this.sortFilterStatus.oecdOnly || this.data[i].isOECD) {
        //                 this.addRow()
        //                 this.updateRow(data[i], i);
        //             }
        //         }
        //     }

        //     this.removeFirstRow = function () {
        //         $(tableSelector).find('tr:eq(0)').remove();
        //     }

        //     this.addRow = function (dataRow, index) { // (DataRow dataRow)
        //         var tBody = $(tableSelector).append(this.rowHtmlTemplate.replace('422', index))
        //     }

        //     this.sort = function () {
        //         if (this.sortFilterStatus.isAlphaSort) {
        //             this.data.sort(function (a, b) {
        //                 if (a.country == 'OECD average') return -1;
        //                 if (b.country == 'OECD average') return 1;
        //                 if (a.country < b.country) return -1;
        //                 else return 1;
        //             })
        //         } else {
        //             this.data.sort(function (a, b) {
        //                 if (a.country == 'OECD average') return -1;
        //                 if (b.country == 'OECD average') return 1;
        //                 if (a.scores[4] > b.scores[4]) return -1;
        //                 else return 1;
        //             })
        //         }
        //         if (!this.sortFilterStatus.isStandardDirection) {
        //             this.data.reverse();
        //             this.data.unshift(this.data.pop());
        //         }
        //     }

        //     this.updateRow = function (dataRow) {
        //         console.log(JSON.stringify(dataRow))
        //         var tBody = $(tableSelector)
        //         var lastRow = tBody.find('tr:last()')
        //         if (dataRow.country == 'United States') {
        //             lastRow.find('th:eq(0)').html('<span>' + dataRow.country + '</span>')
        //         } else if (dataRow.countryId == 'IN3') {
        //             lastRow.find('th:eq(0)').addClass('oecd').html('<span>' + dataRow.country + '</span>')
        //         } else {
        //             lastRow.find('th:eq(0)').html(dataRow.country)
        //         }
        //         if (!dataRow.isOECD) lastRow.addClass('not-oecd')
        //         lastRow.find('td:eq(0)').html(Math.round(dataRow.scores[0]) + ((dataRow.sigs[0]) ? '*' : ''))
        //         // lastRow.find('td:eq(1)').html(dataRow.se[0])
        //         lastRow.find('td:eq(1)').html(Math.round(dataRow.scores[1]) + ((dataRow.sigs[1]) ? '*' : ''))
        //         // lastRow.find('td:eq(3)').html(dataRow.se[1])
        //         lastRow.find('td:eq(2)').html(Math.round(dataRow.scores[2]) + ((dataRow.sigs[2]) ? '*' : ''))
        //         // lastRow.find('td:eq(5)').html(dataRow.se[2])
        //         let lvl4Score = (dataRow.scores[3] == 999) ? '#' : Math.round(dataRow.scores[3]) + ((dataRow.sigs[3] == 'HIGHER' || dataRow.sigs[3] == 'LOWER') ? '*' : '');
        //         lastRow.find('td:eq(3)').html(lvl4Score)
        //         // lastRow.find('td:eq(7)').html(dataRow.se[3])
        //         var lvl5AboveScore = (dataRow.scores[4] == 999) ? '#' : Math.round(dataRow.scores[4]) + ((dataRow.sigs[4] == 'HIGHER' || dataRow.sigs[4] == 'LOWER') ? '*' : '');
        //         lastRow.find('td:eq(4)').html(lvl5AboveScore)
        //         if (dataRow.country == 'United States') {
        //             lastRow.addClass('usa')
        //         }
        //     }

        //     this.clearTable = function () {
        //         var tBody = $(tableSelector)
        //         tBody.find('tr').remove();
        //     }

        //     this.getLastRow = function () {
        //         return $(tableSelector).find("tr:last-child()");
        //     }
        // }

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