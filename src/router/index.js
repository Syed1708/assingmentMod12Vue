import { createRouter, createWebHistory } from 'vue-router'
import TableView from '../views/TableView.vue'
import ProductDetails from '../views/ProductDetails.vue'
import NotFound from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TableView
    },
    {
      path: '/productdetail/:id',
      name: 'productDetails',
      component: ProductDetails,
      props: true,
    },
    {
       path: '/:pathMatch(.*)*', 
       name: 'notfound',
    component: NotFound },


  ]
})

export default router
