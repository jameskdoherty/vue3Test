<template>
  <div id="container" ref="resizeRef">
    <svg style="background:none" ref="svgRef">
      <g class="x-axis" />
      <g class="y-axis" />
    </svg>
  </div>
</template>
  
<script>
import { onMounted, ref, watchEffect } from "vue";
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
import useResizeObserver from "../../use/resizeObserver";

export default {
  name: "ResponsiveBarChart",
  props: ["data", "groups", "bardata", "subgroups"],
  setup(props) {
    const svgRef = ref(null);
    const { resizeRef, resizeState } = useResizeObserver();


    onMounted(() => {
      const svg = select(svgRef.value);
      const g = svg.append("g").attr("transform", "translate(" + 0 + "," + 0 + ")");


      // whenever any dependencies (like data, resizeState) change, call this!
      watchEffect(() => {
        const { width, height } = resizeState.dimensions;

        //console.log(props.data);
        // scales: map index / data values to pixel values on x-axis / y-axis
        // const xScale = scaleBand()
        //   .domain([0, props.data.length - 1])
        //   .range([0, width]);

        const yAxisArray = [250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750];



        const xScale = scaleBand()
          .domain(props.groups)
          .range([0, width])
          .padding(0.8);

        const yScale = scaleLinear()
          .range([height, 0])
          .domain([250, 750]);

        // Subgroup
        const xSubgroup = scaleBand()
          .domain(props.subgroups)
          .range([0, xScale.bandwidth() + 100])
          .padding([0.08]);

        const color = scaleOrdinal()
          .domain(props.subgroups)
          .range(['#00843d', '#fbb03b']);


        svg.append("g").selectAll("g")
          .data(props.data)
          .enter()
          .append("g")
          .attr("transform", function (d) {
            return "translate(" + (xScale(d.group) - 79) + ",0)";
          })
          .selectAll("rect")
          .data(function (d) { return props.subgroups.map(function (key) { return { key: key, value: d[key] }; }); })
          .enter().append("rect")
          .attr("x", function (d) { return xSubgroup(d.key) + 33; })
          .attr("y", function (d) { return yScale(d.value); })
          .attr("width", xSubgroup.bandwidth())
          .attr("height", function (d) { return height - yScale(d.value); })
          .attr("fill", function (d) { return color(d.key); });

        // y-axis stroke
        g.append('line')
          .attr('class', 'leftAxis')
          .attr("x1", 0)
          .attr("x2", 0)
          .attr("y1", yScale(700))
          .attr("y2", yScale(300))
          .attr("stroke", "#ececec")
          .attr('stroke-width', '1px')

        // Y Axis Main Label
        g.append('text')
          .attr('class', 'left-axis-key')
          .attr("text-anchor", "start")
          .attr("dominant-baseline", "auto")
          .attr("x", -30)
          .attr("y", function () {
            return yScale(yAxisArray[yAxisArray.length - 1]) - 25
          })
          .text('Average score')
          .attr("fill", "black")
          .attr('font-size', '12px')
          .attr('font-weight', '700')

        // Re-Add Y values
        g.selectAll('text.left-axis-labels')
          .data(yAxisArray)
          .attr('class', 'left-axis-labels')
          .join("text")
          .attr("text-anchor", "end")
          .attr("dominant-baseline", "middle")
          .attr("x", function () { return -7; })
          .attr("y", function (d) { return yScale(d) })
          .text(function (d, i, array) {
            if (i == 0) return 0;
            else if (i == array.length - 1) return 1000;
            else return d
          })
          .attr("fill", "black")
          .attr('font-size', '11px')
          .attr('font-weight', '500')

        // Add the break lines on Y Axis
        g.selectAll('line.grid')
          .data(yAxisArray)
          .attr('class', 'grid')
          .join("line")
          .attr("x1", function () { return 0; })
          .attr("y1", function (d) { return yScale(d); })
          .attr("x2", function () { return width; })
          .attr("y2", function (d) { return yScale(d); })
          .attr("stroke", "#ececec")
          .attr('stroke-width', '1px')
        var breakGap = (yScale(0) - yScale(50)) * .2;
        var breakLineHeight = (yScale(0) - yScale(50)) * .35
        g.selectAll('line.left-axis-break')
          // .data([{x:0, y:yScale(50) + yScale(50) * (1 - breakGapPercentage) / 2}, {x:this.min + 66.7, y:0}, {x:this.max - 67, y:0}, {x:this.max - 33.3, y:0}, {x:this.min + 33, y:chartHeight}, {x:this.min + 66.7, y:chartHeight}, {x:this.max - 67, y:chartHeight}, {x:this.max - 33.3, y:chartHeight}])
          .data([{ x: 0, y: yScale(300) + breakLineHeight }, { x: 0, y: yScale(300) + breakLineHeight + breakGap }, { x: 0, y: yScale(750) + breakLineHeight }, { x: 0, y: yScale(750) + breakLineHeight + breakGap }])
          .join("line")
          .attr("x1", function (d) { return d.x - 8; })
          .attr("y1", function (d) { return d.y + 6; })
          .attr("x2", function (d) { return d.x + 8; })
          .attr("y2", function (d) { return d.y - 6; })
          .attr("stroke", "#ececec")
          .attr('stroke-width', '1px')
        g.selectAll('line.left-axis-break-connector')
          .data([{ x: 0, y: yScale(300) + breakLineHeight }, { x: 0, y: yScale(250) }, { x: 0, y: yScale(750) + breakLineHeight }, { x: 0, y: yScale(700) }])
          .join("line")
          .attr("y1", function (d) { return d.y; })
          .attr("x1", function (d) { return d.x; })
          .attr("y2", function (d) { return d.y - breakLineHeight })
          .attr("x2", function (d) { return d.x; })
          .attr("stroke", "#ececec")
          .attr('stroke-width', '1px')

        // Add the hovering values over bars -- OECD
        svg.selectAll(".text")
          .data(props.data)
          .enter().append("svg:text")
          .attr("x", function (d) { return xScale(d.group) - 5; })
          .attr("y", function (d) { return yScale(d.oecd + 5); })
          .attr("font-size", "12px")
          .attr("text-anchor", "middle")
          .attr("fill", "#000")
          .text(function (d) { return (d.significant == true ? d.oecd + "*" : d.oecd) });

        svg.selectAll(".text")
          .data(props.data)
          .enter().append("svg:text")
          .attr("x", function (d) { return xScale(d.group) - 5 + xSubgroup.bandwidth(); })
          .attr("y", function (d) { return yScale(d.unitedstates + 5); })
          .attr("fill", "#000")
          .attr("font-size", "12px")
          .attr("text-anchor", "middle")
          .attr("font-weight", "bold")
          .text(function (d) { return d.unitedstates });

        // line generator: D3 method to transform an array of values to data points ("d") for a path element
        // const lineGen = line()
        //   .curve(curveBasis)
        //   .x((value, index) => xScale(index))
        //   .y((value) => yScale(value));

        // render path element with D3's General Update Pattern
        // svg
        //   .selectAll(".line")
        //   .data([props.data]) // pass entire data array
        //   .join("path")
        //   .attr("class", "line")
        //   .attr("stroke", "green")
        //   .attr("d", lineGen);

        // render axes with help of scales
        const xAxis = axisBottom(xScale).tickSize(1).tickPadding(10);
        svg
          .select(".x-axis")
          .style("transform", `translateY(${height}px)`) // position on the bottom
          .call(xAxis);

        //const yAxis = axisLeft(yScale);
        //svg.select(".y-axis").call(yAxis);



      });
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