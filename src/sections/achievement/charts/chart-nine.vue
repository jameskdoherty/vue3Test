<template>
  <div id="Chart-9">
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
import table9_data_math from '../../../assets/testdata/table9_data_math.json';
import table9_data_reading from '../../../assets/testdata/table9_data_reading.json';
import table9_data_science from '../../../assets/testdata/table9_data_science.json';

export default {
  name: 'Chart-9',
  data() {
    return {
      currentView: 'chart9',
      data: [],
      categories: ['75 percent or more', '50 to 74.9 percent', '25 to 49.9 percent', '10 to 24.9 percent', 'Less than 10 percent'],
      title: 'Percentage of students enrolled in schools eligible for FRPL',
      titlex: 155,
      titley: -50,
      average: 0,
      whichSection: this.$route.path,
    }
  },
  components: {
    chart9: HighChartLollipop,
  },
  created() {

    console.log('chart9', this.whichSection)

    if (this.whichSection.includes('/mathematics')) {
      this.data = [
        [0, 415.1066051, 464.8880, 'down', '*', ''],
        [1, 453.5223939, 464.8880, 'down', '<span>&nbsp;</span>', ''],
        [2, 464.8880, 478.4016012, 'up', '*', ''],
        [3, 464.8880, 508.4710712, 'up', '*', ''],
        [4, 464.8880, 518.8458469, 'up', '*', '']]
        this.average = Math.round(this.data[0][2])

    } else if (this.whichSection.includes('/reading')) {
      this.data = [
        [0, 455.8386319, 503.9375, 'down', '*', ''],
        [1, 494.2698964, 503.9375, 'down', '<span>&nbsp;</span>', ''],
        [2, 503.9375, 515.9073784, 'up', '<span>&nbsp;</span>', ''],
        [3, 503.9375, 547.4335083, 'up', '*', ''],
        [4, 503.9375, 562.0374384, 'up', '*', '']]
        this.average = Math.round(this.data[0][2])

    } else if (this.whichSection.includes('/science')) {
      this.data = [
        [0, 446.4127, 499.4140, 'down', '*', ''],
        [1, 488.5467, 499.4140, 'down', '<span>&nbsp;</span>', ''],
        [2, 499.4140, 515.0139, 'up', '*', ''],
        [3, 499.4140, 544.4756, 'up', '*', ''],
        [4, 499.4140, 553.4318, 'up', '*', '']]
        this.average = Math.round(this.data[0][2])

    }



    
    //const table9data = ref(table9_data_reading.result)
    // this.data = table9data.value
  },
}
</script>
  
<style scoped></style>
