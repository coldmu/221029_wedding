<template>
  <section class="contact">
    <div class="contactBtn">
    <div class="leftBtn">
    <div class="upperBtn">
    <v-button @click="showModal = true; contactPerson = 'chanmu'" class="contactFrame">
      <img :src="contactInfo.chanmu.url" alt="1" class="contactImg c_img">
      <p class="contactText">{{contactInfo.chanmu.name}}</p>
    </v-button>
    </div>
    <div class="bottomBtn">
    <v-button @click="showModal = true; contactPerson = 'c_dad'" class="contactFrame">
      <img :src="contactInfo.c_dad.url" alt="1" class="contactImg cdad_img">
      <p class="contactText">{{contactInfo.c_dad.name}}</p>
    </v-button>
    <v-button @click="showModal = true; contactPerson = 'c_mom'" class="contactFrame">
      <img :src="contactInfo.c_mom.url" alt="1" class="contactImg cmom_img">
      <p class="contactText">{{contactInfo.c_mom.name}}</p>
    </v-button>
    </div>
</div>

    <div class="rightBtn">
    <div class="upperBtn">
    <v-button @click="showModal = true; contactPerson = 'hyejin'" class="contactFrame">
      <img :src="contactInfo.hyejin.url" alt="1" class="contactImg h_img">
      <p class="contactText">{{contactInfo.hyejin.name}}</p>
    </v-button>
    </div>
    <div class="bottomBtn">
    <v-button @click="showModal = true; contactPerson = 'h_dad'" class="contactFrame">
      <img :src="contactInfo.h_dad.url" alt="1" class="contactImg">
      <p class="contactText">{{contactInfo.h_dad.name}}</p>
    </v-button>
    <v-button @click="showModal = true; contactPerson = 'h_mom'" class="contactFrame">
      <img :src="contactInfo.h_mom.url" alt="1" class="contactImg">
      <p class="contactText">{{contactInfo.h_mom.name}}</p>
    </v-button>
    </div>
    </div>
    </div>
  </section>

  <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content" :fit-parent="false">
    <button class="modal__close" @click="showModal = false;">
      <mdi-close></mdi-close>
    </button>
    <div class="contactFrame">
    <img :src="contactInfo[contactPerson].url" alt="1" class="contactImg">
    <span class="contactText">{{contactInfo[contactPerson].name}}</span>
    </div>
    <div class="contactModalPhone">
      <p>전화번호</p>
      <p>{{contactInfo[contactPerson].phone}}</p>
    </div>
  </vue-final-modal>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Contact',
  data() {
    return {
      showModal: false,
      contactPerson: 'chanmu',
      contactInfo: {
        chanmu: {
          // eslint-disable-next-line
          url: require(`@/assets/images/chanmu.png`),
          name: '신랑 양찬무',
          phone: '01000000000',
          account: '은행 123123123 (양찬무)',
        },
        c_dad: {
          // eslint-disable-next-line
          url: require(`@/assets/images/c_dad.png`),
          name: '아버지 양준희',
          phone: '01000000000',
          account: '은행 123123123 (양준희)',
        },
        c_mom: {
          // eslint-disable-next-line
          url: require(`@/assets/images/c_mom.png`),
          name: '어머니 오옥순',
          phone: '01000000000',
          account: '은행 123123123 (양준희)',
        },
        hyejin: {
          // eslint-disable-next-line
          url: require(`@/assets/images/hyejin.png`),
          name: '신부 박혜진',
          phone: '01000000000',
          account: '은행 123123123 (박혜진)',
        },
        h_dad: {
          // eslint-disable-next-line
          url: require(`@/assets/images/h_dad.png`),
          name: '아버지 박석곤',
          phone: '01000000000',
          account: '은행 123123123 (박석곤)',
        },
        h_mom: {
          // eslint-disable-next-line
          url: require(`@/assets/images/h_mom.png`),
          name: '어머니 유미영',
          phone: '01000000000',
          account: '은행 123123123 (박석곤)',
        },
      },
    };
  },
};
</script>

<style scoped>
.contact { position: relative; left: 50%; transform: translateX(-50%); background: #9575cd;
  height: 50vh; width: 85vw; max-width: 550px; }
.contactImg { display:inline-block;
  width:40px;
  height:40px;
  border-radius:9999px;
  background-position:center;
  background-size:cover;
  background-repeat: no-repeat; }
.contactModalPhone{
  display:flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.upperBtn {display:flex;
  justify-content: center;
  align-items: center;}
.bottomBtn {display:flex;
  justify-content: center;
  align-items: center;}
.contactBtn {
  display:flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.leftBtn {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:100%;
  margin-left:5%;
}
.rightBtn{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:100%;
  margin-right:5%;
}
.contactFrame{display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding:0.5rem;}

.contactText{margin-top:10px;
  font-size:0.7rem;}
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
  width: 500px;
}
.modal__title {
  margin: 0 2rem 0 0;
  font-size: 1.5rem;
  font-weight: 700;
}
.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
</style>

<style scoped>
.dark-mode div::v-deep .modal-content {
  border-color: #2d3748;
  background-color: #1a202c;
}
</style>
