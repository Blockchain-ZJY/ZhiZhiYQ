<template>
  <section class="relative">

    <!-- 径向渐变 -->
    <div class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square" aria-hidden="true">
      <div class="absolute inset-0 translate-z-0 bg-blue-500 rounded-full blur-[120px] opacity-30"></div>
      <div class="absolute w-64 h-64 translate-z-0 bg-blue-400 rounded-full blur-[80px] opacity-70"></div>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-10 md:pt-40">

        <!-- Hero 内容 -->
        <div class="text-center">
          <div class="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-200 pb-3">RuralGPT 区块链浏览器</div>
          <h1 class="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-6">用数据说话的技术突破</h1>
          
          <!-- 技术区块链浏览器 -->
          <div class="max-w-3xl mx-auto mt-10">
            <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="text-center p-4">
                  <div class="text-4xl font-bold text-blue-400">28%</div>
                  <p class="text-sm text-slate-300 mt-2">农户数据贡献<br>收益提升</p>
                </div>
                <div class="text-center p-4">
                  <div class="text-4xl font-bold text-blue-400">32%</div>
                  <p class="text-sm text-slate-300 mt-2">乡镇医疗<br>诊断准确率提升</p>
                </div>
                <div class="text-center p-4">
                  <div class="text-4xl font-bold text-blue-400">182%</div>
                  <p class="text-sm text-slate-300 mt-2">民间文化<br>数据增长率</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 核心应用案例 -->
          <div class="flex flex-col md:flex-row gap-4 justify-between mt-8 max-w-4xl mx-auto">
            <div class="flex-1 bg-blue-900/20 rounded-lg p-4 border border-blue-800/30 text-center">
              <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-800/30 mb-3">
                <svg class="w-6 h-6 text-blue-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M17 12C17 14.76 14.76 17 12 17V7C14.76 7 17 9.24 17 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 class="text-blue-400 font-semibold text-lg mb-2">A县数字农业平台</h3>
              <p class="text-slate-300 text-sm">覆盖 32 个村<br>农户收入提升 21%</p>
            </div>
            
            <div class="flex-1 bg-blue-900/20 rounded-lg p-4 border border-blue-800/30 text-center">
              <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-800/30 mb-3">
                <svg class="w-6 h-6 text-blue-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 2V5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16 2V5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3.5 9.08997H20.5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11.9955 13.7H12.0045" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.29431 13.7H8.30329" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.29431 16.7H8.30329" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 class="text-blue-400 font-semibold text-lg mb-2">B市乡村医疗系统</h3>
              <p class="text-slate-300 text-sm">覆盖 18 个乡镇卫生院<br>诊断准确率提升 32%</p>
            </div>
            
            <div class="flex-1 bg-blue-900/20 rounded-lg p-4 border border-blue-800/30 text-center">
              <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-800/30 mb-3">
                <svg class="w-6 h-6 text-blue-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2.67001 18.95L7.60001 15.64C8.39001 15.11 9.53001 15.17 10.24 15.78L10.57 16.07C11.35 16.74 12.61 16.74 13.39 16.07L17.55 12.5C18.33 11.83 19.59 11.83 20.37 12.5L22 13.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 class="text-blue-400 font-semibold text-lg mb-2">C市民俗文化数字馆</h3>
              <p class="text-slate-300 text-sm">记录 12 种濒危方言<br>数字化保存率 96%</p>
            </div>
          </div>
          
        </div>

      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'HeroResults'
}
</script> 