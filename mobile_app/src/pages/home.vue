<script>
import { mapState, mapActions } from 'vuex';
import CardRecipe from '../components/CardRecipe.vue';

export default {
  data() {
    return {
      text: null
      // card: [],
    }
  },
  components: {
    AppCardRecipe: CardRecipe,
  },
  computed: {
    ...mapState([
      'card'
    ])
  },
  created() {
    // debugger
  },
  mounted() {
    // debugger
  },
  methods: {
    ...mapActions([
      'addCard',
      'getToken',
      'getUser'
    ]),
    reloadRecipe(done) {
      setTimeout(() => {
        done();
      }, 2000)
    },

    newCard() {
      this.addCard(1);
    },

    async get() {
      await this.getUser(2);
    }
  },
}
</script>

<template>
  <f7-page name="home" ptr @ptr:refresh="reloadRecipe">
    <f7-navbar :sliding="false">
      <f7-nav-left>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title sliding>Популярные рецепты</f7-nav-title>
      <f7-nav-right>
      </f7-nav-right>
    </f7-navbar>
    <input v-model="text" type="text">
    <f7-button @click="newCard">Добавить карточку</f7-button>
    <f7-button @click="get">Добавить токен</f7-button>
    <app-card-recipe v-for="(item, index) in card" :key="index"/>

  </f7-page>
</template>
