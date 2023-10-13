import { createRouter, createWebHistory } from 'vue-router'
import TrendsStudentAchievement from '../sections/trends/trends-student-achievement.vue'
import AchievementByStudentGroups from '../sections/achievement/achievement-by-student-groups.vue'
import InternationalComparisons from '../sections/international-comparisons/international-comparisons.vue'
import NotFound from '../views/not-found.vue'

const routes = [
    {
        path: '/',
        redirect: '/mathematics/achievement',
    },
    {
        path: '/mathematics/international-comparisons',
        name: 'international-comparisons-mathematics',
        component: InternationalComparisons
    },
    {
        path: '/mathematics/trends',
        name: 'trends-student-achievement-mathematics',
        component: TrendsStudentAchievement
    },
    {
        path: '/mathematics/achievement',
        name: 'achievement-by-student-groups-mathematics',
        component: AchievementByStudentGroups
    },
    {
        path: '/science/international-comparisons',
        name: 'international-comparisons-science',
        component: InternationalComparisons
    },
    {
        path: '/science/trends',
        name: 'trends-student-achievement-science',
        component: TrendsStudentAchievement
    },
    {
        path: '/science/achievement',
        name: 'achievement-by-student-groups-science',
        component: AchievementByStudentGroups
    },
    {
        path: '/reading/international-comparisons',
        name: 'international-comparisons-reading',
        component: InternationalComparisons
    },
    {
        path: '/reading/trends',
        name: 'trends-student-achievement-reading',
        component: TrendsStudentAchievement
    },
    {
        path: '/reading/achievement',
        name: 'achievement-by-student-groups-reading',
        component: AchievementByStudentGroups
    },
    {
        path: '/:pathMatch(.*)*',
        beforeEnter: (to, from, next) => { next('/404') } 
    },
    { 
        path: '/404',
        name: NotFound,
        component: () => import('@/views/not-found')
}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router