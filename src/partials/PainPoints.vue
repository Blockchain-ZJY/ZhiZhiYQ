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
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <div class="inline-flex mb-4">
            <div class="relative">
              <div class="absolute -inset-1 rounded-full blur-md bg-gradient-to-r from-blue-600/20 to-blue-400/20"></div>
              <span class="relative bg-gradient-to-r from-blue-600/80 to-blue-400/80 text-sm text-white font-medium py-1 px-4 rounded-full inline-block">行业现状</span>
            </div>
          </div>
          <h2 class="h2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500/80 via-blue-500 to-blue-500/80 mb-4">行业发展必要性</h2>
          <p class="text-slate-400 text-lg">智能化驱动乡村产业革新与治理高效化</p>
        </div>

        <!-- 痛点图表 -->
        <div class="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 items-start md:max-w-none">

          <!-- 1st item -->
          <div class="relative group" data-aos="fade-up">
            <div class="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600/20 via-blue-400/20 to-blue-600/20 blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div class="relative flex flex-col h-full bg-slate-800/20 backdrop-blur-sm p-6 rounded-xl border border-slate-700/60 group-hover:border-blue-500/50 shadow-lg transition duration-500">
              <div class="w-16 h-16 mb-5 p-2 bg-gradient-to-br from-blue-600/30 to-blue-400/30 rounded-2xl flex justify-center items-center group-hover:scale-110 transition duration-500">
                <svg class="w-10 h-10 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 12H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 8V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="mb-2 flex justify-between items-baseline">
                <h4 class="text-xl font-semibold text-blue-400 group-hover:text-blue-300 transition duration-300">城乡互联网普及</h4>
                <div class="text-xs text-slate-500 font-medium">2023</div>
              </div>
              <p class="text-md text-slate-300">差距达<span class="text-blue-400 text-2xl font-bold group-hover:text-blue-300 transition duration-300">25%</span></p>
              <div class="mt-auto pt-4">
                <div class="relative w-full bg-slate-700/30 rounded-full h-3">
                  <div class="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-blue-500 to-blue-400 h-3 rounded-full" style="width: 75%"></div>
                  <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 text-xs text-slate-400">75%</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 2nd item -->
          <div class="relative group" data-aos="fade-up" data-aos-delay="100">
            <div class="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600/20 via-blue-400/20 to-blue-600/20 blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div class="relative flex flex-col h-full bg-slate-800/20 backdrop-blur-sm p-6 rounded-xl border border-slate-700/60 group-hover:border-blue-500/50 shadow-lg transition duration-500">
              <div class="w-16 h-16 mb-5 p-2 bg-gradient-to-br from-blue-600/30 to-blue-400/30 rounded-2xl flex justify-center items-center group-hover:scale-110 transition duration-500">
                <svg class="w-10 h-10 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16L12 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9 13L12 16L15 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16 2V6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 2V6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3 10H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="mb-2 flex justify-between items-baseline">
                <h4 class="text-xl font-semibold text-blue-400 group-hover:text-blue-300 transition duration-300">农业劳动生产率</h4>
                <div class="text-xs text-slate-500 font-medium">2023</div>
              </div>
              <p class="text-md text-slate-300">仅为发达国家的<span class="text-blue-400 text-2xl font-bold group-hover:text-blue-300 transition duration-300">20%</span></p>
              <div class="mt-auto pt-4">
                <div class="relative w-full bg-slate-700/30 rounded-full h-3">
                  <div class="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-blue-500 to-blue-400 h-3 rounded-full" style="width: 20%"></div>
                  <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 text-xs text-slate-400">20%</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 3rd item -->
          <div class="relative group" data-aos="fade-up" data-aos-delay="200">
            <div class="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600/20 via-blue-400/20 to-blue-600/20 blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div class="relative flex flex-col h-full bg-slate-800/20 backdrop-blur-sm p-6 rounded-xl border border-slate-700/60 group-hover:border-blue-500/50 shadow-lg transition duration-500">
              <div class="w-16 h-16 mb-5 p-2 bg-gradient-to-br from-blue-600/30 to-blue-400/30 rounded-2xl flex justify-center items-center group-hover:scale-110 transition duration-500">
                <svg class="w-10 h-10 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M23 21V19C22.9986 17.1771 21.7079 15.5857 19.9 15.13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16 3.13C17.8104 3.58317 19.1028 5.17565 19.1 7.00001C19.1028 8.82437 17.8104 10.4168 16 10.87" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="mb-2 flex justify-between items-baseline">
                <h4 class="text-xl font-semibold text-blue-400 group-hover:text-blue-300 transition duration-300">基层政务人工处理</h4>
                <div class="text-xs text-slate-500 font-medium">2023</div>
              </div>
              <p class="text-md text-slate-300">占比高达<span class="text-blue-400 text-2xl font-bold group-hover:text-blue-300 transition duration-300">83%</span></p>
              <div class="mt-auto pt-4">
                <div class="relative w-full bg-slate-700/30 rounded-full h-3">
                  <div class="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-blue-500 to-blue-400 h-3 rounded-full" style="width: 83%"></div>
                  <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 text-xs text-slate-400">83%</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 4th item -->
          <div class="relative group" data-aos="fade-up" data-aos-delay="300">
            <div class="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600/20 via-blue-400/20 to-blue-600/20 blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div class="relative flex flex-col h-full bg-slate-800/20 backdrop-blur-sm p-6 rounded-xl border border-slate-700/60 group-hover:border-blue-500/50 shadow-lg transition duration-500">
              <div class="w-16 h-16 mb-5 p-2 bg-gradient-to-br from-blue-600/30 to-blue-400/30 rounded-2xl flex justify-center items-center group-hover:scale-110 transition duration-500">
                <svg class="w-10 h-10 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12H19.4274C19.7219 12 19.8692 12 19.9995 11.9505C20.1154 11.9072 20.2155 11.8284 20.2861 11.724C20.3654 11.6063 20.3654 11.4511 20.3654 11.1407V6.5C20.3654 5.09886 20.3654 4.3983 20.0927 3.86327C19.8521 3.39464 19.4708 3.01327 19.0022 2.77269C18.4672 2.5 17.7666 2.5 16.3654 2.5H7.63541C6.23427 2.5 5.53371 2.5 4.99867 2.77269C4.53004 3.01327 4.14867 3.39464 3.90809 3.86327C3.63541 4.3983 3.63541 5.09886 3.63541 6.5V11.1407C3.63541 11.4511 3.63541 11.6063 3.71477 11.724C3.78533 11.8284 3.88545 11.9072 4.0014 11.9505C4.13164 12 4.27895 12 4.57358 12H12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M15 19L12 17L9 19V12H15V19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="mb-2 flex justify-between items-baseline">
                <h4 class="text-xl font-semibold text-blue-400 group-hover:text-blue-300 transition duration-300">智慧农业占比</h4>
                <div class="text-xs text-slate-500 font-medium">2023</div>
              </div>
              <p class="text-md text-slate-300"><span class="text-blue-400 text-2xl font-bold group-hover:text-blue-300 transition duration-300">较低</span>，发展不均衡</p>
              <div class="mt-auto pt-4">
                <div class="relative w-full bg-slate-700/30 rounded-full h-3">
                  <div class="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-blue-500 to-blue-400 h-3 rounded-full" style="width: 15%"></div>
                  <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 text-xs text-slate-400">15%</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <!-- 痛点说明 -->
        <div class="relative max-w-4xl mx-auto mt-20">
          <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-yellow-300/20 blur-lg opacity-70"></div>
          <div class="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/60 p-8 rounded-2xl" data-aos="fade-up">
            <div class="text-center mb-8">
              <div class="inline-flex mb-4">
                <span class="bg-gradient-to-r from-yellow-600/80 to-yellow-400/80 text-white text-sm font-medium py-1 px-4 rounded-full">核心挑战</span>
              </div>
              <h2 class="h2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500/80 via-yellow-500 to-yellow-500/80 mb-4">三大痛点</h2>
              <p class="text-slate-400">突破行业壁垒，探索AI赋能</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-6">
              <div class="relative group" data-aos="fade-up">
                <div class="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-yellow-500/30 to-yellow-300/30 opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
                <div class="relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/60 group-hover:border-yellow-500/50 h-full flex flex-col transition duration-300">
                  <div class="size-12 mx-auto mb-4 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-yellow-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 14V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M12 17V3M12 3L7 8M12 3L17 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <h4 class="text-lg font-semibold text-yellow-500 text-center mb-3 group-hover:text-yellow-400 transition">传统AI算力架构局限</h4>
                  <p class="text-sm text-slate-300 text-center">依赖城市算力中心，响应延迟，模型更新周期长</p>
                </div>
              </div>
              
              <div class="relative group" data-aos="fade-up" data-aos-delay="100">
                <div class="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-yellow-500/30 to-yellow-300/30 opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
                <div class="relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/60 group-hover:border-yellow-500/50 h-full flex flex-col transition duration-300">
                  <div class="size-12 mx-auto mb-4 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-yellow-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M8 13H12" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M8 17H16" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <h4 class="text-lg font-semibold text-yellow-500 text-center mb-3 group-hover:text-yellow-400 transition">农业数据治理低效</h4>
                  <p class="text-sm text-slate-300 text-center">未标注数据占比达70%，缺失率、误差率较高</p>
                </div>
              </div>
              
              <div class="relative group" data-aos="fade-up" data-aos-delay="200">
                <div class="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-yellow-500/30 to-yellow-300/30 opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
                <div class="relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/60 group-hover:border-yellow-500/50 h-full flex flex-col transition duration-300">
                  <div class="size-12 mx-auto mb-4 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-yellow-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M2.03 8.5H22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M2.03 15.5H22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M8.51 21.99V2.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M15.51 21.99V2.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <h4 class="text-lg font-semibold text-yellow-500 text-center mb-3 group-hover:text-yellow-400 transition">政务数字化进程滞后</h4>
                  <p class="text-sm text-slate-300 text-center">政务系统数字化率低于40%，依赖Windows XP</p>
                </div>
              </div>
            </div>
            
            <div class="text-center mt-10">
              <div class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/40 shadow-lg" data-aos="fade-up" data-aos-delay="300">
                <span class="block w-2 h-2 rounded-full bg-yellow-400 mr-2 animate-pulse"></span>
                <p class="text-lg text-white font-medium">消弭城乡数字鸿沟的AI引擎重构刻不容缓</p>
                <span class="block w-2 h-2 rounded-full bg-yellow-400 ml-2 animate-pulse"></span>
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
  name: 'PainPoints'
}
</script>

<style scoped>
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
</style> 