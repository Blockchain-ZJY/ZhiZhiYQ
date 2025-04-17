<template>
  <section class="relative">
    <!-- 渐变背景 -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
      <div class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1/3 aspect-square">
        <div class="absolute inset-0 translate-z-0 bg-blue-500 rounded-full blur-[120px] opacity-50"></div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- 页面标题 -->
        <div class="text-center pb-12 md:pb-16">
          <div class="relative inline-flex mb-4" data-aos="fade-up">
            <div class="inline-flex items-center justify-center text-blue-500 bg-blue-500/15 rounded-full px-4 py-1.5">
              <span class="text-sm font-semibold">技术驱动创新</span>
            </div>
          </div>
          <h1 class="h1 font-red-hat-display mb-4" data-aos="fade-up">全栈技术架构</h1>
          <div class="max-w-3xl mx-auto">
            <p class="text-xl text-slate-400" data-aos="fade-up" data-aos-delay="100">
              从底层基础设施到上层应用服务，构建完整的智慧农村数字化解决方案
            </p>
          </div>
        </div>

        <!-- 技术架构图 -->
        <div class="relative" data-aos="fade-up" data-aos-delay="200">
          <!-- 架构层级 -->
          <div class="grid gap-6 md:grid-cols-3">
            <!-- 应用层 -->
            <div class="bg-slate-800/50 rounded-lg p-5 border border-slate-700/60">
              <h3 class="text-lg font-semibold text-blue-400 mb-4">应用服务层</h3>
              <div class="space-y-3">
                <div class="flex items-center p-3 bg-slate-900/50 rounded">
                  <svg class="w-4 h-4 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 7H7v6h6V7z" />
                    <path fill-rule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clip-rule="evenodd" />
                  </svg>
                  <div>
                    <div class="text-sm font-medium text-slate-200">智能决策系统</div>
                    <div class="text-xs text-slate-400">Vue 3 + TypeScript</div>
                  </div>
                </div>
                <div class="flex items-center p-3 bg-slate-900/50 rounded">
                  <svg class="w-4 h-4 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
                  </svg>
                  <div>
                    <div class="text-sm font-medium text-slate-200">数据可视化平台</div>
                    <div class="text-xs text-slate-400">ECharts + D3.js</div>
                  </div>
                </div>
                <div class="flex items-center p-3 bg-slate-900/50 rounded">
                  <svg class="w-4 h-4 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                  <div>
                    <div class="text-sm font-medium text-slate-200">管理控制台</div>
                    <div class="text-xs text-slate-400">Element Plus</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 服务层 -->
            <div class="bg-slate-800/50 rounded-lg p-5 border border-slate-700/60">
              <h3 class="text-lg font-semibold text-blue-400 mb-4">微服务层</h3>
              <div class="space-y-3">
                <div class="flex items-center p-3 bg-slate-900/50 rounded">
                  <svg class="w-4 h-4 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
                  </svg>
                  <div>
                    <div class="text-sm font-medium text-slate-200">Spring Cloud</div>
                    <div class="text-xs text-slate-400">微服务框架</div>
                  </div>
                </div>
                <div class="flex items-center p-3 bg-slate-900/50 rounded">
                  <svg class="w-4 h-4 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                  <div>
                    <div class="text-sm font-medium text-slate-200">GraphQL</div>
                    <div class="text-xs text-slate-400">API 查询语言</div>
                  </div>
                </div>
                <div class="flex items-center p-3 bg-slate-900/50 rounded">
                  <svg class="w-4 h-4 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 7H7v6h6V7z" />
                    <path fill-rule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clip-rule="evenodd" />
                  </svg>
                  <div>
                    <div class="text-sm font-medium text-slate-200">gRPC</div>
                    <div class="text-xs text-slate-400">服务间通信</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 基础设施层 -->
            <div class="bg-slate-800/50 rounded-lg p-5 border border-slate-700/60">
              <h3 class="text-lg font-semibold text-blue-400 mb-4">基础设施层</h3>
              <div class="space-y-3">
                <div class="flex items-center p-3 bg-slate-900/50 rounded">
                  <svg class="w-4 h-4 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
                  </svg>
                  <div>
                    <div class="text-sm font-medium text-slate-200">Kubernetes</div>
                    <div class="text-xs text-slate-400">容器编排</div>
                  </div>
                </div>
                <div class="flex items-center p-3 bg-slate-900/50 rounded">
                  <svg class="w-4 h-4 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                  <div>
                    <div class="text-sm font-medium text-slate-200">Docker</div>
                    <div class="text-xs text-slate-400">容器化部署</div>
                  </div>
                </div>
                <div class="flex items-center p-3 bg-slate-900/50 rounded">
                  <svg class="w-4 h-4 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 7H7v6h6V7z" />
                    <path fill-rule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clip-rule="evenodd" />
                  </svg>
                  <div>
                    <div class="text-sm font-medium text-slate-200">Prometheus</div>
                    <div class="text-xs text-slate-400">监控告警</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 技术特点 -->
          <div class="mt-8 grid gap-6 md:grid-cols-2">
            <div class="bg-slate-800/50 rounded-lg p-5 border border-slate-700/60">
              <h3 class="text-lg font-semibold text-blue-400 mb-4">技术优势</h3>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-blue-500 mr-2 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-slate-300">微服务架构，高可用性和可扩展性</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-blue-500 mr-2 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-slate-300">容器化部署，灵活的资源调度</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-blue-500 mr-2 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-slate-300">前沿AI技术，智能化决策支持</span>
                </li>
              </ul>
            </div>

            <div class="bg-slate-800/50 rounded-lg p-5 border border-slate-700/60">
              <h3 class="text-lg font-semibold text-blue-400 mb-4">技术创新</h3>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-blue-500 mr-2 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-slate-300">自研农业AI模型，精准的数据分析</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-blue-500 mr-2 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-slate-300">区块链溯源技术，保障数据可信</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-blue-500 mr-2 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-slate-300">边缘计算技术，实现本地智能</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroAbout',
}
</script>