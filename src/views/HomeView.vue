<template>
    <StoryGallery/>
  <div class="mainFrame">
    <Opening/>
    <MainGallery/>
    <Calendar/>
    <Location/>
    <Contact/>
    <Closing/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

// Components
// eslint-disable-next-line
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
    // eslint-disable-next-line
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

<style>
body{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.mainFrame{
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 550px;
  /*background: #2e7d32;*/
}
.titleFrame{
  text-align: center;
  margin-top:20px;
  margin-bottom:20px;
}
.contentTitle{
  color: #77a36c;
  margin-top:5px;
  font-size: 1.5rem;
  font-weight: 700;
}
.contentSubTitle{
  color: #a1d58e;
  font-size: 0.7rem;
  font-weight: 300;
}

.content {
  margin-top: 20px;
  text-align: center;
  font-size: 100%;
  margin-bottom: 40px;
}

.content p{
    display: block;
    margin-bottom:10px;
}
</style>
