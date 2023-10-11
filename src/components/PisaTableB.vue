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
                <td>{{ d.country }}</td>
                <td>{{ d.valValue1 }}</td>
                <td>{{ d.valValue2 }}</td>
                <td>{{ d.valValue3 }}</td>
                <td>{{ d.valValue4 }}</td>
                <td>{{ d.allstudents }}</td>
            </tr>
        </tbody>
    </table>
</template>
    
<script>
import { onMounted, watch } from "vue";

export default {
    name: "PisaTableB",
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
.invisible {
    /* visibility: hidden; */
    display: none;
}
.notinvisible {
    /* visibility: hidden; */
    display: block;
}
</style>