import { createApp } from 'vue';
import { vfmPlugin } from 'vue-final-modal';
// import 'viewerjs/dist/viewer.css';
// import VueViewer from 'v-viewer';
import Vue3Lottie from 'vue3-lottie';
import 'vue3-lottie/dist/style.css';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

loadFonts();

// eslint-disable-next-line import/prefer-default-export
export const app = createApp(App);
// eslint-disable-next-line new-cap
app.use(router)
  .use(store)
  .use(vuetify)
  // .use(VueViewer)
  .use(vfmPlugin({
    key: '$vfm',
    componentName: 'VueFinalModal',
    dynamicContainerName: 'ModalsContainer',
  }))
  .use(Vue3Lottie)
  .mount('#app');
