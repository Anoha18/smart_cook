<template>
  <f7-app :params="f7params" >

    <!-- Left panel with cover effect when hidden -->
    

    <!-- Right panel with reveal effect-->
    <!-- <f7-panel right reveal theme-dark>
      <f7-view>
        <f7-page>
          <f7-navbar title="Right Panel"></f7-navbar>
          <f7-block>Right panel content goes here</f7-block>
        </f7-page>
      </f7-view>
    </f7-panel> -->


    <!-- Your main view, should have "view-main" class -->
    <f7-view main class="safe-areas" url="/">
      <f7-toolbar tabbar bottom>
        <f7-link
          href="/"
          view=".view-main"
          icon-f7="star_fill"
          tab-link
          route-tab-id="home"
        />
        <f7-link
          href="/liked-recipes/"
          view=".view-main"
          icon-f7="suit_heart_fill"
          tab-link
          route-tab-id="liked-recipes"
        />
        <f7-link
          href="/find-recipe/"
          icon-f7="search"
          tab-link
          route-tab-id="find-recipe"
        />
        <f7-link 
          icon-f7="tray_full_fill"
        />
      </f7-toolbar>
      <f7-tabs routable>
        <f7-tab id="home"></f7-tab>
        <f7-tab id="liked-recipes"></f7-tab>
        <f7-tab id="find-recipe"></f7-tab>
      </f7-tabs>
      <!-- <app-footer /> -->
    </f7-view>


    <!-- Popup -->
    <f7-popup id="my-popup">
      <f7-view>
        <f7-page>
          <f7-navbar title="Popup">
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>
            <p>Popup content goes here.</p>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>

    <left-panel />
  </f7-app>
</template>
<script>
  import cordovaApp from '../js/cordova-app.js';
  import routes from '../js/routes.js';
  import LeftPanel from './LeftPanel.vue';
  import AppFooter from './AppFooter.vue'

  export default {
    components: {
      LeftPanel,
      AppFooter
    },
    data() {
      return {
        // Framework7 Parameters
        f7params: {
          id: 'io.smart_cook', // App bundle ID
          name: 'Smart cook', // App name
          theme: 'auto', // Automatic theme detection


          // App routes
          routes: routes,


          // Input settings
          input: {
            scrollIntoViewOnFocus: this.$device.cordova && !this.$device.electron,
            scrollIntoViewCentered: this.$device.cordova && !this.$device.electron,
          },
          // Cordova Statusbar settings
          statusbar: {
            iosOverlaysWebView: true,
            androidOverlaysWebView: false,
          },
        },
      }
    },
    mounted() {
      this.$f7ready((f7) => {
        // Init cordova APIs (see cordova-app.js)
        if (f7.device.cordova) {
          cordovaApp.init(f7);
        }
        // Call F7 APIs here
      });
    }
  }
</script>