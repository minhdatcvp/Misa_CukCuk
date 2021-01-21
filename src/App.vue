<template>
  <div id="app">
    <comp-menu />
    <list-employ/>
  </div>
</template>

<script>
import CompMenu from "./Components/CompMenu.vue";
import ListEmploy from './Components/ListEmploy.vue';

export default {
  components: { CompMenu, ListEmploy },
  name: "app",
  data() {
    return {
      
    };
  },
  computed: {
    statusAddData() {
      return this.$store.state.statusAddData;
    },
    statusEditData() {
      return this.$store.state.statusEditData;
    },
  },
  methods: {
    
  },
};
</script>

<style>
</style>
