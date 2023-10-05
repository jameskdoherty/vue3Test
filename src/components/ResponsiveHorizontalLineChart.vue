<template>
    <div class="scaling-svg-container" :style="{ paddingBottom: bottom + '%' }">
        {{ trend }}
        <svg class="scaling-svg" viewBox="-35 0 800 400" ref="svgRef">
            <!-- SVG content -->
            <g class="x-axis" />
            <g class="y-axis" />
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
//import useResizeObserver from "../use/resizeObserver";

export default {
    name: "ResponsiveHorizontalLineChart",
    props: ["data", "trendyears", "height", "width", "bottom"],
    mounted() {
        
        // Emits on mount
        this.emitInterface();
    },
    setup(props) {
        const svgRef = ref(null);
        //const { resizeRef, resizeState } = useResizeObserver();
        const trend = props.trendyears;
        const height = props.height;
        const width = props.width;
        const padding = props.bottom;
        const scoresZ = props.data;


        onMounted(() => {
            const svg = select(svgRef.value);
            const g = svg.append("g").attr("transform", "translate(" + 0 + "," + 0 + ")");

            console.log('height', height)
            console.log(trend)

            

            // whenever any dependencies (like data, resizeState) change, call this!
            watch(() => {

                console.log('RESPONSIVE HORIZONTAL LINE CHART props.data', props.data)
                //console.log('RESPONSIVE HORIZONTAL LINE CHART scores', scores)
                //var scoreData = props.data[0]
                //var scoreobj = Object.keys(props.data)
                //console.log('scoreData',scoreData)
               // console.log('scoreObj',scoreobj)
               

                const elementZeroValue = props.data;
                console.log('element zerovalue',elementZeroValue)

                const scores = JSON.parse(JSON.stringify(props.data))
                console.log('elZero',scores)
                //--------------


                var chartAreaHeight = 400;
                var chartAreaWidth = 800;
                var heightAboveChartArea = 0;
                var heightBelowChartArea = 0;
                var widthLeftChartArea = 0;
                var widthRightChartArea = 0;
                // var svg = d3.select(this.selector);
                // svg.attr('width', chartAreaWidth + widthLeftChartArea + widthRightChartArea)
                // svg.attr('height', chartAreaHeight + heightAboveChartArea + heightBelowChartArea)
                // svg.attr('xmlns', 'http://www.w3.org/2000/svg')
                // svg.attr('class', 'm5')


                const xScale = scaleBand().range([0, chartAreaWidth]).padding(0.8);
                const yScale = scaleLinear().range([chartAreaHeight, 0]);

                yScale.domain([200, 800])
                var bottomAxisArray = trend.split(','); //['2003', '2006', '2009', '2012', '2015', '2018', '2022']
                xScale.domain(bottomAxisArray);
                var shapeWidth = 20;
                var smallShapeWidth = 18;
                var g = svg.append("g")
                    .attr('class', 'chart-area')
                    .attr("transform", "translate(" + widthLeftChartArea + "," + heightAboveChartArea + ")")
                var yAxisArray = [200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800];
                g.selectAll('text.axis-bottom')
                    .data(bottomAxisArray)
                    .join("text")
                    .attr('class', 'bottomAixis')
                    .attr("text-anchor", "middle")
                    .attr("dominant-baseline", "hanging")
                    .attr("x", function (d) { return xScale(d) })
                    .attr("y", function (d) {
                        return chartAreaHeight + 4
                    })
                    .text(function (d, i, array) {
                        return d
                    })
                    .attr("fill", "black")
                    .attr('font-size', '11px')
                    .attr('font-weight', '500')
                g.append('line')
                    .attr('class', 'bottomAxis')
                    .attr("x1", 0)
                    .attr("x2", chartAreaWidth)
                    .attr("y1", chartAreaHeight)
                    .attr("y2", chartAreaHeight)
                    .attr('stroke', 'black')
                g.append('line')
                    .attr('class', 'leftAxis')
                    .attr("x1", 0)
                    .attr("x2", 0)
                    .attr("y1", yScale(750))
                    .attr("y2", yScale(250))
                    .attr('stroke', 'black')
                g.append('text')
                    .attr('class', 'left-axis-key')
                    .attr("text-anchor", "start")
                    .attr("dominant-baseline", "auto")
                    .attr("x", -30)
                    .attr("y", function () {
                        return yScale(yAxisArray[yAxisArray.length - 1]) - 25
                    })
                    .text('Cut score')
                    .attr("fill", "black")
                    .attr('font-size', '12px')
                    .attr('font-weight', '700')
                g.append('text')
                    .attr('class', 'left-axis-key')
                    .attr("text-anchor", "middle")
                    .attr("dominant-baseline", "hanging")
                    .attr("x", chartAreaWidth / 2)
                    .attr("y", chartAreaHeight + 35)
                    .text('Year')
                    .attr("fill", "black")
                    .attr('font-size', '12px')
                    .attr('font-weight', '700')
                g.selectAll('text.left-axis-labels')
                    .data(yAxisArray)
                    .attr('class', 'left-axis-labels')
                    .join("text")
                    .attr("text-anchor", "end")
                    .attr("dominant-baseline", "middle")
                    .attr("x", function (d) { return -7; })
                    .attr("y", function (d) { return yScale(d) })
                    .text(function (d, i, array) {
                        if (i == 0) return 0;
                        else if (i == array.length - 1) return 1000;
                        else return d
                    })
                    .attr("fill", "black")
                    .attr('font-size', '11px')
                    .attr('font-weight', '500')
                g.selectAll('line.grid')
                    .data(yAxisArray)
                    .attr('class', 'grid')
                    .join("line")
                    .attr("x1", function (d) { return 0; })
                    .attr("y1", function (d) { return yScale(d); })
                    .attr("x2", function (d) { return chartAreaWidth; })
                    .attr("y2", function (d) { return yScale(d); })
                    .attr("stroke", "#ececec")
                    .attr('stroke-width', '1px')
                var breakGap = (yScale(0) - yScale(50)) * .3;
                var breakLineHeight = (yScale(0) - yScale(50)) * .35
                var breakWidth = 10;
                var breakHeight = 10;
                g.selectAll('line.left-axis-break')
                    .data([{ x: 0, y: yScale(250) + breakLineHeight }, { x: 0, y: yScale(250) + breakLineHeight + breakGap }, { x: 0, y: yScale(800) + breakLineHeight }, { x: 0, y: yScale(800) + breakLineHeight + breakGap }])
                    .join("line")
                    .attr("x1", function (d) { return d.x - 8; })
                    .attr("y1", function (d) { return d.y + 6; })
                    .attr("x2", function (d) { return d.x + 8; })
                    .attr("y2", function (d) { return d.y - 6; })
                    .attr("stroke", "black")
                g.selectAll('line.left-axis-break-connector')
                    .data([{ x: 0, y: yScale(250) + breakLineHeight }, { x: 0, y: yScale(200) }, { x: 0, y: yScale(800) + breakLineHeight }, { x: 0, y: yScale(750) }])
                    .join("line")
                    .attr("y1", function (d) { return d.y; })
                    .attr("x1", function (d) { return d.x; })
                    .attr("y2", function (d) { return d.y - breakLineHeight })
                    .attr("x2", function (d) { return d.x; })
                    .attr("stroke", "black")

                for (var index = 0; index < scores.length; index++) {

                    console.log('scores length', scores.length)
                    console.log('scores length', index)
                    console.log('scores[index].values', scores[index].values)
                    g.selectAll('path.p9')
                        .data(scores[index].values)
                        .join("path")
                        .attr("d", function (d, i, array) {
                            return ['M', xScale(bottomAxisArray[i]), yScale(d) + 2, 'L', xScale(bottomAxisArray[i]), yScale(d) - 2, 'L', xScale(bottomAxisArray[i + 1]), yScale(scores[index].values[i + 1]) - 2, 'L', xScale(bottomAxisArray[i + 1]), yScale(scores[index].values[i + 1]) + 2, 'Z'].join(' ');
                        })
                        .attr("fill", function (d, i, array) {
                            if (index == 1 || index == 2) return '#00843d'
                            if (index == 0) return '#FBB03B'
                            if (index == 3 || index == 4) return '#003da5'
                        })
                        .attr('stroke', function (d) {
                            if (index == 1 || index == 2) return '#00843d'
                            if (index == 0) return '#FBB03B'
                            if (index == 3 || index == 4) return '#003da5'
                        })
                        .attr('stroke-width', '1')


                    var m5KeyXLocation = xScale(bottomAxisArray[bottomAxisArray.length - 1]) + 50;

                    g.selectAll('polygon.p9')
                        .data(scores[4].values.concat([scores[4].values[scores[4].values.length - 1]]))
                        .join("polygon")
                        .attr('points', function (d, i) {
                            let midPoint = (i == scores[4].values.length) ? m5KeyXLocation + smallShapeWidth / 2 : xScale(bottomAxisArray[i]);
                            var points = [];
                            points[0] = { x: midPoint - shapeWidth / 2 - 2, y: yScale(d) }
                            points[1] = { x: midPoint, y: yScale(d) - shapeWidth / 2 - 2 }
                            points[2] = { x: midPoint + shapeWidth / 2 + 2, y: yScale(d) }
                            points[3] = { x: midPoint, y: yScale(d) + shapeWidth / 2 + 2 }
                            points = points.map(element => element.x + ',' + element.y);
                            points = points.join(' ');
                            return points;
                            return (midPoint - smallShapeWidth / 2) + ',' + (yScale(d) + smallShapeWidth / 2 - 2) + ' ' + midPoint + ',' + (yScale(d) - smallShapeWidth / 2 - 2) + ' ' + (midPoint + smallShapeWidth / 2) + ',' + (yScale(d) + smallShapeWidth / 2 - 2)
                        })
                        .attr("y", function (d, i) {
                            return yScale(d) - smallShapeWidth / 2
                        })
                        .attr("x", function (d, i, array) {
                            if (i == scores[4].values.length) {
                                return m5KeyXLocation;
                            }
                            return xScale(bottomAxisArray[i]) - smallShapeWidth / 2;
                        })
                        .attr("fill", "#003da5")
                        .attr('stroke', '#003da5')
                        .attr('stroke-width', '2')
                    g.selectAll('rect.p7')
                        .data(scores[3].values.concat([scores[3].values[scores[3].values.length - 1]]))
                        .join("rect")
                        .attr("width", smallShapeWidth)
                        .attr("height", smallShapeWidth)
                        .attr("y", function (d) { return yScale(d) - smallShapeWidth / 2 })
                        .attr("x", function (d, i, array) {
                            if (i == scores[4].values.length) {
                                return m5KeyXLocation;
                            }
                            return xScale(bottomAxisArray[i]) - smallShapeWidth / 2;
                        })
                        .attr("fill", "#ffffff")
                        .attr('stroke', '#003da5')
                        .attr('stroke-width', '2')
                    g.selectAll('circle.mn')
                        .data(scores[0].values.concat([scores[0].values[scores[0].values.length - 1]]))
                        .join("circle")
                        .attr('class', 'mn')
                        .attr("r", shapeWidth / 2)
                        .attr("cy", function (d) { return yScale(d) })
                        .attr("cx", function (d, i, array) {
                            if (i == scores[4].values.length) {
                                return m5KeyXLocation + shapeWidth / 2;
                            }
                            return xScale(bottomAxisArray[i]);
                        })
                        .attr("fill", "#FBB03B")
                    g.selectAll('rect.p2')
                        .data(scores[2].values.concat([scores[2].values[scores[2].values.length - 1]]))
                        .join("rect")
                        .attr('class', 'p2')
                        .attr("width", smallShapeWidth)
                        .attr("height", smallShapeWidth)
                        .attr("y", function (d) { return yScale(d) - smallShapeWidth / 2 })
                        .attr("x", function (d, i, array) {
                            if (i == scores[2].values.length) {
                                return m5KeyXLocation;
                            }
                            return xScale(bottomAxisArray[i]) - smallShapeWidth / 2;
                        })
                        .attr("fill", "#00843d")
                        .attr('stroke', '#00843d')
                        .attr('stroke-width', '2')
                    g.selectAll('polygon.p1')
                        .data(scores[1].values.concat([scores[1].values[scores[1].values.length - 1]]))
                        .join("polygon")
                        .attr('class', 'p1')
                        .attr("width", smallShapeWidth)
                        .attr("height", smallShapeWidth)
                        .attr('points', function (d, i) {
                            let midPoint = (i == scores[4].values.length) ? m5KeyXLocation + smallShapeWidth / 2 : xScale(bottomAxisArray[i]);
                            return (midPoint - smallShapeWidth / 2 - 2) + ',' + (yScale(d) + smallShapeWidth / 2 - 2) + ' ' + midPoint + ',' + (yScale(d) - smallShapeWidth / 2 - 2) + ' ' + (midPoint + smallShapeWidth / 2 + 2) + ',' + (yScale(d) + smallShapeWidth / 2 - 2)
                        })
                        .attr("fill", "#ffffff")
                        .attr('stroke', '#00843d')
                        .attr('stroke-width', '2')
                    for (var index = 0; index < scores.length; index++) {
                        g.selectAll('text.p9')
                            .data(scores[index].values)
                            .join("text")
                            .attr('class', function (d, i) {
                                var classNames = ['p1', 'p2', 'p5', 'p7', 'p9'];
                                return classNames[index] + ' score';
                            })
                            .attr("x", function (d, i, array) {
                                return xScale(bottomAxisArray[i])
                            })
                            .attr("y", function (d, i, array) {
                                return yScale(d) - 14;
                            })
                            .text(function (d, i) {
                                if (i == scores[index].values.length - 1) return d;
                                if (scores[index].decorators[i] == 'HIGHER' || scores[index].decorators[i] == 'LOWER') {
                                    return d + "*"
                                }
                                return d;
                            })
                            .attr("text-anchor", "middle")
                            .attr("dominant-baseline", "Auto")
                            .attr("fill", "black")
                            .attr('font-size', '11px')
                            .attr('font-weight', '500')
                    }

                    g.append('text')
                        .attr('class', 'm5key')
                        .join("text")
                        .attr("text-anchor", "start")
                        .attr("dominant-baseline", "auto")
                        .attr("x", m5KeyXLocation)
                        .attr("y", function () {
                            var array = scores[4].values;
                            return yScale(array[array.length - 1]) - 60
                        })
                        .text('KEY')
                        .attr("fill", "black")
                        .attr('font-size', '11px')
                        .attr('font-weight', '700')
                    g.append('text')
                        .attr('class', 'm5key')
                        .join("text")
                        .attr("text-anchor", "start")
                        .attr("dominant-baseline", "auto")
                        .attr("x", m5KeyXLocation)
                        .attr("y", function () {
                            var array = scores[4].values;
                            return yScale(array[array.length - 1]) - 45
                        })
                        .text('Click on the percentile')
                        .attr("fill", "black")
                        .attr('font-size', '11px')
                        .attr('font-weight', '500')
                    g.append('text')
                        .attr('class', 'm5key')
                        .join("text")
                        .attr("text-anchor", "start")
                        .attr("dominant-baseline", "auto")
                        .attr("x", m5KeyXLocation)
                        .attr("y", function () {
                            var array = scores[4].values;
                            return yScale(array[array.length - 1]) - 30
                        })
                        .text('label to see data points')
                        .attr("fill", "black")
                        .attr('font-size', '11px')
                        .attr('font-weight', '500')
                    for (var index = 0; index < scores.length; index++) {
                        console.log(index)
                        g.append('text')
                            .attr('class', function (d, i) {
                                var classNames = ['p1', 'p2', 'p5', 'p7', 'p9']
                                return classNames[index] + ' button';
                            })
                            .attr("x", m5KeyXLocation + 24)
                            .attr("y", function (d) {
                                var array = scores[index].values
                                return yScale(array[array.length - 1]);
                            })
                            .text(function (d) {
                                var labels = { 'P1': '10th percentile', 'P2': '25th percentile', 'MN': 'Average score', 'P7': '75th percentile', 'P9': '90th percentile' }
                                return labels[scores[index].statType]
                            })
                            .attr("text-anchor", "start")
                            .attr("dominant-baseline", "middle")
                            .attr("fill", "black")
                            .attr('font-size', '11px')
                            .attr('font-weight', '500')
                    }

                    // $('svg.m5 text.score').hide();
                    // $('svg.m5 text.button').on('click', function () {
                    //     if ($(this).hasClass('p1')) { $('svg.m5 text.score.p1').toggle(); }
                    //     else if ($(this).hasClass('p2')) { $('svg.m5 text.score.p2').toggle(); }
                    //     else if ($(this).hasClass('p5')) { $('svg.m5 text.score.p5').toggle(); }
                    //     else if ($(this).hasClass('p7')) { $('svg.m5 text.score.p7').toggle(); }
                    //     else if ($(this).hasClass('p9')) { $('svg.m5 text.score.p9').toggle(); }
                    // })
                }

                //   remove() {
                //     var figure = d3.select(this.selector);
                //     figure.remove();
                //   }

                //----------------------
            },
                { deep: true });
        });

        return { svgRef };
    },
    methods: {
        sendData(data){
            console.log('horizontal data', data);
            //this.properties = data
        },
        emitInterface() {
            this.$emit("interface", {
                sendData: (data) => this.sendData(data),
            });
        }
    },
    
};
</script>
<style>
#container {
    display: block;
    height: 400px;
}
</style>