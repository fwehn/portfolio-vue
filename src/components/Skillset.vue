<template>
  <section id="skillset" class="mainSections">
    <h2 class="text-5xl py-2">Skillset</h2>
    <div class="flex justify-center items-center flex-wrap sm:gap-y-12">
      <SkillsetIcon :icon="'nodejs'" :info="'NodeJS'" :rating="4" :linkTo="'https://nodejs.org/en/'"/>
      <SkillsetIcon :icon="'docker'" :info="'Docker'" :rating="4" :linkTo="'https://www.docker.com/'"/>
      <SkillsetIcon :icon="'mqtt'" :info="'MQTT'" :rating="4" :linkTo="'https://mqtt.org/'"/>
      <SkillsetIcon :icon="'mysql'" :info="'MySQL'" :rating="3" :linkTo="'https://www.mysql.com/de/'"/>
      <SkillsetIcon :icon="'tailwind'" :info="'Tailwind CSS'" :rating="3" :linkTo="'https://tailwindcss.com/'"/>
      <SkillsetIcon :icon="'vue'" :info="'Vue'" :rating="2" :linkTo="'https://vuejs.org/'"/>
      <SkillsetIcon :icon="'python'" :info="'python'" :rating="1" :linkTo="'https://www.python.org/'"/>
    </div>
  </section>
</template>

<script>
import SkillsetIcon from "@/components/SkillsetIcon.vue";

export default {
  name: "Skillset",
  components: {SkillsetIcon}
}
</script>