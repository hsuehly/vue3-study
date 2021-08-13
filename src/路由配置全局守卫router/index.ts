import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/index.vue'
import Count from '@/views/count.vue'
import Person from '@/views/person2.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "主页"
    }
  },
  {
    path: '/cou',
    name: 'Count',
    meta: {
      title: "计算详情",
      isAuth: true
    },
    component: Count,
    // 独享路由守卫 只有前置没有后置
    // beforeEnter(to, from, next){
    //   if(to.meta.isAuth) { // 判读是否需要监权
    //     if(localStorage.getItem("name") === "hsueh") {
    //       next()
    //     }else {
    //       alert("没有权限")
    //     }
    //    } else {
    //      next()
    //    }
    // }
  },
  {
    path: '/per',
    name: 'person',
    component: Person,
    meta: { // 一般可以放自定义数据, 路由元数据
      isAuth: true,
      title: "任务详情"
    } 
  } 
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
//  前置路由守卫 路由切换之前被调用, 和初始化的时候调用  一定要next
// router.beforeEach((to,from, next)=>{
//   console.log(to,"to",from, 'from',next,"next")
//   console.log("前置路由守卫");
  
//  if(to.meta.isAuth) { // 判读是否需要监权
//   if(localStorage.getItem("name") === "hsueh") {
//     next()
//   }else {
//     alert("没有权限")
//   }
//  } else {
//    next()
//  }


// })

// 全局后置路由守卫  没有next方法
// router.afterEach((to, from)=> {
//   document.title = to.meta.title as string || "主页"
// })

export default router
