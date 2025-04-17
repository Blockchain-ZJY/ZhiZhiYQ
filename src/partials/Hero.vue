<template>
  <section>
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">

      <!-- 粒子动画 -->
      <Particles class="absolute inset-0 -z-10" color="#00a0ff" />

      <!-- 背景插图 -->
      <div class="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden" aria-hidden="true">
        <div class="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10">
          <img src="../images/glow-bottom.svg" class="max-w-none" width="2146" height="774" alt="背景图">
        </div>
      </div>

      <div class="pt-32 pb-16 md:pt-52 md:pb-32">

        <!-- 主要内容 -->
        <div class="max-w-3xl mx-auto text-center">
          <div class="mb-6" data-aos="fade-down">
            <div class="inline-flex relative before:absolute before:inset-0 before:bg-blue-500 before:blur-md">
              <a class="btn-sm py-0.5 text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(theme(colors.blue.500),_theme(colors.blue.500))_padding-box,_linear-gradient(theme(colors.blue.500),_theme(colors.blue.200)_75%,_theme(colors.transparent)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/50 before:rounded-full before:pointer-events-none shadow" href="#0">
                <span class="relative inline-flex items-center">
                  智治引擎研发项目 <span class="tracking-normal text-blue-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </span>
              </a>
            </div>
          </div>
          <h1 class="h1 bg-clip-text text-transparent bg-gradient-to-r from-blue-200/60 via-blue-200 to-blue-200/60 pb-4" data-aos="fade-down">智治引擎</h1>
          <p class="text-lg text-slate-300 mb-4" data-aos="fade-down" data-aos-delay="200">基于时空智能体的城乡治理与产业增值协同系统</p>
          <p class="text-md text-slate-400 mb-8" data-aos="fade-down" data-aos-delay="300">赋能乡村振兴 · 构建智慧城乡一体化发展新模式</p>
          <div class="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4" data-aos="fade-down" data-aos-delay="400">
            <div>
              <a class="btn text-slate-900 bg-gradient-to-r from-blue-400/80 via-blue-400 to-blue-400/80 hover:bg-blue-400 w-full transition duration-150 ease-in-out group" href="#0">
                了解技术方案 <span class="tracking-normal text-blue-800 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </a>
            </div>
            <div>
              <a class="btn text-slate-200 hover:text-white bg-slate-900 bg-opacity-25 hover:bg-opacity-30 w-full transition duration-150 ease-in-out" href="#0">
                <svg class="shrink-0 fill-slate-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
                </svg>
                <span>查看应用案例</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
import Particles from './Particles.vue'

export default {
  name: 'Hero',
  components: {
    Particles
  }
}
</script>