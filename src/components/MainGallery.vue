<template>
  <section class="mainGallery">
    <div class="titleFrame">
      <p class="contentSubTitle">Gallery</p>
      <p class="contentTitle">사진첩</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainGallery',
};
</script>

<style scoped>
.mainGallery {
  position: relative;
  /*background: #e6ee9c;*/
  height: auto;
  width: 85vw;
  max-width: 550px;
  padding: 0 2%;
}
.box { display: flex; justify-content: center; align-items: center; }
.box { flex-direction: column;}
</style>
