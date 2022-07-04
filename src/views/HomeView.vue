<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <header></header>
  </div>
</template>

<script>
// @ is an alias to /src
import header from '@/components/Header.vue'

export default {
  name: 'HomeView',
  components: {
    header,
  }
}
</script>
