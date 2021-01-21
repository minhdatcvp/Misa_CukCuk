<template>
  <div class="menu-bar" :class="{ activeMenu: isActive }">
    <div class="goright" @click="getMenu">
      <i
        class="fas fa-chevron-right button-open-menu"
        v-if="isActive == false"
      ></i>
      <i
        class="fas fa-chevron-left button-open-menu"
        v-if="isActive == true"
      ></i>
    </div>
    <ul>
      <li class="nonActive">
        <div class="toggle-menu nut">
          <img src="../assets/img/toggle.png" alt="" />

          <img
            src="../assets/img/cukcuk-logo.png"
            alt=""
            class="name_company"
          />
        </div>
      </li>
      <!-- <li>
        <div class="toggle-menu">
          <img src="../assets/icon/dashboard.png" alt="" />
          <p>Tổng quan</p>
        </div>
      </li> -->
      <router-link tag="li" to="/">
        <div class="toggle-menu">
          <img src="../assets/icon/dashboard.png" alt="" />
          <p>Tổng quan</p>
        </div>
      </router-link>
      <!-- <li>
        <div class="toggle-menu">
          <img src="../assets/icon/report.png" alt="" />
          <p>Báo cáo</p>
        </div>
      </li> -->
      <router-link tag="li" to="/report">
        <div class="toggle-menu">
          <img src="../assets/icon/report.png" alt="" />
          <p>Báo cáo</p>
        </div>
      </router-link>
      <!-- <li>
        <div class="toggle-menu">
          <img src="../assets/icon/dashboard.png" alt="" />
          <p>Mua hàng</p>
        </div>
      </li> -->
      <router-link tag="li" to="/muahang">
        <div class="toggle-menu">
          <img src="../assets/icon/dashboard.png" alt="" />
          <p>Mua hàng</p>
        </div>
      </router-link>
      <!-- <li class="active-menu">
        <div class="toggle-menu">
          <img src="../assets/icon/dic-employee.png" alt="" />
          <p>Danh Mục Nhân Viên</p>
        </div>
      </li> -->
       <router-link tag="li" to="/complist">
        <div class="toggle-menu">
          <img src="../assets/icon/dic-employee.png" alt="" />
          <p>Danh Mục Nhân Viên</p>
        </div>
      </router-link>
      <!-- <li>
        <div class="toggle-menu">
          <img src="../assets/icon/setting.png" alt="" />
          <p>Thiết lập hệ thống</p>
        </div>
      </li> -->
      <router-link tag="li" to="/options">
        <div class="toggle-menu">
          <img src="../assets/icon/setting.png" alt="" />
          <p>Thiết lập hệ thống</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "comp-menu",
  data() {
    return {
      open: true,
    };
  },
  methods: {
    getMenu() {
      this.$store.dispatch("getMenu");
    },
  },
  computed: {
    isActive() {
      return this.$store.state.activeClass;
    },
  },
};
</script>

<style>
.activeMenu {
  transform: translateX(0px);
}
</style>