<template>
  <div>
    <!-- 页面标题 - 增强样式 -->
    <div class="mb-8 flex items-center justify-between">
      <h1 class="text-2xl font-bold text-gray-900 flex items-center">
        系统设置
        <span class="ml-2">
          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        </span>
        <span class="ml-2 px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-800 font-normal">配置中心</span>
      </h1>
      <!-- 操作按钮 - 增强样式 -->
      <div class="flex space-x-3">
        <button class="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path>
          </svg>
          保存设置
        </button>
        <button class="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
          重置
        </button>
      </div>
    </div>
    <!-- 设置内容 -->
    <div class="space-y-6">
      <!-- 用户管理 -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-lg font-bold text-gray-800 mb-4">用户管理</h2>
        <p class="text-sm text-gray-600">管理系统用户，添加、删除和编辑用户信息。</p>
        <!-- 用户管理内容 -->
        <div class="mt-4">
          <button class="px-4 py-2 bg-blue-600 text-white rounded-md">添加用户</button>
        </div>
      </div>
      <!-- 通知设置 -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-lg font-bold text-gray-800 mb-4">通知设置</h2>
        <p class="text-sm text-gray-600">配置通知的接收方式和频率。</p>
        <!-- 通知设置内容 -->
        <div class="mt-4">
          <button class="px-4 py-2 bg-blue-600 text-white rounded-md">编辑通知设置</button>
        </div>
      </div>
      <!-- 系统更新 -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-lg font-bold text-gray-800 mb-4">系统更新</h2>
        <p class="text-sm text-gray-600">检查和更新系统版本。</p>
        <!-- 系统更新内容 -->
        <div class="mt-4">
          <button class="px-4 py-2 bg-blue-600 text-white rounded-md">检查更新</button>
        </div>
      </div>
    </div>
  </div>
</template>