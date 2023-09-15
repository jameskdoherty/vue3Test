<template>
    <!-- start accoridion content -->

    <div class="accordion-panel">
        <div class="panel" id="panel-s1-m1">
            <input id="mat-s1-1" class="for-panel" type="checkbox" name="panels" checked="checked">
            <label class="item-id" for="mat-s1-1">
                <span class="key-feature">How does the performance of U.S. 15-year-olds in {{this.currentSection}} compare
                    internationally?</span>
            </label>
            <div class="panel-content">
                <p>Voluptatem eum eaque amet illo delectus enim odio consectetur, alias incidunt? Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Quidem blanditiis maiores repudiandae assumenda veniam. Impedit autem
                    rerum nostrum amet ad numquam. Deserunt autem, ipsam sed veniam alias beatae a eveniet?</p>
                <ul>
                    <li>libero facilis nulla, voluptatum assumenda magni sit cumque modi. </li>
                    <li>sit amet consectetur adipisicing elit. Numquam ratione minima</li>
                    <li>molestiae error perferendis minus tempore voluptate quaerat mollitia</li>
                    <li>Laboriosam omnis architecto illum a quos itaque veniam autem, nam</li>
                </ul>
                <!-- Figure/Table Component 1 -->

                <ChartTableNotab v-if="this.whichSection == '/mathematics/international-comparisons'"
                        :eltable="DynamicNotesOne" :elnote="DynamicNotesOne"
                        :elcaptionfig="DynamicFigCaption" figcaptionTableTitle="Table M1" figcaptionBody="mathematics" figureClassTable="table-1" />
                    <ChartTableNotab v-if="this.whichSection == '/science/international-comparisons'" :eltable="DynamicChartTablePlaceholder"
                        :elnote="DynamicNotesOne" :elcaptionfig="DynamicFigCaption"
                        figcaptionTableTitle="Table S1" figcaptionBody="scientific" figureClassTable="table-1" />
                    <ChartTableNotab v-if="this.whichSection == '/reading/international-comparisons'" :eltable="DynamicChartTablePlaceholder"
                        :elnote="DynamicNotesOne" :elcaptionfig="DynamicFigCaption"
                        figcaptionTableTitle="Table R1" figcaptionBody="reading" figureClassTable="table-1" />
            </div>
        </div>
        <div class="panel" id="panel-s1-m2">
            <input id="mat-s1-2" class="for-panel" type="checkbox" name="panels">
            <label class="item-id" for="mat-s1-2">
                <span class="key-feature">What is the percentage of 15-year-olds reaching the PISA proficiency level in
                    {{ this.currentSection }}?</span>
            </label>
            <div class="panel-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, <a href="#">amet
                        consectetur adipisicing elit unde doloribus</a> consequatur recusandae, ipsa eius sunt eveniet
                    veniam facilis molestiae asperiores architecto alias accusantium eos est nemo quasi deserunt, iste ea.
                </p>
                <p><strong>Porro nemo molestias ipsa sunt eveniet veniam facilis molestiae</strong></p>
                <ul>
                    <li>libero facilis nulla, voluptatum assumenda magni sit cumque modi. </li>
                    <li>sit amet consectetur adipisicing elit. Numquam ratione minima</li>
                    <li>molestiae error perferendis minus tempore voluptate quaerat mollitia</li>
                    <li>Laboriosam omnis architecto illum a quos itaque veniam autem, nam</li>
                </ul>
                <!-- Figure/Table Component 2 -->
                <ChartTableTab v-if="this.whichSection == '/mathematics/international-comparisons'"
                    :elchart="DynamicChartTablePlaceholder" :eltable="DynamicChartTablePlaceholder" :elnote="DynamicChartTablePlaceholder"
                    :elcaptionfig="DynamicFigCaption" figcaptionTitle="Figure M2" figcaptionTableTitle="Table M2"
                    figcaptionBody="mathematics" />
                <ChartTableTab v-if="this.whichSection == '/science/international-comparisons'" :elchart="DynamicChartTablePlaceholder"
                    :eltable="DynamicChartTablePlaceholder" :elnote="DynamicChartTablePlaceholder" :elcaptionfig="DynamicFigCaption"
                    figcaptionTitle="Figure S2" figcaptionTableTitle="Table S2" figcaptionBody="scientific" />
                <ChartTableTab v-if="this.whichSection == '/reading/international-comparisons'" :elchart="DynamicChartTablePlaceholder"
                    :eltable="DynamicChartTablePlaceholder" :elnote="DynamicChartTablePlaceholder" :elcaptionfig="DynamicFigCaption"
                    figcaptionTitle="Figure R2" figcaptionTableTitle="Table R2" figcaptionBody="reading" />
                <!-- end Figure/Table Component 2 -->
            </div>
        </div>
        <div class="panel" id="panel-s1-m3">
            <input id="mat-s1-3" class="for-panel" type="checkbox" name="panels">
            <label class="item-id" for="mat-s1-3">
                <span class="key-feature">How large is the gap in {{ this.currentSection }} performance between top and bottom
                    performers?</span>
            </label>
            <div class="panel-content">
                <p>Commodi numquam illum laborum ea et delectus animi rem unde veniam. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quaerat sequi, voluptate sunt suscipit vel quasi commodi laudantium,
                    vitae, veritatis debitis perferendis incidunt? Quam beatae ut ullam vitae incidunt eveniet. Iste.</p>
                <ul>
                    <li>sit amet consectetur adipisicing elit. Numquam ratione minima</li>
                    <li>molestiae error perferendis minus tempore voluptate quaerat mollitia</li>
                    <li>Laboriosam omnis architecto illum a quos itaque veniam autem, nam</li>
                </ul>
                <!-- Figure/Table Component 3 -->
                <ChartTableTab v-if="this.whichSection == '/mathematics/international-comparisons'"
                    :elchart="DynamicChartTablePlaceholder" :eltable="DynamicChartTablePlaceholder" :elnote="DynamicChartTablePlaceholder"
                    :elcaptionfig="DynamicFigCaption" figcaptionTitle="Figure M3" figcaptionTableTitle="Table M3"
                    figcaptionBody="mathematics" />
                <ChartTableTab v-if="this.whichSection == '/science/international-comparisons'" :elchart="DynamicChartTablePlaceholder"
                    :eltable="DynamicChartTablePlaceholder" :elnote="DynamicChartTablePlaceholder" :elcaptionfig="DynamicFigCaption"
                    figcaptionTitle="Figure S3" figcaptionTableTitle="Table S3" figcaptionBody="scientific" />
                <ChartTableTab v-if="this.whichSection == '/reading/international-comparisons'" :elchart="DynamicChartTablePlaceholder"
                    :eltable="DynamicChartTablePlaceholder" :elnote="DynamicChartTablePlaceholder" :elcaptionfig="DynamicFigCaption"
                    figcaptionTitle="Figure R3" figcaptionTableTitle="Table R3" figcaptionBody="reading" />
                <!-- end Figure/Table Component 3 -->
               
               
            </div>
        </div>
    </div>
    <!-- end accordion content -->
</template>
    
<script>
import NotesOne from '../notes/notes-one.vue'
import NotesSignificantlyDifferentOne from '../notes/notes-significantly-different-one.vue'
import NotesSignificantlyDifferentTwo from '../notes/notes-significantly-different-two.vue'
import NotesSignificantlyDifferentThree from '../notes/notes-significantly-different-three.vue'
import FigCaption from '../notes/fig-caption.vue'
import NotesTable1 from '../notes/notes-table1.vue'

import { DataService } from '../../services/api/data-service'
import ChartTableTab from '../navigation/chart-table-tab.vue'
import ChartTableNotab from '../navigation/chart-table-notab.vue'
import ChartTablePlaceholder from '../charts/chart-table-placeholder.vue'

export default {
    name: 'accordion-international-comparisons',
    components: {
        NotesOne,
        NotesTable1,
        NotesSignificantlyDifferentOne,
        NotesSignificantlyDifferentTwo,
        NotesSignificantlyDifferentThree,
        ChartTableTab,
        ChartTableNotab,
        ChartTablePlaceholder,
    },
    data() {
        return {
            isHidden: false,
            isStatusActive: true,
            whichSection: '',
            currentSection: '',

            DynamicNotesOne: NotesTable1,
            YetOtherDynamicComponent: NotesSignificantlyDifferentOne,
            NotesComponent: NotesSignificantlyDifferentTwo,
            DynamicFigCaption: FigCaption,
            DynamicChartTablePlaceholder: ChartTablePlaceholder,
        }
    },
    methods: {

        toggleElement() {
            this.isStatusActive = !this.isStatusActive
        }

    },
    created() {

        let subScale

        if (this.$route.path.includes('/mathematics')) {
            subScale = 'PVMATH'
            this.currentSection = 'mathematics'
        } else if (this.$route.path.includes('/reading')) {
            subScale = 'PVREAD'
            this.currentSection = 'reading'
        } else if (this.$route.path.includes('/science')) {
            subScale = 'PVSCIE'
            this.currentSection = 'science'
        }

        //DataService.createChartNine(subScale);
        //DataService.createChartM9(subScale);
        //DataService.createTableM7();
        //DataService.createChartM7();
        //DataService.createChartM8();
        //DataService.createChartEight(subScale);

    },
    mounted() {
        this.whichSection = this.$route.path;
        console.log(this.whichSection)
    }
}
</script>
    
    
<style scoped>
.isHidden {
    background-color: grey;
}

.invisible {
    /* visibility: hidden; */
    display: none;
}

div {
    background-color: #fff;
}</style>
    
    
    
    
    