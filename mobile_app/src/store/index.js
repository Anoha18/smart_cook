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
        url: '', //url где запущен сервак
    },
    mutations: {
        setToolbarVisible(state, param) {
            state.toolbar.visible = param;
        }
    },
    actions: {
        fetch({}, data) {
            let data = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                        // TODO Здесь потом добавить 'authorization' с jwt
                },
                body: JSON.stringify({ data }),
            }

            return fetch(this.state.url, data)
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
        isVisibleToolbar: s => s.toolbar.visible
    }
})