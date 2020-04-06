import Vue from 'vue'
import Vuex from 'vuex';

import SettingsModule from './settings'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        SettingsModule
    },
    state: {
        toolbar: {
            visible: true
        },
        url: 'http://192.168.0.106:3000/api', //url где запущен сервак
        card: [],
        token: null,
        user: null,
    },
    mutations: {
        setToolbarVisible(state, param) {
            state.toolbar.visible = param;
        },
        setCard(state, card) {
            state.card.push(card);
        },
        setToken(state, token) {
            state.token = token;
        },
        setUser(state, user) {
            state.user = user;
        }
    },
    actions: {
        authorization_check({commit}){

        },

        addCard({ commit, dispatch }, data) {
            commit('setCard', data);
        },

       async getToken({ commit,dispatch }) {
            commit('setToken', 123464);
            const query = `
                {
                    Login(login: ${'vlad'},password:${'111111'}) {
                        name,
                        email,
                        lastname
                        }
                }
            `;
            const res = await dispatch('fetch', query)
        },

        async getUser({ commit, dispatch }, userId) {
            const query = `
                {
                    User(user_id: ${userId}) {
                        name,
                        email,
                        lastname
                        }
                }
            `;
            console.log(query);
            const res = await dispatch('fetch', query)

            commit('setUser', res.data.User);
        },

        fetch({}, query) {
            let data1 = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                        // TODO Здесь потом добавить 'authorization' с jwt
                },
                body: JSON.stringify({ query }),
            }

            return fetch(this.state.url, data1)
                .then((response) => {
                    if (!response.ok) {
                        console.error(response);

                        throw new Error('Fetch wrapper error');
                    }

                    const contentType = response.headers.get('content-type');

                    if (contentType && contentType.includes('application/json')) {
                        return response.json();
                    }

                    return response.text();
                })
                .catch((error) => error);
        }
    },
    getters: {
        isVisibleToolbar: s => s.toolbar.visible,
        isToken: s => Boolean(s.token),
    }
})