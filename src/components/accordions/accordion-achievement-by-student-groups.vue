<template>
    <!-- start accordion content -->
    <div class="accordion-panel">
        <div class="panel" id="panel-s3-m1">

            <ChartTableView />
            <ChartTableTab />
            <ChartTableView />
            <ChartTableTab />
            <input id="mat-s3-1" class="for-panel" type="checkbox" name="panels" checked="checked">
            <label class="item-id" for="mat-s3-1">
                <span class="key-feature">Are there gender differences in mathematics performance among
                    15-year-olds?</span>
            </label>
            <div class="panel-content">
                <p>Voluptatem eum eaque amet illo delectus enim odio consectetur, alias incidunt? Lorem
                    ipsum, dolor sit amet consectetur adipisicing elit. Quidem blanditiis maiores
                    repudiandae assumenda veniam. Impedit autem rerum nostrum amet ad numquam. Deserunt
                    autem, ipsam sed veniam alias beatae a eveniet?</p>
                <ul>
                    <li>libero facilis nulla, voluptatum assumenda magni sit cumque modi. </li>
                    <li>sit amet consectetur adipisicing elit. Numquam ratione minima</li>
                    <li>molestiae error perferendis minus tempore voluptate quaerat mollitia</li>
                    <li>Laboriosam omnis architecto illum a quos itaque veniam autem, nam</li>
                </ul>
                <!-- toggle switch -->
                <p class="display-as for-m6"><strong>Display as:</strong>
                    <span @click="toggleElement(0)" :class="{ active: listElement[0].isActive }"><i
                            class="fa-solid fa-chart-simple" aria-hidden="true"></i>Graph</span> | <span
                        @click="toggleElement(1)" :class="{ active: listElement[1].isActive }"><i class="fa-solid fa-table"
                            aria-hidden="true"></i>Table</span>
                </p>
                <!-- end toggle switch -->







                <!-- start chart for m6 -->
                <figure class="chart chart-6" v-if="!this.isHidden">
                    <figcaption>
                        <strong>Figure M6.</strong> Difference in average scores of 15-year-old male and
                        female students on the PISA mathematics literacy scale, by education system: 2022
                    </figcaption>
                    <!-- chart m6 goes here -->
                    <div>M6</div>
                    <div class="chart__controller">
                        <div class="sub-contain d-flex j-around">
                            <div class="grouping">
                                <div class="thead d-flex j-space align-e">
                                    <span class="like-th m6-sort-alpha">Education system <i
                                            class="fa fa-chevron-down"></i><i class="fa fa-chevron-up"></i></span>
                                    <span class="like-th m6-sort-score-gap"><span>Score difference
                                            between<br>male and female students</span> <i
                                            class="fa fa-chevron-down active"></i><i class="fa fa-chevron-up"></i></span>
                                </div>

                            </div>
                            <div class="grouping">
                                <div class="thead d-flex j-space align-e">
                                    <span class="like-th">Education system</span>
                                    <span class="like-th">Score difference between<br>male and female
                                        students</span>
                                </div>
                                <!-- FiGURE M6 PLACEHOLDER -->
                            </div>
                        </div>
                        <p class="axis-title">Difference in average mathematics literacy scores</p>
                    </div>
                    <!-- NOTES 1 -->
                    <NotesOne />
                </figure>
                <!-- start table for m6 -->
                <figure class="table-classic table-6" v-if="this.isHidden">
                    <figcaption>
                        <strong>Table M6.</strong> Difference in average scores of 15-year-old male and
                        female students on the PISA mathematics literacy scale, by education system: 2022
                    </figcaption>
                    <div class="table-classic__container">

                        <!-- TABLE M6 -->
                    </div>
                    <!-- Notes 2--> <!-- NOTES INTERPRET DATA -->
                    <NotesOne />
                </figure>
            </div>
        </div>
        <div class="panel" id="panel-s3-m2">
            <input id="mat-s3-2" class="for-panel" type="checkbox" name="panels">
            <label class="item-id" for="mat-s3-2">
                <span class="key-feature">How does the mathematics performance of U.S. 15-year-olds vary by
                    race/ethnicity?</span>
            </label>
            <div class="panel-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, <a href="#">amet
                        consectetur adipisicing elit unde doloribus</a> consequatur
                    recusandae, ipsa eius sunt eveniet veniam facilis molestiae asperiores architecto alias
                    accusantium eos est nemo quasi deserunt, iste ea.</p>
                <p><strong>Porro nemo molestias ipsa sunt eveniet veniam facilis molestiae</strong></p>
                <p>Numquam doloribus molestias, quo ipsam facere quod architecto quasi veritatis deserunt a
                    esse blanditiis hic, rem dolorem inventore voluptatum vel impedit? Modi. Lorem, <a href="#">ipsum dolor
                        sit amet consectetur adipisicing elit</a>. Tempore
                    reprehenderit, obcaecati recusandae officia facilis sequi adipisci minus in quos?
                    Obcaecati beatae, necessitatibus voluptatem unde ratione possimus? Nam quas vero
                    eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, ex corrupti?
                    Aperiam nemo nesciunt architecto, deserunt obcaecati nihil, deleniti aut numquam aliquid
                    quis vel enim modi eius veritatis culpa eos. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Natus rem debitis enim doloribus quibusdam labore corporis eum sequi
                    maxime. Eius alias ullam unde corrupti error vero fugit ipsam? Voluptates, iure!</p>
                <!-- toggle switch -->
                <p class="display-as for-m7"><strong>Display as:</strong>
                    <span @click="toggleElement(2)" :class="{ active: listElement[2].isActive }"
                        class="graph-view-button"><i class="fa-solid fa-chart-simple" aria-hidden="true"></i>Graph</span> |
                    <span @click="toggleElement(3)" :class="{ active: listElement[3].isActive }"
                        class="table-view-button "><i class="fa-solid fa-table" aria-hidden="true"></i>Table</span>
                </p>
                <!-- end toggle switch -->
                <!-- start chart for m7 -->
                <figure class="highcharts-figure chart" v-if="this.isHidden">
                    <figcaption>
                        <strong>Figure M7.</strong> Average scores of U.S. 15-year-old students on the PISA
                        mathematics literacy scale, by race/ethnicity: 2022
                    </figcaption>
                    <!-- chart m7 goes here -->
                    <div class="lolli__legend">
                        <ul class="lolli__legend__row">
                            <li class="lolli__legend__row__item circle">U.S. average score for each
                                race/ethnicity category</li>
                            <li class="lolli__legend__row__item rect">Difference in average score between
                                each race/ethnicity<br>category and the U.S. average</li>
                        </ul>
                    </div>
                    <ChartM7 />
                    <p class="highcharts-description"></p>
                    <!-- Notes sig dif one -->
                    <NotesSignificantlyDifferentOne />

                </figure>
                <!-- start table for m7 -->
                <figure class="table-classic table-7" v-if="!this.isHidden">
                    <figcaption>
                        <strong>Table M7.</strong> Average scores of U.S. 15-year-old students on the PISA
                        mathematics literacy scale, by race/ethnicity: 2022
                    </figcaption>
                    <div class="table-classic__container">
                        <!-- TABLE M7 -->
                        <TableM7 />
                    </div>
                    <!-- Notes sig dif one -->
                    <NotesSignificantlyDifferentOne />
                </figure>
            </div>
        </div>
        <div class="panel" id="panel-s3-m3">
            <input id="mat-s3-3" class="for-panel" type="checkbox" name="panels">
            <label class="item-id" for="mat-s3-3">
                <span class="key-feature">How does the mathematics performance of U.S. 15-year-olds vary by
                    measures of poverty?</span>
            </label>
            <div class="panel-content">
                <!-- toggle switch -->
                <p class="display-as for-m8-tier1"><strong>Show results for:</strong>
                    <span class="table-view-button active">Economic, Social, and Cultural Status</span> |
                    <span class="table-view-button ">Free or Reduced-priced lunch</span>
                </p>
                <!-- end toggle switch -->
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, <a href="#">amet
                        consectetur adipisicing elit unde doloribus</a> consequatur
                    recusandae, ipsa eius sunt eveniet veniam facilis molestiae asperiores architecto alias
                    accusantium eos est nemo quasi deserunt, iste ea.</p>
                <p>Est ducimus illo labore repellendus at ipsam tempora, amet dolores numquam! Doloribus
                    dolor debitis tempora modi ipsum possimus ea, vero voluptas. Eaque.</p>
                <p><strong>Porro nemo molestias ipsa sunt eveniet veniam facilis molestiae</strong></p>
                <p>Amet consectetur adipisicing elit. Rem saepe facilis beatae sit magni fuga, neque animi
                    necessitatibus! Sequi reprehenderit aut in iste optio sapiente aliquam asperiores
                    mollitia sed similique.</p>
                <!-- toggle switch -->
                <p class="display-as for-m8"><strong>Display as 8:</strong>
                    <span @click="toggleElement(4)" :class="{ active: listElement[4].isActive }"
                        class="graph-view-button last-open"><i class="fa-solid fa-chart-simple"
                            aria-hidden="true"></i>Graph</span> | <span @click="toggleElement(5)"
                        :class="{ active: listElement[5].isActive }" class="table-view-button "><i class="fa-solid fa-table"
                            aria-hidden="true"></i>Table</span>
                </p>
                <!-- end toggle switch -->
                <!-- start chart for m8 -->
                <figure class="chart chart-8" v-if="this.isHidden">
                    <figcaption>
                        <strong>Figure M8.</strong> Average scores of 15-year-old students on the PISA
                        mathematics literacy scale, by national quarters of the PISA index of economic,
                        social, and cultural status (ESCS): 2022
                    </figcaption>
                    <!-- chart m8 goes here -->
                    <ChartM8 />
                    <!-- sig dif NOTES TWO -->
                    <NotesSignificantlyDifferentTwo />
                </figure>
                <!-- start table for m8 -->
                <figure class="table-classic table-m8" v-if="!this.isHidden">
                    <figcaption>
                        <strong>Table M8.</strong> Average scores of 15-year-old students on the PISA
                        mathematics literacy scale, by national quarters of the PISA index of economic,
                        social, and cultural status (ESCS): 2022
                    </figcaption>
                    <div class="table-classic__container">
                        <!-- TABLE M8-->
                        <TableM8 />
                        <TableM1 />
                    </div>
                    <!-- sig dif NOTES TWO -->
                    <NotesSignificantlyDifferentTwo />
                </figure>
                <!-- toggle switch -->
                <p class="display-as for-m9"><strong>Display as 9:</strong>
                    <span @click="toggleElement(0)" :class="{ active: listElement[0].isActive }"
                        class="graph-view-button active"><i class="fa-solid fa-chart-simple"
                            aria-hidden="true"></i>Graph</span> | <span @click="toggleElement(1)"
                        :class="{ active: listElement[1].isActive }" class="table-view-button "><i class="fa-solid fa-table"
                            aria-hidden="true"></i>Table</span>
                </p>
                <!-- end toggle switch -->
                <!-- start chart for m9 -->

                <figure class="highcharts-figure chart" v-if="!this.isHidden">
                    <figcaption>
                        <strong>Figure M9.</strong> Average scores of U.S. 15-year-old public school
                        students on the PISA mathematics literacy scale, by percentage of students enrolled
                        in schools eligible for free or reduced-price lunch (FRPL), based on principals'
                        reports: 2022
                    </figcaption>
                    <!-- chart m9 goes here -->
                    <div class="lolli__legend">
                        <ul class="lolli__legend__row">
                            <li class="lolli__legend__row__item circle">U.S. average score for each FRPL
                                category</li>
                            <li class="lolli__legend__row__item rect">Difference in average score between
                                each FRPL<br>category and the U.S. average</li>
                        </ul>
                    </div>
                    <!-- <ChartM9 /> -->
                    <p class="highcharts-description"></p>
                    <!-- Notes sig dif one -->
                    <!-- <NotesSignificantlyDifferentOne /> -->
                </figure>
                <!-- start table for m9 -->
                <figure class="table-classic table-m9" v-if="this.isHidden">
                    <figcaption>
                        <strong>Table M9.</strong> Average scores of U.S. 15-year-old public school students
                        on the PISA mathematics literacy scale, by percentage of students enrolled in
                        schools eligible for free or reduced-price lunch (FRPL), based on principals'
                        reports: 2022
                    </figcaption>
                    <div class="table-classic__container">
                        <table class="tblm9" tabindex="0">
                            table m9
                        </table>
                    </div>
                    <!-- sig dif notes three -->
                    <!-- <NotesSignificantlyDifferentThree /> -->

                </figure>
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
import ChartM7 from '../charts/chart-m7.vue'
import ChartM8 from '../charts/chart-m8.vue'
import ChartM9 from '../charts/chart-m9.vue'
import ChartTableView from '../chart-table-view.vue'
import ChartTableTab from '../navigation/chart-table-tab.vue'
import TableM1 from '../tables/table-m1.vue'
import TableM8 from '../tables/table-m8.vue'
import TableM7 from '../tables/table-m7.vue'


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
        ChartM9,
        ChartTableView,
        ChartTableTab,
        TableM1,
        TableM8,
        TableM7
    },
    data() {
        return {
            isHidden: false,

            listElement: [
                { name: 1, isActive: true },
                { name: 2, isActive: false },
                { name: 3, isActive: true },
                { name: 4, isActive: false },
                { name: 5, isActive: true },
                { name: 6, isActive: false },
                { name: 7, isActive: true },
                { name: 8, isActive: false }
            ],
        }
    },
    methods: {

        toggleElement(index) {
            console.log(index)
            //console.log('list', this.listElement)
            //this.listElement.forEach(element => element.isActive = false)
            this.isHidden = !this.isHidden
            //this.listElement[index].isActive = !this.listElement[index].isActive;
        }
       
    },

    created() {
        DataService.createChartM7();
        DataService.createChartM8();
        DataService.createChartM9();
        DataService.createTableM7();

    },
    mounted() {

       
    }
}


</script>


<style scoped>
.isHidden {
    background-color: grey;
}

.graph-view-button.active,
.table-view-button.active {
    border: 2px solid var(--clr-dark);
}

div {
    background-color: #fff;
}
</style>




