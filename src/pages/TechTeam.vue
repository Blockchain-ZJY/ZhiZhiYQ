<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
    <Header />

    <main class="grow">
      <!-- 页面标题 -->
      <section class="relative">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">
            <div class="max-w-3xl mx-auto text-center">
              <h1 class="h1 font-red-hat-display mb-4">技术研发团队</h1>
              <p class="text-xl text-slate-400">专业的技术团队，打造智能化解决方案</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 技术能力展示 -->
      <section>
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="py-12 md:py-20">
            <!-- 技术方向 -->
            <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 class="h2 font-red-hat-display mb-4">核心技术方向</h2>
              <p class="text-xl text-slate-400">深耕人工智能、区块链、云原生等前沿技术领域</p>
            </div>

            <!-- 技术领域卡片 -->
            <div class="grid gap-6 md:grid-cols-3 md:gap-8">
              <!-- AI技术 -->
              <div class="bg-slate-800/50 rounded-lg p-5 border border-slate-700/60">
                <div class="flex items-center mb-4">
                  <svg class="w-8 h-8 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <h3 class="text-xl font-semibold text-slate-200">人工智能技术</h3>
                </div>
                <ul class="space-y-3 text-sm">
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-blue-500 mr-2 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-slate-400">深度学习模型开发</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-blue-500 mr-2 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-slate-400">计算机视觉算法</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-blue-500 mr-2 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-slate-400">自然语言处理</span>
                  </li>
                </ul>
              </div>

              <!-- 区块链技术 -->
              <div class="bg-slate-800/50 rounded-lg p-5 border border-slate-700/60">
                <div class="flex items-center mb-4">
                  <svg class="w-8 h-8 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <h3 class="text-xl font-semibold text-slate-200">区块链技术</h3>
                </div>
                <ul class="space-y-3 text-sm">
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-blue-500 mr-2 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-slate-400">智能合约开发</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-blue-500 mr-2 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-slate-400">分布式账本</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-blue-500 mr-2 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-slate-400">共识机制研究</span>
                  </li>
                </ul>
              </div>

              <!-- 云原生技术 -->
              <div class="bg-slate-800/50 rounded-lg p-5 border border-slate-700/60">
                <div class="flex items-center mb-4">
                  <svg class="w-8 h-8 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                  <h3 class="text-xl font-semibold text-slate-200">云原生技术</h3>
                </div>
                <ul class="space-y-3 text-sm">
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-blue-500 mr-2 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-slate-400">微服务架构</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-blue-500 mr-2 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-slate-400">容器化部署</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-blue-500 mr-2 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-slate-400">DevOps实践</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- 技术成果 -->
            <div class="mt-16">
              <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h2 class="h2 font-red-hat-display mb-4">技术创新成果</h2>
                <p class="text-xl text-slate-400">持续创新，推动技术进步</p>
              </div>

              <div class="grid gap-6 md:grid-cols-2">
                <!-- 专利成果 -->
                <div class="bg-slate-800/50 rounded-lg p-6 border border-slate-700/60">
                  <div class="flex items-center mb-4">
                    <svg class="w-8 h-8 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <h3 class="text-xl font-semibold text-slate-200">技术专利</h3>
                  </div>
                  <div class="space-y-4">
                    <div class="bg-slate-900/50 p-4 rounded">
                      <div class="text-sm font-medium text-blue-400 mb-1">农产品质量追溯系统</div>
                      <p class="text-sm text-slate-400">基于区块链的农产品全生命周期追溯专利技术</p>
                    </div>
                    <div class="bg-slate-900/50 p-4 rounded">
                      <div class="text-sm font-medium text-blue-400 mb-1">智能识别算法</div>
                      <p class="text-sm text-slate-400">农作物病虫害图像识别与分类算法专利</p>
                    </div>
                  </div>
                </div>

                <!-- 技术标准 -->
                <div class="bg-slate-800/50 rounded-lg p-6 border border-slate-700/60">
                  <div class="flex items-center mb-4">
                    <svg class="w-8 h-8 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <h3 class="text-xl font-semibold text-slate-200">技术标准</h3>
                  </div>
                  <div class="space-y-4">
                    <div class="bg-slate-900/50 p-4 rounded">
                      <div class="text-sm font-medium text-blue-400 mb-1">数据接口规范</div>
                      <p class="text-sm text-slate-400">农业物联网设备数据接入标准规范</p>
                    </div>
                    <div class="bg-slate-900/50 p-4 rounded">
                      <div class="text-sm font-medium text-blue-400 mb-1">区块链存证标准</div>
                      <p class="text-sm text-slate-400">农产品溯源信息区块链存证技术规范</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'TechTeam',
  components: {
    Header,
    Footer,
  }
}
</script> 