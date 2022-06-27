<template>
  <section class="calendar">
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
  name: 'Calendar',
};
</script>

<style scoped>
.calendar { position: relative; left: 50%; transform: translateX(-50%); background: #2e7d32;
  height: 50vh; width: 85vw; max-width: 550px; }
.box { display: flex; justify-content: center; align-items: center; }
.box { flex-direction: column;}
</style>
