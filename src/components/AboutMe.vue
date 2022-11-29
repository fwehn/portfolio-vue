<template>
  <section id="about" class="mainSections">
    <h2 class="text-5xl py-2">Über Mich</h2>
    <div class="flex items-center md:gap-32 sm:gap-16 md:flex-row sm:flex-col">
      <p class="text-2xl">
        Ich bin <span class="text-highlight">22</span> Jahre alt. <br>
        Derzeit studiere ich Informatik an der <a href="https://www.th-koeln.de/" target=”_blank” class="text-highlight">Technischen Hochschule Köln</a> in Gummersbach. <br>
        Darüber hinaus probiere ich in meiner Freizeit gerne unterschiedliche Technologien und Frameworks aus, mit denen ich private <a href="#" v-scroll-to="{el: '#projects', offset: -64}" class="text-highlight">Softwareprojekte</a> umsetze.
      </p>
      <img src="../assets/profile.jpg" class="w-64 h-64 h-auto object-cover rounded-full" alt="Profile-Picture"/>
    </div>

  </section>
</template>

<script>
export default {
  name: "AboutMe"
}
</script>
