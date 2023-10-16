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
                <td>{{ d.category }}</td>
                <td>{{ d.mnScore }}</td>
                <td>{{ d.gap }}</td>
            </tr>
        </tbody>
       
    </table>
</template>
    
<script>
import { onMounted, watch } from "vue";

export default {
    name: "PisaTable9",
    props: ["data", "headers",],
    setup(props) {
        const tableData = props.data
       

        onMounted(() => {

           
            // whenever any dependencies (like data, resizeState) change, call this!
            watch(() => {
                console.log('PISA Table9 props.data', props.data)
               
            },
                { deep: true });
        });
        return { tableData };
    },
    mounted() {
        // watch();
    }
};
</script>
<style scoped>
#container {
    display: block;
}
</style>