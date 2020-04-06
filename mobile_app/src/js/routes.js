import HomePage from '../pages/home.vue';
import LikedRecipes from '../pages/liked-recipes.vue';
import NotFoundPage from '../pages/404.vue';
import ThemePage from '../pages/settings/theme.vue';
import FindRecipe from '../pages/find-recipe.vue';
import ArchivePage from '../pages/archive.vue';
import ProfilePage from '../pages/profile.vue';
import LoginPage from '../pages/login.vue';
import RegistrPage from '../pages/registr.vue';

import store from '../store/index';
import {LoginScreen} from "framework7/components/login-screen/login-screen";

var routes = [
    { path: '/', name: 'home', component: HomePage },

    { path: '/liked-recipes/', name: 'liked-recipe', component: LikedRecipes },

    { path: '/settings/theme/', name: 'settings.theme', component: ThemePage },

    { path: '/find-recipe/', name: 'find-recipe', component: FindRecipe },

    { path: '/archive/', name: 'archive', asyncComponent: () => ArchivePage },
    {path:'/registr/', name: 'registr', component: RegistrPage},
    {
        path: '/profile/',
        name: 'profile',
        async: authMiddleware,
    },
   // { path: '/login/', name: 'login', asyncComponent: authMiddleware },
    // Новые роуты добавялять до роута error!
    { path: '(.*)', name: 'error', component: NotFoundPage },
];

function authMiddleware(routeTo, routeFrom, resolve, reject) {
    // Добавить редирект на логин по этому примеру
     if (store.getters.isToken) {
         return resolve({ component: ProfilePage })
     }

     return resolve({ component: LoginPage })
    console.log(routeTo)
    console.log(store.getters)
    console.log(store.state)
}

export default routes;