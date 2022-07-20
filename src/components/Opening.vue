<template>
  <section id="opening">
    <div class="titleFrame">
      <p class="contentSubTitle">Wedding Invitation</p>
      <p class="contentTitle">초대합니다</p>
    </div>
    <div class="content">
      <p>함께 웃던 기억들이 사랑이라는 이름으로</p>
      <p>서로에게 마음속 깊이 자리 잡았습니다.</p>
      <p>이제 두 사람이 하나가 될</p>
      <p>인생의 여정을 시작하려 합니다.</p>
      <p>그 소중한 약속의 시간,</p>
      <p>자리를 빛내주시면 감사하겠습니다.</p>
    </div>
    <div class="familyTextFrame">
      <div class="familyText">
        <span class="strong">양준희·오옥순</span><span>의 장남</span><span class="heroText">찬무</span>
      </div>
      <div class="familyText">
        <span class="strong">박석곤·유미영</span><span>의 장녀</span><span class="heroText">혜진</span>
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
#opening {
  position: relative;
  /*background: #26a69a;*/
  height: auto;
  width: 95vw;
  max-width: 550px;
  padding: 0 1%;
  margin-top: 50px;
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
  align-items: center;
}
.strong {
    font-size:1.2rem;
    margin:0 5px;
}

.heroText {
    font-size:1.4rem;
    margin:0 5px;
}
</style>
