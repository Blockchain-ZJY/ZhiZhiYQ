<template>
  <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- 网站页眉 -->
    <Header />

    <!-- 页面内容 -->
    <main class="grow">

      <Hero />
      <ApplicationScenes />
      <Cta />      

    </main>
    
    <!-- 网站页脚 -->
    <Footer />    

  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import Hero from '../partials/HeroApplications.vue'
import ApplicationScenes from '../partials/ApplicationScenes.vue'
import Cta from '../partials/Cta.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'ApplicationsPage',
  components: {
    Header,
    Hero,
    ApplicationScenes,
    Cta,
    Footer,
  },
}
</script> 