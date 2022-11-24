<script setup>
import Navbar from "@/components/Navbar.vue";
import AboutMe from "@/components/AboutMe.vue";
import Skillset from "@/components/Skillset.vue";
import Projects from "@/components/Projects.vue";
import Home from "@/components/Home.vue";
import DividerWave from "@/components/divider/DividerWave.vue";
import DividerTilt from "@/components/divider/DividerTilt.vue";
import DividerLayeredWaves from "@/components/divider/DividerLayeredWaves.vue";
</script>

<template>
  <section class="bg-gray-700 flex flex-col items-stretch justify-center">
    <Home/>
    <Navbar/>
    <AboutMe/>
    <DividerLayeredWaves :fill1="'fill-gray-700'" :fill2="'fill-gray-400'" :fill3="'fill-gray-300'" :fill4="'fill-amber-200'" :fill5="'fill-amber-400'"/>
<!--    <DividerLayeredWaves :colors="['gray-700', 'gray-500', 'gray-200', 'amber-200', 'amber-400']"/>-->
<!--    <DividerWave :bg="'bg-gray-700'" :fill="'fill-amber-400'"/>-->
    <Skillset/>
    <DividerTilt :bg="'bg-amber-400'" :fill="'fill-blue-800'"/>
    <Projects/>
  </section>
</template>

<style src="./assets/main.css"></style>
