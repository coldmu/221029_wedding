<template>
  <v-app>
    <v-tabs
      v-model="tab"
      color="deep-purple-accent-4"
      centered
      hide-slider
    >
      <v-tab :value="1">Landscape</v-tab>
      <v-tab :value="2">City</v-tab>
      <v-tab :value="3">Abstract</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item
        v-for="n in 3"
        :key="n"
        :value="n"
      >
        <v-container fluid>
          <v-row>
            <v-col
              v-for="i in 6"
              :key="i"
              cols="12"
              md="4"
            >
              <v-img
                :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                aspect-ratio="1"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>
    <v-main>
      <FlowerShower v-for="n in 18" :key="`leaf-${n}`"/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import FlowerShower from './components/FlowerShower.vue';

export default {
  name: 'App',
  components: {
    FlowerShower,
  },
  data: () => ({
    tab: null,
  }),
};
</script>
