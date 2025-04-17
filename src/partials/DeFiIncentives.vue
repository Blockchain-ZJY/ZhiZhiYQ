<template>
  <section class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t border-slate-800">

        <!-- 标题 -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <div class="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-200 pb-3">数据激励机制</div>
          <h2 class="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">去中心化激励模型</h2>
          <p class="text-lg text-slate-400">通过区块链分布式激励机制，提升农户数据贡献收益28%，实现生产信息共享与价值激励</p>
        </div>

        <!-- 激励系统卡片 -->
        <div class="grid md:grid-cols-2 gap-8">
          
          <!-- 左侧：激励模型与算法 -->
          <div class="bg-slate-800/20 border border-slate-700 rounded-xl p-6">
            <h3 class="text-xl font-bold text-slate-100 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              农户激励模型
            </h3>
            
            <!-- 激励模型图 -->
            <div class="bg-slate-900/50 rounded-lg p-4 mb-6">
              <div class="grid grid-cols-3 gap-2 text-center mb-4">
                <div class="rounded bg-indigo-500/10 border border-indigo-500/30 p-2">
                  <div class="text-xs font-medium text-indigo-300">数据上传</div>
                  <div class="mt-1 text-[10px] text-slate-400">+3积分/条</div>
                </div>
                <div class="rounded bg-indigo-500/10 border border-indigo-500/30 p-2">
                  <div class="text-xs font-medium text-indigo-300">质量认证</div>
                  <div class="mt-1 text-[10px] text-slate-400">+10积分/次</div>
                </div>
                <div class="rounded bg-indigo-500/10 border border-indigo-500/30 p-2">
                  <div class="text-xs font-medium text-indigo-300">溯源查询</div>
                  <div class="mt-1 text-[10px] text-slate-400">+1积分/次</div>
                </div>
              </div>
              
              <!-- 激励流向图 -->
              <div class="mb-4 relative h-40">
                <!-- 节点与连线 -->
                <div class="absolute inset-0">
                  <!-- 中心节点 -->
                  <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center z-10">
                    <div class="text-xs text-indigo-300 text-center">激励池</div>
                  </div>
                  
                  <!-- 农户节点 - 左上 -->
                  <div class="absolute left-[15%] top-[15%] w-12 h-12 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                    <div class="text-[10px] text-slate-300">农户A</div>
                  </div>
                  <!-- 连线 - 左上到中心 -->
                  <svg class="absolute left-[22%] top-[22%] w-[30%] h-[30%]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="0" x2="100" y2="100" stroke="#6366F1" stroke-width="1" stroke-dasharray="4 2" />
                    <circle cx="60" cy="60" r="2" fill="#6366F1">
                      <animate attributeName="cx" values="0;100" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="cy" values="0;100" dur="3s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                  
                  <!-- 农户节点 - 右上 -->
                  <div class="absolute right-[15%] top-[15%] w-12 h-12 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                    <div class="text-[10px] text-slate-300">农户B</div>
                  </div>
                  <!-- 连线 - 右上到中心 -->
                  <svg class="absolute right-[22%] top-[22%] w-[30%] h-[30%]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <line x1="100" y1="0" x2="0" y2="100" stroke="#6366F1" stroke-width="1" stroke-dasharray="4 2" />
                    <circle cx="40" cy="60" r="2" fill="#6366F1">
                      <animate attributeName="cx" values="100;0" dur="4s" repeatCount="indefinite" />
                      <animate attributeName="cy" values="0;100" dur="4s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                  
                  <!-- 农户节点 - 左下 -->
                  <div class="absolute left-[15%] bottom-[15%] w-12 h-12 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                    <div class="text-[10px] text-slate-300">农户C</div>
                  </div>
                  <!-- 连线 - 左下到中心 -->
                  <svg class="absolute left-[22%] bottom-[22%] w-[30%] h-[30%]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="100" x2="100" y2="0" stroke="#6366F1" stroke-width="1" stroke-dasharray="4 2" />
                    <circle cx="40" cy="40" r="2" fill="#6366F1">
                      <animate attributeName="cx" values="0;100" dur="3.5s" repeatCount="indefinite" />
                      <animate attributeName="cy" values="100;0" dur="3.5s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                  
                  <!-- 农户节点 - 右下 -->
                  <div class="absolute right-[15%] bottom-[15%] w-12 h-12 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                    <div class="text-[10px] text-slate-300">农户D</div>
                  </div>
                  <!-- 连线 - 右下到中心 -->
                  <svg class="absolute right-[22%] bottom-[22%] w-[30%] h-[30%]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <line x1="100" y1="100" x2="0" y2="0" stroke="#6366F1" stroke-width="1" stroke-dasharray="4 2" />
                    <circle cx="60" cy="40" r="2" fill="#6366F1">
                      <animate attributeName="cx" values="100;0" dur="4.5s" repeatCount="indefinite" />
                      <animate attributeName="cy" values="100;0" dur="4.5s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                </div>
              </div>
              
              <div class="text-xs text-slate-400 text-center">
                基于贡献度的双向数据流与价值流动
              </div>
            </div>
            
            <!-- 积分兑换机制 -->
            <h4 class="text-sm font-semibold text-slate-300 mb-3">积分兑换与激励分配</h4>
            <div class="space-y-2 mb-6">
              <div class="flex justify-between items-center bg-slate-800/50 rounded p-2">
                <div class="text-xs text-slate-300">积分兑换比例</div>
                <div class="text-xs text-indigo-400 font-medium">100积分 = 5元</div>
              </div>
              <div class="flex justify-between items-center bg-slate-800/50 rounded p-2">
                <div class="text-xs text-slate-300">最低兑换门槛</div>
                <div class="text-xs text-indigo-400 font-medium">1000积分</div>
              </div>
              <div class="flex justify-between items-center bg-slate-800/50 rounded p-2">
                <div class="text-xs text-slate-300">兑换方式</div>
                <div class="text-xs text-indigo-400 font-medium">商城消费、现金、农资折扣</div>
              </div>
            </div>
            
            <!-- 激励效果 -->
            <div class="text-sm text-slate-400">
              <div class="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>农户参与度提升124%</span>
              </div>
              <div class="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>数据质量提升86%</span>
              </div>
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>农户收益增长28%</span>
              </div>
            </div>
          </div>
          
          <!-- 右侧：激励数据统计 -->
          <div class="bg-slate-800/20 border border-slate-700 rounded-xl p-6">
            <h3 class="text-xl font-bold text-slate-100 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              激励数据统计
            </h3>
            
            <!-- 累计数据 -->
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="bg-indigo-500/10 rounded-lg p-4 border border-indigo-500/30">
                <div class="text-xs text-slate-400 mb-1">累计参与农户</div>
                <div class="text-2xl font-bold text-slate-100">3,452</div>
                <div class="mt-1 text-xs text-green-400">
                  <span class="mr-1">↑ 28.5%</span>
                  <span class="text-slate-500">较去年</span>
                </div>
              </div>
              <div class="bg-indigo-500/10 rounded-lg p-4 border border-indigo-500/30">
                <div class="text-xs text-slate-400 mb-1">累计发放激励</div>
                <div class="text-2xl font-bold text-slate-100">¥276,358</div>
                <div class="mt-1 text-xs text-green-400">
                  <span class="mr-1">↑ 32.1%</span>
                  <span class="text-slate-500">较去年</span>
                </div>
              </div>
              <div class="bg-indigo-500/10 rounded-lg p-4 border border-indigo-500/30">
                <div class="text-xs text-slate-400 mb-1">数据贡献记录</div>
                <div class="text-2xl font-bold text-slate-100">531,842</div>
                <div class="mt-1 text-xs text-green-400">
                  <span class="mr-1">↑ 46.3%</span>
                  <span class="text-slate-500">较去年</span>
                </div>
              </div>
              <div class="bg-indigo-500/10 rounded-lg p-4 border border-indigo-500/30">
                <div class="text-xs text-slate-400 mb-1">人均年收益增长</div>
                <div class="text-2xl font-bold text-slate-100">+28%</div>
                <div class="mt-1 text-xs text-green-400">
                  <span class="mr-1">↑ 3.5%</span>
                  <span class="text-slate-500">较去年</span>
                </div>
              </div>
            </div>
            
            <!-- 月度激励统计图 -->
            <h4 class="text-sm font-semibold text-slate-300 mb-3">2024年月度激励发放统计</h4>
            <div class="relative h-48 mb-6">
              <!-- 背景网格 -->
              <div class="absolute inset-0">
                <div class="h-full w-full grid grid-rows-4 gap-0">
                  <div class="border-t border-slate-700"></div>
                  <div class="border-t border-slate-700"></div>
                  <div class="border-t border-slate-700"></div>
                  <div class="border-t border-slate-700"></div>
                </div>
              </div>
              
              <!-- 图表 -->
              <div class="absolute inset-x-0 bottom-0 h-full flex items-end">
                <div class="w-full flex justify-between items-end">
                  <!-- 柱状图 -->
                  <div class="w-6 bg-gradient-to-t from-indigo-500 to-indigo-300 rounded-t" style="height: 35%"></div>
                  <div class="w-6 bg-gradient-to-t from-indigo-500 to-indigo-300 rounded-t" style="height: 48%"></div>
                  <div class="w-6 bg-gradient-to-t from-indigo-500 to-indigo-300 rounded-t" style="height: 55%"></div>
                  <div class="w-6 bg-gradient-to-t from-indigo-500 to-indigo-300 rounded-t" style="height: 62%"></div>
                  <div class="w-6 bg-gradient-to-t from-indigo-500 to-indigo-300 rounded-t" style="height: 70%"></div>
                  <div class="w-6 bg-gradient-to-t from-indigo-500 to-indigo-300 rounded-t" style="height: 75%"></div>
                  
                  <!-- 线图 -->
                  <div class="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 240 110" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 85 L45 70 L70 58 L95 52 L120 45 L145 38" stroke="#10B981" fill="none" stroke-width="2" stroke-dasharray="2 2" />
                      <circle cx="20" cy="85" r="3" fill="#10B981" />
                      <circle cx="45" cy="70" r="3" fill="#10B981" />
                      <circle cx="70" cy="58" r="3" fill="#10B981" />
                      <circle cx="95" cy="52" r="3" fill="#10B981" />
                      <circle cx="120" cy="45" r="3" fill="#10B981" />
                      <circle cx="145" cy="38" r="3" fill="#10B981" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <!-- 月份标签 -->
              <div class="absolute inset-x-0 bottom-0 transform translate-y-full pt-2">
                <div class="flex justify-between text-xs text-slate-500">
                  <div>1月</div>
                  <div>2月</div>
                  <div>3月</div>
                  <div>4月</div>
                  <div>5月</div>
                  <div>6月</div>
                </div>
              </div>
            </div>
            
            <!-- 激励分配比例 -->
            <h4 class="text-sm font-semibold text-slate-300 mb-3">激励分配比例</h4>
            <div class="flex justify-between">
              <div class="flex items-center">
                <div class="w-3 h-3 bg-indigo-500 rounded-sm mr-2"></div>
                <div class="text-xs text-slate-300">生产环节: 45%</div>
              </div>
              <div class="flex items-center">
                <div class="w-3 h-3 bg-green-500 rounded-sm mr-2"></div>
                <div class="text-xs text-slate-300">质量认证: 30%</div>
              </div>
              <div class="flex items-center">
                <div class="w-3 h-3 bg-yellow-500 rounded-sm mr-2"></div>
                <div class="text-xs text-slate-300">销售环节: 25%</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 数据交易速度指标 -->
        <div class="mt-10 bg-slate-800/20 border border-slate-700 rounded-xl p-6">
          <h3 class="text-lg font-bold text-slate-100 mb-4">交易存证上链速度</h3>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div class="relative overflow-hidden rounded-lg bg-gradient-to-r from-indigo-500/10 to-indigo-700/10 border border-indigo-500/20 p-4">
              <div class="z-10 relative">
                <div class="text-xs text-slate-400 mb-1">平均交易确认</div>
                <div class="text-xl font-bold text-slate-100">1.8秒</div>
                <div class="text-xs text-green-400 mt-1">较传统区块链快65%</div>
              </div>
              <!-- 装饰线 -->
              <div class="absolute -right-2 top-0 bottom-0 w-16 opacity-30">
                <svg width="100%" height="100%" viewBox="0 0 30 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,100 L5,90 L10,95 L15,80 L20,85 L25,70 L30,0" stroke="#6366F1" stroke-width="2" fill="none" />
                </svg>
              </div>
            </div>
            <div class="relative overflow-hidden rounded-lg bg-gradient-to-r from-indigo-500/10 to-indigo-700/10 border border-indigo-500/20 p-4">
              <div class="z-10 relative">
                <div class="text-xs text-slate-400 mb-1">区块打包时间</div>
                <div class="text-xl font-bold text-slate-100">3.2秒</div>
                <div class="text-xs text-green-400 mt-1">较传统区块链快60%</div>
              </div>
              <!-- 装饰线 -->
              <div class="absolute -right-2 top-0 bottom-0 w-16 opacity-30">
                <svg width="100%" height="100%" viewBox="0 0 30 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,100 L5,80 L10,85 L15,75 L20,80 L25,65 L30,0" stroke="#6366F1" stroke-width="2" fill="none" />
                </svg>
              </div>
            </div>
            <div class="relative overflow-hidden rounded-lg bg-gradient-to-r from-indigo-500/10 to-indigo-700/10 border border-indigo-500/20 p-4">
              <div class="z-10 relative">
                <div class="text-xs text-slate-400 mb-1">数据上链延迟</div>
                <div class="text-xl font-bold text-slate-100">＜0.5秒</div>
                <div class="text-xs text-green-400 mt-1">实时数据处理能力</div>
              </div>
              <!-- 装饰线 -->
              <div class="absolute -right-2 top-0 bottom-0 w-16 opacity-30">
                <svg width="100%" height="100%" viewBox="0 0 30 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,80 L5,70 L10,75 L15,65 L20,60 L25,40 L30,0" stroke="#6366F1" stroke-width="2" fill="none" />
                </svg>
              </div>
            </div>
            <div class="relative overflow-hidden rounded-lg bg-gradient-to-r from-indigo-500/10 to-indigo-700/10 border border-indigo-500/20 p-4">
              <div class="z-10 relative">
                <div class="text-xs text-slate-400 mb-1">每日交易处理量</div>
                <div class="text-xl font-bold text-slate-100">3.1万笔</div>
                <div class="text-xs text-green-400 mt-1">可扩展至10万笔/日</div>
              </div>
              <!-- 装饰线 -->
              <div class="absolute -right-2 top-0 bottom-0 w-16 opacity-30">
                <svg width="100%" height="100%" viewBox="0 0 30 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,60 L5,70 L10,65 L15,80 L20,75 L25,85 L30,50" stroke="#6366F1" stroke-width="2" fill="none" />
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DeFiIncentives'
}
</script> 