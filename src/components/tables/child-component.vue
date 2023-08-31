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



export default {
    name: 'ChildComponent',
    mounted() {
        // Emits on mount
        this.emitInterface();
    },
    data() {
        return {
            headers: ['race', 'mnScore', 'gap', 'sig'],
            properties: [
                { 'race': 'U.S. average', 'mnScore': 478, 'gap': null, 'sig': 'NA' },
                { 'race': 'White', 'mnScore': 503, 'gap': 25, 'sig': 'HIGHER' },
                { 'race': 'Black', 'mnScore': 419, 'gap': -59, 'sig': 'LOWER' },
                { 'race': 'Hispanic', 'mnScore': 452, 'gap': -27, 'sig': 'LOWER' },
                { 'race': 'Asian', 'mnScore': 539, 'gap': 61, 'sig': 'HIGHER' },
                { 'race': 'Two or More Races', 'mnScore': 474, 'gap': -4, 'sig': 'LOWER' }
            ],
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

            console.log('head', head)
            console.log('type to sort by', type)
            // here is the magic
            return this.properties.sort(this.sortMethods(type, head, direction))
        }
    },
    methods: {

        sort(head) {
            this.sortBy = head
            this.sortDirection *= -1
        },
        sortMethods(type, head, direction) {
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

        setKeyToSortBy(key) {

            this.keyToSortBy = 'gap';
            this.sortDirection = -1;
            this.isOECDOnly = true;
            this.isOECDFirst = true;

            if (key == this.keyToSortBy) {
                this.sortDirection = -this.sortDirection;
                console.log(this.sortDirection);
                return this.sortDirection
            } else {
                this.keyToSortBy = key;
                console.log('child', this.keyToSortBy)
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
                //sortedProperties: () => this.sortedProperties()
            });
        }

    }




}
</script>

<style></style>