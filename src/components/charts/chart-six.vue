<template>
    <div id="Chart-6">
      <h1>Using Vue 3 (Composition API) with D3</h1>
      <double-horizontal-bar-chart :data="data" />
    
    </div>
  </template>
  
  <script>
  import DoubleHorizontalBarChart from "./DoubleHorizontalBarChart.vue"
  
  export default {
    name: "Chart-Six",
    components: {
      DoubleHorizontalBarChart,
    },
    data() {

      
      return {
        data: [10, 40, 15, 25, 50],
      };
    },
    methods: {
      addData() {
        // add random value from 0 to 50 to array
        this.data = [...this.data, Math.round(Math.random() * 50)];
      },
      filterData() {
        this.data = this.data.filter((v) => v <= 35);
      },
    },
  };
  </script>
  
  <style>
 
  </style>