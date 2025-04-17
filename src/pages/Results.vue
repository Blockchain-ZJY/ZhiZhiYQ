<template>
  <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- 网站页眉 -->
    <Header />

    <!-- 页面内容 -->
    <main class="grow">

      <HeroBlockchain />
      <BlockchainStats />
      <BlockchainExplorer />
      <BlockchainPerformance />
      <ContractManagement />
      <DeFiIncentives />      

    </main>
    
    <!-- 网站页脚 -->
    <Footer />    

  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import HeroBlockchain from '../partials/HeroBlockchain.vue'
import BlockchainStats from '../partials/BlockchainStats.vue'
import BlockchainExplorer from '../partials/BlockchainExplorer.vue'
import BlockchainPerformance from '../partials/BlockchainPerformance.vue'
import ContractManagement from '../partials/ContractManagement.vue'
import DeFiIncentives from '../partials/DeFiIncentives.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'BlockchainResultsPage',
  components: {
    Header,
    HeroBlockchain,
    BlockchainStats,
    BlockchainExplorer,
    BlockchainPerformance,
    ContractManagement,
    DeFiIncentives,
    Footer,
  },
}
</script> 