<template>
  <section id="recommendation">
    <div class="titleFrame">
      <p class="contentSubTitle">Recommendation</p>
      <p class="contentTitle">추천 여행지</p>
    </div>
    <div class="content">
      <p>먼 길 와주셔서 정말 감사합니다</p>
      <p>혜진♥찬무의 울산을 소개합니다</p>
      <p>아래 버튼을 클릭하시면</p>
      <p>울산 추천 여행지 및 맛집을</p>
      <p>확인하실 수 있습니다</p>
      <v-btn href="http://kko.to/W3We5Z56L" class="RecommendBtn">울산 핫플로 GO! 🚗🚢🚋</v-btn>

    </div>
    <br><br><br><br>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Closing',
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style scoped>
#recommendation {
  position: relative;
  /*background: #e57373;*/
  height: auto;
  width: 85vw;
  max-width: 550px;
  padding: 0 2%;
  margin-top: 50px;
}

.RecommendBtn{
  border: 0;
  background: #7cb0ff;
  border-radius: 5px;
  font-family: 'Cafe24Oneprettynight';
  font-weight: 800;
  color: #202121;
  padding: 10px 20px;
  /*width:100%;*/
  margin:30px auto;
  margin-bottom:50px;
  text-align:center;
}
</style>
