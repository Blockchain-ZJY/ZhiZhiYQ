<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col">
    <!-- 顶部导航栏 - 增加阴影和渐变 -->
    <header class="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-xl z-20 sticky top-0 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <!-- 返回主站按钮 - 增加过渡动画 -->
            <router-link to="/" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:text-indigo-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 shadow-md">
              <svg class="h-4 w-4 mr-2 transform transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              返回主站
            </router-link>
            
            <!-- 智治管理标题 - 增加渐变字体颜色 -->
            <div class="ml-6 flex items-center">
              <h1 class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
                智治引擎管理平台
                <span class="ml-2 px-2 py-0.5 text-xs rounded-full bg-indigo-100 text-indigo-800 font-normal">
                  v2.5.3
                </span>
              </h1>
            </div>
          </div>
          
          <!-- 右侧用户信息和功能按钮 -->
          <div class="flex items-center space-x-4">
            <!-- 通知图标 -->
            <button class="relative p-1 rounded-full text-white hover:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200">
              <span class="sr-only">查看通知</span>
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
              </svg>
              <!-- 通知数量标记 -->
              <span class="absolute top-0 right-0 inline-flex items-center justify-center h-4 w-4 rounded-full bg-red-500 text-xs font-bold text-white">3</span>
            </button>
            
            <!-- 系统状态 -->
            <div class="hidden md:flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">
              <span class="inline-block h-2 w-2 rounded-full bg-green-600 mr-1.5 animate-pulse"></span>
              系统运行正常
            </div>
            
            <!-- 用户信息 -->
            <div class="flex items-center space-x-3">
              <span class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-indigo-800 shadow-inner">
                <span class="text-sm font-medium leading-none text-white">管理</span>
              </span>
              <div class="hidden md:block">
                <div class="text-sm font-medium text-white">管理员</div>
                <div class="text-xs text-indigo-200">admin@example.com</div>
              </div>
              <svg class="h-5 w-5 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
    
    <div class="flex-grow flex">
      <!-- 侧边栏导航 - 深色渐变 -->
      <aside class="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-xl z-10 transition-all duration-300">
        <div class="h-full flex flex-col">
          <!-- 菜单头部 -->
          <div class="p-4 border-b border-gray-700 flex items-center">
            <svg class="h-8 w-8 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            <h2 class="text-lg font-bold">智治管理系统</h2>
          </div>
          
          <!-- 菜单项 -->
          <nav class="flex-1 px-2 py-4 overflow-y-auto">
            <!-- 仪表盘 -->
            <div class="mb-6">
              <h3 class="px-3 text-xs font-semibold text-blue-300 uppercase tracking-wider mb-2">
                数据概览
              </h3>
              <div class="space-y-1">
                <router-link 
                  to="/smart/dashboard" 
                  class="group flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-all duration-200"
                  :class="[$route.path === '/smart/dashboard' ? 'bg-gradient-to-r from-blue-800 to-blue-900 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700 hover:text-white']"
                >
                  <svg class="mr-3 h-5 w-5 text-blue-400 transition duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  仪表盘
                  <span v-if="$route.path === '/smart/dashboard'" class="ml-auto bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded-md">活跃</span>
                </router-link>
              </div>
            </div>
            
            <!-- 数据管理 -->
            <div class="mb-6">
              <h3 class="px-3 text-xs font-semibold text-blue-300 uppercase tracking-wider mb-2">
                数据管理
              </h3>
              <div class="space-y-1">
                <router-link 
                  to="/smart/data" 
                  class="group flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-all duration-200"
                  :class="[$route.path === '/smart/data' ? 'bg-gradient-to-r from-blue-800 to-blue-900 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700 hover:text-white']"
                >
                  <svg class="mr-3 h-5 w-5 text-blue-400 transition duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  数据管理
                  <span class="ml-auto bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-md">新</span>
                </router-link>
              </div>
            </div>
            
            <!-- 节点管理 -->
            <div class="mb-6">
              <h3 class="px-3 text-xs font-semibold text-blue-300 uppercase tracking-wider mb-2">
                节点管理
              </h3>
              <div class="space-y-1">
                <router-link 
                  to="/smart/nodes" 
                  class="group flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-all duration-200"
                  :class="[$route.path === '/smart/nodes' ? 'bg-gradient-to-r from-blue-800 to-blue-900 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700 hover:text-white']"
                >
                  <svg class="mr-3 h-5 w-5 text-blue-400 transition duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  节点管理
                </router-link>
              </div>
            </div>
            
            <!-- 平台详情 -->
            <div class="mb-6">
              <h3 class="px-3 text-xs font-semibold text-blue-300 uppercase tracking-wider mb-2">
                平台详情
              </h3>
              <div class="space-y-1">
                <router-link 
                  to="/smart/platform" 
                  class="group flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-all duration-200"
                  :class="[$route.path === '/smart/platform' ? 'bg-gradient-to-r from-blue-800 to-blue-900 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700 hover:text-white']"
                >
                  <svg class="mr-3 h-5 w-5 text-blue-400 transition duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  平台详情
                </router-link>
              </div>
            </div>
            
            <!-- 物联网管理 -->
            <div class="mb-6">
              <h3 class="px-3 text-xs font-semibold text-blue-300 uppercase tracking-wider mb-2">
                物联网
              </h3>
              <div class="space-y-1">
                <router-link 
                  to="/smart/iot" 
                  class="group flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-all duration-200"
                  :class="[$route.path === '/smart/iot' ? 'bg-gradient-to-r from-blue-800 to-blue-900 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700 hover:text-white']"
                >
                  <svg class="mr-3 h-5 w-5 text-blue-400 transition duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                  物联网管理
                  <span class="ml-auto bg-yellow-500 text-white text-xs px-1.5 py-0.5 rounded-md">3</span>
                </router-link>
              </div>
            </div>
            
            <!-- 系统设置 -->
            <div class="mb-6">
              <h3 class="px-3 text-xs font-semibold text-blue-300 uppercase tracking-wider mb-2">
                系统设置
              </h3>
              <div class="space-y-1">
                <router-link 
                  to="/smart/settings" 
                  class="group flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-all duration-200"
                  :class="[$route.path === '/smart/settings' ? 'bg-gradient-to-r from-blue-800 to-blue-900 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700 hover:text-white']"
                >
                  <svg class="mr-3 h-5 w-5 text-blue-400 transition duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  系统设置
                </router-link>
              </div>
            </div>

            <!-- 系统状态信息 -->
            <div class="mt-auto pt-6 px-3">
              <div class="rounded-lg bg-gray-700 bg-opacity-50 p-3">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-medium text-gray-300">系统状态</span>
                  <span class="text-xs font-medium text-green-400">正常</span>
                </div>
                <div class="space-y-1">
                  <div>
                    <div class="flex justify-between items-center text-xs text-gray-400 mb-1">
                      <span>CPU</span>
                      <span>28%</span>
                    </div>
                    <div class="w-full h-1 bg-gray-600 rounded-full overflow-hidden">
                      <div class="h-full bg-green-500 rounded-full" style="width: 28%"></div>
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between items-center text-xs text-gray-400 mb-1">
                      <span>内存</span>
                      <span>45%</span>
                    </div>
                    <div class="w-full h-1 bg-gray-600 rounded-full overflow-hidden">
                      <div class="h-full bg-blue-500 rounded-full" style="width: 45%"></div>
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between items-center text-xs text-gray-400 mb-1">
                      <span>存储</span>
                      <span>68%</span>
                    </div>
                    <div class="w-full h-1 bg-gray-600 rounded-full overflow-hidden">
                      <div class="h-full bg-yellow-500 rounded-full" style="width: 68%"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-4 text-center text-xs text-gray-500">
                <p class="mb-1">智治引擎管理平台 v2.5.3</p>
                <p>© 2023 Smart City Solutions</p>
              </div>
            </div>
          </nav>
        </div>
      </aside>
      
      <!-- 主内容区域 -->
      <main class="flex-1 overflow-auto relative">
        <!-- 面包屑导航 -->
        <div class="bg-white shadow-lg border-b border-gray-200">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="py-3 flex items-center text-sm">
              <a href="#" class="text-gray-500 hover:text-gray-700">主页</a>
              <svg class="h-4 w-4 text-gray-400 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <span class="text-blue-600 font-medium">{{ $route.name }}</span>
            </div>
          </div>
        </div>
        
        <div class="py-6">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <!-- 路由视图 -->
            <router-view />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmartLayout'
}
</script>

<style scoped>
/* 自定义滚动条 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* 添加动画效果 */
.router-link-active svg {
  transform: scale(1.1);
}

/* 页面切换动画 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>