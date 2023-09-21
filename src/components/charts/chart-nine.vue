<template>
    <div id="Chart-9">
        <div>chart nine here</div>
      <component :is="currentView"></component>
    </div>
      
  </template>
  
  <script>
  import HighChartLollipop from './high-chart-lollipop.vue'
  
  export default {
      name: 'Chart-9',
      data () {
      return {
        currentView: 'chart9'
      }
    },
    components: {
      chart9: HighChartLollipop,
    }
  }
  </script>
  
  <style scoped>

</style>
