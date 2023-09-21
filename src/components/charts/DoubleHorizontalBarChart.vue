<template>
    <div id="container" ref="resizeRef">
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
                <svg id="right-chart" class="right-column" ref="svgRef">
                    <g></g>
                </svg>
            </div>
        </div>
        <p class="axis-title">Difference in average mathematics literacy scores</p>
    </div>
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
import useResizeObserver from "../../use/resizeObserver";

export default {
    name: "DoubleHorizontalBarChart",
    props: ["data"],
    setup(props) {
        const svgRef = ref(null);
        const { resizeRef, resizeState } = useResizeObserver();


        onMounted(() => {
            const svg = select(svgRef.value);



            // whenever any dependencies (like data, resizeState) change, call this!
            watch(() => {

                console.log('DOUBLE HORIZONTAL BAR props.data', props.data)

                const { width, height } = resizeState.dimensions;





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