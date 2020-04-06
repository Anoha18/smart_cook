<script>
   import {mapActions} from 'vuex'
    export default {
        data() {
            return {
                username: '',
                password: ''
            };
        },
        methods: {
            ...mapActions([
                'getToken'
            ]),
        async   auth_not_null() {
                const self = this;
                const app = self.$f7;
                const router = self.$f7router;
                if (self.password != '' && self.username != ''){
                    router.back();
                  await  this.getToken();
                }else {
                    app.dialog.alert(`Пустая строка`, () => {
                    });
                }

            },
        },
    }
</script>

<template>

    <f7-page >
        <f7-navbar title="Авторизация" back-link="Назад"></f7-navbar>
        <f7-list form inset>
            <f7-list-input
                    outline
                    label="Имя пользователя"
                    floating-label
                    type="text"
                    placeholder="User"
                    clear-button
                    @input="username = $event.target.value"
            >
            </f7-list-input>
            <f7-list-input
                    outline
                    label="Пароль"
                    floating-label
                    type="password"
                    placeholder="*********"
                    clear-button
                    @input="password = $event.target.value"
            >
            </f7-list-input>
            <f7-block>
            <f7-col>
                <f7-button large fill round @click="auth_not_null" link="/profile/">Авторизоваться</f7-button>
            </f7-col>
            </f7-block>
        </f7-list>
        <f7-list>
            <f7-list-item link="/registr/" title="Регистрация"></f7-list-item>
        </f7-list>
    </f7-page>
</template>
<!--<template>-->
<!--    <f7-page name="find-recipe">-->
<!--        <f7-navbar :sliding="false">-->
<!--            <f7-nav-left>-->
<!--                <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>-->
<!--            </f7-nav-left>-->
<!--            <f7-nav-title sliding>Архив рецептов</f7-nav-title>-->
<!--            <f7-nav-right>-->
<!--            </f7-nav-right>-->
<!--        </f7-navbar>-->
<!--        11111-->
<!--    </f7-page>-->
<!--</template>-->