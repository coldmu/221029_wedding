<template>
  <div class="menuFrame">
  <div class="menuText">찬무 ♥ 혜진</div>
  <div class="verticalLine"></div>
  <div class="menuText">사진첩</div>
  <div class="verticalLine"></div>
  <div class="menuText">오시는길</div>
  <div class="verticalLine"></div>
  <div class="menuText">연락처</div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 'Menu',
};
</script>

<style scoped>
.menuFrame{
  display:flex;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  width: 100%;
  /*text-align: center;*/
  padding: 10px 0;
}
.menuText{
  /*width:30%;*/
  font-family: 'KimNamyun';
  font-size:1.1rem;
  margin:5px 5px;
  padding:5px 10px;
  background:rgba(200,200,200,0);
  border-radius:5px;
  transition: all 0.4s ease-in-out;
}

.menuText :active{
  background:rgba(200,200,200,1);
}

.verticalLine{
  width:1px;
  height:10px;
  background:#000000;
}
</style>
