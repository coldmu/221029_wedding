<template>
  <section class="mainGallery">
  <div class="box">
    <p>양준희 오옥순 의 아들 양찬무</p>
    <p>박석곤 유미영 의 딸 박혜진</p>
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
