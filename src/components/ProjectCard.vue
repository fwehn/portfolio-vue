<template>
  <a :href="projectLink" target="_blank" class="w-72 h-56 bg-dark-700 border-2 border-dark-700 rounded-2xl flex flex-col items-center p-3 gap-3 hover:border-dark-50 transition-all">
    <h2 class="text-dark-50 text-2xl">{{projectName}}</h2>
    <p class="text-dark-300 flex-grow w-full">{{projectDescription}}</p>
    <div class="w-full h-7 flex self-end justify-evenly">
      <span v-if="techStack.includes('nodejs')"  class="projectCardIcon bg-nodejs"></span>
      <span v-if="techStack.includes('vue')"  class="projectCardIcon bg-vue"></span>
      <span v-if="techStack.includes('mysql')"  class="projectCardIcon bg-mysql"></span>
      <span v-if="techStack.includes('docker')"  class="projectCardIcon bg-docker"></span>
      <span v-if="techStack.includes('mqtt')"  class="projectCardIcon bg-mqtt"></span>
      <span v-if="techStack.includes('tailwind')"  class="projectCardIcon bg-tailwind"></span>
      <span v-if="techStack.includes('python')"  class="projectCardIcon bg-python"></span>
    </div>
  </a>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    projectName: "",
    projectDescription: "",
    projectLink: "https://www.google.com",
    techStack: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>

</style>