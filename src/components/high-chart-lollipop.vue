<template>
  <div class="chartElem">
    <div class="row">
      <highcharts class="chart" :highcharts="Highcharts" :options="chartOptions"></highcharts>
    </div>
  </div>
</template>

<script>

import { onMounted, ref, watch, computed } from 'vue'

export default {
  name: "HighChartLollipop",
  props: ["data", "categories", "title", "titlex", "titley", "average","whichSection"],
  setup(props) {

    const data = props.data;
    const currentSection = props.whichSection;
    const categories = props.categories;
    const title = props.title;
    const titlex = props.titlex;
    const titley = props.titley;
    const average = props.average;
    
    const chartData = JSON.parse(JSON.stringify(props.data))
    console.log('LOLLIPOP Chartdata', chartData)
    console.log('LOLLIPOP currentSection', currentSection)
    console.log('LOLLIPOP data', data)
    console.log('LOLLIPOP categories', categories)

    let tableData = []





    // onMounted(() => {

      

    //   console.log('Lollipop props --->', props)

    //   if (props.whichSection == "/reading/achievement") {
    //     console.log('lollipop reading')
    //     const tableData = [[0, 458.5913, 438.2447, 'down', '*', ''],
    //     [1, 463.3476, 478.2447, 'down', '*', ''],
    //     [2, 478.2447, 489.1129, 'up', '*', ''],
    //     [3, 478.2447, 530.7587, 'up', '*', ''],
    //     [4, 478.2447, 546.6833, 'up', '*', '']]

    //   } else if (props.whichSection == "/science/achievement") {
    //     console.log('lollipop science')
    //     const tableData = [[0, 458.5913, 428.2447, 'down', '*', ''],
    //     [1, 463.3476, 478.2447, 'down', '*', ''],
    //     [2, 478.2447, 489.1129, 'up', '*', ''],
    //     [3, 478.2447, 530.7587, 'up', '*', ''],
    //     [4, 478.2447, 546.6833, 'up', '*', '']]

    //   } else {

    //   }

    //   // whenever any dependencies (like data, resizeState) change, call this!
    //   watch(() => {
    //     console.log('Lollipop props.data *******', props.data)

    //   },
    //     { deep: true });
    // });
    return { tableData };
  },
  data() {

    this.tableData = JSON.parse(JSON.stringify(this.data))

    console.log('-----> LOLLIPOP data', this.data)
    console.log('-----> LOLLIPOP currentSection', this.currentSection)
    console.log('-----> LOLLIPOP this.tableData', this.tableData)
    console.log('-----> LOLLIPOP categories', this.categories)
    

   

    // this.tableData = [[0, 455.5913, 478.2447, 'down', '*', ''],
    //   [1, 463.3476, 478.2447, 'down', '*', ''],
    //   [2, 478.2447, 489.1129, 'up', '*', ''],
    //   [3, 478.2447, 530.7587, 'up', '*', ''],
    //   [4, 478.2447, 546.6833, 'up', '*', '']]

    

    return {
      tableData: [],
      chartData: [],
      chartOptions: {

        chart: {
          backgroundColor: 'white',
          margin: [100, 100, 80, 200],
          type: 'dumbbell',
          inverted: true,
          style: {
            fontFamily: "Arial, sans-serif",
            color: "#000000"
          },
          events: {
            render: function () {




              const ren = this.renderer
              var _svg = ren.box
              //var mkr1 = [];
              //var mkr1 = $(_svg).find('.highcharts-markers.highcharts-series-0').children()

              //console.log('mkr1',mkr1)
              //console.log('chart 7 svg', _svg)
              //let cc = r.group.element.querySelectorAll('path')

              var mk3 = _svg.querySelectorAll('.highcharts-markers.highcharts-series-0')
              //var mklabel = _svg.querySelectorAll('.highcharts-label')
              //var labelText = mklabel[0].children[1]
              //labelText.setAttribute('fill','#000000')
              //console.log('mklabel', labelText)
              // console.log('mk3', mk3[0].children)
              // console.log('mk3alone', mk3)


              Array.from(mk3[0].children).forEach(function (element) {
                console.log('lollipop element chart 7', element)

                if (element.getAttribute('opacity') == '1') {
                  var isLow = element.classList.contains('highcharts-lollipop-low')
                  // console.log('isLow', isLow);
                  var _b = element.point
                  //console.log('_b', _b)
                  var _t = _b.dataLabels[(isLow) ? 1 : 0]
                  // console.log('_t', _t);
                  var _el = _t.text.element
                  if (isLow) {
                    // console.log('what is _el', _el);
                    _el.setAttribute('text-anchor', 'middle')
                    _el.setAttribute('x', 0)

                  } else {
                    _el.setAttribute('x', 25)
                  }
                  // fix diff point color to black
                  _t = _b.dataLabels[(isLow) ? 0 : 1]
                  _el = _t.text.element
                  // _el.css('fill', '#000000')
                  // _el.setAttribute('fill', '#000000')
                  _el.style.fill = "#000000";
                  var _d = _b.options
                  var _diff = _d.high - _d.low
                  if (_diff < 10) {
                    _el.setAttribute('x', (isLow) ? 43 : -22)
                  } else {
                    if (_diff < 30) {
                      _el.setAttribute('x', (isLow) ? 33 : -20)
                    }
                  }


                }
                //mkr1.push(element)
              });

              // pleung: fixing stem, render always reset usavg
              // step 1: find us average 

              //let cc = document.querySelector(r)
              let stm1New = this.series[0].group.element.querySelectorAll('.highcharts-lollipop-stem')
              console.log('lollipop stm1New', stm1New)

              //var stm1 = $(this.series[0].group.element).children('.highcharts-lollipop-stem')
              var dd = this.options.series[0].data
              console.log(dd)
              var adjPx = +this.options.yAxis[0].plotLines[0].width / 2
              //console.log('stm1New parent', stm1New[0].parentNode)
              //stm1New[0].parentNode.removeAttr('usavg')
              stm1New[0].parentNode.removeAttribute('usavg')

              //console.log('dd', dd)
              //console.log('adjPx', adjPx)
              //let test1 = stm1.eq(0).attr('d').split(' ')
              let test1 = stm1New[0].getAttribute('d').split(' ')
              // console.log('test1', test1)
              let uspt = (dd[0][3] == 'up') ? test1[2] : test1[5]
              //console.log('uspt value', uspt)
              stm1New[0].parentNode.setAttribute('usavg', uspt)
              stm1New.forEach(function (i, x) {
                // console.log('2i', i)
                //console.log('2x', x)
                let mx = i.getAttribute('d').split(' ')
                // console.log('2mx', mx)
                let dx = dd[x]
                if (dx[3] == 'up') {
                  // minus 2.5
                  mx[2] = uspt - adjPx
                  // console.log('mx[2]', mx[2])
                  i.setAttribute('usat', 2)
                  //console.log('set2i', i)
                }
                if (dx[3] == 'down') {
                  // plus 2.5
                  mx[5] = uspt + adjPx
                  i.setAttribute('usat', 5)
                }
                i.setAttribute('d', mx.join(' '))
                return
              })

            }
          }
        },

        accessibility: {
          description: 'Demo'
        },
        title: {
          text: '',
          style: {
            color: '#000000',
            fontSize: "14px",
            fontWeight: '700'
          }
        },
        labels: {
          style: {
            color: "#000000",
            fontSize: "12px",
            fontWeight: 500
          },
          formatter: function () {
            if (this.value == 250) {
              return 0
            }
            if (this.value == 650) {
              return 1000
            }
            return this.value
          }
        },
        xAxis: {
          categories: this.categories,
          labels: {
            style: {
              color: "#000000",
              fontSize: "12px",
              fontWeight: 500
            }
          },
          lineWidth: 0,
          title: {
            rotation: 0,
            align: 'high',
            x: this.titlex,
            y: this.titley,
            textAlign: 'right',
            text: this.title,

            style: {
              color: '#000000',
              fontSize: "14px",
              fontWeight: '700',
              width: '170px'

            }
          },
        },
        yAxis: {
          min: 250,
          max: 650,
          gridLineWidth: 0,
          lineWidth: 1,
          tickWidth: 1,
          startOnTick: false,
          endOnTick: false,
          tickPositions: [250, 300, 350, 400, 450, 500, 550, 600, 650],
          breaks: [{
            from: 275,
            to: 275
          },
          {
            from: 625,
            to: 625
          }
          ],
          title: {
            text: 'Average score',
            // align: 'center',
            style: {
              color: '#000000',
              fontSize: "14px",
              fontWeight: '700'
            }
          },
          labels: {
            style: {
              color: "#000000",
              fontSize: "12px",
              fontWeight: 500
            },
            formatter: function () {
              if (this.value == 250) {
                return 0
              }
              if (this.value == 650) {
                return 1000
              }
              return this.value
            }
          },
          plotLines: [{
            label: {
              useHTML: true,
              text: `<p style="background-color: #fbb03b; border-radius: 0.3em; padding: 0.5em 1em;">U.S. average (${this.average})</p>`,
              rotation: 0,
              verticalAlign: 'top',
              align: 'center',
              y: -17,
              x: -12,
              style: {
                color: '#000000',
                fontWeight: '700'
              }
            },
            useHTML: 'true',
            marginBottom: 10,
            color: '#fbb03b',
            width: 5,
            value: this.average,
            // zIndex: 5
          }]
        },
        tooltip: {
          style: {
            color: '#000000',
            fontSize: '11px',
            fontWeight: '500'
          },
          formatter: function () {
            if (this.point.dir == 'up') {
              var us = Math.round(this.point.low)
              var pt = Math.round(this.point.high)
              var msg = 'higher than'
              var sigx = (this.point.mkr == '*') ? `significantly` + msg : 'not significantly different from<br/>'
            } else {
              us = Math.round(this.point.high)
              pt = Math.round(this.point.low)
              msg = 'lower than'
              sigx = (this.point.mkr == '*') ? `significantly` + msg : 'not significantly different from<br/>'
            }
            return `"<b>${this.x}</b>" = ${pt}<br/>is ${sigx} U.S. Average (${us})`;
          }
        },
        plotOptions: {
          dumbbell: {
            events: {
              mouseOut: function (e) {
                var myfunc = function (e, ctr, f) {
                  let r = e.target
                  //let cc = document.querySelector(r)
                  console.log('lollipop r', r)
                  let cc = r.group.element.querySelectorAll('path')
                  console.log('cc', cc)
                  let usbarHalf = +r.chart.userOptions.yAxis[0].plotLines[0].width / 2
                  // wait until all stroke-width are equal
                  let wx = {}
                  cc.forEach(function (i, x) {
                    console.log(i)
                    console.log('x' + x)
                    console.log('i attribute' + i.getAttribute('stroke-width'))
                    wx[`w-` + i.getAttribute('stroke-width')] = true
                  })
                  //console.log('object keys', Object.keys(wx).length)
                  if (Object.keys(wx).length > 1) {
                    //console.log('Object.keys(wx).length > 1', Object.keys(wx).length > 1)
                    // wait
                    ctr += 1
                    if (ctr < 10) {
                      window.setTimeout(f, 100, e, ctr, f)
                    } else {
                      // oops, waiting too long
                      console.log('oops. waiting too long')
                    }
                    return
                  }
                  // Unconditionally fix all connectors
                  cc.forEach(function (i, x) {
                    console.log('second i', i)
                    let mx = i.getAttribute('d').split(' ')
                    console.log('second mx' + mx)
                    console.log('second x' + x)
                    let usat = i.getAttribute('usat')
                    let uspt = i.parentNode.getAttribute('usavg')
                    console.log('uspt', uspt)
                    console.log('second usat', usat)
                    if (usat == '2') {
                      mx[2] = uspt - usbarHalf
                    }
                    if (usat == '5') {
                      mx[5] = uspt + usbarHalf
                    }
                    i.getAttribute('d', mx.join(' '))
                  })
                  return
                }
                window.setTimeout(myfunc, 100, e, 0, myfunc)
              }
            },
            lowColor: '#00843d',
            marker: {
              radius: 18,
              lineWidth: 1,
              lineColor: '#000000',
              fillColor: '#00843d'
            },
            connectorWidth: 20,
            connectorColor: '#cdcdcd',
            dataLabels: {
              enabled: true,
              allowOverlap: true,
              inside: true,
              borderWidth: 1,
              shadow: false,
              style: {
                color: '#ffffff',
                fontSize: '12px',
                fontWeight: 600,
                textOutline: 0
              },
              formatter: function () {
                var diff = this.point.high - this.point.low
                if (this.point.dir == 'down') {
                  // use high point and set to neg
                  if (this.y === this.point.high) {
                    this.point.graphics[1].element.setAttribute('opacity', 0)
                    return '-' + Math.round(diff) + this.point.mkr2
                  } else {
                    return Math.round(this.y) + this.point.mkr
                  }
                }
                if (this.point.dir == 'up') {
                  // use low point and set to neg
                  if (this.y === this.point.low) {
                    this.point.graphics[0].element.setAttribute('opacity', 0)
                    return Math.round(diff) + this.point.mkr2
                  } else {
                    return Math.round(this.y) + this.point.mkr
                  }
                }
                return ''
              }
            },

          },
        },
        legend: {
          enabled: false
        },
        exporting: {
          enabled: false
        },
        series: [{
          name: 'slunch3',
          color: '#cdcdcd',
          keys: ['x', 'low', 'high', 'dir', 'mkr', 'mkr2'],
          data: this.tableData
        }]
      },

      created() {

        // Highcharts.wrap(Highcharts.Axis.prototype, 'getLinePath', function (proceed, lineWidth) {
        //         var axis = this;
        //         console.log('axis',axis);



        //       });



      },


    }
  },

}
</script>

<style scoped></style>