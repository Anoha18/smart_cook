import HomePage from '../pages/home.vue';
import LikedRecipes from '../pages/liked-recipes.vue';
import NotFoundPage from '../pages/404.vue';
import ThemePage from '../pages/settings/theme.vue';
import FindRecipe from '../pages/find-recipe.vue';
import ArchivePage from '../pages/archive.vue';

var routes = [
    { path: '/', name: 'home', component: HomePage },

    { path: '/liked-recipes/', name: 'liked-recipe', component: LikedRecipes },

    { path: '/settings/theme/', name: 'settings.theme', component: ThemePage },

    { path: '/find-recipe/', name: 'find-recipe', component: FindRecipe },

    { path: '/archive/', name: 'archive', asyncComponent: ArchivePage },
    // Новые роуты добавялять до роута error!
    { path: '(.*)', name: 'error', component: NotFoundPage },
];

export default routes;