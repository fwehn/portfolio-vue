<template>
  <Home/>
  <Navbar/>
  <AboutMe/>
  <DividerLayeredWaves :fill1="'fill-dark-900'" :fill2="'fill-dark-500'" :fill3="'fill-dark-300'" :fill4="'fill-dark-700'" :fill5="'fill-dark-900'"/>
  <Skillset/>
  <DividerLayeredWaves :fill1="'fill-dark-900'" :fill2="'fill-dark-500'" :fill3="'fill-dark-300'" :fill4="'fill-dark-700'" :fill5="'fill-dark-900'"/>
  <Projects/>
  <Footer/>
</template>

<script>
import Home from "@/components/Home.vue";
import Navbar from "@/components/Navbar.vue";
import AboutMe from "@/components/AboutMe.vue";
import DividerLayeredWaves from "@/components/divider/DividerLayeredWaves.vue";
import Skillset from "@/components/Skillset.vue";
import Projects from "@/components/Projects.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Main",
  components: {Projects, Skillset, DividerLayeredWaves, AboutMe, Navbar, Home, Footer},
  created(){
    document.title = "Portfolio"
  }
}
</script>

<style scoped>

</style>