<template>
  <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <Hero />
      <Team />
      <Recruitment />
      <Cta />      

    </main>
    
    <!-- Site footer -->
    <Footer />    

  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import Hero from '../partials/HeroAbout.vue'
import Team from '../partials/Team.vue'
import Recruitment from '../partials/Recruitment.vue'
import Cta from '../partials/Cta02.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'TeamPage',
  components: {
    Header,
    Hero,
    Team,
    Recruitment,
    Cta,
    Footer,
  },
}
</script> 