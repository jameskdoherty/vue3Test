<template>
    <StoryBlockMathematics />
    <section id="section-container tabs">
        <MathematicsTabs />
        <AccordionTrendsStudentAchievement />
    </section>
</template>
<script>
import MathematicsTabs from '../../components/navigation/mathematics-tabs.vue'
import StoryBlockMathematics from '../../components/hero/story-block-mathematics.vue'
import AccordionTrendsStudentAchievement from '../../components/accordions/accordion-trends-student-achievement.vue'

export default {
    name: 'trends-student-achievement',
    components: { MathematicsTabs, AccordionTrendsStudentAchievement, StoryBlockMathematics }
}
</script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>