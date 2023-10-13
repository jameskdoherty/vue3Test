<template>
    <StoryBlockHero />
    <section id="section-container tabs">
        <SectionTabs />
        <AccordionInternationalComparisons />
    </section>
</template>
<script>
import SectionTabs from '../../shared/navigation/section-tabs.vue'
import StoryBlockHero from '../../shared/hero/story-block-hero.vue'
import AccordionInternationalComparisons from './accordion-international-comparisons.vue'

export default {
    name: 'international-comparisons',
    components: { SectionTabs, StoryBlockHero, AccordionInternationalComparisons }
}
</script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>