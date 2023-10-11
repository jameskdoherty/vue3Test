<template>
    <table>
        <thead>
            <tr>
                <th v-for="head in headers">
                    {{ head }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="d in data">
                <td>{{ d.race }}</td>
                <td>{{ d.averageScore }}</td>
                <td>{{ d.scoreDifferenceFromUSAvg }}</td>
            </tr>
        </tbody>
       
    </table>
</template>
    
<script>
import { onMounted, watch } from "vue";

export default {
    name: "PisaTableA",
    props: ["data", "headers"],
    setup(props) {
        const tableData = props.data
       
        onMounted(() => {

            // whenever any dependencies (like data, resizeState) change, call this!
            watch(() => {
                console.log('PISA props.data', props.data)
               
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

</style>