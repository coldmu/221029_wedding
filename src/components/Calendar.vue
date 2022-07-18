<template>
  <section id="calendar">
      <img :src="require(`@/assets/images/22_October.jpg`)" alt="calendar" class="calendar_img">
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Calendar',
};
</script>

<style scoped>
#calendar {
  position: relative;
  /*background: #2e7d32;*/
  height: auto;
  width: 95vw;
  max-width: 550px;
  /*padding: 0 2%;*/
  padding: 0 1%;
  margin-top: 60px;
  overflow: hidden;
}
/*.box { display: flex; justify-content: center; align-items: center; }*/
/*.box { flex-direction: column;}*/
.calendar_img { width: 95vw; max-width: 550px;}
</style>
