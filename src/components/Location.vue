<template>
  <section class="location" id="location">
    <div class="titleFrame">
      <p class="contentSubTitle">Location</p>
      <p class="contentTitle">오시는 길</p>
    </div>

    <div id="map" style="width:100%;height:350px;"></div>
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
      const options = {
        center: new kakao.maps.LatLng(35.55070507886759, 129.1415097724912),
        level: 4,
        mapTypeId: kakao.maps.MapTypeId.ROADMAP,
      };
      const map = new kakao.maps.Map(container, options);

      // 지도에 확대 축소 컨트롤을 생성한다
      const zoomControl = new kakao.maps.ZoomControl();

      // 지도의 우측에 확대 축소 컨트롤을 추가한다
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

      // eslint-disable-next-line
      const imgSrc = require(`@/assets/icon/wedding.png`);
      const imgSize = new kakao.maps.Size(45, 45);
      const markerImage = new kakao.maps.MarkerImage(imgSrc, imgSize);

      // eslint-disable-next-line
      const markers = new kakao.maps.Marker(
        {
          position: new kakao.maps.LatLng(35.54846673850706, 129.13922598658215),
          text: '더엠컨벤션11',
          image: markerImage,
          // eslint-disable-next-line
          map: map,
        },
      );

      // eslint-disable-next-line
      // var content = '<div class="customoverlay">'
      //   + '  <a href="https://map.kakao.com/link/map/579868035" target="_blank">'
      //   + '    <span class="title"더엠컨벤션</span>'
      //   + '  </a>'
      //   + '</div>';

      const content = '<div class="overlaybox">'
        + '    <a href="https://map.kakao.com/link/map/579868035" target="_blank"><div class="boxtitle">더엠컨벤션</div></a>'
        + '    <div class="first">'
        + '        <div class="movietitle text">혜진♥찬무 웨딩</div>'
        + '    </div>'
        + '    <ul>'
        + '        <li class="up">'
        + '            <span class="number">일자:</span>'
        + '            <span class="title">2022. 10. 29</span>'
        + '        </li>'
        + '        <li>'
        + '            <span class="number">시간:</span>'
        + '            <span class="title">12:30</span>'
        + '        </li>'
        + '        <li>'
        + '            <span class="number">홀:</span>'
        + '            <span class="title">검정색</span>'
        + '        </li>'
        + '    </ul>'
        + '</div>';

      // 커스텀 오버레이가 표시될 위치입니다
      const position = new kakao.maps.LatLng(35.55056673850706, 129.1445098658215);

      // 커스텀 오버레이를 생성합니다
      // eslint-disable-next-line
      var customOverlay = new kakao.maps.CustomOverlay({
        // eslint-disable-next-line
        map: map,
        // eslint-disable-next-line
        position: position,
        // eslint-disable-next-line
        content: content,
        yAnchor: 0.5,
      });
    },
  },
};
</script>

<style>
.location {
  position: relative;
  /*background: #9575cd;*/
  height: auto;
  width: 85vw;
  max-width: 550px;
  padding: 0 2%;
  margin-top: 20px;
}
.box { display: flex; justify-content: center; align-items: center; }
.box { flex-direction: column;}

.overlaybox {position:relative;width:360px;height:350px;background:url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/box_movie.png') no-repeat;padding:15px 10px;}
.overlaybox div, ul {overflow:hidden;margin:0;padding:0;}
.overlaybox li {list-style: none;}
.overlaybox .boxtitle {color:#fff;font-size:16px;font-weight:bold;text-align:center;background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png') no-repeat right 120px center;margin-bottom:8px;}
.overlaybox .first {position:relative;width:247px;height:136px;background:url('@/assets/icon/wedding.png') no-repeat center;margin-bottom:8px;background-size: 50%;}
.first .text {color:#fff;font-weight:bold; text-align: center}
.first .triangle {position:absolute;width:48px;height:48px;top:0;left:0;background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/triangle.png') no-repeat; padding:6px;font-size:18px;}
.first .movietitle {position:absolute;width:100%;bottom:0;background:rgba(0,0,0,0.4);padding:7px 15px;font-size:14px;}
.overlaybox ul {width:247px;}
.overlaybox li {position:relative;margin-bottom:2px;background:#2b2d36;padding:5px 10px;color:#aaabaf;line-height: 1;}
/*.overlaybox li span {display:block;}*/
.overlaybox li .number {font-size:16px;font-weight:bold;}
.overlaybox li .title {font-size:13px; position:absolute; right:5px;}
.overlaybox ul .arrow {position:absolute;margin-top:8px;right:25px;width:5px;height:3px;background:url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/updown.png') no-repeat;}
.overlaybox li .up {background-position:0 -40px;}
.overlaybox li .down {background-position:0 -60px;}
.overlaybox li .count {position:absolute;margin-top:5px;right:15px;font-size:10px;}
.overlaybox li:hover {color:#fff;background:#d24545;}
.overlaybox li:hover .up {background-position:0 0px;}
.overlaybox li:hover .down {background-position:0 -20px;}
</style>
