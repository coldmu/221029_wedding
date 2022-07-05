<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted } from 'vue';

gsap.registerPlugin(ScrollTrigger);
export default {
  setup() {
    // const section2 = ref(null);
    // const triggers = ScrollTrigger.getAll();

    function gsapSet() {
      // gsap.set('.horizon_box', { scale: 0 });
      // gsap.set('.horizon_box', { transformPerspective: 2000 });
      // const t1 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: '#section2',
      //     pin: true,
      //     scrub: 3,
      //     start: 'top top',
      //     end: '+=2000',
      //     markers: true,
      //   },
      // });
      // gsap.utils.toArray('.horizon_box').forEach((layer, i) => {
      //   t1.add(`layer${i}`)
      //     .from(layer, {
      //       duration: 2, ease: 'none', stagger: 3, scale: 0.2, autoAlpha: 0,
      //     }, `layer${i}`)
      //     .to(layer, { autoAlpha: 0, duration: 0.5 })
      //     .to({}, { duration: 2 });
      // });
      // gsap.set('.horizon_box', { autoAlpha: 0 });
      gsap.defaults({ ease: 'power1.in', duration: 10, laze: true });
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: '#section',
          pin: true,
          scrub: 0.5,
          stagger: 1,
          start: 'top top',
          end: '+=3000',
          // markers: true,
        },
      });
      t1.to('.menuFrame', { autoAlpha: 0, duration: 0.5 })
        .from(
          '.box1',
          {
            scale: 0.4, autoAlpha: 0.4,
          },
        )
        .to({}, { duration: 1 })
        .to('.box1', { autoAlpha: 0, duration: 0.2 })
        .from(
          '.box2',
          {
            scale: 0.2, autoAlpha: 0,
          },
        )
        .to({}, { duration: 1 })
        .to('.box2', { autoAlpha: 0, duration: 0.2 })
        .from(
          '.box3',
          {
            scale: 0.2, autoAlpha: 0,
          },
        )
        .to({}, { duration: 1 })
        .to('.box3', { autoAlpha: 0, duration: 0.2 })
        .from(
          '.box4',
          {
            scale: 0.2, autoAlpha: 0,
          },
        )
        .to('.menuFrame', { autoAlpha: 1, duration: 3 });
      // .to({}, { duration: 2 });
      // ScrollTrigger.matchMedia({
      //   '(min-width: 768px)': () => {
      //     const t1 = gsap.timeline({
      //       scrollTrigger: {
      //         trigger: '#section2',
      //         pin: true,
      //         scrub: 3,
      //         start: 'top top',
      //         end: '+=3000',
      //         markers: true,
      //       },
      //     });
      //     t1.from(
      //       '.box1',
      //       {
      //         duration: 3, ease: 'none', scale: 0.2, autoAlpha: 0,
      //       },
      //     )
      //       .to({}, { duration: 0.5 })
      //       .to('.box1', { autoAlpha: 0, duration: 0.5 })
      //       .from(
      //         '.box2',
      //         {
      //           duration: 3, ease: 'none', scale: 0.2, autoAlpha: 0,
      //         },
      //       )
      //       .to({}, { duration: 0.5 })
      //       .to('.box2', { autoAlpha: 0, duration: 0.5 })
      //       .from(
      //         '.box3',
      //         {
      //           duration: 3, ease: 'none', scale: 0.2, autoAlpha: 0,
      //         },
      //       )
      //       .to({}, { duration: 2 });
      //   },
      // });
    }

    onMounted(() => {
      ScrollTrigger.refresh();
      gsapSet();
    });
    // onUnmounted(() => {
    //   triggers.forEach((trigger) => {
    //     trigger.kill();
    //   });
    //   ScrollTrigger.clearMatchMedia();
    // });

    return {
      // section,
    };
  },
};
</script>

<template>
  <section id="section">
    <div class="box_wrapper">
      <div class="box box1 horizon_box">
<!--        <img :src="require(`@/assets/storyImages/1.webp`)" alt="1" class="storyIamgeVertical test1" loading="eager">-->
        <img :src="require(`@/assets/storyImages/1_1.jpg`)" alt="1" class="storyIamgeVertical test1" loading="eager">
        <div class="storyTextDiv"><p class="storyText"> 통무통무<br>통무는 잘생겼다능!! </p></div>
      </div>
      <div class="box box2 horizon_box">
        <img :src="require(`@/assets/storyImages/1_2.jpg`)" alt="2" class="storyIamgeVertical test2" loading="eager">
        <div class="storyTextDiv"><p class="storyText"> 통무통무!!<br>통무는 멋있다능!! </p></div>
      </div>
      <div class="box box3 horizon_box">
        <img :src="require(`@/assets/storyImages/1_3.jpg`)" alt="3" class="storyIamgeHorizon" loading="eager">
        <div class="storyTextDiv"><p class="storyText"> 통무♥찌니<br>귀여운 커플이라능!! </p></div>
      </div>
      <div class="box box4 horizon_box">
        <img :src="require(`@/assets/storyImages/1_4.jpg`)" alt="4" class="storyEnd" loading="eager">
        <div class="storyTextDiv"><p class="storyText"> 통무♥찌니<br>우리는 최고라능!! </p></div>
      </div>
    </div>
  </section>
</template>

<style>
{ margin: 0; }
body { margin: 0; }
section { position: relative; height: 100vh;}
.horizon_box { position: absolute; top: 0; left:0;}
.box { display: flex; justify-content: center; align-items: center; width: 100%; }
.box { flex-direction: column;}
.box_wrapper { background: red; }
.box1 { height: 100%; }
.box2 { height: 100%; }
.box3 { height: 100%; }
.box4 { height: 100%; }
.storyIamgeVertical { height: 75vh; max-width: 100%; background: yellow;}
.storyIamgeHorizon { width: 140vmin; max-height: 80vh; background: yellow;}
.storyEnd { height: 82vh;}
.storyText { font-family: 'KimNamyun';  font-size: 3vh; text-align: center; }
.storyTextDiv { height: 10%; padding-top: 0.5vh;}
</style>

<!--<style>-->
<!--{ margin: 0; }-->
<!--body { margin: 0; }-->
<!--section { background: indianred; position: relative; height: 100vh;}-->
<!--#section2 { overflow: hidden; }-->
<!--#section3 { background: indianred; }-->
<!--#section4 { background: paleturquoise; }-->
<!--.horizon_box { position: absolute; top: 0;}-->
<!--.box { display: flex; justify-content: center; align-items: center; width: 100%; }-->
<!--.box { flex-direction: column;}-->
<!--.box_wrapper { background: red; }-->
<!--.box1 { height: 100%; }-->
<!--.box2 { height: 100%; }-->
<!--.box3 { height: 100%; }-->
<!--.box4 { height: 100%; }-->
<!--.story { height: 85%;}-->
<!--.storyEnd { height: 85%;}-->
<!--.storyText { font-family: 'KimNamyun';  font-size: 3vh; text-align: center; }-->
<!--.storyTextDiv { height: 10%; padding-top: 0.5vh;}-->
<!--</style>-->
