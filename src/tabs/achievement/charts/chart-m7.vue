<template>
    <div id="Chart-M7">
      <component :is="currentView"></component>
    </div>
      
  </template>
  
  <script>
  import HighChartLollipop from '../../../components/high-chart-lollipop.vue'
  
  export default {
      name: 'Chart-M7',
      data () {
      return {
        currentView: 'chart7'
      }
    },
    components: {
      chart7: HighChartLollipop,
    }
  }
  </script>
  
  <style scoped>

</style>
