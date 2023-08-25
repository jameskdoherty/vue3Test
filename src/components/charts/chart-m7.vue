<template>
    <div id="Chart-M7">
      <component :is="currentView"></component>
    </div>
      
  </template>
  
  <script>
  import HighChartLollipop from './high-chart-lollipop.vue'
  
  export default {
      name: 'Chart-M7',
      data () {
      return {
        currentView: 'chart'
      }
    },
    components: {
      chart: HighChartLollipop,
    }
  }
  </script>
  
  <style scoped>

</style>
