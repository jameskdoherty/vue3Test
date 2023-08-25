<template>
  <div id="Chart-M7-Thing">

    <div class="button-grp">
      <button @click="select('chart')" :class="{btnActive: selected === 'chart'}">Chart</button>
    </div>
    <keep-alive>
      <component :is="currentView"></component>
    </keep-alive>
  </div>
    
</template>

<script>
import HighChartSplineType from './high-chart-spline-type.vue'

export default {
    name: 'Chart-M7-Thing',
    data () {
    return {
      selected: 'chart',
      currentView: 'chart'
    }
  },
  components: {
    chart: HighChartSplineType,
  },
  methods: {
    activate (elem) {
      this.selected = elem
    },
    handler () {
      var args = arguments
      for (var arg of args) {
        if (arg instanceof Function) {
          arg()
        }
      }
    },
    select (elem) {
      this.currentView = elem
      this.activate(elem)
    }
  }
}
</script>



<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.row > * {
  padding: 0 20px;
}
.button-grp {
  margin: 20px 0;
}
button {
  padding: 10px 20px;
  outline: none;
  background: #828ea0;
  color: #fff;
  font-size: 16px;
  margin: 5px;
  border: 0px;
}
button:hover {
  background: #a7aeb8;
  transition: background 0.2s;
}
button:active {
  color: rgb(117, 117, 117);
}
.btnActive {
  color: #6fcd98
}
</style>