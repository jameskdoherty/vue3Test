<template>
    <div class="table-control d-flex justify-center">
        <p><strong>Filter by:</strong></p>
        <input type="radio" id="all-education-systems" name="m1-toggle-one" href="javascript:void(0)" onclick="chartreset()"
            checked="checked">
        <label for="all-education-systems">
            All education systems
        </label>
        <input type="radio" id="oecd-only" name="m1-toggle-one" href="javascript:void(0)" onclick="oecdonly()">
        <label for="oecd-only">
            OECD members only
        </label>
    </div>
    <div id="chart-area" class="d-flex flex-wrap justify-center" tabindex="1"
        aria-label="Average scores on the PISA mathematics literacy scale, by education system: 2022">
        <div id="area-left">
            <div class="hdr">
                <span class="col1 esys">Education system <a href="javascript:void(0)" onclick="alpha(1)"
                        onkeydown="alpha(1)" tabindex="1"><i class="fa fa-chevron-down"></i></a><a href="javascript:void(0)"
                        onclick="alpha()" onkeydown="alpha()" tabindex="1"><i class="fa fa-chevron-up"></i></a></span>
                <span class="col2 mean" id="mn"><span>Average score</span> <a href="javascript:void(0)" onclick="scored()"
                        onkeydown="scored()" tabindex="1"><i class="fa fa-chevron-down"></i></a><a href="javascript:void(0)"
                        onclick="scored(1)" onkeydown="scored(1)" tabindex="1"><i class="fa fa-chevron-up"></i></a></span>
                <span class="col3 mean" id="diff"><span>Difference from U.S. average score</span> <a
                        href="javascript:void(0)" onclick="difference()" onkeydown="difference()" tabindex="1"><i
                            class="fa fa-chevron-down"></i></a><a href="javascript:void(0)" onclick="difference(1)"
                        onkeydown="difference(1)" tabindex="1"><i class="fa fa-chevron-up"></i></a></span>
            </div>
        </div>
        <div id="area-right">
            <div class="hdr">
                <span class="col1 esys">Education system</span>
                <span class="col2 mean" id="mn">Average score</span>
                <span class="col3 mean" id="diff">Difference from U.S. average score</span>
            </div>
        </div>
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
    name: 'Table-One',
    components: {
        // ChildComponent
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

        let datamap = {
            'country': 0,
            'score': 1,
            'diff': 2,
            'oecd': 3,
            'marker': 4,
            'icon': 5,
            'seq': 6
        }

        this.subscription = DataService.getTable1Data().subscribe(
            allResults => {
                console.log('---table 1 allresults', allResults)

                // let data = [];
                let theHeaders = ['group', 'oecd', 'unitedstates', 'significant'];


                //var data = JSON.parse(allResults);
                var data = allResults.filter(function (element) {
                    return (element.targetJurisdiction == 'USA' && element.focalValue != 999) || (element.focalJurisdiction == 'USA' && element.targetJurisdiction == 'IN3');
                })
                data = data.map(function (element) {
                    var sigCode;
                    if (element.sig == 'HIGHER') sigCode = 1;
                    if (element.sig == 'EQUAL') sigCode = 2;
                    if (element.sig == 'LOWER') sigCode = 3;
                    if (element.focalJurisdiction == 'USA') sigCode = null;
                    var gap = Math.round(element.gap);
                    if (element.focalJurisdiction == 'USA') gap = null;
                    var countryLabel = (element.focalJurisdiction == 'IN3') ? 'OECD average' : element.focalJurisLabel;
                    var countryDecorator = (_isOECDCountry(element.focalJurisdiction)) ? 1 : 0;
                    return [countryLabel, Math.round(element.focalValue), gap, countryDecorator, 0, sigCode];
                })
                data.sort(function (a, b) {
                    if (a[1] > b[1]) return -1;
                    if (a[1] < b[1]) return 1;
                    return 0;
                })

                console.log('TABLE 1 Allresults filter', data)

                createTableM1(data)

                // this.tableHeaders = theHeaders
                // this.tableData = finalMappedData
                //this.addData(data)
                // this.addHeaders(this.tableHeaders)

            })

        function _isOECDCountry(countryId) {
            var oecdCountries = ['AUS', 'AUT', 'BEL', 'CAN', 'CHL', 'COL', 'CRI', 'CZE', 'DNK', 'EST', 'FIN', 'FRA', 'DEU', 'GRC', 'HUN', 'IN3', 'ISL', 'IRL', 'ISR', 'ITA', 'JPN', 'KOR', 'LTU', 'LUX', 'LVA', 'MEX', 'NLD', 'NZL', 'NOR', 'POL', 'PRT', 'SVK', 'SVN', 'ESP', 'SWE', 'CHE', 'TUR', 'GBR', 'USA'];
            return oecdCountries.indexOf(countryId) != -1
        }

        function insertAfter(newNode, existingNode) {
            existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
        }

        window.alpha = function (ztoa) {
            console.log('alpha')
            let _left = document.querySelector('#area-left')
            let _right = document.querySelector('#area-right')
            let mxx = document.querySelectorAll("#area-left > dl, #area-right > dl")


            // mx = mxx.not('.d-none')
            // mx = $.makeArray(mx)

            let mx = document.querySelectorAll("#area-left > dl:not(.d-none), #area-right > dl:not(.d-none)")
            // console.log('document mx', mx)
            mx = [].slice.call(mx);


            mx = mx.sort((a, b) => {
                let x = a['__data__'][datamap.country]
                let y = b['__data__'][datamap.country]
                if (ztoa) {
                    // from z to a, oecd always the first row
                    return (x < y) ? 1 : -1
                } else {
                    // defult: from a to z, oecd alwasy the first row
                    return (x < y) ? -1 : 1
                }
            })

            let half = mx.length >> 1
            // let _oecd = $(mx).filter('.oecd')
            let _oecd = document.querySelectorAll("#area-left > dl.oecd, #area-right > dl.oecd");
            //console.log('_oecd', _oecd)

            // // move 2nd half to right
            // _right.append( mx.splice(-half) )
            let splicedArray = mx.splice(-half)
            splicedArray.forEach((element, index, array) => {
                // move 2nd half to right
                _right.append(element)

            });
            // // move 1st half to left
            // _left.append( mx )
            mx.forEach((element, index, array) => {
                // move 1st half to left
                _left.append(element)

            });

            // // move all hidden or d-none to right
            // _right.append( mxx.filter('.d-none'))
            let allHidden = document.querySelectorAll("#area-left > dl.d-none, #area-right > dl.d-none")
            allHidden = [].slice.call(allHidden);
            allHidden.forEach((element, index, array) => {
                // // move all hidden or d-none to right
                _right.append(element)

            });

            // // reassign oecd to the first row of _left
            // _oecd.insertAfter( _left.children('.hdr') )

        }
        window.scored = function (lowhi) {
            console.log('scored')
            // let _left = $('#area-left')
            // let _right = $('#area-right')
            // let mxx = $('#area-left, #area-right').find('dl')
            let _left = document.querySelector('#area-left')
            let _right = document.querySelector('#area-right')
            let mxx = document.querySelectorAll("#area-left > dl, #area-right > dl")
            // let _oecd = mxx.filter('.oecd')
            let _oecd = document.querySelectorAll("#area-left > dl.oecd, #area-right > dl.oecd");
            // // filter out the hidden/d-none
            // mx = mxx.not('.d-none')
            let mx = document.querySelectorAll("#area-left > dl:not(.d-none), #area-right > dl:not(.d-none)")
            mx = [].slice.call(mx);
            // mx = $.makeArray(mx)

            mx = mx.sort((a, b) => {
                let i = a['__data__'][datamap.score]
                let j = b['__data__'][datamap.score]

                let x = a['__data__'][datamap.country]
                let y = b['__data__'][datamap.country]

                if (lowhi) {
                    // defult: from a to z, oecd alwasy the first row
                    if (i == j) {
                        // same score, then compare country label, a to z
                        return (x < y) ? -1 : 1
                    } else {
                        return (i < j) ? -1 : 1
                    }
                } else {
                    // from z to a, oecd always the first row
                    if (i == j) {
                        // same score, then compare country label, a to z
                        return (x < y) ? -1 : 1
                    } else {
                        return (i < j) ? 1 : -1
                    }
                }

            })

            let half = mx.length >> 1

            // // move 2nd half to right
            //_right.append( mx.splice(-half) )
            let splicedArray = mx.splice(-half)
            splicedArray.forEach((element, index, array) => {
                // move 2nd half to right
                _right.append(element)

            });

            // // move 1st half to left
            // _left.append( mx )
            mx.forEach((element, index, array) => {
                // move 1st half to left
                _left.append(element)

            });

            // // move all hidden or d-none to right
            // _right.append( mxx.filter('.d-none'))
            let allHidden = document.querySelectorAll("#area-left > dl.d-none, #area-right > dl.d-none")
            allHidden = [].slice.call(allHidden);
            allHidden.forEach((element, index, array) => {
                // // move all hidden or d-none to right
                _right.append(element)

            });


            //  // reassign oecd to the first row of _left
            //  _oecd.insertAfter( _left.children('.hdr') )
        }
        window.difference = function (lowhi) {
            console.log('difference')

            let _left = document.querySelector('#area-left')
            let _right = document.querySelector('#area-right')
            let mxx = document.querySelectorAll("#area-left > dl, #area-right > dl")
            //console.log('mxx', mxx)


            // let _oecd = $(mxx).filter('.oecd')
            let _oecd = document.querySelectorAll("#area-left > dl.oecd, #area-right > dl.oecd");
            //console.log('_oecd', _oecd)

            // we want all of the dl that are not .d-none
            // mx = mxx.not('.d-none')
            let mx = document.querySelectorAll("#area-left > dl:not(.d-none), #area-right > dl:not(.d-none)")
            console.log('document mx', mx)
            mx = [].slice.call(mx);
            //console.log('array mx', mx)
            // mx = $.makeArray(mx)

            mx = mx.sort((a, b) => {
                let x = a['__data__'][datamap.seq]
                let y = b['__data__'][datamap.seq]
                return (x < y) ? -1 : 1
            })

            //console.log('sort mx', mx)

            if (lowhi) {
                //console.log('lowhi', lowhi)
                mx = mx.reverse()
                //console.log('reverse mx', mx)
            }
            let half = mx.length >> 1


            // // move 2nd half to right
            //_right.append( mx.splice(-half) )
            let splicedArray = mx.splice(-half)
            splicedArray.forEach((element, index, array) => {
                // move 2nd half to right
                _right.append(element)

            });

            // // move 1st half to left
            //_left.append( mx )
            mx.forEach((element, index, array) => {
                // move 1st half to left
                _left.append(element)

            });

            let allHidden = document.querySelectorAll("#area-left > dl.d-none, #area-right > dl.d-none")
            allHidden = [].slice.call(allHidden);
            allHidden.forEach((element, index, array) => {
                // // move all hidden or d-none to right
                _right.append(element)

            });

            // // move all hidden or d-none to right
            // _right.append( mxx.filter('.d-none'))
            // // reassign oecd to the first row of _left
            // _oecd.insertAfter( _left.children('.hdr') )
        }

        function w3AddClass(element, name) {
            var i, arr1, arr2;
            arr1 = element.className.split(" ");
            arr2 = name.split(" ");
            for (i = 0; i < arr2.length; i++) {
                if (arr1.indexOf(arr2[i]) == -1) {
                    element.className += " " + arr2[i];
                }
            }
        }

        function w3RemoveClass(element, name) {
            //console.log('removeclass', element)
            var i, arr1, arr2;
            arr1 = element.className.split(" ");
           // console.log('ar1', arr1)
            arr2 = name.split(" ");
           // console.log('ar2', arr2)
            for (i = 0; i < arr2.length; i++) {
                while (arr1.indexOf(arr2[i]) > -1) {
                    arr1.splice(arr1.indexOf(arr2[i]), 1);
                }
            }
            element.className = arr1.join(" ");
        }

        window.oecdonly = function () {

            console.log('oecdonly')
            // only oecd country
            // let _left = $('#area-left')
            let _left = document.querySelector('#area-left')
            let _right = document.querySelector('#area-right')
            let _rightDL = _right.querySelector('dl')

            let bothLeftRight = document.querySelectorAll("#area-left > dl, #area-right > dl")
           // console.log('bothleftRight', bothLeftRight)
           // console.log('_right', _right)
           // console.log('_rightDL', _rightDL)
            let mx = document.querySelectorAll('dl')


            let mxArray = [].slice.call(mx);
            //console.log('mxArray', mxArray)

            let mxdlNotNotbothLeftRight = document.querySelectorAll("#area-left > dl:not(.not-oecd), #area-right > dl:not(.not-oecd)")
            //let mxdlNotNotEOCDLeft = _left.querySelectorAll("dl:not(.not-oecd)")

            var elems = document.querySelectorAll("ul > li, .mobile > *");
            //console.log(elems);

            //console.log('mxdlNotNotbothLeftRight', mxdlNotNotbothLeftRight)
            //console.log('mxdlNotNotEOCDLeft', mxdlNotNotEOCDLeft)

            // for (let i = 0; i < mxdlNotNotEOCDRight.length; i++) {
            //     // Do stuff
            //     //console.log(i)
            // }


            var i;
            // let notoecd = mx.filter('.not-oecd')
            let notoecd = document.querySelectorAll(".not-oecd");

            mx.forEach((element, index, array) => {
                // let mx = $('#area-left, #area-right').find('dl').remove()
                //console.log('remove', element)
                element.parentNode.removeChild(element);
            });


            //console.log('let notoecd', notoecd)

            // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
            for (i = 0; i < notoecd.length; i++) {
                // console.log('NOT-OECD',x)
                w3RemoveClass(notoecd[i], "show");
                // notoecd.addClass('d-none')
                if (notoecd[i].className.indexOf(".not-oecd") > -1) w3AddClass(notoecd[i], "d-none");
            }


            //console.log('not oecd mx', mx)
           // console.log('typeof mx', typeof mx)
           // console.log('typeof mxdlNotNotbothLeftRight', typeof mxdlNotNotbothLeftRight)

            // console.log(notoecd)
            // let oecd = mx.not(notoecd)
            //let oecd = _left.querySelector(":not(.not-oecd)")
            // console.log('mx.not(notoecd) not oecd', oecd)
            let oecdArray = [].slice.call(mxdlNotNotbothLeftRight);
            //oecd = $.makeArray(oecd)
            let half = oecdArray.length >> 1
            //console.log('half', half)

            let splicedArray = oecdArray.splice(-half)

            // move 2nd half to right
            //_right.append(oecdArray.splice(-half))


            splicedArray.forEach((element, index, array) => {
                // move 2nd half to right
                _right.append(element)

            });

            // move 1st half to left
            mxdlNotNotbothLeftRight.forEach((element, index, array) => {
                // move 2nd half to right
                _left.append(element)

            });


            //_left.append(oecdArray)


            notoecd.forEach((element, index, array) => {
                // move all non-oecd to right
                _right.append(element)

            });

            // move all non-oecd to right
            // _right.append(notoecd)
        }

        window.chartreset = function (lowhi) {

            let _left = document.querySelector('#area-left')
            let _right = document.querySelector('#area-right')
            let mxL = document.querySelector('#area-left')
           // console.log('mxl', mxL)
            let mxR = document.querySelector('#area-right')
            //mxL.append(mxR)
            //let mx = mxL.querySelector('dl')
            let mx = mxL.querySelectorAll('dl')
           // console.log('mx', mx)
           // console.log('get class', document.querySelectorAll('.oecd'))
            let _oecd = document.querySelectorAll('.oecd');
            //mx.classList.remove('d-none')

            // make array
            mx = [].slice.call(mx);

            //console.log("TCL: window.chartreset -> mx Array to sort and append BEFORE", mx)

            var mxb = document.getElementById("area-left");
            //console.log(mxb)
            var btns = mxb.querySelectorAll(".oecd");
            //console.log('btns', btns)


            mx = mx.sort((a, b) => {
                let x = a['__data__'][datamap.seq]
                let y = b['__data__'][datamap.seq]
                return (x < y) ? -1 : 1
            })

            if (lowhi) {
                mx = mx.reverse()
            }
            let half = mx.length >> 1

            let splicedArray = mx.splice(-half)

            splicedArray.forEach((element, index, array) => {
                // move 2nd half to right
                _right.append(element)

            });

            mx.forEach((element, index, array) => {
                // move 1st half to left
                _left.append(element)

            });

            // reassign oecd to the first row of _left
            //_oecd.insertAfter(_left.querySelector('.hdr'))

            // insertAfter(_left.querySelector('.hdr'), _oecd)


            //console.log("TCL: window.chartreset -> mx Array to sort and append AFTER", mx)
            //console.log('mx splice', mx.splice(-half)[0])
            //console.log("TCL: window.chartreset -> _left", _left)
            //console.log("TCL: window.chartreset -> _right", _right)
        }

        function createTableM1(myData) {

            let _left = document.querySelector('#area-left')

            myData.forEach((x, i) => {
                // console.log('i', i)
                // console.log('x', x)
                x.push(i)


                let createmxL = document.querySelector('#area-left')
                //console.log('mxl', createmxL)
                let createmxR = document.querySelector('#area-right')
                //createmxL.append(createmxR)
                //let mx = mxL.querySelector('dl')
                let dl = document.createElement('dl')
                //console.log("TCL: dl", dl)
                //console.log("TCL: dl", typeof dl)

                dl.classList.add('d-flex')
                dl.tabindex = '1'

                createmxL.appendChild(dl)
                let mp = document.querySelector("dl")
                let mxarray = mp.querySelectorAll('dl')
                let createmx = createmxL.querySelectorAll('dl')
                let node = document.getElementsByTagName("dl")[0];
               // console.log('htmlarray node is', node)
               // console.log('htmlarray dl is', mp)
               // console.log('htmlarray mxarray is', mxarray)

                let htmlarray = [].slice.call(createmx)

                htmlarray[i]['__data__'] = x
                if (x[datamap.oecd] != '1') {
                    dl.classList.add('not-oecd');
                }

                //console.log('htmlarray', htmlarray)
                let dt = document.createElement('dt')
                dl.appendChild(dt)

                let dd = document.createElement('dd')
                dd.classList.add('score')
                dl.appendChild(dd)

                let dd_icon = document.createElement("dd")
                dd_icon.classList.add("scorediff")
                dl.appendChild(dd_icon)

                let sp = document.createElement('span')
                sp.text = x[datamap.country]
                sp.classList.add('country')
                dt.append(sp)


                if (x[datamap.country] == 'OECD average') {
                    dl.classList.add('oecd')
                }
                if (x[datamap.country] == 'United States') {
                    dl.classList.add('usa')
                }
                //console.log(x[datamap.marker])
                // if (x[datamap.marker] != '0') {
                //     // let sp = document.createElement('span')
                //     sp.classList.add(`marker-${x[datamap.marker]}`)
                //     sp.setAttribute('aria-describedby', `marker${x[datamap.marker]}`)
                //     dt.append(sp)

                //     //sp = $('<span>', {class:`marker-${x[ datamap.marker ]}`, 'aria-describedby':`marker${x[ datamap.marker ]}`}).appendTo(dt)                    
                // }
                dd.append(document.createElement('span').text = x[datamap.score])
                dd_icon.append(document.createElement('span').text = x[datamap.diff])
                sp.append(document.createElement('span').text = x[datamap.country])

                let sp_icon = document.createElement('span')

                if (x[datamap.icon] == '1') {

                    //console.log('what is sp',sp)
                    // up triangle
                    let msg = 'score higher than U S average score'

                    sp_icon.setAttribute('role', 'img')
                    sp_icon.setAttribute('aria-label', msg)
                    sp_icon.setAttribute('title', msg)
                    sp_icon.classList.add('sig-up')
                    dd_icon.append(sp_icon)
                    let ic = document.createElement('i')
                    ic.classList.add('fas')
                    ic.classList.add('fa-caret-up')
                    sp_icon.append(ic)
                }

                if (x[datamap.icon] == '2') {

                    // diamond
                    let msg = 'no significant difference from U S average score'

                    sp_icon.setAttribute('role', 'img')
                    sp_icon.setAttribute('aria-label', msg)
                    sp_icon.setAttribute('title', msg)
                    sp_icon.classList.add('no-sig')
                    dd_icon.append(sp_icon)
                    let ic = document.createElement('i')
                    ic.classList.add('fas')
                    ic.classList.add('fa-diamond')
                    sp_icon.append(ic)
                }
                if (x[datamap.icon] == '3') {
                    // up triangle
                    let msg = 'score lower than U S average score'
                    sp_icon.setAttribute('role', 'img')
                    sp_icon.setAttribute('aria-label', msg)
                    sp_icon.setAttribute('title', msg)
                    sp_icon.classList.add('sig-down')
                    dd_icon.append(sp_icon)
                    let ic = document.createElement('i')
                    ic.classList.add('fas')
                    ic.classList.add('fa-caret-down')
                    sp_icon.append(ic)
                }

            })



            chartreset()



        }



    },
    beforeUnmount() {
        this.subscription.unsubscribe();
    },
    mounted() {
        // this.setKeyToSortBy('gap');
        let downChevrons = document.querySelectorAll('.table-1 i.fa-chevron-down')
        let mnChevrons = document.querySelectorAll('.table-1 .hdr #mn i.fa')
        let diffChevrons = document.querySelectorAll('.table-1 .hdr #diff i.fa')
        let esysChevrons = document.querySelectorAll('.table-1 .hdr .esys i.fa')
        let icons = document.querySelectorAll('.table-1 i.fa')

        downChevrons.forEach((element, index, array) => {
            element.classList.add('active')
        });

        esysChevrons.forEach((element, index, array) => {
            element.addEventListener('click', (e) => {
                for (var i = 0; i < array.length; i++) {
                    array[i].classList.remove('active');
                    if (array[i] == e.target) {
                        array[i].classList.add('active');
                    } 
                }
            })
        })
        
        mnChevrons.forEach((element, index, array) => {
            element.addEventListener('click', (e) => {
                for (var i = 0; i < array.length; i++) {
                    array[i].classList.remove('active');
                    if (array[i] == e.target) {
                        array[i].classList.add('active');
                    } 
                }
            })
        })

        diffChevrons.forEach((element, index, array) => {
            element.addEventListener('click', (e) => {
                for (var i = 0; i < array.length; i++) {
                    array[i].classList.remove('active');
                    if (array[i] == e.target) {
                        array[i].classList.add('active');
                    } 
                }
            })
        })
    }
}
</script>
 
<style></style>