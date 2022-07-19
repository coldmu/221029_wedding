<template>
  <section class="location" id="location">
    <div class="titleFrame">
      <p class="contentSubTitle">Location</p>
      <p class="contentTitle">오시는 길</p>
    </div>

    <div id="map" @click="openMap" @keydown="openMap"></div>
    <p class="small">지도를 클릭하시면 카카오 맵으로 연결됩니다</p>

    <div class="title">
      <p>22년 10월 29일 토요일 오후 12시 30분</p>
      <p class="point">더엠컨벤션(구 MBC 웨딩홀)</p>
      <p>9층 피에스타홀</p>
      <p>052) xxx-xxxx</p>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Location',
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.createMap();
    } else {
      const script = document.createElement('script');
      /* global kakao */
      script.onload = () => kakao.maps.load(this.createMap);
      // eslint-disable-next-line no-useless-concat
      script.src = '//dapi.kakao.com/v2/maps/sdk.js?&autoload=false&appkey=c4b18e4aa51935b6d7c39216d3dbdc48';
      document.head.appendChild(script);
    }
  },
  methods: {
    createMap() {
      const container = document.getElementById('map');

      const markers = [
        {
          position: new kakao.maps.LatLng(35.54846673850706, 129.13922598658215),
          text: '더엠컨벤션 - 9F 피에스타홀',
        },
      ];

      const options = {
        center: new kakao.maps.LatLng(35.55057673850706, 129.13922598658215),
        level: 5,
        mapTypeId: kakao.maps.MapTypeId.ROADMAP,
        marker: markers,
      };
      // eslint-disable-next-line
      const staticMap = new kakao.maps.StaticMap(container, options);
    },
    openMap() {
      window.open('https://map.kakao.com/?itemId=579868035');
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#location {
  position: relative;
  /*background: #9575cd;*/
  height: auto;
  width: 95vw;
  max-width: 550px;
  padding: 0 1%;
  margin-top: 50px;
  overflow: hidden;
}

#map{
  border-radius:1rem;
  width: 90vw;
  max-width:350px;
  height:250px;
  margin: 0 auto;
  /*border-width: 0.1px;*/
  /*border-style: solid;*/
  /*border-color: #666;*/
  /*border: 0.1em solid #666666;*/
  box-shadow: 5px 10px 8px #666666;
}

.small{
  margin-top: 12px;
  font-size:0.8rem;
  color:#666;
  text-align: center;
}

.title{
  text-align: center;
  margin-top:30px;
  margin-bottom:20px;
  font-weight:700;
  text-align: center;
  margin-bottom:10px;
  line-height: 1.8em;
  font-size:1rem;
  color:#202121;
& .point {
    color:#587850;
  }
}
</style>
