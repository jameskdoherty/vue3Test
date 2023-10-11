<template>
  <!-- <div id="container" >
   
    <svg id="chart" style="background:none" :view-box.camel="viewBox" viewBox="viewbox" >
      <g class="x-axis" />
      <g class="y-axis" />
      
    </svg>
  </div> -->
  <!-- <img :src="image" /> -->
  <div class="scaling-svg-container" :style="{ paddingBottom: bottom + '%' }">
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

// const { show } = toRefs(props)

export default {
  name: "ResponsiveBarChart",
  props: ["data", "groups", "bardata", "subgroups", "height", "width", "viewbox", "image", "bottom"],
  setup(props) {
    const svgRef = ref(null);
    const height = props.height;
    const width = props.width;
    const image = props.image;
    const padding = props.bottom

    //const { resizeRef, resizeState } = useResizeObserver();


    onMounted(() => {
      const svg = select(svgRef.value);
      const g = svg.append("g").attr("transform", "translate(" + 0 + "," + 0 + ")");

      // console.log('ehat is height',height)

      // whenever any dependencies (like data, resizeState) change, call this!
      watch(() => {


        console.log('RESPONSIVE BAR props.data', props.data)
        console.log('RESPONSIVE BAR props.imagesrc', image)
        console.log('RESPONSIVE BAR props.paddng', padding)

        // const { width, height } = resizeState.dimensions;

        // const width = 900;
        // const height = 400;

        svg.select(".bars").remove();
        svg.select(".leftAxis").remove();
        svg.select(".left-axis-key").remove();
        svg.selectAll(".yAxisLabels").remove();
        svg.selectAll(".hovertext").remove();
        svg.selectAll("line").remove();
        svg.selectAll(".tick").remove();

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


        svg.append("g")
          .attr('class', 'bars')
          .selectAll("g")
          .data(props.data)
          .enter()
          .append("g")
          .attr("transform", function (d) {
            return "translate(" + (xScale(d.group) - 79) + ",0)";
          })
          .selectAll("rect")
          .data(function (d) { return props.subgroups.map(function (key) { return { key: key, value: d[key] }; }); })
          .enter().append("rect")
          .attr("x", function (d) { console.log(xSubgroup.bandwidth()); return xSubgroup(d.key) + 33; })
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
          .attr("x", -25)
          .attr("y", function () {
            return yScale(yAxisArray[yAxisArray.length - 1] + 30)
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
          .attr("x", function () { return -5; })
          .attr("y", function (d) { return yScale(d) })
          .text(function (d, i, array) {
            if (i == 0) return 0;
            else if (i == array.length - 1) return 1000;
            else return d
          })
          .attr('class', 'yAxisLabels')
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
          .attr('class', 'hovertext')
          .attr("x", function (d) { return xScale(d.group) - 5; })
          .attr("y", function (d) { return yScale(d.oecd + 5); })
          .attr("font-size", "12px")
          .attr("text-anchor", "middle")
          .attr("fill", "#000")
          .text(function (d) { return (d.significant == true ? d.oecd + "*" : d.oecd) });

        svg.selectAll(".text")
          .data(props.data)
          .enter().append("svg:text")
          .attr('class', 'hovertext')
          .attr("x", function (d) { return xScale(d.group) - 5 + xSubgroup.bandwidth(); })
          .attr("y", function (d) { return yScale(d.unitedstates + 5); })
          .attr("fill", "#000")
          .attr("font-size", "12px")
          .attr("text-anchor", "middle")
          .attr("font-weight", "bold")
          .text(function (d) { return d.unitedstates });

        // render axes with help of scales
        const xAxis = axisBottom(xScale).tickSize(1).tickPadding(10);
        svg
          .select(".x-axis")
          .style("transform", `translateY(${height}px)`) // position on the bottom
          .call(xAxis);

      },
        { deep: true });
    });

    return { svgRef };
  },
};
</script>
<style>
#container {
  display: block;
  height: 400px;
}

.scaling-svg-container {
  position: relative;
  height: 0;
  width: 100%;
  padding: 0;
  padding-bottom: 100%;
  /* override this inline for aspect ratio other than square */
}

.scaling-svg {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}
</style>