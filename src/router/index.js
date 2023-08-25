import { createRouter, createWebHistory } from 'vue-router'
import TrendsStudentAchievement from '../views/mathematics/trends-student-achievement.vue'
import AchievementByStudentGroups from '../views/mathematics/achievement-by-student-groups.vue'
import InternationalComparisons from '../views/mathematics/international-comparisons.vue'

const routes = [
    {
        path: '/',
        redirect: '/pisa/pisa2022/mathematics/international-comparisons',
    },
    {
        path: '/pisa/pisa2022/mathematics/international-comparisons',
        name: 'international-comparisons',
        component: InternationalComparisons
    },
    {
        path: '/pisa/pisa2022/mathematics/trends',
        name: 'trends-student-achievement',
        component: TrendsStudentAchievement
    },
    {
        path: '/pisa/pisa2022/mathematics/achievement',
        name: 'achievement-by-student-groups',
        component: AchievementByStudentGroups
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router