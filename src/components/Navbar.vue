<template>
  <section id="navbar" class="sticky top-0 z-50
                          h-16 bg-dark-700
                          flex items-center justify-center gap-7
                          text-2xl font-bold text-dark-50
                          drop-shadow-xl">
    <a href="#" v-scroll-to="'#home'">Home</a>
    <a href="#" v-scroll-to="{el: '#about', offset: -64}">About</a>
    <a href="#" v-scroll-to="{el: '#skillset', offset: -64}">Skillset</a>
    <a href="#" v-scroll-to="{el: '#projects', offset: -64}">Projects</a>
  </section>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>