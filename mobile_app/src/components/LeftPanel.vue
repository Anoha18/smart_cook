<script>
export default {
  
}
</script>

<template>
  <f7-panel left reveal :visible-breakpoint="960">
    <f7-view>
      <f7-page>
        <f7-navbar>
          <f7-nav-left>
            <f7-link color="red" icon-f7="square_arrow_left" />
          </f7-nav-left>
          <f7-nav-title>
            Меню
          </f7-nav-title>
          <f7-nav-right />
        </f7-navbar>
        <!-- <f7-block-title>Left View Navigation</f7-block-title> -->
        <f7-list>
          <f7-list-item link="#" title="Профиль"></f7-list-item>
          <!-- <f7-list-item link="/left-page-2/" title="Left Page 2"></f7-list-item> -->
        </f7-list>
        <f7-block-title>Настройки</f7-block-title>
        <f7-list>
          <!-- <f7-list-item link="/about/" view=".view-main" panel-close title="About"></f7-list-item> -->
          <!-- <f7-list-item link="/form/" view=".view-main" panel-close title="Form"></f7-list-item> -->
          <!-- <f7-list-item link="#" view=".view-main" back panel-close title="Back in history"></f7-list-item> -->
          <f7-list-item link="/settings/theme/" view=".view-main" panel-close title="Внешний вид"></f7-list-item>
        </f7-list>
      </f7-page>
    </f7-view>
  </f7-panel>
</template>