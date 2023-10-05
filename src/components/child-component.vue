<template>
    <div>
        <p>I was called {{ count }} times.</p>
    </div>

    <table>
        <thead>
            <tr>
                <th v-for="head in headers" @click="sort(head)">
                    {{ head }}
                </th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="(data, i) in sortedProperties" :key="data.id">
                <td v-for="(head, idx) in headers" :key="head.id">
                    {{ data[head] }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>

import { PisaService } from './misc/PisaService';
// import M7StaticTotal from '../../assets/testdata/M7StaticTotal.json';

export default {
    name: 'ChildComponent',
    created() {

        // const table8data = ref(table8_data.result)
        // console.log('child component table8 data',table8data.value)
       
        // this.properties = table8data

    //    table8data = M7StaticTotal.result
    //    console.log('child component table8 data',table8data)

    },
    mounted() {
        PisaService.clearTable();


        // Emits on mount
        this.emitInterface();
    },
    data() {
        return {
            headers: [],
            properties: [],
            data: [],
            rawData: [],
            figureControls: {},
            count: 0,
            sortDirection: 1,
            sortBy: 'name',
            propComparator: 0

        };
    },
    computed: {
        sortedProperties() {

            const type = (this.sortBy === 'race' || this.sortBy === 'sig') ? 'String' : 'Number' 
            const direction = this.sortDirection
            const head = this.sortBy
            // here is the magic
            return this.properties.sort(this.sortMethods(type, head, direction))
        }
    },
    methods: {

        sort(head) {
            console.log(head)
            this.sortBy = head
            this.sortDirection *= -1
        },
        sortMethods(type, head, direction) {
            console.log(head)
            switch (type) {
                case 'String': {
                    return direction === 1 ?
                        (a, b) => b[head] > a[head] ? -1 : a[head] > b[head] ? 1 : 0 :
                        (a, b) => a[head] > b[head] ? -1 : b[head] > a[head] ? 1 : 0
                }
                case 'Number': {
                    return direction === 1 ?
                        (a, b) => Number(b[head]) - Number(a[head]) :
                        (a, b) => Number(a[head]) - Number(b[head])
                }
            }
        },

        addCount() {
            this.count++;
        },

        subtractCount() {
            this.count--;
        },

        notCallable() {
            this.count--;
        },

        addData(data){
            console.log('child data', data);
            this.properties = data
        },

        addHeaders(headers){
            console.log('child headers',headers)
            this.headers = headers
        },

        setKeyToSortBy(key) {

            this.keyToSortBy = 'gap';
            this.sortDirection = -1;
            this.isOECDOnly = true;
            this.isOECDFirst = true;

            if (key == this.keyToSortBy) {
                this.sortDirection = -this.sortDirection;
                return this.sortDirection
            } else {
                this.keyToSortBy = key;
                this.sortDirection = (this.keyToSortBy == 'country') ? 1 : -1
            }

           

        },

        propComparator(propName, direction) {
            return function (a, b) {
                if (direction == -1) {
                    return a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? 1 : -1
                }
                return a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1
            }
        },

        updateFigures() {

        },
        getSortedFilteredData() {



        },

        /**/
        /*
        this.propComparator = (propName, direction) => (a, b) => {
            if (direction == -1) return a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? 1 : -1
            return a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1
        }
        */
        /**/

        /**
         * Emitting an interface with callable methods from outside
         */
        emitInterface() {
            this.$emit("interface", {
                addCount: () => this.addCount(),
                subtractCount: () => this.subtractCount(),
                setKeyToSortBy: (key) => this.setKeyToSortBy(key),
                sortedProperties: () => this.sortedProperties(),
                addData: (data) => this.addData(data),
                addHeaders: (headers) => this.addHeaders(headers)
            });
        }

    }




}
</script>

<style></style>