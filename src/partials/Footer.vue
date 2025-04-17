<template>
  <footer>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- 区块 -->
      <div class="grid sm:grid-cols-12 gap-8 py-8 md:py-12">

        <!-- 第1区块 -->
        <div class="sm:col-span-12 lg:col-span-4 order-1 lg:order-none">
          <div class="h-full flex flex-col sm:flex-row lg:flex-col justify-between">
            <div class="mb-4 sm:mb-0">
              <div class="mb-4">
                <!-- Logo -->
                <router-link class="inline-flex items-center" to="/" aria-label="智治引擎">
                  <img src="../images/logo.svg" width="38" height="38" alt="智治引擎">
                  <span class="ml-2 text-white font-bold text-lg">智治引擎</span>
                </router-link>
              </div>
              <div class="text-sm text-slate-300">&copy; 智治引擎 <span class="text-slate-500">-</span> 保留所有权利</div>
            </div>
            <!-- 社交链接 -->
            <ul class="flex">
              <li>
                <a class="flex justify-center items-center text-blue-500 hover:text-blue-400 transition duration-150 ease-in-out" href="#0" aria-label="微信">
                  <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.35 16.675c-.009-.124-.02-.249-.029-.373A6.545 6.545 0 0 0 15.004 10C11.696 10 9 12.236 9 15.001c0 1.52.81 2.858 2.064 3.776l-.417 1.298 1.479-.791c.536.158 1.1.255 1.695.271.06 0 .122.001.183.001.04.296.069.598.069.909 0 3.727-3.526 6.745-7.873 6.745-.861 0-1.69-.124-2.466-.35l-2.27 1.214.588-1.98A6.483 6.483 0 0 1 0 21.26c0-3.727 3.525-6.744 7.873-6.744 0 0 .044-.001.043 0a5.97 5.97 0 0 1-.043-.678c0-4.426 4.146-8.002 9.26-8.002 5.116 0 9.261 3.576 9.261 8.002 0 1.228-.325 2.383-.89 3.39l.715 2.154-1.979-1.067a9.78 9.78 0 0 1-2.335.584c-.196-.428-.443-.831-.742-1.196.83-.141 1.61-.392 2.31-.73l1.538.826-.484-1.435c1.613-1.059 2.578-2.647 2.578-4.424 0-3.188-2.976-5.762-6.65-5.762S13.35 11.813 13.35 15.001c0 .652.127 1.276.35 1.858l-.47 1.452 1.287-.69c.976.53 2.113.847 3.334.876.517.877.816 1.897.816 2.987 0 3.314-2.7 5.986-6.035 5.986-1.047 0-2.03-.265-2.888-.729l-2.03 1.089.541-1.824c-1.32-.935-2.183-2.447-2.183-4.171 0-2.858 2.326-5.169 5.195-5.169 2.868 0 5.193 2.311 5.193 5.169 0 .13-.007.257-.016.384-.09-.005-.18-.007-.271-.007-3.527 0-6.378 2.644-6.378 5.912 0 1.46.607 2.78 1.586 3.783l-.47 1.58 1.636-.866c.673.219 1.39.34 2.133.34 3.874 0 7.014-2.644 7.014-5.912 0-2.062-1.334-3.886-3.361-4.945z" />
                  </svg>
                </a>
              </li>
              <li class="ml-2">
                <a class="flex justify-center items-center text-blue-500 hover:text-blue-400 transition duration-150 ease-in-out" href="#0" aria-label="微博">
                  <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.977 15.642c-.211-.834-.85-1.392-1.874-1.658-.499-.129-1.003-.155-1.585-.079a.484.484 0 0 1-.578-.551.504.504 0 0 1 .498-.551c.837-.1 1.61-.042 2.329.176 1.563.4 2.394 1.289 2.755 2.661.087.314-.103.624-.425.688s-.608-.126-.683-.439a3.575 3.575 0 0 0-.437-.826.623.623 0 0 1 0-.421zm-2.995-3.951c-.115-.168-.277-.289-.504-.359-.245-.07-.468-.066-.673.014a.332.332 0 0 1-.439-.27.356.356 0 0 1 .213-.396c.306-.125 1.218-.221 2.328.444.53.315.854.8.974 1.455.024.157-.031.311-.149.419s-.288.16-.452.131c-.164-.024-.309-.123-.399-.265s-.129-.321-.111-.502c-.024-.247-.084-.443-.177-.59-.125-.176-.355-.25-.611-.081zm.334-2.747c-.98-.223-2.168-.156-3.341.197-2.314.7-5.144 2.779-5.144 6.669 0 3.913 3.75 7.095 8.333 7.095 5.404 0 8.995-3.525 8.995-6.35.01-1.698-1.373-2.849-2.624-3.285a1.195 1.195 0 0 1-.867-.915c-.073-.492.258-.9.748-.955 1.798-.194 3.821.399 5.033 1.896 1.133 1.437 1.039 3.354.74 4.801-.6 2.613-2.41 5.487-5.9 7.192-1.638.803-3.384 1.137-5.093 1.137-1.964 0-3.858-.454-5.353-1.327-2.56-1.49-4.271-3.803-4.788-6.52a9.799 9.799 0 0 1-.098-3.008c.494-3.771 3.457-6.94 6.968-8.467 1.746-.739 3.525-1.102 5.239-1.102 1.402 0 2.685.245 3.818.736 1.499.649 2.498 1.624 2.964 2.893.245.634.081 1.299-.44 1.776-.518.483-1.268.624-1.879.353a1.783 1.783 0 0 1-.922-1.013 1.42 1.42 0 0 1 .03-1.208 1.19 1.19 0 0 0 .063-.152c.001-.247-.105-.319-.105-.319.001 0-.157-.129-.383-.122zm-6.9 8.553c.1-1.124 1.251-2.017 2.582-2 1.33.017 2.375.937 2.326 2.056-.048 1.12-1.207 2.015-2.585 1.991-1.378-.022-2.424-.931-2.322-2.047zm2.068-.586c-.426-.012-.782.287-.8.666-.016.379.317.692.746.697.431.006.792-.289.803-.662.01-.378-.32-.69-.749-.701zm1.002 1.194c-.162.004-.298.115-.307.245-.008.129.112.24.273.246.162.005.3-.12.308-.246.009-.128-.111-.25-.274-.245zm4.244.022c-.292-1.348-1.959-2.146-3.662-1.809-1.697.342-2.826 1.737-2.524 3.098.294 1.343 1.947 2.136 3.642 1.787 1.697-.348 2.839-1.725 2.544-3.076zm-2.192.483c-.658.288-1.397-.096-1.661-.849-.258-.752.07-1.588.737-1.874.683-.303 1.451.081 1.709.849.258.756-.102 1.581-.785 1.874z" />
                  </svg>
                </a>
              </li>
              <li class="ml-2">
                <a class="flex justify-center items-center text-blue-500 hover:text-blue-400 transition duration-150 ease-in-out" href="#0" aria-label="Bilibili">
                  <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.282 12.32H7.718a1.2 1.2 0 0 1-1.2-1.2V8.48a1.2 1.2 0 0 1 1.2-1.2h16.564a1.2 1.2 0 0 1 1.2 1.2v2.64a1.2 1.2 0 0 1-1.2 1.2zM23.5 6.56L21.04 4.1h-4.68l-1.2 2.46h-3.12l-1.2-2.46H7.16L4.7 6.56C2.66 6a2 2 0 0 0-2.6 1.16 2 2 0 0 0-.1.6v14.4a4 4 0 0 0 4 4.28 8.36 8.36 0 0 0 1.28-.06 8.76 8.76 0 0 0 0-1.06v-5.34A3.8 3.8 0 0 1 8 17.28h16a3.78 3.78 0 0 1 .72 3.3v5.34a8.29 8.29 0 0 0 0 1.06 10 10 0 0 0 1.28.06 4 4 0 0 0 4-4.28V8.32A2 2 0 0 0 27.4 6c-.6.2-3.22.52-3.9.56zM11.5 18.32a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm9 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- 第2区块 -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-sm text-slate-50 font-medium mb-2">解决方案</h6>
          <ul class="text-sm space-y-2">
            <li>
              <a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">智治Agent</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">产业链整合</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">价格与方案</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">系统更新日志</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">实施方法</a>
            </li>
          </ul>
        </div>

        <!-- 第3区块 -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-sm text-slate-50 font-medium mb-2">团队与项目</h6>
          <ul class="text-sm space-y-2">
            <li>
              <a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">关于我们</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">研究团队</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">技术博客</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">加入我们</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">区块链浏览器</a>
            </li>
          </ul>
        </div>

        <!-- 第4区块 -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-sm text-slate-50 font-medium mb-2">资源</h6>
          <ul class="text-sm space-y-2">
            <li>
              <a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">技术社区</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">服务条款</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">技术文档</a>
            </li>
          </ul>
        </div>

        <!-- 第5区块 -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-sm text-slate-50 font-medium mb-2">联系我们</h6>
          <ul class="text-sm space-y-2">
            <li>
              <span class="text-slate-400">地址：</span>
              <span class="text-slate-300">山东省济南市山大南路27号</span>
            </li>
            <li>
              <span class="text-slate-400">电话：</span>
              <span class="text-slate-300">0531-88888888</span>
            </li>
            <li>
              <span class="text-slate-400">邮箱：</span>
              <span class="text-slate-300">ruralgpt@sdu.edu.cn</span>
            </li>
          </ul>
        </div>

      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>