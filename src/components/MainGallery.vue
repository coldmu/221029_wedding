<template>
  <section class="mainGallery" id="mainGallery">
    <div class="titleFrame">
      <p class="contentSubTitle">Gallery</p>
      <p class="contentTitle">사진첩</p>
      <p class="infoText"> 아래 사진을 클릭하시면 크게 보실 수 있습니다</p>
    </div>
    TEST1
    <img src='http://coldmu.asuscomm.com:50443/gallery/gallery (1).jpg' alt="test">
    TEST2
    <img :src="require(`@/assets/galleryImages/gallery (1).jpg`)" alt="test2">
    <div id="test" class="viewer">
      <figure class="images">
        <div v-for="(image, key) in images" :key="key" class="image-wrapper">
          <a
            :href="image.URL"
            :data-pswp-width="image.width"
            :data-pswp-height="image.height"
            target="_blank"
            rel="noreferrer"
          >
            <img :src="image.URL" alt="" class="image"/>
          </a>
        </div>
      </figure>
    </div>

<!--    <button type="button" @click="show">위 사진을 선택하시면 확대됩니다 ^^</button>-->
  </section>
</template>

<script>
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

/* eslint-disable */
export default {
  name: 'MainGallery',
  data() {
    return {
      images: [
        { URL: require(`@/assets/galleryImages/gallery (1).jpg`), width: 1080, height: 1620 },
        { URL: 'http://coldmu.asuscomm.com:50443/gallery/gallery(2).jpg', width: 1080, height: 1620 },
        { URL: 'https://coldmu.asuscomm.com:50443/test/test.jpg', width: 1080, height: 1620 },
        { URL: 'http://coldmu.asuscomm.com:50443/gallery/gallery (4).jpg', width: 1080, height: 1620 },
        { URL: 'http://coldmu.asuscomm.com:50443/gallery/gallery (5).jpg', width: 1620, height: 1080 },
        { URL: 'http://coldmu.asuscomm.com:50443/gallery/gallery (6).jpg', width: 1620, height: 1080 },
        { URL: 'http://coldmu.asuscomm.com:50443/gallery/gallery (7).jpg', width: 1620, height: 1080 },
        // { URL: 'http://coldmu.asuscomm.com:50443/gallery/gallery (8).jpg', width: 1620, height: 1080 },
        { URL: 'http://coldmu.asuscomm.com:50443/gallery/gallery (9).jpg', width: 1620, height: 1080 },
        { URL: 'http://coldmu.asuscomm.com:50443/gallery/gallery (10).jpg', width: 1080, height: 1620 },
        { URL: 'http://coldmu.asuscomm.com:50443/gallery/gallery (11).jpg', width: 1620, height: 1080 },
        { URL: 'http://coldmu.asuscomm.com:50443/gallery/gallery (12).jpg', width: 1080, height: 1620 },
        { URL: 'http://coldmu.asuscomm.com:50443/gallery/gallery (13).jpg', width: 1080, height: 1620 },
        { URL: 'http://coldmu.asuscomm.com:50443/gallery/gallery (14).jpg', width: 1080, height: 1620 },
        { URL: 'http://coldmu.asuscomm.com:50443/gallery/gallery (15).jpg', width: 1080, height: 1620 },
        { URL: 'http://coldmu.asuscomm.com:50443/gallery/gallery (16).jpg', width: 1080, height: 1620 },
        { URL: 'http://coldmu.asuscomm.com:50443/gallery/gallery (17).jpg', width: 1620, height: 1080 },
        { URL: 'http://coldmu.asuscomm.com:50443/gallery/gallery (18).jpg', width: 1080, height: 1620 },
        { URL: 'http://coldmu.asuscomm.com:50443/gallery/gallery (19).jpg', width: 1080, height: 1620 },
        { URL: 'http://coldmu.asuscomm.com:50443/gallery/gallery (20).jpg', width: 1620, height: 1080 },
        // { URL: 'http://coldmu.asuscomm.com:50443/gallery/gallery (21).jpg', width: 1620, height: 1080 },
        { URL: 'http://coldmu.asuscomm.com:50443/gallery/gallery (22).jpg', width: 1080, height: 1620 },
        { URL: 'http://coldmu.asuscomm.com:50443/gallery/gallery (23).jpg', width: 1620, height: 1080 },
        { URL: 'http://coldmu.asuscomm.com:50443/gallery/gallery (24).jpg', width: 1080, height: 1620 },
        { URL: 'http://coldmu.asuscomm.com:50443/gallery/gallery (25).jpg', width: 1080, height: 1620 },
        { URL: 'http://coldmu.asuscomm.com:50443/gallery/gallery (26).jpg', width: 1080, height: 1620 },
        { URL: 'http://coldmu.asuscomm.com:50443/gallery/gallery (27).jpg', width: 1620, height: 1080 },
        { URL: 'http://coldmu.asuscomm.com:50443/gallery/gallery (28).jpg', width: 1080, height: 1620 },
        { URL: 'http://coldmu.asuscomm.com:50443/gallery/gallery (29).jpg', width: 1620, height: 1080 },
        { URL: 'http://coldmu.asuscomm.com:50443/gallery/gallery (30).jpg', width: 1080, height: 1620 },
      ],
    }
  },
  mounted() {
const leftArrowSVGString = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">  <image id="image0" width="24" height="24" x="0" y="0"\n' +
      '    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAACBjSFJN\n' +
      'AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAw1BMVEUAAAD3Xl72YF71YV32\n' +
      'YV31YV32YVz2YWH2Xl71YV31YV31YV31Yl33YGD1YFz1YV32YV31Ylz2YFz2YV32ZFv1Ylj1YV71\n' +
      'YV71Yl31Yl31YV31YV31YV30Yl32YV31YVz1YV31YF31YVz1Zlz1Yl71YF31YV7zYWH0YV32Yl31\n' +
      'YVz1YF71YV32dnP8z8781NP3gn/81dT8zcz2dHH80M//////+Pf3h4T819b3g4D3hoL+9/f/+fn4\n' +
      'iYb3hIH81tX8zs3sxMlqAAAALHRSTlMAHm242PRsHRuZ/P2qIFDz8k5vbhwanptrt7Xb8dnXafuc\n' +
      'mBlJTUwVkaK2am1T9mAAAAABYktHRDXettlrAAAACXBIWXMAAACxAAAAsQHGLUmNAAAAB3RJTUUH\n' +
      '5gkNDTQtBZ7UQgAAAPxJREFUKM91kmuXwTAQhgfFUrutbVyWbt3tIpTaCfbG//9VJklT4fB+mZPn\n' +
      'TSdzKYBWLl9wikWnUCqDradKladya88X/uJxS37d8FeXX8kN0vs3nBz1DaM8y1W81my9SbaUrUFG\n' +
      'k45fiGIn+U4gJhRbVKesZ4/akRxjAlUGgbx4EMpRXKikbXjjJgUKgSYl70BXP/r9g0q/f/rsgOlN\n' +
      'O4Zz75ERwvv9VNHjx0uqX7vcf0l6UJYNbuwGjwT6DGBAMbFHcqI4lEvyOd8m2RDjEw0xHMnxjrPt\n' +
      'ZWOf6IUEt4vKmxXWfZuH08vSPz772fXZ6Oo/Ye155HlRZ8FScAZjJU+rx0MJCgAAACV0RVh0ZGF0\n' +
      'ZTpjcmVhdGUAMjAyMi0wOS0xM1QxMzo1Mjo0NSswMDowMNH0nYQAAAAldEVYdGRhdGU6bW9kaWZ5\n' +
      'ADIwMjItMDktMTNUMTM6NTI6NDUrMDA6MDCgqSU4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2Nh\n' +
      'cGUub3Jnm+48GgAAAABJRU5ErkJggg==" />\n' +
      '</svg>';
    // const leftArrowSVGString = '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\n' +
    //   'width="48" height="48"\n' +
    //   'viewBox="0 0 48 48"\n' +
    //   'style=" fill:#000000;"><path fill="#f44336" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#fff" d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"></path><path fill="#fff" d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"></path></svg>>';
    //
    // const leftArrowSVGString = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20">\n' +
    //   '<title>\n' +
    //   'close\n' +
    //   '</title><g fill="#d33">\n' +
    //   '<path d="M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z"/>\n' +
    //   '<path d="M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z"/>\n' +
    //   '</g></svg>'

    if (!this.lightbox) {
      this.lightbox = new PhotoSwipeLightbox({
        // eslint-disable-next-line
        gallery: '#test',
        children: 'a',
        bgOpacity: 0.7,
        initialZoomLevel: 'fit',
        secondaryZoomLevel: 1,
        maxZoomLevel: 1,
        pinchToClose: false,
        zoomSVG: '',
        closeSVG: leftArrowSVGString,
        pswpModule: () => import('photoswipe'),
      });
      this.lightbox.init();
    }
  },
  unmounted() {
    if (this.lightbox) {
      this.lightbox.destroy();
      this.lightbox = null;
    }
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#mainGallery {
  position: relative;
  /*background: #e6ee9c;*/
  height: auto;
  width: 95vw;
  max-width: 550px;
  padding: 0 1%;
  margin-top: 50px;
  text-align: center;
}
//.image-wrapper {pointer-events : none;}
//.viewer{pointer-events : none;}
//.image{pointer-events : none;}
//.images{pointer-events : none;}
//.viewer-wrapper{pointer-events : none;}
//.pswp__img{pointer-events : none;}
//.pswp__item{pointer-events : none;}
.pswp--custom{
  --pswp-icon-color: #00fffc;
  --pswp-icon-color-secondary: #333;
  --pswp-bg: #7079bf;
}
.galleryFrame{
  border-style: solid;
  border-width: 1px;
}

.viewer {
  height: 100%;
  max-width: 550px;
  overflow: hidden;

  .images {
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;

    .image-wrapper {
      display: flex;
      position: relative;
      width: 25%;
      //height: 25%;
      //padding-bottom: 25%;
      overflow: hidden;
      //padding: 1px;
    }
    .image-wrapper:after {
      content: "";
      display: block;
      //display: flex;
      //width: 25%;
      //height: 25%;
      padding-bottom: 100%;
      //overflow: hidden;
      //padding: 1px;
    }
      .image {
        position: absolute;
        //min-height: 100%;
        //min-width: 100%;
        //transform: translate(50, 50);
        width: 100%;
        height: 100%;
        object-fit: cover;
        //width: 100%;
        cursor: pointer;
        //margin: 0;
        //padding: 0;
      }

  }
}

.mainGalleryText{
  font-size: 1rem;
  margin: 10px 0 10px 0;
  font-weight: 600;
}
</style>
