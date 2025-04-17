<template>
    <div class="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      <!-- 页面标题 - 美化版本 -->
      <div class="mb-8 flex items-center justify-between bg-white shadow-lg p-4 rounded-lg">
        <h1 class="text-2xl font-bold text-gray-900 flex items-center">
          平台详情
          <span class="ml-2">
            <svg class="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </span>
          <span class="ml-2 px-2 py-0.5 text-xs rounded-full bg-indigo-100 text-indigo-800 font-normal">管理中心</span>
        </h1>
        
        <!-- 操作按钮 - 美化版本 -->
        <div class="flex space-x-3">
          <button class="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
            </svg>
            编辑配置
          </button>
        </div>
      </div>
      
      <!-- 平台概览 - 美化版本 -->
      <div class="bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden mb-8 transform transition-all duration-300 hover:shadow-lg">
        <div class="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <h2 class="text-lg font-semibold text-gray-800 flex items-center">
            <svg class="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            平台概览
          </h2>
        </div>
        <div class="px-6 py-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h3 class="text-base font-medium text-gray-700 mb-3 flex items-center">
                <svg class="w-4 h-4 mr-1 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                基本信息
              </h3>
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">平台名称</span>
                  <span class="text-sm font-medium text-gray-900">智慧城市管理平台</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">当前版本</span>
                  <span class="text-sm font-medium text-gray-900 bg-indigo-50 px-2 py-0.5 rounded">v2.5.3</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">部署时间</span>
                  <span class="text-sm font-medium text-gray-900">2023-04-15</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">运行时间</span>
                  <span class="text-sm font-medium text-gray-900">35天12小时</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">服务状态</span>
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <svg class="-ml-0.5 mr-1.5 h-2 w-2 text-green-400 animate-pulse" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                    正常运行
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h3 class="text-base font-medium text-gray-700 mb-3 flex items-center">
                <svg class="w-4 h-4 mr-1 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
                系统资源
              </h3>
              <div class="space-y-3">
                <div>
                  <div class="flex items-center justify-between mb-1">
                    <span class="text-sm text-gray-500">CPU使用率</span>
                    <span class="text-sm font-medium text-gray-900">28%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full shadow-sm" style="width: 28%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center justify-between mb-1">
                    <span class="text-sm text-gray-500">内存使用率</span>
                    <span class="text-sm font-medium text-gray-900">45%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full shadow-sm" style="width: 45%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center justify-between mb-1">
                    <span class="text-sm text-gray-500">存储使用率</span>
                    <span class="text-sm font-medium text-gray-900">68%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 rounded-full shadow-sm" style="width: 68%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center justify-between mb-1">
                    <span class="text-sm text-gray-500">网络带宽</span>
                    <span class="text-sm font-medium text-gray-900">12.5 MB/s</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-gradient-to-r from-purple-400 to-purple-500 h-2 rounded-full shadow-sm" style="width: 35%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 模块状态 - 美化版本 -->
      <div class="bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden mb-8 transform transition-all duration-300 hover:shadow-lg">
        <div class="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <h2 class="text-lg font-semibold text-gray-800 flex items-center">
            <svg class="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
            </svg>
            模块状态
          </h2>
        </div>
        <div class="px-6 py-4">
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">模块名称</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">版本</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">上次更新</th>
                  <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="module in modules" :key="module.id" class="hover:bg-gray-50 transition-colors duration-150">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-8 w-8 rounded-md bg-indigo-100 flex items-center justify-center mr-3">
                        <svg class="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                        </svg>
                      </div>
                      <div class="text-sm font-medium text-gray-900">{{ module.name }}</div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900 bg-gray-100 px-2 py-0.5 rounded inline-block">{{ module.version }}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span v-if="module.status === '正常'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      <svg class="h-3 w-3 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      正常
                    </span>
                    <span v-else-if="module.status === '警告'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      <svg class="h-3 w-3 mr-1 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                      </svg>
                      警告
                    </span>
                    <span v-else class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      <svg class="h-3 w-3 mr-1 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                      异常
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ module.lastUpdate }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button class="text-indigo-600 hover:text-indigo-900 mr-3 transition-colors duration-150">
                      <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </button>
                    <button class="text-indigo-600 hover:text-indigo-900 mr-3 transition-colors duration-150">
                      <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                      </svg>
                    </button>
                    <button class="text-red-600 hover:text-red-900 transition-colors duration-150">
                      <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <!-- 系统日志 - 美化版本 -->
      <div class="bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden transform transition-all duration-300 hover:shadow-lg">
        <div class="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white flex justify-between items-center">
          <h2 class="text-lg font-semibold text-gray-800 flex items-center">
            <svg class="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            系统日志
          </h2>
          <button class="text-sm text-indigo-600 hover:text-indigo-900 flex items-center transition-colors duration-150">
            查看全部
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
        <div class="px-6 py-4">
          <div class="space-y-4">
            <div v-for="(log, index) in systemLogs" :key="index" class="border-l-4 px-4 py-3 rounded-r-md shadow-sm hover:shadow-md transition-all duration-200" :class="{
              'border-green-500 bg-green-50': log.type === '信息',
              'border-yellow-500 bg-yellow-50': log.type === '警告',
              'border-red-500 bg-red-50': log.type === '错误'
            }">
              <div class="flex justify-between mb-1">
                <div class="text-sm font-medium" :class="{
                  'text-green-800': log.type === '信息',
                  'text-yellow-800': log.type === '警告',
                  'text-red-800': log.type === '错误'
                }">
                  <span class="inline-flex items-center">
                    <svg v-if="log.type === '信息'" class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <svg v-else-if="log.type === '警告'" class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                    </svg>
                    <svg v-else class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {{ log.title }}
                  </span>
                </div>
                <div class="text-xs px-2 py-0.5 rounded-full" :class="{
                  'bg-green-200 text-green-800': log.type === '信息',
                  'bg-yellow-200 text-yellow-800': log.type === '警告',
                  'bg-red-200 text-red-800': log.type === '错误'
                }">{{ log.time }}</div>
              </div>
              <div class="text-sm" :class="{
                'text-green-700': log.type === '信息',
                'text-yellow-700': log.type === '警告',
                'text-red-700': log.type === '错误'
              }">{{ log.message }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PlatformDetails',
    data() {
      return {
        modules: [
          {
            id: 1,
            name: '数据处理引擎',
            version: 'v2.3.0',
            status: '正常',
            lastUpdate: '2023-05-15 08:30:00'
          },
          {
            id: 2,
            name: '用户权限管理',
            version: 'v1.8.5',
            status: '正常',
            lastUpdate: '2023-05-10 14:15:00'
          },
          {
            id: 3,
            name: '设备连接管理',
            version: 'v3.1.2',
            status: '警告',
            lastUpdate: '2023-05-18 09:45:00'
          },
          {
            id: 4,
            name: '数据可视化',
            version: 'v2.0.1',
            status: '正常',
            lastUpdate: '2023-05-12 11:20:00'
          },
          {
            id: 5,
            name: 'API网关服务',
            version: 'v1.5.3',
            status: '正常',
            lastUpdate: '2023-05-14 16:40:00'
          }
        ],
        systemLogs: [
          {
            type: '信息',
            title: '系统启动',
            message: '系统服务已成功启动，所有模块正常运行中。',
            time: '2023-05-20 08:00:00'
          },
          {
            type: '警告',
            title: '设备连接异常',
            message: '检测到部分设备连接不稳定，正在尝试重新连接。',
            time: '2023-05-20 10:15:30'
          },
          {
            type: '信息',
            title: '数据同步完成',
            message: '成功从云端同步了最新的配置信息。',
            time: '2023-05-20 12:30:45'
          },
          {
            type: '错误',
            title: '存储服务异常',
            message: '存储服务出现短暂异常，已自动恢复。',
            time: '2023-05-20 14:25:12'
          },
          {
            type: '信息',
            title: '系统更新',
            message: '系统已更新到最新版本v2.5.3，包含多项性能优化。',
            time: '2023-05-20 16:40:00'
          }
        ]
      }
    }
  }
  </script>