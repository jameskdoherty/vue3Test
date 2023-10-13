<template>
    <StoryBlockHero />
    <section id="section-container tabs">
        <SectionTabs />
        <AccordionTrendsStudentAchievement />
    </section>
</template>
<script>
import SectionTabs from '../../shared/navigation/section-tabs.vue'
import StoryBlockHero from '../../shared/hero/story-block-hero.vue'
import AccordionTrendsStudentAchievement from './accordion-trends-student-achievement.vue'

export default {
    name: 'trends-student-achievement',
    components: { SectionTabs, AccordionTrendsStudentAchievement, StoryBlockHero }
}
</script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>