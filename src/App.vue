/* eslint-disable */
<template>
  <v-app>
    <v-main>
<!--      <FlowerShower v-for="n in 18" :key="`leaf-${n}`"/>-->
      <router-view/>
    </v-main>
  </v-app>

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
</style>
