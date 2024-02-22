import Vue from 'vue'
import Vuex from 'vuex'

const axios = require('axios');

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        productos: [],
        user: null,

    },
    mutations: {
        setProducts(state, payload) {
            state.productos = payload
            console.log('setProducts' + JSON.stringify(this.productos))
        },
        setUser(state, payload) {
            state.user = payload
            console.log('setUser' + JSON.stringify(this.user))
        },
    },
    actions: {
        async getProducts({commit}) {
            try {
                await axios.get("https://6238c7400a54d2ceab7a0c3e.mockapi.io/productos").then((result) => {
                    this.productos = (result.data)
                    console.log("productos array " + JSON.stringify(this.productos))
                    commit('setProducts', result.data)
                })
            } catch (error) {
                console.error(error)
            }
        },

        // async postRegister({commit}, user) {
        //     try {
        //         await axios.post('https://6238c7400a54d2ceab7a0c3e.mockapi.io/usuarios', {
        //             user
        //         }).then((result) => {
        //             // this.user = (result.data)
        //             console.log("postRegister " + JSON.stringify(this.user))
        //             commit('setUser', result.data)
        //         })
        //     } catch (error) {
        //         console.error(error)
        //     }
        // },

        async login({commit}, params) {
            try {
                const queryParams = `?email=${params.email}&password=${params.password}`
                await axios.get("https://6238c7400a54d2ceab7a0c3e.mockapi.io/usuarios" + queryParams).then((result) => {
                  const u = result.data[0]
                    if (u) {
                        this.user = u
                        console.log("user data " + JSON.stringify(this.user))
                        commit('setUser', u)
                        // alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user));
                    } else {
                        commit('setUser', null)
                        alert("Failure :(")
                    }
                })
            } catch (error) {
                console.error(error)
            }
        },
        async logout({commit}) {
            try {
                commit('setUser', null)
            } catch (error) {
                console.error(error)
            }
        },
    },
    getters: {
        getUser(state){
            return state.user
        }
    },
    modules: {},
})
