<script setup>
import Navbar from "@/components/Navbar.vue";
import AboutMe from "@/components/AboutMe.vue";
import Skillset from "@/components/Skillset.vue";
import Projects from "@/components/Projects.vue";
import Home from "@/components/Home.vue";
import DividerLayeredWaves from "@/components/divider/DividerLayeredWaves.vue";
</script>

<template>
  <section class=" text-dark-300 bg-dark-900 flex flex-col items-stretch justify-center">
    <Home/>
    <Navbar/>
    <AboutMe/>
    <DividerLayeredWaves :fill1="'fill-dark-900'" :fill2="'fill-dark-500'" :fill3="'fill-dark-300'" :fill4="'fill-dark-700'" :fill5="'fill-dark-900'"/>
    <Skillset/>
    <DividerLayeredWaves :fill1="'fill-dark-900'" :fill2="'fill-dark-500'" :fill3="'fill-dark-300'" :fill4="'fill-dark-700'" :fill5="'fill-dark-900'"/>
    <Projects/>
  </section>
</template>

<style src="./assets/main.css"></style>
