<template>

  <div class="menuDiv">
    <Menu/>
  </div>

  <StoryGallery/>
  <div class="mainFrame">
    <Opening/>
    <MainGallery/>
    <Calendar/>
    <Location/>
    <Contact/>
    <Closing/>
  </div>
  <div class="footerDiv">
    <Footer/>
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
import Menu from '../components/Menu.vue';
import Footer from '../components/Footer.vue';

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
    Menu,
    Footer,
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
  margin-top: 15px;
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
.menuDiv{
  font-family: 'KimNamyun';
  display: flex;
  width:100%;
  /*justify-content: space-around;*/
  align-items: center;
  /*color:#888;*/
  text-align: center;
  position:sticky;
  top:0px;
  margin: 0 auto;
  background: #FFF;
  z-index:9999;
}

.footerDiv{
  font-family: 'KimNamyun';
  display: flex;
  width:100%;
  justify-content: center;
  align-items: center;
  color:#888;
  text-align: center;
  position:fixed;
  max-width: 550px;
  bottom:0;
  padding-bottom: 5px;
  z-index:9999;
}
</style>
