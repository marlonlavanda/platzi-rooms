<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  created() {
    this.fetchServices();
  },
  methods: {
    ...mapActions({ fetchServices: 'FETCH_SERVICES' }),
  },
};
</script>

<style lang="postcss" src="./assets/tailwind.postcss"></style>
<style lang="css" src="./assets/main.css"></style>
