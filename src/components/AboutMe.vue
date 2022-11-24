<template>
  <section id="about" class="p-56 text-gray-400 flex">
    <div>
      <h2 class="text-5xl py-2">Über Mich</h2>
      <p class="text-2xl">
        Ich bin <span class="text-highlight">22</span> Jahre alt. <br>
        Während meines Abiturs hatte ich bereits das Fach Informatik, wodurch ich schon erste Erfahrungen sammeln konnte. <br>
        <span class="text-highlight">2018</span> habe ich dann mein Studium an der <a href="https://www.th-koeln.de/" class="text-highlight">Technischen Hochschule Köln</a> angefangen.
      </p>
    </div>

    <div>
      <div class="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="fill-gray-400"></path>
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
import DividerSin from "@/components/divider/DividerWave.vue";

export default {
  name: "AboutMe"
}
</script>
