<template>
  <section id="projects" class="mainSections">
    <h2 class="text-5xl py-2">Projekte</h2>

    <div class="flex justify-center flex-wrap gap-10 w-5/6">
      <ProjectCard projectName="Portfolio"
                   projectDescription="Diese Portfolio-Website habe ich mit NodeJS und Vue erstellt."
                   projectLink="https://github.com/fwehn/portfolio-vue"
                   :techStack="['nodejs', 'vue', 'tailwind']"/>

      <ProjectCard projectName="Skillsystem"
                   projectDescription="Im Rahmen eines Projekts während meines Studiums, habe ich ein Skillsystem für den Sprachassistenten Rhasspy erstellt."
                   projectLink="https://github.com/fwehn/pp-voiceassistant"
                   :techStack="['nodejs', 'vue', 'mqtt']"/>

      <ProjectCard projectName="DiscordBot Backend"
                   projectDescription="Ein Bot, der die neuen Slash-Commands verwendet und verwaltet um unseren privaten Discord-Server zu ergänzen."
                   projectLink="https://github.com/fwehn/discord-bot-backend"
                   :techStack="['nodejs', 'mysql']"/>

      <ProjectCard projectName="DiscordBot Frontend"
                   projectDescription="Das Frontend-System, mit dem sich der Discord-Bot und die Commands verwalten lässt."
                   projectLink="https://github.com/fwehn/discord-bot-frontend"
                   :techStack="['nodejs', 'vue', 'tailwind']"/>
    </div>
  </section>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  name: "Projects",
  components: {ProjectCard}
}
</script>
