class M7Chart {

    constructor(desiredFinalData, selector) {
        
        this.selector = selector;
        const totalAvg = Math.floor(464.41105131108);

        Highcharts.wrap(Highcharts.Axis.prototype, 'getLinePath', function (proceed, lineWidth) {
            var axis = this,
                brokenAxis = axis.brokenAxis,
                path = proceed.call(this, lineWidth),
                start = path[0],
                x = start[1],
                y = start[2];

            (brokenAxis.breakArray || []).forEach(function (brk) {
                if (axis.horiz) {
                    x = axis.toPixels(brk.from);
                    path.splice(path.length - 1, 0,
                        ['L', x - 4, y], // stop
                        ['M', x - 9, y + 5],
                        ['L', x + 1, y - 5], // left slanted line
                        ['M', x - 1, y + 5],
                        ['L', x + 9, y - 5], // higher slanted line
                        ['M', x + 4, y]
                    );
                } else {
                    y = axis.toPixels(brk.from);
                    path.splice(path.length, 0,
                        ['L', x, y - 4], // stop
                        ['M', x + 5, y - 9],
                        ['L', x - 5, y + 1], // lower slanted line
                        ['M', x + 5, y - 1],
                        ['L', x - 5, y + 9], // higher slanted line
                        ['M', x, y + 4]
                    );
                }
            });
            return path;
        });

        Highcharts.chart(this.selector, {
            chart: {
                backgroundColor: 'white',
                margin: [100, 100, 80, 200],
                type: 'dumbbell',
                // type: 'columnrange',
                inverted: true,
                style: {
                    fontFamily: "Arial, sans-serif",
                    color: "#000000"
                },
                events: {
                    render: function () {
                        const ren = this.renderer
                        var _svg = ren.box
                        var mkr1 = $(this.series[0].markerGroup.element).children()
                        // console.log(mkr1.length)
                        mkr1.each(function (i, x) {
                            if ($(x).attr('opacity') == '1') {
                                var isLow = $(x).hasClass('highcharts-lollipop-low')
                                // data point
                                var _b = x.point
                                // 0 - high point; 1 - low point
                                var _t = _b.dataLabels[(isLow) ? 1 : 0]
                                var _el = $(_t.text.element)
                                if (isLow) {
                                    _el.attr('text-anchor', 'middle')
                                        .attr('x', 0)
                                } else {
                                    _el.attr('x', 25)
                                }
                                // fix diff point color to black
                                _t = _b.dataLabels[(isLow) ? 0 : 1]
                                _el = $(_t.text.element)
                                _el.css('fill', '#000000')
                                var _d = _b.options
                                var _diff = _d.high - _d.low
                                if (_diff < 10) {
                                    // need shift more
                                    _el.attr('x', (isLow) ? 43 : -22)
                                } else {
                                    if (_diff < 30) {
                                        // try to shift the text location
                                        _el.attr('x', (isLow) ? 33 : -20)
                                    }
                                }
                            }
                        })
                        // pleung: fixing stem, render always reset usavg
                        // step 1: find us average 
                        var stm1 = $(this.series[0].group.element).children('.highcharts-lollipop-stem')
                        var dd = this.options.series[0].data
                        var adjPx = +this.options.yAxis[0].plotLines[0].width / 2
                        stm1.eq(0).parent().removeAttr('usavg')
                        let test1 = stm1.eq(0).attr('d').split(' ')
                        let uspt = (dd[0][3] == 'up') ? test1[2] : test1[5]
                        stm1.eq(0).parent().attr('usavg', uspt)
                        stm1.each(function (i, x) {
                            let mx = $(x).attr('d').split(' ')
                            let dx = dd[i]
                            if (dx[3] == 'up') {
                                // minus 2.5
                                mx[2] = `${+uspt - adjPx}`
                                $(x).attr('usat', 2)
                            }
                            if (dx[3] == 'down') {
                                // plus 2.5
                                mx[5] = `${+uspt + adjPx}`
                                $(x).attr('usat', 5)
                            }
                            $(x).attr('d', mx.join(' '))
                            return
                        })
                    }
                }
            },

            accessibility: {
                description: 'Demo'
            },

            title: {
                text: ''
            },

            subtitle: {
                text: ''
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: ['White', 'Black', 'Hispanic', 'Asian', 'Two or More Races'],
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
                    x: 115,
                    y: -30,
                    textAlign: 'right',
                    text: 'Race/ethnicity',

                    style: {
                        color: '#000000',
                        fontSize: "14px",
                        fontWeight: '700',
                        width: '200px'

                    }
                }
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
                        text: '<p style="background-color: #fbb03b; border-radius: 0.3em; padding: 0.5em 1em;">U.S. average (' + totalAvg + ')</p>',
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
                    value: totalAvg,
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
                        var sigx = (this.point.mkr == '*') ? `significantly ${msg} ` : 'not significantly different from<br/>'
                    } else {
                        var us = Math.round(this.point.high)
                        var pt = Math.round(this.point.low)
                        var msg = 'lower than'
                        var sigx = (this.point.mkr == '*') ? `significantly ${msg} ` : 'not significantly different from<br/>'
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
                                let cc = $(r.group.element).children()
                                let usbarHalf = +r.chart.userOptions.yAxis[0].plotLines[0].width / 2
                                // wait until all stroke-width are equal
                                let wx = {}
                                cc.each(function (i, x) {
                                    wx[`w-${$(x).attr('stroke-width')}`] = true
                                })
                                // console.log(Object.keys(wx).length)
                                if (Object.keys(wx).length > 1) {
                                    // wait
                                    ctr += 1
                                    if (ctr < 10) {
                                        window.setTimeout(f, 100, e, ctr, f)
                                    } else {
                                        // oops, waiting too long
                                        // console.log('oops. waiting too long')
                                    }
                                    return
                                }
                                // Unconditionally fix all connectors
                                cc.each(function (i, x) {
                                    let mx = $(x).attr('d').split(' ')
                                    let usat = $(x).attr('usat')
                                    let uspt = $(x).parent().attr('usavg')
                                    if (usat == '2') {
                                        mx[2] = `${+uspt - usbarHalf}`
                                    }
                                    if (usat == '5') {
                                        mx[5] = `${+uspt + usbarHalf}`
                                    }
                                    $(x).attr('d', mx.join(' '))
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
                data:
                    [0, 478.2447, 496.4796, 'up', '*', '']
                    [1, 418.778, 478.2447, 'down', '*', '']
                    [2, 451.5634, 478.2447, 'down', '*', '']
                    [3, 478.2447, 539.0954, 'up', '*', '']
                    [4, 474.4135, 478.2447, 'down', '*', '']
            }]

        })

    }
}
