<template>
  <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- 网站页眉 -->
    <Header />

    <!-- 页面内容 -->
    <main class="grow">

      <Hero3D />
      <PainPoints />
      <TechSolutions />
      <ApplicationScenes />
      <TechResults />
      <Cta />

    </main>
    
    <!-- 网站页脚 -->
    <Footer />    

  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import Hero3D from '../partials/Hero3D.vue'
import PainPoints from '../partials/PainPoints.vue'
import TechSolutions from '../partials/TechSolutions.vue'
import ApplicationScenes from '../partials/ApplicationScenes.vue'
import TechResults from '../partials/TechResults.vue'
import Cta from '../partials/Cta.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Hero3D,
    PainPoints,
    TechSolutions,
    ApplicationScenes,
    TechResults,
    Cta,
    Footer,
  },
}
</script>