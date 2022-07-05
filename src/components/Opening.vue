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
        <span><strong>양준희 오옥순</strong></span><span>의 아들</span><span class="heroText">양찬무</span>
      </div>
      <div class="familyText">
        <span><strong>박석곤 유미영</strong></span><span>의 딸</span><span class="heroText">박혜진</span>
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
  width: 95vw;
  max-width: 550px;
  padding: 0;
  margin-top: 20px;
  /*display: flex;*/
  /*flex-direction: column;*/
  /*align-content: center;*/
}

.familyTextFrame {
  font-weight:600;
  width: 80%;
  margin: 0 auto;
  max-width: 300px;
}
.familyText {
  font-size: 1.15rem;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  margin: 0 auto 10px auto;
  justify-content: space-between;
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
