<template>
  <section class="contact" id="contact">
    <div class="titleFrame">
      <p class="contentSubTitle">Contact</p>
      <p class="contentTitle">연락처 확인하기</p>
    </div>
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

  <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content"
                   :fit-parent="true">
    <button class="modal__close" @click="showModal = false;">
      <mdi-close></mdi-close>
    </button>
    <div class="contactModalFrame">
      <img :src="contactInfo[contactPerson].url" alt="1" class="contactImg">
      <span class="contactText">{{ contactInfo[contactPerson].name }}</span>

      <input ref="inputPhone" type="hidden" :value="contactInfo[contactPerson].phone"/>
      <input ref="inputAccount" type="hidden" :value="contactInfo[contactPerson].account"/>
      <input ref="inputAccountNum" type="hidden" :value="contactInfo[contactPerson].accountNum"/>

    </div>
    <div class="contactModalPhone">
      <p class="contactModalText">전화번호</p>
      <p class="contactModalText">{{ contactInfo[contactPerson].phone }}</p>
      <div class="contactModalCopy">
        <button class="kakaoBtn" @click="handleCopy('phone')">카카오톡 채팅하기</button>
        <button class="copyBtn" @click="handleCopy('phone')">전화번호 복사하기</button>
      </div>
    </div>
    <div class="contactModalPhone">
      <p class="contactModalText">계좌번호</p>
      <p class="contactModalText">{{ contactInfo[contactPerson].account }}</p>
      <div class="contactModalCopy">
        <button class="copyBtn" @click="handleCopy('account')">계좌전체 복사하기</button>
        <button class="copyBtn" @click="handleCopy('accountNum')">계좌번호 복사하기</button>
      </div>
    </div>
  </vue-final-modal>
</template>

<script>
import { ref } from 'vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Contact',
  setup() {
    const inputAccount = ref(null);
    const inputAccountNum = ref(null);
    const inputPhone = ref(null);

    const handleCopyForIE = (param) => {
      if (param === 'account') {
        // hidden이었던 input의 타입을 text로 변경한다.
        inputAccount.value.setAttribute('type', 'text');
        // input을 선택한다.
        inputAccount.value.select();
        // 복사를 수행한다.
        document.execCommand('copy');
        // text 타입을 hidden으로 변경한다.
        inputAccount.value.setAttribute('type', 'hidden');
        alert(`'${inputAccount.value.value}'  복사 되었습니다.`);
      } else if (param === 'accountNum') {
        // hidden이었던 input의 타입을 text로 변경한다.
        inputAccountNum.value.setAttribute('type', 'text');
        // input을 선택한다.
        inputAccountNum.value.select();
        // 복사를 수행한다.
        document.execCommand('copy');
        // text 타입을 hidden으로 변경한다.
        inputAccountNum.value.setAttribute('type', 'hidden');
        alert(`'${inputAccountNum.value.value}'  복사 되었습니다.`);
      } else if (param === 'phone') {
        // hidden이었던 input의 타입을 text로 변경한다.
        inputPhone.value.setAttribute('type', 'text');
        // input을 선택한다.
        inputPhone.value.select();
        // 복사를 수행한다.
        document.execCommand('copy');
        // text 타입을 hidden으로 변경한다.
        inputPhone.value.setAttribute('type', 'hidden');
        alert(`'${inputPhone.value.value}'  복사 되었습니다.`);
      }
    };

    // eslint-disable-next-line
    const handleCopy = (param) => {
      // if (inputEl.value === null) { return; }
      // clipboard를 지원하지 않는다면,
      // execCommand를 통해 복사할 수 있도록 한다.
      if (!navigator.clipboard) {
        handleCopyForIE(param);
        return;
      }
      if (param === 'account') {
        navigator.clipboard.writeText(inputAccount.value.value)
          .then(() => alert(`'${inputAccount.value.value}'  복사 되었습니다.`))
          .catch(() => handleCopyForIE(param));
      } else if (param === 'accountNum') {
        navigator.clipboard.writeText(inputAccountNum.value.value)
          .then(() => alert(`'${inputAccountNum.value.value}'  복사 되었습니다.`))
          .catch(() => handleCopyForIE(param));
      } else if (param === 'phone') {
        navigator.clipboard.writeText(inputPhone.value.value)
          .then(() => alert(`'${inputPhone.value.value}'  복사 되었습니다.`))
          .catch(() => handleCopyForIE(param));
      }
    };
    return {
      handleCopy,
      handleCopyForIE,
      inputAccount,
      inputAccountNum,
      inputPhone,
    };
  },
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
          accountNum: '123123123',
        },
        c_dad: {
          // eslint-disable-next-line
          url: require(`@/assets/images/c_dad.png`),
          name: '아버지 양준희',
          phone: '01000000000',
          account: '은행 123123123 (양준희)',
          accountNum: '123123123',
        },
        c_mom: {
          // eslint-disable-next-line
          url: require(`@/assets/images/c_mom.png`),
          name: '어머니 오옥순',
          phone: '01000000000',
          account: '은행 123123123 (양준희)',
          accountNum: '123123123',
        },
        hyejin: {
          // eslint-disable-next-line
          url: require(`@/assets/images/hyejin.png`),
          name: '신부 박혜진',
          phone: '01000000000',
          account: '은행 123123123 (박혜진)',
          accountNum: '123123123',
        },
        h_dad: {
          // eslint-disable-next-line
          url: require(`@/assets/images/h_dad.png`),
          name: '아버지 박석곤',
          phone: '01000000000',
          account: '은행 123123123 (박석곤)',
          accountNum: '123123123',
        },
        h_mom: {
          // eslint-disable-next-line
          url: require(`@/assets/images/h_mom.png`),
          name: '어머니 유미영',
          phone: '01000000000',
          account: '은행 123123123 (박석곤)',
          accountNum: '123123123',
        },
      },
    };
  },
};
</script>

<style scoped>
.contact {
  position: relative;
  /*background: #9575cd;*/
  height: auto;
  width: 85vw;
  max-width: 550px;
  /*margin: 0;*/
  padding: 0 2%;
  margin-top: 20px;
}
.contactImg { display:inline-block;
  width:40px;
  height:40px;
  border-radius:9999px;
  background-position:center;
  background-size:cover;
  background-repeat: no-repeat;
}
.contactModalPhone{
  display: flex;
  width:100%;
  justify-content: space-between;
  align-items: center;
  margin-top:5px;
}
.contactModalText{
  font-size:0.9rem;
  margin:0;
}
.contactModalCopy{
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  padding:0.5rem;
}
.contactModalFrame{display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding:0.5rem;
  margin-bottom: 8px;
}
.contactText {margin-top:10px;
  font-size:0.7rem;}

.copyBtn {padding: 5px 10px;
  font-size: 0.7rem;
  border: 0;
  border-radius: 5px;
  background: #cecece;
  display: inline-block;
  color: #fff;
  font-family: 'Cafe24Oneprettynight';
  text-align: left;
  margin-top: 3px;
}
.kakaoBtn{
  padding: 5px 10px;
  font-size: 0.7rem;
  border: 0;
  border-radius: 5px;
  display: inline-block;
  text-align: left;
  margin-top: 3px;
  background: #fce445;
  font-family: 'Cafe24Oneprettynight';
  color: #202121;
}
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
  width: 75vw;
  max-width: 500px;
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

<style>
.dark-mode div::v-deep .modal-content {
border-color: #2d3748;
/*background-color: #1a202c;*/
background-color: #123456;
}
</style>
