import Vue from 'vue'
import Vuex from 'vuex';
import gql from 'graphql-tag';

import apollo from '../apollo/apolloClient';
import SettingsModule from './settings';

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
        addCard({ commit, dispatch }, data) {
            commit('setCard', data);
        },

        getToken({ commit }) {
            commit('setToken', 123464);
        },

        async getUser({ commit, dispatch }, userId) {
            const params = {
              query: gql`
                query getUser($userId: Int!){
                    user(user_id: $userId) {
                        name,
                        email,
                        lastname
                        }
                }
              `,
              variables: {
                userId
              }
            }

            const result = await dispatch('query', params)

            commit('setUser', result.user);
        },

        async query (_, { query, variables }) {
          try {
            const { data, errors } = await apollo.query({
              query,
              variables
            });

            if (errors) {
              console.error(errors);
              return null;
            }
      
            return data;
          } catch (error) {
            console.error(error);
            return null;
          }
        }
    },
    getters: {
        isVisibleToolbar: s => s.toolbar.visible,
        isToken: s => Boolean(s.token),
    }
})