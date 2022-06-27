<template>
  <section class="closing">
    <div class="box">
      <p>감사합니다</p>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Closing',
};
</script>

<style scoped>
.closing { position: relative; left: 50%; transform: translateX(-50%); background: #e57373;
  height: 50vh; width: 85vw; max-width: 550px; }
.box { display: flex; justify-content: center; align-items: center; }
.box { flex-direction: column;}
</style>
