<template>
  <section id="calendar">
      <img :src="require(`@/assets/images/calendar.png`)" alt="calendar" class="calendar_img">
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
  display: flex;
  justify-content: center;
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
.calendar_img {
  border-radius: 1rem;
  width: 85vw;
  max-width: 450px;
  margin-top: 20px;
  /*margin-bottom: 5px;*/
  /*box-shadow: 3px 1px 0px 3px #666666;}*/
}
</style>
