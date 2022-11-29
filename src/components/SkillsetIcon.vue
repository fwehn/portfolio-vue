<template>
  <a :href="linkTo" target="_blank" class="group
              relative flex items-center justify-center
              h-32 w-32
              transition-all duration-300 ease-linear
              cursor-pointer">

    <div class="w-24 h-24 flex items-center justify-center p-2 group-hover:-translate-y-3 transition-all border-2 border-dark-700 rounded-xl bg-dark-700">
      <span v-if="icon === 'nodejs'"  class="skillsetIcon bg-nodejs"></span>
      <span v-if="icon === 'vue'"  class="skillsetIcon bg-vue"></span>
      <span v-if="icon === 'mysql'"  class="skillsetIcon bg-mysql"></span>
      <span v-if="icon === 'docker'"  class="skillsetIcon bg-docker"></span>
      <span v-if="icon === 'mqtt'"  class="skillsetIcon bg-mqtt"></span>
      <span v-if="icon === 'tailwind'"  class="skillsetIcon bg-tailwind"></span>
      <span v-if="icon === 'python'"  class="skillsetIcon bg-python"></span>
    </div>

    <span class="group-hover:scale-100
                 absolute w-auto p-1.5 min-w-max -bottom-1
                 text-dark-300
                 text-s font-bold
                 transition-all duration-100 scale-0 origin-top">
      {{info}}
    </span>

    <div class="flex group-hover:scale-100
                absolute w-auto p-1.5 min-w-max -bottom-6
                text-dark-300
                text-s font-bold
                transition-all duration-100 scale-0 origin-top">
      <svg aria-hidden="true" class="w-5 h-5 text-dark-300" :class="rating >= 1 ? 'fill-dark-50' : 'fill-dark-700'" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>{{ratingTexts[rating]}}</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" :class="rating >= 2 ? 'fill-dark-50' : 'fill-dark-700'"  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>{{ratingTexts[rating]}}</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" :class="rating >= 3 ? 'fill-dark-50' : 'fill-dark-700'"  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>{{ratingTexts[rating]}}</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" :class="rating >= 4 ? 'fill-dark-50' : 'fill-dark-700'"  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>{{ratingTexts[rating]}}</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" :class="rating >= 5 ? 'fill-dark-50' : 'fill-dark-700'"  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>{{ratingTexts[rating]}}</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    </div>

  </a>
</template>

<script>
export default {
  name: "SkillsetIcon",
  props: {
    icon: "",
    info: "",
    linkTo: "",
    rating: 1
  },
  data(){
    return {
      ratingTexts: ["test", "some other test", "test", "sdfg", "awe", "asdfg"]
    }
  }
}
</script>

<style scoped>

</style>