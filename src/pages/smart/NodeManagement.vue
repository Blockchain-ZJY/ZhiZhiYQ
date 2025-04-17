<template>
  <div class="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
    <!-- 页面标题 -->
    <div class="mb-8 flex items-center justify-between bg-white shadow-lg p-4 rounded-lg">
      <h1 class="text-2xl font-bold text-gray-900 flex items-center">
        节点管理
        <span class="ml-2">
          <svg class="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
        </span>
      </h1>
      
      <!-- 操作按钮 -->
      <div class="flex space-x-3">
        <button class="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          添加节点
        </button>
      </div>
    </div>
    
    <!-- 节点统计卡片 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <!-- 卡片1：活跃节点 -->
      <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div class="flex justify-between items-center mb-4">
          <div class="flex-shrink-0 rounded-full p-3 bg-green-100">
            <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <span class="text-xs font-medium text-green-600 px-2 py-0.5 rounded-full bg-green-100">+1</span>
        </div>
        <h2 class="text-sm font-medium text-gray-500">活跃节点</h2>
        <p class="text-2xl font-bold text-gray-900">23</p>
        <div class="mt-2 text-xs text-gray-500">较上周增加1个节点</div>
      </div>
      
      <!-- 卡片2：异常节点 -->
      <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div class="flex justify-between items-center mb-4">
          <div class="flex-shrink-0 rounded-full p-3 bg-yellow-100">
            <svg class="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
          </div>
          <span class="text-xs font-medium text-yellow-600 px-2 py-0.5 rounded-full bg-yellow-100">2个</span>
        </div>
        <h2 class="text-sm font-medium text-gray-500">异常节点</h2>
        <p class="text-2xl font-bold text-gray-900">2</p>
        <div class="mt-2 text-xs text-gray-500">需要立即关注</div>
      </div>
      
      <!-- 卡片3：平均响应时间 -->
      <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div class="flex justify-between items-center mb-4">
          <div class="flex-shrink-0 rounded-full p-3 bg-blue-100">
            <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <span class="text-xs font-medium text-green-600 px-2 py-0.5 rounded-full bg-green-100">-15ms</span>
        </div>
        <h2 class="text-sm font-medium text-gray-500">平均响应时间</h2>
        <p class="text-2xl font-bold text-gray-900">78ms</p>
        <div class="mt-2 text-xs text-gray-500">较上周下降15ms</div>
      </div>
    </div>
    
    <!-- 节点列表 -->
    <div class="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden mb-6">
      <div class="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
        <h2 class="text-lg font-medium text-gray-800">节点列表</h2>
        <div class="flex space-x-2">
          <button class="inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
            </svg>
            导出
          </button>
          <button class="inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            刷新
          </button>
        </div>
      </div>
      
      <!-- 表格 -->
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">节点名称</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IP地址</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">响应时间</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">上线时间</th>
              <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="node in nodes" :key="node.id">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10 bg-purple-100 rounded-md flex items-center justify-center">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">{{ node.name }}</div>
                    <div class="text-sm text-gray-500">{{ node.type }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ node.id }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ node.ip }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span v-if="node.status === '活跃'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  活跃
                </span>
                <span v-else-if="node.status === '异常'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                  异常
                </span>
                <span v-else class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                  离线
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ node.responseTime }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ node.uptime }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-purple-600 hover:text-purple-900 mr-3">详情</a>
                <a href="#" class="text-blue-600 hover:text-blue-900 mr-3">编辑</a>
                <a href="#" class="text-red-600 hover:text-red-900">删除</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <!-- 节点性能图表 -->
    <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-lg font-medium text-gray-800">节点性能监控</h2>
        <div class="flex space-x-2">
          <button class="text-sm font-medium text-gray-500 hover:text-gray-700 px-2 py-1 rounded hover:bg-gray-100">今日</button>
          <button class="text-sm font-medium text-gray-500 hover:text-gray-700 px-2 py-1 rounded hover:bg-gray-100">本周</button>
          <button class="text-sm font-medium text-purple-600 px-2 py-1 rounded bg-purple-50">本月</button>
        </div>
      </div>
      
      <!-- 模拟图表区域 -->
      <div class="h-64 border-t border-gray-100 pt-4">
        <div class="relative h-full">
          <!-- Y轴标签 -->
          <div class="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
            <div>200ms</div>
            <div>150ms</div>
            <div>100ms</div>
            <div>50ms</div>
            <div>0ms</div>
          </div>
          
          <!-- 图表容器 -->
          <div class="ml-10 h-full relative">
            <!-- 网格线 -->
            <div class="absolute inset-0 grid grid-rows-4 gap-0">
              <div class="border-b border-gray-200"></div>
              <div class="border-b border-gray-200"></div>
              <div class="border-b border-gray-200"></div>
              <div class="border-b border-gray-200"></div>
            </div>
            
            <!-- 模拟折线图 - 紫线（平均响应时间） -->
            <svg class="absolute inset-0" viewBox="0 0 300 100" preserveAspectRatio="none">
              <path d="M0,30 L30,25 L60,35 L90,40 L120,20 L150,25 L180,15 L210,20 L240,25 L270,20 L300,15" fill="none" stroke="#8b5cf6" stroke-width="2"></path>
              <path d="M0,30 L30,25 L60,35 L90,40 L120,20 L150,25 L180,15 L210,20 L240,25 L270,20 L300,15" fill="url(#gradient1)" fill-opacity="0.2" stroke="none"></path>
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.5"/>
                  <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <!-- X轴标签 -->
          <div class="ml-10 mt-2 flex justify-between text-xs text-gray-500">
            <div>1日</div>
            <div>5日</div>
            <div>10日</div>
            <div>15日</div>
            <div>20日</div>
            <div>25日</div>
            <div>30日</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NodeManagement',
  data() {
    return {
      nodes: [
        {
          name: '主控节点-01',
          id: 'NODE-CTL-001',
          type: '控制节点',
          ip: '192.168.1.101',
          status: '活跃',
          responseTime: '64ms',
          uptime: '30天12小时'
        },
        {
          name: '主控节点-02',
          id: 'NODE-CTL-002',
          type: '控制节点',
          ip: '192.168.1.102',
          status: '活跃',
          responseTime: '68ms',
          uptime: '30天12小时'
        },
        {
          name: '存储节点-01',
          id: 'NODE-STR-001',
          type: '存储节点',
          ip: '192.168.1.201',
          status: '活跃',
          responseTime: '72ms',
          uptime: '29天3小时'
        },
        {
          name: '存储节点-02',
          id: 'NODE-STR-002',
          type: '存储节点',
          ip: '192.168.1.202',
          status: '活跃',
          responseTime: '75ms',
          uptime: '29天3小时'
        },
        {
          name: '计算节点-01',
          id: 'NODE-CMP-001',
          type: '计算节点',
          ip: '192.168.1.301',
          status: '异常',
          responseTime: '187ms',
          uptime: '15天7小时'
        },
        {
          name: '计算节点-02',
          id: 'NODE-CMP-002',
          type: '计算节点',
          ip: '192.168.1.302',
          status: '活跃',
          responseTime: '83ms',
          uptime: '25天14小时'
        },
        {
          name: '边缘节点-01',
          id: 'NODE-EDG-001',
          type: '边缘节点',
          ip: '192.168.1.401',
          status: '活跃',
          responseTime: '92ms',
          uptime: '15天6小时'
        },
        {
          name: '边缘节点-02',
          id: 'NODE-EDG-002',
          type: '边缘节点',
          ip: '192.168.1.402',
          status: '异常',
          responseTime: '145ms',
          uptime: '8天2小时'
        }
      ]
    }
  }
}
</script> 