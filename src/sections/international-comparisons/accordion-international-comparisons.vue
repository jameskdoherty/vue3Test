<template>
    <!-- start accoridion content -->

    <div class="accordion-panel">
        <div class="panel" id="panel-s1-m1">
            <input id="mat-s1-1" class="for-panel" type="checkbox" name="panels" checked="checked">
            <label class="item-id" for="mat-s1-1">
                <span class="key-feature">How does the performance of U.S. 15-year-olds in {{ this.currentSection }} compare
                    internationally?</span>
            </label>
            <div class="panel-content">
                <p><strong>Compared to the 80 other education systems in PISA 2022, the U.S. average {{ this.currentSection
                }} literacy score
                        was {{ this.trend1 }} than the average in {{ this.educationsSystemsCount1 }} education systems,
                        {{ this.trend2 }} than the average in {{ this.educationsSystemsCount2 }} education systems,
                        and not significantly different from the average in {{ this.educationsSystemsCount3 }} education
                        systems.</strong>
                </p>
                <ul>
                    <li>The U.S. average score ({{ this.usAVGScore }}) was {{ this.trend1 }} than the OECD average score
                        ({{ this.oecdAVGScore }}). </li>
                    <li>Compared to the {{ this.oecdMembersCount }} other participating OECD members, the U.S. average in {{
                        this.currentSection }}
                        literacy was {{ this.trend1 }}
                        than the average in {{ this.educationsSystemsCountInList1 }} education systems, {{ this.trend2 }}
                        than
                        in {{ this.educationsSystemsCountInList2 }}, and not significantly different from
                        {{ this.educationsSystemsCountInList3 }}.
                    </li>
                    <li>On a scale of 0 to 1,000, average scores in {{ this.currentSection }} literacy across the education
                        systems ranged
                        from {{ this.scaleAVGScoresBlurb }}.</li>
                </ul>

                <!-- Click on the column headers -->
                <FragmentParagraph v-if="this.currentSection == 'mathematics'" blurbOne=", average score, or difference from the
                    U.S. average score" blurbTwo="2022 average score from
                    largest to smallest" />
                <FragmentParagraph v-if="this.currentSection == 'reading'"
                    blurbOne=", average score, or difference from the U.S. average score" blurbTwo="percentages of 15-year-olds in levels 5 and
        above" />
                <FragmentParagraph v-if="this.currentSection == 'science'" blurbOne="or different performance levels"
                    blurbTwo="percentages of 15-year-olds in levels 5 and
        above" />

                <!-- Chart/Table Component 1 -->

                <ChartTableNotab v-if="this.whichSection == '/mathematics/international-comparisons'"
                    :eltable="DynamicTableOne" :elnote="DynamicNotesOne" :elcaptionfig="DynamicFigCaption"
                    figcaptionTableTitle="Table M1" figcaptionBody="mathematics" figureClassTable="table-1" />
                <ChartTableNotab v-if="this.whichSection == '/science/international-comparisons'" :eltable="DynamicTableOne"
                    :elnote="DynamicNotesOne" :elcaptionfig="DynamicFigCaption" figcaptionTableTitle="Table S1"
                    figcaptionBody="scientific" figureClassTable="table-1" />
                <ChartTableNotab v-if="this.whichSection == '/reading/international-comparisons'" :eltable="DynamicTableOne"
                    :elnote="DynamicNotesOne" :elcaptionfig="DynamicFigCaption" figcaptionTableTitle="Table R1"
                    figcaptionBody="reading" figureClassTable="table-1" />
            </div>
        </div>
        <div class="panel" id="panel-s1-m2">
            <input id="mat-s1-2" class="for-panel" type="checkbox" name="panels">
            <label class="item-id" for="mat-s1-2">
                <span class="key-feature">What is the percentage of 15-year-olds reaching the PISA proficiency level in
                    {{ this.currentSection }}?</span>
            </label>
            <div class="panel-content">
                <p>In addition to scale scores, PISA describes student performance in each subject area in terms of levels
                    of proficiency, from the lowest level (Level 1b) to the highest (Level 6). Students were classified into
                    proficiency levels based on their scores. Read more about the skills and knowledge of students at each
                    <a href="">{{ this.currentSection }} literacy proficiency level</a>. To reach a particular proficiency
                    level, a student
                    must correctly answer a majority of items at that level. Students were classified into {{
                        this.currentSection }}
                    proficiency levels according to their scores. Exact cut scores are as follows: Below Level 2 is a score
                    less than {{ this.CutScore1 }}; Levels 5 and above is a score equal to or greater than {{ this.CutScore2
                    }}.
                </p>
                <p><strong>In the United States, {{ this.USPctTopPerformer }} percent of 15-year-old students in 2022 were
                        top
                        performers in {{ this.currentSection }}
                        literacy, scoring at proficiency levels 5 and above; {{ this.USPctLowPerformer }} percent were low
                        performers in {{ this.currentSection }}
                        literacy, scoring below proficiency level 2.</strong></p>
                <ul>
                    <li>The United States had a larger percentage of top performers in {{ this.currentSection }} literacy
                        than the OECD
                        average ( {{ this.USPctTopPerformerThanOECD1 }} percent vs. {{ this.USPctTopPerformerThanOECD2 }}
                        percent, respectively). Compared to {{ this.OtherReportable }} other reportable education systems,
                        the U.S. percentage was larger than in {{ this.EducationSystems1 }} education systems, smaller than
                        in
                        {{ this.EducationSystems2 }} education systems,
                        and not significantly different from {{ this.EducationSystems3 }} education systems. The percentages
                        of top-performing
                        15-year-old students in {{ this.currentSection }} literacy ranged from {{ this.literacy1 }} percent
                        in Singapore to nearly {{ this.literacy2 }} percent in
                        {{ this.LiteracyEducationSystems1 }} education systems. Estimates are not reportable for
                        {{ this.LiteracyEducationSystems2 }} education systems because reporting
                        standards were not met. </li>
                    <li>The United States had a smaller percentage of low performers in {{ this.currentSection }} literacy
                        than the OECD
                        average ({{ this.LowPerfOECD1 }} vs. {{ this.LowPerfOECD2 }} percent, respectively). The U.S.
                        percentage
                        was larger than in {{ this.LowPerfUSA1 }} education
                        systems, smaller than in {{ this.LowPerfUSA2 }} education systems, and not significantly different
                        from {{ this.LowPerfUSANotSigD }} education
                        systems. The percentages of low-performing 15-year-old students in {{ this.currentSection }}
                        literacy ranged from {{ this.LowPerfEndBlurb }}</li>

                </ul>
                <FragmentParagraph v-if="this.currentSection == 'mathematics'" blurbOne="or different performance levels"
                    blurbTwo="2022 average score from largest to smallest" />
                <FragmentParagraph v-if="this.currentSection == 'reading'"
                    blurbOne=", average score, or difference from the U.S. average score" blurbTwo="percentages of 15-year-olds in levels 5 and
        above" />
                <FragmentParagraph v-if="this.currentSection == 'science'"
                    blurbOne=", average score, or difference from the U.S. average score" blurbTwo="percentages of 15-year-olds in levels 5 and
        above" />
                <!-- <p>Click on the column headers below to sort data by education system or different performance levels. The
                    default display shows education systems ordered by the percentages of 15-year-olds in levels 5 and
                    above. When a user selects customized ordering, footnotes and special symbol notes will be retained as
                    they were in the default view.</p> -->
                <!-- Chart/Table Component 2 -->
                <ChartTableTab v-if="this.whichSection == '/mathematics/international-comparisons'"
                    :elchart="DynamicChartTwo" :eltable="DynamicTableTwo" :elnote="DynamicRoundsToZero"
                    :elnotefortable="DynamicRoundsToZero" :elcaptionfig="DynamicFigCaption" figcaptionTitle="Figure M2"
                    figcaptionTableTitle="Table M2" figcaptionBody="mathematics" />
                <ChartTableTab v-if="this.whichSection == '/science/international-comparisons'" :elchart="DynamicChartTwo"
                    :eltable="DynamicTableTwo" :elnote="DynamicRoundsToZero" :elnotefortable="DynamicRoundsToZero"
                    :elcaptionfig="DynamicFigCaption" figcaptionTitle="Figure S2" figcaptionTableTitle="Table S2"
                    figcaptionBody="scientific" />
                <ChartTableTab v-if="this.whichSection == '/reading/international-comparisons'" :elchart="DynamicChartTwo"
                    :eltable="DynamicTableTwo" :elnote="DynamicRoundsToZero" :elnotefortable="DynamicRoundsToZero"
                    :elcaptionfig="DynamicFigCaption" figcaptionTitle="Figure R2" figcaptionTableTitle="Table R2"
                    figcaptionBody="reading" />
            </div>
        </div>
        <div class="panel" id="panel-s1-m3">
            <input id="mat-s1-3" class="for-panel" type="checkbox" name="panels">
            <label class="item-id" for="mat-s1-3">
                <span class="key-feature">How large is the gap in {{ this.currentSection }} performance between top and
                    bottom
                    performers?</span>
            </label>
            <div class="panel-content">
                <p><strong>Score gaps between top and bottom performers provide one indication of equity within an education
                        system. The distribution of U.S. student scores in {{ this.currentSection
                        }} literacy showed a score gap of {{ this.educationsSystemsCount1 }} points
                        between the 90th and 10th percentiles. </strong>
                </p>
                <!-- Continue from here adding vars to paragraph -->
                <ul>
                    <li>The U.S. score gap between the 90th and 10th percentiles ({{ this.oecdMembersCount }} points) was
                        larger than the score gap
                        across the participating OECD countries on average ({{ this.oecdMembersCount }} points). </li>
                    <li>The U.S. score gap was larger than the gap in 62 education systems and not significantly different
                        from the gap in 18 education systems.
                    </li>
                    <li>Internationally, score gaps between the 90th and 10th percentiles ranged from {{
                        this.oecdMembersCount }} points in Cambodia
                        to {{ this.oecdMembersCount }} points in the Netherlands. </li>
                </ul>
                <p>The figure below shows the threshold (or cut) scores for students at the 10th percentile (the bottom 10
                    percent of students) and at the 90th percentile (the top 10 percent of students). The score gap for each
                    education system is the difference between its 90th and 10th percentile scores. The percentile ranges
                    are specific to each education system's distribution of scores and scores can be compared across
                    education systems.</p>
                <!-- Click on the column headers -->
                <FragmentParagraph v-if="this.currentSection == 'mathematics'" blurbOne=", average score, or difference from the
                    U.S. average score" blurbTwo="2022 average score from
                    largest to smallest" />
                <FragmentParagraph v-if="this.currentSection == 'reading'"
                    blurbOne=", average score, or difference from the U.S. average score" blurbTwo="percentages of 15-year-olds in levels 5 and
        above" />
                <FragmentParagraph v-if="this.currentSection == 'science'" blurbOne="or different performance levels"
                    blurbTwo="percentages of 15-year-olds in levels 5 and
        above" />
                <!-- Chart/Table Component 3 -->
                <ChartTableTab v-if="this.whichSection == '/mathematics/international-comparisons'"
                    :elchart="DynamicChartThree" :eltable="DynamicTableThree" :elnote="DynamicScoreGapDifferent"
                    :elnotefortable="NotesComponent" :elcaptionfig="DynamicFigCaption" figcaptionTitle="Figure M3"
                    figcaptionTableTitle="Table M3" figcaptionBody="mathematics" />
                <ChartTableTab v-if="this.whichSection == '/science/international-comparisons'" :elchart="DynamicChartThree"
                    :eltable="DynamicTableThree" :elnote="DynamicScoreGapDifferent" :elnotefortable="NotesComponent"
                    :elcaptionfig="DynamicFigCaption" figcaptionTitle="Figure S3" figcaptionTableTitle="Table S3"
                    figcaptionBody="scientific" />
                <ChartTableTab v-if="this.whichSection == '/reading/international-comparisons'" :elchart="DynamicChartThree"
                    :eltable="DynamicTableThree" :elnote="DynamicScoreGapDifferent" :elnotefortable="NotesComponent"
                    :elcaptionfig="DynamicFigCaption" figcaptionTitle="Figure R3" figcaptionTableTitle="Table R3"
                    figcaptionBody="reading" />


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
import FigCaption from '../../shared/notes/fig-caption.vue'
import NotesTable1 from '../../shared/notes/notes-table1.vue'
import NotesChart2 from '../../shared/notes/notes-chart2.vue'
import NotesChart3 from '../../shared/notes/notes-chart3.vue'

import { DataService } from '../../services/api/data-service'
import ChartTableTab from '../../shared/navigation/chart-table-tab.vue'
import ChartTableNotab from '../../shared/navigation/chart-table-notab.vue'
import FragmentParagraph from '../../shared/fragments/fragment-paragraph.vue'
import ChartTablePlaceholder from '../../shared/placeholders/chart-table-placeholder.vue'

import TableOne from './tables/table-one.vue'
import TableTwo from './tables/table-two.vue'
import TableThree from './tables/table-three.vue'
import ChartTwo from './charts/chart-two.vue'
import ChartThree from './charts/chart-three.vue'

export default {
    name: 'accordion-international-comparisons',
    components: {
        NotesOne,
        NotesChart2,
        NotesChart3,
        NotesTable1,
        NotesSignificantlyDifferentOne,
        NotesSignificantlyDifferentTwo,
        NotesSignificantlyDifferentThree,
        ChartTableTab,
        ChartTableNotab,
        ChartTablePlaceholder,
        TableOne,
        TableTwo,
        TableThree,
        ChartTwo,
        ChartThree,
        FragmentParagraph
    },
    data() {
        return {
            isHidden: false,
            isStatusActive: true,
            whichSection: '',
            currentSection: '',

            DynamicNotesOne: NotesTable1,
            YetOtherDynamicComponent: NotesSignificantlyDifferentOne,
            DynamicRoundsToZero: NotesChart2,
            DynamicScoreGapDifferent: NotesChart3,
            NotesComponent: NotesSignificantlyDifferentTwo,
            DynamicFigCaption: FigCaption,
            DynamicChartTablePlaceholder: ChartTablePlaceholder,
            DynamicTableOne: TableOne,
            DynamicTableTwo: TableTwo,
            DynamicTableThree: TableThree,
            DynamicChartTwo: ChartTwo,
            DynamicChartThree: ChartThree,
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
            this.trend1 = 'lower'
            this.trend2 = 'higher'
            this.educationsSystemsCount1 = '25'
            this.educationsSystemsCount2 = '43'
            this.educationsSystemsCount3 = '12'
            this.oecdMembersCount = '36'
            this.educationsSystemsCountInList1 = '21'
            this.educationsSystemsCountInList2 = '6'
            this.educationsSystemsCountInList3 = '9'
            this.usAVGScore = '465'
            this.oecdAVGScore = '472'
            this.scaleAVGScoresBlurb = '336 in Cambodia to 575 in Singapore'
            this.CutScore1 = '407.47'
            this.CutScore2 = '625.61'
            this.USPctTopPerformer = '14'
            this.USPctLowPerformer = '20'
            this.USPctTopPerformerThanOECD1 = '14'
            this.USPctTopPerformerThanOECD2 = '7'
            this.OtherReportable = '71'
            this.EducationSystems1 = '64'
            this.EducationSystems2 = '1'
            this.EducationSystems3 = '6'
            this.literacy1 = '23'
            this.literacy2 = '0'
            this.LiteracyEducationSystems1 = '11'
            this.LiteracyEducationSystems2 = '9'
            this.LowPerfOECD1 = '20'
            this.LowPerfOECD2 = '26'
            this.LowPerfUSA1 = '59'
            this.LowPerfUSA2 = '7'
            this.LowPerfUSANotSigD = '7'
            this.LowPerfEndBlurb = '11 percent in Ireland and Singapore to 92 percent in Cambodia.'
        } else if (this.$route.path.includes('/reading')) {
            subScale = 'PVREAD'
            this.currentSection = 'reading'
            this.trend1 = 'higher'
            this.trend2 = 'lower'
            this.educationsSystemsCount1 = '68'
            this.educationsSystemsCount2 = '5'
            this.educationsSystemsCount3 = '7'
            this.oecdMembersCount = '36'
            this.educationsSystemsCountInList1 = '28'
            this.educationsSystemsCountInList2 = '3'
            this.educationsSystemsCountInList3 = '5'
            this.usAVGScore = '504'
            this.oecdAVGScore = '476'
            this.scaleAVGScoresBlurb = '329 in Cambodia to 543 in Singapore'
            this.CutScore1 = '407.47'
            this.CutScore2 = '625.61'
            this.USPctTopPerformer = '14'
            this.USPctLowPerformer = '20'
            this.USPctTopPerformerThanOECD1 = '14'
            this.USPctTopPerformerThanOECD2 = '7'
            this.OtherReportable = '71'
            this.EducationSystems1 = '64'
            this.EducationSystems2 = '1'
            this.EducationSystems3 = '6'
            this.literacy1 = '23'
            this.literacy2 = '0'
            this.LiteracyEducationSystems1 = '11'
            this.LiteracyEducationSystems2 = '9'
            this.LowPerfOECD1 = '20'
            this.LowPerfOECD2 = '26'
            this.LowPerfUSA1 = '59'
            this.LowPerfUSA2 = '7'
            this.LowPerfUSANotSigD = '7'
            this.LowPerfEndBlurb = '11 percent in Ireland and Singapore to 92 percent in Cambodia.'
        } else if (this.$route.path.includes('/science')) {
            subScale = 'PVSCIE'
            this.currentSection = 'science'
            this.trend1 = 'higher'
            this.trend2 = 'lower'
            this.educationsSystemsCount1 = '56'
            this.educationsSystemsCount2 = '9'
            this.educationsSystemsCount3 = '15'
            this.oecdMembersCount = '36'
            this.educationsSystemsCountInList1 = '16'
            this.educationsSystemsCountInList2 = '5'
            this.educationsSystemsCountInList3 = '15'
            this.usAVGScore = '499'
            this.oecdAVGScore = '485'
            this.scaleAVGScoresBlurb = '347 in Cambodia to 561 in Singapore'
            this.CutScore1 = '407.47'
            this.CutScore2 = '625.61'
            this.USPctTopPerformer = '14'
            this.USPctLowPerformer = '20'
            this.USPctTopPerformerThanOECD1 = '14'
            this.USPctTopPerformerThanOECD2 = '7'
            this.OtherReportable = '71'
            this.EducationSystems1 = '64'
            this.EducationSystems2 = '1'
            this.EducationSystems3 = '6'
            this.literacy1 = '23'
            this.literacy2 = '0'
            this.LiteracyEducationSystems1 = '11'
            this.LiteracyEducationSystems2 = '9'
            this.LowPerfOECD1 = '20'
            this.LowPerfOECD2 = '26'
            this.LowPerfUSA1 = '59'
            this.LowPerfUSA2 = '7'
            this.LowPerfUSANotSigD = '7'
            this.LowPerfEndBlurb = '11 percent in Ireland and Singapore to 92 percent in Cambodia.'
        }

        DataService.createTable1(subScale);
        DataService.createTable2(subScale);
        DataService.createTable3(subScale);



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
    
    
    
    
    