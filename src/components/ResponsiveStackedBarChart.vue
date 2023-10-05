<template>
    <div id="RHLPcontainer" ref="resizeRef">
        <svg id="RHLchart" style="background:none" ref="svgRef">
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
    name: "ResponsiveStackedBarChart",
    props: ["scores"],
    setup(props) {
        const svgRef = ref(null);
        const { resizeRef, resizeState } = useResizeObserver();


        onMounted(() => {
            const svg = select(svgRef.value);
            const g = svg.append("g").attr("transform", "translate(" + 0 + "," + 0 + ")");


            // whenever any dependencies (like data, resizeState) change, call this!
            watch(() => {

                console.log('RESPONSIVE STACKED BAR props.data', props.scores)
                //const barScores = JSON.parse(JSON.stringify(props.scores))
                var testArray = [];
                testArray[0] = JSON.parse(JSON.stringify(props.scores))

                testArray[0].forEach((element, index, array) => {
                    console.log('scores index',index)
                    console.log('scores array',array)
                    console.log('scores element',element[index])

                })
                // this.scores = scores;
                // this.loadScores = function (scores) {
                //     this.scores = scores;
                // }
                // this.generate = function (htmlSelector) {
                // }
                var margin = 0,
                    view_width = 1000,
                    view_height = 500,
                    scores = testArray[0],
                    width = view_width - margin + 20,
                    height = view_height - margin;
                //var svg = d3.select(htmlSelector);
                var chartHeight = scores.length * 22.5;
                var heightAboveChart = 30;
                var heightBelowChart = 10;
                svg.attr('width', 450)
                svg.attr('height', chartHeight + heightAboveChart + heightBelowChart)
                svg.attr('xmlns', 'http://www.w3.org/2000/svg')

                var height = 22.5 * scores.length
                var xScale = scaleLinear().range([0, 250]),
                    yScale = scaleBand().range([height, 0]).padding(0.4);
                xScale.domain([0, 100])
                yScale.domain(scores.map(function (d,i) { console.log('scores map',d[i]); return d[i].country; }));
                var barHeight = 18
                var g = svg.append("g")
                    .attr("transform", "translate(" + 150 + "," + 0 + ")");
                g.append("g")
                    .selectAll('text.y-axis')
                    .data(scores)
                    .join('text')
                    .attr("class", "y-left")
                    .attr("transform", "translate(0,0)")
                    .attr("text-anchor", "end")
                    .attr("alignment-baseline", "middle")
                    .text(function (d) { console.log('scores d',d); return d.country })
                    .attr('x', -5)
                    .attr('y', function (d) { return yScale(d.country) + yScale.bandwidth() / 2; })
                    .attr('font-size', '11px')
                    .attr('font-weight', function (d) {
                        if (d.countryId == 'IN3') return 600;
                        return 500;
                    })
                    .attr('style', function (d) {
                        if (!d.isOECD) return 'font-style: italic';
                        return null;
                    })

                g.selectAll('rect.background')
                    .data(scores)
                    .join("rect")
                    .attr("width", function (d) {
                        return xScale(100)
                    })
                    .attr("height", barHeight)
                    .attr("x", 0)
                    .attr("y", function (d) { return yScale(d.country) + yScale.bandwidth() / 2 - barHeight / 2; })
                    .attr("fill", "#E3E4E6")
                g.selectAll('rect.less-than-two')
                    .data(scores)
                    .join("rect")
                    .attr("width", function (d,i) {
                        console.log('scores Responsive rect less than', d[i].scores)
                        console.log('scores Responsive d', d)
                        if (d[i].scores[0] === 999) return 0;
                        return xScale(d[i].scores[0])
                    })
                    .attr("height", barHeight)
                    .attr("x", 0)
                    .attr("y", function (d,i) { console.log('scores height', yScale(d[i].country)+yScale.bandwidth() / 2 - barHeight / 2); return yScale(d[i].country) + yScale.bandwidth() / 2 - barHeight / 2; })
                    .attr("fill", "#00843D")
                g.selectAll('text.less-than-two')
                    .data(scores)
                    .join("text")
                    .attr("text-anchor", "middle")
                    .attr("alignment-baseline", "middle")
                    .attr("x", function (d,i) {
                        if (d[i].scores[0] == 999) return xScale(0)
                        return xScale(d[i].scores[0] / 2)
                    })
                    .attr("y", function (d,i) { return yScale(d[i].country) + yScale.bandwidth() / 2 + 1 })
                    .text(function (d,i) {
                        if (d[i].scores[0] == 999) return '‡';
                        if (d[i].sigs[0]) return Math.round(d[i].scores[0]) + '*'
                        return Math.round(d[i].scores[0]);
                    })
                    .attr('class', 'less-than-two')
                    .attr("fill", function (d,i) {
                        if (d[i].scores[0] == 999) return 'black';
                        return 'white';
                    })
                    .attr('font-size', '11px')
                    .attr('font-weight', '600')
                g.selectAll('rect.five-and-above')
                    .data(scores)
                    .join("rect")
                    .attr("width", function (d,i) {
                        if (d[i].scores[4] == 999) return 0;
                        return xScale(d[i].scores[4])
                    })
                    .attr("height", barHeight)
                    .attr("x", function (d,i) { return xScale(100 - d[i].scores[4]) })
                    .attr("y", function (d,i) { return yScale(d[i].country) + yScale.bandwidth() / 2 - barHeight / 2; })
                    .attr("fill", "#FBB03B")
                g.selectAll('text.five-and-above')
                    .data(scores)
                    .join("text")
                    .attr("text-anchor", function (d,i) {
                        if (d[i].scores[4] == 999) return 'end';
                        if (Math.round(d[i].scores[4]) <= 2) return 'end';
                        return "middle";
                    })
                    .attr("alignment-baseline", "middle")
                    .attr("x", function (d,i) {
                        if (d[i].scores[4] == 999) return xScale(100) - 2;
                        if (Math.round(d[i].scores[4]) <= 2) return xScale(100 - d[i].scores[4]);
                        return xScale(100 - d[i].scores[4] / 2)
                    })
                    .attr("y", function (d,i) { return yScale(d[i].country) + yScale.bandwidth() / 2 + 1 })
                    .text(function (d,i) {
                        if (d[i].scores[4] == 999) {
                            if (((d[i].errorCodes[4] & 4096) > 0) || ((d[i].errorCodes[4] & 8192) > 0)) {
                                return '‡';
                            }
                            if (d[i].errorCodes[4] & 128) {
                                if (d[i].sigs[4]) return '#*';
                                return '#';
                            }
                        }
                        if (d[i].sigs[4]) return Math.round(d[i].scores[4]) + '*'
                        return Math.round(d[i].scores[4]);
                    })
                    .attr('class', 'less-than-two')
                    .attr("fill", "black")
                    .attr('font-size', '11px')
                    .attr('font-weight', '600')
                var hasUS = scores.find(element => element.countryId == 'USA')
                if (hasUS) {
                    g.append('image')
                        .attr('x', -120)
                        .attr('y', function () { return yScale('United States') - yScale.bandwidth() / 2 + 3 })
                        .attr('width', 40)
                        .attr('height', 21)
                        .attr('href', '../../inc/css/images/us-flag-icon.svg')
                }


                //   console.log('RESPONSIVE BAR props.data',props.data)



            },
                { deep: true });
        });

        return { svgRef, resizeRef };
    },
};
</script>
<style>
#RHLPcontainer {
    display: block;
    height: 400px;
}
</style>