<template>
  <div class="bottom-0 left-0 w-full overflow-hidden rotate-180 leading-none" :class="bg">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="w-screen h-36">
      <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" :class="fill"></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: "DividerTilt",
  props: {
    bg: 'bg-blue-400',
    fill: 'fill-gray-400'
  }
}
</script>

<style scoped>
.tilt {
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}


</style>