<template>
  <div class="menuFrame">
    <div class="menuText" @click="scrollToTop" @keydown="scrollToTop">찬무 ♥ 혜진</div>
    <div class="verticalLine"></div>
    <div class="menuText" @click="scrollToGallery" @keydown="scrollToGallery">사진첩</div>
    <div class="verticalLine"></div>
    <div class="menuText" @click="scrollToLocation" @keydown="scrollToLocation">오시는 길</div>
    <div class="verticalLine"></div>
    <div class="menuText" @click="scrollToContact" @keydown="scrollToContact">연락처</div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 'Menu',
  setup() {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const scrollToGallery = () => {
      document
        .getElementById('mainGallery')
        .scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToLocation = () => {
      document
        .getElementById('location')
        .scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToContact = () => {
      document
        .getElementById('contact')
        .scrollIntoView({ behavior: 'smooth' });
    };
    return {
      scrollToTop,
      scrollToGallery,
      scrollToLocation,
      scrollToContact,
    };
  },
};
</script>

<style>
.menuFrame{
  display:flex;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  text-align: center;
  /*padding: 10px 0 0 0;*/
  font-family: 'KimNamyun';
  width: 100vw;
  max-width: 550px;
  /*justify-content: space-around;*/
  /*align-items: center;*/
  color:#888;
  position: fixed;
  top:0;
  left:0;
  right: 0;
  margin: 0 auto;
  background: #fff;
  z-index:1000;
}
.menuText{
  /*width:30%;*/
  width: 25%;
  font-family: 'KimNamyun';
  font-size: clamp(14px, 4vw, 18px);
  margin:5px 5px 1px 5px;
  padding:5px 10px 1px 10px;
  /*background:rgba(200,200,200,0);*/
  border-radius:5px;
}

.menuText:active{
  background:rgba(200,200,200,0.3);
}

.verticalLine{
  width:1px;
  height:10px;
  background:#000000;
}
</style>
