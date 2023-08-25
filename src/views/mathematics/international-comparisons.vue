<template>
    <StoryBlockMathematics />
    <section id="section-container tabs">
        <MathematicsTabs />
        <AccordionInternationalComparisons />
    </section>
</template>
<script>
import MathematicsTabs from '../../components/navigation/mathematics-tabs.vue'
import StoryBlockMathematics from '../../components/hero/story-block-mathematics.vue'
import AccordionInternationalComparisons from '../../components/accordions/accordion-international-comparisons.vue'

export default {
    name: 'international-comparisons',
    components: { MathematicsTabs, StoryBlockMathematics, AccordionInternationalComparisons }
}
</script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>