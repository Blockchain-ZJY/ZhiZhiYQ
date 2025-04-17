<template>
  <section class="relative">
    <!-- 渐变背景 -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
      <div class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1/3 aspect-square">
        <div class="absolute inset-0 translate-z-0 bg-blue-500 rounded-full blur-[120px] opacity-50"></div>
      </div>
    </div>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <!-- 内容 -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">核心技术能力</h2>
          <p class="text-lg text-slate-400">基于前沿技术打造智慧乡村解决方案，实现数据驱动的精准治理</p>
        </div>
        <!-- 技术栈展示 -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-6">
          <template v-for="(item, index) in items" :key="index">
            <div class="relative flex items-center justify-between py-4 pl-4 pr-3 group before:absolute before:inset-0 before:-z-10 before:border before:border-slate-300 before:bg-slate-700 before:opacity-0 hover:before:opacity-10 transition-opacity focus-within:before:opacity-10 before:rounded-xl before:transition-opacity">
              <div class="flex items-center space-x-4">
                <div class="shrink-0 w-12 h-12 flex items-center justify-center bg-blue-500/10 rounded-lg">
                  <img class="w-8 h-8" :src="item.image" :alt="item.name" />
                </div>
                <div class="grow">
                  <div class="font-bold text-slate-100 mb-0.5">{{ item.name }}</div>
                  <div class="text-sm text-blue-500 font-medium">{{ item.role }}</div>
                </div>
              </div>
              <div class="shrink-0 ml-2">
                <span class="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full">{{ item.version }}</span>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TechIcon1 from '../images/keji.png'
import TechIcon2 from '../images/keji.png'
import TechIcon3 from '../images/keji.png'
import TechIcon4 from '../images/keji.png'
import TechIcon5 from '../images/keji.png'
import TechIcon6 from '../images/keji.png'
import TechIcon7 from '../images/keji.png'
import TechIcon8 from '../images/keji.png'

export default {
  name: 'Team',
  setup() {
    const items = [
      {
        name: '人工智能技术',
        role: '深度学习与计算机视觉',
        image: TechIcon1,
        version: 'TensorFlow',
      },
      {
        name: '大数据分析',
        role: '农业数据挖掘与预测',
        image: TechIcon2,
        version: 'Hadoop',
      },
      {
        name: '区块链技术',
        role: '农产品溯源与交易',
        image: TechIcon3,
        version: 'Hyperledger',
      },
      {
        name: '云计算平台',
        role: '分布式计算与存储',
        image: TechIcon4,
        version: 'K8s',
      },
      {
        name: '物联网技术',
        role: '智能传感与控制',
        image: TechIcon5,
        version: 'MQTT',
      },
      {
        name: '网络安全',
        role: '数据安全与隐私保护',
        image: TechIcon6,
        version: 'Zero-Trust',
      },
      {
        name: 'API集成',
        role: '系统互联与服务集成',
        image: TechIcon7,
        version: 'GraphQL',
      },
      {
        name: '机器学习',
        role: '智能决策与优化',
        image: TechIcon8,
        version: 'PyTorch',
      }
    ]

    return {
      items
    }
  }
}
</script>