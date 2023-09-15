<template>
    <!-- start accoridion content -->
    <div class="accordion-panel">
        <div class="panel" id="panel-s2-m1">
            <input id="mat-s2-1" class="for-panel" type="checkbox" name="panels" checked="checked">
            <label class="item-id" for="mat-s2-1">
                <span class="key-feature">Has there been any change in 15-year-olds' performance in {{ this.currentSection }} over
                    time?</span>
            </label>
            <div class="panel-content">
                <!-- toggle switch between Chart 8 and Chart 9-->
                <p class="display-as for-m8-tier1"><strong>Show results for:</strong>
                    <span @click="toggleElement()" :class="{ active: isStatusActive }" class="table-view-button ">Long Term Trend</span> |
                    <span @click="toggleElement()" :class="{ active: !isStatusActive }" class="table-view-button ">Short Term Trend</span>
                </p>
                <!-- end toggle switch -->



                <!-- Figure/Table Component 4a -->
                <div :class="{ invisible: !isStatusActive }">4a
                    <ChartTableTab v-if="this.whichSection == '/mathematics/trends'" :elchart="DynamicChartTablePlaceholder"
                        :eltable="DynamicChartTablePlaceholder" :elnote="DynamicChartTablePlaceholder"
                        :elcaptionfig="DynamicFigCaption" figcaptionTitle="Figure M4a" figcaptionTableTitle="Table M4a"
                        figcaptionBody="mathematics" />
                    <ChartTableTab v-if="this.whichSection == '/science/trends'" :elchart="DynamicChartTablePlaceholder"
                        :eltable="DynamicChartTablePlaceholder" :elnote="DynamicChartTablePlaceholder"
                        :elcaptionfig="DynamicFigCaption" figcaptionTitle="Figure S4a" figcaptionTableTitle="Table S4a"
                        figcaptionBody="scientific" />
                    <ChartTableTab v-if="this.whichSection == '/reading/trends'" :elchart="DynamicChartTablePlaceholder"
                        :eltable="DynamicChartTablePlaceholder" :elnote="DynamicChartTablePlaceholder"
                        :elcaptionfig="DynamicFigCaption" figcaptionTitle="Figure R4a" figcaptionTableTitle="Table R4a"
                        figcaptionBody="reading" />
                </div>
                <!-- end Figure/Table Component 4 -->

                <div :class="{ invisible: isStatusActive }">4b
                    <ChartTableTab v-if="this.whichSection == '/mathematics/trends'" :elchart="DynamicChartTablePlaceholder"
                        :eltable="DynamicChartTablePlaceholder" :elnote="DynamicChartTablePlaceholder"
                        :elcaptionfig="DynamicFigCaption" figcaptionTitle="Figure M4b" figcaptionTableTitle="Table M4b"
                        figcaptionBody="mathematics" />
                    <ChartTableTab v-if="this.whichSection == '/science/trends'" :elchart="DynamicChartTablePlaceholder"
                        :eltable="DynamicChartTablePlaceholder" :elnote="DynamicChartTablePlaceholder"
                        :elcaptionfig="DynamicFigCaption" figcaptionTitle="Figure S4b" figcaptionTableTitle="Table S4b"
                        figcaptionBody="scientific" />
                    <ChartTableTab v-if="this.whichSection == '/reading/trends'" :elchart="DynamicChartTablePlaceholder"
                        :eltable="DynamicChartTablePlaceholder" :elnote="DynamicChartTablePlaceholder"
                        :elcaptionfig="DynamicFigCaption" figcaptionTitle="Figure R4b" figcaptionTableTitle="Table R4b"
                        figcaptionBody="reading" />
                </div>
            </div>
            <!-- toggle switch -->
            <!-- <p class="display-as for-m4"><strong>Show results for:</strong>
                    <span class="table-view-button active">Long-term trend</span> | <span
                        class="table-view-button ">Short-term trend</span>
                </p> -->
            <!-- end toggle switch -->
            <!-- <p>Voluptatem eum eaque amet illo delectus enim odio consectetur, alias incidunt? Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Quidem blanditiis maiores repudiandae assumenda veniam. Impedit autem
                    rerum nostrum amet ad numquam. Deserunt autem, ipsam sed veniam alias beatae a eveniet?</p>
                <ul>
                    <li>libero facilis nulla, voluptatum assumenda magni sit cumque modi. </li>
                    <li>sit amet consectetur adipisicing elit. Numquam ratione minima</li>
                    <li>molestiae error perferendis minus tempore voluptate quaerat mollitia</li>
                    <li>Laboriosam omnis architecto illum a quos itaque veniam autem, nam</li>
                </ul> -->

            <!-- long-term trend table -->
            <!-- <figure class="table-classic">
                    <figcaption>
                        <strong>Table M4a.</strong> Average scores and changes in average scores of 15-year-old students on
                        the PISA mathematics literacy scale, by education system: 2003 and 2022
                    </figcaption>
                    <div class="table-classic__container" id="tableM4a">
                        <div class="table-control d-flex justify-center">
                            <p><strong>Filter by:</strong></p>
                            <input type="radio" id="m4atbl-all-educations-systems" name="m4a-toggle-one" checked="checked">
                            <label for="m4atbl-all-educations-systems">
                                All education systems
                            </label>
                            <input type="radio" id="m4atbl-oecd-only" name="m4a-toggle-one">
                            <label for="m4atbl-oecd-only">
                                OECD members only
                            </label>
                        </div>
                        <table class="tbl4a" tabindex="0">
                            <caption>

                            </caption>
                            <colgroup>
                                <col>
                                <col>
                                <col>
                                <col>
                            </colgroup>
                            <thead>
                                <tr>
                                    <th><span id="m4a-sort-alpha">Education system <i class="fa fa-chevron-down"></i><i
                                                class="fa fa-chevron-up"></i></span></th>
                                    <th><span id="m4a-sort-2003score">2003 score <i class="fa fa-chevron-down"></i><i
                                                class="fa fa-chevron-up"></i></span></th>
                                    <th><span id="m4a-sort-2022score">2022 score <i class="fa fa-chevron-down"></i><i
                                                class="fa fa-chevron-up"></i></span></th>
                                    <th><span id="m4a-sort-scorediff">Score difference <i class="fa fa-chevron-down"></i><i
                                                class="fa fa-chevron-up"></i></span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th class="country">commodi distinctio</th>
                                    <td class="">422</td>
                                    <td>21</td>
                                    <td>332</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="notes">
                        <p><span class="sig-up" role="img" aria-label="up"><i class="fas fa-caret-up"></i></span> 2022 score
                            is higher than 2003 score at the .05 level of statistical significance.</p>
                        <p><span class="sig-down" role="img" aria-label="down"><i class="fas fa-caret-down"></i></span> 2022
                            score is lower than 2003 score at the .05 level of statistical significance</p>
                        <p><span class="no-sig" role="img" aria-label="diamond"><i class="fa fa-diamond"></i></span> 2022
                            score is not significantly different from 2003 score at the .05 level of statistical
                            significance.</p>
                        <p># Rounds to zero.</p>
                        <p>! Interpret data with caution. Estimate is unstable due to high coefficient of variation (>30
                            percent and ≤50 percent).</p>
                        <p>!! Interpret data with caution. Estimate is unstable because the standard error represents more
                            than 50 percent of the estimate.</p>
                        <p><span class="marker-1"></span> At least 50 percent but less than 75 percent of the 15-year-old
                            population is covered by the PISA sample.</p>
                        <p>NOTE: Data shown for education systems that participated in both cycles of PISA in 2003 and 2022.
                            Scores are reported on a scale from 0 to 1,000. Education systems are marked as OECD countries
                            if they were OECD members in 2022. Italics indicate non-OECD countries and education systems.
                        </p>
                        <p>SOURCE: Organization for Economic Cooperation and Development (OECD), Program for International
                            Student Assessment (PISA), 2003 and 2022.</p>
                        <p><a
                                href="https://nces.ed.gov/surveys/pisa/idepisa/report.aspx?p=1%C3%81RMS%C3%811%C3%8120183%C3%8020153%C3%8020123%C3%8020093%C3%8020063%C3%8020033%C3%81PVMATH%C3%81TOTAL%C3%81AUS%C3%80AUT%C3%80BEL%C3%80CAN%C3%80CHL%C3%80COL%C3%80CZE%C3%80DNK%C3%80EST%C3%80FIN%C3%80FRA%C3%80DEU%C3%80GRC%C3%80HUN%C3%80ISL%C3%80IRL%C3%80ISR%C3%80ITA%C3%80JPN%C3%80KOR%C3%80LVA%C3%80LUX%C3%80MEX%C3%80NLD%C3%80NZL%C3%80NOR%C3%80POL%C3%80PRT%C3%80SVK%C3%80SVN%C3%80ESP%C3%80SWE%C3%80CHE%C3%80TUR%C3%80GBR%C3%80USA%C3%80ALB%C3%80DZA%C3%80ARG%C3%80AZE%C3%80BAK%C3%80BLR%C3%80BIH%C3%80BRA%C3%80BRN%C3%80QCH%C3%80QCI%C3%80ARG01%C3%80BGR%C3%80TAP%C3%80CRI%C3%80HRV%C3%80QCY%C3%80DOM%C3%80ARE03%C3%80GEO%C3%80HKG%C3%80IDN%C3%80JOR%C3%80KAZ%C3%80KSV%C3%80KGZ%C3%80LBN%C3%80LIE%C3%80LTU%C3%80MAC%C3%80MYS%C3%80MLT%C3%80MDA%C3%80MNE%C3%80MAR%C3%80MKD%C3%80PAN%C3%80PER%C3%80PHL%C3%80QAT%C3%80ROU%C3%80RUS%C3%80SAU%C3%80YUG%C3%80SRB%C3%80QCN%C3%80SGP%C3%80THA%C3%80TTO%C3%80TUN%C3%80UKR%C3%80ARE%C3%80URY%C3%80VNM%C3%81MN%C3%82MN%C3%81Y%C3%82J%C3%810%C3%810%C3%8137%C3%81N&Lang=1033">See
                                details for this data and perform your own analyses in the PISA Data Explorer</a>.</p>
                    </div>
                </figure> -->
            <!-- short-term trend table -->
            <!-- <figure class="table-classic">
                    <figcaption>
                        <strong>Table M4b.</strong> Average scores and changes in average scores of 15-year-old students on
                        the PISA mathematics literacy scale, by education system: 2018 and 2022
                    </figcaption>
                    <div class="table-classic__container" id="tableM4b">
                        <div class="table-control d-flex justify-center">
                            <p><strong>Filter by:</strong></p>
                            <input type="radio" id="m4btbl-all-educations-systems" name="m4b-toggle-one" checked="checked">
                            <label for="m4btbl-all-educations-systems">
                                All education systems
                            </label>
                            <input type="radio" id="m4btbl-oecd-only" name="m4b-toggle-one">
                            <label for="m4btbl-oecd-only">
                                OECD members only
                            </label>
                        </div>
                        <table class="tbl4b" tabindex="0">
                            <caption>

                            </caption>
                            <colgroup>
                                <col>
                                <col>
                                <col>
                                <col>
                            </colgroup>
                            <thead>
                                <tr>
                                    <th><span id="m4b-sort-alpha">Education system <i class="fa fa-chevron-down"></i><i
                                                class="fa fa-chevron-up"></i></span></th>
                                    <th><span id="m4b-sort-2018score">2018 score <i class="fa fa-chevron-down"></i><i
                                                class="fa fa-chevron-up"></i></span></th>
                                    <th><span id="m4b-sort-2022score">2022 score <i class="fa fa-chevron-down"></i><i
                                                class="fa fa-chevron-up"></i></span></th>
                                    <th><span id="m4b-sort-scorediff">Score difference <i class="fa fa-chevron-down"></i><i
                                                class="fa fa-chevron-up"></i></span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th class="country">commodi distinctio</th>
                                    <td class="">422</td>
                                    <td>21</td>
                                    <td>332</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="notes">
                        <p><span class="sig-up" role="img" aria-label="up"><i class="fas fa-caret-up"></i></span> 2022 score
                            is higher than 2018 score at the .05 level of statistical significance.</p>
                        <p><span class="sig-down" role="img" aria-label="down"><i class="fas fa-caret-down"></i></span> 2022
                            score is lower than 2018 score at the .05 level of statistical significance</p>
                        <p><span class="no-sig" role="img" aria-label="diamond"><i class="fa fa-diamond"></i></span> 2022
                            score is not significantly different from 2018 score at the .05 level of statistical
                            significance.</p>
                        <p># Rounds to zero.</p>
                        <p>! Interpret data with caution. Estimate is unstable due to high coefficient of variation (>30
                            percent and ≤50 percent).</p>
                        <p>!! Interpret data with caution. Estimate is unstable because the standard error represents more
                            than 50 percent of the estimate.</p>
                        <p><span class="marker-1"></span> At least 50 percent but less than 75 percent of the 15-year-old
                            population is covered by the PISA sample.</p>
                        <p>NOTE: Data shown for education systems that participated in both cycles of PISA in 2018 and 2022.
                            Scores are reported on a scale from 0 to 1,000. Education systems are marked as OECD countries
                            if they were OECD members in 2022. Italics indicate non-OECD countries and education systems.
                        </p>
                        <p>SOURCE: Organization for Economic Cooperation and Development (OECD), Program for International
                            Student Assessment (PISA), 2018 and 2022.</p>
                        <p><a
                                href="https://nces.ed.gov/surveys/pisa/idepisa/report.aspx?p=1%C3%81RMS%C3%811%C3%8120183%C3%8020153%C3%8020123%C3%8020093%C3%8020063%C3%8020033%C3%81PVMATH%C3%81TOTAL%C3%81AUS%C3%80AUT%C3%80BEL%C3%80CAN%C3%80CHL%C3%80COL%C3%80CZE%C3%80DNK%C3%80EST%C3%80FIN%C3%80FRA%C3%80DEU%C3%80GRC%C3%80HUN%C3%80ISL%C3%80IRL%C3%80ISR%C3%80ITA%C3%80JPN%C3%80KOR%C3%80LVA%C3%80LUX%C3%80MEX%C3%80NLD%C3%80NZL%C3%80NOR%C3%80POL%C3%80PRT%C3%80SVK%C3%80SVN%C3%80ESP%C3%80SWE%C3%80CHE%C3%80TUR%C3%80GBR%C3%80USA%C3%80ALB%C3%80DZA%C3%80ARG%C3%80AZE%C3%80BAK%C3%80BLR%C3%80BIH%C3%80BRA%C3%80BRN%C3%80QCH%C3%80QCI%C3%80ARG01%C3%80BGR%C3%80TAP%C3%80CRI%C3%80HRV%C3%80QCY%C3%80DOM%C3%80ARE03%C3%80GEO%C3%80HKG%C3%80IDN%C3%80JOR%C3%80KAZ%C3%80KSV%C3%80KGZ%C3%80LBN%C3%80LIE%C3%80LTU%C3%80MAC%C3%80MYS%C3%80MLT%C3%80MDA%C3%80MNE%C3%80MAR%C3%80MKD%C3%80PAN%C3%80PER%C3%80PHL%C3%80QAT%C3%80ROU%C3%80RUS%C3%80SAU%C3%80YUG%C3%80SRB%C3%80QCN%C3%80SGP%C3%80THA%C3%80TTO%C3%80TUN%C3%80UKR%C3%80ARE%C3%80URY%C3%80VNM%C3%81MN%C3%82MN%C3%81Y%C3%82J%C3%810%C3%810%C3%8137%C3%81N&Lang=1033">See
                                details for this data and perform your own analyses in the PISA Data Explorer</a>.</p>
                    </div>
                </figure> -->
        </div>
        <div class="panel" id="panel-s2-m2">
        <input id="mat-s2-2" class="for-panel" type="checkbox" name="panels">
        <label class="item-id" for="mat-s2-2">
            <span class="key-feature">Has there been any change over time in the {{ this.currentSection }} performance of U.S.
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
            <ChartTableTab v-if="this.whichSection == '/mathematics/trends'"
                :elchart="DynamicChartTablePlaceholder" :eltable="DynamicChartTablePlaceholder"
                :elnote="DynamicChartTablePlaceholder" :elcaptionfig="DynamicFigCaption" figcaptionTitle="Figure M5"
                figcaptionTableTitle="Table M5" figcaptionBody="mathematics" />
            <ChartTableTab v-if="this.whichSection == '/science/trends'"
                :elchart="DynamicChartTablePlaceholder" :eltable="DynamicChartTablePlaceholder"
                :elnote="DynamicChartTablePlaceholder" :elcaptionfig="DynamicFigCaption" figcaptionTitle="Figure S5"
                figcaptionTableTitle="Table S5" figcaptionBody="scientific" />
            <ChartTableTab v-if="this.whichSection == '/reading/trends'"
                :elchart="DynamicChartTablePlaceholder" :eltable="DynamicChartTablePlaceholder"
                :elnote="DynamicChartTablePlaceholder" :elcaptionfig="DynamicFigCaption" figcaptionTitle="Figure R5"
                figcaptionTableTitle="Table R5" figcaptionBody="reading" />
            <!-- end Figure/Table Component 5 -->
            <!-- toggle switch -->
            <!-- <p class="display-as for-m5"><strong>Display as:</strong>
                    <span class="graph-view-button active"><i class="fa-solid fa-chart-simple"
                            aria-hidden="true"></i>Graph</span> | <span class="table-view-button "><i
                            class="fa-solid fa-table" aria-hidden="true"></i>Table</span>
                </p> -->
            <!-- end toggle switch -->
            <!-- <figure class="chart chart-5"> -->
            <!-- <figcaption>
                        <strong>Figure M5.</strong> Average score and selected percentile scores of U.S. 15-year-old
                        students on the PISA mathematics literacy scale: Selected years 2003&ndash;2022
                    </figcaption> -->
            <!-- chart m5 goes here -->
            <!-- <svg></svg> -->

            <!-- <div class="notes">
                        <p>* Significantly different (<em>p</em> &lt; .05) from the 2022 score at the .05 level of
                            statistical significance.</p>
                        <p>NOTE: This chart shows the threshold (or cut) score for the following: (a) 10th percentile—the
                            bottom 10 percent of students; (b) 25th percentile—the bottom 25 percent of students; (c) 75th
                            percentile—the top 25 percent of students; (d) 90th percentile—the top 10 percent of students.
                            Scores are reported on a scale from 0 to 1,000. Although mathematics was assessed in 2000,
                            because the mathematics framework was revised for PISA 2003, it is possible to look at changes
                            in mathematics only from 2003 forward.</p>
                        <p>SOURCE: Organization for Economic Cooperation and Development (OECD), Program for International
                            Student Assessment (PISA), 2003, 2006, 2009, 2012, 2015, 2018, and 2022.</p>
                        <p><a
                                href="https://nces.ed.gov/surveys/pisa/idepisa/report.aspx?p=1%C3%81RMS%C3%811%C3%8120183%C3%8020153%C3%8020123%C3%8020093%C3%8020063%C3%8020033%C3%81PVMATH%C3%81TOTAL%C3%81USA%C3%81MN%C3%82MN%C3%80PC%C3%82P1%C3%80PC%C3%82P2%C3%80PC%C3%82P5%C3%80PC%C3%82P7%C3%80PC%C3%82P9%C3%81Y%C3%82J%C3%810%C3%810%C3%8137%C3%81N&Lang=1033">See
                                details for this data and perform your own analyses in the PISA Data Explorer</a>.</p>
                    </div> -->
            <!-- </figure> -->

            <!-- table m5 goes here -->
            <!-- <figure class="table-classic">
                    <figcaption>
                        <strong>Table M5.</strong> Average score and selected percentile scores of U.S. 15-year-old students
                        on the PISA mathematics literacy scale: Selected years 2003&ndash;2022
                    </figcaption>
                    <div class="table-classic__container" id="tableM5">

                        <table class="tblm5" tabindex="0">
                            <caption>

                            </caption>
                            <colgroup>
                                <col>
                                <col>
                                <col>
                                <col>
                                <col>
                                <col>
                                <col>
                                <col>
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>Average score and selected percentiles</th>
                                    <th>2003 score</th>
                                    <th>2006 score</th>
                                    <th>2009 score</th>
                                    <th>2012 score</th>
                                    <th>2015 score</th>
                                    <th>2018 score</th>
                                    <th>2022 score</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th class="country">commodi distinctio</th>
                                    <td>21</td>
                                    <td>332</td>
                                    <td>17</td>
                                    <td>22</td>
                                    <td>332</td>
                                    <td>17</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="notes">
                        <p>* Significantly different (<em>p</em> &lt; .05) from the 2022 score at the .05 level of
                            statistical significance.</p>
                        <p>NOTE: This chart shows the threshold (or cut) score for the following: (a) 10th percentile—the
                            bottom 10 percent of students; (b) 25th percentile—the bottom 25 percent of students; (c) 75th
                            percentile—the top 25 percent of students; (d) 90th percentile—the top 10 percent of students.
                            Scores are reported on a scale from 0 to 1,000. Although mathematics was assessed in 2000,
                            because the mathematics framework was revised for PISA 2003, it is possible to look at changes
                            in mathematics only from 2003 forward.</p>
                        <p>SOURCE: Organization for Economic Cooperation and Development (OECD), Program for International
                            Student Assessment (PISA), 2003, 2006, 2009, 2012, 2015, 2018, and 2022.</p>
                        <p><a
                                href="https://nces.ed.gov/surveys/pisa/idepisa/report.aspx?p=1%C3%81RMS%C3%811%C3%8120183%C3%8020153%C3%8020123%C3%8020093%C3%8020063%C3%8020033%C3%81PVMATH%C3%81TOTAL%C3%81USA%C3%81MN%C3%82MN%C3%80PC%C3%82P1%C3%80PC%C3%82P2%C3%80PC%C3%82P5%C3%80PC%C3%82P7%C3%80PC%C3%82P9%C3%81Y%C3%82J%C3%810%C3%810%C3%8137%C3%81N&Lang=1033">See
                                details for this data and perform your own analyses in the PISA Data Explorer</a>.</p>
                    </div>
                </figure> -->
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

import { DataService } from '../../services/api/data-service';
import ChartTableTab from '../navigation/chart-table-tab.vue';
import ChartTablePlaceholder from '../charts/chart-table-placeholder.vue'

export default {
    name: 'accordion-trends-student-achievement',
    components: {
        NotesOne,
        NotesSignificantlyDifferentOne,
        NotesSignificantlyDifferentTwo,
        NotesSignificantlyDifferentThree,
        ChartTableTab,
        ChartTablePlaceholder,
    },
    data() {
        return {
            isHidden: false,
            isStatusActive: true,
            whichSection: '',
            currentSection: '',

            DynamicNotesOne: NotesOne,
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
    
    
    
    
    