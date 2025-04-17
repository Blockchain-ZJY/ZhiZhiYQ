<template>
  <div class="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
    <!-- 页面标题 - 添加渐变和阴影效果 -->
    <div class="mb-8 flex items-center justify-between bg-white shadow-lg p-4 rounded-lg">
      <h1 class="text-2xl font-bold text-gray-900 flex items-center">
        智治管理仪表盘
        <span class="ml-2">
          <svg class="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
          </svg>
        </span>
      </h1>
      
      <!-- 日期选择器 - 增加风格样式和交互效果 -->
      <div class="flex items-center space-x-3">
        <div class="relative">
          <select class="appearance-none pl-8 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-700">
            <option>今日</option>
            <option>本周</option>
            <option selected>本月</option>
            <option>今年</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
            <svg class="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
        
        <div class="border border-gray-300 rounded-md px-4 py-2 flex items-center text-sm text-gray-600 bg-white shadow-sm">
          <svg class="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          {{ currentDate }}
        </div>
        
        <button class="inline-flex items-center p-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
          </svg>
        </button>
      </div>
    </div>
    
    <!-- 数据统计卡片 - 增加渐变和悬浮效果 -->
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
      <!-- 卡片1：数据总量 -->
      <div class="bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg shadow-md border border-blue-100 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div class="flex justify-between items-center mb-4">
          <div class="flex-shrink-0 rounded-full p-3 bg-blue-100">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
          </div>
          <span class="text-xs font-medium text-green-600 px-2 py-0.5 rounded-full bg-green-100 shadow-sm">+24%</span>
        </div>
        <h2 class="text-sm font-medium text-gray-600">数据总量</h2>
        <p class="text-2xl font-bold text-gray-900 mb-1">129,574</p>
        <div class="flex items-center text-xs text-gray-500">
          <svg class="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
          </svg>
          较上月增长24%
        </div>
      </div>
      
      <!-- 卡片2：活跃节点 -->
      <div class="bg-gradient-to-br from-white to-green-50 p-6 rounded-lg shadow-md border border-green-100 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div class="flex justify-between items-center mb-4">
          <div class="flex-shrink-0 rounded-full p-3 bg-green-100">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
            </svg>
          </div>
          <span class="text-xs font-medium text-green-600 px-2 py-0.5 rounded-full bg-green-100 shadow-sm">+12%</span>
        </div>
        <h2 class="text-sm font-medium text-gray-600">活跃节点</h2>
        <p class="text-2xl font-bold text-gray-900 mb-1">87</p>
        <div class="flex items-center text-xs text-gray-500">
          <svg class="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
          </svg>
          较上月增长12%
        </div>
      </div>
      
      <!-- 卡片3：数据处理量 -->
      <div class="bg-gradient-to-br from-white to-purple-50 p-6 rounded-lg shadow-md border border-purple-100 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div class="flex justify-between items-center mb-4">
          <div class="flex-shrink-0 rounded-full p-3 bg-purple-100">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <span class="text-xs font-medium text-green-600 px-2 py-0.5 rounded-full bg-green-100 shadow-sm">+18%</span>
        </div>
        <h2 class="text-sm font-medium text-gray-600">数据处理量</h2>
        <p class="text-2xl font-bold text-gray-900 mb-1">25,874</p>
        <div class="flex items-center text-xs text-gray-500">
          <svg class="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
          </svg>
          较上月增长18%
        </div>
      </div>
      
      <!-- 卡片4：运行状态 -->
      <div class="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg shadow-md border border-gray-200 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div class="flex justify-between items-center mb-4">
          <div class="flex-shrink-0 rounded-full p-3 bg-green-100">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <span class="text-xs font-medium text-green-600 px-2 py-0.5 rounded-full bg-green-100 shadow-sm flex items-center">
            <span class="inline-block h-2 w-2 rounded-full bg-green-500 mr-1 animate-pulse"></span>
            正常
          </span>
        </div>
        <h2 class="text-sm font-medium text-gray-600">运行状态</h2>
        <p class="text-2xl font-bold text-gray-900 mb-1">99.8%</p>
        <div class="flex items-center text-xs text-gray-500">
          <svg class="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          系统稳定运行中
        </div>
      </div>
    </div>
    
    <!-- 数据分析图表 - 增强卡片样式 -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      <!-- 左侧卡片 - 数据统计趋势 -->
      <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200 lg:col-span-2 transform transition duration-300 hover:shadow-lg">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-medium text-gray-800 flex items-center">
            <svg class="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
            </svg>
            数据处理趋势
          </h2>
          <div class="flex space-x-1">
            <button class="text-sm font-medium text-gray-500 hover:text-gray-700 px-2 py-1 rounded hover:bg-gray-100 transition-colors duration-200">每日</button>
            <button class="text-sm font-medium text-gray-500 hover:text-gray-700 px-2 py-1 rounded hover:bg-gray-100 transition-colors duration-200">每周</button>
            <button class="text-sm font-medium text-blue-600 px-2 py-1 rounded bg-blue-50 shadow-sm">每月</button>
          </div>
        </div>
        
        <!-- 图表区域 - 保持原样 -->
        <div class="h-80 border-t border-gray-100 pt-4">
          <!-- 使用 canvas 模拟折线图 -->
          <div class="relative h-full">
            <!-- Y轴标签 -->
            <div class="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
              <div>3万</div>
              <div>2.5万</div>
              <div>2万</div>
              <div>1.5万</div>
              <div>1万</div>
              <div>5000</div>
              <div>0</div>
            </div>
            
            <!-- 图表容器 -->
            <div class="ml-10 h-full relative">
              <!-- 网格线 -->
              <div class="absolute inset-0 grid grid-rows-6 gap-0">
                <div class="border-b border-gray-200"></div>
                <div class="border-b border-gray-200"></div>
                <div class="border-b border-gray-200"></div>
                <div class="border-b border-gray-200"></div>
                <div class="border-b border-gray-200"></div>
                <div class="border-b border-gray-200"></div>
              </div>
              
              <!-- 模拟折线图 - 绿线（数据处理量） -->
              <svg class="absolute inset-0" viewBox="0 0 300 100" preserveAspectRatio="none">
                <path d="M0,70 L30,65 L60,60 L90,55 L120,40 L150,35 L180,30 L210,25 L240,20 L270,15 L300,10" fill="none" stroke="#10b981" stroke-width="2"></path>
                <path d="M0,70 L30,65 L60,60 L90,55 L120,40 L150,35 L180,30 L210,25 L240,20 L270,15 L300,10" fill="url(#gradient1)" fill-opacity="0.2" stroke="none"></path>
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#10b981" stop-opacity="0.5"/>
                    <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
              
              <!-- 模拟折线图 - 蓝线（数据存储量） -->
              <svg class="absolute inset-0" viewBox="0 0 300 100" preserveAspectRatio="none">
                <path d="M0,80 L30,75 L60,70 L90,60 L120,55 L150,45 L180,40 L210,35 L240,30 L270,25 L300,20" fill="none" stroke="#3b82f6" stroke-width="2"></path>
              </svg>
            </div>
            
            <!-- X轴标签 -->
            <div class="ml-10 mt-2 flex justify-between text-xs text-gray-500">
              <div>1月</div>
              <div>2月</div>
              <div>3月</div>
              <div>4月</div>
              <div>5月</div>
              <div>6月</div>
              <div>7月</div>
              <div>8月</div>
              <div>9月</div>
            </div>
          </div>
        </div>
        
        <!-- 图例 -->
        <div class="flex items-center space-x-6 mt-4">
          <div class="flex items-center">
            <span class="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
            <span class="text-sm text-gray-600">数据处理量</span>
          </div>
          <div class="flex items-center">
            <span class="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
            <span class="text-sm text-gray-600">数据存储量</span>
          </div>
        </div>
      </div>
      
      <!-- 右侧卡片 - 节点状态 -->
      <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200 transform transition duration-300 hover:shadow-lg">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-medium text-gray-800 flex items-center">
            <svg class="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
            </svg>
            节点状态
          </h2>
          <button class="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center">
            查看全部
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
        
        <!-- 节点状态饼图 - 增强视觉效果 -->
        <div class="relative h-52 flex items-center justify-center mb-4">
          <!-- 模拟饼图 -->
          <svg width="180" height="180" viewBox="0 0 180 180" class="relative filter drop-shadow">
            <!-- 外圈背景 -->
            <circle cx="90" cy="90" r="80" fill="none" stroke="#f3f4f6" stroke-width="24"></circle>
            
            <!-- 活跃节点 - 70% -->
            <circle cx="90" cy="90" r="80" fill="none" stroke="#10b981" stroke-width="24" stroke-dasharray="502.4 502.4" stroke-dashoffset="150.72" transform="rotate(-90 90 90)" class="transition-all duration-1000"></circle>
            
            <!-- 非活跃节点 - 20% -->
            <circle cx="90" cy="90" r="80" fill="none" stroke="#f59e0b" stroke-width="24" stroke-dasharray="502.4 502.4" stroke-dashoffset="401.92" transform="rotate(252 90 90)" class="transition-all duration-1000"></circle>
            
            <!-- 故障节点 - 10% -->
            <circle cx="90" cy="90" r="80" fill="none" stroke="#ef4444" stroke-width="24" stroke-dasharray="502.4 502.4" stroke-dashoffset="452.16" transform="rotate(324 90 90)" class="transition-all duration-1000"></circle>
          </svg>
          
          <!-- 中心文字 -->
          <div class="absolute inset-0 flex flex-col items-center justify-center">
            <div class="text-3xl font-bold text-gray-900">87</div>
            <div class="text-sm text-gray-500">活跃节点</div>
          </div>
        </div>
        
        <!-- 节点状态列表 -->
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <span class="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
              <span class="text-sm text-gray-600">活跃节点</span>
            </div>
            <div class="text-sm font-medium text-gray-900">70% (87)</div>
          </div>
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <span class="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
              <span class="text-sm text-gray-600">非活跃节点</span>
            </div>
            <div class="text-sm font-medium text-gray-900">20% (25)</div>
          </div>
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <span class="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
              <span class="text-sm text-gray-600">故障节点</span>
            </div>
            <div class="text-sm font-medium text-gray-900">10% (12)</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>