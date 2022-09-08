<template>
  <section class="mainGallery" id="mainGallery">
    <div class="titleFrame">
      <p class="contentSubTitle">Gallery</p>
      <p class="contentTitle">사진첩</p>
    </div>

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
        { URL: require(`@/assets/galleryImages/gallery (2).jpg`), width: 1080, height: 1620 },
        { URL: require(`@/assets/galleryImages/gallery (3).jpg`), width: 1080, height: 1620 },
        { URL: require(`@/assets/galleryImages/gallery (4).jpg`), width: 1080, height: 1620 },
        { URL: require(`@/assets/galleryImages/gallery (5).jpg`), width: 1620, height: 1080 },
        { URL: require(`@/assets/galleryImages/gallery (6).jpg`), width: 1620, height: 1080 },
        { URL: require(`@/assets/galleryImages/gallery (7).jpg`), width: 1620, height: 1080 },
        { URL: require(`@/assets/galleryImages/gallery (8).jpg`), width: 1620, height: 1080 },
        { URL: require(`@/assets/galleryImages/gallery (9).jpg`), width: 1620, height: 1080 },
        { URL: require(`@/assets/galleryImages/gallery (10).jpg`), width: 1080, height: 1620 },
        { URL: require(`@/assets/galleryImages/gallery (11).jpg`), width: 1620, height: 1080 },
        { URL: require(`@/assets/galleryImages/gallery (12).jpg`), width: 1080, height: 1620 },
        { URL: require(`@/assets/galleryImages/gallery (13).jpg`), width: 1080, height: 1620 },
        { URL: require(`@/assets/galleryImages/gallery (14).jpg`), width: 1080, height: 1620 },
        { URL: require(`@/assets/galleryImages/gallery (15).jpg`), width: 1080, height: 1620 },
        { URL: require(`@/assets/galleryImages/gallery (16).jpg`), width: 1080, height: 1620 },
        { URL: require(`@/assets/galleryImages/gallery (17).jpg`), width: 1620, height: 1080 },
        { URL: require(`@/assets/galleryImages/gallery (18).jpg`), width: 1080, height: 1620 },
        { URL: require(`@/assets/galleryImages/gallery (19).jpg`), width: 1080, height: 1620 },
        { URL: require(`@/assets/galleryImages/gallery (20).jpg`), width: 1620, height: 1080 },
        { URL: require(`@/assets/galleryImages/gallery (21).jpg`), width: 1620, height: 1080 },
        { URL: require(`@/assets/galleryImages/gallery (22).jpg`), width: 1080, height: 1620 },
        { URL: require(`@/assets/galleryImages/gallery (23).jpg`), width: 1620, height: 1080 },
        { URL: require(`@/assets/galleryImages/gallery (24).jpg`), width: 1080, height: 1620 },
        { URL: require(`@/assets/galleryImages/gallery (25).jpg`), width: 1080, height: 1620 },
        { URL: require(`@/assets/galleryImages/gallery (26).jpg`), width: 1080, height: 1620 },
        { URL: require(`@/assets/galleryImages/gallery (27).jpg`), width: 1620, height: 1080 },
        { URL: require(`@/assets/galleryImages/gallery (28).jpg`), width: 1080, height: 1620 },
        { URL: require(`@/assets/galleryImages/gallery (29).jpg`), width: 1620, height: 1080 },
        { URL: require(`@/assets/galleryImages/gallery (30).jpg`), width: 1080, height: 1620 },
      ],
    }
  },
  mounted() {
    if (!this.lightbox) {
      this.lightbox = new PhotoSwipeLightbox({
        // eslint-disable-next-line
        gallery: '#test',
        children: 'a',
        bgOpacity: 0.7,
        initialZoomLevel: 'fit',
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
</style>
