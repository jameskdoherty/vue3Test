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
                <p v-if="this.currentSection == 'mathematics'"><strong>In 2022, there was no significant difference between
                        the average science scores of U.S. male and
                        female students. Among the other 80 education systems, female students scored higher, on average,
                        than male students in 33 education systems, and male students scored higher, on average, than female
                        students in 15 education systems.</strong></p>
                <ul v-if="this.currentSection == 'mathematics'">
                    <li>On average across the participating OECD countries, there was no significant difference between the
                        average science scores of male and female students.</li>
                    <li>In 33 education systems, female students scored higher than male students on average, with score
                        gaps ranging from 5 points in Kazakhstan to 33 points in Jordan.</li>
                    <li>In 15 education systems, male students scored higher than female students on average, with score
                        gaps ranging from 5 points in Spain and Brazil to 15 points in Costa Rica.</li>
                </ul>

                <p v-if="this.currentSection == 'reading'"><strong>In 2022 in the United States, female 15-year-old students
                        scored higher, on average than their male peers on the reading literacy scale. On average across the
                        participating OECD countries, female students scored higher than male students. Among the 80 other
                        education systems, female students scored higher, on average, than male students in 78 education
                        systems.</strong></p>
                <ul v-if="this.currentSection == 'reading'">
                    <li>The U.S. female–male score difference (22 points) was not significantly different from the OECD
                        average score difference (24 points).</li>
                    <li>In 79 education systems, female students scored higher, on average than male students, with score
                        gaps ranging from 8 points in Mexico and Peru to 54 points in Cyprus.</li>

                </ul>

                <p v-if="this.currentSection == 'science'"><strong>In 2022, there was no significant difference between the
                        average science scores of U.S. male and
                        female students. Among the other 80 education systems, female students scored higher, on average,
                        than male students in 33 education systems, and male students scored higher, on average, than female
                        students in 15 education systems.</strong></p>
                <ul v-if="this.currentSection == 'science'">
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
                    blurbOne=", score difference between male and female students or male and female scores in the table view"
                    blurbTwo="absolute male–female difference in 2022 average scores." />
                <FragmentParagraph v-if="this.currentSection == 'science'"
                    blurbOne=", score difference between male and female students or male and female scores in the table view."
                    blurbTwo="absolute male–female difference in 2022 average scores" />
                <!-- Chart/Table Component 6 -->
                <!-- <ChartTableTab v-if="this.whichSection == '/mathematics/achievement'" :elchart="DynamicChartSix"
                    :eltable="DynamicTableSix" :elnote="DynamicNotesChart6" :elcaptionfig="DynamicFigCaptionSix"
                    figcaptionTitle="Figure M6" figcaptionTableTitle="Table M6" figcaptionBody="mathematics" />
                <ChartTableTab v-if="this.whichSection == '/science/achievement'" :elchart="DynamicChartSix"
                    :eltable="DynamicTableSix" :elnote="DynamicNotesChart6" :elcaptionfig="DynamicFigCaptionSix"
                    figcaptionTitle="Figure S6" figcaptionTableTitle="Table S6" figcaptionBody="scientific" />
                <ChartTableTab v-if="this.whichSection == '/reading/achievement'" :elchart="DynamicChartSix"
                    :eltable="DynamicTableSix" :elnote="DynamicNotesChart6" :elcaptionfig="DynamicFigCaptionSix"
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

                <p v-if="this.currentSection == 'mathematics'"><strong>In 2022, White and Asian students in the United
                        States scored higher than the overall U.S. average in mathematics literacy, while Hispanic and Black
                        students scored lower.</strong></p>
                <ul v-if="this.currentSection == 'mathematics'">
                    <li>White and Asian students, on average, had higher mathematics literacy scores (498 and 543,
                        respectively) than the overall U.S. average score (465). Black and Hispanic students had lower
                        scores (412 and 439, respectively) than the overall U.S. average score.</li>
                </ul>
                <p v-if="this.currentSection == 'reading'"><strong>In 2022, White and Asian students in the United States
                        scored higher than the overall U.S. average in reading literacy, while Hispanic and Black students
                        scored lower.</strong></p>
                <ul v-if="this.currentSection == 'reading'">
                    <li>White and Asian students, on average, had higher reading literacy scores (537 and 579, respectively)
                        than the overall U.S. average score (504). Black and Hispanic students had lower average scores (459
                        and 481, respectively) than the overall U.S. average score. The average reading literacy score of
                        students reporting Two or More Races (512) was not significantly different than the overall U.S.
                        average.</li>
                </ul>
                <p v-if="this.currentSection == 'science'"><strong>In 2022, White and Asian students and students reporting
                        Two or More Races in the United States scored higher than the overall U.S. average in science
                        literacy, while Hispanic and Black students scored lower compared to the U.S. average.</strong></p>
                <ul v-if="this.currentSection == 'science'">
                    <li>White and Asian students and students reporting Two or More Races, on average, had higher science
                        literacy scores (537, 578, and 513, respectively) than the overall U.S. average score (499). The
                        average science literacy score for Black and Hispanic students were lower than the overall U.S.
                        average score (445 and 471, respectively).</li>
                </ul>

                <!-- Chart/Table Component 7 -->
                <ChartTableTab v-if="this.whichSection == '/mathematics/achievement'" :elchart="DynamicChartSeven"
                    :eltable="DynamicTableSeven" :elnote="YetOtherDynamicComponent" :elnotefortable="DynamicNotesTable"
                    :elcaptionfig="DynamicFigCaptionSeven" figcaptionTitle="Figure M7" figcaptionTableTitle="Table M7"
                    figcaptionBody="mathematics" />
                <ChartTableTab v-if="this.whichSection == '/science/achievement'" :elchart="DynamicChartSeven"
                    :eltable="DynamicTableSeven" :elnote="YetOtherDynamicComponent" :elnotefortable="DynamicNotesTable"
                    :elcaptionfig="DynamicFigCaptionSeven" figcaptionTitle="Figure S7" figcaptionTableTitle="Table S7"
                    figcaptionBody="scientific" />
                <ChartTableTab v-if="this.whichSection == '/reading/achievement'" :elchart="DynamicChartSeven"
                    :eltable="DynamicTableSeven" :elnote="YetOtherDynamicComponent" :elnotefortable="DynamicNotesTable"
                    :elcaptionfig="DynamicFigCaptionSeven" figcaptionTitle="Figure R7" figcaptionTableTitle="Table R7"
                    figcaptionBody="reading" />
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
                <!-- Chart/Table Component 8 -->
                <p :class="{ invisible: !isStatusActive }"><strong>The PISA 2022 questionnaire collected data on two
                        measures of poverty: the <span class="tooltip-container">economic, social, and cultural status
                            (ESCS) index<span class="tooltip-text bottom">The PISA index of economic, social, and cultural
                                status
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
                <ul :class="{ invisible: !isStatusActive }">
                    <li v-if="this.currentSection == 'mathematics'">Score differences between the U.S. students and the OECD
                        average scores were 10, 17, and 18 points in the bottom, second, and third, ESCS quarters,
                        respectively.</li>
                    <li v-if="this.currentSection == 'mathematics'">U.S. students in the top ESCS quarter scored 102 points
                        higher than those in the bottom quarter. The U.S. score difference between the top and bottom
                        quarters was not significantly different from the score difference for the OECD average (98 points).
                    </li>

                    <li v-if="this.currentSection == 'reading'">Score differences between the U.S. and OECD average scores
                        were 56, 54, 50, and 65 points in the bottom, second, third, and top ESCS quarters, respectively.
                    </li>
                    <li v-if="this.currentSection == 'reading'">Average scores in reading by students' socioeconomic status
                        show that U.S. 15-year-olds in the top ESCS quarter performed 101 points higher than those in the
                        bottom quarter. The average score gap across participating OECD countries (91 points), was not
                        significantly different compared to the U.S. score gap.</li>

                    <li v-if="this.currentSection == 'science'">U.S. students in the bottom ESCS quarter scored 10 points
                        higher, on average, than the OECD average score in the bottom ESCS quarter. U.S. students in the top
                        ESCS quarter scored 18 points higher than the OECD average score in the top ESCS quarter.</li>
                    <li v-if="this.currentSection == 'science'">The U.S. score gap between the top and bottom ESCS quarters
                        was not significantly different from the score gap across the participating OECD countries, on
                        average (108 points vs. 101 points, respectively).</li>

                </ul>

                <div :class="{ invisible: !isStatusActive }">8
                    <ChartTableTab v-if="this.whichSection == '/mathematics/achievement'" :elchart="DynamicChartEight"
                        :eltable="DynamicTableEight" :elnote="DynamicNotesChart8"
                        :elnotefortable="DynamicNotesChart8" :elcaptionfig="DynamicFigCaption"
                        figcaptionTitle="Figure M8" figcaptionTableTitle="Table M8" figcaptionBody="mathematics" />
                    <ChartTableTab v-if="this.whichSection == '/science/achievement'" :elchart="DynamicChartEight"
                        :eltable="DynamicTableEight" :elnote="DynamicNotesChart8"
                        :elnotefortable="DynamicNotesChart8" :elcaptionfig="DynamicFigCaption"
                        figcaptionTitle="Figure S8" figcaptionTableTitle="Table S8" figcaptionBody="scientific" />
                    <ChartTableTab v-if="this.whichSection == '/reading/achievement'" :elchart="DynamicChartEight"
                        :eltable="DynamicTableEight" :elnote="DynamicNotesChart8"
                        :elnotefortable="DynamicNotesChart8" :elcaptionfig="DynamicFigCaption"
                        figcaptionTitle="Figure R8" figcaptionTableTitle="Table R8" figcaptionBody="reading" />
                </div>

                <!-- Chart/Table Component 9 -->
                <p :class="{ invisible: isStatusActive }"><strong>The PISA 2022 questionnaire collected data on two measures
                        of poverty: the <span class="tooltip-container">economic, social, and cultural status (ESCS)
                            index<span class="tooltip-text bottom">The PISA index of economic, social, and cultural status
                                (ESCS) was created using student reports on parental occupation, the highest level of
                                parental education, and an index of home possessions related to family wealth, home
                                educational resources and possessions related to "classical" culture in the family home. The
                                home possessions relating to "classical" culture in the family home included possessions
                                such as works of classical literature, books of poetry, and works of art (e.g.,
                                paintings).</span></span> and the school-level, U.S.-only <span
                            class="tooltip-container">free or reduced-price lunch (FRPL)<span
                                class="tooltip-text bottom">The National School Lunch Program provides free or reduced-price
                                lunch for students meeting certain income guidelines. The percentage of students eligible
                                for this program is an indicator of the socioeconomic level of families served by the
                                school. Data are based on principals' responses to a question in the school questionnaire
                                that asked the approximate percentage of eligible students in the school during the previous
                                school year. Free or reduced-price lunch data are for public schools only.</span></span>
                        variable. In 2022, students in U.S. public schools with the highest levels of poverty (75 percent or
                        more of students eligible for FRPL) scored, on average, {{ this.povertyAvgScore1 }} points lower than the overall U.S.
                        average in {{ this.currentSection }} literacy, whereas students in U.S. public schools with the lowest levels of
                        poverty (less than 10 percent eligible for FRPL) scored {{this.povertyAvgScore2}} points higher than the overall U.S.
                        average.</strong></p>
                <ul :class="{ invisible: isStatusActive }">
                    <li v-if="this.currentSection == 'mathematics'">Students in public schools in which less than half of
                        all students were FRPL-eligible (less than 10 percent, 10 to 24.9 percent, and 25 to 49.9 percent)
                        scored, on average, higher than the overall U.S. average (519, 508, and 478, respectively, vs. 465).
                    </li>
                    <li v-if="this.currentSection == 'reading'">Students in public schools in which less than one-quarter of
                        all students were FRPL-eligible (less than 10 percent and 10 to 24.9 percent) scored, on average,
                        higher than the overall U.S. average (562 and 547, respectively, vs. 504).
                    </li>
                    <li v-if="this.currentSection == 'science'">Students in public schools in which less than half of all
                        students were FRPL-eligible (less than 10 percent, 10 to 24.9 percent, and 25 to 49.9 percent)
                        scored, on average, higher than the overall U.S. average (553, 544, and 515, respectively, vs. 499).
                    </li>
                    <li v-if="this.currentSection == 'science'">Students in public schools in which 75 percent or more of
                        student were FRPL-eligible scored, on average, lower compared to the overall U.S. average (446 vs.
                        499).</li>

                </ul>

                <div :class="{ invisible: isStatusActive }">9
                    <ChartTableTab v-if="this.whichSection == '/mathematics/achievement'" :elchart="DynamicChartNine"
                        :eltable="DynamicTableNine" :elnote="DynamicNotesChart9" :elnotefortable="DynamicNotesTable9"
                        :elcaptionfig="DynamicFigCaption" figcaptionTitle="Figure M9" figcaptionTableTitle="Table M9"
                        figcaptionBody="mathematics" />
                    <ChartTableTab v-if="this.whichSection == '/science/achievement'" :elchart="DynamicChartNine"
                        :eltable="DynamicTableNine" :elnote="DynamicNotesChart9" :elnotefortable="DynamicNotesTable9"
                        :elcaptionfig="DynamicFigCaption" figcaptionTitle="Figure S9" figcaptionTableTitle="Table S9"
                        figcaptionBody="scientific" />
                    <ChartTableTab v-if="this.whichSection == '/reading/achievement'" :elchart="DynamicChartNine"
                        :eltable="DynamicTableNine" :elnote="DynamicNotesChart9" :elnotefortable="DynamicNotesTable9"
                        :elcaptionfig="DynamicFigCaption" figcaptionTitle="Figure R9" figcaptionTableTitle="Table R9"
                        figcaptionBody="reading" />
                </div>
            </div>
        </div>
    </div>
    <!-- end accordion content -->
</template>

<script>
import NotesOne from '../../shared/notes/notes-one.vue'
import NotesChart2 from '../../shared/notes/notes-chart2.vue'
import NotesSignificantlyDifferentOne from '../../shared/notes/notes-significantly-different-one.vue'
import NotesSignificantlyDifferentTwo from '../../shared/notes/notes-significantly-different-two.vue'
import NotesSignificantlyDifferentThree from '../../shared/notes/notes-significantly-different-three.vue'
import NotesSignificantlyDifferentThreeB from '../../shared/notes/notes-significantly-different-three-b.vue'
import NotesSignificantlyDifferentFourB from '../../shared/notes/notes-significantly-different-four-b.vue'
import NotesSignificantlyDifferentFourC from '../../shared/notes/notes-significantly-different-four-c.vue'
import NotesSignificantlyDifferentFourD from '../../shared/notes/notes-significantly-different-four-d.vue'
import ChartM7 from './charts/chart-m7.vue'
import ChartM8 from './charts/chart-m8.vue'
import ChartNine from './charts/chart-nine.vue'
import ChartSix from './charts/chart-six.vue'
import ChartTableTab from '../../shared/navigation/chart-table-tab.vue'
import FigCaption from '../../shared/notes/fig-caption.vue'
import FigCaptionSix from '../../shared/notes/fig-caption-six.vue'
import FigCaptionSeven from '../../shared/notes/fig-caption-seven.vue'
import ChartTablePlaceholder from '../../shared/placeholders/chart-table-placeholder.vue'
import FragmentParagraph from '../../shared/fragments/fragment-paragraph.vue'
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
        NotesChart2,
        NotesSignificantlyDifferentOne,
        NotesSignificantlyDifferentTwo,
        NotesSignificantlyDifferentThree,
        NotesSignificantlyDifferentThreeB,
        NotesSignificantlyDifferentFourB,
        NotesSignificantlyDifferentFourC,
        NotesSignificantlyDifferentFourD,
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
        FragmentParagraph
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
            DynamicNotesTable: NotesSignificantlyDifferentThreeB,
            DynamicChartSeven: ChartM7,
            DynamicChartEight: ChartM8,
            DynamicTableEight: TableM8,
            DynamicTableNine: TableM9,
            DynamicChartNine: ChartNine,
            DynamicNotesOne: NotesOne,
            DynamicNotesChart6: NotesChart2,
            DynamicNotesChart8: NotesSignificantlyDifferentFourB,
            DynamicNotesChart9: NotesSignificantlyDifferentFourC,
            DynamicNotesTable9: NotesSignificantlyDifferentFourD,
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
            this.povertyAvgScore1 = '50'
            this.povertyAvgScore2 = '54'
        } else if (this.$route.path.includes('/reading')) {
            subScale = 'PVREAD'
            this.currentSection = 'reading'
            this.povertyAvgScore1 = '48'
            this.povertyAvgScore2 = '58'
        } else if (this.$route.path.includes('/science')) {
            subScale = 'PVSCIE'
            this.currentSection = 'science'
            this.povertyAvgScore1 = '53'
            this.povertyAvgScore2 = '54'
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




