import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Highcharts from 'highcharts'
import HighchartsMore from 'highcharts/highcharts-more'
import HighchartsVue from 'highcharts-vue'
import DumbbellModule from 'highcharts/modules/dumbbell'
import HC_brokenAxis from 'highcharts/modules/broken-axis';
import stockInit from 'highcharts/modules/stock'

import PrimeVue from 'primevue/config';
import "primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css"; /* Deprecated */
import "primeicons/primeicons.css";


import DataTable from 'primevue/datatable';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import Dropdown from 'primevue/dropdown';
import Paginator from 'primevue/paginator';
import Panel from 'primevue/panel';
import PanelMenu from 'primevue/panelmenu';
import Row from 'primevue/row';



stockInit(Highcharts);
HighchartsMore(Highcharts);
DumbbellModule(Highcharts);
HC_brokenAxis(Highcharts);


const app = createApp(App);

app.use(HighchartsVue);
app.use(router);
app.use(PrimeVue);
app.component('Button', Button);
app.component('DataTable', DataTable);
app.component('Card', Card);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('DataView', DataView);
app.component('DataViewLayoutOptions', DataViewLayoutOptions);
app.component('Dropdown', Dropdown);
app.component('Paginator', Paginator);
app.component('Panel', Panel);
app.component('PanelMenu', PanelMenu);
app.component('Row', Row);



app.mount('#app');

