<template>
  <section class="form-info">
    <div class="bg-gray" @click="outFormAdd()"></div>
    <div class="input-info">
      <div class="title">
        <i class="fas fa-times" @click="outFormAdd()"></i>
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
                    :value="msnvNew"
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
      <button
        type="button"
        class="btn btn-success button-add-data"
        @click="changeStatusAdd()"
      >
        Thêm
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "comp-add",
  data() {
    return {
      nameNew: "",
      genderNew: "",
      bdNew: "",
      phoneNew: "",
      emailNew: "",
    };
  },
  methods: {
    changeStatusAdd() {
      this.outFormAdd();
      // this.getdataAdd();
      var userNew = {
        mnv : this.msnvNew,
        name: this.nameNew,
        gender: this.genderNew,
        bd: this.bdNew,
        phone: this.phoneNew,
        email : this.emailNew
      };
      this.$store.dispatch("addUser" , userNew);
    },
    outFormAdd(){
        // this.$emit("changeStatusAdd", !this.trangthaiAdd);
        this.$store.dispatch('changeStatusAdd');
    },
  },
  computed : {
    msnvNew(){
      return this.$store.state.mnvNew;
    }
  }
};
</script>

<style>
</style>