<template>
    <StoryGallery/>
    <Opening/>
    <MainGallery/>
    <Calendar/>
    <Location/>
    <Contact/>
    <Closing/>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import StoryGallery from '../components/StoryGallery.vue';
import Opening from '../components/Opening.vue';
import MainGallery from '../components/MainGallery.vue';
import Calendar from '../components/Calendar.vue';
import Location from '../components/Location.vue';
import Contact from '../components/Contact.vue';
import Closing from '../components/Closing.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    StoryGallery,
    Opening,
    MainGallery,
    Calendar,
    Location,
    Contact,
    Closing,
  },
});
</script>
