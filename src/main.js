import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Highcharts from 'highcharts'
import HighchartsMore from 'highcharts/highcharts-more'
import HighchartsVue from 'highcharts-vue'
import DumbbellModule from 'highcharts/modules/dumbbell'
import stockInit from 'highcharts/modules/stock'


stockInit(Highcharts);
HighchartsMore(Highcharts);
DumbbellModule(Highcharts);

createApp(App).use(HighchartsVue).use(router).mount('#app')