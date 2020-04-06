<template>
    <f7-page no-toolbar  no-swipeback login-screen>
        <f7-navbar title="Регистрация" back-link="Назад"></f7-navbar>
        <f7-login-screen-title>Регистрация нового пользователя</f7-login-screen-title>
        <f7-list form inset>
            <f7-list-input
                    label="Имя пользователя"
                    type="text"
                    placeholder="Введите имя пользователя"
                    :value="username"
                    @input="username = $event.target.value"
            ></f7-list-input>
            <f7-list-input
                    label="Пароль"
                    type="password"
                    placeholder="Ваш пароль"
                    :value="password"
                    @input="password = $event.target.value"
            ></f7-list-input>
            <f7-list-input
                    label="Повтор пароля"
                    type="password"
                    placeholder="********"
                    @input="password1 = $event.target.value"
            ></f7-list-input>
        </f7-list>
        <f7-list>
            <f7-list-button @click="signIn">Зарегистрироваться</f7-list-button>
        </f7-list>
    </f7-page>
</template>

<script>
    export default {
        data() {
            return {
                username: '',
                password: '',
                password1:''
            };
        },
        methods: {
            signIn() {
                const self = this;
                const app = self.$f7;
                const router = self.$f7router;
                if (self.password == self.password1){
                    app.dialog.alert(`Имя пользователя: ${self.username}<br>Пароль: ${self.password}`, () => {
                        router.back();
                    });
                }else {
                    app.dialog.alert(`Пароли не совпадают`, () => {
                    });
                }

            },
        },
    };
</script>