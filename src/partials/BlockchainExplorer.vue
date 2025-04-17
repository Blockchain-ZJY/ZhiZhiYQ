<template>
  <section id="blockchain-explorer" class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t border-slate-800">

        <!-- 区块链浏览器标题 -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <div class="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-200 pb-3">区块链数据可视化</div>
          <h2 class="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">区块链浏览器</h2>
          <p class="text-lg text-slate-400">透明公开的农产品全生命周期数据，实时查询交易记录和区块信息</p>
        </div>

        <!-- 区块链浏览器UI -->
        <div class="bg-slate-800/30 border border-slate-700 rounded-xl overflow-hidden backdrop-blur-sm">
          <!-- 浏览器顶部导航 -->
          <div class="flex flex-wrap md:flex-nowrap items-center justify-between border-b border-slate-700 px-6 py-4">
            <div class="flex items-center space-x-4 mb-4 md:mb-0 w-full md:w-auto">
              <div class="relative flex-grow">
                <input type="text" class="w-full bg-slate-800 border border-slate-700 focus:border-indigo-500 rounded-lg text-sm pl-10 pr-4 py-2 text-slate-300 placeholder-slate-500 focus:outline-none" placeholder="输入交易哈希、区块号或农产品ID..." />
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
              <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg text-sm px-4 py-2 transition-colors duration-150">搜索</button>
            </div>
            <div class="flex space-x-4 w-full md:w-auto justify-between md:justify-start">
              <button 
                @click="activeTab = 'transactions'" 
                :class="{'text-slate-300 hover:text-white border-b-2 border-indigo-500': activeTab === 'transactions', 'text-slate-400 hover:text-white': activeTab !== 'transactions'}" 
                class="px-3 py-1 text-sm font-medium">最新交易</button>
              <button 
                @click="activeTab = 'blocks'" 
                :class="{'text-slate-300 hover:text-white border-b-2 border-indigo-500': activeTab === 'blocks', 'text-slate-400 hover:text-white': activeTab !== 'blocks'}" 
                class="px-3 py-1 text-sm font-medium">区块列表</button>
              <button 
                @click="activeTab = 'contracts'" 
                :class="{'text-slate-300 hover:text-white border-b-2 border-indigo-500': activeTab === 'contracts', 'text-slate-400 hover:text-white': activeTab !== 'contracts'}" 
                class="px-3 py-1 text-sm font-medium">智能合约</button>
              <button 
                @click="activeTab = 'trace'" 
                :class="{'text-slate-300 hover:text-white border-b-2 border-indigo-500': activeTab === 'trace', 'text-slate-400 hover:text-white': activeTab !== 'trace'}" 
                class="px-3 py-1 text-sm font-medium">农产品溯源</button>
            </div>
          </div>

          <!-- 区块链状态摘要 -->
          <div class="grid grid-cols-4 divide-x divide-slate-700 border-b border-slate-700">
            <div class="p-4 text-center">
              <div class="text-xs text-slate-400 mb-1">当前区块高度</div>
              <div class="font-mono text-lg text-indigo-400 font-medium">2,456,789</div>
            </div>
            <div class="p-4 text-center">
              <div class="text-xs text-slate-400 mb-1">平均出块时间</div>
              <div class="font-mono text-lg text-indigo-400 font-medium">3.2 秒</div>
            </div>
            <div class="p-4 text-center">
              <div class="text-xs text-slate-400 mb-1">总交易数</div>
              <div class="font-mono text-lg text-indigo-400 font-medium">76,429</div>
            </div>
            <div class="p-4 text-center">
              <div class="text-xs text-slate-400 mb-1">活跃合约数</div>
              <div class="font-mono text-lg text-indigo-400 font-medium">44</div>
            </div>
          </div>

          <!-- 最新区块链交易记录 -->
          <div class="p-6" v-if="activeTab === 'transactions'">
            <h3 class="text-lg font-semibold text-slate-200 mb-4">最新交易记录</h3>
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="text-left border-b border-slate-700">
                    <th class="pb-3 px-2 text-xs font-semibold text-slate-400">交易哈希</th>
                    <th class="pb-3 px-2 text-xs font-semibold text-slate-400">区块</th>
                    <th class="pb-3 px-2 text-xs font-semibold text-slate-400">时间</th>
                    <th class="pb-3 px-2 text-xs font-semibold text-slate-400">类型</th>
                    <th class="pb-3 px-2 text-xs font-semibold text-slate-400">农产品</th>
                    <th class="pb-3 px-2 text-xs font-semibold text-slate-400">状态</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="transaction in paginatedTransactions" :key="transaction.hash" class="border-b border-slate-800 hover:bg-slate-800/30 cursor-pointer" @click="showTransactionDetails(transaction)">
                    <td class="py-3 px-2 truncate max-w-[130px]">
                      <div class="font-mono text-xs text-indigo-400">{{ transaction.hash }}</div>
                    </td>
                    <td class="py-3 px-2">
                      <div class="font-mono text-xs text-slate-300">{{ transaction.block }}</div>
                    </td>
                    <td class="py-3 px-2">
                      <div class="text-xs text-slate-400">{{ transaction.time }}</div>
                    </td>
                    <td class="py-3 px-2">
                      <div class="inline-block px-2 py-1 text-xs rounded-full" :class="getTypeClass(transaction.type)">
                        {{ transaction.type }}
                      </div>
                    </td>
                    <td class="py-3 px-2">
                      <div class="text-xs text-slate-300">{{ transaction.product }}</div>
                    </td>
                    <td class="py-3 px-2">
                      <div class="inline-flex items-center">
                        <span class="w-2 h-2 rounded-full mr-1" :class="getStatusClass(transaction.status)"></span>
                        <span class="text-xs" :class="getStatusTextClass(transaction.status)">{{ transaction.status }}</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <!-- 分页控制 -->
            <div class="flex justify-between items-center mt-6">
              <div class="text-xs text-slate-400">显示 {{ start }}-{{ end }} 条，共 {{ total }} 条记录</div>
              <div class="flex space-x-2">
                <button @click="prevPage" :disabled="currentPage === 1" class="px-3 py-1 text-xs border border-slate-700 rounded hover:bg-slate-700 text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed">上一页</button>
                <button v-for="page in totalPages" :key="page" @click="goToPage(page)" :class="{'bg-indigo-500/20 text-indigo-400': currentPage === page, 'text-slate-400': currentPage !== page}" class="px-3 py-1 text-xs border border-slate-700 rounded hover:bg-slate-700">
                  {{ page }}
                </button>
                <button @click="nextPage" :disabled="currentPage === totalPages" class="px-3 py-1 text-xs border border-slate-700 rounded hover:bg-slate-700 text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed">下一页</button>
              </div>
            </div>
          </div>

          <!-- 区块列表 -->
          <div class="p-6" v-if="activeTab === 'blocks'">
            <h3 class="text-lg font-semibold text-slate-200 mb-4">区块列表</h3>
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="text-left border-b border-slate-700">
                    <th class="pb-3 px-2 text-xs font-semibold text-slate-400">区块高度</th>
                    <th class="pb-3 px-2 text-xs font-semibold text-slate-400">时间戳</th>
                    <th class="pb-3 px-2 text-xs font-semibold text-slate-400">交易数</th>
                    <th class="pb-3 px-2 text-xs font-semibold text-slate-400">区块大小</th>
                    <th class="pb-3 px-2 text-xs font-semibold text-slate-400">块验证者</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="block in paginatedBlocks" :key="block.height" class="border-b border-slate-800 hover:bg-slate-800/30 cursor-pointer">
                    <td class="py-3 px-2">
                      <div class="font-mono text-xs text-indigo-400">{{ block.height }}</div>
                    </td>
                    <td class="py-3 px-2">
                      <div class="text-xs text-slate-400">{{ block.timestamp }}</div>
                    </td>
                    <td class="py-3 px-2">
                      <div class="text-xs text-slate-300">{{ block.txCount }}</div>
                    </td>
                    <td class="py-3 px-2">
                      <div class="text-xs text-slate-300">{{ block.size }}</div>
                    </td>
                    <td class="py-3 px-2">
                      <div class="text-xs text-slate-300 truncate max-w-[120px]">{{ block.validator }}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <!-- 区块分页控制 -->
            <div class="flex justify-between items-center mt-6">
              <div class="text-xs text-slate-400">显示 {{ blockStart }}-{{ blockEnd }} 条，共 {{ blocks.length }} 条记录</div>
              <div class="flex space-x-2">
                <button @click="prevBlockPage" :disabled="blockPage === 1" class="px-3 py-1 text-xs border border-slate-700 rounded hover:bg-slate-700 text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed">上一页</button>
                <button v-for="page in blockTotalPages" :key="page" @click="goToBlockPage(page)" :class="{'bg-indigo-500/20 text-indigo-400': blockPage === page, 'text-slate-400': blockPage !== page}" class="px-3 py-1 text-xs border border-slate-700 rounded hover:bg-slate-700">
                  {{ page }}
                </button>
                <button @click="nextBlockPage" :disabled="blockPage === blockTotalPages" class="px-3 py-1 text-xs border border-slate-700 rounded hover:bg-slate-700 text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed">下一页</button>
              </div>
            </div>
          </div>

          <!-- 智能合约 -->
          <div class="p-6" v-if="activeTab === 'contracts'">
            <h3 class="text-lg font-semibold text-slate-200 mb-4">智能合约列表</h3>
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="text-left border-b border-slate-700">
                    <th class="pb-3 px-2 text-xs font-semibold text-slate-400">合约地址</th>
                    <th class="pb-3 px-2 text-xs font-semibold text-slate-400">合约名称</th>
                    <th class="pb-3 px-2 text-xs font-semibold text-slate-400">创建时间</th>
                    <th class="pb-3 px-2 text-xs font-semibold text-slate-400">交互次数</th>
                    <th class="pb-3 px-2 text-xs font-semibold text-slate-400">类型</th>
                    <th class="pb-3 px-2 text-xs font-semibold text-slate-400">操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="contract in paginatedContracts" :key="contract.address" class="border-b border-slate-800 hover:bg-slate-800/30">
                    <td class="py-3 px-2 truncate max-w-[130px]">
                      <div class="font-mono text-xs text-indigo-400">{{ contract.address }}</div>
                    </td>
                    <td class="py-3 px-2">
                      <div class="text-xs text-slate-300">{{ contract.name }}</div>
                    </td>
                    <td class="py-3 px-2">
                      <div class="text-xs text-slate-400">{{ contract.createdAt }}</div>
                    </td>
                    <td class="py-3 px-2 text-center">
                      <div class="text-xs text-slate-300">{{ contract.interactions }}</div>
                    </td>
                    <td class="py-3 px-2">
                      <div class="inline-block px-2 py-1 text-xs rounded-full" :class="getContractTypeClass(contract.type)">
                        {{ contract.type }}
                      </div>
                    </td>
                    <td class="py-3 px-2">
                      <button @click="showContractDetails(contract)" class="text-xs text-indigo-400 hover:text-indigo-300 underline">查看</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <!-- 合约分页控制 -->
            <div class="flex justify-between items-center mt-6">
              <div class="text-xs text-slate-400">显示 {{ contractStart }}-{{ contractEnd }} 条，共 {{ contracts.length }} 条记录</div>
              <div class="flex space-x-2">
                <button @click="prevContractPage" :disabled="contractPage === 1" class="px-3 py-1 text-xs border border-slate-700 rounded hover:bg-slate-700 text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed">上一页</button>
                <button v-for="page in contractTotalPages" :key="page" @click="goToContractPage(page)" :class="{'bg-indigo-500/20 text-indigo-400': contractPage === page, 'text-slate-400': contractPage !== page}" class="px-3 py-1 text-xs border border-slate-700 rounded hover:bg-slate-700">
                  {{ page }}
                </button>
                <button @click="nextContractPage" :disabled="contractPage === contractTotalPages" class="px-3 py-1 text-xs border border-slate-700 rounded hover:bg-slate-700 text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed">下一页</button>
              </div>
            </div>
          </div>

          <!-- 农产品溯源 -->
          <div class="p-6" v-if="activeTab === 'trace'">
            <h3 class="text-lg font-semibold text-slate-200 mb-4">农产品溯源列表</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div v-for="product in products" :key="product.id" class="bg-slate-800/30 border border-slate-700 rounded-xl overflow-hidden backdrop-blur-sm hover:shadow-lg hover:border-indigo-500/50 transition-all duration-300">
                <div class="relative">
                  <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover" />
                  <div class="absolute top-3 right-3">
                    <span class="inline-block px-2 py-1 text-xs rounded-full" :class="getProductTypeClass(product.category)">
                      {{ product.category }}
                    </span>
                  </div>
                </div>
                <div class="p-4">
                  <h4 class="text-lg font-semibold text-white mb-2">{{ product.name }}</h4>
                  <div class="mb-2 text-xs text-slate-400">产地: {{ product.origin }}</div>
                  <div class="mb-3">
                    <div class="flex items-center mb-1">
                      <div class="text-xs text-slate-400 mr-2">溯源完整度:</div>
                      <div class="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                        <div class="h-full bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full" :style="{width: product.traceCompleteness + '%'}"></div>
                      </div>
                      <div class="text-xs text-indigo-400 ml-2">{{ product.traceCompleteness }}%</div>
                    </div>
                  </div>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span v-for="(step, index) in product.traceSteps" :key="index" 
                          class="text-xs px-2 py-1 rounded-full border"
                          :class="step.completed ? 'border-green-500 text-green-400 bg-green-500/10' : 'border-slate-600 text-slate-400 bg-slate-600/10'">
                      {{ step.name }}
                    </span>
                  </div>
                  <button @click="showProductTrace(product)" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg text-sm px-4 py-2 transition-colors duration-150">
                    查看完整溯源链
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 底部说明 -->
        <div class="mt-8 text-sm text-center text-slate-500">
          <p>区块链技术支持下的交易具有不可篡改性与可追溯性，保障农产品全程溯源的真实性与可靠性</p>
          <p class="mt-2">数据实时同步，交易记录永久存储，支持公众查询验证</p>
        </div>

      </div>
    </div>

    <!-- 弹窗：交易详情 -->
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-50" @click.self="closeModal">
      <div class="bg-slate-900/95 border border-slate-700 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto backdrop-blur-lg shadow-xl">
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-lg font-bold text-white">交易详情</h3>
          <button @click="closeModal" class="text-slate-400 hover:text-white">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div v-if="selectedTransaction" class="space-y-4">
          <!-- 交易基本信息 -->
          <div class="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div class="text-xs text-slate-400 mb-1">交易哈希</div>
                <div class="font-mono text-sm text-indigo-400 break-all">{{ selectedTransaction.hash }}</div>
              </div>
              <div>
                <div class="text-xs text-slate-400 mb-1">区块</div>
                <div class="font-mono text-sm text-slate-300">{{ selectedTransaction.block }}</div>
              </div>
              <div>
                <div class="text-xs text-slate-400 mb-1">时间</div>
                <div class="text-sm text-slate-300">{{ selectedTransaction.time }}</div>
              </div>
              <div>
                <div class="text-xs text-slate-400 mb-1">状态</div>
                <div class="inline-flex items-center">
                  <span class="w-2 h-2 rounded-full mr-1" :class="getStatusClass(selectedTransaction.status)"></span>
                  <span class="text-sm" :class="getStatusTextClass(selectedTransaction.status)">{{ selectedTransaction.status }}</span>
                </div>
              </div>
              <div>
                <div class="text-xs text-slate-400 mb-1">类型</div>
                <div class="inline-block px-2 py-1 text-xs rounded-full" :class="getTypeClass(selectedTransaction.type)">
                  {{ selectedTransaction.type }}
                </div>
              </div>
              <div>
                <div class="text-xs text-slate-400 mb-1">农产品</div>
                <div class="text-sm text-slate-300">{{ selectedTransaction.product }}</div>
              </div>
            </div>
          </div>
          
          <!-- 更多详细信息 -->
          <div class="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
            <h4 class="text-sm font-semibold text-slate-300 mb-3">追溯详情</h4>
            <div class="space-y-3">
              <div>
                <div class="text-xs text-slate-400 mb-1">操作者</div>
                <div class="text-sm text-slate-300">{{ getTxDetail('operator', '农场主 - 李明') }}</div>
              </div>
              <div>
                <div class="text-xs text-slate-400 mb-1">操作内容</div>
                <div class="text-sm text-slate-300">{{ getTxDetail('operation', '记录种植环境参数') }}</div>
              </div>
              <div>
                <div class="text-xs text-slate-400 mb-1">数据哈希</div>
                <div class="font-mono text-sm text-indigo-400 break-all">{{ getTxDetail('dataHash', '0x7a89b3f28a9e43f2b3d4e6c5d7a8b901a2c3d4e5f6a7b8c901a2b3c4d5e6f7a8') }}</div>
              </div>
              <div>
                <div class="text-xs text-slate-400 mb-1">环境参数</div>
                <div class="grid grid-cols-3 gap-2 mt-2">
                  <div class="bg-slate-700/30 p-2 rounded">
                    <div class="text-xs text-slate-400">温度</div>
                    <div class="text-sm text-indigo-400">{{ getTxDetail('temperature', '26.5°C') }}</div>
                  </div>
                  <div class="bg-slate-700/30 p-2 rounded">
                    <div class="text-xs text-slate-400">湿度</div>
                    <div class="text-sm text-indigo-400">{{ getTxDetail('humidity', '65%') }}</div>
                  </div>
                  <div class="bg-slate-700/30 p-2 rounded">
                    <div class="text-xs text-slate-400">光照</div>
                    <div class="text-sm text-indigo-400">{{ getTxDetail('light', '8.2万勒克斯') }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>

    <!-- 溯源链弹窗 -->
    <div v-if="showTraceModal" class="fixed inset-0 flex items-center justify-center z-50" @click.self="closeTraceModal">
      <div class="bg-slate-900/95 border border-slate-700 rounded-xl p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto backdrop-blur-lg shadow-xl">
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-lg font-bold text-white">{{ selectedProduct.name }} - 溯源链</h3>
          <button @click="closeTraceModal" class="text-slate-400 hover:text-white">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div v-if="selectedProduct" class="relative">
          <!-- 产品基本信息 -->
          <div class="flex flex-col md:flex-row gap-6 mb-8">
            <div class="md:w-1/3">
              <img :src="selectedProduct.image" :alt="selectedProduct.name" class="w-full h-auto rounded-lg border border-slate-700" />
            </div>
            <div class="md:w-2/3">
              <h4 class="text-xl font-bold text-white mb-2">{{ selectedProduct.name }}</h4>
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div class="text-xs text-slate-400 mb-1">产品编号</div>
                  <div class="text-sm text-slate-300">{{ selectedProduct.id }}</div>
                </div>
                <div>
                  <div class="text-xs text-slate-400 mb-1">产品类别</div>
                  <div class="inline-block px-2 py-1 text-xs rounded-full" :class="getProductTypeClass(selectedProduct.category)">
                    {{ selectedProduct.category }}
                  </div>
                </div>
                <div>
                  <div class="text-xs text-slate-400 mb-1">产地</div>
                  <div class="text-sm text-slate-300">{{ selectedProduct.origin }}</div>
                </div>
                <div>
                  <div class="text-xs text-slate-400 mb-1">上链时间</div>
                  <div class="text-sm text-slate-300">{{ selectedProduct.chainDate }}</div>
                </div>
              </div>
              <div class="mb-4">
                <div class="text-xs text-slate-400 mb-2">产品介绍</div>
                <div class="text-sm text-slate-300">{{ selectedProduct.description }}</div>
              </div>
              <div class="flex flex-wrap gap-2">
                <div class="flex flex-col items-center justify-center p-2 bg-indigo-500/10 border border-indigo-500/30 rounded-lg">
                  <div class="text-2xl font-bold text-indigo-400">{{ selectedProduct.viewCount }}</div>
                  <div class="text-xs text-slate-400">查询次数</div>
                </div>
                <div class="flex flex-col items-center justify-center p-2 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <div class="text-2xl font-bold text-green-400">{{ selectedProduct.verifyCount }}</div>
                  <div class="text-xs text-slate-400">验证通过</div>
                </div>
                <div class="flex flex-col items-center justify-center p-2 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <div class="text-2xl font-bold text-blue-400">{{ selectedProduct.tracePointCount }}</div>
                  <div class="text-xs text-slate-400">溯源节点</div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 溯源时间轴 -->
          <div class="relative pb-12">
            <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-slate-700"></div>
            <div v-for="(event, index) in selectedProduct.traceEvents" :key="index" class="relative mb-8">
              <div class="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full border-2" :class="event.verified ? 'bg-green-500/20 border-green-500' : 'bg-slate-800 border-slate-600'"></div>
              <div class="flex items-start" :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'">
                <div class="w-1/2"></div>
                <div :class="index % 2 === 0 ? 'ml-12' : 'mr-12'" class="w-1/2 bg-slate-800/40 border border-slate-700 rounded-lg p-4">
                  <div class="flex justify-between items-start mb-2">
                    <h5 class="text-indigo-400 font-medium">{{ event.title }}</h5>
                    <span class="text-xs px-2 py-1 rounded-full" :class="event.verified ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'">
                      {{ event.verified ? '已验证' : '待验证' }}
                    </span>
                  </div>
                  <p class="text-sm text-slate-400 mb-3">{{ event.description }}</p>
                  <div class="flex justify-between items-center text-xs text-slate-500">
                    <div>{{ event.date }}</div>
                    <div class="flex items-center">
                      <span class="mr-2">区块: {{ event.block }}</span>
                      <button class="text-indigo-400 hover:text-indigo-300 underline">查看交易</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 认证信息 -->
          <div v-if="selectedProduct.certifications && selectedProduct.certifications.length > 0" class="mt-8 bg-slate-800/40 border border-slate-700 rounded-lg p-4">
            <h4 class="text-sm font-semibold text-slate-300 mb-3">认证信息</h4>
            <div class="flex flex-wrap gap-4">
              <div v-for="(cert, index) in selectedProduct.certifications" :key="index" class="flex items-center p-2 bg-slate-800/60 border border-slate-600 rounded-lg">
                <div class="mr-3">
                  <div class="w-10 h-10 flex items-center justify-center rounded-full" :class="cert.color">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <div class="text-sm font-medium text-white">{{ cert.name }}</div>
                  <div class="text-xs text-slate-400">颁发日期: {{ cert.date }}</div>
                </div>
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
  name: 'BlockchainExplorer',
  data() {
    return {
      transactions: [
        { hash: '0x7de2b598d4a3a51ec0a17e4c48a83d3b9c381e42c957a253', block: '2,456,789', time: '5分钟前', type: '生产记录', product: '有机水稻', status: '已确认' },
        { hash: '0x31fe48a9bc067c942ef3f5ef8a23c98c2f43c9e7b3a5ad9a', block: '2,456,788', time: '8分钟前', type: '认证信息', product: '绿色茶叶', status: '已确认' },
        { hash: '0x9cf43e45d4f5a6b8c01d2e3f4a5a6b7c8d9e0f1a2b3c4d5e', block: '2,456,787', time: '12分钟前', type: '物流记录', product: '优质大米', status: '已确认' },
        { hash: '0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4', block: '2,456,786', time: '17分钟前', type: '质检报告', product: '草莓', status: '已确认' },
        { hash: '0xfc8d9e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d0e9f8a7', block: '2,456,785', time: '25分钟前', type: '销售记录', product: '有机蔬菜', status: '已确认' },
        { hash: '0x3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6', block: '2,456,784', time: '30分钟前', type: '加工记录', product: '牛肉干', status: '已确认' },
        { hash: '0x76a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e', block: '2,456,783', time: '42分钟前', type: '产地证明', product: '山药', status: '已确认' },
        { hash: '0xe1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d', block: '2,456,782', time: '55分钟前', type: '合约执行', product: '花椒', status: '处理中' },
        { hash: '0x4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7', block: '2,456,781', time: '1小时前', type: '溯源查询', product: '优质猪肉', status: '已确认' },
        { hash: '0xf8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b6a', block: '2,456,780', time: '1小时前', type: '认证信息', product: '百香果', status: '已确认' },
      ],
      blocks: [
        { height: '2,456,789', timestamp: '2023-06-10 14:25:36', txCount: 18, size: '12.4 KB', validator: '0x7a89b3f28a9e43f2' },
        { height: '2,456,788', timestamp: '2023-06-10 14:25:20', txCount: 24, size: '14.2 KB', validator: '0x3f2b3d4e6c5d7a8b' },
        { height: '2,456,787', timestamp: '2023-06-10 14:25:04', txCount: 15, size: '10.8 KB', validator: '0x901a2c3d4e5f6a7b' },
        { height: '2,456,786', timestamp: '2023-06-10 14:24:48', txCount: 30, size: '18.5 KB', validator: '0x8c901a2b3c4d5e6f' },
        { height: '2,456,785', timestamp: '2023-06-10 14:24:32', txCount: 12, size: '8.7 KB', validator: '0x7a8b901a2c3d4e5f' },
        { height: '2,456,784', timestamp: '2023-06-10 14:24:16', txCount: 22, size: '13.5 KB', validator: '0x6a7b8c901a2b3c4d' },
        { height: '2,456,783', timestamp: '2023-06-10 14:24:00', txCount: 19, size: '11.2 KB', validator: '0x5e6f7a8b901a2c3d' },
        { height: '2,456,782', timestamp: '2023-06-10 14:23:44', txCount: 27, size: '16.8 KB', validator: '0x4e5f6a7b8c901a2b' },
      ],
      currentPage: 1,
      pageSize: 10,
      blockPage: 1,
      blockPageSize: 10,
      showModal: false,
      selectedTransaction: null,
      activeTab: 'transactions',
      contracts: [
        { address: '0xd914f98b43df31150a4e7fce704a52a2ef3ba5d8', name: '农产品溯源管理', createdAt: '2023-05-15', interactions: 1245, type: '溯源记录' },
        { address: '0x67a97483c9e0ff9bbf2520dcc352a94ad96b24d0', name: '产品认证合约', createdAt: '2023-05-16', interactions: 876, type: '认证管理' },
        { address: '0x392743c9e0ff9bbf2520dcc352a94ad96b21a3f', name: '物流追踪系统', createdAt: '2023-05-18', interactions: 923, type: '物流管理' },
        { address: '0x8a29c32fa3e0ff9bbf2520dcc352a94ad96b5c2', name: '农产品质量检测', createdAt: '2023-05-20', interactions: 512, type: '质检报告' },
        { address: '0x3c01f9d2e0ff9bbf2520dcc352a94ad96b7e8a', name: '销售数据记录', createdAt: '2023-05-22', interactions: 734, type: '销售管理' },
        { address: '0xe5a2b9c7e0ff9bbf2520dcc352a94ad96b9d21', name: '农产品防伪验证', createdAt: '2023-05-25', interactions: 489, type: '防伪管理' },
      ],
      contractPage: 1,
      contractPageSize: 10,
      products: [
        {
          id: 'PRD-20230601-001',
          name: '有机西红柿',
          category: '水果蔬菜',
          origin: '河北省 石家庄市 灵寿县',
          image: 'https://via.placeholder.com/300x200?text=有机西红柿',
          traceCompleteness: 100,
          chainDate: '2023-06-01',
          description: '采用有机种植方式，无农药、无化肥，口感鲜美，营养丰富。严格按照有机种植标准进行生产，经过认证机构认证。',
          viewCount: 1268,
          verifyCount: 1268,
          tracePointCount: 8,
          traceSteps: [
            { name: '种植', completed: true },
            { name: '施肥', completed: true },
            { name: '采收', completed: true },
            { name: '检测', completed: true },
            { name: '包装', completed: true },
            { name: '运输', completed: true },
            { name: '销售', completed: true }
          ],
          traceEvents: [
            { title: '种子选择', description: '选用有机认证西红柿种子，品种为"红粉之恋"，适合有机栽培。', date: '2023-03-10', block: '2,456,123', verified: true },
            { title: '育苗移栽', description: '使用有机基质进行育苗，苗龄30天后进行移栽。', date: '2023-03-25', block: '2,456,236', verified: true },
            { title: '有机肥施用', description: '施用腐熟羊粪有机肥，每亩用量2000kg。', date: '2023-04-15', block: '2,456,347', verified: true },
            { title: '病虫害防治', description: '使用生物防治方法，释放捕食螨防治白粉虱，安装黄板诱捕害虫。', date: '2023-05-01', block: '2,456,412', verified: true },
            { title: '采收包装', description: '手工采摘成熟西红柿，轻拿轻放，采用可降解包装材料进行包装。', date: '2023-05-30', block: '2,456,528', verified: true },
            { title: '品质检测', description: '抽样送检，检测农药残留、重金属含量、营养成分，各项指标均符合有机标准。', date: '2023-05-31', block: '2,456,590', verified: true },
            { title: '物流运输', description: '使用冷链物流运输，全程温度控制在8-10℃。', date: '2023-06-01', block: '2,456,650', verified: true },
            { title: '超市上架', description: '产品已配送至各大超市有机食品专区销售。', date: '2023-06-02', block: '2,456,710', verified: true }
          ],
          certifications: [
            { name: '有机产品认证', date: '2023-06-01', color: 'bg-green-500/20 text-green-400' },
            { name: '绿色食品认证', date: '2023-05-25', color: 'bg-emerald-500/20 text-emerald-400' },
            { name: '质量安全认证', date: '2023-05-30', color: 'bg-blue-500/20 text-blue-400' }
          ]
        },
        {
          id: 'PRD-20230520-002',
          name: '富硒大米',
          category: '粮油米面',
          origin: '黑龙江省 五常市',
          image: 'https://via.placeholder.com/300x200?text=富硒大米',
          traceCompleteness: 85,
          chainDate: '2023-05-20',
          description: '种植于黑土地带，富含硒元素，米粒饱满，口感香糯。采用传统种植技术结合现代农业管理，保证大米品质。',
          viewCount: 952,
          verifyCount: 952,
          tracePointCount: 6,
          traceSteps: [
            { name: '育种', completed: true },
            { name: '播种', completed: true },
            { name: '田间管理', completed: true },
            { name: '收割', completed: true },
            { name: '加工', completed: true },
            { name: '检测', completed: true },
            { name: '运输', completed: false }
          ],
          traceEvents: [],
          certifications: []
        },
        {
          id: 'PRD-20230510-003',
          name: '高山蜂蜜',
          category: '调味品',
          origin: '四川省 阿坝州',
          image: 'https://via.placeholder.com/300x200?text=高山蜂蜜',
          traceCompleteness: 70,
          chainDate: '2023-05-10',
          description: '来自海拔3000米以上高山地区，蜜蜂采集高山野花花蜜酿制而成，纯天然无添加。',
          viewCount: 684,
          verifyCount: 684,
          tracePointCount: 5,
          traceSteps: [
            { name: '蜜源', completed: true },
            { name: '采集', completed: true },
            { name: '过滤', completed: true },
            { name: '灌装', completed: true },
            { name: '检测', completed: false },
            { name: '包装', completed: false }
          ],
          traceEvents: [],
          certifications: []
        }
      ],
      showTraceModal: false,
      selectedProduct: null,
    }
  },
  computed: {
    total() {
      return this.transactions.length;
    },
    totalPages() {
      return Math.ceil(this.total / this.pageSize);
    },
    start() {
      return (this.currentPage - 1) * this.pageSize + 1;
    },
    end() {
      return Math.min(this.start + this.pageSize - 1, this.total);
    },
    paginatedTransactions() {
      const start = (this.currentPage - 1) * this.pageSize;
      return this.transactions.slice(start, start + this.pageSize);
    },
    blockTotalPages() {
      return Math.ceil(this.blocks.length / this.blockPageSize);
    },
    blockStart() {
      return (this.blockPage - 1) * this.blockPageSize + 1;
    },
    blockEnd() {
      return Math.min(this.blockStart + this.blockPageSize - 1, this.blocks.length);
    },
    paginatedBlocks() {
      const start = (this.blockPage - 1) * this.blockPageSize;
      return this.blocks.slice(start, start + this.blockPageSize);
    },
    contractTotalPages() {
      return Math.ceil(this.contracts.length / this.contractPageSize);
    },
    contractStart() {
      return (this.contractPage - 1) * this.contractPageSize + 1;
    },
    contractEnd() {
      return Math.min(this.contractStart + this.contractPageSize - 1, this.contracts.length);
    },
    paginatedContracts() {
      const start = (this.contractPage - 1) * this.contractPageSize;
      return this.contracts.slice(start, start + this.contractPageSize);
    },
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    goToPage(page) {
      this.currentPage = page;
    },
    prevBlockPage() {
      if (this.blockPage > 1) this.blockPage--;
    },
    nextBlockPage() {
      if (this.blockPage < this.blockTotalPages) this.blockPage++;
    },
    goToBlockPage(page) {
      this.blockPage = page;
    },
    getTypeClass(type) {
      const typeClasses = {
        '生产记录': 'bg-green-500/20 text-green-400',
        '认证信息': 'bg-blue-500/20 text-blue-400',
        '物流记录': 'bg-yellow-500/20 text-yellow-400',
        '质检报告': 'bg-purple-500/20 text-purple-400',
        '销售记录': 'bg-pink-500/20 text-pink-400',
        '加工记录': 'bg-orange-500/20 text-orange-400',
        '产地证明': 'bg-teal-500/20 text-teal-400',
        '合约执行': 'bg-indigo-500/20 text-indigo-400',
        '溯源查询': 'bg-cyan-500/20 text-cyan-400'
      };
      return typeClasses[type] || 'bg-slate-500/20 text-slate-400';
    },
    getStatusClass(status) {
      return status === '已确认' ? 'bg-green-500' : 'bg-yellow-500';
    },
    getStatusTextClass(status) {
      return status === '已确认' ? 'text-green-400' : 'text-yellow-400';
    },
    showTransactionDetails(transaction) {
      this.selectedTransaction = transaction;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedTransaction = null;
    },
    getTxDetail(field, defaultValue) {
      const details = {
        '0x7de2b598d4a3a51ec0a17e4c48a83d3b9c381e42c957a253': {
          operator: '农场主 - 李明',
          operation: '记录种植环境参数',
          dataHash: '0x7a89b3f28a9e43f2b3d4e6c5d7a8b901a2c3d4e5f6a7b8c901a2b3c4d5e6f7a8',
          temperature: '26.5°C',
          humidity: '65%',
          light: '8.2万勒克斯'
        },
        '0x31fe48a9bc067c942ef3f5ef8a23c98c2f43c9e7b3a5ad9a': {
          operator: '认证机构 - 绿色食品认证中心',
          operation: '颁发有机认证',
          dataHash: '0x3f2b3d4e6c5d7a8b901a2c3d4e5f6a7b8c901a2b3c4d5e6f7a8b9c0d1e2f3a4b',
          temperature: '24.8°C',
          humidity: '60%',
          light: '7.5万勒克斯'
        }
      };
      
      if (!this.selectedTransaction) return defaultValue;
      const txDetails = details[this.selectedTransaction.hash];
      return txDetails && txDetails[field] ? txDetails[field] : defaultValue;
    },
    getContractTypeClass(type) {
      const typeClasses = {
        '溯源记录': 'bg-indigo-500/20 text-indigo-400',
        '认证管理': 'bg-green-500/20 text-green-400',
        '物流管理': 'bg-blue-500/20 text-blue-400',
        '质检报告': 'bg-purple-500/20 text-purple-400',
        '销售管理': 'bg-pink-500/20 text-pink-400',
        '防伪管理': 'bg-yellow-500/20 text-yellow-400'
      };
      return typeClasses[type] || 'bg-slate-500/20 text-slate-400';
    },
    showContractDetails(contract) {
      alert('查看合约: ' + contract.name);
    },
    prevContractPage() {
      if (this.contractPage > 1) this.contractPage--;
    },
    nextContractPage() {
      if (this.contractPage < this.contractTotalPages) this.contractPage++;
    },
    goToContractPage(page) {
      this.contractPage = page;
    },
    showProductTrace(product) {
      this.selectedProduct = product;
      this.showTraceModal = true;
    },
    closeTraceModal() {
      this.showTraceModal = false;
      this.selectedProduct = null;
    },
    getProductTypeClass(type) {
      const typeClasses = {
        '水果蔬菜': 'bg-green-500/20 text-green-400',
        '粮油米面': 'bg-yellow-500/20 text-yellow-400',
        '肉禽蛋': 'bg-red-500/20 text-red-400',
        '水产海鲜': 'bg-blue-500/20 text-blue-400',
        '乳制品': 'bg-indigo-500/20 text-indigo-400',
        '调味品': 'bg-purple-500/20 text-purple-400'
      };
      return typeClasses[type] || 'bg-slate-500/20 text-slate-400';
    },
  }
}
</script> 