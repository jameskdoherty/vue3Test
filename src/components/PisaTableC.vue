<template>
    <table>
        <thead>
            <tr class="headers">
                <th v-for="head in headers">
                    {{ head }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(d, i) in data">
                <th>{{ d.statType }}</th>
                <td v-for="(value, idx) in d.values" >
                    {{ value }}<span v-if="d.decorators[idx] === 'HIGHER' || d.decorators[idx] === 'LOWER'">*</span>
                </td>
            </tr>
        </tbody>

    </table>
</template>
    
<script>
import { onMounted, watch } from "vue";

export default {
    name: "PisaTableC",
    props: ["data", "headers"],
    setup(props) {
        const tableData = props.data
        const pctvalues = props.data.values
        const stattype = props.data.statType

        onMounted(() => {


            // whenever any dependencies (like data, resizeState) change, call this!
            watch(() => {
                console.log('PISA Table 5 TableC props.data', props.data)
                console.log('PISA Table 5 TableC pctvalues', pctvalues)
                console.log('PISA Table 5 TableC stattype', stattype)

            },
                { deep: true });
        });
        return { tableData };
    },
    mounted() {
        console.log('PISA MOUNTED')
        // watch();
    }
};
</script>
<style scoped>
#container {
    display: block;
}

.invisible {
    /* visibility: hidden; */
    display: none;
}

.notinvisible {
    /* visibility: hidden; */
    display: block;
}

.main-content .table-classic table thead tr.headers th:first-child {
  text-align: left;
}
</style>