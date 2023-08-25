<template>
    <StoryBlockMathematics />
    <section id="section-container tabs">
        <MathematicsTabs />
        <AccordionAchievementByStudentGroups />
    </section>
</template>
<script>
import MathematicsTabs from '../../components/navigation/mathematics-tabs.vue'
import StoryBlockMathematics from '../../components/hero/story-block-mathematics.vue'
import AccordionAchievementByStudentGroups from '../../components/accordions/accordion-achievement-by-student-groups.vue'

export default {
    name: 'achievement-by-student-groups',
    components: { MathematicsTabs, StoryBlockMathematics,AccordionAchievementByStudentGroups}
}
</script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>