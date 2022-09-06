<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ref, onMounted, onUnmounted } from 'vue';

gsap.registerPlugin(ScrollTrigger);
export default {
  setup() {
    const section = ref(null);
    const triggers = ScrollTrigger.getAll();

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
      gsap.defaults({ ease: 'none', duration: 3, laze: true });
      gsap.set('.horizon_box', { autoAlpha: 0 });
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: '#section',
          pin: true,
          scrub: 0.2,
          start: 'top top',
          end: '+=6000',
          // markers: true,
        },
      });
      t1.to('.menuFrame', { autoAlpha: 0, duration: 0.5 })
        .to('#kakaoShare', { autoAlpha: 0, duration: 1 })
        .to('#scrollDown', { autoAlpha: 0, duration: 1 })
        .fromTo(
          '.box1',
          {
            scale: 0.5, autoAlpha: 1,
          },
          {
            scale: 1, autoAlpha: 1,
          },
        )
        .to({}, { duration: 1 })
        .to('.box1', { autoAlpha: 0, duration: 1 })
        .to('.box2', { autoAlpha: 1, duration: 0 })
        .fromTo(
          '.box2',
          {
            scale: 0.3,
          },
          {
            scale: 1,
          },
        )
        .to({}, { duration: 1 })
        .to('.box2', { autoAlpha: 0, duration: 1 })
        .to('.box3', { autoAlpha: 1, duration: 0 })
        .fromTo(
          '.box3',
          {
            scale: 0.3,
          },
          {
            scale: 1,
          },
        )
        .to({}, { duration: 1 })
        .to('.box3', { autoAlpha: 0, duration: 1 })
        .to('.box4', { autoAlpha: 1, duration: 0 })
        .fromTo(
          '.box4',
          {
            scale: 0.3,
          },
          {
            scale: 1,
          },
        )
        .to({}, { duration: 1 })
        .to('.box4', { autoAlpha: 0, duration: 1 })
        .to('.box5', { autoAlpha: 1, duration: 0 })
        .fromTo(
          '.box5',
          {
            scale: 0.3,
          },
          {
            scale: 1,
          },
        )
        .to({}, { duration: 1 })
        .to('.box5', { autoAlpha: 0, duration: 1 })
        .to('.box6', { autoAlpha: 1, duration: 0 })
        .fromTo(
          '.box6',
          {
            scale: 0.3,
          },
          {
            scale: 1,
          },
        )
        .to({}, { duration: 1 })
        .to('.box6', { autoAlpha: 0, duration: 1 })
        .to('.box7', { autoAlpha: 1, duration: 0 })
        .fromTo(
          '.box7',
          {
            scale: 0.3,
          },
          {
            scale: 1,
          },
        )
        .to({}, { duration: 1 })
        .to('.box7', { autoAlpha: 0, duration: 1 })
        .to('.box8', { autoAlpha: 1, duration: 0 })
        .fromTo(
          '.box8',
          {
            scale: 0.3,
          },
          {
            scale: 1,
          },
        )
        .to({}, { duration: 1 })
        .to('#kakaoShare', { autoAlpha: 1, duration: 0 })
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
    onUnmounted(() => {
      triggers.forEach((trigger) => {
        trigger.kill();
      });
      ScrollTrigger.clearMatchMedia();
    });

    return {
      section,
    };
  },
};
</script>

<template>
  <section id="section">
      <div class="box box1 horizon_box" @contextmenu.prevent >
        <img :src="require(`@/assets/storyImages/1.jpg`)" alt="1" class="storyImageVertical" loading="eager">
        <div class="storyTextDiv"><p class="storyText">혜진 ♥ 찬무</p></div>
      </div>
      <div class="box box2 horizon_box">
        <img :src="require(`@/assets/storyImages/2.jpg`)" alt="2" class="storyImageVertical" loading="eager">
        <div class="storyTextDiv"><p class="storyText">5년 연애 끝에<br>저희 결혼합니다!!</p></div>
      </div>
      <div class="box box3 horizon_box">
        <img :src="require(`@/assets/storyImages/3.jpg`)" alt="3" class="storyImageVertical" loading="eager">
        <div class="storyTextDiv"><p class="storyText">2018년, 따뜻한 봄날</p></div>
      </div>
      <div class="box box4 horizon_box">
        <img :src="require(`@/assets/storyImages/4.jpg`)" alt="4" class="storyImageVertical" loading="eager">
        <div class="storyTextDiv"><p class="storyText">설렘의 마음을 가득 안고 시작한 우리</p></div>
      </div>
      <div class="box box5 horizon_box">
        <img :src="require(`@/assets/storyImages/5.jpg`)" alt="5" class="storyImageVertical" loading="eager">
        <div class="storyTextDiv"><p class="storyText">살아온 환경, 좋아하는 것<br>취미, 성격도 다른 우리가</p></div>
      </div>
      <div class="box box6 horizon_box">
        <img :src="require(`@/assets/storyImages/6.jpg`)" alt="6" class="storyImageVertical" loading="eager">
        <div class="storyTextDiv"><p class="storyText">인생의 여정을 함께 시작하려 합니다</p></div>
      </div>
      <div class="box box7 horizon_box">
        <img :src="require(`@/assets/storyImages/7.jpg`)" alt="7" class="storyImageVertical" loading="eager">
        <div class="storyTextDiv"><p class="storyText">검은머리 (찬)무뿌리 될 때까지<br>행복하고 재미있게 잘 살겠습니다!!</p></div>
      </div>
      <div class="box box8 horizon_box">
        <img :src="require(`@/assets/storyImages/8.jpg`)" alt="8" class="storyEnd" loading="eager">
        <div class="storyTextDiv"><p class="storyText">기쁨과 설렘 가득한<br>그 시작을 함께 축복해 주세요</p></div>
      </div>
  </section>
</template>

<style>
section { position: relative; height: 100vh; width: 100vw; max-width: 550px; margin: 0 auto; overflow: hidden;}
.horizon_box { position: absolute; top: 0; left:0;}
.box { display: flex; justify-content: center; align-items: center; width: 100%; }
.box { flex-direction: column; height: 100%;}
.box_wrapper { background: red; }
.box1 { height: 100%; z-index: 9999}
.box2 { height: 100%; z-index: 9998}
.box3 { height: 100%; z-index: 9997}
.box4 { height: 100%; z-index: 9996}
.storyImageVertical { height: 75vh; max-width: 100%; }
.storyIamgeHorizon { width: 140vmin; max-height: 80vh; }
.storyEnd { height: 85vh; max-width: 100%;}
.storyText { font-family: 'KimNamyun';  font-size: 3vh; text-align: center; line-height: 150%;}
.storyTextDiv { height: 10%; margin-top: 3vh;}
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
