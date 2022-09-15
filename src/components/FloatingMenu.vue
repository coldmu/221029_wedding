<template>
  <div id="scrollDown">
    <p class="scroll_text">
      화면을 천천히<br>
      위로 올려주세요
    </p>
    <Vue3Lottie :animationData="SwipeJSON" :height="200" :width="180"></Vue3Lottie>
  </div>

  <div id="kakaoShare">
    <v-btn
      color="#fce445ee"
      icon="mdi-share-variant-outline"
      size="x-small"
      @click="sendKakao"
      class="kakaoShareBtn"
    ></v-btn>
    <p class="kakaoShareText">카톡 공유하기</p>
  </div>
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie';
import 'vue3-lottie/dist/style.css';
// eslint-disable-next-line
import SwipeJSON from '../assets/icon/swipe.json';
export default {
  // eslint-disable-next-line
  name: 'FloatingMenu',
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      SwipeJSON,
    };
  },
  setup() {
    // 카카오톡 공유기능
    // const { Kakao } = useKakao();
    // init 체크
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init('c4b18e4aa51935b6d7c39216d3dbdc48');
    }

    const sendKakao = () => {
      // 메시지 공유 함수
      window.Kakao.Link.sendScrap({
        requestUrl: 'http://localhost:8080/', // 페이지 url
        templateId: 79968, // 메시지템플릿 번호
      });
    };

    return {
      sendKakao,
    };
  },
};
</script>

<style>
#scrollDown{
  position: fixed;
  /*display: flex;*/
  /*flex-direction: column;*/
  /*align-items: center;*/
  bottom: 25px; /* 아래 끝에서부터의 거리 */
  right: -30px; /* 오른쪽 끝에서부터의 거리 */
  z-index: 99;
}

.scroll_text{
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  margin-right: -15px;
  margin-bottom: -60px;
}

#kakaoShare{
  position: fixed;
  bottom: 15px; /* 아래 끝에서부터의 거리 */
  right: 10px; /* 오른쪽 끝에서부터의 거리 */
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: center;
  justify-items: center;
}
.kakaoShareText{
  margin-top: 5px;
  text-align: center;
  font-weight: 600;
  font-size: 13px;
}

.kakaoShareBtn{
  align-self: center;
}
</style>
