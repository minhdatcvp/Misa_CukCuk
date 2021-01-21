<template>
  <div class="content">
    <div class="header-content">
      <h3>Danh sách nhân viên</h3>
      <div class="input-group">
        <input
          @input="getTextSearch"
          type="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <button type="button" class="btn btn-outline-primary">search</button>
      </div>
      <button
        type="button"
        class="btn btn-success button-add"
        @click="changeStatusAdd()"
      >
        <img src="../assets/icon/add.png" alt="" />
        <p>Thêm nhân viên</p>
      </button>
    </div>
    <div class="manager-content">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Mã nhân viên</th>
            <th scope="col">Họ và tên</th>
            <th scope="col">Giới tính</th>
            <th scope="col">Ngày sinh</th>
            <th scope="col">Điện thoại</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <comp-table-child
            v-for="(item, index) in getDataEmployee"
            :key="index"
            :dulieu="item"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import CompTableChild from "./CompTableChild.vue";
export default {
  components: { CompTableChild },
  name: "comp-list",
  props: ["trangthaiEdit"],
  data() {
    return {

    };
  },
  methods: {
    changeStatusAdd() {
      //hàm thay đổi trạng thái hiển thị form add
      this.$store.dispatch('changeStatusAdd');
      this.$store.dispatch("updateMNV", this.getDataEmployee.length + 1);
    },
    getTextSearch(event) {
      // hàm tìm kiếm
      this.$store.dispatch("filterEmployee" , event.target.value);
    },
  },
  computed : {
    getDataEmployee(){
      return this.$store.state.Employee
    }
  }
};
</script>

<style>
.notFound {
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
}
</style>