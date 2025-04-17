<template>
  <section id="contract-management" class="relative">

    <!-- 装饰元素 -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10">
      <svg xmlns="http://www.w3.org/2000/svg" width="1360" height="578" opacity="0.5">
        <defs>
          <linearGradient id="contract-gradient" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stop-color="#4F46E5" stop-opacity="0.4" />
            <stop offset="100%" stop-color="#4F46E5" stop-opacity="0" />
          </linearGradient>
        </defs>
        <path fill="url(#contract-gradient)" d="M1394.544 466.989c-91.542 21.821-185.591 20.128-275.798-5.172-90.208-25.3-172.05-73.614-237.545-139.797-65.495-66.184-113.001-148.534-137.479-239.058-24.479-90.525-21.786-184.706 7.888-273.884C806.283-281.09 876.267-358.935 964.96-416.456c88.695-57.52 193.306-92.313 301.785-100.1 108.479-7.785 215.909 13.77 309.197 62.286 93.287 48.517 170.112 125.034 220.574 219.438" transform="rotate(-25 844 -396)" />
      </svg>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t border-slate-800">

        <!-- 标题 -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <div class="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-200 pb-3">智能合约引擎</div>
          <h2 class="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">智能合约管理</h2>
          <p class="text-lg text-slate-400">自动化执行44类农产品业务流程，降低合约执行成本58%，提高农产品流通效率</p>
        </div>

        <!-- 智能合约管理界面 -->
        <div class="grid md:grid-cols-3 gap-8">
          
          <!-- 左侧：合约模板列表 -->
          <div class="md:col-span-1 bg-slate-800/20 border border-slate-700 rounded-xl overflow-hidden">
            <div class="p-4 border-b border-slate-700 flex justify-between items-center">
              <h3 class="text-lg font-semibold text-slate-200">合约模板列表</h3>
              <button class="p-1.5 bg-indigo-500/10 text-indigo-400 rounded-lg hover:bg-indigo-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </div>
            
            <!-- 合约列表 -->
            <div class="p-2 h-[400px] overflow-y-auto custom-scrollbar">
              <div v-for="(contract, index) in contracts" :key="index" 
                class="p-3 rounded-lg mb-2 cursor-pointer hover:bg-slate-700/30 transition-colors"
                :class="{'bg-indigo-500/10 border border-indigo-500/30': index === 1}">
                <div class="flex items-center justify-between">
                  <div class="text-sm font-medium text-slate-200">{{ contract.name }}</div>
                  <div class="text-xs py-0.5 px-1.5 rounded" :class="getStatusClass(contract.status)">{{ contract.status }}</div>
                </div>
                <div class="text-xs text-slate-400 mt-1">{{ contract.description }}</div>
                <div class="flex items-center text-xs text-slate-500 mt-2">
                  <span>版本 {{ contract.version }}</span>
                  <span class="mx-2">•</span>
                  <span>{{ contract.category }}</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 中间：合约代码与可视化 -->
          <div class="md:col-span-2 bg-slate-800/20 border border-slate-700 rounded-xl overflow-hidden">
            <div class="border-b border-slate-700">
              <div class="flex">
                <button class="py-3 px-4 font-medium text-sm border-b-2 border-indigo-500 text-slate-200">合约逻辑</button>
                <button class="py-3 px-4 font-medium text-sm border-b-2 border-transparent text-slate-400 hover:text-slate-200">执行记录</button>
                <button class="py-3 px-4 font-medium text-sm border-b-2 border-transparent text-slate-400 hover:text-slate-200">参数配置</button>
              </div>
            </div>
            
            <!-- 合约代码与流程图并排 -->
            <div class="grid md:grid-cols-2 h-[400px]">
              <!-- 合约代码 -->
              <div class="border-r border-slate-700 p-4 h-full overflow-auto custom-scrollbar">
                <div class="flex items-center justify-between mb-3">
                  <h4 class="text-sm font-medium text-slate-300">农产品质量认证合约</h4>
                  <div class="flex space-x-2">
                    <button class="p-1 text-slate-500 hover:text-slate-300">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </button>
                    <button class="p-1 text-slate-500 hover:text-slate-300">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <!-- 代码编辑器模拟 -->
                <div class="font-mono text-xs leading-relaxed text-slate-300 bg-slate-900/70 p-3 rounded-lg">
                  <pre class="text-indigo-300">contract QualityCertification {</pre>
                  <pre>    <span class="text-green-400">// 农产品属性结构体</span></pre>
                  <pre>    struct Product {</pre>
                  <pre>        string productId;</pre>
                  <pre>        string name;</pre>
                  <pre>        string origin;</pre>
                  <pre>        uint256 plantingDate;</pre>
                  <pre>        uint256 harvestDate;</pre>
                  <pre>        string[] qualityParams;</pre>
                  <pre>        bool certified;</pre>
                  <pre>    }</pre>
                  <pre> </pre>
                  <pre>    <span class="text-green-400">// 产品质量认证事件</span></pre>
                  <pre>    event CertificationCompleted(</pre>
                  <pre>        string productId,</pre>
                  <pre>        bool result,</pre>
                  <pre>        string certificationId,</pre>
                  <pre>        uint256 timestamp</pre>
                  <pre>    );</pre>
                  <pre> </pre>
                  <pre>    <span class="text-blue-400">mapping</span>(string => Product) public products;</pre>
                  <pre>    <span class="text-blue-400">mapping</span>(string => string) public certifications;</pre>
                  <pre> </pre>
                  <pre>    <span class="text-blue-400">function</span> <span class="text-yellow-300">certifyProduct</span>(</pre>
                  <pre>        string memory productId,</pre>
                  <pre>        string[] memory qualityParams</pre>
                  <pre>    ) public <span class="text-blue-400">returns</span> (bool) {</pre>
                  <pre>        <span class="text-purple-400">require</span>(products[productId].plantingDate > 0,</pre>
                  <pre>            <span class="text-orange-300">"产品未注册"</span>);</pre>
                  <pre>        <span class="text-purple-400">require</span>(!products[productId].certified,</pre>
                  <pre>            <span class="text-orange-300">"产品已认证"</span>);</pre>
                  <pre> </pre>
                  <pre>        <span class="text-green-400">// 质量标准检查逻辑...</span></pre>
                  <pre>        bool qualityPassed = <span class="text-yellow-300">validateQuality</span>(qualityParams);</pre>
                  <pre>        <span class="text-purple-400">if</span> (qualityPassed) {</pre>
                  <pre>            products[productId].certified = true;</pre>
                  <pre>            products[productId].qualityParams = qualityParams;</pre>
                  <pre>        }</pre>
                  <pre>    }</pre>
                  <pre class="text-indigo-300">}</pre>
                </div>
              </div>
              
              <!-- 流程可视化 -->
              <div class="p-4 h-full overflow-auto custom-scrollbar">
                <h4 class="text-sm font-medium text-slate-300 mb-3">合约执行流程</h4>
                
                <!-- 流程图 -->
                <div class="flex flex-col items-center space-y-4">
                  <!-- 节点1 -->
                  <div class="w-48 p-3 bg-indigo-500/10 border border-indigo-500/30 rounded-lg text-center">
                    <div class="text-xs font-medium text-indigo-400">产品信息录入</div>
                  </div>
                  <!-- 连接线 -->
                  <div class="h-6 w-px bg-indigo-500/30 relative">
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-500 rounded-full animate-ping opacity-75"></div>
                  </div>
                  <!-- 节点2 -->
                  <div class="w-48 p-3 bg-indigo-500/10 border border-indigo-500/30 rounded-lg text-center">
                    <div class="text-xs font-medium text-indigo-400">质量参数采集</div>
                  </div>
                  <!-- 连接线 -->
                  <div class="h-6 w-px bg-indigo-500/30"></div>
                  <!-- 节点3 - 当前执行 -->
                  <div class="w-48 p-3 bg-indigo-500/20 border border-indigo-500 rounded-lg text-center relative">
                    <div class="absolute -right-1 -top-1 w-3 h-3 bg-indigo-500 rounded-full"></div>
                    <div class="text-xs font-medium text-indigo-300">质量标准验证</div>
                  </div>
                  <!-- 连接线 -->
                  <div class="h-6 w-px bg-slate-700"></div>
                  <!-- 分支 -->
                  <div class="relative w-full">
                    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-slate-700"></div>
                    <div class="flex justify-between">
                      <div class="w-32 p-2 bg-slate-800/70 border border-slate-700 rounded-lg text-center">
                        <div class="text-xs text-slate-400">不通过</div>
                      </div>
                      <div class="w-32 p-2 bg-slate-800/70 border border-slate-700 rounded-lg text-center">
                        <div class="text-xs text-slate-400">通过</div>
                      </div>
                    </div>
                  </div>
                  <!-- 连接线 -->
                  <div class="h-6 w-px bg-slate-700"></div>
                  <!-- 节点5 -->
                  <div class="w-48 p-3 bg-slate-800/70 border border-slate-700 rounded-lg text-center">
                    <div class="text-xs text-slate-400">证书生成与上链</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 性能指标 -->
        <div class="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="bg-slate-800/30 border border-slate-700 rounded-lg p-4 text-center">
            <div class="text-sm text-slate-400 mb-1">合约执行成本降低</div>
            <div class="text-2xl font-bold text-indigo-400">58%</div>
            <div class="mt-2 text-xs text-slate-500">相比传统中心化系统</div>
          </div>
          <div class="bg-slate-800/30 border border-slate-700 rounded-lg p-4 text-center">
            <div class="text-sm text-slate-400 mb-1">自动化执行农产品业务流程</div>
            <div class="text-2xl font-bold text-indigo-400">44类</div>
            <div class="mt-2 text-xs text-slate-500">覆盖17种农产品全生命周期</div>
          </div>
          <div class="bg-slate-800/30 border border-slate-700 rounded-lg p-4 text-center">
            <div class="text-sm text-slate-400 mb-1">日均合约调用次数</div>
            <div class="text-2xl font-bold text-indigo-400">8,645</div>
            <div class="mt-2 text-xs text-slate-500">持续稳定增长中</div>
          </div>
          <div class="bg-slate-800/30 border border-slate-700 rounded-lg p-4 text-center">
            <div class="text-sm text-slate-400 mb-1">平均响应时间</div>
            <div class="text-2xl font-bold text-indigo-400">267ms</div>
            <div class="mt-2 text-xs text-green-500">↓ 同比下降38%</div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContractManagement',
  data() {
    return {
      contracts: [
        {
          name: '农产品注册合约',
          description: '记录农产品基础信息、产地及种植/养殖时间',
          version: '1.2.5',
          category: '基础管理',
          status: '活跃'
        },
        {
          name: '农产品质量认证合约',
          description: '依据质量标准对农产品进行认证并生成证书',
          version: '2.0.1',
          category: '认证管理',
          status: '活跃'
        },
        {
          name: '物流追踪合约',
          description: '记录农产品从产地到销售终端的全流程物流信息',
          version: '1.8.3',
          category: '物流管理',
          status: '活跃'
        },
        {
          name: '冷链监控合约',
          description: '记录并验证冷链产品的温度监控数据',
          version: '1.5.2',
          category: '物流管理',
          status: '活跃'
        },
        {
          name: '批次管理合约',
          description: '管理农产品的生产批次与销售批次关联',
          version: '1.1.7',
          category: '基础管理',
          status: '活跃'
        },
        {
          name: '农产品交易合约',
          description: '记录农产品交易信息并自动结算',
          version: '1.9.4',
          category: '交易管理',
          status: '活跃'
        },
        {
          name: '农户激励合约',
          description: '基于数据贡献度对农户进行通证激励',
          version: '1.0.8',
          category: '激励管理',
          status: '测试中'
        },
        {
          name: '碳足迹计算合约',
          description: '计算农产品从生产到销售的碳排放量',
          version: '0.5.3',
          category: '绿色认证',
          status: '开发中'
        }
      ]
    }
  },
  methods: {
    getStatusClass(status) {
      if (status === '活跃') {
        return 'bg-green-500/20 text-green-400';
      } else if (status === '测试中') {
        return 'bg-yellow-500/20 text-yellow-400';
      } else {
        return 'bg-blue-500/20 text-blue-400';
      }
    }
  }
}
</script> 