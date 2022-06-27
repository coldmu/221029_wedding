<template>
  <section class="contact">
    <div class="box">
      <p>연락처</p>
    </div>
    <br>
    <div class="box">
      <p>신랑 양찬무<br>
        신부 박혜진<br>
        아버지 양준희<br>
        어머니 오옥순<br>
        아버지 박석곤<br>
        어머니 유미영<br>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Contact',
};
</script>

<style scoped>
.contact { position: relative; left: 50%; transform: translateX(-50%); background: #607d8b;
  height: 50vh; width: 85vw; max-width: 550px; }
.box { display: flex; justify-content: center; align-items: center; }
.box { flex-direction: column;}
</style>
