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
                    <th><span class="first">Education system <i class="fa fa-chevron-down"></i><i
                                class="fa fa-chevron-up"></i>
                        </span></th>
                    <th><span class="second">Below level 2 <i class="fa fa-chevron-down"></i><i
                                class="fa fa-chevron-up"></i></span></th>
                    <th><span class="third">Level 2 <i class="fa fa-chevron-down"></i><i
                                class="fa fa-chevron-up"></i></span>
                    </th>
                    <th><span class="fourth">Level 3 <i class="fa fa-chevron-down"></i><i
                                class="fa fa-chevron-up"></i></span>
                    </th>
                    <th><span class="fifth">Level 4 <i class="fa fa-chevron-down"></i><i
                                class="fa fa-chevron-up"></i></span>
                    </th>
                    <th><span class="sixth"><span>Levels 5<br>and above</span> <i class="fa fa-chevron-down"></i><i
                                class="fa fa-chevron-up"></i></span></th>
                </tr>
            </thead>
            <tbody id="table2">
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
import { DataService } from '../../../services/api/data-service';
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



    },
    created() {

        this.subscription = DataService.getTable2Data().subscribe(
            allResults => {
                console.log('---table 2 allresults', allResults)

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

                let m2Data = _processM2Data(allResults);
                console.log('Processed m2Data allresults', m2Data);



                function M2Table(tableSelector, data) { // (String, DataRow[])
                    let self = this;
                    this.rowHtmlTemplate = "";
                    this.data = data;
                    this.tBody = tableSelector;
                    console.log('---- table2 tbody',this.tBody);
                    this.sortFilterStatus = new SortFilterStatus();

                    this.getRowHtmlTemplate = function () {
                        this.rowHtmlTemplate = '<tr>' + tableSelector.querySelectorAll('tr')[0].innerHTML + '</tr>';
                        //this.rowHtmlTemplate = '<tr>' + $(tableSelector).find('tr:eq(0)').html() + '</tr>';
                    }

                    this.getRowHtmlTemplate();

                    this.loadTable = function () {
                        console.log('load table')
                        this.removeFirstRow();
                        for (var i = 0; i < this.data.length; i++) {
                            if (!this.sortFilterStatus.oecdOnly || this.data[i].isOECD) {
                                this.addRow()
                                this.updateRow(this.data[i], i);
                            }
                        }
                    }

                    this.removeFirstRow = function () {
                        document.querySelectorAll('tbody > tr').forEach((el) => {
                            console.log('remove tbody elrent', el);
                        });
                        //tableSelector.querySelector('tr')[0].remove();
                    }

                    this.addRow = function (dataRow, index) { // (DataRow dataRow)
                        this.wrapper = document.createElement('tr');
                        this.wrapper.innerHTML = this.rowHtmlTemplate.replace('370', index);
                        this.tBody.append(this.wrapper)
                        //var tBody = $(tableSelector).append(this.rowHtmlTemplate.replace('422', index))
                    }

                    this.sort = function () {
                        if (this.sortFilterStatus.isAlphaSort) {
                            this.data.sort(function (a, b) {
                                if (a.country == 'OECD average') return -1;
                                if (b.country == 'OECD average') return 1;
                                if (a.country < b.country) return -1;
                                else return 1;
                            })
                            if (!this.sortFilterStatus.isStandardDirection) {
                                this.data.reverse();
                            }
                        } else {
                            let doubleDaggerArray = this.data.filter(element => {
                                let score = element.scores[self.sortFilterStatus.numericSortIndex]
                                let errorCode = element.errorCodes[self.sortFilterStatus.numericSortIndex];
                                return score == 999 && (errorCode & 8192) > 0
                            });
                            let hashtagArray = this.data.filter(element => {
                                let score = element.scores[self.sortFilterStatus.numericSortIndex]
                                let errorCode = element.errorCodes[self.sortFilterStatus.numericSortIndex];
                                return score == 999 && (errorCode & 128) > 0
                            });
                            let validScoresArray = this.data.filter(element => element.scores[self.sortFilterStatus.numericSortIndex] != 999);

                            doubleDaggerArray.sort((a, b) => (a.country < b.country) ? -1 : 1);
                            hashtagArray.sort((a, b) => (a.country < b.country) ? -1 : 1);

                            validScoresArray.sort((a, b) => {
                                let aValue = a.scores[self.sortFilterStatus.numericSortIndex];
                                let bValue = b.scores[self.sortFilterStatus.numericSortIndex];
                                if (aValue > bValue) return -1;
                            });

                            if (!this.sortFilterStatus.isStandardDirection) {
                                validScoresArray.reverse();
                                this.data = hashtagArray.concat(validScoresArray).concat(doubleDaggerArray)
                            } else {
                                this.data = validScoresArray.concat(hashtagArray).concat(doubleDaggerArray)
                            }
                        }
                        let oecdIndex = this.data.findIndex(element => element.countryId == 'IN3')
                        let oecdRowInArray = this.data.splice(oecdIndex, 1);
                        this.data.unshift(oecdRowInArray[0])
                    }

                    this.updateRow = function (dataRow, index) {
                        var lastRow = this.tBody.lastChild;
                        if (dataRow.country == 'United States') {
                            lastRow.querySelectorAll('th')[0].innerHTML = '<span>' + dataRow.country + '</span>'
                        } else if (dataRow.countryId == 'IN3') {
                            lastRow.querySelectorAll('th')[0].classList.add('oecd')
                            lastRow.querySelectorAll('th')[0].innerHTML = dataRow.country
                        } else {
                            lastRow.querySelectorAll('th')[0].innerHTML = dataRow.country
                        }
                        if (!dataRow.isOECD) {
                            lastRow.classList.add('not-oecd')
                        }

                        lastRow.querySelectorAll('td')[0].innerHTML = getLabel(dataRow, 0)
                        lastRow.querySelectorAll('td')[1].innerHTML = getLabel(dataRow, 1)
                        lastRow.querySelectorAll('td')[2].innerHTML = getLabel(dataRow, 2)
                        lastRow.querySelectorAll('td')[3].innerHTML = getLabel(dataRow, 3)
                        lastRow.querySelectorAll('td')[4].innerHTML = getLabel(dataRow, 4)
                        if (dataRow.country == 'United States') {
                            lastRow.classList.add('usa')
                        }

                        function getLabel(dataRow, index) {
                            if (dataRow.scores[index] == 999) {
                                if (((dataRow.errorCodes[index] & 4096) > 0) || ((dataRow.errorCodes[index] & 8192) > 0)) {
                                    return '‡';
                                }
                                if (dataRow.errorCodes[index] & 128) {
                                    if (dataRow.sigs[index]) return '#*'
                                    return '#';
                                }
                            }
                            if (dataRow.sigs[index]) return Math.round(dataRow.scores[index]) + '*'
                            return Math.round(dataRow.scores[index]);
                        }
                    }

                    this.clearTable = function () {
                        console.log('clear table')
                        document.querySelectorAll('tbody > tr').forEach((el) => {
                            // console.log('parent', el.parentElement);
                            var parent = el.parentElement
                            parent.removeChild(el)
                        });
                    }

                    this.getLastRow = function () {
                        tableSelector.querySelectorAll('tr').forEach((el) => {
                            var parent = el.parentElement;
                            return parent.lastChild;
                        });
                    }
                }



                var m2Table = new M2Table(document.querySelector('#table2'), m2Data)
                m2Table.sortFilterStatus.isAlphaSort = false;
                m2Table.sortFilterStatus.numericSortIndex = 4;
                m2Table.sortFilterStatus.isStandardDirection = true;
                m2Table.sort();
                m2Table.loadTable({ data: m2Data });

                document.querySelectorAll('.all-education-systems').forEach((el) => el.addEventListener("click", function () {
                    m2Table.sortFilterStatus.oecdOnly = false;
                    // m2Table.sort();
                    m2Table.clearTable();
                    m2Table.loadTable();
                }));

                document.querySelectorAll('input.oecd-only').forEach((el) => el.addEventListener("click", function () {
                    m2Table.sortFilterStatus.oecdOnly = true;
                    // m2Table.sort();
                    m2Table.clearTable();
                    m2Table.loadTable();
                }));

                //tableSelector.querySelectorAll('fa')[10].classList.add('active')

                document.querySelectorAll('span > i.fa.fa-chevron-down').forEach((el, index, array) => {
                    for (var i = 0; i < array.length; i++) {
                        // console.log('chevron down', i)
                        array[i].classList.add('active');
                    }

                });
                //$('table.tbl2 .fa:eq(10)').addClass('active')

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
                document.querySelectorAll('span.fifth > i.fa').forEach((el, index, array) => el.addEventListener("click", function () {
                    for (var i = 0; i < array.length; i++) {
                        array[i].classList.remove('active');
                        if (array[i] == el) {
                            array[i].classList.add('active');
                        }
                    }
                }));
                document.querySelectorAll('span.sixth > i.fa').forEach((el, index, array) => el.addEventListener("click", function () {
                    for (var i = 0; i < array.length; i++) {
                        array[i].classList.remove('active');
                        if (array[i] == el) {
                            array[i].classList.add('active');
                        }
                    }
                }));


                document.querySelectorAll('span.first > i.fa.fa-chevron-down').forEach((el, index, array) => el.addEventListener("click", function () {
                    console.log('chev down')
                    m2Table.sortFilterStatus.setAlphaSort();
                    m2Table.sortFilterStatus.isStandardDirection = true;
                    m2Table.sort()
                    m2Table.clearTable();
                    m2Table.loadTable();
                }));

                document.querySelectorAll('span.first > i.fa.fa-chevron-up').forEach((el, index, array) => el.addEventListener("click", function () {
                    console.log('chev up')
                    m2Table.sortFilterStatus.setAlphaSort();
                    m2Table.sortFilterStatus.isStandardDirection = false;
                    m2Table.sort()
                    m2Table.clearTable();
                    m2Table.loadTable();
                }));



                let sortIndexes = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4];
                sortIndexes.forEach((sortIndex, index) => {
                    if (index > 1) {
                        document.querySelectorAll('span > i.fa').forEach((el, index, array) => el.addEventListener("click", function () {

                            console.log('sortindexes', index)
                            m2Table.sortFilterStatus.isAlphaSort = false;
                            m2Table.sortFilterStatus.numericSortIndex = sortIndex;
                            m2Table.sortFilterStatus.isStandardDirection = (index % 2 > 0) ? false : true;
                            m2Table.sort()
                            m2Table.clearTable();
                            m2Table.loadTable();

                        }));
                    }
                })






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