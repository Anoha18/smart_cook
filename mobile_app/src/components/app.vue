<template>
  <f7-app :params="f7params" >
    <f7-view main class="safe-areas" url="/">
      <f7-tabs routable>
        <f7-tab id="tab-1"></f7-tab>
        <f7-tab id="tab-2"></f7-tab>
        <f7-tab id="tab-3"></f7-tab>
      </f7-tabs>
      <f7-toolbar tabbar bottom>
        <f7-link
          href="/"
          view=".view-main"
          icon-f7="star_fill"
          tab-link="#tab-1"
          route-tab-id="tab-1"
        />
        <f7-link
          href="/liked-recipes/"
          view=".view-main"
          icon-f7="suit_heart_fill"
          tab-link="#tab-2"
          route-tab-id="tab-2"
        />
        <f7-link
          href="/find-recipe/"
          icon-f7="search"
          tab-link="#tab-3"
          route-tab-id="tab-3"
        />
        <!-- <f7-link 
          icon-f7="tray_full_fill"
        /> -->
      </f7-toolbar>
    </f7-view>
    <left-panel />
  </f7-app>
</template>
<script>
  import cordovaApp from '../js/cordova-app.js';
  import routes from '../js/routes.js';
  import LeftPanel from './LeftPanel.vue';

  export default {
    components: {
      LeftPanel,
    },
    data() {
      return {
        f7params: {
          id: 'io.smart_cook', // App bundle ID
          name: 'Smart cook', // App name
          theme: 'auto', // Automatic theme detection

          routes: routes,

          input: {
            scrollIntoViewOnFocus: this.$device.cordova && !this.$device.electron,
            scrollIntoViewCentered: this.$device.cordova && !this.$device.electron,
          },
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