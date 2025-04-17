<template>
  <section class="relative">
    <!-- 渐变背景 -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-2/3 aspect-square">
        <div class="absolute inset-0 translate-z-0 bg-indigo-500 rounded-full blur-[100px] opacity-30"></div>
      </div>
    </div>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">

        <!-- 区块链统计指标 -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">农产品区块链溯源数据</h2>
          <p class="text-lg text-slate-400">基于分布式账本技术构建不可篡改的农产品全生命周期数据网络，实现品质可追溯、流程可验证</p>
        </div>

        <!-- 图表和统计数据 -->
        <div class="grid md:grid-cols-2 gap-8 md:gap-12">
          
          <!-- 左侧：溯源体系覆盖情况 -->
          <div class="bg-slate-800/30 border border-slate-700 rounded-xl p-6 backdrop-blur-sm">
            <h3 class="text-xl font-bold text-slate-100 mb-5">产供销溯源链覆盖情况</h3>
            <!-- 农产品类别统计 -->
            <div class="grid grid-cols-3 gap-4 mb-6">
              <div class="text-center p-3 bg-slate-800/30 border border-slate-700 rounded-lg backdrop-blur-sm">
                <div class="text-2xl font-bold text-indigo-400">17</div>
                <div class="text-xs text-slate-400">农产品类别</div>
              </div>
              <div class="text-center p-3 bg-slate-800/30 border border-slate-700 rounded-lg backdrop-blur-sm">
                <div class="text-2xl font-bold text-indigo-400">344</div>
                <div class="text-xs text-slate-400">具体品种</div>
              </div>
              <div class="text-center p-3 bg-slate-800/30 border border-slate-700 rounded-lg backdrop-blur-sm">
                <div class="text-2xl font-bold text-indigo-400">128</div>
                <div class="text-xs text-slate-400">合作基地</div>
              </div>
            </div>
            
            <!-- 溯源数据类型 -->
            <h4 class="text-sm font-semibold text-slate-300 mb-3">溯源数据类型分布</h4>
            <div class="space-y-3">
              <div>
                <div class="flex justify-between text-sm mb-1">
                  <div class="text-slate-400">生产环节</div>
                  <div class="text-indigo-400 font-medium">42%</div>
                </div>
                <div class="w-full h-2 bg-slate-800/30 border border-slate-700 rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full" style="width: 42%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-sm mb-1">
                  <div class="text-slate-400">加工环节</div>
                  <div class="text-indigo-400 font-medium">28%</div>
                </div>
                <div class="w-full h-2 bg-slate-800/30 border border-slate-700 rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full" style="width: 28%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-sm mb-1">
                  <div class="text-slate-400">物流环节</div>
                  <div class="text-indigo-400 font-medium">16%</div>
                </div>
                <div class="w-full h-2 bg-slate-800/30 border border-slate-700 rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full" style="width: 16%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-sm mb-1">
                  <div class="text-slate-400">销售环节</div>
                  <div class="text-indigo-400 font-medium">14%</div>
                </div>
                <div class="w-full h-2 bg-slate-800/30 border border-slate-700 rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full" style="width: 14%"></div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 右侧：溯源系统性能指标 -->
          <div class="bg-slate-800/30 border border-slate-700 rounded-xl p-6 backdrop-blur-sm">
            <h3 class="text-xl font-bold text-slate-100 mb-5">区块链系统性能指标</h3>
            
            <!-- 关键性能指标 -->
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="p-3 bg-slate-800/30 border border-slate-700 rounded-lg backdrop-blur-sm">
                <div class="text-xs text-slate-400 mb-1">溯源查询准确率</div>
                <div class="text-xl font-bold text-indigo-400">99.4%</div>
                <div class="text-xs text-green-500 mt-1">↑ 较传统提升5.7%</div>
              </div>
              <div class="p-3 bg-slate-800/30 border border-slate-700 rounded-lg backdrop-blur-sm">
                <div class="text-xs text-slate-400 mb-1">数据存储成本</div>
                <div class="text-xl font-bold text-indigo-400">-36%</div>
                <div class="text-xs text-green-500 mt-1">↓ 较传统降低36%</div>
              </div>
              <div class="p-3 bg-slate-800/30 border border-slate-700 rounded-lg backdrop-blur-sm">
                <div class="text-xs text-slate-400 mb-1">交易确认时间</div>
                <div class="text-xl font-bold text-indigo-400">1.8秒</div>
                <div class="text-xs text-green-500 mt-1">↓ 较传统降低65%</div>
              </div>
              <div class="p-3 bg-slate-800/30 border border-slate-700 rounded-lg backdrop-blur-sm">
                <div class="text-xs text-slate-400 mb-1">系统并发处理</div>
                <div class="text-xl font-bold text-indigo-400">3,600 TPS</div>
                <div class="text-xs text-green-500 mt-1">↑ 较传统提升10倍</div>
              </div>
            </div>
            
            <!-- 交易记录增长 -->
            <h4 class="text-sm font-semibold text-slate-300 mb-3">交易记录月度增长</h4>
            <div class="h-36 flex items-end justify-between space-x-1">
              <div class="w-6 bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t" style="height: 40%"></div>
              <div class="w-6 bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t" style="height: 55%"></div>
              <div class="w-6 bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t" style="height: 45%"></div>
              <div class="w-6 bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t" style="height: 65%"></div>
              <div class="w-6 bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t" style="height: 60%"></div>
              <div class="w-6 bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t" style="height: 70%"></div>
              <div class="w-6 bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t" style="height: 75%"></div>
              <div class="w-6 bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t" style="height: 60%"></div>
              <div class="w-6 bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t" style="height: 75%"></div>
              <div class="w-6 bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t" style="height: 80%"></div>
              <div class="w-6 bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t" style="height: 90%"></div>
              <div class="w-6 bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t" style="height: 100%"></div>
            </div>
            <div class="flex justify-between text-xs text-slate-500 mt-2">
              <div>1月</div>
              <div>2月</div>
              <div>3月</div>
              <div>4月</div>
              <div>5月</div>
              <div>6月</div>
              <div>7月</div>
              <div>8月</div>
              <div>9月</div>
              <div>10月</div>
              <div>11月</div>
              <div>12月</div>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlockchainStats',
}
</script> 