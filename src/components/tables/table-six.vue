<template>
    <div class="table-classic__container">
        <table class="tbl6" tabindex="0">
            <colgroup>
                <col>
                <col>
                <col>
                <col>
            </colgroup>
            <thead>
                <tr>
                    <th><span>Education system</span> <span class="first"><i class="fa fa-chevron-down"></i><i
                                class="fa fa-chevron-up"></i></span></th>
                    <th><span>Male score</span> <span class="second"><i class="fa fa-chevron-down"></i><i
                                class="fa fa-chevron-up"></i></span></th>
                    <th><span>Female score</span> <span class="third"><i class="fa fa-chevron-down"></i><i
                                class="fa fa-chevron-up"></i></span></th>
                    <th><span>Score difference between<br>male and female students</span>
                        <span class="fourth"><i class="fa fa-chevron-down"></i><i class="fa fa-chevron-up"></i></span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>370</td>
                    <td>0.6</td>
                    <td>0.4</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
 
<script>
import { onMounted, ref, watch, computed } from 'vue'
import { DataService } from '../../services/api/data-service';
import M8chart_data from '../../assets/testdata/m8chart_data.json';
import ChildComponent from './child-component.vue'

import table8_data from '../../assets/testdata/table8_data.json';
// import FigureControl from './FigureControl.js';
// import PisaTable from './PisaTable.js'
// import PisaTable2 from './PisaTable2.js'
// import PisaTable3 from './PisaTable3.js'


export default {
    name: 'Table-Six',
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



    },
    created() {

        let datamap = {
            'country': 0,
            'score': 1,
            'diff': 2,
            'oecd': 3,
            'marker': 4,
            'icon': 5,
            'seq': 6
        }

        let _lastYear = '2022';
        let _priorYear = '2018';
        let _firstYear = '2003';

        this.subscription = DataService.getTableSixData().subscribe(
            allResults => {
                console.log('---table 6 allresults', allResults)

                // let data = [];
                //let theHeaders = ['group', 'oecd', 'unitedstates', 'significant'];

                /* _processGenderData */
                var filteredData = allResults.filter(function (element, index, array) {
                    // console.log('table6 element',element)
                    // return element.focalYear == '2022' && element.jurisdiction != 'IN3';
                    return element.valLabel == 'Male';
                })
                var finalData = [];
                var figureControls = {};
                filteredData.forEach((element, index, array) => {

                    if (element.targetValue != 999 && element.focalValue != 999) {
                        var currentRow = {}
                        finalData[finalData.length] = currentRow;
                        currentRow['country'] = element.focalJurisLabel;
                        if (element.jurisdiction == 'IN3') currentRow['country'] = 'OECD average'
                        currentRow['countryId'] = element.focalJurisdiction;
                        currentRow['maleScore'] = element.focalValue;
                        currentRow['femaleScore'] = element.targetValue;
                        currentRow['gap'] = element.gap;
                        currentRow['sig'] = element.sig;
                    }
                })

                console.log('TABLE 6 finaldata', finalData)

                var mapFunction = function (element, index, array) {
                    var ret = {}
                    ret.headers = [element.country]
                    if (element.countryId == 'USA') ret.headers = ['<span>' + element.country + '</span>']
                    var gap = Math.round(element['gap'])
                    if (element['sig'] == 'HIGHER' || element['sig'] == 'LOWER') gap += '*';
                    if (gap == 0) gap = "#";
                    ret.values = [Math.round(element['maleScore']), Math.round(element['femaleScore']), gap];
                    // var countryDecorator = {}
                    if (!_isOECDCountry(element.countryId)) {
                        ret.rowDecorator = { 'addClass': 'not-oecd' };
                    }
                    ret.headerDecorators = [{ 'addClass': 'country' }];
                    if (element.countryId == 'USA') {
                        ret.rowDecorator = { 'addClass': 'usa' };
                    }
                    if (element.countryId == 'IN3') {
                        ret.headerDecorators[0] = { 'addClass': 'oecd' };
                    }
                    return ret;
                }




                //console.log('final final data', data)

                const propComparator = (propName, direction) => (a, b) => {
                    if (direction == -1) return a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? 1 : -1
                    return a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1
                }
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


                class PisaTable {
                    constructor(tableSelector) {
                        this.tBody = document.querySelector('tbody');
                        this.rowHtmlTemplate = this.tBody.querySelector('tr');
                        this.tBody.removeChild(this.tBody.querySelectorAll('tr')[0])

                        //console.log('rowhtml',this.rowHtmlTemplate.innerHTML)
                    }

                    addRow(dataRow) {

                        this.wrapper = document.createElement('tr');
                        //var thePreviousRow = this.tBody.querySelector('tr');
                        this.wrapper.innerHTML = this.rowHtmlTemplate.innerHTML;
                        // console.log('add row wrapper innerhtml', this.wrapper.innerHTML)
                        this.tBody.append(this.wrapper);
                        var lastRow = this.tBody.lastChild;

                        // console.log('data row for table 6', dataRow)

                        if (dataRow.rowDecorator) {

                            if (dataRow.rowDecorator.addClass) {
                                lastRow.classList.add(dataRow.rowDecorator.addClass);
                            }
                        }
                        for (var i = 0; i < dataRow.headers.length; i++) {
                            var content = dataRow.headers[i];
                            if (dataRow.headerDecorators && dataRow.headerDecorators[i]) {
                                if (dataRow.headerDecorators[i].addClass) {
                                    lastRow.querySelectorAll('th')[i].classList.add(dataRow.headerDecorators[i].addClass)
                                }
                                if (dataRow.headerDecorators[i].addParent) {
                                    content = '<' + datarow.headerDecorators[i].addParent + '>' + content + '</' + datarow.headerDecorators[i].addParent + '>'
                                }
                            }

                            lastRow.querySelectorAll('th')[i].innerHTML = content;
                        }
                        for (var i = 0; i < dataRow.values.length; i++) {
                            lastRow.querySelectorAll('td')[i].innerHTML = dataRow.values[i];
                        }

                    }

                    clearTable() {

                        console.log('clear table')
                        document.querySelectorAll('tbody > tr').forEach((el) => {
                            //console.log('parent', el.parentElement);
                            var parent = el.parentElement
                            // el.innerHTML = '<th class="country">commodi distinctio</th><td class="">422</td><td>21</td><td>332</td>'
                            parent.removeChild(el)
                        });

                    }

                    generate(data) {
                        this.clearTable();
                        for (var i = 0; i < data.length; i++) {
                            this.addRow(data[i])
                        }
                    }
                }

                class FigureControl {
                    constructor(data, mapFunction, figures) {
                        console.log('figurecontrol', data)
                        console.log('figures', figures)
                        this.data = data;
                        this.mapFunction = mapFunction;
                        this.figures = figures;
                        this.sortFilterStatus = new FigureSortFilterStatus();
                        this.numberOfDataSets = 1;
                        this.showDataAfterMap;
                    }

                    updateFigures() {
                        var data = this.getSortedFilteredData()
                        for (var i = 0; i < this.figures.length; i++) {
                            // $(this.figures[i].selector).html('')
                           // console.log('remove these figures', this.figures[i].rowHtmlTemplate.innerHTML="")
                            this.figures[i].generate(data[i])
                        }
                    }

                    getSortedFilteredData() {
                        var ret = JSON.parse(JSON.stringify(this.data))
                        ret.sort(propComparator(this.sortFilterStatus.keyToSortBy, this.sortFilterStatus.sortDirection))

                        if (this.debug) {
                            console.log(JSON.stringify(ret))
                        }
                        if (this.sortFilterStatus.isOECDFirst) {
                            var oecdIndex = ret.map(function (element) { return element.countryId }).indexOf('IN3');
                            ret.unshift(ret.splice(oecdIndex, 1)[0]);
                        }
                        if (this.sortFilterStatus.isOECDOnly) {
                            ret = ret.filter((element) => {
                                return _isOECDCountry(element.countryId)
                            })
                        }
                        ret = ret.map(this.mapFunction);

                        if (this.numberOfDataSets == 2) {
                            var half_length = Math.floor(ret.length / 2);
                            return [ret.slice(0, half_length), ret.slice(ret.length / 2, ret.length)];
                        }
                        return [ret];
                    }
                }

                figureControls['table6'] = new FigureControl(finalData, mapFunction, [new PisaTable('table.tbl6')]);
                figureControls['table6'].sortFilterStatus.isOECDOnly = false;
                figureControls['table6'].sortFilterStatus.isOECDFirst = false;
                figureControls['table6'].updateFigures();

                var els = document.querySelectorAll('.all-education-systems')
                console.log(els)

                document.querySelectorAll('.all-education-systems').forEach((el) => el.addEventListener("click", function () {
                    figureControls['table6'].sortFilterStatus.isOECDOnly = false;
                    figureControls['table6'].updateFigures();
                }));

                document.querySelectorAll('input.oecd-only').forEach((el) => el.addEventListener("click", function () {
                    console.log('click')
                    figureControls['table6'].sortFilterStatus.isOECDOnly = true;
                    figureControls['table6'].updateFigures();
                }));

                // var scorediff = document.querySelectorAll('span.fourth > i.fa.fa-chevron-down')
                //scorediff.classList.add('active')
                document.querySelectorAll('span > i.fa.fa-chevron-down').forEach((el, index, array) => {
                    for (var i = 0; i < array.length; i++) {
                        array[i].classList.add('active');
                    }

                });

                //$('table.tbl6 .6-scorediff .fa-chevron-down').addClass('active');

                document.querySelectorAll('span.first > i.fa').forEach((el, index, array) => el.addEventListener("click", function () {
                    for (var i = 0; i < array.length; i++) {
                        array[i].classList.remove('active');
                        if (array[i] == el) {
                            array[i].classList.add('active');
                        }
                    }
                }));

                document.querySelectorAll('span.second > i.fa').forEach((el, index, array) => el.addEventListener("click", function () {
                    for (var i = 0; i < array.length; i++) {
                        array[i].classList.remove('active');
                        if (array[i] == el) {
                            array[i].classList.add('active');
                        }
                    }
                }));

                document.querySelectorAll('span.third > i.fa').forEach((el, index, array) => el.addEventListener("click", function () {
                    for (var i = 0; i < array.length; i++) {
                        array[i].classList.remove('active');
                        if (array[i] == el) {
                            array[i].classList.add('active');
                        }
                    }
                }));

                document.querySelectorAll('span.fourth > i.fa').forEach((el, index, array) => el.addEventListener("click", function () {
                    for (var i = 0; i < array.length; i++) {
                        array[i].classList.remove('active');
                        if (array[i] == el) {
                            array[i].classList.add('active');
                        }
                    }
                }));

                document.querySelectorAll('span.first > i.fa.fa-chevron-down').forEach((el) => el.addEventListener("click", function () {
                    figureControls['table6'].sortFilterStatus.setKeyToSortBy('country');
                    figureControls['table6'].sortFilterStatus.sortDirection = 1;
                    figureControls['table6'].updateFigures();
                }));

                document.querySelectorAll('span.first > i.fa.fa-chevron-up').forEach((el) => el.addEventListener("click", function () {
                    figureControls['table6'].sortFilterStatus.setKeyToSortBy('country');
                    figureControls['table6'].sortFilterStatus.sortDirection = -1;
                    figureControls['table6'].updateFigures();
                }));

                document.querySelectorAll('span.second > i.fa.fa-chevron-down').forEach((el) => el.addEventListener("click", function () {
                    figureControls['table6'].sortFilterStatus.setKeyToSortBy('mn-' + _firstYear);
                    figureControls['table6'].sortFilterStatus.sortDirection = -1;
                    figureControls['table6'].updateFigures();
                }));

                document.querySelectorAll('span.second > i.fa.fa-chevron-up').forEach((el) => el.addEventListener("click", function () {
                    figureControls['table6'].sortFilterStatus.setKeyToSortBy('mn-' + _firstYear);
                    figureControls['table6'].sortFilterStatus.sortDirection = 1;
                    figureControls['table6'].updateFigures();
                }));
                document.querySelectorAll('span.third > i.fa.fa-chevron-down').forEach((el) => el.addEventListener("click", function () {
                    figureControls['table6'].sortFilterStatus.setKeyToSortBy('mn-' + _lastYear);
                    figureControls['table6'].sortFilterStatus.sortDirection = -1;
                    figureControls['table6'].updateFigures();
                }));
                document.querySelectorAll('span.third > i.fa.fa-chevron-up').forEach((el) => el.addEventListener("click", function () {
                    figureControls['table6'].sortFilterStatus.setKeyToSortBy('mn-' + _lastYear);
                    figureControls['table6'].sortFilterStatus.sortDirection = 1;
                    figureControls['table6'].updateFigures();
                }));
                document.querySelectorAll('span.fourth > i.fa.fa-chevron-down').forEach((el) => el.addEventListener("click", function () {
                    figureControls['table6'].sortFilterStatus.setKeyToSortBy('gap');
                    figureControls['table6'].sortFilterStatus.sortDirection = -1;
                    figureControls['table6'].updateFigures();
                }));
                document.querySelectorAll('span.fourth > i.fa.fa-chevron-up').forEach((el) => el.addEventListener("click", function () {
                    figureControls['table6'].sortFilterStatus.setKeyToSortBy('gap');
                    figureControls['table6'].sortFilterStatus.sortDirection = 1;
                    figureControls['table6'].updateFigures();
                }));





            })



        function _isOECDCountry(countryId) {
            var oecdCountries = ['AUS', 'AUT', 'BEL', 'CAN', 'CHL', 'COL', 'CRI', 'CZE', 'DNK', 'EST', 'FIN', 'FRA', 'DEU', 'GRC', 'HUN', 'IN3', 'ISL', 'IRL', 'ISR', 'ITA', 'JPN', 'KOR', 'LTU', 'LUX', 'LVA', 'MEX', 'NLD', 'NZL', 'NOR', 'POL', 'PRT', 'SVK', 'SVN', 'ESP', 'SWE', 'CHE', 'TUR', 'GBR', 'USA'];
            return oecdCountries.indexOf(countryId) != -1
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