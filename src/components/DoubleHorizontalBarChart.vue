<template>
    <!-- <div id="container" ref="resizeRef">
        <div class="chart__controller">
            <div class="sub-contain d-flex j-around">
                <div class="grouping">
                    <div class="thead d-flex j-space align-e">
                        <span class="like-th m6-sort-alpha">Education system <i class="fa fa-chevron-down"></i><i
                                class="fa fa-chevron-up"></i></span>
                        <span class="like-th m6-sort-score-gap"><span>Score difference
                                between<br>male and female students</span> <i class="fa fa-chevron-down"></i><i
                                class="fa fa-chevron-up"></i></span>
                    </div>
                    SVG LEFT
                    <svg id="left-chart" class="left-column" ref="svgRef">

                        <g></g>
                    </svg>
                </div>
                <div class="grouping">
                    <div class="thead d-flex j-space align-e">
                        <span class="like-th">Education system</span>
                        <span class="like-th">Score difference between<br>male and female
                            students</span>
                    </div>
                    SVG RIGHT
                    <svg id="right-chart" class="right-column" ref="svgRef">

                        <g></g>
                    </svg>
                </div>
            </div>
            <p class="axis-title">Difference in average mathematics literacy scores</p>
        </div>
    </div> -->
    <div id="HBcontainer" ref="resizeRef">
        <svg id="HBchart" style="background:none" ref="svgRef">
            <g></g>
        </svg>
    </div>
</template>
    
<script>
import { onMounted, ref, watchEffect, watch } from "vue";
import {
    select,
    // line,
    scaleLinear,
    scaleBand,
    scaleOrdinal,
    // min,
    // max,
    //curveBasis,
    axisBottom,
    // axisLeft,
} from "d3";
import useResizeObserver from "../use/resizeObserver";

export default {
    name: "DoubleHorizontalBarChart",
    props: ["data"],
    setup(props) {
        const svgRef = ref(null);
        const { resizeRef, resizeState } = useResizeObserver();


        onMounted(() => {
            const svg = select(svgRef.value);
            const g = svg.append("g").attr("transform", "translate(" + 0 + "," + 0 + ")");

            function _isOECDCountry(countryId) {
                var oecdCountries = ['AUS', 'AUT', 'BEL', 'CAN', 'CHL', 'COL', 'CRI', 'CZE', 'DNK', 'EST', 'FIN', 'FRA', 'DEU', 'GRC', 'HUN', 'IN3', 'ISL', 'IRL', 'ISR', 'ITA', 'JPN', 'KOR', 'LTU', 'LUX', 'LVA', 'MEX', 'NLD', 'NZL', 'NOR', 'POL', 'PRT', 'SVK', 'SVN', 'ESP', 'SWE', 'CHE', 'TUR', 'GBR', 'USA'];
                return oecdCountries.indexOf(countryId) != -1
            }


            // whenever any dependencies (like data, resizeState) change, call this!
            watch(() => {

                console.log('&&&Chart 6 DOUBLE HORIZONTAL BAR props.data', props.data)

                var scores = [];
                scores = JSON.parse(JSON.stringify(props.data))

                console.log('&&&Chart 6 scores', scores)

                // scores.forEach((element, index, array) => {
                //     console.log('DoubleHorizontal scores index', index)
                //     console.log('&&&Chart 6 DoubleHorizontal scores array', array)
                //     console.log('DoubleHorizontal scores element', element)

                // })


                var chartAreaHeight = 1000;
                var chartAreaWidth = 280;
                var heightAboveChartArea = 30;
                var heightBelowChartArea = 30;
                var widthLeftChartArea = 150;
                var widthRightChartArea = 10;

                svg.attr('width', chartAreaWidth + widthLeftChartArea + widthRightChartArea)
                svg.attr('height', chartAreaHeight + heightAboveChartArea + heightBelowChartArea)
                svg.attr('xmlns', 'http://www.w3.org/2000/svg')
                svg.attr('role', 'img')
                svg.attr('title', 'Description here')

                var xScale = scaleLinear().range([0, chartAreaWidth]),
                    yScale = scaleBand().range([chartAreaHeight, 0]).padding(0.4);
                xScale.domain([-100, 100])
                scores.reverse();
                yScale.domain(scores.map(function (d) { return d.country; }));

                function _getAttribute(key) {
                    var attributes = { 'font-size': '11px', 'font-weight': 600 };
                    return attributes[key];
                }

                var xAxisArray = []
                for (var i = -100; i <= 100; i += 20)
                    xAxisArray.push(i)
                var g = svg.append("g")
                    .attr("transform", "translate(" + widthLeftChartArea + ", " + heightAboveChartArea + ")");
                for (var i = 0; i < scores.length; i++) {
                    console.log('&&&Chart 6 score length',i)
                    // console.log('&&&Chart 6 score length', scores.length)
                    // console.log('&&&Chart 6 score length', scores[i].country)
                    if (scores[i].country == 'United States') {
                        g.append('rect')
                            .attr('class', 'united-states-text-background')
                            .attr("width", 80)
                            .attr("height", 20)
                            .attr("x", -80)
                            .attr("y", function (d) { return yScale('United States') - 10; })
                            .attr("fill", "#0a3161")
                        for (var j = 0; j < 13; j++) {
                            g.append('rect')
                                .attr('class', 'us-flag')
                                .attr('x', -120)
                                .attr('y', yScale('United States') - 10 + j * 1.5)
                                .attr('width', 40)
                                .attr('height', 1.5)
                                .attr('fill', function () {
                                    if (j % 2 == 0) return '#bd3d44';
                                    return 'white'
                                })
                        }
                        g.append('rect')
                            .attr('class', 'us-flag')
                            .attr('x', -120)
                            .attr('y', yScale('United States') - 10)
                            .attr('width', 25)
                            .attr('height', 10.5)
                            .attr('fill', '#192f5d')
                        // .attr('stroke-width', '1.5')
                    }
                    for (var j = 0; j < 5; j++) {
                        for (var k = 0; k < 6; k++) {
                            g.append('circle')
                                .attr('class', 'us-flag')
                                .attr('cx', -120 + k * 4.2)
                                .attr('cy', yScale('United States') - 10 + j * 1.9)
                                .attr('r', 0.1)
                                .attr('fill', 'white')
                        }
                    }
                }


                g.append("g")
                    .selectAll('text.axis-left')
                    .data(scores)
                    .join('text')
                    .attr("class", "axis-left")
                    .attr("transform", "translate(0,0)")
                    .attr("text-anchor", "end")
                    .attr("dominant-baseline", "middle")
                    .attr("style", function (d) {
                        if (!_isOECDCountry(d.countryId)) return 'font-style: italic';
                        return false;
                    })
                    .text(function (d) { return d.country })
                    .attr('x', -5)
                    // .attr('y', function(d) {return yScale(d.country) + yScale.bandwidth() / 2;})
                    .attr('y', function (d) { return yScale(d.country); })
                    .attr('font-size', _getAttribute('font-size'))
                    //.attr('font-weight', _getAttribute('font-weight'))
                    .attr('font-weight', function (d) {
                        if (d.countryId == 'IN3') return 600;
                        return 500;
                    })
                    .attr('fill', function (d) {
                        if (d.country == 'United States') return 'white';
                        return 'black';
                    })

                function _getTextAttributes() {
                    return { 'fill': 'black', 'font-size': '11px', 'font-weight': '600' };
                }

                function _addAttributes(element, attributes) {
                    for (attr in attributes) {
                        element.attr(attr, attributes[attr])
                    }
                }

                g.selectAll('text.axis-top')
                    .data(xAxisArray)
                    .join("text")
                    .attr('class', 'axis-top')
                    .attr("text-anchor", "middle")
                    .attr("dominant-baseline", "auto")
                    .attr("x", function (d) { return xScale(d) })
                    .attr("y", function (d) { return - 10 })
                    .text(function (d, i, array) {
                        return Math.round(Math.abs(d))
                    })
                    .attr("fill", "black")
                    .attr('font-size', '11px')
                    .attr('font-weight', '600')

                g.selectAll('text.axis-bottom')
                    .data(xAxisArray)
                    .join("text")
                    .attr('class', 'axis-bottom')
                    .attr("text-anchor", "middle")
                    .attr("dominant-baseline", "hanging")
                    .attr("x", function (d) { return xScale(d) })
                    .attr("y", function (d) { return chartAreaHeight + 8 })
                    .text(function (d, i, array) {
                        return Math.round(Math.abs(d))
                    })
                    .attr("fill", "black")
                    .attr('font-size', '11px')
                    .attr('font-weight', '600')
                g.selectAll('line.x-lines')
                    .data([0, chartAreaHeight])
                    .join("line")
                    .attr("x1", function (d, i, array) { return xScale(xAxisArray[0] + 100) })
                    .attr("y1", function (d) { return d; })
                    .attr("x2", function (d) { return xScale(xAxisArray[xAxisArray.length - 1] - 100) })
                    .attr("y2", function (d) { return d; })
                    .attr("stroke", "black")
                g.selectAll('line.y-lines')
                    .data(xAxisArray)
                    .join("line")
                    .attr("x1", function (d) { return xScale(d); })
                    .attr("y1", function (d) { return 0; })
                    .attr("x2", function (d) { return xScale(d); })
                    .attr("y2", function (d) { return chartAreaHeight; })
                    .attr("stroke", "#ececec")
                g.append('line')
                    .attr('class', 'bottom-axis')
                    .attr("x1", function (d) { return 0; })
                    .attr("y1", function (d) { return chartAreaHeight; })
                    .attr("x2", function (d) { return chartAreaWidth; })
                    .attr("y2", function (d) { return chartAreaHeight; })
                    .attr("stroke", "black")
                g.selectAll('rect.gap')
                    .data(scores)
                    .join("rect")
                    .attr('class', 'gap')
                    .attr('title', function (d) { console.log(d); return d.values[2] })
                    .attr("width", function (d) { return Math.abs(xScale(d.values[2]) - xScale(0)) })
                    .attr("height", 20)
                    .attr("x", function (d) {
                        if (d.values[2] >= 0) return xScale(0);
                        return xScale(d.values[2]);
                    })
                    .attr("y", function (d) { return yScale(d.country) - 10; })
                    .attr("fill", "#00843d")
                g.append("g")
                    .selectAll('text.gap')
                    .data(scores)
                    .join('text')
                    .attr("class", "gap")
                    .attr("text-anchor", function (d) {
                        if (d.values[2] >= 0) return 'start';
                        if (d.values[2] < 0) return 'end';
                    })
                    .attr("dominant-baseline", "middle")
                    .text(function (d) {
                        var gapLabel = Math.abs(d.values[2]);
                        if (d.decorators[2] && d.decorators[2].transform) gapLabel = d.decorators[2].transform;
                        var sig = (d.decorators[2] && d.decorators[2].afterValue) ? d.decorators[2].afterValue : '';
                        return gapLabel + sig;
                    })
                    .attr('x', function (d) {
                        if (d.values[2] >= 0) return xScale(d.values[2]) + 3;
                        return xScale(d.values[2]) - 3;
                    })
                    .attr('y', function (d) { return yScale(d.country); })
                    .attr('font-size', _getAttribute('font-size'))
                    .attr('font-weight', _getAttribute('font-weight'))



            },
                { deep: true });
        });

        return { svgRef, resizeRef };
    },
};
</script>
<style scoped>
#HBcontainer {
    display: block;
    /* height: 400px; */
}

#HBcontainer svg {
    background-color: aqua;
}
</style>