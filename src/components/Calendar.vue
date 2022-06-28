<template>
  <section class="calendar">
    <div class="box">
      <img :src="require(`@/assets/images/22_October.jpg`)" alt="calendar" class="calendar_img">
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
  width: 85vw; max-width: 550px; display: inline-block;}
.box { display: flex; justify-content: center; align-items: center; }
.box { flex-direction: column;}
.calendar_img { width: 85vw; max-width: 550px;}
</style>
