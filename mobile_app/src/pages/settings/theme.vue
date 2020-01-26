<script>
export default {
  computed: {
    theme() {
      // debugger
      return this.$store.getters.theme;
    }
  },
  methods: {
    changeTheme(theme) {
      var $html = this.$$('html');
      $html.removeClass('theme-dark theme-light').addClass('theme-' + theme);
      this.$store.commit('setTheme', theme);
    }
  },
}
</script>

<template>
  <f7-page>
    <f7-navbar title="Внешние настройки" back-link="Назад"></f7-navbar>
    <f7-block-title>Темы</f7-block-title>
    <f7-list inset>
      <f7-list-item
        radio
        title="Светлая"
        name="theme-radio"
        :checked="theme == 'light'"
        @click="changeTheme('light')"
      />
      <f7-list-item
        radio
        title="Темная"
        name="theme-radio"
        :checked="theme == 'dark'"
        @click="changeTheme('dark')"
      />
    </f7-list>
  </f7-page>
</template>