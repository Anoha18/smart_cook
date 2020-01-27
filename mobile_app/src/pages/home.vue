<script>
import CardRecipe from '../components/CardRecipe.vue';

export default {
  components: {
    CardRecipe
  },
  methods: {
    reloadRecipe(done) {
      setTimeout(() => {
        done();
      }, 2000)
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
   
    <card-recipe v-for="(item, index) in 5" :key="index"/>

  </f7-page>
</template>