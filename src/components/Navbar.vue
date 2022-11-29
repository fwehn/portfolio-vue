<template>
  <section id="navbar" class="sticky top-0 z-50
                              h-16 bg-dark-700
                              flex items-center justify-center gap-7
                              text-2xl font-bold text-dark-50
                              drop-shadow-xl">


    <div class="flex flex-col group">
      <a href="#" class="navbarItem" v-scroll-to="'#home'">Start</a>
      <span class="w-full bg-dark-50 h-1 scale-0 group-hover:scale-100 transition-all origin-center border-dark-50 border-1 rounded"></span>
    </div>

    <div class="flex flex-col group">
      <a href="#" class="navbarItem" v-scroll-to="{el: '#about', offset: -64}">Über Mich</a>
      <span class="w-full bg-dark-50 h-1 scale-0 group-hover:scale-100 transition-all origin-center border-dark-50 border-1 rounded"></span>
    </div>

    <div class="flex flex-col group">
      <a href="#" class="navbarItem" v-scroll-to="{el: '#skillset', offset: -64}">Skillset</a>
      <span class="w-full bg-dark-50 h-1 scale-0 group-hover:scale-100 transition-all origin-center border-dark-50 border-1 rounded"></span>
    </div>

    <div class="flex flex-col group">
      <a href="#" class="navbarItem" v-scroll-to="{el: '#projects', offset: -64}">Projekte</a>
      <span class="w-full bg-dark-50 h-1 scale-0 group-hover:scale-100 transition-all origin-center border-dark-50 border-1 rounded"></span>
    </div>

  </section>
</template>

<script>

export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>