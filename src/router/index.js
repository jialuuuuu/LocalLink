import { createRouter, createWebHistory } from 'vue-router'
// import Layout from '@/components/Layout.vue'
import SignUp from '@/views/SignUp.vue'
import Login from '@/views/Login.vue'
import Search from '@/views/Search.vue'
import TouristProfile from '@/views/TouristProfile.vue'
import EditTouristProfile from '@/views/EditTouristProfile.vue'
import TourGuideProfile from '@/views/TourGuideProfile.vue'
import EditTourGuideProfile from '@/views/EditTourGuideProfile.vue'
import Review from '@/views/Review.vue'
import Chat from '@/views/Chat.vue'
import Logout from '@/views/Logout.vue'


const routes = [
    {
    path: '/',
    name: 'Login',
    component: Login
    },
    {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
    },
    {
    path: '/search',
    name: 'Search',
    component: Search
    },
    {
    path: '/touristProfile',
    name: 'TouristProfile',
    component: TouristProfile
    },
    {
    path: '/editTouristProfile',
    name: 'EditTouristProfile',
    component: EditTouristProfile
    },
    {
    path: '/tourGuideProfile',
    name: 'TourGuideProfile',
    component: TourGuideProfile
    },
    {
    path: '/editTourGuideProfile',
    name: 'EditTourGuideProfile',
    component: EditTourGuideProfile
    },
    {
    path: '/review',
    name: 'Review',
    component: Review
    },
    {
    path: '/chat',
    name: 'Chat',
    component: Chat
    },
    {
    path: '/logout',
    name: 'Logout',
    component: Logout
    },    
    //delete later, for testing
    // {
    // path: '/layout',
    // name: 'Layout',
    // component: Layout
    // }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
  