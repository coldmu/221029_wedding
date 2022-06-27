import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

loadFonts();

// eslint-disable-next-line import/prefer-default-export
export const app = createApp(App);
// eslint-disable-next-line new-cap
// app.AOS = new AOS.init();
app.use(router)
  .use(store)
  .use(vuetify)
  .mount('#app');