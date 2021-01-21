<template>
  <div>
    <section :class="{ active: isActive }">
      <comp-header />
      <!-- <comp-list /> -->
      <router-view/>
    </section>
    <comp-add-data v-if="statusAddData == true" />
    <comp-edit-data v-if="statusEditData == true" />
  </div>
</template>

<script>
import CompAddData from "./CompAddData.vue";
import CompEditData from "./CompEditData.vue";
import CompHeader from "./CompHeader.vue";
import CompList from "./CompList.vue";

export default {
  components: { CompHeader, CompList, CompAddData, CompEditData },
  name: "list-employ",
  computed: {
    statusAddData() {
      return this.$store.state.statusAddData;
    },
    statusEditData() {
      return this.$store.state.statusEditData;
    },
    isActive() {
      return this.$store.state.activeClass;
    },
  },
};
</script>

<style>
.active {
  transform: translateX(200px);
  width: 85%;
}
</style>