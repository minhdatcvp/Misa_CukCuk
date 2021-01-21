<template>
  <tr>
    <th scope="row">NV{{dulieu.mnv}}</th>
    <td>{{dulieu.name}}</td>
    <td>{{dulieu.gender}}</td>
    <td>{{dulieu.bd}}</td>
    <td>{{dulieu.phone}}</td>
    <td>{{dulieu.email}}</td>
    <td>
        <div class="btn btn-info" @click="getdataUser">Xem</div>
    </td>
  </tr>
</template>

<script>
export default {
  name: "comp-table-child",
  props : ['dulieu'],
  methods : {
      getdataUser(){
          // this.$emit('statusEdit' , !this.trangthaiEdit2);
          // this.$emit('dataUser', this.user);
          this.$store.dispatch("changeStatusEdit");
          // console.log(this.dulieu)
          this.$store.dispatch("getDataFromChild", this.dulieu)

      }
  }
};
</script>

<style>
.btn{
  cursor: pointer;
}
</style>