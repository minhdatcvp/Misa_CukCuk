<template>
  <section class="form-info">
    <div class="bg-gray" @click="outFormEdit()"></div>
    <div class="input-info">
      <div class="title">
        <i class="fas fa-times" @click="outFormEdit()"></i>
        <h2>Thông tin nhân viên</h2>
      </div>
      <hr>
      <div class="row">
        <div class="col-3">
          <img src="../assets/img/default-avatar.jpg" alt="" />
        </div>
        <div class="col-9">
          <h3>A.Thông tin chung</h3>
          <div class="row">
            <div class="col-6">
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Mã nhân viên</label>
                  <input
                    type="text"
                    v-model="mnvNew"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Mã Nhân Viên"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Họ và tên</label>
                  <input
                    v-model="nameNew"
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Họ và tên"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Giới tính</label>
                  <input
                    v-model="genderNew"
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Giới tính"
                  />
                </div>
              </form>
            </div>
            <div class="col-6">
              <div class="form-group">
                <label for="exampleInputEmail1">Ngày sinh</label>
                <input
                  v-model="bdNew"
                  type="date"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder=""
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Điện thoại</label>
                <input
                  v-model="phoneNew"
                  type="phone"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Điện thoại"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  v-model="emailNew"
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="button-add-data">
        <button type="button" class="btn btn-success" @click="getUserEdit()">
          Lưu
        </button>
        <button
          type="button"
          class="btn btn-danger"
          @click="changeStatusDelete()"
        >
          Xóa
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "comp-edit",
  mounted() {
    (this.mnvNew = this.dataUser.mnv),
      (this.nameNew = this.dataUser.name),
      (this.genderNew = this.dataUser.gender),
      (this.bdNew = this.dataUser.bd),
      (this.phoneNew = this.dataUser.phone),
      (this.emailNew = this.dataUser.email);
  },
  data() {
    return {
      mnvNew: "",
      nameNew: "",
      genderNew: "",
      bdNew: "",
      phoneNew: "",
      emailNew: "",
    };
  },
  computed: {
    dataUser() {
      return this.$store.state.userTemp;
    },
  },
  methods: {
    outFormEdit() {
      // this.$emit("changeStatusAdd", !this.trangthaiAdd);
      this.$store.dispatch("changeStatusEdit");
    },
    changeStatusDelete() {
      this.$store.dispatch("deleteUser", this.dataUser);
      this.outFormEdit();
    },
    getUserEdit() {
      var userNew = {
        mnv: this.mnvNew,
        name: this.nameNew,
        gender: this.genderNew,
        bd: this.bdNew,
        phone: this.phoneNew,
        email: this.emailNew,
      };
      this.$store.dispatch("updateUser", userNew);
      this.outFormEdit();
    },
  },
};
</script>

<style>
</style>