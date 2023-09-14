import { createRouter, createWebHistory } from 'vue-router'
import TrendsStudentAchievement from '../views/mathematics/trends-student-achievement.vue'
import AchievementByStudentGroups from '../views/mathematics/achievement-by-student-groups.vue'
import InternationalComparisons from '../views/mathematics/international-comparisons.vue'
import NotFound from '../views/not-found.vue'

const routes = [
    {
        path: '/',
        redirect: '/mathematics/achievement',
    },
    {
        path: '/mathematics/international-comparisons',
        name: 'international-comparisons',
        component: InternationalComparisons
    },
    {
        path: '/mathematics/trends',
        name: 'trends-student-achievement',
        component: TrendsStudentAchievement
    },
    {
        path: '/mathematics/achievement',
        name: 'achievement-by-student-groups',
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