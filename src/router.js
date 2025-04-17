import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Background from './pages/Background.vue'
import Technology from './pages/Technology.vue'
import Applications from './pages/Applications.vue'
import Results from './pages/Results.vue'
import Team from './pages/Team.vue'
// 导入管理系统布局和页面
import AdminLayout from './pages/admin/AdminLayout.vue'
import AdminDashboard from './pages/admin/Dashboard.vue'
// 导入智治管理系统布局和页面
import SmartLayout from './pages/smart/SmartLayout.vue'
import SmartDashboard from './pages/smart/Dashboard.vue'


// 创建路由历史
const routerHistory = createWebHistory()

// 主应用路由配置
const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      window.scroll({ top: 0 })
    } else {
      document.querySelector('html').style.scrollBehavior = 'auto'
      window.scroll({ top: 0 })
      document.querySelector('html').style.scrollBehavior = ''
    }
  },  
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/background',
      component: Background
    },
    {
      path: '/technology',
      component: Technology
    },
    {
      path: '/applications',
      component: Applications
    },    
    {
      path: '/results',
      component: Results
    },
    {
      path: '/team',
      component: Team
    },
    // 管理系统路由配置 - 使用嵌套路由
    {
      path: '/admin',
      component: AdminLayout,
      children: [
        {
          path: 'dashboard',
          component: AdminDashboard,
          name: 'AdminDashboard',
          meta: { requiresAuth: true }
        }
      ]
    },
    // 智治管理系统路由配置 - 使用嵌套路由
    {
      path: '/smart',
      component: SmartLayout,
      children: [
        {
          path: 'dashboard',
          component: SmartDashboard,
          name: 'SmartDashboard',
          meta: { requiresAuth: true }
        },
        {
          path: 'data',
          component: () => import('./pages/smart/DataManagement.vue'),
          name: 'DataManagement',
          meta: { requiresAuth: true }
        },
        {
          path: 'nodes',
          component: () => import('./pages/smart/NodeManagement.vue'),
          name: 'NodeManagement',
          meta: { requiresAuth: true }
        },
        {
          path: 'platform',
          component: () => import('./pages/smart/PlatformDetails.vue'),
          name: 'PlatformDetails',
          meta: { requiresAuth: true }
        },
        {
          path: 'iot',
          component: () => import('./pages/smart/IoTManagement.vue'),
          name: 'IoTManagement',
          meta: { requiresAuth: true }
        },
        {
          path: 'settings',
          component: () => import('./pages/smart/SystemSettings.vue'),
          name: 'SystemSettings',
          meta: { requiresAuth: true }
        }
      ]
    },
  ]
})

// 全局导航守卫
router.beforeEach((to, from, next) => {
  // 确保页面滚动到顶部
  window.scrollTo(0, 0)
  next()
})

export default router
