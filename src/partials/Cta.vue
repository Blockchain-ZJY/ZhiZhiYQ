<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="relative px-8 py-12 md:py-20 rounded-[3rem] overflow-hidden">
        <!-- 径向渐变 -->
        <div class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
          <div class="absolute inset-0 translate-z-0 bg-blue-500 rounded-full blur-[120px] opacity-70"></div>
          <div class="absolute w-1/4 h-1/4 translate-z-0 bg-blue-400 rounded-full blur-[40px]"></div>
        </div>
        <!-- 模糊形状 -->
        <div class="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
            <defs>
              <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                <stop offset="0%" stop-color="#3B82F6" />
                <stop offset="100%" stop-color="#0284c7" stop-opacity="0" />
              </linearGradient>
            </defs>
            <path fill="url(#bs5-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
          </svg>
        </div>
        <!-- 内容 -->
        <div class="max-w-3xl mx-auto text-center">
          <div>
            <div class="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-200 pb-3">智治引擎研发项目</div>
          </div>
          <h2 class="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">参与智治引擎项目合作</h2>
          <p class="text-lg text-slate-400 mb-8">我们诚邀政府部门、农业企业、科研机构加入合作，共同推动乡村振兴战略实施，构建智慧城乡一体化发展新模式。</p>
          <div>
            <a class="btn text-slate-900 bg-gradient-to-r from-blue-400/80 via-blue-400 to-blue-400/80 hover:bg-blue-400 transition duration-150 ease-in-out group" href="#0">
              联系我们 <span class="tracking-normal text-blue-800 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Cta',
}
</script>