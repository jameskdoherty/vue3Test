<template>
    <p class="display-as for-m8"><strong>Display as :</strong>
        <span @click="showHide('tab1')" :class="{ active: isActive }" class="graph-view-button last-open"><i
                class="fa-solid fa-chart-simple" aria-hidden="true"></i>Graph</span> | <span @click="showHide('tab2')"
            :class="{ active: !isActive }" class="table-view-button "><i class="fa-solid fa-table"
                aria-hidden="true"></i>Table</span>
    </p>
    <figure id="chart-area" class="chart chart-8" :class="{ invisible: isHidden }">
        <component :is="elcaptionfig" :figuretitle="figcaptionTitle" :figurebody="figcaptionBody"></component>
        <component :is="elchart"></component>
        <component :is="elnote"></component>
    </figure>
    <figure class="table-classic" :class="{ invisible: !isHidden }">
        <component :is="elcaptionfig" :figuretitle="figcaptionTableTitle" :figurebody="figcaptionBody"></component>
        
            <component :is="eltable"></component>
      
        <component :is="elnotefortable"></component>
    </figure>
</template>
<script>
import { MessageService } from '../../services/message-service';


export default {
    name: 'chart-table-tab',
    props: {
        elchart: {
            type: [String, Object],
            default: 'div'
        },
        eltable: {
            type: [String, Object],
            default: 'div'
        },
        elnote: {
            type: [String, Object],
            default: 'div'
        },
        elnotefortable: {
            type: [String, Object],
            default: 'div'
        },
        elcaptionfig: {
            type: [String, Object],
            default: 'div'
        },
        figcaptionTitle: { type: String },
        figcaptionTableTitle: { type: String },
        figcaptionBody: { type: String },
        
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