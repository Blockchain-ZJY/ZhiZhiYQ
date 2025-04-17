<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <!-- 顶部导航栏 -->
    <header class="bg-white shadow-sm z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <!-- 返回主站按钮 -->
            <router-link to="/" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
              <svg class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              返回主站
            </router-link>
            
            <!-- 后台管理标题 -->
            <div class="ml-6 flex items-center">
              <h1 class="text-xl font-semibold text-gray-900">智治引擎管理平台</h1>
            </div>
          </div>
          
          <!-- 右侧用户信息 -->
          <div class="flex items-center">
            <div class="flex items-center space-x-3">
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600">
                <span class="text-sm font-medium leading-none text-white">管理</span>
              </span>
              <span class="text-sm font-medium text-gray-700">管理员</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    
    <div class="flex-grow flex">
      <!-- 侧边栏导航 -->
      <aside class="w-64 bg-indigo-900 text-white">
        <div class="h-full flex flex-col">
          <!-- 菜单头部 -->
          <div class="p-4 border-b border-indigo-800">
            <h2 class="text-lg font-semibold">管理菜单</h2>
          </div>
          
          <!-- 菜单项 -->
          <nav class="flex-1 px-2 py-4 space-y-1">
            <router-link 
              to="/admin/dashboard" 
              class="group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              :class="[$route.path === '/admin/dashboard' ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-800']"
            >
              <svg class="mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7m-7-7v14" />
              </svg>
              数据概览
            </router-link>
            
            <router-link 
              to="/admin/users" 
              class="group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              :class="[$route.path === '/admin/users' ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-800']"
            >
              <svg class="mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              用户管理
            </router-link>
            
            <router-link 
              to="/admin/analytics" 
              class="group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              :class="[$route.path === '/admin/analytics' ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-800']"
            >
              <svg class="mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              统计分析
            </router-link>
            
            <router-link 
              to="/admin/settings" 
              class="group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              :class="[$route.path === '/admin/settings' ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-800']"
            >
              <svg class="mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              系统设置
            </router-link>
          </nav>
        </div>
      </aside>
      
      <!-- 主内容区域 -->
      <main class="flex-1 overflow-auto bg-gray-100">
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
  name: 'AdminLayout'
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
</style> 