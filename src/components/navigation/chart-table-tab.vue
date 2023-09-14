<template>
    <p class="display-as for-m8"><strong>Display as 8:</strong>
        <span @click="showHide('tab1')" :class="{ isActive: isActive }" class="graph-view-button last-open"><i
                class="fa-solid fa-chart-simple" aria-hidden="true"></i>Graph</span> | <span @click="showHide('tab2')"
            :class="{ isActive: !isActive }" class="table-view-button "><i class="fa-solid fa-table"
                aria-hidden="true"></i>Table</span>
    </p>
    <figure class="chart chart-8" :class="{ invisible: isHidden }">
        <component :is="el4"></component>
        <component :is="el"></component>
        <component :is="el3"></component>
    </figure>
    <figure class="table-classic table-m8" :class="{ invisible: !isHidden }">
        <component :is="el4"></component>
        <div class="table-classic__container">
            <component :is="el2"></component>
        </div>
        <component :is="el3"></component>
    </figure>
</template>
<script>
import { MessageService } from '../../services/message-service';


export default {
    name: 'chart-table-tab',
    props: {
        el: {
            type: [String, Object],
            default: 'div'
        },
        el2: {
            type: [String, Object],
            default: 'div'
        },
        el3: {
            type: [String, Object],
            default: 'div'
        },
        el4: {
            type: [String, Object],
            default: 'div'
        }
    },

    data() {
        return {
            isActive: true,
            isHidden: false,
            // isTab1Active: true,
            // isTab2Active: false
        }
    },
    methods: {
        showHide(tab) {
            console.log('show', tab)
            this.isHidden = !this.isHidden
            if (tab == 'tab1') {
                this.isActive = true
            } else {
                this.isActive = false
            }
            //MessageService.showHide(tab)
        }

    }
}
</script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.isActive {
    background-color: grey;

}

.invisible {
    /* visibility: hidden; */
    display: none;
}
</style>