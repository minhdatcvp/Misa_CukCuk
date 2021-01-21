import Vue from 'vue'
import Vuex from 'vuex'
import { Employee } from '../Data/DataEm'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        statusAddData: false, // trạng thái hiển thị form add
        mnvNew: 0, // mã nhân viên thêm mới
        userNew: {}, // info nhân viên thêm mới
        Employee: Employee, // data nhân viên all
        statusEditData: false, // trang thai hien thi form edit
        userTemp: {},
        activeClass : false
    },

    mutations: {
        //hien thi ra menu
        getMenu(state){
            state.activeClass = !this.state.activeClass;
        },
        // ẩn hiện form add
        changeStatusAdd(state) {
            state.statusAddData = !this.state.statusAddData
        },
        // an hien form edit
        changeStatusEdit(state) {
            state.statusEditData = !this.state.statusEditData
        },
        // auto thêm mã nhân viên vào form
        updateMNV: (state, payload) => {
            state.mnvNew = payload;
        },
        // thêm nv mới
        addUser: (state, payload) => {
            state.Employee.push(payload)
        },
        // filter data
        filterEmployee: (state, payload) => {
            // state.a = payload
            var arrSearch = [];
            Employee.forEach(element => {
                if (element.name.toLowerCase().indexOf(payload.toLowerCase()) !== -1) {
                    arrSearch.push(element)
                }
            });
            state.Employee = arrSearch;
        },
        //  lay data user de hien thi len form edit
        getDataFromChild: (state, payload) => {
            state.userTemp = payload;
        },
        //Xoa user
        deleteUser: (state, payload) => {
            Employee.splice(Employee.indexOf(payload), 1);
            state.Employee = Employee;
        },
        // sua user
        updateUser: (state, payload) => {
            Employee.splice(Employee.indexOf(state.userTemp), 1 , payload);
            state.Employee = Employee
        },
    },
    actions: {
        getMenu : ({commit}) => {
            commit('getMenu');
        },
        changeStatusAdd: ({ commit }) => {
            commit('changeStatusAdd');
        },
        changeStatusEdit: ({ commit }) => {
            commit('changeStatusEdit');
        },
        updateMNV: ({ commit }, payload) => {
            commit('updateMNV', payload);
        },
        addUser: ({ commit }, payload) => {
            commit('addUser', payload);
        },
        filterEmployee: ({ commit }, payload) => {
            commit('filterEmployee', payload);
        },
        getDataFromChild: ({ commit }, payload) => {
            commit('getDataFromChild', payload);
        },
        deleteUser: ({ commit }, payload) => {
            commit("deleteUser", payload);
        },
        updateUser: ({ commit }, payload) => {
            commit("updateUser", payload);
        }
    }
})