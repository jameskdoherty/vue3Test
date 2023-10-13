<template>
    <div class="top-banner domain" :class="getSectionClass">
        <p>PISA 2022 {{ this.currentSection }} Literacy Results</p><i class="fa-solid fa-calculator"></i>
    </div>
    <section class="story__block">
        <img src="http://poseidon.research.ets.org/jhsu/pisa2022/inc/css/images/subject-home.png" />


        <div class="story__block__content">
            <h2>Explore How U.S. {{ this.currentSection }} Performance Compared Internationally in 2022</h2>

            <FragmentContainer v-if="this.currentSection == 'Mathematics'" :elfragment="DynamicFragmentMath" />
            <FragmentContainer v-if="this.currentSection == 'Reading'" :elfragment="DynamicFragmentReading" />
            <FragmentContainer v-if="this.currentSection == 'Science'" :elfragment="DynamicFragmentScience" />
            <!-- <p>In PISA, the assessment of {{ this.currentSection }} literacy focuses on students' capacity to formulate, use, and
                interpret {{ this.currentSection }} in a variety of contexts. Proficiency in {{ this.currentSection }} is more than the ability to
                reproduce the knowledge of mathematical concepts and procedures; it is conceptualized as students' ability
                to extrapolate from what they know and apply their knowledge in both familiar and unfamiliar situations.</p> -->
            <!-- <blockquote>In PISA 2022, {{ this.currentSection }} literacy is defined as students' capacity to formulate, employ, and
                interpret {{ this.currentSection }} in a variety of contexts. It includes reasoning mathematically and using mathematical
                concepts, procedures, facts, and tools to describe, explain, and predict phenomena.</blockquote> -->
            <p>To take better advantage of the administration of PISA on computer and to improve the measurement of the
                subject, the PISA 2022 assessment of {{ this.currentSection }} literacy included multi-stage adaptive
                testing {{ this.sentenceFragmentAdaptiveTesting }}. Instead of using fixed, predetermined test
                booklets,{{ this.sentenceFragmentPredetermined }} the PISA 2022
                {{ this.currentSection }} assessment was dynamically determined, based on how a student performed in prior
                stages. <a href={{this.readMoreUrl}}>Read more about the multi-stage adaptive testing design used in
                    PISA</a>.</p>


        </div>
    </section>
</template>

<script>
import FragmentContainer from '../../shared/fragments/fragment-container.vue'
import StoryBlockFragReading from '../../shared/fragments/story-block-frag-reading.vue'
export default {
    name: 'Story-Block-Mathematics',
    components: {
        FragmentContainer,
        StoryBlockFragReading
    },
    data() {
        return {
            currentSection: '',
            DynamicFragmentMath: StoryBlockFragReading,
            DynamicFragmentReading: StoryBlockFragReading,
            DynamicFragmentScience: StoryBlockFragReading,
        }
    },
    computed: {
        getSectionClass() {
            return this.currentSection.toLocaleLowerCase()
        }
    },
    created() {


        if (this.$route.path.includes('/mathematics')) {
            this.currentSection = 'Mathematics'
            this.tooltip = 'Major Domain'
            this.sentenceFragmentDomain = ' as it was in 2003 and 2012 '
            this.sentenceFragmentAdaptiveTesting = ' for the first time'
            this.sentenceFragmentPredetermined = ' as in previous cycles,'
            this.readMoreUrl = 'http://poseidon.research.ets.org/jhsu/pisa2022/mathematics/trends/'
        } else if (this.$route.path.includes('/reading')) {
            this.currentSection = 'Reading'
            this.tooltip = 'Minor Domain'
            this.sentenceFragmentDomain = ''
            this.sentenceFragmentAdaptiveTesting = ' that was introduced in PISA 2018'
            this.sentenceFragmentPredetermined = ' '
            this.readMoreUrl = 'http://poseidon.research.ets.org/jhsu/pisa2022/reading/trends/'
        } else if (this.$route.path.includes('/science')) {
            this.currentSection = 'Science'
            this.tooltip = 'Major Domain'
            this.sentenceFragmentDomain = ' as it was in 2003 and 2012 '
            this.sentenceFragmentAdaptiveTesting = ' that was introduced in PISA 2018'
            this.sentenceFragmentPredetermined = ' as in previous cycles,'
            this.readMoreUrl = 'http://poseidon.research.ets.org/jhsu/pisa2022/science/trends/'
        }
    }
}
</script>


<style scoped></style>