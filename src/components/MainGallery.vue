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
            <div v-for="{source, thumbnail} in scope.images" :key="source" class="image-wrapper">
              <img
                class="image"
                :src="thumbnail"
                :data-src="source"
                alt="mainGallery"
              >
            </div>
          </figure>
        </template>
      </viewer>
    </div>
    <button type="button" @click="show">위 사진을 선택하시면 확대됩니다 ^^</button>
  </section>
</template>

<script>
const sourceImages = [];
for (let i = 1; i <= 29; i += 1) {
  sourceImages.push({
    /* eslint-disable */
    thumbnail: require(`@/assets/galleryImages/thumbnails/${i}.jpg`),
    source: require(`@/assets/galleryImages/1_${i}.jpg`),
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
        toolbar: true,
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
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.mainGallery {
  position: relative;
  /*background: #e6ee9c;*/
  height: auto;
  width: 95vw;
  max-width: 550px;
  padding: 0 1%;
  margin-top: 30px;
  text-align: center;
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
      width: 25%;
      overflow: hidden;
      padding: 1px;

      .image {
        width: 100%;
        cursor: pointer;
        margin: 0;
        padding: 0;
      }

    }
  }
}
</style>
