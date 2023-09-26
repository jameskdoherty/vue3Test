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
            <tbody id="table3">
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
import { last } from 'rxjs';
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

        this.subscription = DataService.getTable3Data().subscribe(
            allResults => {
                console.log('table 3 allresults', allResults)


                function _processM3Data(data, meanData) {
                    var filteredData = data.filter(function (element) {
                        return (element.targetJuris == 'USA' && element.stat1 != 999) || (element.targetJurisdiction == 'IN3' && element.focalJurisdiction == 'USA')
                    })
                    var finalData = filteredData.map(function (element) {
                        var country = element.focalJurisLabel;
                        var countryId = element.focalJuris;
                        if (element.focalJuris == 'IN3') country = 'OECD average'
                        var rowWithMean = meanData.find(function (meanElement) { return meanElement.jurisdiction === element.focalJuris })
                        var isOECD = false;
                        if (_isOECDCountry(countryId)) isOECD = true;
                        var elementSig = (element.sig == 'HIGHER' || element.sig == 'LOWER') ? true : false;
                        return {
                            country: country,
                            countryId: countryId,
                            isOECD: isOECD,
                            // mn: element.stat1 - (element.stat1 - element.stat2) / 2,
                            mn: rowWithMean.value,
                            p1: element.stat2,
                            p9: element.stat1,
                            diff: Math.abs(element.innerDiff1),
                            diffSig: elementSig
                        }
                    })
                    return finalData;
                }

                var processedData = _processM3Data(allResults[0],allResults[1]);
                console.log('processeddata',processedData)


                function SortFilterStatus() {
                    this.isAlphaSort = true;
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

                    this.setNumericSort = function () {
                        if (this.isAlphaSort) {
                            this.setDirectionToDefault();
                            this.isAlphaSort = false;
                        } else {
                            this.changeDirection();
                        }
                    }
                }


                function M3Table(tableSelector, data) {
                    this.rowHtmlTemplate = ""
                    this.data = data;
                    //this.tBody = document.querySelector('tbody');
                    this.tBody = tableSelector;
                    console.log('constructor tbody', this.tBody)
                    // this.tBody.removeChild(this.tBody.querySelectorAll('tr')[0])
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

                    this.getRowHtmlTemplate = function () {

                        console.log('---table 3 tableselector',this.tableSelector)

                        this.rowHtmlTemplate = '<tr>' + tableSelector.querySelectorAll('tr')[0].innerHTML + '</tr>';
                        console.log('this rowhtmltem', this.rowHtmlTemplate)
                    }

                    this.getRowHtmlTemplate();

                    this.loadTable = function () {
                        this.clearTable();
                        this.sort();
                        for (var i = 0; i < this.data.length; i++) {
                            this.addRow(this.data[i], i)
                            this.updateRow(this.data[i], i);
                        }
                    }

                    

                    this.addRow = function (dataRow, index) { // (DataRow dataRow)
                        // console.log('datarow addrow', dataRow, index)
                        console.log('replace',this.rowHtmlTemplate.replace('370', index))
                        console.log('what is tableselec',tableSelector)
                        console.log('what is tbody',this.tBody)
                        this.wrapper = document.createElement('tr');
                        this.wrapper.innerHTML = this.rowHtmlTemplate.replace('370', index);
                        console.log('the wrapperinnerhtml',this.wrapper.innerHTML)
                        this.tBody.append(this.wrapper)
                        console.log('addrow tbody',this.tBody)
                    }

                    this.updateRow = function (dataRow) {
                        
                        console.log('updaterow datarow', dataRow)
                        //var tBody = this.tBody;
                        console.log('---table 3 tbody', this.tBody)

                        var lastRow = this.tBody.lastChild;
                        console.log('lastrow',lastRow)
                        console.log('lastrow typ',typeof lastRow)
                        if (dataRow.country == 'United States') {
                            lastRow.querySelectorAll('th')[0].classList.add('country')
                            lastRow.querySelectorAll('th')[0].innerHTML = '<span>' + dataRow.country + '</span>'

                            // lastRow.find('th:eq(0)').addClass('country').html('<span>' + dataRow.country + '</span>')
                        } else if (dataRow.countryId == 'IN3') {
                            lastRow.querySelectorAll('th')[0].classList.add('country')
                            lastRow.querySelectorAll('th')[0].classList.add('oecd')
                            lastRow.querySelectorAll('th')[0].innerHTML = dataRow.country

                            // lastRow.find('th:eq(0)').addClass('country').addClass('oecd').html(dataRow.country)
                        } else {
                           lastRow.querySelectorAll('th')[0].classList.add('country')
                           lastRow.querySelectorAll('th')[0].innerHTML = dataRow.country

                            // lastRow.find('th:eq(0)').addClass('country').html(dataRow.country)
                        }
                        console.log('lastrow queryselectorall',lastRow.querySelectorAll('th')[0])
                        lastRow.querySelectorAll('td')[0].innerHTML = Math.round(dataRow.p1)
                        lastRow.querySelectorAll('td')[1].innerHTML = Math.round(dataRow.mn)
                        lastRow.querySelectorAll('td')[2].innerHTML = Math.round(dataRow.p9)
                        lastRow.querySelectorAll('td')[3].innerHTML = Math.round(dataRow.diff) + ((dataRow.diffSig) ? '*' : '');

                        if (dataRow.country == 'United States') {
                            lastRow.classList.add('usa')
                        }
                        if (!dataRow.isOECD) {
                            lastRow.classList.add('not-oecd')
                        }
                    }



                    this.clearTable = function () {

                        document.querySelectorAll('tbody > tr').forEach((el) => {
                            console.log('parent', el.parentElement);
                            var parent = el.parentElement
                            // el.innerHTML = '<th class="country">commodi distinctio</th><td class="">422</td><td>21</td><td>332</td>'
                            parent.removeChild(el)
                        });

                    }

                    this.getLastRow = function () {
                        tableSelector.querySelectorAll('tr').forEach((el) => {
                            var parent = el.parentElement;
                            return parent.lastChild;
                        });
                        // tableSelector.querySelectorAll('tr')[3].innerHTML
                        //return $(tableSelector).find("tr:last-child()");
                    }

                
                }


            
                var m3Table = new M3Table(document.querySelector('#table3'), processedData)
                console.log('---table 3 m3table',m3Table)
                m3Table.sortFilterStatus.setNumericSort();
                m3Table.sortFilterStatus.isStandardDirection = false;
                m3Table.loadTable();


                // figureControls['table3'] = new FigureControl(finalData, mapFunction, [new PisaTable('figure.table-3 table.tbl3')]);
                // figureControls['table3'].sortFilterStatus.isOECDOnly = false;
                // figureControls['table3'].sortFilterStatus.isOECDFirst = false;
                // figureControls['table3'].updateFigures();

                // var els = document.querySelectorAll('.all-education-systems')
                // console.log(els)

                // document.querySelectorAll('.all-education-systems').forEach((el) => el.addEventListener("click", function () {
                //     figureControls['table3'].sortFilterStatus.isOECDOnly = false;
                //     figureControls['table3'].updateFigures();
                // }));

                // document.querySelectorAll('input.oecd-only').forEach((el) => el.addEventListener("click", function () {
                //     console.log('click')
                //     figureControls['table3'].sortFilterStatus.isOECDOnly = true;
                //     figureControls['table3'].updateFigures();
                // }));

                // var scorediff = document.querySelectorAll('span.scorediff > i.fa.fa-chevron-down')
                //scorediff.classList.add('active')
                document.querySelectorAll('span > i.fa.fa-chevron-down').forEach((el, index, array) => {
                    for (var i = 0; i < array.length; i++) {
                       // console.log('chevron down', i)
                        array[i].classList.add('active');
                    }

                });

                //$('table.tbl3 .3-scorediff .fa-chevron-down').addClass('active');

                document.querySelectorAll('span.alpha > i.fa').forEach((el, index, array) => el.addEventListener("click", function () {
                    for (var i = 0; i < array.length; i++) {
                        console.log('clicked this', i)
                        array[i].classList.remove('active');
                        if (array[i] == el) {
                            array[i].classList.add('active');
                        }
                    }
                }));

                document.querySelectorAll('span.score1 > i.fa').forEach((el, index, array) => el.addEventListener("click", function () {
                    for (var i = 0; i < array.length; i++) {
                        console.log('clicked this', i)
                        array[i].classList.remove('active');
                        if (array[i] == el) {
                            array[i].classList.add('active');
                        }
                    }
                }));

                document.querySelectorAll('span.score2 > i.fa').forEach((el, index, array) => el.addEventListener("click", function () {
                    for (var i = 0; i < array.length; i++) {
                        console.log('clicked this', i)
                        array[i].classList.remove('active');
                        if (array[i] == el) {
                            array[i].classList.add('active');
                        }
                    }
                }));

                document.querySelectorAll('span.scorediff > i.fa').forEach((el, index, array) => el.addEventListener("click", function () {
                    for (var i = 0; i < array.length; i++) {
                        console.log('clicked this', i)
                        array[i].classList.remove('active');
                        if (array[i] == el) {
                            array[i].classList.add('active');
                        }
                    }
                }));

                document.querySelectorAll('span.alpha > i.fa.fa-chevron-down').forEach((el) => el.addEventListener("click", function () {
                    figureControls['table3'].sortFilterStatus.setKeyToSortBy('country');
                    figureControls['table3'].sortFilterStatus.sortDirection = 1;
                    figureControls['table3'].updateFigures();
                }));

                document.querySelectorAll('span.alpha > i.fa.fa-chevron-up').forEach((el) => el.addEventListener("click", function () {
                    figureControls['table3'].sortFilterStatus.setKeyToSortBy('country');
                    figureControls['table3'].sortFilterStatus.sortDirection = -1;
                    figureControls['table3'].updateFigures();
                }));

                document.querySelectorAll('span.score1 > i.fa.fa-chevron-down').forEach((el) => el.addEventListener("click", function () {
                    figureControls['table3'].sortFilterStatus.setKeyToSortBy('mn-' + _firstYear);
                    figureControls['table3'].sortFilterStatus.sortDirection = -1;
                    figureControls['table3'].updateFigures();
                }));

                document.querySelectorAll('span.score1 > i.fa.fa-chevron-up').forEach((el) => el.addEventListener("click", function () {
                    figureControls['table3'].sortFilterStatus.setKeyToSortBy('mn-' + _firstYear);
                    figureControls['table3'].sortFilterStatus.sortDirection = 1;
                    figureControls['table3'].updateFigures();
                }));
                document.querySelectorAll('span.score2 > i.fa.fa-chevron-down').forEach((el) => el.addEventListener("click", function () {
                    figureControls['table3'].sortFilterStatus.setKeyToSortBy('mn-' + _lastYear);
                    figureControls['table3'].sortFilterStatus.sortDirection = -1;
                    figureControls['table3'].updateFigures();
                }));
                document.querySelectorAll('span.score2 > i.fa.fa-chevron-up').forEach((el) => el.addEventListener("click", function () {
                    figureControls['table3'].sortFilterStatus.setKeyToSortBy('mn-' + _lastYear);
                    figureControls['table3'].sortFilterStatus.sortDirection = 1;
                    figureControls['table3'].updateFigures();
                }));
                document.querySelectorAll('span.scorediff > i.fa.fa-chevron-down').forEach((el) => el.addEventListener("click", function () {
                    figureControls['table3'].sortFilterStatus.setKeyToSortBy('gap');
                    figureControls['table3'].sortFilterStatus.sortDirection = -1;
                    figureControls['table3'].updateFigures();
                }));
                document.querySelectorAll('span.scorediff > i.fa.fa-chevron-up').forEach((el) => el.addEventListener("click", function () {
                    figureControls['table3'].sortFilterStatus.setKeyToSortBy('gap');
                    figureControls['table3'].sortFilterStatus.sortDirection = 1;
                    figureControls['table3'].updateFigures();
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
        // this.setKeyToSortBy('gap');
    }
}
</script>
 
<style></style>