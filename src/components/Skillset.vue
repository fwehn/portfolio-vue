<template>
  <section id="skillset" class="mainSections">
    <h2 class="text-5xl py-2">Skillset</h2>
    <div class="flex justify-center items-center">
      <SkillsetIcon :icon="'nodejs'" :info="'NodeJS'" :linkTo="'https://nodejs.org/en/'"/>
      <SkillsetIcon :icon="'vue'" :info="'Vue'" :linkTo="'https://vuejs.org/'"/>
      <SkillsetIcon :icon="'mysql'" :info="'MySQL'" :linkTo="'https://www.mysql.com/de/'"/>
      <SkillsetIcon :icon="'docker'" :info="'Docker'" :linkTo="'https://www.docker.com/'"/>
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