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

                <!-- toggle switch between Chart 8 and Chart 9-->
                <p class="display-as for-m8-tier1"><strong>Show results for:</strong>
                    <span @click="toggleElement()" :class="{ active: isStatusActive }" class="table-view-button ">Long Term
                        Trend</span> |
                    <span @click="toggleElement()" :class="{ active: !isStatusActive }" class="table-view-button ">Short
                        Term Trend</span>
                </p>
                <!-- end toggle switch -->
                <p><strong>PISA 2022 literacy scores can be compared to scores from previous cycles. Although the first PISA
                        cycle was in 2000, the PISA science framework was revised in 2006. Because of resulting changes in
                        the framework, the earliest cycle to which 2022 scores can be compared is 2006. Compared to the
                        earliest comparable PISA score in science, the average science literacy score of U.S. 15-year-olds
                        in 2022 (499) was not significantly different from the average score in 2006 (489).</strong></p>
                <ul>
                    <li>Among the 50 other education systems that participated in both 2006 and 2022, there were 10
                        education
                        systems that reported higher average science literacy scores in 2022 than in 2006. In these
                        education
                        systems, score increases from 2006 to 2022 ranged from 10 points in Portugal to 83 points in Qatar.
                    </li>
                    <li>In 23 education systems, average science literacy scores for 15-year-olds were lower in 2022 than in
                        2006. In these education systems, score decreases from 2006 to 2022 ranged from 8 points in Norway
                        to 52 points in Finland </li>
                </ul>

                <!-- Click on the column headers -->
                <FragmentParagraph v-if="this.currentSection == 'mathematics'" blurbOne=", average score, or difference from the
                    U.S. average score" blurbTwo="2022–2006 difference in average score" />
                <FragmentParagraph v-if="this.currentSection == 'reading'"
                    blurbOne=", average score, or difference from the U.S. average score" blurbTwo="percentages of 15-year-olds in levels 5 and
        above" />
                <FragmentParagraph v-if="this.currentSection == 'science'"
                    blurbOne="2006 score, 2022 score, or 2022–2006 score difference." blurbTwo="percentages of 15-year-olds in levels 5 and
        above" />
                <!-- Figure/Table Component 4a -->
                <div :class="{ invisible: !isStatusActive }">4a
                    <ChartTableNotab v-if="this.whichSection == '/mathematics/trends'" :eltable="DynamicTableFourA"
                        :elnote="YetOtherDynamicComponent" :elcaptionfig="DynamicFigCaption"
                        figcaptionTableTitle="Table M4a" figcaptionBody="mathematics" figureClassTable="table-1" />
                    <ChartTableNotab v-if="this.whichSection == '/science/trends'" :eltable="DynamicTableFourA"
                        :elnote="YetOtherDynamicComponent" :elcaptionfig="DynamicFigCaption"
                        figcaptionTableTitle="Table S4a" figcaptionBody="scientific" figureClassTable="table-1" />
                    <ChartTableNotab v-if="this.whichSection == '/reading/trends'" :eltable="DynamicTableFourA"
                        :elnote="YetOtherDynamicComponent" :elcaptionfig="DynamicFigCaption"
                        figcaptionTableTitle="Table R4a" figcaptionBody="reading" figureClassTable="table-1" />
                </div>
                <!-- end Figure/Table Component 4 -->

                <div :class="{ invisible: isStatusActive }">4b
                    <ChartTableNotab v-if="this.whichSection == '/mathematics/trends'" :eltable="DynamicTableFourB"
                        :elnote="YetOtherDynamicComponent" :elcaptionfig="DynamicFigCaption"
                        figcaptionTableTitle="Table M4b" figcaptionBody="mathematics" figureClassTable="table-1" />
                    <ChartTableNotab v-if="this.whichSection == '/science/trends'" :eltable="DynamicTableFourB"
                        :elnote="YetOtherDynamicComponent" :elcaptionfig="DynamicFigCaption"
                        figcaptionTableTitle="Table S4b" figcaptionBody="scientific" figureClassTable="table-1" />
                    <ChartTableNotab v-if="this.whichSection == '/reading/trends'" :eltable="DynamicTableFourB"
                        :elnote="YetOtherDynamicComponent" :elcaptionfig="DynamicFigCaption"
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
                <p><strong>PISA 2022 scores at selected percentiles can be compared to percentile scores from previous
                        cycles. Although the first PISA cycle was in 2000, the PISA science framework was revised in 2006.
                        Because of resulting changes in the framework, the earliest cycle to which 2022 scores can be
                        compared is 2006. In 2022, U.S. students at the 75th and 90th percentiles performed, on average,
                        higher in science literacy than U.S. students in the same percentile groups in 2012, and students at
                        the 90th percentile also scored higher than in 2015. U.S. students at the 10th percentile scored
                        lower in 2022 compared to 2018, 2012, and 2009. No significant differences were observed for the
                        average science cut scores associated with the 25th percentile group in 2022 and in any of the
                        preceding cycles.</strong></p>
                <ul>
                    <li>Looking at the distribution of U.S. scores in science literacy in 2022, the cut scores associated
                        with the 90th percentile (639) and the 75th percentile (577) were higher than the corresponding cut
                        scores at the 90th percentile (619) and the 75th percentile (563) in 2012. The 90th percentile cut
                        score in 2022 was also higher than in 2015 (626). There were no significant differences at the 90th
                        and 75th cut scores in 2022 compared to the corresponding cut scores in 2018, 2009, and 2006. </li>
                    <li>The cut score associated with the U.S. 10th percentile in 2022 (357) was lower than the cut scores
                        in 2018 (371), 2012 (377), and 2009 (374). There were no significant differences between the U.S.
                        10th percentile cut score in 2022 and the corresponding cut scores in 2015 and 2006</li>
                </ul>
                <p>The figure and table views below show the threshold (or cut) score for the following: (a) 10th
                    percentile—the bottom 10 percent of students; (b) 25th percentile—the bottom 25 percent of students; (c)
                    75th percentile—the top 25 percent of students; (d) 90th percentile—the top 10 percent of students.</p>
                <!-- Figure/Table Component 5 -->
                <ChartTableTab v-if="this.whichSection == '/mathematics/trends'" :elchart="DynamicChartFive"
                    :eltable="DynamicTableFive" :elnote="YetOtherDynamicComponent" :elnotefortable="NotesComponent"
                    :elcaptionfig="DynamicFigCaption" figcaptionTitle="Figure M5" figcaptionTableTitle="Table M5"
                    figcaptionBody="mathematics" />
                <ChartTableTab v-if="this.whichSection == '/science/trends'" :elchart="DynamicChartFive"
                    :eltable="DynamicTableFive" :elnote="YetOtherDynamicComponent" :elnotefortable="NotesComponent"
                    :elcaptionfig="DynamicFigCaption" figcaptionTitle="Figure S5" figcaptionTableTitle="Table S5"
                    figcaptionBody="scientific" />
                <ChartTableTab v-if="this.whichSection == '/reading/trends'" :elchart="DynamicChartFive"
                    :eltable="DynamicTableFive" :elnote="YetOtherDynamicComponent" :elnotefortable="NotesComponent"
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
    
    
    
    
    