<template>
  <section class="closing">
    <div class="titleFrame">
      <p class="contentSubTitle">Thank You</p>
      <p class="contentTitle">감사합니다</p>
    </div>
    <div>감사합니다</div>
    <br><br><br><br>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Closing',
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style scoped>
.closing {
  position: relative;
  /*background: #e57373;*/
  height: auto;
  width: 85vw;
  max-width: 550px;
  padding: 0 2%;
  margin-top: 20px;
}
</style>
