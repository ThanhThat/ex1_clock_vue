<template>
  <div class="main">
    <the-clock></the-clock>
  </div>
</template>

<script>
import TheClock from './components/TheClock.vue'
export default {
  components: { TheClock }
}
</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
  background-image: url('./assets/images/photo-1499002238440-d264edd596ec.avif');
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
