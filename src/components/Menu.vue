<template>
  <div class="menuFrame">
    <div class="verticalLineInvisible"></div>
    <div class="menuText" @click="scrollToTop" @keydown="scrollToTop">찬무 ♥ 혜진</div>
    <div class="verticalLine"></div>
    <div class="menuText" @click="scrollToGallery" @keydown="scrollToGallery">사진첩</div>
    <div class="verticalLine"></div>
    <div class="menuText" @click="scrollToLocation" @keydown="scrollToLocation">오시는 길</div>
    <div class="verticalLineInvisible"></div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 'Menu',
  setup() {
    const headerOffset = 45;
    let elementPosition;
    let element = '';
    let offsetPosition = 0;

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const scrollToGallery = () => {
      element = document.getElementById('mainGallery');
      elementPosition = element.getBoundingClientRect().top;
      offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    };
    const scrollToLocation = () => {
      element = document.getElementById('location');
      elementPosition = element.getBoundingClientRect().top;
      offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    };
    const scrollToContact = () => {
      element = document.getElementById('contact');
      elementPosition = element.getBoundingClientRect().top;
      offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
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
  margin: 0 auto 0 auto;
  padding: 10px 0 0 0;
  height: 50px;
  background: #fff;
  z-index:1000;
}
.menuText{
  /*width:30%;*/
  width: 25%;
  font-family: 'KimNamyun';
  font-size: clamp(14px, 4vw, 18px);
  /*margin:5px 5px 1px 5px;*/
  /*padding:5px 10px 1px 10px;*/
  /*background:rgba(200,200,200,0);*/
  border-radius:5px;
  /*font-weight: bold;*/
}

.menuText:active{
  background:rgba(200,200,200,0.3);
}

.verticalLine{
  width:1px;
  height:10px;
  background:#000000;
}
.verticalLineInvisible{
  width:0px;
  height:10px;
  background:#000000;
}
</style>
