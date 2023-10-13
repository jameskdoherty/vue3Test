<template>
    <figure class="table-m8 table-classic"  :class="figureClassTable">
        <component :is="elcaptionfig" :figuretitle="figcaptionTableTitle" :figurebody="figcaptionBody"></component>
        <div id="chart-area" class="d-flex flex-wrap justify-center" tabindex="1"
            aria-label="Average scores on the PISA science literacy scale, by education system: 2022">
            <div class="table-classic__container">
                <component :is="eltable"></component>
            </div>
        </div>
        <component :is="elnote"></component>
    </figure>
</template>
<script>
import { MessageService } from '../../services/message-service';


export default {
    name: 'chart-table-notab',
    props: {
        eltable: {
            type: [String, Object],
            default: 'div'
        },
        elnote: {
            type: [String, Object],
            default: 'div'
        },
        elcaptionfig: {
            type: [String, Object],
            default: 'div'
        },
        figcaptionTableTitle: { type: String },
        figcaptionBody: { type: String },
        figureClassTable: { type: String },
    },

    data() {
        return {
            isActive: true,
            isHidden: false,
            // isTab1Active: true,
            // isTab2Active: false
        }
    },
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