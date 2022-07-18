<template>
<div class="footerFrame"><p class="footerText">찬무 ♥ 혜진 all rights reserved</p></div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 'Footer',
};
</script>

<style scoped>
.footerFrame{
  display:flex;
  justify-content: center;
  font-family: 'KimNamyun';
  width: 100vw;
  max-width: 550px;
  color:#888;
  text-align: center;
  position:fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom:0;
  padding-bottom: 8px;
  z-index:9999;
}

.footerText{
  font-family: 'KimNamyun';
  font-size: clamp(14px, 4vw, 18px);
}
</style>
