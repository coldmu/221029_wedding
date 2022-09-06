/* eslint-disable */
<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
  <!--      <FlowerShower v-for="n in 18" :key="`leaf-${n}`"/>-->
</template>

<script>
// import FlowerShower from './components/FlowerShower.vue';
// eslint-disable-next-line
import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal';

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line
    VueFinalModal,
    // eslint-disable-next-line
    ModalsContainer,
    // FlowerShower,
  },
  data: () => ({
    tab: null,
  }),
};
</script>

<style>
html {
  -ms-content-zooming: none;
  -ms-touch-action: pan-x pan-y;
  touch-action: pan-y;
}
body {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

img {pointer-events : none;}

@font-face {
  font-family: 'KimNamyun';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/KimNamyun.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Cafe24Oneprettynight';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Oneprettynight.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

#app, .v-application{
  margin: 0;
  width: 100vw;
}

.main_container{
  /*display: grid;*/
  position: relative;
  align-items: center;
  align-self: center;
  align-content: center;
  justify-self: center;
  justify-items: center;
  justify-content: center;
}

a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  font-family: "Cafe24Oneprettynight";
  color: #202121;
  vertical-align: baseline;
}

div{
  /*width: 85vw;*/
  /*max-width: 550px;*/
  /*margin: 0 auto;*/
}

</style>
