<template>
    <div id="RODSPcontainer" ref="resizeRef">
        <svg id="RODSPchart" style="background:none" ref="svgRef">
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
    name: "ResponsiveOneDimensionScatterPlot",
    props: ["scores"],
    setup(props) {
        const svgRef = ref(null);
        const { resizeRef, resizeState } = useResizeObserver();


        onMounted(() => {
            const svg = select(svgRef.value);
            const g = svg.append("g").attr("transform", "translate(" + 0 + "," + 0 + ")");



            // whenever any dependencies (like data, resizeState) change, call this!
            watch(() => {

                console.log('Scatter RESPONSIVE SCATTER props.data', props.scores);

                var scores = [];
                scores = JSON.parse(JSON.stringify(props.scores))

                scores.forEach((element, index, array) => {
                    console.log('Scatter scores index', index)
                    console.log('Scatter scores array', array)
                    console.log('Scatter scores element', element)

                })



                // this.scores = scores;
                var range = [];
                var max = Number.NEGATIVE_INFINITY;
                var min = Number.POSITIVE_INFINITY;
                var xAxisArray = [];
                for (var i = 0; i < scores.length; i++) {
                    //console.log('scores[i].p1',scores[i].p1)
                    if (scores[i].p1 > max) max = scores[i].p1;
                    if (scores[i].p9 < min) min = scores[i].p9;
                }
                max = (Math.ceil(max / 100) + 1) * 100;
                //console.log(max)
                max = 900;
                min = (Math.floor(min / 100) - 1) * 100;

                if (max < 900) max += 100;
                for (var i = min; i <= max; i += 100) {
                    xAxisArray.push(i)
                }



                var margin = 0,
                    view_width = 1000,
                    view_height = 500;

                var width = view_width - margin + 20,
                    height = view_height - margin;
                var chartHeight = scores.length * 32;
                var chartWidth = 250;
                var heightAboveChart = 30;
                var heightBelowChart = 42;
                //var svg = d3.select(htmlSelector);
                svg.attr('width', 450)
                svg.attr('height', chartHeight + heightAboveChart + heightBelowChart)
                svg.attr('xmlns', 'http://www.w3.org/2000/svg')

                var xScale = scaleLinear().range([0, chartWidth]),
                    yScale = scaleBand().range([chartHeight, 0]).padding(0.4);

                xScale.domain([min, max])
                yScale.domain(scores.map(function (d) { console.log(d); return d.country; }));
                var shapeWidth = 12
                var smallShapeWidth = 10
                var beforeYaxisWidth = 138;
                var g = svg.append("g")
                    .attr("transform", "translate(" + beforeYaxisWidth + ", " + heightAboveChart + ")");
                g.append("g")
                    .selectAll('text.y-axis')
                    .data(scores)
                    .join('text')
                    .attr("class", "y-left")
                    .attr("transform", "translate(0,0)")
                    .attr("text-anchor", "end")
                    .attr("alignment-baseline", "middle")
                    .text(function (d) { return d.country })
                    .attr('x', -5)
                    // .attr('y', function(d) {return yScale(d.country) + yScale.bandwidth() / 2;})
                    .attr('y', function (d) { return yScale(d.country) + yScale.bandwidth() / 2; })
                    .attr('font-size', '11px')
                    .attr('font-weight', function (d) {
                        if (d.countryId == 'IN3') return 600;
                        return 500;
                    })
                    .attr('font-style', function (d) {
                        if (!d.isOECD) return 'italic';
                        return null;
                    })
                var hasUS = scores.find(element => element.countryId == 'USA')
                if (hasUS) {
                    g.append('image')
                        .attr('x', -120)
                        .attr('y', function () { return yScale('United States') - yScale.bandwidth() / 2 + 8 })
                        .attr('width', 40)
                        .attr('height', 21)
                        .attr('href', '../../vue3/vue3Test/src/assets/images/us-flag-icon.svg')
                }

                g.append('rect')
                    .attr('class', 'gap-background')
                    .attr("width", 70)
                    .attr("height", chartHeight + 50)
                    .attr("x", chartWidth + 15)
                    .attr("y", -50)
                    .attr("fill", "#ececec")


                // function _getTextAttributes() {
                //     return { 'fill': 'black', 'font-size': '11px', 'font-weight': '600' };
                // }

                // function _addAttributes(element, attributes) {
                //     for (attr in attributes) {
                //         element.attr(attr, attributes[attr])
                //     }
                // }

                g.selectAll('text.axis-top')
                    .data(xAxisArray)
                    .join("text")
                    .attr('class', 'axis-top')
                    .attr("text-anchor", "middle")
                    .attr("dominant-baseline", "auto")
                    .attr("x", function (d) { return xScale(d) })
                    .attr("y", function (d) { return - 10 })
                    .text(function (d, i, array) {
                        if (i == 0) return 0;
                        if (i == array.length - 1) return 1000;
                        return Math.round(d)
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
                    .attr("y", function (d) { return chartHeight + 8 })
                    .text(function (d, i, array) {
                        if (i == 0) return 0;
                        if (i == array.length - 1) return 1000;
                        return Math.round(d)
                    })
                    .attr("fill", "black")
                    .attr('font-size', '11px')
                    .attr('font-weight', '600')
                g.append('text')
                    .attr('class', 'label-bottom')
                    .attr("text-anchor", "middle")
                    .attr("dominant-baseline", "hanging")
                    .attr("x", xScale(500))
                    .attr("y", chartHeight + 32)
                    .text('Score')
                    .attr("fill", "black")
                    .attr('font-size', '12px')
                    .attr('font-weight', '600')

                g.selectAll('line.x-lines')
                    .data([0, chartHeight])
                    .join("line")
                    .attr("x1", function (d, i, array) { return xScale(xAxisArray[0] + 100) })
                    .attr("y1", function (d) { return d; })
                    .attr("x2", function (d) { return xScale(xAxisArray[xAxisArray.length - 1] - 100) })
                    .attr("y2", function (d) { return d; })
                    .attr("stroke", "black")
                g.selectAll('line.x-lines')
                    .data([{ x: min, y: 0 }, { x: min + 66.7, y: 0 }, { x: max - 100, y: 0 }, { x: max - 33.3, y: 0 }, { x: min, y: chartHeight }, { x: min + 66.7, y: chartHeight }, { x: max - 100, y: chartHeight }, { x: max - 33.3, y: chartHeight }])
                    .join("line")
                    .attr("x1", function (d, i, array) { return xScale(d.x) })
                    .attr("y1", function (d) { return d.y; })
                    .attr("x2", function (d) { return xScale(d.x + 33.3) })
                    .attr("y2", function (d) { return d.y; })
                    .attr("stroke", "black")
                g.selectAll('line.x-axis-break')
                    .data([{ x: min + 33.3, y: 0 }, { x: min + 66.7, y: 0 }, { x: max - 67, y: 0 }, { x: max - 33.3, y: 0 }, { x: min + 33, y: chartHeight }, { x: min + 66.7, y: chartHeight }, { x: max - 67, y: chartHeight }, { x: max - 33.3, y: chartHeight }])
                    .join("line")
                    .attr("x1", function (d) { return xScale(d.x + 20) })
                    .attr("y1", function (d) { return d.y - 4; })
                    .attr("x2", function (d) { return xScale(d.x - 20) })
                    .attr("y2", function (d) { return d.y + 4; })
                    .attr("stroke", "black")

                g.selectAll('line.y-lines')
                    .data(xAxisArray)
                    .join("line")
                    .attr("x1", function (d) { return xScale(d); })
                    .attr("y1", function (d) { return 0; })
                    .attr("x2", function (d) { return xScale(d); })
                    .attr("y2", function (d) { return chartHeight; })
                    .attr("stroke", "#ececec")
                g.selectAll('line.p1top5')
                    .data(scores)
                    .join("line")
                    .attr("x1", function (d) { return xScale(d.p1) })
                    .attr("y1", function (d) { return yScale(d.country) + yScale.bandwidth() / 2 })
                    .attr("x2", function (d) { return xScale(d.p9) })
                    .attr("y2", function (d) { return yScale(d.country) + yScale.bandwidth() / 2 })
                    .attr("stroke", "black")
                g.selectAll('polygon.p1')
                    .data(scores)
                    .join("polygon")
                    .attr("points", function (d) {
                        return (xScale(d.p1) - shapeWidth / 2) + "," + (yScale(d.country) + yScale.bandwidth() / 2) + " " + xScale(d.p1) + "," + (yScale(d.country) + yScale.bandwidth() / 2 - shapeWidth / 2) + " " + (xScale(d.p1) + shapeWidth / 2) + "," + (yScale(d.country) + yScale.bandwidth() / 2) + " " + xScale(d.p1) + "," + (yScale(d.country) + yScale.bandwidth() / 2 + shapeWidth / 2)
                    })
                    .attr("fill", "#0647ae")
                    .attr('stroke', 'black')

                g.selectAll('rect.mn')
                    .data(scores)
                    .join("circle")
                    .attr("r", smallShapeWidth / 2)
                    .attr("height", smallShapeWidth)
                    .attr("cx", function (d) {
                        return xScale(d.mn)
                    })
                    .attr("cy", function (d) { return yScale(d.country) + yScale.bandwidth() / 2; })
                    .attr("fill", "#f7aa36")
                    .attr('stroke', 'black')

                g.selectAll('polygon.p9')
                    .data(scores)
                    .join("polygon")
                    .attr("class", "p9")
                    .attr("points", function (d) {
                        var points = [];
                        points[0] = { x: xScale(d.p9) - shapeWidth / 2, y: yScale(d.country) + yScale.bandwidth() / 2 + 4 }
                        points[1] = { x: xScale(d.p9), y: yScale(d.country) + yScale.bandwidth() / 2 - 6 }
                        points[2] = { x: xScale(d.p9) + shapeWidth / 2, y: yScale(d.country) + yScale.bandwidth() / 2 + 4 }
                        points = points.map(element => element.x + ',' + element.y);
                        points = points.join(' ');
                        return points;
                    })

                    .attr("fill", "#ffffff")
                    .attr('stroke', '#00843d')
                g.selectAll('text.p1')
                    .data(scores)
                    .join("text")
                    .attr("text-anchor", "middle")
                    .attr("alignment-baseline", "middle")
                    .attr("x", function (d) { return xScale(d.p1) })
                    .attr("y", function (d) { return yScale(d.country) - 2 })
                    .text(function (d) {
                        return Math.round(d.p1)
                    })
                    .attr('class', 'less-than-two')
                    .attr("fill", "black")
                    .attr('font-size', '11px')
                    .attr('font-weight', '600')
                g.selectAll('text.mn')
                    .data(scores)
                    .join("text")
                    .attr("text-anchor", "middle")
                    .attr("alignment-baseline", "middle")
                    .attr("x", function (d) { return xScale(d.mn) })
                    .attr("y", function (d) { return yScale(d.country) - 2 })
                    .text(function (d) {
                        return Math.round(d.mn)
                    })
                    .attr('class', 'less-than-two')
                    .attr("fill", "black")
                    .attr('font-size', '11px')
                    .attr('font-weight', '600')
                g.selectAll('text.p2')
                    .data(scores)
                    .join("text")
                    .attr("text-anchor", "middle")
                    .attr("alignment-baseline", "middle")
                    .attr("x", function (d) { return xScale(d.p9) })
                    .attr("y", function (d) { return yScale(d.country) - 2 })
                    .text(function (d) {
                        return Math.round(d.p9)
                    })
                    .attr('class', 'less-than-two')
                    .attr("fill", "black")
                    .attr('font-size', '11px')
                    .attr('font-weight', '600')
                g.selectAll('text.gap')
                    .data(scores)
                    .join("text")
                    .attr("text-anchor", "middle")
                    .attr("alignment-baseline", "middle")
                    .attr("x", function (d) { return chartWidth + 42 })
                    .attr("y", function (d) { return yScale(d.country) + yScale.bandwidth() / 2 })
                    .text(function (d) {
                        var sig = d.diffSig ? '*' : '';
                        return Math.abs(Math.round(d.p9 - d.p1)) + sig;
                    })
                    .attr('class', 'gap')
                    .attr("fill", "black")
                    .attr('font-size', '11px')
                    .attr('font-weight', '600')







            },
                { deep: true });
        });

        return { svgRef, resizeRef };
    },
};
</script>
<style>
#container {
    display: block;
    height: 400px;
}
</style>