<template>
    <div class="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      <!-- 页面标题 - 增强样式 -->
      <div class="mb-8 flex items-center justify-between bg-white shadow-lg p-4 rounded-lg">
        <h1 class="text-2xl font-bold text-gray-900 flex items-center">
          数据管理
          <span class="ml-2">
            <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </span>
          <span class="ml-2 px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-800 font-normal">数据中心</span>
        </h1>
        
        <!-- 操作按钮 - 增强样式 -->
        <div class="flex space-x-3">
          <button class="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            添加数据源
          </button>
          <button class="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
            </svg>
            筛选
          </button>
        </div>
      </div>
      
      <!-- 数据统计卡片 - 增加渐变和卡片效果 -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
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
        
        <!-- 卡片2：数据源数量 -->
        <div class="bg-gradient-to-br from-white to-green-50 p-6 rounded-lg shadow-md border border-green-100 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <div class="flex justify-between items-center mb-4">
            <div class="flex-shrink-0 rounded-full p-3 bg-green-100">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
              </svg>
            </div>
            <span class="text-xs font-medium text-green-600 px-2 py-0.5 rounded-full bg-green-100 shadow-sm">+5</span>
          </div>
          <h2 class="text-sm font-medium text-gray-600">数据源数量</h2>
          <p class="text-2xl font-bold text-gray-900 mb-1">28</p>
          <div class="flex items-center text-xs text-gray-500">
            <svg class="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
            较上月增长5个
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
        
        <!-- 卡片4：存储使用率 -->
        <div class="bg-gradient-to-br from-white to-yellow-50 p-6 rounded-lg shadow-md border border-yellow-100 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <div class="flex justify-between items-center mb-4">
            <div class="flex-shrink-0 rounded-full p-3 bg-yellow-100">
              <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
              </svg>
            </div>
            <span class="text-xs font-medium text-yellow-600 px-2 py-0.5 rounded-full bg-yellow-100 shadow-sm">68%</span>
          </div>
          <h2 class="text-sm font-medium text-gray-600">存储使用率</h2>
          <p class="text-2xl font-bold text-gray-900 mb-1">68%</p>
          <div class="mt-1">
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-yellow-500 h-2 rounded-full shadow-sm" style="width: 68%"></div>
            </div>
            <div class="mt-1 text-xs text-gray-500">总容量 500GB</div>
          </div>
        </div>
      </div>
      
      <!-- 数据趋势图表 -->
      <div class="bg-white p-6 rounded-lg shadow-md mb-6">
        <div ref="chartRef" style="width: 100%; height: 400px;"></div>
      </div>
    </div>
  </template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

const chartRef = ref(null);

onMounted(() => {
  const chartInstance = echarts.init(chartRef.value);
  const option = {
    title: {
      text: '系统参数监控'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['数据总量', '在线设备', '离线设备', 'CPU使用率', '内存使用率']
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '数据总量',
        type: 'line',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '在线设备',
        type: 'line',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '离线设备',
        type: 'line',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'CPU使用率',
        type: 'line',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '内存使用率',
        type: 'line',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };
  chartInstance.setOption(option);
});
</script>