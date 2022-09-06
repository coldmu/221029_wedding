<template>
  <section class="mainGallery" id="mainGallery">
    <div class="titleFrame">
      <p class="contentSubTitle">Gallery</p>
      <p class="contentTitle">사진첩</p>
    </div>
    <div class="viewer-wrapper">
      <viewer
        ref="viewer"
        :options="options"
        :images="images"
        class="viewer"
        @inited="inited"
      >
        <template #default="scope">
          <figure class="images">
            <div v-for="{source} in scope.images" :key="source" class="image-wrapper">
              <img
                class="image"
                :src="source"
                :data-src="source"
                alt="mainGallery"
              >
            </div>
          </figure>
        </template>
      </viewer>
    </div>
<!--    <button type="button" @click="show">위 사진을 선택하시면 확대됩니다 ^^</button>-->
  </section>
</template>

<script>
const sourceImages = [];
for (let i = 1; i <= 30; i += 1) {
  sourceImages.push({
    /* eslint-disable */
    // thumbnail: require(`@/assets/galleryImages/thumbnails/${i}.jpg`),
    source: require(`@/assets/galleryImages/gallery (${i}).jpg`),
    /* eslint-disable */
    alt: 'test',
  });
}
export default {
  name: 'MainGallery',
  data() {
    return {
      images: sourceImages,
      options: {
        inline: false,
        button: true,
        navbar: true,
        title: false,
        toolbar: {
          reset: {
            show: true,
            size: 'large',
          },
          prev: {
            show: true,
            size: 'large',
          },
          play: {
            show: true,
            size: 'large',
          },
          next: {
            show: true,
            size: 'large',
          },
        },
        tooltip: false,
        movable: true,
        zoomable: true,
        rotatable: false,
        scalable: false,
        loading: true,
        focus: true,
        transition: false,
        fullscreen: true,
        keyboard: true,
        zoomOnTouch: true,
        zoomOnWheel: true,
        slideOnTouch: true,
        toggleOnDblclick: false,
        maxZoomRatio: 1,
        interval: 2500,
        zIndex: 9999,
        url: 'data-src',
        className: 'img-preview',
      },
    };
  },
  methods: {
    inited(viewer) {
      this.$viewer = viewer;
    },
    show() {
      this.$viewerApi({
        images: this.images,
      });
    },
    ctxStop(){
      console.log("다른거");
    },
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
      .image-wrapper > img {
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
