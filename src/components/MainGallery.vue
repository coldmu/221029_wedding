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
            <div v-for="{source, thumbnail, alt} in scope.images" :key="source" class="image-wrapper">
              <img
                class="image"
                :src="thumbnail"
                :data-source="source"
                :alt="alt"
              >
            </div>
          </figure>
          <p><strong>Options: </strong>{{ scope.options }}</p>
        </template>
      </viewer>
    </div>
    <button type="button" @click="show">위 사진을 선택하시면 확대됩니다 ^^</button>
  </section>
</template>

<script>
const sourceImages = [];
const base = Math.floor(Math.random() * 60) + 10;
for (let i = 0; i < 10; i += 1) {
  sourceImages.push({
    thumbnail: `https://picsum.photos/id/${base + i}/346/216`,
    source: `https://picsum.photos/id/${base + i}/1440/900`,
    alt: `Image: ${base + i}`,
  });
}

export default {
  name: 'MainGallery',
  data() {
    return {
      // images: [
      //   'https://picsum.photos/200/200',
      //   'https://picsum.photos/300/200',
      //   'https://picsum.photos/250/200',
      // ],
      images: [...sourceImages].splice(0, 5),
      options: {
        inline: false,
        button: true,
        navbar: true,
        title: false,
        toolbar: true,
        tooltip: true,
        movable: false,
        zoomable: false,
        rotatable: false,
        scalable: false,
        transition: true,
        fullscreen: true,
        keyboard: true,
        zoomOnTouch: false,
        zoomOnWheel: false,
        slideOnTouch: true,
        zIndex: 9999,
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
  width: 85vw;
  max-width: 550px;
  padding: 0 2%;
  margin-top: 20px;
  text-align: center;
}

.galleryFrame{
  border-style: solid;
  border-width: 1px;
}

.viewer {
  height: 100%;

  .images {
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 5px;

    .image-wrapper {
      display: inline-block;
      width: calc(33% - 20px);
      margin: 5px 5px 0 5px;

      .image {
        width: 200%;
        cursor: pointer;
        display: inline-block;
      }

    }
  }
}
</style>
