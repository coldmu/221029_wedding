<template>
  <div class="main_container">
    <Menu/>
    <FloatingMenu/>
    <StoryGallery/>
    <div class="mainFrame">
      <Opening/>
      <MainGallery/>
      <Calendar/>
      <Location/>
      <Contact/>
      <Recommendation/>
    </div>
    <Footer/>
  </div>
</template>

<script>
// import { defineComponent } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted, onUnmounted } from 'vue';

// Components
// eslint-disable-next-line
import StoryGallery from '../components/StoryGallery.vue';
import Opening from '../components/Opening.vue';
import FloatingMenu from '../components/FloatingMenu.vue';
// eslint-disable-next-line
import MainGallery from '../components/MainGallery.vue';
import Calendar from '../components/Calendar.vue';
// eslint-disable-next-line
import Location from '../components/Location.vue';
// eslint-disable-next-line
import Contact from '../components/Contact.vue';
import Recommendation from '../components/Recommendation.vue';
import Menu from '../components/Menu.vue';
import Footer from '../components/Footer.vue';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'HomeView',
  components: {
    // eslint-disable-next-line
    StoryGallery,
    Opening,
    MainGallery,
    Calendar,
    Location,
    Contact,
    Recommendation,
    Menu,
    Footer,
    FloatingMenu,
  },
  setup() {
    const triggers = ScrollTrigger.getAll();

    function gsapSet() {
      // gsap.defaults({ ease: 'none', duration: 3, laze: false });
      gsap.from('#opening', {
        scrollTrigger: {
          trigger: '#opening',
          // markers: true,
          ease: 'expo',
          start: 'top 75%',
          // toggleActions: 'restart none reverse none',
        },
        autoAlpha: 0,
        y: 20,
        duration: 1,
      });

      gsap.from('#mainGallery', {
        scrollTrigger: {
          trigger: '#mainGallery',
          // markers: true,
          ease: 'expo',
          start: 'top 75%',
          // toggleActions: 'restart none reverse none',
        },
        autoAlpha: 0,
        y: 20,
        duration: 1,
      });

      gsap.from('#location', {
        scrollTrigger: {
          trigger: '#location',
          // markers: true,
          ease: 'expo',
          start: 'top 75%',
          // toggleActions: 'restart none reverse none',
        },
        autoAlpha: 0,
        y: 20,
        duration: 1,
      });

      gsap.from('#contact', {
        scrollTrigger: {
          trigger: '#contact',
          // markers: true,
          ease: 'expo',
          start: 'top 75%',
          // toggleActions: 'restart none reverse none',
        },
        autoAlpha: 0,
        y: 20,
        duration: 1,
      });

      gsap.from('#calendar', {
        scrollTrigger: {
          trigger: '#calendar',
          // markers: true,
          ease: 'expo',
          start: 'top 75%',
          // toggleActions: 'restart none reverse none',
        },
        autoAlpha: 0,
        y: 20,
        duration: 1,
      });

      gsap.from('#recommendation', {
        scrollTrigger: {
          trigger: '#recommendation',
          // markers: true,
          ease: 'expo',
          start: 'top bottom',
          // toggleActions: 'restart none reverse none',
        },
        autoAlpha: 0,
        y: 20,
        duration: 1,
      });
    }

    onMounted(() => {
      ScrollTrigger.refresh();
      gsapSet();
    });
    onUnmounted(() => {
      triggers.forEach((trigger) => {
        trigger.kill();
      });
      ScrollTrigger.clearMatchMedia();
    });

    return {};
  },
};

</script>

<style>
body{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.mainFrame{
  /*margin-top: 30px;*/
  /*padding-top: 40px;*/
  margin: 0 auto;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 550px;
  top: 50px;
  /*padding-top: 50px;*/
  /*position: absolute;*/
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

.footerDiv{
  font-family: 'KimNamyun';
  display: flex;
  width: 100vw;
  color:#888;
  text-align: center;
  position:fixed;
  max-width: 550px;
  bottom:0;
  padding-bottom: 5px;
  z-index:9999;
}
</style>
