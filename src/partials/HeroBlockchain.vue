<template>
  <section class="relative">
    <!-- 渐变背景 -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-2/3 aspect-square">
        <div class="absolute inset-0 translate-z-0 bg-indigo-500 rounded-full blur-[120px] opacity-30"></div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- 中心内容 -->
        <div class="text-center">
          <div class="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-200 pb-3">农产品区块链溯源系统</div>
          <h1 class="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-6">区块链驱动的农业供应链革命</h1>
          <div class="max-w-3xl mx-auto">
            <p class="text-lg text-slate-400 mb-8">打造农产品全生命周期可信数据网络，实现从田间到餐桌的全流程可溯源、可验证、不可篡改，保障农产品质量安全，促进农业数字化转型</p>
            <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center mb-8">
              <div>
                <a class="btn text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full mb-4 sm:w-auto sm:mb-0" href="#blockchain-explorer">
                  浏览区块链数据
                </a>
              </div>
              <div>
                <a class="btn text-slate-200 bg-slate-900 hover:bg-slate-800 border-slate-900 w-full sm:w-auto sm:ml-4" href="#contract-management">
                  智能合约管理
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- 区块链实时数据卡片 -->
        <div class="relative max-w-6xl mx-auto px-4 sm:px-6 mt-16">
          <div class="bg-slate-800/20 border border-slate-800 rounded-xl backdrop-blur-sm">
            <div class="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800">
              <!-- 总交易数 -->
              <div class="px-5 py-6 text-center">
                <div class="text-xl md:text-2xl font-bold text-slate-100">
                  <span class="text-indigo-500">76,429</span>
                </div>
                <div class="text-sm text-slate-400 mt-1">农产品交易记录</div>
              </div>
              <!-- 覆盖农产品 -->
              <div class="px-5 py-6 text-center">
                <div class="text-xl md:text-2xl font-bold text-slate-100">
                  <span class="text-indigo-500">17</span> 类
                </div>
                <div class="text-sm text-slate-400 mt-1">覆盖农产品品类</div>
              </div>
              <!-- 溯源准确率 -->
              <div class="px-5 py-6 text-center">
                <div class="text-xl md:text-2xl font-bold text-slate-100">
                  <span class="text-indigo-500">99.4</span>%
                </div>
                <div class="text-sm text-slate-400 mt-1">溯源查询准确率</div>
              </div>
              <!-- 合约执行 -->
              <div class="px-5 py-6 text-center">
                <div class="text-xl md:text-2xl font-bold text-slate-100">
                  <span class="text-indigo-500">-58</span>%
                </div>
                <div class="text-sm text-slate-400 mt-1">降低合约执行成本</div>
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
  name: 'HeroBlockchain',
}
</script> 