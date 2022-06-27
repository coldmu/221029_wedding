<template>
  <section class="opening">
    <div class="box">
      <p>Wedding Invitation</p>
      <p>초대합니다</p>
    </div>
    <br>
    <div class="box">
      <p>결혼식 안내문구<br>
        결혼식 안내문구<br>
        결혼식 안내문구<br>
        결혼식 안내문구<br></p>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Opening',
};
</script>

<style scoped>
.opening { position: relative; left: 50%; transform: translateX(-50%); background: #26a69a;
  height: 50vh; width: 85vw; max-width: 550px; }
.box { display: flex; justify-content: center; align-items: center; }
.box { flex-direction: column;}
</style>
