<template>
    <StoryBlockHero />
    <section id="section-container tabs">
        <SectionTabs />
        <AccordionAchievementByStudentGroups />
    </section>
</template>
<script>
import SectionTabs from '../../shared/navigation/section-tabs.vue'
import StoryBlockHero from '../../shared/hero/story-block-hero.vue'
import AccordionAchievementByStudentGroups from './accordion-achievement-by-student-groups.vue'

export default {
    name: 'achievement-by-student-groups',
    components: { SectionTabs, StoryBlockHero, AccordionAchievementByStudentGroups},
}

</script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>