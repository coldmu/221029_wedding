<template>
  <section class="opening">
    <div class="titleFrame">
      <p class="contentSubTitle">Wedding Invitation</p>
      <p class="contentTitle">초대합니다</p>
    </div>
    <div class="content">
      <p>안녕하세요 양찬무입니다. 반갑습니다.</p>
      <p>안녕하세요 양찬무입니다. 반갑습니다.</p>
      <p>안녕하세요 양찬무입니다. 반갑습니다.</p>
      <p>안녕하세요 양찬무입니다. 반갑습니다.</p>
    </div>
    <div class="familyTextFrame">
      <div class="familyText">
        <strong>양준희 오옥순</strong>의 아들 <splan class="heroText">양찬무</splan>
      </div>
      <div class="familyText">
        <strong>박석곤 유미영</strong>의 딸 <splan class="heroText">박혜진</splan>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Opening',
};
</script>

<style scoped>
.opening {
  position: relative;
  /*background: #26a69a;*/
  height: auto;
  width: 85vw;
  max-width: 550px;
  padding: 0 2%;
}

.familyTextFrame {
font-weight:600;
}
.familyText {
  text-align: center;
  font-size: 1.15rem;
  margin-bottom: 10px;
}
.familyText > strong {
    font-size:1.2rem;
    margin:0 5px;
}

.heroText {
    font-size:1.4rem;
    margin:0 5px;
}
</style>
