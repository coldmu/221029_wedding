<template>
  <section class="mainGallery">
  <div class="box">
    <p>Main Gallery</p>
  </div>
  </section>
</template>

<script>
export default {
  name: 'MainGallery',
};
</script>

<style scoped>
.mainGallery { position: relative; left: 50%; transform: translateX(-50%); background: #e6ee9c;
  height: 50vh; width: 85vw; max-width: 550px; }
.box { display: flex; justify-content: center; align-items: center; }
.box { flex-direction: column;}
</style>
