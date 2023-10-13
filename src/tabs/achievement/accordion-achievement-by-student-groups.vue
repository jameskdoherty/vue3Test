<template>
    <!-- start accordion content -->
    <div class="accordion-panel">
        <div class="panel" id="panel-s3-m1">
            <input id="mat-s3-1" class="for-panel" type="checkbox" name="panels" checked="checked">
            <label class="item-id" for="mat-s3-1">
                <span class="key-feature">Are there gender differences in {{ this.currentSection }} performance among
                    15-year-olds?</span>
            </label>
            <div class="panel-content">
                <p><strong>In 2022, there was no significant difference between the average science scores of U.S. male and
                        female students. Among the other 80 education systems, female students scored higher, on average,
                        than male students in 33 education systems, and male students scored higher, on average, than female
                        students in 15 education systems.</strong></p>
                <ul>
                    <li>On average across the participating OECD countries, there was no significant difference between the
                        average science scores of male and female students.</li>
                    <li>In 33 education systems, female students scored higher than male students on average, with score
                        gaps ranging from 5 points in Kazakhstan to 33 points in Jordan.</li>
                    <li>In 15 education systems, male students scored higher than female students on average, with score
                        gaps ranging from 5 points in Spain and Brazil to 15 points in Costa Rica.</li>
                </ul>

                <!-- Click on the column headers -->
                <FragmentParagraph v-if="this.currentSection == 'mathematics'" blurbOne=", average score, or difference from the
                    U.S. average score" blurbTwo="2022–2006 difference in average score" />
                <FragmentParagraph v-if="this.currentSection == 'reading'"
                    blurbOne=", average score, or difference from the U.S. average score" blurbTwo="percentages of 15-year-olds in levels 5 and
        above" />
                <FragmentParagraph v-if="this.currentSection == 'science'"
                    blurbOne=", score difference between male and female students or male and female scores in the table view."
                    blurbTwo="absolute male–female difference in 2022 average scores" />
                <!-- Chart/Table Component 6 -->
                <!-- <ChartTableTab v-if="this.whichSection == '/mathematics/achievement'" :elchart="DynamicChartSix"
                    :eltable="DynamicTableSix" :elnote="NotesComponent" :elcaptionfig="DynamicFigCaptionSix"
                    figcaptionTitle="Figure M6" figcaptionTableTitle="Table M6" figcaptionBody="mathematics" />
                <ChartTableTab v-if="this.whichSection == '/science/achievement'" :elchart="DynamicChartSix"
                    :eltable="DynamicTableSix" :elnote="NotesComponent" :elcaptionfig="DynamicFigCaptionSix"
                    figcaptionTitle="Figure S6" figcaptionTableTitle="Table S6" figcaptionBody="scientific" />
                <ChartTableTab v-if="this.whichSection == '/reading/achievement'" :elchart="DynamicChartSix"
                    :eltable="DynamicTableSix" :elnote="NotesComponent" :elcaptionfig="DynamicFigCaptionSix"
                    figcaptionTitle="Figure R6" figcaptionTableTitle="Table R6" figcaptionBody="reading" /> -->
                <!-- end Chart/Table Component 6 -->


            </div>
        </div>
        <div class="panel" id="panel-s3-m2">
            <input id="mat-s3-2" class="for-panel" type="checkbox" name="panels">
            <label class="item-id" for="mat-s3-2">
                <span class="key-feature">How does the {{ this.currentSection }} performance of U.S. 15-year-olds vary by
                    race/ethnicity?</span>
            </label>
            <div class="panel-content">

                <p><strong>In 2022, White and Asian students and students reporting Two or More Races in the United States
                        scored higher than the overall U.S. average in science literacy, while Hispanic and Black students
                        scored lower compared to the U.S. average.</strong></p>

                <ul>
                    <li>White and Asian students and students reporting Two or More Races, on average, had higher science
                        literacy scores (537, 578, and 513, respectively) than the overall U.S. average score (499). The
                        average science literacy score for Black and Hispanic students were lower than the overall U.S.
                        average score (445 and 471, respectively).</li>

                </ul>

                <!-- Chart/Table Component 7 -->
                <ChartTableTab v-if="this.whichSection == '/mathematics/achievement'" :elchart="DynamicChartSeven"
                    :eltable="DynamicTableSeven" :elnote="YetOtherDynamicComponent" :elnotefortable="DynamicNotesTable" :elcaptionfig="DynamicFigCaptionSeven"
                    figcaptionTitle="Figure M7" figcaptionTableTitle="Table M7" figcaptionBody="mathematics" />
                <ChartTableTab v-if="this.whichSection == '/science/achievement'" :elchart="DynamicChartSeven"
                    :eltable="DynamicTableSeven" :elnote="YetOtherDynamicComponent" :elnotefortable="DynamicNotesTable" :elcaptionfig="DynamicFigCaptionSeven"
                    figcaptionTitle="Figure S7" figcaptionTableTitle="Table S7" figcaptionBody="scientific" />
                <ChartTableTab v-if="this.whichSection == '/reading/achievement'" :elchart="DynamicChartSeven"
                    :eltable="DynamicTableSeven" :elnote="YetOtherDynamicComponent" :elnotefortable="DynamicNotesTable" :elcaptionfig="DynamicFigCaptionSeven"
                    figcaptionTitle="Figure R7" figcaptionTableTitle="Table R7" figcaptionBody="reading" />
            </div>
        </div>
        <div class="panel" id="panel-s3-m3">
            <input id="mat-s3-3" class="for-panel" type="checkbox" name="panels">
            <label class="item-id" for="mat-s3-3">
                <span class="key-feature">How does the {{ this.currentSection }} performance of U.S. 15-year-olds vary by
                    measures of poverty?</span>
            </label>
            <div class="panel-content">
                <!-- toggle switch between Chart 8 and Chart 9-->
                <p class="display-as for-m8-tier1"><strong>Show results for:</strong>
                    <span @click="toggleElement()" :class="{ active: isStatusActive }" class="table-view-button ">Economic,
                        Social, and Cultural Status</span> |
                    <span @click="toggleElement()" :class="{ active: !isStatusActive }" class="table-view-button ">Free or
                        Reduced-priced lunch</span>
                </p>
                <!-- end toggle switch -->
                <p><strong>The PISA 2022 questionnaire collected data on two measures of poverty: the <span
                            class="tooltip-container">economic, social, and cultural status (ESCS) index<span
                                class="tooltip-text bottom">The PISA index of economic, social, and cultural status
                                (ESCS) was created using student reports on parental occupation, the highest level of
                                parental education, and an index of home possessions related to family wealth, home
                                educational resources and possessions related to "classical" culture in the family home.
                                The home possessions relating to "classical" culture in the family home included
                                possessions such as works of classical literature, books of poetry, and works of art
                                (e.g., paintings).</span></span> and a U.S.-only <span class="tooltip-container">free or
                            reduced-price lunch (FRPL)<span class="tooltip-text bottom">The National School Lunch
                                Program provides free or reduced-price lunch for students meeting certain income
                                guidelines. The percentage of students eligible for this program is an indicator of the
                                socioeconomic level of families served by the school. Data are based on principals'
                                responses to a question in the school questionnaire that asked the approximate
                                percentage of eligible students in the school during the previous school year. Free or
                                reduced-price lunch data are for public schools only.</span></span> variable. The ESCS
                        index is a student-level, international measure of socioeconomic status. Students were grouped
                        into four quarters using the distribution of ESCS scores specific to each education system.
                        Those in the bottom ESCS quarter report the highest levels of poverty while those in the top
                        quarter report the lowest levels of poverty. In 2022, U.S. 15-year-old students had higher
                        average science literacy scores than the OECD average scores in the bottom and top ESCS
                        quarters. There was no significant difference between U.S. students' average scores and the OECD
                        average scores in the second and third ESCS quarters.</strong></p>
                <ul>
                    <li>U.S. students in the bottom ESCS quarter scored 10 points higher, on average, than the OECD
                        average score in the bottom ESCS quarter. U.S. students in the top ESCS quarter scored 18 points
                        higher than the OECD average score in the top ESCS quarter.</li>
                    <li>The U.S. score gap between the top and bottom ESCS quarters was not significantly different from
                        the score gap across the participating OECD countries, on average (108 points vs. 101 points,
                        respectively).</li>

                </ul>
                <!-- Chart/Table Component 8 -->
                <div :class="{ invisible: !isStatusActive }">8

                    <ChartTableTab v-if="this.whichSection == '/mathematics/achievement'" :elchart="DynamicChartEight"
                        :eltable="DynamicTableEight" :elnote="YetOtherDynamicComponent" :elnotefortable="YetOtherDynamicComponent" :elcaptionfig="DynamicFigCaption"
                        figcaptionTitle="Figure M8" figcaptionTableTitle="Table M8" figcaptionBody="mathematics" />
                    <ChartTableTab v-if="this.whichSection == '/science/achievement'" :elchart="DynamicChartEight"
                        :eltable="DynamicTableEight" :elnote="YetOtherDynamicComponent" :elnotefortable="YetOtherDynamicComponent" :elcaptionfig="DynamicFigCaption"
                        figcaptionTitle="Figure S8" figcaptionTableTitle="Table S8" figcaptionBody="scientific" />
                    <ChartTableTab v-if="this.whichSection == '/reading/achievement'" :elchart="DynamicChartEight"
                        :eltable="DynamicTableEight" :elnote="YetOtherDynamicComponent" :elnotefortable="YetOtherDynamicComponent" :elcaptionfig="DynamicFigCaption"
                        figcaptionTitle="Figure R8" figcaptionTableTitle="Table R8" figcaptionBody="reading" />
                </div>
                <!-- Chart/Table Component 9 -->
                <div :class="{ invisible: isStatusActive }">9
                    <ChartTableTab v-if="this.whichSection == '/mathematics/achievement'" :elchart="DynamicChartNine"
                        :eltable="DynamicTableNine" :elnote="YetOtherDynamicComponent" :elnotefortable="NotesComponent" :elcaptionfig="DynamicFigCaption"
                        figcaptionTitle="Figure M9" figcaptionTableTitle="Table M9" figcaptionBody="mathematics" />
                    <ChartTableTab v-if="this.whichSection == '/science/achievement'" :elchart="DynamicChartNine"
                        :eltable="DynamicTableNine" :elnote="YetOtherDynamicComponent" :elnotefortable="NotesComponent" :elcaptionfig="DynamicFigCaption"
                        figcaptionTitle="Figure S9" figcaptionTableTitle="Table S9" figcaptionBody="scientific" />
                    <ChartTableTab v-if="this.whichSection == '/reading/achievement'" :elchart="DynamicChartNine"
                        :eltable="DynamicTableNine" :elnote="YetOtherDynamicComponent" :elnotefortable="NotesComponent" :elcaptionfig="DynamicFigCaption"
                        figcaptionTitle="Figure R9" figcaptionTableTitle="Table R9" figcaptionBody="reading" />
                </div>
            </div>
        </div>
    </div>
    <!-- end accordion content -->
</template>

<script>
import NotesOne from '../../shared/notes/notes-one.vue'
import NotesSignificantlyDifferentOne from '../../shared/notes/notes-significantly-different-one.vue'
import NotesSignificantlyDifferentTwo from '../../shared/notes/notes-significantly-different-two.vue'
import NotesSignificantlyDifferentThree from '../../shared/notes/notes-significantly-different-three.vue'
import ChartM7 from './charts/chart-m7.vue'
import ChartM8 from './charts/chart-m8.vue'
import ChartNine from './charts/chart-nine.vue'
import ChartSix from './charts/chart-six.vue'
import ChartTableTab from '../../shared/navigation/chart-table-tab.vue'
import FigCaption from '../../shared/notes/fig-caption.vue'
import FigCaptionSix from '../../shared/notes/fig-caption-six.vue'
import FigCaptionSeven from '../../shared/notes/fig-caption-seven.vue'
import ChartTablePlaceholder from '../../shared/placeholders/chart-table-placeholder.vue'
// import TableM1 from '../tables/table-m1.vue'
import TableM8 from './tables/table-m8.vue'
import TableM7 from './tables/table-m7.vue'
import TableM9 from './tables/table-m9.vue'
import TableSix from './tables/table-six.vue'


import { DataService } from '../../services/api/data-service';


export default {
    name: 'accordion-achievement-by-student-groups',
    components: {
        NotesOne,
        NotesSignificantlyDifferentOne,
        NotesSignificantlyDifferentTwo,
        NotesSignificantlyDifferentThree,
        ChartM7,
        ChartM8,
        ChartNine,
        ChartSix,
        ChartTableTab,
        ChartTablePlaceholder,
        // TableM1,
        TableM8,
        TableM7,
        TableSix,
        TableM9,
    },
    data() {
        return {
            isHidden: false,
            isStatusActive: true,
            whichSection: '',
            currentSection: '',
            DynamicChartSix: ChartSix,
            DynamicTableSix: TableSix,
            DynamicTableSeven: TableM7,
            DynamicNotesTable: NotesSignificantlyDifferentThree,
            DynamicChartSeven: ChartM7,
            DynamicChartEight: ChartM8,
            DynamicTableEight: TableM8,
            DynamicTableNine: TableM9,
            DynamicChartNine: ChartNine,
            DynamicNotesOne: NotesOne,
            YetOtherDynamicComponent: NotesSignificantlyDifferentOne,
            NotesComponent: NotesSignificantlyDifferentTwo,
            DynamicFigCaption: FigCaption,
            DynamicFigCaptionSix: FigCaptionSix,
            DynamicFigCaptionSeven: FigCaptionSeven,
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

        DataService.createTable6(subScale);
        DataService.createChart6(subScale);
        DataService.createTable7(subScale);
        DataService.createChartM7();
        DataService.createTable8(subScale);
        DataService.createChartEight(subScale);
        DataService.createTable9(subScale);
        DataService.createChartNine(subScale);
        DataService.createCurrentSection(this.currentSection)
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




