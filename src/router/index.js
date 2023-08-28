import {createRouter, createWebHistory} from "vue-router"
import QuizesView from "../views/QuizesView.vue"
import QuizView from "../views/QuizView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: 'quizes',
            component: QuizesView
        },
        {
            // The :id segment in the path property is used to define a dynamic route parameter.
            path: "/quiz/:id",
            name: 'quiz',
            component: QuizView
        }
    ]
})

export default router