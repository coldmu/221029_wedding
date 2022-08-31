<template>
  <div id="scrollDown">
    <Vue3Lottie :animationData="SwipeJSON" :height="200" :width="180"></Vue3Lottie>
  </div>

  <div id="kakaoShare">
    <v-btn
      color="#fce445aa"
      icon="mdi-share-variant-outline"
      size="small"
      @click="sendKakao"
    ></v-btn>
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
  bottom: 30px; /* 아래 끝에서부터의 거리 */
  right: -30px; /* 오른쪽 끝에서부터의 거리 */
  z-index: 99;
}

.scrolldown_img{
  width: 20vw;
}

.scroll_text{
  text-align: center;
  font-size: 3vw;
  font-weight: 600;
}

#kakaoShare{
  position: fixed;
  bottom: 30px; /* 아래 끝에서부터의 거리 */
  right: 25px; /* 오른쪽 끝에서부터의 거리 */
  z-index: 99;
}

.kakaoShareBtn{
  background: #fce445;
  border-radius: 9999px;
}
</style>
