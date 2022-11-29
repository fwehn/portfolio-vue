<template>
  <div id="home" class="h-screen flex flex-col items-center justify-center gap-7">


    <p class="text-5xl">
      Hi, <br>
      ich bin <span class="text-highlight">Finn</span>. <br>
<!--      Ich studiere Informatik <br> an der <a href="https://www.th-koeln.de/" target=”_blank” class="text-highlight">TH-Köln</a>.-->
    </p>

    <button v-scroll-to="'#navbar'" class="text-3xl text-dark-50 text-center align-middle px-3 py-1 border-2 border-dark-50 rounded-2xl">Los geht's!</button>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>