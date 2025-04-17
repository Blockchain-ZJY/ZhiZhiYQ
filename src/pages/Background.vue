<template>
  <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- 网站页眉 -->
    <Header />

    <!-- 页面内容 -->
    <main class="grow">

      <!-- 页面标题 -->
      <section class="relative">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">
            <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 class="h1 font-red-hat-display mb-4">项目背景</h1>
              <p class="text-xl text-slate-300">智治引擎：农村数字化治理的智能解决方案</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 项目背景内容 -->
      <section>
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="pb-12 md:pb-20">
            <div class="grid md:grid-cols-12 gap-6 md:gap-10">
              <!-- 左侧内容 -->
              <div class="md:col-span-7">
                <div class="text-slate-300 space-y-8">
                  <div>
                    <h3 class="h3 font-red-hat-display mb-4 text-blue-400">乡村振兴的数字挑战</h3>
                    <p class="mb-4">在中国乡村振兴战略背景下，农村发展面临着数据碎片化、监管协调难、一二三产业融合不足等关键挑战。传统数字农业治理系统存在数据孤岛，无法有效支撑精准决策，亟需一种新型智能化解决方案。</p>
                    <div class="bg-slate-800/50 p-4 rounded-lg mt-4 border border-slate-700/60">
                      <h4 class="font-semibold text-blue-300 mb-2">核心挑战数据</h4>
                      <ul class="space-y-2 text-sm">
                        <li class="flex items-center">
                          <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 mr-3 shrink-0">
                            <svg class="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </span>
                          <span>农村地区互联网普及率<strong class="text-blue-400">比城市低25.3%</strong>，数字鸿沟明显</span>
                        </li>
                        <li class="flex items-center">
                          <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 mr-3 shrink-0">
                            <svg class="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </span>
                          <span>全国<strong class="text-blue-400">87%</strong>的县域存在政务数据分散、各自为政现象</span>
                        </li>
                        <li class="flex items-center">
                          <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 mr-3 shrink-0">
                            <svg class="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </span>
                          <span>农村产品溯源覆盖率不足<strong class="text-blue-400">32%</strong>，难以满足消费者需求</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h3 class="h3 font-red-hat-display mb-4 text-blue-400">国家战略需求与政策支持</h3>
                    <p class="mb-4">国家"十四五"规划明确提出数字乡村建设目标，要求加快农业农村数字化转型。同时，乡村振兴战略对农业农村现代化提出了更高要求，急需通过数字化、智能化手段提升农村治理效能。</p>
                    <div class="grid grid-cols-2 gap-4 mt-4">
                      <div class="bg-slate-800/40 p-4 rounded-lg border border-slate-700/40">
                        <h5 class="font-semibold text-blue-300 mb-2 text-sm">《数字乡村发展战略纲要》</h5>
                        <p class="text-xs text-slate-400">提出到2025年，数字乡村建设取得重要进展，城乡"数字鸿沟"明显缩小</p>
                      </div>
                      <div class="bg-slate-800/40 p-4 rounded-lg border border-slate-700/40">
                        <h5 class="font-semibold text-blue-300 mb-2 text-sm">《乡村振兴战略规划》</h5>
                        <p class="text-xs text-slate-400">强调加快推进农业农村大数据发展，助力乡村治理体系和治理能力现代化</p>
                      </div>
                      <div class="bg-slate-800/40 p-4 rounded-lg border border-slate-700/40">
                        <h5 class="font-semibold text-blue-300 mb-2 text-sm">《"互联网+"现代农业三年行动实施方案》</h5>
                        <p class="text-xs text-slate-400">推动大数据、人工智能、区块链等技术在农业领域的应用</p>
                      </div>
                      <div class="bg-slate-800/40 p-4 rounded-lg border border-slate-700/40">
                        <h5 class="font-semibold text-blue-300 mb-2 text-sm">《关于促进智慧农业发展的指导意见》</h5>
                        <p class="text-xs text-slate-400">要求加强农业人工智能、区块链等前沿技术的研发和运用</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 class="h3 font-red-hat-display mb-4 text-blue-400">技术创新驱动</h3>
                    <p class="mb-4">随着大数据、人工智能和区块链等技术的发展，数字化农村治理方式正在从单一信息化模式向智能化协同模式转变。智治引擎基于前沿技术，打造融合的智能治理新范式。</p>
                    <div class="overflow-hidden relative h-16 bg-gradient-to-r from-blue-900/40 to-blue-800/20 rounded-lg">
                      <div class="absolute top-0 left-0 h-full w-full overflow-hidden">
                        <div class="tech-slider flex animate-slider">
                          <div class="flex-shrink-0 flex items-center px-6 h-16 text-blue-300 opacity-90">
                            <span class="text-sm font-medium">区块链技术 •</span>
                          </div>
                          <div class="flex-shrink-0 flex items-center px-6 h-16 text-blue-300 opacity-90">
                            <span class="text-sm font-medium">人工智能 •</span>
                          </div>
                          <div class="flex-shrink-0 flex items-center px-6 h-16 text-blue-300 opacity-90">
                            <span class="text-sm font-medium">大数据分析 •</span>
                          </div>
                          <div class="flex-shrink-0 flex items-center px-6 h-16 text-blue-300 opacity-90">
                            <span class="text-sm font-medium">边缘计算 •</span>
                          </div>
                          <div class="flex-shrink-0 flex items-center px-6 h-16 text-blue-300 opacity-90">
                            <span class="text-sm font-medium">物联网 •</span>
                          </div>
                          <div class="flex-shrink-0 flex items-center px-6 h-16 text-blue-300 opacity-90">
                            <span class="text-sm font-medium">区块链技术 •</span>
                          </div>
                          <div class="flex-shrink-0 flex items-center px-6 h-16 text-blue-300 opacity-90">
                            <span class="text-sm font-medium">人工智能 •</span>
                          </div>
                          <div class="flex-shrink-0 flex items-center px-6 h-16 text-blue-300 opacity-90">
                            <span class="text-sm font-medium">大数据分析 •</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 class="h3 font-red-hat-display mb-4 text-blue-400">项目意义</h3>
                    <div class="grid md:grid-cols-2 gap-4">
                      <div class="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-4 rounded-lg border border-slate-700/40">
                        <h4 class="text-blue-300 font-medium mb-2">数字化转型赋能</h4>
                        <p class="text-sm text-slate-400">通过农村数字化基础设施建设和应用服务，促进"数字红利"向农业农村释放</p>
                      </div>
                      <div class="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-4 rounded-lg border border-slate-700/40">
                        <h4 class="text-blue-300 font-medium mb-2">产业升级引领</h4>
                        <p class="text-sm text-slate-400">推动农村一二三产业融合发展，构建农产品产销对接新模式</p>
                      </div>
                      <div class="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-4 rounded-lg border border-slate-700/40">
                        <h4 class="text-blue-300 font-medium mb-2">乡村治理现代化</h4>
                        <p class="text-sm text-slate-400">提升农村治理精细化、协同化水平，增强基层治理能力</p>
                      </div>
                      <div class="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-4 rounded-lg border border-slate-700/40">
                        <h4 class="text-blue-300 font-medium mb-2">城乡融合发展</h4>
                        <p class="text-sm text-slate-400">缩小城乡数字鸿沟，促进农民共享数字化发展成果</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- 右侧内容 -->
              <div class="md:col-span-5">
                <div class="relative rounded-xl overflow-hidden">
                  <img src="../images/customer-bg-01.png" alt="山东农村场景" class="w-full h-auto" />
                  <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-6">
                    <div class="text-white">
                      <div class="font-bold text-xl mb-2">山东省乡村振兴示范区</div>
                      <p class="text-slate-300 text-sm">该项目已在山东省多个乡村振兴示范区成功落地实施</p>
                    </div>
                  </div>
                </div>
                
                <div class="mt-6 bg-slate-800 rounded-lg p-5">
                  <h4 class="text-lg font-semibold text-blue-400 mb-3">项目成果概览</h4>
                  <ul class="space-y-3">
                    <li class="flex">
                      <svg class="w-5 h-5 text-blue-500 mr-2 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                      <span class="text-slate-300">已覆盖山东省17个县级行政区</span>
                    </li>
                    <li class="flex">
                      <svg class="w-5 h-5 text-blue-500 mr-2 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                      <span class="text-slate-300">数据整合44万条农业生产信息</span>
                    </li>
                    <li class="flex">
                      <svg class="w-5 h-5 text-blue-500 mr-2 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                      <span class="text-slate-300">农产品溯源链条构建超过28种</span>
                    </li>
                    <li class="flex">
                      <svg class="w-5 h-5 text-blue-500 mr-2 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                      <span class="text-slate-300">合作农业企业23家，涉农合作社57家</span>
                    </li>
                  </ul>
                </div>
                
                <div class="mt-6 bg-slate-800/40 rounded-lg p-5 border border-slate-700/60">
                  <h4 class="text-lg font-semibold text-blue-400 mb-3">2023年度影响力</h4>
                  <div class="grid grid-cols-2 gap-4">
                    <div class="bg-slate-900/50 p-3 rounded-lg text-center">
                      <span class="block text-2xl font-bold text-blue-300 mb-1">32%</span>
                      <span class="text-xs text-slate-400">农产品销售额增长</span>
                    </div>
                    <div class="bg-slate-900/50 p-3 rounded-lg text-center">
                      <span class="block text-2xl font-bold text-blue-300 mb-1">12.6万</span>
                      <span class="text-xs text-slate-400">农户直接受益</span>
                    </div>
                    <div class="bg-slate-900/50 p-3 rounded-lg text-center">
                      <span class="block text-2xl font-bold text-blue-300 mb-1">85%</span>
                      <span class="text-xs text-slate-400">溯源数据准确率</span>
                    </div>
                    <div class="bg-slate-900/50 p-3 rounded-lg text-center">
                      <span class="block text-2xl font-bold text-blue-300 mb-1">68%</span>
                      <span class="text-xs text-slate-400">治理效率提升</span>
                    </div>
                  </div>
                </div>
                
                <div class="mt-6 bg-blue-900/20 rounded-lg p-5 border border-blue-800/30">
                  <h4 class="text-blue-400 font-medium mb-2">学术认可</h4>
                  <p class="text-sm text-slate-300 mb-3">本项目相关研究成果发表于权威学术期刊，获得专家高度认可</p>
                  <div class="flex items-center space-x-3 text-xs text-slate-400">
                    <div class="flex items-center">
                      <svg class="w-4 h-4 text-blue-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <span>7篇核心期刊</span>
                    </div>
                    <div class="flex items-center">
                      <svg class="w-4 h-4 text-blue-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <span>4项国家专利</span>
                    </div>
                    <div class="flex items-center">
                      <svg class="w-4 h-4 text-blue-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <span>2项省级奖项</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- 项目合作伙伴 -->
      <section class="border-t border-slate-800">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="py-12 md:py-20">
            <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h2 class="h3 font-red-hat-display text-blue-400">合作共建生态</h2>
              <p class="text-lg text-slate-400 mt-4">携手政府、企业与研究机构，共同推动乡村数字化治理创新</p>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div class="flex items-center justify-center h-24 bg-slate-800/30 rounded-lg border border-slate-700/40 hover:border-blue-500/50 transition-colors duration-300">
                <span class="text-slate-400 font-medium">政府机构 A</span>
              </div>
              <div class="flex items-center justify-center h-24 bg-slate-800/30 rounded-lg border border-slate-700/40 hover:border-blue-500/50 transition-colors duration-300">
                <span class="text-slate-400 font-medium">农业厅</span>
              </div>
              <div class="flex items-center justify-center h-24 bg-slate-800/30 rounded-lg border border-slate-700/40 hover:border-blue-500/50 transition-colors duration-300">
                <span class="text-slate-400 font-medium">农科院</span>
              </div>
              <div class="flex items-center justify-center h-24 bg-slate-800/30 rounded-lg border border-slate-700/40 hover:border-blue-500/50 transition-colors duration-300">
                <span class="text-slate-400 font-medium">科技公司 B</span>
              </div>
              <div class="flex items-center justify-center h-24 bg-slate-800/30 rounded-lg border border-slate-700/40 hover:border-blue-500/50 transition-colors duration-300">
                <span class="text-slate-400 font-medium">农企联盟</span>
              </div>
              <div class="flex items-center justify-center h-24 bg-slate-800/30 rounded-lg border border-slate-700/40 hover:border-blue-500/50 transition-colors duration-300">
                <span class="text-slate-400 font-medium">大学研究所</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA部分 -->
      <Cta />

    </main>

    <!-- 网站页脚 -->
    <Footer />
    
  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import Footer from '../partials/Footer.vue'
import Cta from '../partials/Cta.vue'

export default {
  name: 'Background',
  components: {
    Header,
    Footer,
    Cta
  }
}
</script>

<style>
.animate-slider {
  animation: slider 20s linear infinite;
}

@keyframes slider {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style> 