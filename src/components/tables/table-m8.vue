<template><div></div></template>

<script>
import { DataService } from '../../services/api/data-service';
import M8chart_data from '../../assets/testdata/m8chart_data.json';
// import FigureControl from './FigureControl.js';
// import PisaTable from './PisaTable.js'
// import PisaTable2 from './PisaTable2.js'
// import PisaTable3 from './PisaTable3.js'


export default {
    name: 'Table-M8',
    components: {
    },
    data() {
        return {
            data: [{ 'country': 'OECD average' }, { 'country': 'United States' }],
            rawData: [],
            figureControls: {}


        };
    },
    created() {


        this.subscription = DataService.getChartM8Data().subscribe(
            allResults => {
                if (allResults.response) {
                    console.log('allresults', allResults.response);
                    this.rawData.push(allResults);
                } else {
                    this.rawData = M8chart_data;
                   // console.log('table8', this.rawData)


                    for (var i = 0; i < this.rawData.length; i++) {
                        var group = this.rawData[i].group
                        this.data[0][group] = this.rawData[i].oecd;
                        if (i < 3) {
                            this.data[0][group] += '*';
                        }
                        this.data[1][group] = this.rawData[i].unitedstates;
                    }

                    this.data[0]['All students'] = '490*';
                    this.data[1]['All students'] = '505';

                    var mapFunction = function (element) {
                        console.log('table 8',element)
                        var ret = {}
                        ret.headers = [element.country]
                        ret.values = [element['Bottom quarter'], element['Second quarter'], element['Third quarter'], element['Top quarter'], element['All students']];
                        return ret;
                    }

                    // console.log('mapFunction',mapFunction)



                   // figureControls['tableM8'] = new FigureControl(data, mapFunction, [new PisaTable3('table.tblm8')]);
                    // figureControls['tableM8'].sortFilterStatus.keyToSortBy = '';
                    // figureControls['tableM8'].sortFilterStatus.isOECDFirst = false;
                    // figureControls['tableM8'].sortFilterStatus.isOECDOnly = false;
                    // figureControls['tableM8'].updateFigures();
                    //console.log('figureControls',figureControls)

                }


            })





    },
    beforeUnmount() {
        this.subscription.unsubscribe();
    }


}
</script>

<style></style>