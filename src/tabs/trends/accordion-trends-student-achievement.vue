<template>
    <!-- start accoridion content -->
    <div class="accordion-panel">
        <div class="panel" id="panel-s2-m1">
            <input id="mat-s2-1" class="for-panel" type="checkbox" name="panels" checked="checked">
            <label class="item-id" for="mat-s2-1">
                <span class="key-feature">Has there been any change in 15-year-olds' performance in {{ this.currentSection
                }} over
                    time?</span>
            </label>
            <div class="panel-content">
                <p><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sit magnam inventore labore
                        facilis incidunt impedit tenetur cumque praesentium maxime facere, laborum voluptatum, quod nam
                        consequuntur ullam harum. Minus, reiciendis.</strong></p>
                <!-- toggle switch between Chart 8 and Chart 9-->
                <p class="display-as for-m8-tier1"><strong>Show results for:</strong>
                    <span @click="toggleElement()" :class="{ active: isStatusActive }" class="table-view-button ">Long Term
                        Trend</span> |
                    <span @click="toggleElement()" :class="{ active: !isStatusActive }" class="table-view-button ">Short
                        Term Trend</span>
                </p>
                <!-- end toggle switch -->
                <p>Voluptatem eum eaque amet illo delectus enim odio consectetur, alias incidunt? Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Quidem blanditiis maiores repudiandae assumenda veniam. Impedit autem
                    rerum nostrum amet ad numquam. Deserunt autem, ipsam sed veniam alias beatae a eveniet?</p>
                <ul>
                    <li>libero facilis nulla, voluptatum assumenda magni sit cumque modi. </li>
                    <li>sit amet consectetur adipisicing elit. Numquam ratione minima</li>
                    <li>molestiae error perferendis minus tempore voluptate quaerat mollitia</li>
                    <li>Laboriosam omnis architecto illum a quos itaque veniam autem, nam</li>
                </ul>


                <!-- Figure/Table Component 4a -->
                <div :class="{ invisible: !isStatusActive }">4a
                    <ChartTableNotab v-if="this.whichSection == '/mathematics/trends'" :eltable="DynamicTableFourA"
                        :elnote="DynamicNotesOne" :elcaptionfig="DynamicFigCaption"
                        figcaptionTableTitle="Table M4a" figcaptionBody="mathematics" figureClassTable="table-1" />
                    <ChartTableNotab v-if="this.whichSection == '/science/trends'" :eltable="DynamicTableFourA"
                        :elnote="DynamicNotesOne" :elcaptionfig="DynamicFigCaption" figcaptionTableTitle="Table S4a"
                        figcaptionBody="scientific" figureClassTable="table-1" />
                    <ChartTableNotab v-if="this.whichSection == '/reading/trends'" :eltable="DynamicTableFourA"
                        :elnote="DynamicNotesOne" :elcaptionfig="DynamicFigCaption" figcaptionTableTitle="Table R4a"
                        figcaptionBody="reading" figureClassTable="table-1" />
                </div>
                <!-- end Figure/Table Component 4 -->

                <div :class="{ invisible: isStatusActive }">4b
                    <ChartTableNotab v-if="this.whichSection == '/mathematics/trends'" :eltable="DynamicTableFourB"
                        :elnote="DynamicNotesOne" :elcaptionfig="DynamicFigCaption"
                        figcaptionTableTitle="Table M4b" figcaptionBody="mathematics" figureClassTable="table-1" />
                    <ChartTableNotab v-if="this.whichSection == '/science/trends'" :eltable="DynamicTableFourB"
                        :elnote="DynamicNotesOne" :elcaptionfig="DynamicFigCaption"
                        figcaptionTableTitle="Table S4b" figcaptionBody="scientific" figureClassTable="table-1" />
                    <ChartTableNotab v-if="this.whichSection == '/reading/trends'" :eltable="DynamicTableFourB"
                        :elnote="DynamicNotesOne" :elcaptionfig="DynamicFigCaption"
                        figcaptionTableTitle="Table R4b" figcaptionBody="reading" figureClassTable="table-1" />
                </div>
            </div>
        </div>
        <div class="panel" id="panel-s2-m2">
            <input id="mat-s2-2" class="for-panel" type="checkbox" name="panels">
            <label class="item-id" for="mat-s2-2">
                <span class="key-feature">Has there been any change over time in the {{ this.currentSection }} performance
                    of U.S.
                    15-year-olds' scores at selected percentiles?</span>
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

                <!-- Figure/Table Component 5 -->
                <ChartTableTab v-if="this.whichSection == '/mathematics/trends'" :elchart="DynamicChartFive"
                    :eltable="DynamicTableFive" :elnote="DynamicNotesOne"
                    :elcaptionfig="DynamicFigCaption" figcaptionTitle="Figure M5" figcaptionTableTitle="Table M5"
                    figcaptionBody="mathematics" />
                <ChartTableTab v-if="this.whichSection == '/science/trends'" :elchart="DynamicChartFive"
                    :eltable="DynamicTableFive" :elnote="DynamicNotesOne"
                    :elcaptionfig="DynamicFigCaption" figcaptionTitle="Figure S5" figcaptionTableTitle="Table S5"
                    figcaptionBody="scientific" />
                <ChartTableTab v-if="this.whichSection == '/reading/trends'" :elchart="DynamicChartFive"
                    :eltable="DynamicTableFive" :elnote="DynamicNotesOne"
                    :elcaptionfig="DynamicFigCaption" figcaptionTitle="Figure R5" figcaptionTableTitle="Table R5"
                    figcaptionBody="reading" />
                <!-- end Figure/Table Component 5 -->
            </div>
        </div>
    </div>


    <!-- end accordion content -->
</template>
    
<script>
import NotesOne from '../../shared/notes/notes-one.vue'
import NotesTable1 from '../../shared/notes/notes-table1.vue'
import NotesSignificantlyDifferentOne from '../../shared/notes/notes-significantly-different-one.vue'
import NotesSignificantlyDifferentTwo from '../../shared/notes/notes-significantly-different-two.vue'
import NotesSignificantlyDifferentThree from '../../shared/notes/notes-significantly-different-three.vue'
import FigCaption from '../../shared/notes/fig-caption.vue'

import { DataService } from '../../services/api/data-service'
import ChartTableTab from '../../shared/navigation/chart-table-tab.vue'
import ChartTableNotab from '../../shared/navigation/chart-table-notab.vue'
import ChartTablePlaceholder from '../../shared/placeholders/chart-table-placeholder.vue'

import TableFourA from './tables/table-4a.vue'
import TableFourB from './tables/table-4b.vue'
import TableFive from './tables/table-5.vue'
import ChartFive from './charts/chart-five.vue'

export default {
    name: 'accordion-trends-student-achievement',
    components: {
        NotesOne,
        NotesTable1,
        NotesSignificantlyDifferentOne,
        NotesSignificantlyDifferentTwo,
        NotesSignificantlyDifferentThree,
        ChartTableTab,
        ChartTableNotab,
        ChartTablePlaceholder,
        TableFourA,
        TableFourB,
        TableFive,
        ChartFive,

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
            DynamicTableFourA: TableFourA,
            DynamicTableFourB: TableFourB,
            DynamicTableFive: TableFive,
            DynamicChartFive: ChartFive,
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

        DataService.createTable4B(subScale);
        DataService.createTable4A(subScale);
        DataService.createTable5(subScale);


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
}
</style>
    
    
    
    
    