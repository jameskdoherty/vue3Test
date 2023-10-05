<template>
  <div class="chartElem">
    <div class="row">
      <highcharts class="chart" :options="chartOptions" ></highcharts>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

      




      title: '',
      numNum: Number,
      durationOptions: [0, 500, 1000, 2000],
      points: [10, 0, 8, 2, 6, 4, 5, 5],
      chartType: 'Spline',
      seriesColor: '#6fcd98',
      colorInputIsSupported: null,
      animationDuration: 1000,
      updateArgs: [true, true, {duration: 1000}],
      chartOptions: {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'Average score',
          style: {
            color: '#000000',
            fontSize: "14px",
            fontWeight: '700'
          }
        },
        labels: {
          style: {
            color: "#000000",
            fontSize: "12px",
            fontWeight: 500
          },
          formatter: function () {
            if (this.value == 250) {
              return 0
            }
            if (this.value == 650) {
              return 1000
            }
            return this.value
          }
        },
        series: [{
          data: [10, 0, 8, 2, 6, 4, 5, 5],
          color: '#6fcd98'
        }]
      }
    }
  },
  
}
</script>

<style scoped>

</style>