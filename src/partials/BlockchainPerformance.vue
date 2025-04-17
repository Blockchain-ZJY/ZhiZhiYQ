<template>
  <section class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t border-slate-800">

        <!-- 区块链性能标题 -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <div class="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-200 pb-3">区块链底层技术</div>
          <h2 class="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">系统性能指标</h2>
          <p class="text-lg text-slate-400">基于高性能联盟链架构，满足农产品溯源应用的高吞吐、低延迟和稳定性需求</p>
        </div>

        <!-- 系统架构图 -->
        <div class="bg-slate-800/20 border border-slate-700 rounded-xl p-6 md:p-8 mb-8">
          <h3 class="text-xl font-bold text-slate-100 mb-6">区块链溯源系统架构</h3>
          
          <!-- 架构图 -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- 区块链层 -->
            <div class="rounded-lg bg-slate-800/50 border border-slate-700 p-4">
              <div class="text-indigo-400 font-semibold mb-4">底层技术架构</div>
              <div class="h-[200px] bg-gradient-to-b from-indigo-500/20 to-indigo-900/20 rounded-lg border border-indigo-500/30 flex flex-col justify-between p-4">
                <div class="flex items-center justify-between">
                  <span class="text-xs text-slate-300">联盟链节点网络</span>
                  <span class="px-2 py-0.5 text-[10px] bg-indigo-500/30 text-indigo-300 rounded">冷热数据分离</span>
                </div>
                
                <!-- 连接线和节点 -->
                <div class="relative h-20">
                  <!-- 水平线 -->
                  <div class="absolute top-1/2 left-0 right-0 h-px bg-indigo-500/40"></div>
                  <!-- 节点 -->
                  <div class="absolute top-1/2 left-[10%] w-3 h-3 bg-indigo-500 rounded-full transform -translate-y-1/2"></div>
                  <div class="absolute top-1/2 left-[30%] w-3 h-3 bg-indigo-500 rounded-full transform -translate-y-1/2"></div>
                  <div class="absolute top-1/2 left-[50%] w-3 h-3 bg-indigo-500 rounded-full transform -translate-y-1/2"></div>
                  <div class="absolute top-1/2 left-[70%] w-3 h-3 bg-indigo-500 rounded-full transform -translate-y-1/2"></div>
                  <div class="absolute top-1/2 left-[90%] w-3 h-3 bg-indigo-500 rounded-full transform -translate-y-1/2"></div>
                </div>
                
                <div class="flex items-center justify-between">
                  <span class="text-xs text-slate-300">共识机制</span>
                  <span class="px-2 py-0.5 text-[10px] bg-indigo-500/30 text-indigo-300 rounded">PBFT变种算法</span>
                </div>
              </div>
              <div class="mt-4 text-xs text-slate-400">
                <div class="flex justify-between mb-2">
                  <span>节点分布:</span>
                  <span class="text-slate-300">17个核心节点，35个轻节点</span>
                </div>
                <div class="flex justify-between mb-2">
                  <span>账本类型:</span>
                  <span class="text-slate-300">分片式联盟链</span>
                </div>
                <div class="flex justify-between">
                  <span>加密算法:</span>
                  <span class="text-slate-300">国密SM2/SM3/SM4</span>
                </div>
              </div>
            </div>
            
            <!-- 中间层 -->
            <div class="rounded-lg bg-slate-800/50 border border-slate-700 p-4">
              <div class="text-indigo-400 font-semibold mb-4">智能合约与业务逻辑</div>
              <div class="h-[200px] bg-gradient-to-b from-teal-500/20 to-teal-900/20 rounded-lg border border-teal-500/30 p-4 flex flex-col">
                <div class="grid grid-cols-2 gap-2">
                  <div class="border border-teal-500/30 bg-teal-500/10 rounded p-2 text-xs text-teal-300">农产品注册合约</div>
                  <div class="border border-teal-500/30 bg-teal-500/10 rounded p-2 text-xs text-teal-300">质量认证合约</div>
                  <div class="border border-teal-500/30 bg-teal-500/10 rounded p-2 text-xs text-teal-300">物流追踪合约</div>
                  <div class="border border-teal-500/30 bg-teal-500/10 rounded p-2 text-xs text-teal-300">交易结算合约</div>
                </div>
                <div class="flex-grow flex items-center justify-center">
                  <div class="px-3 py-2 border border-teal-500/50 bg-teal-500/20 text-teal-200 text-sm rounded-lg">
                    合约自动化执行引擎
                  </div>
                </div>
                <div class="text-xs text-slate-400 text-center">
                  支持44类农产品业务流程自动化执行
                </div>
              </div>
              <div class="mt-4 text-xs text-slate-400">
                <div class="flex justify-between mb-2">
                  <span>合约执行成本:</span>
                  <span class="text-green-400">降低58%</span>
                </div>
                <div class="flex justify-between mb-2">
                  <span>合约执行速度:</span>
                  <span class="text-green-400">提升270%</span>
                </div>
                <div class="flex justify-between">
                  <span>开发效率:</span>
                  <span class="text-green-400">提升185%</span>
                </div>
              </div>
            </div>
            
            <!-- 应用层 -->
            <div class="rounded-lg bg-slate-800/50 border border-slate-700 p-4">
              <div class="text-indigo-400 font-semibold mb-4">应用服务与接口</div>
              <div class="h-[200px] bg-gradient-to-b from-purple-500/20 to-purple-900/20 rounded-lg border border-purple-500/30 p-4 flex flex-col space-y-4">
                <div class="flex justify-between">
                  <div class="px-2 py-1 border border-purple-500/30 bg-purple-500/10 rounded text-xs text-purple-300">API网关</div>
                  <div class="px-2 py-1 border border-purple-500/30 bg-purple-500/10 rounded text-xs text-purple-300">身份认证</div>
                </div>
                
                <div class="flex-grow grid grid-cols-3 gap-2">
                  <div class="border border-purple-500/30 bg-purple-500/10 rounded p-1 text-[10px] text-purple-300 flex items-center justify-center">溯源查询</div>
                  <div class="border border-purple-500/30 bg-purple-500/10 rounded p-1 text-[10px] text-purple-300 flex items-center justify-center">数据上链</div>
                  <div class="border border-purple-500/30 bg-purple-500/10 rounded p-1 text-[10px] text-purple-300 flex items-center justify-center">真伪验证</div>
                  <div class="border border-purple-500/30 bg-purple-500/10 rounded p-1 text-[10px] text-purple-300 flex items-center justify-center">权限管理</div>
                  <div class="border border-purple-500/30 bg-purple-500/10 rounded p-1 text-[10px] text-purple-300 flex items-center justify-center">存证服务</div>
                  <div class="border border-purple-500/30 bg-purple-500/10 rounded p-1 text-[10px] text-purple-300 flex items-center justify-center">激励分配</div>
                </div>
                
                <div class="flex justify-between">
                  <div class="px-2 py-1 border border-purple-500/30 bg-purple-500/10 rounded text-xs text-purple-300">小程序</div>
                  <div class="px-2 py-1 border border-purple-500/30 bg-purple-500/10 rounded text-xs text-purple-300">Web应用</div>
                  <div class="px-2 py-1 border border-purple-500/30 bg-purple-500/10 rounded text-xs text-purple-300">第三方接入</div>
                </div>
              </div>
              <div class="mt-4 text-xs text-slate-400">
                <div class="flex justify-between mb-2">
                  <span>日均接口调用:</span>
                  <span class="text-slate-300">312,450次</span>
                </div>
                <div class="flex justify-between mb-2">
                  <span>API响应时间:</span>
                  <span class="text-slate-300">≤ 200ms</span>
                </div>
                <div class="flex justify-between">
                  <span>集成第三方:</span>
                  <span class="text-slate-300">28个系统</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 性能指标卡片 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- 交易处理能力 -->
          <div class="bg-slate-800/20 border border-slate-700 rounded-xl p-6">
            <div class="flex justify-between items-start mb-8">
              <div>
                <h3 class="text-lg font-bold text-slate-100 mb-1">交易处理能力</h3>
                <p class="text-sm text-slate-400">系统每秒可处理交易量</p>
              </div>
              <div class="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-500/10 text-indigo-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div class="flex items-end gap-2">
              <div class="text-3xl font-bold text-slate-100">3,600</div>
              <div class="text-sm text-slate-400 mb-1">TPS</div>
            </div>
            <div class="text-xs text-green-400 mt-1">较传统区块链提升10倍</div>
            
            <!-- 进度条 -->
            <div class="mt-6">
              <div class="flex justify-between text-xs mb-1">
                <span class="text-slate-400">测试环境峰值</span>
                <span class="text-slate-300">5,200 TPS</span>
              </div>
              <div class="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full" style="width: 70%"></div>
              </div>
            </div>
          </div>
          
          <!-- 交易确认时间 -->
          <div class="bg-slate-800/20 border border-slate-700 rounded-xl p-6">
            <div class="flex justify-between items-start mb-8">
              <div>
                <h3 class="text-lg font-bold text-slate-100 mb-1">交易确认时间</h3>
                <p class="text-sm text-slate-400">从提交到最终确认的时间</p>
              </div>
              <div class="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-500/10 text-indigo-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div class="flex items-end gap-2">
              <div class="text-3xl font-bold text-slate-100">1.8</div>
              <div class="text-sm text-slate-400 mb-1">秒</div>
            </div>
            <div class="text-xs text-green-400 mt-1">较传统区块链降低65%</div>
            
            <!-- 历史对比 -->
            <div class="mt-6 flex gap-2">
              <div class="flex-1 bg-slate-800 rounded-lg p-2">
                <div class="text-xs text-slate-400 mb-1">2022年</div>
                <div class="font-bold text-slate-300">4.5秒</div>
              </div>
              <div class="flex-1 bg-slate-800 rounded-lg p-2">
                <div class="text-xs text-slate-400 mb-1">2023年</div>
                <div class="font-bold text-slate-300">2.7秒</div>
              </div>
              <div class="flex-1 bg-indigo-900/30 border border-indigo-500/30 rounded-lg p-2">
                <div class="text-xs text-indigo-400 mb-1">2024年</div>
                <div class="font-bold text-indigo-300">1.8秒</div>
              </div>
            </div>
          </div>
          
          <!-- 存储成本优化 -->
          <div class="bg-slate-800/20 border border-slate-700 rounded-xl p-6">
            <div class="flex justify-between items-start mb-8">
              <div>
                <h3 class="text-lg font-bold text-slate-100 mb-1">存储成本优化</h3>
                <p class="text-sm text-slate-400">链上数据分片与压缩存储</p>
              </div>
              <div class="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-500/10 text-indigo-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>
            <div class="flex items-end gap-2">
              <div class="text-3xl font-bold text-green-400">-36%</div>
              <div class="text-sm text-slate-400 mb-1">存储开销</div>
            </div>
            <div class="text-xs text-slate-300 mt-1">通过数据分片与智能压缩技术</div>
            
            <!-- 饼图 -->
            <div class="mt-6 flex items-center gap-4">
              <div class="w-16 h-16 rounded-full border-4 border-indigo-500 relative">
                <div class="absolute inset-0 rounded-full border-4 border-transparent border-t-slate-700 border-r-slate-700" style="clip: rect(0, 16px, 32px, 0)"></div>
              </div>
              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 bg-indigo-500 rounded-sm"></div>
                  <div class="text-xs text-slate-300">链上数据 (64%)</div>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 bg-slate-700 rounded-sm"></div>
                  <div class="text-xs text-slate-300">链下存储 (36%)</div>
                </div>
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
  name: 'BlockchainPerformance',
}
</script> 