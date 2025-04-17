<template>
  <div>
    <!-- 页面标题 -->
    <div class="mb-8 flex items-center justify-between">
      <h1 class="text-2xl font-bold text-gray-900 flex items-center">
        数据分析
        <span class="ml-2">
          <svg class="w-6 h-6 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
          </svg>
        </span>
      </h1>
      
      <!-- 日期选择器 -->
      <div class="border border-gray-300 rounded-md px-4 py-2 flex items-center text-sm text-gray-600 bg-white shadow-sm">
        <svg class="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
        Apr 11, 2025 - Apr 17, 2025
      </div>
    </div>
    
    <!-- 数据分析卡片 -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      <!-- 左侧卡片 - 数据分析 -->
      <div class="bg-white p-6 rounded-lg shadow-sm lg:col-span-2">
        <h2 class="text-lg font-medium text-gray-800 mb-4">数据分析</h2>
        
        <!-- 指标卡片 -->
        <div class="grid grid-cols-4 gap-4 mb-6">
          <!-- 病例数据 -->
          <div class="bg-white p-4 rounded-lg">
            <div class="flex items-baseline justify-between">
              <h3 class="text-2xl font-bold text-gray-900">24.7K</h3>
              <span class="text-xs font-medium text-green-600 px-2 py-0.5 rounded-full bg-green-100">+49%</span>
            </div>
            <p class="text-xs text-gray-500 mt-1">病例数据</p>
          </div>
          
          <!-- 总病例数据 -->
          <div class="bg-white p-4 rounded-lg">
            <div class="flex items-baseline justify-between">
              <h3 class="text-2xl font-bold text-gray-900">56.9K</h3>
              <span class="text-xs font-medium text-green-600 px-2 py-0.5 rounded-full bg-green-100">+7%</span>
            </div>
            <p class="text-xs text-gray-500 mt-1">总病例数据</p>
          </div>
          
          <!-- 总病占比 -->
          <div class="bg-white p-4 rounded-lg">
            <div class="flex items-baseline justify-between">
              <h3 class="text-2xl font-bold text-gray-900">54%</h3>
              <span class="text-xs font-medium text-red-600 px-2 py-0.5 rounded-full bg-red-100">-7%</span>
            </div>
            <p class="text-xs text-gray-500 mt-1">总病占比</p>
          </div>
          
          <!-- 访问时间 -->
          <div class="bg-white p-4 rounded-lg">
            <div class="flex items-baseline justify-between">
              <h3 class="text-2xl font-bold text-gray-900">2m 56s</h3>
              <span class="text-xs font-medium text-green-600 px-2 py-0.5 rounded-full bg-green-100">+7%</span>
            </div>
            <p class="text-xs text-gray-500 mt-1">访问时间</p>
          </div>
        </div>
        
        <!-- 图表区域 -->
        <div class="h-64 border-t border-gray-100 pt-4">
          <!-- 使用 canvas 模拟折线图 -->
          <div class="relative h-full">
            <!-- Y轴标签 -->
            <div class="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
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
              <div class="absolute inset-0 grid grid-rows-5 gap-0">
                <div class="border-b border-gray-200"></div>
                <div class="border-b border-gray-200"></div>
                <div class="border-b border-gray-200"></div>
                <div class="border-b border-gray-200"></div>
                <div class="border-b border-gray-200"></div>
              </div>
              
              <!-- 模拟折线图 - 蓝线 -->
              <svg class="absolute inset-0" viewBox="0 0 300 100" preserveAspectRatio="none">
                <path d="M0,80 L30,70 L60,50 L90,60 L120,40 L150,20 L180,60 L210,50 L240,30 L270,20 L300,10" fill="none" stroke="#3b82f6" stroke-width="2"></path>
              </svg>
              
              <!-- 模拟折线图 - 灰线 -->
              <svg class="absolute inset-0" viewBox="0 0 300 100" preserveAspectRatio="none">
                <path d="M0,90 L30,80 L60,70 L90,50 L120,60 L150,70 L180,50 L210,60 L240,70 L270,50 L300,40" fill="none" stroke="#d1d5db" stroke-width="2"></path>
              </svg>
            </div>
            
            <!-- X轴标签 -->
            <div class="ml-10 mt-2 flex justify-between text-xs text-gray-500">
              <div>2021/1</div>
              <div>2022/1</div>
              <div>2022/1</div>
              <div>2022/1</div>
              <div>2022/1</div>
              <div>2023/1</div>
              <div>2023/1</div>
              <div>2023/1</div>
              <div>2023/1</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 右侧卡片 - 数据活动 -->
      <div class="bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-lg font-medium text-gray-800 mb-4">数据活动</h2>
        
        <!-- 当前用户数 -->
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-3xl font-bold text-gray-900">347</h3>
          <span class="inline-flex h-2 w-2 rounded-full bg-red-500 mr-1"></span>
        </div>
        <p class="text-sm text-gray-500 mb-6">在线用户</p>
        
        <!-- 活动图表 -->
        <div class="h-24 mb-6 bg-indigo-50 rounded-lg relative overflow-hidden">
          <!-- 模拟线性图表 -->
          <svg class="absolute inset-0" viewBox="0 0 300 80" preserveAspectRatio="none">
            <path d="M0,40 L20,35 L40,30 L60,35 L80,40 L100,30 L120,40 L140,45 L160,30 L180,50 L200,45 L220,40 L240,30 L260,40 L280,25 L300,30" fill="none" stroke="#4f46e5" stroke-width="2"></path>
          </svg>
        </div>
        
        <!-- 活动列表 -->
        <div class="space-y-3">
          <div class="flex justify-between items-center py-1">
            <div class="font-medium text-sm text-gray-700">病例跨区调用</div>
            <div class="text-sm text-gray-900">94</div>
          </div>
          <div class="flex justify-between items-center py-1">
            <div class="font-medium text-sm text-gray-700">病例数据分析</div>
            <div class="text-sm text-gray-900">42</div>
          </div>
          <div class="flex justify-between items-center py-1">
            <div class="font-medium text-sm text-gray-700">病例数据存证</div>
            <div class="text-sm text-gray-900">12</div>
          </div>
          <div class="flex justify-between items-center py-1">
            <div class="font-medium text-sm text-gray-700">病例数据上传</div>
            <div class="text-sm text-gray-900">4</div>
          </div>
        </div>
        
        <!-- 按钮 -->
        <div class="mt-6 text-right">
          <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">
            实时查看 →
          </a>
        </div>
      </div>
    </div>
    
    <!-- 下方卡片组 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- 左侧卡片 - 室科活动 -->
      <div class="bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-lg font-medium text-gray-800 mb-4">室科活动</h2>
        
        <!-- 科室选择 -->
        <div class="flex space-x-4 mb-6">
          <button class="flex items-center space-x-1">
            <span class="h-3 w-3 rounded-full bg-indigo-600"></span>
            <span class="text-sm font-medium text-gray-700">内科</span>
          </button>
          <button class="flex items-center space-x-1">
            <span class="h-3 w-3 rounded-full bg-blue-500"></span>
            <span class="text-sm font-medium text-gray-700">外科</span>
          </button>
          <button class="flex items-center space-x-1">
            <span class="h-3 w-3 rounded-full bg-indigo-300"></span>
            <span class="text-sm font-medium text-gray-700">脑科</span>
          </button>
          <button class="flex items-center space-x-1">
            <span class="h-3 w-3 rounded-full bg-gray-300"></span>
            <span class="text-sm font-medium text-gray-700">眼科</span>
          </button>
        </div>
        
        <!-- 柱状图 -->
        <div class="h-64">
          <!-- 模拟柱状图 -->
          <div class="flex h-full items-end">
            <div class="w-1/6 px-1">
              <div class="space-y-1 h-full flex flex-col-reverse">
                <div class="h-[60%] bg-indigo-500 rounded-t"></div>
                <div class="h-[20%] bg-blue-500 rounded-t"></div>
                <div class="h-[10%] bg-indigo-300 rounded-t"></div>
              </div>
            </div>
            <div class="w-1/6 px-1">
              <div class="space-y-1 h-full flex flex-col-reverse">
                <div class="h-[40%] bg-indigo-500 rounded-t"></div>
                <div class="h-[30%] bg-blue-500 rounded-t"></div>
                <div class="h-[15%] bg-indigo-300 rounded-t"></div>
              </div>
            </div>
            <div class="w-1/6 px-1">
              <div class="space-y-1 h-full flex flex-col-reverse">
                <div class="h-[70%] bg-indigo-500 rounded-t"></div>
                <div class="h-[15%] bg-blue-500 rounded-t"></div>
                <div class="h-[10%] bg-indigo-300 rounded-t"></div>
              </div>
            </div>
            <div class="w-1/6 px-1">
              <div class="space-y-1 h-full flex flex-col-reverse">
                <div class="h-[30%] bg-indigo-500 rounded-t"></div>
                <div class="h-[40%] bg-blue-500 rounded-t"></div>
                <div class="h-[20%] bg-indigo-300 rounded-t"></div>
              </div>
            </div>
            <div class="w-1/6 px-1">
              <div class="space-y-1 h-full flex flex-col-reverse">
                <div class="h-[50%] bg-indigo-500 rounded-t"></div>
                <div class="h-[30%] bg-blue-500 rounded-t"></div>
                <div class="h-[10%] bg-indigo-300 rounded-t"></div>
              </div>
            </div>
            <div class="w-1/6 px-1">
              <div class="space-y-1 h-full flex flex-col-reverse">
                <div class="h-[45%] bg-indigo-500 rounded-t"></div>
                <div class="h-[35%] bg-blue-500 rounded-t"></div>
                <div class="h-[15%] bg-indigo-300 rounded-t"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 右侧卡片 - 医疗来源 -->
      <div class="bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-lg font-medium text-gray-800 mb-4">医疗来源</h2>
        
        <!-- 来源选择 -->
        <div class="flex space-x-4 mb-6">
          <button class="flex items-center space-x-1">
            <span class="h-3 w-3 rounded-full bg-indigo-600"></span>
            <span class="text-sm font-medium text-gray-700">本地患者</span>
          </button>
          <button class="flex items-center space-x-1">
            <span class="h-3 w-3 rounded-full bg-blue-400"></span>
            <span class="text-sm font-medium text-gray-700">外地患者</span>
          </button>
        </div>
        
        <!-- 水平条形图 -->
        <div class="space-y-4">
          <div>
            <div class="flex justify-between text-sm text-gray-600 mb-1">
              <span>May</span>
            </div>
            <div class="h-6 flex rounded-full overflow-hidden">
              <div class="bg-indigo-600 w-[70%]"></div>
              <div class="bg-blue-400 w-[30%]"></div>
            </div>
          </div>
          
          <div>
            <div class="flex justify-between text-sm text-gray-600 mb-1">
              <span>Apr</span>
            </div>
            <div class="h-6 flex rounded-full overflow-hidden">
              <div class="bg-indigo-600 w-[55%]"></div>
              <div class="bg-blue-400 w-[20%]"></div>
            </div>
          </div>
          
          <div>
            <div class="flex justify-between text-sm text-gray-600 mb-1">
              <span>Mar</span>
            </div>
            <div class="h-6 flex rounded-full overflow-hidden">
              <div class="bg-indigo-600 w-[40%]"></div>
              <div class="bg-blue-400 w-[50%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  
  data() {
    return {
      // 如果需要可以添加数据
    };
  }
}
</script>

<style scoped>
/* 自定义样式 */
</style> 