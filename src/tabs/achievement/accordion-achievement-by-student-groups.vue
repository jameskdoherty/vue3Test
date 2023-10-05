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
                <!-- Chart/Table Component 6 -->
                <ChartTableTab v-if="this.whichSection == '/mathematics/achievement'" :elchart="DynamicChartSix"
                    :eltable="DynamicTableSix" :elnote="NotesComponent" :elcaptionfig="DynamicFigCaptionSix"
                    figcaptionTitle="Figure M6" figcaptionTableTitle="Table M6" figcaptionBody="mathematics" />
                <ChartTableTab v-if="this.whichSection == '/science/achievement'" :elchart="DynamicChartSix"
                    :eltable="DynamicTableSix" :elnote="NotesComponent" :elcaptionfig="DynamicFigCaptionSix"
                    figcaptionTitle="Figure S6" figcaptionTableTitle="Table S6" figcaptionBody="scientific" />
                <ChartTableTab v-if="this.whichSection == '/reading/achievement'" :elchart="DynamicChartSix"
                    :eltable="DynamicTableSix" :elnote="NotesComponent" :elcaptionfig="DynamicFigCaptionSix"
                    figcaptionTitle="Figure R6" figcaptionTableTitle="Table R6" figcaptionBody="reading" />
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
                <!-- Chart/Table Component 7 -->
                <ChartTableTab v-if="this.whichSection == '/mathematics/achievement'" :elchart="DynamicChartSeven"
                    :eltable="DynamicTableSeven" :elnote="NotesComponent" :elcaptionfig="DynamicFigCaptionSeven"
                    figcaptionTitle="Figure M7" figcaptionTableTitle="Table M7" figcaptionBody="mathematics" />
                <ChartTableTab v-if="this.whichSection == '/science/achievement'" :elchart="DynamicChartSeven"
                    :eltable="DynamicTableSeven" :elnote="NotesComponent" :elcaptionfig="DynamicFigCaptionSeven"
                    figcaptionTitle="Figure S7" figcaptionTableTitle="Table S7" figcaptionBody="scientific" />
                <ChartTableTab v-if="this.whichSection == '/reading/achievement'" :elchart="DynamicChartSeven"
                    :eltable="DynamicTableSeven" :elnote="NotesComponent" :elcaptionfig="DynamicFigCaptionSeven"
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, <a href="#">amet
                        consectetur adipisicing elit unde doloribus</a> consequatur
                    recusandae, ipsa eius sunt eveniet veniam facilis molestiae asperiores architecto alias
                    accusantium eos est nemo quasi deserunt, iste ea.</p>
                <p>Est ducimus illo labore repellendus at ipsam tempora, amet dolores numquam! Doloribus
                    dolor debitis tempora modi ipsum possimus ea, vero voluptas. Eaque.</p>
                <p><strong>Porro nemo molestias ipsa sunt eveniet veniam facilis molestiae</strong></p>
                <p>Amet consectetur adipisicing elit. Rem
                    saepe facilis beatae sit magni fuga, neque animi
                    necessitatibus! Sequi reprehenderit aut in iste optio sapiente aliquam asperiores
                    mollitia sed similique.</p>
                <!-- Chart/Table Component 8 -->
                <div :class="{ invisible: !isStatusActive }">8
                    <ChartTableTab v-if="this.whichSection == '/mathematics/achievement'" :elchart="DynamicChartEight"
                        :eltable="DynamicTableEight" :elnote="DynamicNotesOne" :elcaptionfig="DynamicFigCaption"
                        figcaptionTitle="Figure M8" figcaptionTableTitle="Table M8" figcaptionBody="mathematics" />
                    <ChartTableTab v-if="this.whichSection == '/science/achievement'" :elchart="DynamicChartEight"
                        :eltable="DynamicTableEight" :elnote="DynamicNotesOne" :elcaptionfig="DynamicFigCaption"
                        figcaptionTitle="Figure S8" figcaptionTableTitle="Table S8" figcaptionBody="scientific" />
                    <ChartTableTab v-if="this.whichSection == '/reading/achievement'" :elchart="DynamicChartEight"
                        :eltable="DynamicTableEight" :elnote="DynamicNotesOne" :elcaptionfig="DynamicFigCaption"
                        figcaptionTitle="Figure R8" figcaptionTableTitle="Table R8" figcaptionBody="reading" />
                </div>
                <!-- Chart/Table Component 9 -->
                <div :class="{ invisible: isStatusActive }">9
                    <ChartTableTab v-if="this.whichSection == '/mathematics/achievement'" :elchart="DynamicChartNine"
                        :eltable="DynamicTableNine" :elnote="DynamicNotesOne" :elcaptionfig="DynamicFigCaption"
                        figcaptionTitle="Figure M9" figcaptionTableTitle="Table M9" figcaptionBody="mathematics" />
                    <ChartTableTab v-if="this.whichSection == '/science/achievement'" :elchart="DynamicChartNine"
                        :eltable="DynamicTableNine" :elnote="DynamicNotesOne" :elcaptionfig="DynamicFigCaption"
                        figcaptionTitle="Figure S9" figcaptionTableTitle="Table S9" figcaptionBody="scientific" />
                    <ChartTableTab v-if="this.whichSection == '/reading/achievement'" :elchart="DynamicChartNine"
                        :eltable="DynamicTableNine" :elnote="DynamicNotesOne" :elcaptionfig="DynamicFigCaption"
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




