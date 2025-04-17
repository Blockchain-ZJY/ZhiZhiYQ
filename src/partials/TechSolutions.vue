<template>
  <section class="relative overflow-hidden">
    <!-- 背景装饰元素 -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-0 opacity-15" style="background-image: radial-gradient(circle at 1px 1px, rgba(56, 139, 253, 0.1) 1px, transparent 0); background-size: 40px 40px;"></div>
      
      <!-- 星点装饰 -->
      <div class="absolute w-full h-full">
        <div class="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style="animation-delay: 0.5s;"></div>
        <div class="absolute top-1/3 left-2/3 w-2 h-2 bg-blue-500 rounded-full animate-pulse" style="animation-delay: 1.2s;"></div>
        <div class="absolute top-2/3 left-1/5 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style="animation-delay: 2s;"></div>
        <div class="absolute top-1/2 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-pulse" style="animation-delay: 0.8s;"></div>
      </div>
      
      <!-- 发光渐变 -->
      <div class="absolute -top-1/2 right-0 w-full h-full bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-transparent rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 -left-1/2 w-full h-full bg-gradient-to-tr from-blue-900/10 via-blue-600/5 to-transparent rounded-full blur-3xl"></div>
      
      <!-- 装饰性线条 -->
      <div class="absolute top-1/5 right-1/5 h-full w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
      <div class="absolute bottom-1/4 left-1/4 w-1/3 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
      <div class="py-12 md:py-20">

        <!-- 部分标题 -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500/80 via-blue-500 to-blue-500/80">解决方案</h2>
          <p class="text-lg text-slate-300 mt-4">RuralGPT：乡村振兴的智能引擎</p>
        </div>
        
        <!-- 技术方案展示 -->
        <div class="relative">
          <!-- 中心系统架构图 -->
          <div class="max-w-2xl mx-auto relative bg-slate-800/50 p-8 rounded-2xl border border-slate-700 mb-12 shadow-2xl" data-aos="fade-up">
            <div class="text-center mb-6">
              <div class="inline-block p-2 bg-blue-900/50 rounded-lg mb-4">
                <svg class="w-12 h-12 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 class="h3 text-blue-400">RuralGPT</h3>
              <p class="text-slate-300 text-sm mt-2">乡村振兴的时空智能体</p>
            </div>
            <div class="grid grid-cols-2 gap-4 text-center">
              <div class="bg-slate-900/50 p-4 rounded-lg border border-slate-700" data-aos="fade-right" data-aos-delay="100">
                <h4 class="text-blue-300 font-semibold mb-1">实时响应</h4>
                <p class="text-xs text-slate-400">毫秒级边缘计算</p>
              </div>
              <div class="bg-slate-900/50 p-4 rounded-lg border border-slate-700" data-aos="fade-left" data-aos-delay="100">
                <h4 class="text-blue-300 font-semibold mb-1">多源数据</h4>
                <p class="text-xs text-slate-400">农业、政务、民生融合</p>
              </div>
              <div class="bg-slate-900/50 p-4 rounded-lg border border-slate-700" data-aos="fade-right" data-aos-delay="200">
                <h4 class="text-blue-300 font-semibold mb-1">链上治理</h4>
                <p class="text-xs text-slate-400">区块链协同共识机制</p>
              </div>
              <div class="bg-slate-900/50 p-4 rounded-lg border border-slate-700" data-aos="fade-left" data-aos-delay="200">
                <h4 class="text-blue-300 font-semibold mb-1">场景定制</h4>
                <p class="text-xs text-slate-400">一键式热部署AI模型</p>
              </div>
            </div>
          </div>
          
          <!-- 三大核心技术 -->
          <div class="grid md:grid-cols-3 gap-8 mb-8">
            <!-- 技术1 -->
            <div class="bg-slate-800/30 p-6 rounded-lg shadow-xl border border-slate-700" data-aos="fade-up">
              <div class="inline-flex items-center justify-center p-2 bg-blue-900/30 rounded-lg mb-4">
                <svg class="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 13H12" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 17H16" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-blue-400 mb-3">多模态数据融合</h3>
              <ul class="text-sm text-slate-300 space-y-2">
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  多模态数据融合
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  知识图谱动态演化
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  语义关联智能推理
                </li>
              </ul>
            </div>
            
            <!-- 技术2 -->
            <div class="bg-slate-800/30 p-6 rounded-lg shadow-xl border border-slate-700" data-aos="fade-up" data-aos-delay="100">
              <div class="inline-flex items-center justify-center p-2 bg-blue-900/30 rounded-lg mb-4">
                <svg class="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.45 6.72L6.73 3.01C6.33 2.61 5.67 2.61 5.27 3.01L1.55 6.72C1.15 7.12 1.15 7.79 1.55 8.19C1.95 8.6 2.61 8.6 3.01 8.19L6.01 5.2L9 8.19C9.4 8.6 10.05 8.6 10.45 8.19C10.86 7.79 10.86 7.13 10.45 6.72Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M22.45 15.72L18.74 19.44C18.34 19.85 17.67 19.85 17.27 19.44L13.55 15.72C13.15 15.32 13.15 14.66 13.55 14.25C13.96 13.85 14.62 13.85 15.02 14.25L18.01 17.24L21 14.25C21.4 13.85 22.06 13.85 22.46 14.25C22.85 14.66 22.85 15.32 22.45 15.72Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 5V19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-blue-400 mb-3">轻量化边缘智能体系</h3>
              <ul class="text-sm text-slate-300 space-y-2">
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  实时响应毫秒级反馈
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  边缘节点资源池化弹性扩展
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  场景化AI模型一键式热部署
                </li>
              </ul>
            </div>
            
            <!-- 技术3 -->
            <div class="bg-slate-800/30 p-6 rounded-lg shadow-xl border border-slate-700" data-aos="fade-up" data-aos-delay="200">
              <div class="inline-flex items-center justify-center p-2 bg-blue-900/30 rounded-lg mb-4">
                <svg class="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2.03 8.5H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2.03 15.5H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.51 21.99V2.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M15.51 21.99V2.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-blue-400 mb-3">智能决策与协同治理体系</h3>
              <ul class="text-sm text-slate-300 space-y-2">
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  全域感知与动态决策中枢
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  价值共识引导算法
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  区块链赋能的治理共同体
                </li>
              </ul>
            </div>
          </div>
          
          <!-- 技术突破点 -->
          <div class="text-center bg-slate-800/20 p-6 rounded-lg shadow-xl border border-slate-700 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="300">
            <h3 class="text-xl font-semibold text-yellow-400 mb-4">突破行业限制</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="bg-slate-900/30 p-3 rounded-lg border border-slate-700">
                <p class="text-sm text-slate-300"><span class="text-yellow-400 font-semibold">数据孤岛与多源异构数据融合困难</span>问题</p>
              </div>
              <div class="bg-slate-900/30 p-3 rounded-lg border border-slate-700">
                <p class="text-sm text-slate-300"><span class="text-yellow-400 font-semibold">算力基础设施薄弱</span>与高功耗限制</p>
              </div>
              <div class="bg-slate-900/30 p-3 rounded-lg border border-slate-700">
                <p class="text-sm text-slate-300">跨域协同不足与<span class="text-yellow-400 font-semibold">决策科学性欠缺</span></p>
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
  name: 'TechSolutions'
}
</script> 