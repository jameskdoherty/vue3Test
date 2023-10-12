<template>
  <div id="Chart-M7">
    <div class="lolli__legend">
      <ul class="lolli__legend__row">
        <li class="lolli__legend__row__item circle">U.S. average score for each
          race/ethnicity category</li>
        <li class="lolli__legend__row__item rect">Difference in average score between
          each race/ethnicity<br>category and the U.S. average</li>
      </ul>
    </div>
    <component :is="currentView" :data="data" :categories="categories" :title="title" :titlex="titlex" :titley="titley"
      :average="average" :whichSection="whichSection"></component>
  </div>
</template>
  
<script>
import { ref } from 'vue'
import HighChartLollipop from '../../../components/high-chart-lollipop.vue'
import table7_data_math from '../../../assets/testdata/table7_data_math.json';
import table7_data_reading from '../../../assets/testdata/table7_data_reading.json';
import table7_data_science from '../../../assets/testdata/table7_data_science.json';

export default {
  name: 'Chart-M7',
  data() {
    return {
      currentView: 'chart7',
      data: [],
      categories: ['White', 'Black', 'Hispanic', 'Asian', 'Two or More Races'],
      title: 'Race/ethnicity',
      titlex: 115,
      titley: -23,
      average: 0,
      whichSection: this.$route.path,
    }
  },
  components: {
    chart7: HighChartLollipop,
  },
  created() {

    if (this.whichSection.includes('/mathematics')) {
      this.data = [
        [0, 464.8880, 497.6032, 'up', '*', ''],
        [1, 412.4189, 464.8880, 'down', '*', ''],
        [2, 438.6817, 464.8880, 'down', '*', ''],
        [3, 464.8880, 543.3675, 'up', '*', ''],
        [4, 464.8880, 476.0879, 'up', '<span>&nbsp;</span>', '']]
      this.average = Math.round(this.data[0][1])

    } else if (this.whichSection.includes('/reading')) {
      this.data = [
        [0, 503.9375, 536.5457, 'up', '*', ''],
        [1, 458.5258, 503.9375, 'down', '*', ''],
        [2, 481.1454, 503.9375, 'down', '*', ''],
        [3, 503.9375, 579.40, 'up', '*', ''],
        [4, 503.9375, 511.8053, 'up', '<span>&nbsp;</span><span>&nbsp;</span>', '']]
      this.average = Math.round(this.data[0][1])

    } else if (this.whichSection.includes('/science')) {
      this.data = [
        [0, 499.4140, 537.1629, 'up', '*', ''],
        [1, 444.8564, 499.4140, 'down', '*', ''],
        [2, 471.2232, 499.4140, 'down', '*', ''],
        [3, 499.4140, 578.1116, 'up', '*', ''],
        [4, 499.4140, 513.4390, 'up', '*', '']]
      this.average = Math.round(this.data[0][1])

    }

    //const table7data = ref(table7_data_math.result)
    //this.data = table7data.value

  },
}
</script>
  
<style scoped></style>
