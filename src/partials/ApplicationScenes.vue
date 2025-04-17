<template>
  <section class="relative overflow-hidden">
    <!-- 背景装饰元素 -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-0 opacity-15" style="background-image: radial-gradient(circle at 1px 1px, rgba(56, 139, 253, 0.1) 1px, transparent 0); background-size: 40px 40px;"></div>
      
      <!-- 星点装饰 -->
      <div class="absolute w-full h-full">
        <div class="absolute top-1/5 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style="animation-delay: 0.3s;"></div>
        <div class="absolute top-2/5 left-3/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse" style="animation-delay: 1.5s;"></div>
        <div class="absolute top-3/4 left-1/5 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style="animation-delay: 1.8s;"></div>
        <div class="absolute top-2/3 right-1/5 w-1 h-1 bg-blue-300 rounded-full animate-pulse" style="animation-delay: 0.6s;"></div>
      </div>
      
      <!-- 发光渐变 -->
      <div class="absolute -top-1/2 right-0 w-full h-full bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-transparent rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 -left-1/2 w-full h-full bg-gradient-to-tr from-blue-900/10 via-blue-600/5 to-transparent rounded-full blur-3xl"></div>
      
      <!-- 装饰性线条 -->
      <div class="absolute top-1/4 left-1/5 h-full w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
      <div class="absolute bottom-1/3 right-1/5 w-1/3 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
      <div class="py-12 md:py-20 border-t border-slate-800">

        <!-- 部分标题 -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500/80 via-blue-500 to-blue-500/80">市场与社会需求</h2>
          <p class="text-lg text-slate-300 mt-4">乡村振兴的三大AI刚需场景</p>
        </div>
        
        <!-- 场景1：产业升级 -->
        <div class="max-w-4xl mx-auto mb-20">
          <div class="md:grid md:grid-cols-12 md:gap-12 md:items-center">
            <!-- 图片 -->
            <div class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 mb-8 md:mb-0" data-aos="fade-right">
              <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-tr from-blue-500 to-blue-400 rounded-2xl -m-4 -rotate-1 opacity-20 blur-lg"></div>
                <div class="relative bg-slate-900 rounded-2xl overflow-hidden">
                  <img class="w-full" src="../images/产业升级.png" alt="产业升级" />
                </div>
              </div>
            </div>
            <!-- 内容 -->
            <div class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7" data-aos="fade-left">
              <div class="mb-2 inline-flex text-sm font-medium text-blue-400 py-1 px-3 bg-blue-900/20 rounded-full">场景一</div>
              <h3 class="h3 text-blue-500 mb-4">产业升级</h3>
              
              <div class="bg-slate-800/20 p-4 rounded-lg mb-4">
                <h4 class="text-blue-300 font-semibold mb-2">需求</h4>
                <p class="text-sm text-slate-300">3.2万"一村一品"产品溯源不足 30%</p>
              </div>
              
              <div class="bg-slate-800/20 p-4 rounded-lg mb-4">
                <h4 class="text-blue-300 font-semibold mb-2">技术缺陷</h4>
                <p class="text-sm text-slate-300">现有溯源系统区块链节点覆盖率&lt;15%</p>
              </div>
              
              <div class="bg-blue-900/20 p-4 rounded-lg">
                <h4 class="text-blue-300 font-semibold mb-2">RuralGPT 解决方案</h4>
                <ul class="text-sm text-slate-300 space-y-1">
                  <li class="flex items-start">
                    <svg class="w-4 h-4 text-blue-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    产供销存证链：覆盖17类农产品全流程
                  </li>
                  <li class="flex items-start">
                    <svg class="w-4 h-4 text-blue-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    智能合约引擎：自动执行44类农产品全流程
                  </li>
                  <li class="flex items-start">
                    <svg class="w-4 h-4 text-blue-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    去中心化激励：农户数据贡献收益提升28%
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 场景2：民生服务 -->
        <div class="max-w-4xl mx-auto mb-20">
          <div class="md:grid md:grid-cols-12 md:gap-12 md:items-center">
            <!-- 内容 -->
            <div class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 order-2 md:order-1" data-aos="fade-right">
              <div class="mb-2 inline-flex text-sm font-medium text-blue-400 py-1 px-3 bg-blue-900/20 rounded-full">场景二</div>
              <h3 class="h3 text-blue-500 mb-4">民生服务</h3>
              
              <div class="bg-slate-800/20 p-4 rounded-lg mb-4">
                <h4 class="text-blue-300 font-semibold mb-2">需求</h4>
                <p class="text-sm text-slate-300">基层医疗误诊率28% VS AI诊断空白</p>
              </div>
              
              <div class="bg-slate-800/20 p-4 rounded-lg mb-4">
                <h4 class="text-blue-300 font-semibold mb-2">技术缺陷</h4>
                <p class="text-sm text-slate-300">乡村医疗影像数据标注成本￥8/张</p>
              </div>
              
              <div class="bg-blue-900/20 p-4 rounded-lg">
                <h4 class="text-blue-300 font-semibold mb-2">RuralGPT 解决方案</h4>
                <ul class="text-sm text-slate-300 space-y-1">
                  <li class="flex items-start">
                    <svg class="w-4 h-4 text-blue-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    轻量化医疗AI：仅需占用1GB边缘设备存储
                  </li>
                  <li class="flex items-start">
                    <svg class="w-4 h-4 text-blue-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    联邦学习框架：隐私保护下实现医疗数据共享
                  </li>
                  <li class="flex items-start">
                    <svg class="w-4 h-4 text-blue-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    自动化影像标注：标注成本降低62%
                  </li>
                </ul>
              </div>
            </div>
            <!-- 图片 -->
            <div class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 mb-8 md:mb-0 order-1 md:order-2" data-aos="fade-left">
              <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-tr from-blue-500 to-blue-400 rounded-2xl -m-4 rotate-1 opacity-20 blur-lg"></div>
                <div class="relative bg-slate-900 rounded-2xl overflow-hidden">
                  <img class="w-full" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80" alt="民生服务" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 场景3：文化传承 -->
        <div class="max-w-4xl mx-auto">
          <div class="md:grid md:grid-cols-12 md:gap-12 md:items-center">
            <!-- 图片 -->
            <div class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 mb-8 md:mb-0" data-aos="fade-right">
              <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-tr from-blue-500 to-blue-400 rounded-2xl -m-4 -rotate-1 opacity-20 blur-lg"></div>
                <div class="relative bg-slate-900 rounded-2xl overflow-hidden">
                  <img class="w-full" src="https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80" alt="文化传承" />
                </div>
              </div>
            </div>
            <!-- 内容 -->
            <div class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7" data-aos="fade-left">
              <div class="mb-2 inline-flex text-sm font-medium text-blue-400 py-1 px-3 bg-blue-900/20 rounded-full">场景三</div>
              <h3 class="h3 text-blue-500 mb-4">文化传承</h3>
              
              <div class="bg-slate-800/20 p-4 rounded-lg mb-4">
                <h4 class="text-blue-300 font-semibold mb-2">需求</h4>
                <p class="text-sm text-slate-300">87%方言濒危 vs 现有语音数据库&lt;10TB</p>
              </div>
              
              <div class="bg-slate-800/20 p-4 rounded-lg mb-4">
                <h4 class="text-blue-300 font-semibold mb-2">技术缺陷</h4>
                <p class="text-sm text-slate-300">方言ASR词错误率&gt;40%</p>
              </div>
              
              <div class="bg-blue-900/20 p-4 rounded-lg">
                <h4 class="text-blue-300 font-semibold mb-2">RuralGPT 解决方案</h4>
                <ul class="text-sm text-slate-300 space-y-1">
                  <li class="flex items-start">
                    <svg class="w-4 h-4 text-blue-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    方言语音预训练大模型：准确率提升35%
                  </li>
                  <li class="flex items-start">
                    <svg class="w-4 h-4 text-blue-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    民间文化知识图谱：跨模态知识存储与关联
                  </li>
                  <li class="flex items-start">
                    <svg class="w-4 h-4 text-blue-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    社区共建激励机制：数据增长率提升182%
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <p class="text-lg text-slate-400" data-aos="fade-up" data-aos-delay="300">现有技术难以支撑多模态场景融合</p>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ApplicationScenes'
}
</script> 