<template>
    <div class="table-classic__container" id="tableM4b">
        <div class="table-control d-flex justify-center">
            <p><strong>Filter by:</strong></p>
            <input type="radio" id="m4btbl-all-educations-systems" class="all-education-systems-4b" name="m4b-toggle-one"
                checked="checked">
            <label for="m4btbl-all-educations-systems">
                All education systems
            </label>
            <input type="radio" id="m4btbl-oecd-only" class="oecd-only-4b" name="m4b-toggle-one">
            <label for="m4btbl-oecd-only">
                OECD members only
            </label>
        </div>
        <table class="tbl4b" tabindex="0">
            <caption>

            </caption>
            <colgroup>
                <col>
                <col>
                <col>
                <col>
            </colgroup>


            <thead>
                <tr>
                    <th><span class="alpha-4b">Education system <i class="fa fa-chevron-down"></i><i
                                class="fa fa-chevron-up"></i></span></th>
                    <th><span class="score1-4b">2018 score <i class="fa fa-chevron-down"></i><i
                                class="fa fa-chevron-up"></i></span></th>
                    <th><span class="score2-4b">2022 score <i class="fa fa-chevron-down"></i><i
                                class="fa fa-chevron-up"></i></span></th>
                    <th><span class="scorediff-4b">Score difference <i class="fa fa-chevron-down"></i><i
                                class="fa fa-chevron-up"></i></span></th>
                </tr>
            </thead>
            <tbody id="tbody4B" class="four-b-systems">
                <tr class="first-tr-4b">
                    <th class="country">commodi distinctio</th>
                    <td class="">422</td>
                    <td>21</td>
                    <td>332</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
 
<script>
import { onMounted, ref, watch, computed } from 'vue'
import { DataService } from '../../../services/api/data-service';



export default {
    name: 'Table-Four-B',
    components: {
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
        let _firstYear = '2018';

        this.subscription = DataService.getTable4BData().subscribe(
            allResults => {
               
                /* _processAverageScoreData */
                var filteredData = allResults.filter(function (element, index, array) {
                    // return element.focalYear == '2022' && element.jurisdiction != 'IN3';
                    return element.focalYear == '2022';
                })
                var finalData = [];
                var figureControls = {};
                filteredData.forEach((element, index, array) => {
                    var jurisdiction = element.jurisdiction;
                    var testArray = finalData.filter((element) => {
                        return element.jurisdiction == jurisdiction;
                    })
                    if (element.targetValue != 999 && element.focalValue != 999) {
                        var currentRow = {}
                        if (testArray.length == 0) {
                            finalData[finalData.length] = currentRow;
                            currentRow.countryId = element.jurisdiction
                            currentRow.country = element.jurisLabel;
                            if (currentRow.countryId == 'IN3') currentRow.country = 'OECD average'
                        } else {
                            currentRow = testArray[0]
                        }
                        var statType = element.statType.split(':')[1]
                        currentRow[statType.toLowerCase() + "-" + element.targetYear] = element.targetValue;
                        currentRow[statType.toLowerCase() + "-" + element.focalYear] = element.focalValue;
                        currentRow[statType.toLowerCase() + "-" + element.focalYear] = element.focalValue;
                        currentRow.gap = element.gap;
                        currentRow.sig = element.sig;
                        currentRow.errorFlag = element.focalErrorFlag;
                    }
                })

                // console.log('TABLE 4B finaldata', finalData)

                var mapFunction = function (element, index, array) {
                    console.log('table4b element', element)
                    var ret = {}
                    ret.country = element['country'];
                    ret.countryId = element['countryId'];
                    ret.isOECD = _isOECDCountry(ret.countryId);
                    ret.values = [Math.round(element['mn-' + _firstYear]), Math.round(element['mn-' + _lastYear]), element['gap']];
                    ret.decorators = [(element.errorFlag > 0) ? element.errorFlag : null, null, element.sig]
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


                class PisaTable4b {
                    constructor(tableSelector) {
                        // console.log('row',tableSelector)
                       
                        this.tBody = document.querySelector('#tbody4B');
                        console.log('---- table4b tbody',this.tBody)
                        this.rowHtmlTemplate4b = document.querySelector('tr.first-tr-4b');
                        this.rowTemplate = document.querySelectorAll('.four-b-systems > tr.first-tr-4b')
                        this.rowTemplateTR = document.querySelectorAll('.four-b-systems > tr')
                        var toberemoved = this.tBody.querySelectorAll('tr')[0];
                        //this.tBody.removeChild(this.tBody.querySelectorAll('tr')[0]);

                    //     console.log('rowhtml 4b constructor',this.rowHtmlTemplate4b)
                    //     console.log('row constructor',this.rowTemplate)

                    //    console.log('toberemoved',toberemoved)
                    console.log('table4b this rowTemplateTR',this.rowTemplateTR[0])
                       
                    }

                    addRow(dataRow) {

                        this.wrapper = document.createElement('tr');
                        this.wrapper.innerHTML = this.rowTemplateTR[0].innerHTML;
    
                       // console.log('wrapper', this.wrapper)
                       // console.log('table4b datarow', dataRow.values)
                       this.tBody.append(this.wrapper);
                       var lastRow = this.tBody.lastChild;
                            console.log('table4b this LastRow',lastRow)
                       if (dataRow.country == 'United States') {
                            lastRow.querySelectorAll('th')[0].innerHTML = '<span>' + dataRow.country + '</span>'
                        } else {
                            lastRow.querySelectorAll('th')[0].innerHTML = dataRow.country
                        }
                        for (var i = 1; i < dataRow.values.length; i++) {
                            lastRow.querySelectorAll('td')[i - 1].innerHTML = dataRow.values[i]
                        }
                        if (!dataRow.isOECD) {
                            lastRow.classList.add('not-oecd');
                        }
                        var cell1Content = ''
                        if (dataRow.errorFlag > 0) cell1Content = '<tspan font-size="10px" font-weight="normal" font-style="normal" dx="2" dy="-2">1</tspan>';
                       lastRow.querySelectorAll('td')[0].innerHTML = dataRow.values[0] + cell1Content
                        lastRow.querySelectorAll('td')[1].innerHTML = Math.round(dataRow.values[1])
                        var content = '';
                        if (dataRow.decorators[2] && dataRow.decorators[2].toLowerCase() == 'higher') {
                            content = '<span class="sig-up" role="img" aria-label="score higher than US average score" title="score higher than US average score"><i class="fas fa-caret-up"></i></span>';
                        } else if (dataRow.decorators[2] && dataRow.decorators[2].toLowerCase() == 'lower') {
                            content = '<span class="sig-up" role="img" aria-label="score lower than US average score" title="score lower than US average score"><i class="fas fa-caret-down"></i></span>';
                        } else if (dataRow.decorators[2] && dataRow.decorators[2].toLowerCase() == 'equal') {
                            content = '<span class="sig-up" role="img" aria-label="no significant difference from US average score" title="no significant difference from US average score"><i class="fa fa-diamond"></i></span>';
                        }
                        var gap = Math.round(dataRow.values[2]);
                        if (gap == 0) gap = '#';
                       lastRow.querySelectorAll('td')[2].innerHTML = gap + content
                        if (dataRow.country == 'United States') {
                           lastRow.classList.add('usa');
                        }
                    }

                    clearTable() {

                        //console.log('4b clear table')
                        //console.log('this tbody',this.tBody)
                        document.querySelectorAll('#tbody4B > tr').forEach((el) => {
                            //console.log('4b parent', el.parentElement, el);
                            var parent = el.parentElement
                            //el.innerHTML = '<th class="country">commodi distinctio</th><td class="">422</td><td>21</td><td>332</td>'
                            parent.removeChild(el)
                        });

                    }

                    generate(data) {
                        this.clearTable();
                        for (var i = 0; i < data.length; i++) {
                           // console.log('table4b data i',data[i])
                            this.addRow(data[i])
                        }
                    }
                }

                class FigureControl {
                    constructor(data, mapFunction, figures) {
                        //console.log('4b figurecontrol', data)
                        //console.log('4b figures', figures)
                        this.data = data;
                        this.mapFunction = mapFunction;
                        this.figures = figures;
                        this.sortFilterStatus = new FigureSortFilterStatus();
                        this.numberOfDataSets = 1;
                        this.showDataAfterMap;
                    }

                    updateFigures() {
                        var data = this.getSortedFilteredData()
                        //console.log('4b updatefigu', data)
                        for (var i = 0; i < this.figures.length; i++) {
                            // console.log('update', i)

                            // $(this.figures[i].selector).html('')
                           //console.log('table4b remove these figures', this.figures[i])
                            this.figures[i].generate(data[i])
                        }
                    }

                    getSortedFilteredData() {
                        var ret = JSON.parse(JSON.stringify(this.data))
                        ret.sort(propComparator(this.sortFilterStatus.keyToSortBy, this.sortFilterStatus.sortDirection))

                        if (this.debug) {
                            //console.log(JSON.stringify(ret))
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

                figureControls['table4b'] = new FigureControl(finalData, mapFunction, [new PisaTable4b('figure.table-4b table.tbl4b')]);
                figureControls['table4b'].sortFilterStatus.isOECDOnly = false;
                figureControls['table4b'].sortFilterStatus.isOECDFirst = false;
                figureControls['table4b'].updateFigures();

                var els = document.querySelectorAll('.all-education-systems-4b')
                //console.log('4b',els)

                document.querySelectorAll('.all-education-systems-4b').forEach((el) => el.addEventListener("click", function () {
                    figureControls['table4b'].sortFilterStatus.isOECDOnly = false;
                    figureControls['table4b'].updateFigures();
                }));

                document.querySelectorAll('input.oecd-only').forEach((el) => el.addEventListener("click", function () {
                    //console.log('4b click')
                    figureControls['table4b'].sortFilterStatus.isOECDOnly = true;
                    figureControls['table4b'].updateFigures();
                }));

               // var scorediff = document.querySelectorAll('span.scorediff > i.fa.fa-chevron-down')
                //scorediff.classList.add('active')
                document.querySelectorAll('span > i.fa.fa-chevron-down').forEach((el, index, array) => {
                    for (var i = 0; i < array.length; i++) {
                        array[i].classList.add('active');
                    }

                });

                //$('table.tbl4a .4a-scorediff .fa-chevron-down').addClass('active');

                document.querySelectorAll('span.alpha-4b > i.fa').forEach((el, index, array) => el.addEventListener("click", function () {
                    for (var i = 0; i < array.length; i++) {
                        //console.log('4b clicked this',i)
                        array[i].classList.remove('active');
                        if (array[i] == el) {
                            array[i].classList.add('active');
                        }
                    }
                }));

                document.querySelectorAll('span.score1-4b > i.fa').forEach((el, index, array) => el.addEventListener("click", function () {
                    for (var i = 0; i < array.length; i++) {
                        //console.log('4b clicked this',i)
                        array[i].classList.remove('active');
                        if (array[i] == el) {
                            array[i].classList.add('active');
                        }
                    }
                }));

                document.querySelectorAll('span.score2-4b > i.fa').forEach((el, index, array) => el.addEventListener("click", function () {
                    for (var i = 0; i < array.length; i++) {
                        //console.log('4b clicked this',i)
                        array[i].classList.remove('active');
                        if (array[i] == el) {
                            array[i].classList.add('active');
                        }
                    }
                }));

                document.querySelectorAll('span.scorediff-4b > i.fa').forEach((el, index, array) => el.addEventListener("click", function () {
                    for (var i = 0; i < array.length; i++) {
                        //console.log('4b clicked this',i)
                        array[i].classList.remove('active');
                        if (array[i] == el) {
                            array[i].classList.add('active');
                        }
                    }
                }));

                document.querySelectorAll('span.alpha-4b > i.fa.fa-chevron-down').forEach((el) => el.addEventListener("click", function () {
                    figureControls['table4b'].sortFilterStatus.setKeyToSortBy('country');
                    figureControls['table4b'].sortFilterStatus.sortDirection = 1;
                    figureControls['table4b'].updateFigures();
                }));

                document.querySelectorAll('span.alpha-4b > i.fa.fa-chevron-up').forEach((el) => el.addEventListener("click", function () {
                    figureControls['table4b'].sortFilterStatus.setKeyToSortBy('country');
                    figureControls['table4b'].sortFilterStatus.sortDirection = -1;
                    figureControls['table4b'].updateFigures();
                }));

                document.querySelectorAll('span.score1-4b > i.fa.fa-chevron-down').forEach((el) => el.addEventListener("click", function () {
                    figureControls['table4b'].sortFilterStatus.setKeyToSortBy('mn-' + _firstYear);
                    figureControls['table4b'].sortFilterStatus.sortDirection = -1;
                    figureControls['table4b'].updateFigures();
                }));

                document.querySelectorAll('span.score1-4b > i.fa.fa-chevron-up').forEach((el) => el.addEventListener("click", function () {
                    figureControls['table4b'].sortFilterStatus.setKeyToSortBy('mn-' + _firstYear);
                    figureControls['table4b'].sortFilterStatus.sortDirection = 1;
                    figureControls['table4b'].updateFigures();
                }));
                document.querySelectorAll('span.score2-4b > i.fa.fa-chevron-down').forEach((el) => el.addEventListener("click", function () {
                    figureControls['table4b'].sortFilterStatus.setKeyToSortBy('mn-' + _lastYear);
                    figureControls['table4b'].sortFilterStatus.sortDirection = -1;
                    figureControls['table4b'].updateFigures();
                }));
                document.querySelectorAll('span.score2-4b > i.fa.fa-chevron-up').forEach((el) => el.addEventListener("click", function () {
                    figureControls['table4b'].sortFilterStatus.setKeyToSortBy('mn-' + _lastYear);
                    figureControls['table4b'].sortFilterStatus.sortDirection = 1;
                    figureControls['table4b'].updateFigures();
                }));
                document.querySelectorAll('span.scorediff-4b > i.fa.fa-chevron-down').forEach((el) => el.addEventListener("click", function () {
                    figureControls['table4b'].sortFilterStatus.setKeyToSortBy('gap');
                    figureControls['table4b'].sortFilterStatus.sortDirection = -1;
                    figureControls['table4b'].updateFigures();
                }));
                document.querySelectorAll('span.scorediff-4b > i.fa.fa-chevron-up').forEach((el) => el.addEventListener("click", function () {
                    figureControls['table4b'].sortFilterStatus.setKeyToSortBy('gap');
                    figureControls['table4b'].sortFilterStatus.sortDirection = 1;
                    figureControls['table4b'].updateFigures();
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
    }
}
</script>
 
<style></style>