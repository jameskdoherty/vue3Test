<template>
    <!-- start accoridion content -->
    
    <div class="accordion-panel">
        <div class="panel" id="panel-s1-m1">
            <input id="mat-s1-1" class="for-panel" type="checkbox" name="panels" checked="checked">
            <label class="item-id" for="mat-s1-1">
                <span class="key-feature">How does the performance of U.S. 15-year-olds in mathematics compare
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
                <figure class="table-1">
                    <figcaption>
                        <strong>Table M1.</strong> Average scores of 15-year-old students on the PISA mathematics literacy
                        scale, by education system: 2022
                    </figcaption>
                    <div class="table-control d-flex justify-center">
                        <p><strong>Filter by:</strong></p>
                        <input type="radio" id="all-education-systems" name="m1-toggle-one" href="javascript:void(0)"
                            onclick="chartreset()" checked="checked">
                        <label for="all-education-systems">
                            All education systems
                        </label>
                        <input type="radio" id="oecd-only" name="m1-toggle-one" href="javascript:void(0)"
                            onclick="oecdonly()">
                        <label for="oecd-only">
                            OECD members only
                        </label>
                    </div>
                    <div id="chart-area" class="d-flex flex-wrap justify-center" tabindex="1"
                        aria-label="Average scores on the PISA mathematics literacy scale, by education system: 2022">
                        <div id="area-left">
                            <div class="hdr">
                                <span class="esys">Education system <a href="javascript:void(0)" onclick="alpha(1)"
                                        onkeydown="alpha(1)" tabindex="1"><i class="fa fa-chevron-down"></i></a><a
                                        href="javascript:void(0)" onclick="alpha()" onkeydown="alpha()" tabindex="1"><i
                                            class="fa fa-chevron-up"></i></a></span>
                                <span class="mean" id="mn">Average<br>score <a href="javascript:void(0)" onclick="scored()"
                                        onkeydown="scored()" tabindex="1"><i class="fa fa-chevron-down"></i></a><a
                                        href="javascript:void(0)" onclick="scored(1)" onkeydown="scored(1)" tabindex="1"><i
                                            class="fa fa-chevron-up"></i></a></span>
                                <span class="mean" id="diff">Difference from<br>U.S. average score <a
                                        href="javascript:void(0)" onclick="difference()" onkeydown="difference()"
                                        tabindex="1"><i class="fa fa-chevron-down"></i></a><a href="javascript:void(0)"
                                        onclick="difference(1)" onkeydown="difference(1)" tabindex="1"><i
                                            class="fa fa-chevron-up"></i></a></span>
                            </div>
                        </div>
                        <div id="area-right">
                            <div class="hdr">
                                <span class="esys">Education system</span>
                                <span class="mean" id="mn">Average<br>score</span>
                                <span class="mean" id="diff">Difference from<br>U.S. average score</span>
                            </div>
                        </div>
                        <div id="notes">
                            <p><span class="sig-up" role="img" aria-label="up"><i class="fas fa-caret-up"></i></span>
                                Average score is higher than U.S. average score at the .05 level of statistical
                                significance.</p>
                            <p><span class="sig-down" role="img" aria-label="down"><i class="fas fa-caret-down"></i></span>
                                Average score is lower than U.S. average score at the .05 level of statistical significance.
                            </p>
                            <p><span class="no-sig" role="img" aria-label="diamond"><i class="fa fa-diamond"></i></span>
                                Average score is not significantly different from U.S. average score at the .05 level of
                                statistical significance.</p>
                            <p><span class="marker-1"></span> At least 50 percent but less than 75 percent of the
                                15-year-old population is covered by the PISA sample.</p>
                            <p><span class="marker-2"></span> Less than 50 percent of the 15-year-old population is covered
                                by the PISA sample.</p>
                            <p>NOTE: Scores are reported on a scale from 0 to 1,000. Education systems are marked as OECD
                                countries if they were OECD members in 2022. The OECD average is the average of the national
                                averages of the OECD member countries, with each country weighted equally. Italics indicate
                                non-OECD countries and education systems. B-S-J-Z (China) refers to the four PISA
                                participating China provinces: Beijing, Shanghai, Jiangsu, and Zhejiang. Although Vietnam
                                participated in PISA 2018, technical problems with its data prevent results from being
                                discussed in this report.</p>
                            <p>SOURCE: Organization for Economic Cooperation and Development (OECD), Program for
                                International Student Assessment (PISA), 2022.</p>
                            <p><a
                                    href="https://nces.ed.gov/surveys/pisa/idepisa/report.aspx?p=1%C3%81RMS%C3%811%C3%8120183%C3%81PVMATH%C3%81TOTAL%C3%81IN3%C3%80IN2%C3%80AUS%C3%80AUT%C3%80BEL%C3%80CAN%C3%80CHL%C3%80COL%C3%80CZE%C3%80DNK%C3%80EST%C3%80FIN%C3%80FRA%C3%80DEU%C3%80GRC%C3%80HUN%C3%80ISL%C3%80IRL%C3%80ISR%C3%80ITA%C3%80JPN%C3%80KOR%C3%80LVA%C3%80LUX%C3%80MEX%C3%80NLD%C3%80NZL%C3%80NOR%C3%80POL%C3%80PRT%C3%80SVK%C3%80SVN%C3%80ESP%C3%80SWE%C3%80CHE%C3%80TUR%C3%80GBR%C3%80USA%C3%80ALB%C3%80DZA%C3%80ARG%C3%80AZE%C3%80BAK%C3%80BLR%C3%80BIH%C3%80BRA%C3%80BRN%C3%80QCH%C3%80QCI%C3%80ARG01%C3%80BGR%C3%80TAP%C3%80CRI%C3%80HRV%C3%80QCY%C3%80DOM%C3%80ARE03%C3%80GEO%C3%80HKG%C3%80IDN%C3%80JOR%C3%80KAZ%C3%80KSV%C3%80KGZ%C3%80LBN%C3%80LIE%C3%80LTU%C3%80MAC%C3%80MYS%C3%80MLT%C3%80MDA%C3%80MNE%C3%80MAR%C3%80MKD%C3%80PAN%C3%80PER%C3%80PHL%C3%80QAT%C3%80ROU%C3%80RUS%C3%80SAU%C3%80YUG%C3%80SRB%C3%80QCN%C3%80SGP%C3%80THA%C3%80TTO%C3%80TUN%C3%80UKR%C3%80ARE%C3%80URY%C3%80VNM%C3%81MN%C3%82MN%C3%80RP%C3%82RP%C3%81Y%C3%82J%C3%810%C3%810%C3%8137%C3%81N&Lang=1033">See
                                    details for this data and perform your own analyses in the PISA Data Explorer</a>.</p>
                        </div>
                    </div>
                </figure>
            </div>
        </div>
        <div class="panel" id="panel-s1-m2">
            <input id="mat-s1-2" class="for-panel" type="checkbox" name="panels">
            <label class="item-id" for="mat-s1-2">
                <span class="key-feature">What is the percentage of 15-year-olds reaching the PISA proficiency level in
                    mathematics?</span>
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
                <!-- toggle switch -->
                <p class="display-as for-m2"><strong>Display as:</strong>
                    <span class="graph-view-button active"><i class="fa-solid fa-chart-simple"
                            aria-hidden="true"></i>Graph</span> | <span class="table-view-button "><i
                            class="fa-solid fa-table" aria-hidden="true"></i>Table</span>
                </p>
                <!-- end toggle switch -->
                <figure class="chart chart-2">
                    <figcaption>
                        <strong>Figure M2.</strong> Percentage of 15-year-old students performing below level 2 or reaching
                        mathematics literacy proficiency levels 5 and above, by education system: 2022
                    </figcaption>

                    <div class="chart__controller d-flex">
                        <div class="grouping">
                            <span class="directive">Sort by:</span>
                            <button id="m2-sort-alpha" class="button-sort">Education system <span class=""></span></button>
                            <button id="m2-sort-below-two" class="button-sort opt-2">Below level 2 <span
                                    class=""></span></button>
                            <button id="m2-sort-five-and-below" class="button-sort opt-3">Level 5 and above <span
                                    class=""></span></button>
                        </div>
                        <div class="grouping">
                            <span class="directive">Filter by:</span>
                            <input type="radio" name="m2-toggle-one" id="filter-all" checked="checked">
                            <label for="filter-all">
                                All education systems
                            </label>
                            <input type="radio" name="m2-toggle-one" id="filter-oecd-only">
                            <label for="filter-oecd-only">
                                OECD members only
                            </label>
                        </div>
                    </div>
                    <div class="chart__graphic">
                        <svg class="left-column">
                            <g></g>
                        </svg>
                        <svg class="right-column">
                            <g></g>
                        </svg>
                    </div>
                    <div class="notes">
                        <p># Rounds to zero.</p>
                        <p>! Interpret data with caution. Estimate is unstable due to high coefficient of variation (> 30
                            percent and ≤ 50 percent).</p>
                        <p>!! Interpret data with caution. Estimate is unstable because the standard error represents more
                            than 50 percent of the estimate.</p>
                        <p>* Significantly different (<em>p</em> &lt; .05) from the U.S. percentage at the .05 level of
                            statistical significance.</p>
                        <p><span class="marker-1"></span> At least 50 percent but less than 75 percent of the 15-year-old
                            population is covered by the PISA sample.</p>
                        <p><span class="marker-2"></span> Less than 50 percent of the 15-year-old population is covered by
                            the PISA sample.</p>
                        <p><strong>NOTE:</strong> To reach a particular proficiency level, a student must correctly answer a
                            majority of items at that level. Students were classified into science proficiency levels
                            according to their scores. Exact cut scores are as follows: Below Level 2 (a score less than
                            409.54); Levels 5 and above is a score equal to or greater than 633.33. See descriptions of each
                            proficiency level here. Scores are reported on a scale from 0 to 1,000. Education systems are
                            marked as OECD countries if they were OECD members in 2022. The OECD average is the average of
                            the national percentages of the OECD member countries, with each country weighted equally.
                            Italics indicate non-OECD countries and education systems. B-S-J-Z (China) refers to the four
                            PISA participating China provinces: Beijing, Shanghai, Jiangsu, and Zhejiang. Although Vietnam
                            participated in PISA 2018, technical problems with its data prevent results from being discussed
                            in this report.</p>
                        <p><strong>SOURCE:</strong> Organization for Economic Cooperation and Development (OECD), Program
                            for International Student Assessment (PISA), 2022.</p>
                        <p><a
                                href="https://nces.ed.gov/surveys/pisa/idepisa/report.aspx?p=1%C3%81RMS%C3%811%C3%8120183%C3%81PVMATH%C3%81BMMATH%C3%81IN3%C3%80IN2%C3%80AUS%C3%80AUT%C3%80BEL%C3%80CAN%C3%80CHL%C3%80COL%C3%80CZE%C3%80DNK%C3%80EST%C3%80FIN%C3%80FRA%C3%80DEU%C3%80GRC%C3%80HUN%C3%80ISL%C3%80IRL%C3%80ISR%C3%80ITA%C3%80JPN%C3%80KOR%C3%80LVA%C3%80LUX%C3%80MEX%C3%80NLD%C3%80NZL%C3%80NOR%C3%80POL%C3%80PRT%C3%80SVK%C3%80SVN%C3%80ESP%C3%80SWE%C3%80CHE%C3%80TUR%C3%80GBR%C3%80USA%C3%80ALB%C3%80DZA%C3%80ARG%C3%80AZE%C3%80BAK%C3%80BLR%C3%80BIH%C3%80BRA%C3%80BRN%C3%80QCH%C3%80QCI%C3%80ARG01%C3%80BGR%C3%80TAP%C3%80CRI%C3%80HRV%C3%80QCY%C3%80DOM%C3%80ARE03%C3%80GEO%C3%80HKG%C3%80IDN%C3%80JOR%C3%80KAZ%C3%80KSV%C3%80KGZ%C3%80LBN%C3%80LIE%C3%80LTU%C3%80MAC%C3%80MYS%C3%80MLT%C3%80MDA%C3%80MNE%C3%80MAR%C3%80MKD%C3%80PAN%C3%80PER%C3%80PHL%C3%80QAT%C3%80ROU%C3%80RUS%C3%80SAU%C3%80YUG%C3%80SRB%C3%80QCN%C3%80SGP%C3%80THA%C3%80TTO%C3%80TUN%C3%80UKR%C3%80ARE%C3%80URY%C3%80VNM%C3%81MN%C3%82MN%C3%80RP%C3%82RP%C3%81Y%C3%82J%C3%810%C3%810%C3%8137%C3%81N&Lang=1033">See
                                details for this data and perform your own analyses in the PISA Data Explorer</a>.</p>
                    </div>
                </figure>
                <figure class="table-classic">
                    <figcaption>
                        <strong>Table M2.</strong> Percentage of 15-year-old students performing below level 2, at
                        mathematics literacy proficiency levels 2, 3, and 4, or reaching levels 5 and above, by education
                        system: 2022
                    </figcaption>
                    <div class="table-classic__container" id="tableM2">
                        <div class="table-control d-flex justify-center">
                            <p><strong>Filter by:</strong></p>
                            <input type="radio" id="m2tbl-all-educations-systems" name="m2-toggle-one" checked="checked">
                            <label for="m2tbl-all-educations-systems">
                                All education systems
                            </label>
                            <input type="radio" id="m2tbl-oecd-only" name="m2-toggle-one">
                            <label for="m2tbl-oecd-only">
                                OECD members only
                            </label>
                        </div>
                        <table class="tbl2" tabindex="0">
                            <caption>

                            </caption>
                            <colgroup>
                                <col>
                                <col>
                                <col>
                                <col>
                                <col>
                                <col>
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>Education system</th>
                                    <th>Below level 2</th>
                                    <th>Level 2</th>
                                    <th>Level 3</th>
                                    <th>Level 4</th>
                                    <th>Level 5 and above</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th class="country">commodi distinctio</th>
                                    <td class="">422</td>
                                    <td>21</td>
                                    <td>332</td>
                                    <td>17</td>
                                    <td>22</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="notes">
                        <p># Rounds to zero.</p>
                        <p>! Interpret data with caution. Estimate is unstable due to high coefficient of variation (> 30
                            percent and ≤ 50 percent).</p>
                        <p>!! Interpret data with caution. Estimate is unstable because the standard error represents more
                            than 50 percent of the estimate.</p>
                        <p>* Significantly different (<em>p</em> &lt; .05) from the U.S. percentage at the .05 level of
                            statistical significance.</p>
                        <p><span class="marker-1"></span> At least 50 percent but less than 75 percent of the 15-year-old
                            population is covered by the PISA sample.</p>
                        <p><span class="marker-2"></span> Less than 50 percent of the 15-year-old population is covered by
                            the PISA sample.</p>
                        <p><strong>NOTE:</strong> To reach a particular proficiency level, a student must correctly answer a
                            majority of items at that level. Students were classified into science proficiency levels
                            according to their scores. Exact cut scores are as follows: Below Level 2 (a score less than
                            409.54); Levels 5 and above is a score equal to or greater than 633.33. See descriptions of each
                            proficiency level here. Scores are reported on a scale from 0 to 1,000. Education systems are
                            marked as OECD countries if they were OECD members in 2022. The OECD average is the average of
                            the national percentages of the OECD member countries, with each country weighted equally.
                            Italics indicate non-OECD countries and education systems. B-S-J-Z (China) refers to the four
                            PISA participating China provinces: Beijing, Shanghai, Jiangsu, and Zhejiang. Although Vietnam
                            participated in PISA 2018, technical problems with its data prevent results from being discussed
                            in this report.</p>
                        <p><strong>SOURCE:</strong> Organization for Economic Cooperation and Development (OECD), Program
                            for International Student Assessment (PISA), 2022.</p>
                        <p><a
                                href="https://nces.ed.gov/surveys/pisa/idepisa/report.aspx?p=1%C3%81RMS%C3%811%C3%8120183%C3%81PVMATH%C3%81BMMATH%C3%81IN3%C3%80IN2%C3%80AUS%C3%80AUT%C3%80BEL%C3%80CAN%C3%80CHL%C3%80COL%C3%80CZE%C3%80DNK%C3%80EST%C3%80FIN%C3%80FRA%C3%80DEU%C3%80GRC%C3%80HUN%C3%80ISL%C3%80IRL%C3%80ISR%C3%80ITA%C3%80JPN%C3%80KOR%C3%80LVA%C3%80LUX%C3%80MEX%C3%80NLD%C3%80NZL%C3%80NOR%C3%80POL%C3%80PRT%C3%80SVK%C3%80SVN%C3%80ESP%C3%80SWE%C3%80CHE%C3%80TUR%C3%80GBR%C3%80USA%C3%80ALB%C3%80DZA%C3%80ARG%C3%80AZE%C3%80BAK%C3%80BLR%C3%80BIH%C3%80BRA%C3%80BRN%C3%80QCH%C3%80QCI%C3%80ARG01%C3%80BGR%C3%80TAP%C3%80CRI%C3%80HRV%C3%80QCY%C3%80DOM%C3%80ARE03%C3%80GEO%C3%80HKG%C3%80IDN%C3%80JOR%C3%80KAZ%C3%80KSV%C3%80KGZ%C3%80LBN%C3%80LIE%C3%80LTU%C3%80MAC%C3%80MYS%C3%80MLT%C3%80MDA%C3%80MNE%C3%80MAR%C3%80MKD%C3%80PAN%C3%80PER%C3%80PHL%C3%80QAT%C3%80ROU%C3%80RUS%C3%80SAU%C3%80YUG%C3%80SRB%C3%80QCN%C3%80SGP%C3%80THA%C3%80TTO%C3%80TUN%C3%80UKR%C3%80ARE%C3%80URY%C3%80VNM%C3%81MN%C3%82MN%C3%80RP%C3%82RP%C3%81Y%C3%82J%C3%810%C3%810%C3%8137%C3%81N&Lang=1033">See
                                details for this data and perform your own analyses in the PISA Data Explorer</a>.</p>
                    </div>
                </figure>
            </div>
        </div>
        <div class="panel" id="panel-s1-m3">
            <input id="mat-s1-3" class="for-panel" type="checkbox" name="panels">
            <label class="item-id" for="mat-s1-3">
                <span class="key-feature">How large is the gap in mathematics performance between top and bottom
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
                <!-- toggle switch -->
                <p class="display-as for-m3"><strong>Display as:</strong>
                    <span class="graph-view-button active"><i class="fa-solid fa-chart-simple"
                            aria-hidden="true"></i>Graph</span> | <span class="table-view-button"><i
                            class="fa-solid fa-table" aria-hidden="true"></i>Table</span>
                </p>
                <!-- end toggle switch -->
                <figure class="chart chart-3">
                    <figcaption>
                        <strong>Figure M3.</strong> Average scores and 10th and 90th percentile scores of 15-year-old
                        students on the PISA mathematics literacy scale and percentile score gaps, by education system: 2022
                    </figcaption>

                    <div class="chart__controller">
                        <div class="m3__legend">
                            <svg height="50" width="450" role="img">
                                <g transform="translate(0,30)">
                                    <text x="0" y="0" dominant-baseline="middle" class="m3__legend__title">KEY:</text>
                                    <g transform="translate(100,0)">
                                        <text x="0" y="-15" text-anchor="middle" class="m3__legend__item__text">10th
                                            Percentile</text>
                                        <text x="150" y="-15" text-anchor="middle" class="m3__legend__item__text">Average
                                            Score</text>
                                        <text x="300" y="-15" text-anchor="middle" class="m3__legend__item__text">90th
                                            Percentile</text>
                                        <line stroke="black" x1="0" y1="0" x2="300" y2="0"></line>
                                        <polygon points="-6,0 0,-6 6,0 0,6" fill="#0647ae" stroke="black"></polygon>
                                        <rect width="10" height="10" x="145" y="-5" fill="#f7aa36" stroke="black"></rect>
                                        <circle r="5" cx="300" cy="0" fill="#00843D" stroke="black"></circle>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div class="sub-contain d-flex j-around">
                            <div class="grouping">
                            <div class="thead d-flex j-space">
                                <span class="like-th m3-sort-alpha">Education system <i
                                        class="fa fa-chevron-down"></i><i class="fa fa-chevron-up"></i></span>
                                <span class="like-th m3-sort-score-gap hi-col">90th&ndash;10th score gap <i
                                        class="fa fa-chevron-down"></i><i class="fa fa-chevron-up"></i></span>
                            </div>
                            <svg class="left-column">
                                <g></g>
                            </svg>
                        </div>
                        <div class="grouping">
                            <div class="thead d-flex j-space">
                                <span class="like-th">Education system</span>
                                <span class="like-th hi-col">90th&ndash;10th score gap</span>
                            </div>
                            <svg class="right-column">
                                <g></g>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="notes">
                    <p>* Score gap is significantly different (<em>p</em> &lt; .05) from the U.S. 90th to 10th
                        percentile score gap at the .05 level of statistical significance.</p>
                    <p><span class="marker-1"></span> At least 50 percent but less than 75 percent of the 15-year-old
                        population is covered by the PISA sample.</p>
                    <p><span class="marker-2"> Less than 50 percent of the 15-year-old population is covered by the PISA
                            sample.</span></p>
                    <p><strong>NOTE:</strong> Scores are reported on a scale from 0 to 1,000. This figure/table shows
                        the threshold (or cut) scores for the following: (a) 10th percentile—the bottom 10 percent of
                        students; (b) 90th percentile—the top 10 percent of students. The score gap for each education
                        system is the difference between its 90th and 10th percentile scores. The percentile ranges are
                        specific to each education system’s distribution of scores, enabling users to compare scores
                        across education systems. Education systems are ordered by average score from largest to
                        smallest. Education systems are marked as OECD countries if they were OECD members in 2022. The
                        OECD average is the average of the national averages of the OECD member countries, with each
                        country weighted equally. Italics indicate non-OECD countries and education systems. B-S-J-Z
                        (China) refers to the four PISA participating China provinces: Beijing, Shanghai, Jiangsu, and
                        Zhejiang. Although Vietnam participated in PISA 2018, technical problems with its data prevent
                        results from being discussed in this report.</p>
                    <p><strong>SOURCE:</strong> Organization for Economic Cooperation and Development (OECD), Program
                        for International Student Assessment (PISA), 2022.</p>
                    <p><a
                            href="https://nces.ed.gov/surveys/pisa/idepisa/report.aspx?p=1%C3%81RMS%C3%811%C3%8120183%C3%81PVMATH%C3%81BMMATH%C3%81IN3%C3%80IN2%C3%80AUS%C3%80AUT%C3%80BEL%C3%80CAN%C3%80CHL%C3%80COL%C3%80CZE%C3%80DNK%C3%80EST%C3%80FIN%C3%80FRA%C3%80DEU%C3%80GRC%C3%80HUN%C3%80ISL%C3%80IRL%C3%80ISR%C3%80ITA%C3%80JPN%C3%80KOR%C3%80LVA%C3%80LUX%C3%80MEX%C3%80NLD%C3%80NZL%C3%80NOR%C3%80POL%C3%80PRT%C3%80SVK%C3%80SVN%C3%80ESP%C3%80SWE%C3%80CHE%C3%80TUR%C3%80GBR%C3%80USA%C3%80ALB%C3%80DZA%C3%80ARG%C3%80AZE%C3%80BAK%C3%80BLR%C3%80BIH%C3%80BRA%C3%80BRN%C3%80QCH%C3%80QCI%C3%80ARG01%C3%80BGR%C3%80TAP%C3%80CRI%C3%80HRV%C3%80QCY%C3%80DOM%C3%80ARE03%C3%80GEO%C3%80HKG%C3%80IDN%C3%80JOR%C3%80KAZ%C3%80KSV%C3%80KGZ%C3%80LBN%C3%80LIE%C3%80LTU%C3%80MAC%C3%80MYS%C3%80MLT%C3%80MDA%C3%80MNE%C3%80MAR%C3%80MKD%C3%80PAN%C3%80PER%C3%80PHL%C3%80QAT%C3%80ROU%C3%80RUS%C3%80SAU%C3%80YUG%C3%80SRB%C3%80QCN%C3%80SGP%C3%80THA%C3%80TTO%C3%80TUN%C3%80UKR%C3%80ARE%C3%80URY%C3%80VNM%C3%81MN%C3%82MN%C3%80RP%C3%82RP%C3%81Y%C3%82J%C3%810%C3%810%C3%8137%C3%81N&Lang=1033">See
                            details for this data and perform your own analyses in the PISA Data Explorer</a>.</p>
                </div>
            </figure>

            <figure class="tbl3 table-classic">
                <figcaption>
                    <strong>Table M3.</strong> Average scores and 10th and 90th percentile scores of 15-year-old
                    students on the PISA mathematics literacy scale and percentile score gaps, by education system: 2022
                </figcaption>
                <div class="table-classic__container">
                    <table class="tbl3" tabindex="0">
                        <colgroup>
                            <col>
                            <col>
                            <col>
                            <col>
                            <col>
                        </colgroup>
                        <thead>
                            <tr>
                                <th><span id="m3t-sort-alpha">Education system <i class="fa fa-chevron-down"></i><i
                                            class="fa fa-chevron-up"></i></span></th>
                                <th>10th percentile score</th>
                                <th>Average score</th>
                                <th>90th percentile score</th>
                                <th><span id="m3t-sort-score-gap">90th&ndash;10th score gap <i
                                            class="fa fa-chevron-down"></i><i class="fa fa-chevron-up"></i></span></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Lorem ipsum</th>
                                <td>370</td>
                                <td>0.6</td>
                                <td>489</td>
                                <td>0.4</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="notes">
                    <p>* Score gap is significantly different (<em>p</em> &lt; .05) from the U.S. 90th to 10th
                        percentile score gap at the .05 level of statistical significance.</p>
                    <p><span class="marker-1"></span> At least 50 percent but less than 75 percent of the 15-year-old
                        population is covered by the PISA sample.</p>
                    <p><span class="marker-2"> Less than 50 percent of the 15-year-old population is covered by the PISA
                            sample.</span></p>
                    <p><strong>NOTE:</strong> Scores are reported on a scale from 0 to 1,000. This figure/table shows
                        the threshold (or cut) scores for the following: (a) 10th percentile—the bottom 10 percent of
                        students; (b) 90th percentile—the top 10 percent of students. The score gap for each education
                        system is the difference between its 90th and 10th percentile scores. The percentile ranges are
                        specific to each education system’s distribution of scores, enabling users to compare scores
                        across education systems. Education systems are ordered by average score from largest to
                        smallest. Education systems are marked as OECD countries if they were OECD members in 2022. The
                        OECD average is the average of the national averages of the OECD member countries, with each
                        country weighted equally. Italics indicate non-OECD countries and education systems. B-S-J-Z
                        (China) refers to the four PISA participating China provinces: Beijing, Shanghai, Jiangsu, and
                        Zhejiang. Although Vietnam participated in PISA 2018, technical problems with its data prevent
                        results from being discussed in this report.</p>
                    <p><strong>SOURCE:</strong> Organization for Economic Cooperation and Development (OECD), Program
                        for International Student Assessment (PISA), 2022.</p>
                    <p><a
                            href="https://nces.ed.gov/surveys/pisa/idepisa/report.aspx?p=1%C3%81RMS%C3%811%C3%8120183%C3%81PVMATH%C3%81BMMATH%C3%81IN3%C3%80IN2%C3%80AUS%C3%80AUT%C3%80BEL%C3%80CAN%C3%80CHL%C3%80COL%C3%80CZE%C3%80DNK%C3%80EST%C3%80FIN%C3%80FRA%C3%80DEU%C3%80GRC%C3%80HUN%C3%80ISL%C3%80IRL%C3%80ISR%C3%80ITA%C3%80JPN%C3%80KOR%C3%80LVA%C3%80LUX%C3%80MEX%C3%80NLD%C3%80NZL%C3%80NOR%C3%80POL%C3%80PRT%C3%80SVK%C3%80SVN%C3%80ESP%C3%80SWE%C3%80CHE%C3%80TUR%C3%80GBR%C3%80USA%C3%80ALB%C3%80DZA%C3%80ARG%C3%80AZE%C3%80BAK%C3%80BLR%C3%80BIH%C3%80BRA%C3%80BRN%C3%80QCH%C3%80QCI%C3%80ARG01%C3%80BGR%C3%80TAP%C3%80CRI%C3%80HRV%C3%80QCY%C3%80DOM%C3%80ARE03%C3%80GEO%C3%80HKG%C3%80IDN%C3%80JOR%C3%80KAZ%C3%80KSV%C3%80KGZ%C3%80LBN%C3%80LIE%C3%80LTU%C3%80MAC%C3%80MYS%C3%80MLT%C3%80MDA%C3%80MNE%C3%80MAR%C3%80MKD%C3%80PAN%C3%80PER%C3%80PHL%C3%80QAT%C3%80ROU%C3%80RUS%C3%80SAU%C3%80YUG%C3%80SRB%C3%80QCN%C3%80SGP%C3%80THA%C3%80TTO%C3%80TUN%C3%80UKR%C3%80ARE%C3%80URY%C3%80VNM%C3%81MN%C3%82MN%C3%80RP%C3%82RP%C3%81Y%C3%82J%C3%810%C3%810%C3%8137%C3%81N&Lang=1033">See
                            details for this data and perform your own analyses in the PISA Data Explorer</a>.</p>
                </div>
            </figure>
        </div>
    </div>
</div>
<!-- end accordion content --></template>
    
<script>


export default {
    name: 'accordion-international-comparisons',
}
</script>
    
    
<style scoped></style>
    
    
    
    
    