<template>
    <StoryBlockMathematics />
    <section id="section-container tabs">
        <MathematicsTabs />
        <AccordionTrendsStudentAchievement />
    </section>
</template>
<script>
import MathematicsTabs from '../../shared/navigation/mathematics-tabs.vue'
import StoryBlockMathematics from '../../shared/hero/story-block-mathematics.vue'
import AccordionTrendsStudentAchievement from './accordion-trends-student-achievement.vue'

export default {
    name: 'trends-student-achievement',
    components: { MathematicsTabs, AccordionTrendsStudentAchievement, StoryBlockMathematics }
}
</script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>