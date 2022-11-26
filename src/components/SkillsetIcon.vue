<template>
  <a :href="linkTo" target="_blank" class="group
              relative flex items-center justify-center
              h-32 w-32
              transition-all duration-300 ease-linear
              cursor-pointer">

    <div class="w-24 h-24 flex items-center justify-center p-2 group-hover:-translate-y-3 transition-all border-2 border-dark-700 rounded-xl bg-dark-700">
      <IconMySQL v-if="icon === 'mysql'" class="group-hover:animate-pulse"/>
      <IconNode v-if="icon === 'nodejs'"  class="group-hover:animate-pulse"/>
      <IconVue v-if="icon === 'vue'"  class="group-hover:animate-pulse"/>
      <IconDocker v-if="icon === 'docker'"  class="group-hover:animate-pulse"/>
    </div>

    <span class="group-hover:scale-100
                 absolute w-auto p-1.5 min-w-max bottom-0
                 text-dark-300
                 text-s font-bold
                 transition-all duration-100 scale-0 origin-top">
      {{info}}
    </span>
  </a>
</template>

<script>
import IconMySQL from "@/components/icons/IconMySQL.vue";
import IconNode from "@/components/icons/IconNode.vue";
import IconVue from "@/components/icons/IconVue.vue";
import IconDocker from "@/components/icons/IconDocker.vue";

export default {
  name: "SkillsetIcon",
  props: {
    icon: "",
    info: "",
    linkTo: ""
  },
  components: {IconDocker, IconVue, IconNode, IconMySQL}
}
</script>

<style scoped>

</style>