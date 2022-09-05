<template>
  <section class="contact" id="contact">
    <div class="titleFrame">
      <p class="contentSubTitle">Contact</p>
      <p class="contentTitle">마음 전하실 곳</p>
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
    <p class="small">위 사진을 클릭하시면 계좌번호를 확인하실 수 있습니다</p>
    <div class="btnFrame">
      <v-btn @click="sendKakao" class="kakaoBtn" >청첩장 카톡 공유</v-btn>
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
      <input ref="inputAccountNum" type="hidden" :value="contactInfo[contactPerson].accountNum"/>
      <input ref="inputAccountBank" type="hidden" :value="contactInfo[contactPerson].accountBank"/>
      <input ref="inputAccountName" type="hidden" :value="contactInfo[contactPerson].accountName"/>

    </div>
    <div class="none"></div>
    <div class="contactModalPhone">
      <p class="contactModalText">전화번호</p>
      <p class="contactModalText">{{ contactInfo[contactPerson].phone }}</p>
      <div class="contactModalButton">
        <a class="callBtn" :href="`tel:${contactInfo[contactPerson].phone}`">전화하기</a>
      </div>
    </div>
    <div class="horizontalLine"></div>
    <div class="contactModalPhone">
      <p class="contactModalText">계좌번호</p>
      <p class="contactModalText">{{ contactInfo[contactPerson].account }}</p>
      <div class="contactModalButton">
        <button class="copyBtn" @click="handleCopy('account'); showAccountCopyModal = true">복사하기</button>
      </div>
    </div>
  </vue-final-modal>

  <!-- Second modal - account -->
  <vue-final-modal v-model="showAccountCopyModal" classes="modal-container" content-class="modal-copy-content"
                   :fit-parent="true">
    <button class="modal__close" @click="showAccountCopyModal = false;">
      <mdi-close></mdi-close>
    </button>
    <div class="copyModalFrame">
      <p><strong>{{ contactInfo[contactPerson].accountNum }} </strong></p>
      <p>계좌번호가 복사되었습니다.</p>
    <div class="modal__action">
      <v-btn small elevation="1" @click="confirm">확인</v-btn>
<!--      <v-button @click="confirm">확인</v-button>-->
    </div>
    </div>
  </vue-final-modal>

  <!-- Second modal - phone -->
  <vue-final-modal v-model="showPhoneCopyModal" classes="modal-container" content-class="modal-copy-content"
                   :fit-parent="true">
    <button class="modal__close" @click="showPhoneCopyModal = false;">
      <mdi-close></mdi-close>
    </button>
    <div class="copyModalFrame">
      <p><strong>{{ contactInfo[contactPerson].phone }}</strong> 복사되었습니다.</p>
    <div class="modal__action">
      <v-button @click="confirm">확인</v-button>
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
    // 카카오톡 공유기능
    // const { Kakao } = useKakao();
    // init 체크
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init('c4b18e4aa51935b6d7c39216d3dbdc48');
    }

    const sendKakao = () => {
      // 메시지 공유 함수
      window.Kakao.Link.sendScrap({
        requestUrl: 'http://localhost:8080/', // 페이지 url
        templateId: 79968, // 메시지템플릿 번호
      });
    };

    const inputAccountBank = ref(null);
    const inputAccountName = ref(null);
    const inputAccountNum = ref(null);
    const inputPhone = ref(null);

    const handleCopyForIE = (param) => {
      if (param === 'account') {
        // hidden이었던 input의 타입을 text로 변경한다.
        inputAccountNum.value.setAttribute('type', 'text');
        // input을 선택한다.
        inputAccountNum.value.select();
        // 복사를 수행한다.
        document.execCommand('copy');
        // text 타입을 hidden으로 변경한다.
        inputAccountNum.value.setAttribute('type', 'hidden');
        // alert(`계좌번호 '${inputAccountNum.value.value}' 만 복사 되었습니다.\n은행명: '${inputAccountBank.value.value}', 계좌주: '${inputAccountName.value.value}' 는 기억해주세요!`);
      } else if (param === 'phone') {
        // hidden이었던 input의 타입을 text로 변경한다.
        inputPhone.value.setAttribute('type', 'text');
        // input을 선택한다.
        inputPhone.value.select();
        // 복사를 수행한다.
        document.execCommand('copy');
        // text 타입을 hidden으로 변경한다.
        inputPhone.value.setAttribute('type', 'hidden');
        // alert(`'${inputPhone.value.value}'  복사 되었습니다.`);
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
        navigator.clipboard.writeText(inputAccountNum.value.value)
          // .then(() => alert(`계좌번호: '${inputAccountNum.value.value}' 만 복사 되었습니다.\n은행명: '${inputAccountBank.value.value}', 계좌주: '${inputAccountName.value.value}' 는 기억해주세요!`))
          .catch(() => handleCopyForIE(param));
      } else if (param === 'phone') {
        navigator.clipboard.writeText(inputPhone.value.value)
          // .then(() => alert(`'${inputPhone.value.value}'  복사 되었습니다.`))
          .catch(() => handleCopyForIE(param));
      }
    };
    return {
      handleCopy,
      handleCopyForIE,
      inputAccountBank,
      inputAccountName,
      inputAccountNum,
      inputPhone,
      sendKakao,
    };
  },
  methods: {
    confirm() {
      this.showPhoneCopyModal = false;
      this.showAccountCopyModal = false;
      this.showModal = false;
    },
  },
  data() {
    return {
      showModal: false,
      showPhoneCopyModal: false,
      showAccountCopyModal: false,
      contactPerson: 'chanmu',
      contactInfo: {
        chanmu: {
          // eslint-disable-next-line
          url: require(`@/assets/images/chanmu.jpg`),
          name: '신랑 양찬무',
          phone: '010-4912-8773',
          account: '카카오뱅크 3333-01-0949812 (양찬무)',
          accountNum: '3333010949812',
          accountBank: '카카오뱅크',
          accountName: '양찬무',
        },
        c_dad: {
          // eslint-disable-next-line
          url: require(`@/assets/images/c_dad.jpg`),
          name: '아버지 양준희',
          phone: '010-5545-8773',
          account: '은행 123123123 (양준희)',
          accountNum: '123123123',
          accountBank: '농협은행',
          accountName: '양찬무',
        },
        c_mom: {
          // eslint-disable-next-line
          url: require(`@/assets/images/c_mom.jpg`),
          name: '어머니 오옥순',
          phone: '010-5525-8773',
          account: '은행 123123123 (양준희)',
          accountNum: '123123123',
          accountBank: '농협은행',
          accountName: '양찬무',
        },
        hyejin: {
          // eslint-disable-next-line
          url: require(`@/assets/images/hyejin.jpg`),
          name: '신부 박혜진',
          phone: '010-5125-8793',
          account: '은행 123123123 (박혜진)',
          accountNum: '123123123',
          accountBank: '농협은행',
          accountName: '양찬무',
        },
        h_dad: {
          // eslint-disable-next-line
          url: require(`@/assets/images/h_dad.jpg`),
          name: '아버지 박석곤',
          phone: '010-9878-8793',
          account: '경남은행 531210000232 (박석곤)',
          accountNum: '531210000232',
          accountBank: '경남은행',
          accountName: '박석곤',
        },
        h_mom: {
          // eslint-disable-next-line
          url: require(`@/assets/images/h_mom.jpg`),
          name: '어머니 유미영',
          phone: '010-7288-8793',
          account: '단위농협 3561381572913 (유미영)',
          accountNum: '3561381572913',
          accountBank: '단위농협',
          accountName: '유미영',
        },
      },
    };
  },
};
</script>

<style scoped>
#contact {
  position: relative;
  /*background: #9575cd;*/
  height: auto;
  width: 95vw;
  max-width: 550px;
  /*margin: 0;*/
  padding: 0 1%;
  margin-top: 50px;
}
.small{
  margin-top: 40px;
  font-size:0.8rem;
  font-weight: 600;
  color:#666;
  text-align: center;
}
.contactImg { display:inline-block;
  width:45px;
  height:45px;
  border-radius:9999px;
  background-position:center;
  background-size:cover;
  background-repeat: no-repeat;
}
.contactModalPhone{
  display: flex;
  width:100%;
  /*justify-content: space-between;*/
  justify-content: space-between;
  align-items: center;
  /*margin-top:5px;*/
  margin: 5px 0;
}
.contactModalText{
  font-size:0.9rem;
  margin:0;
  /*font-weight: bold;*/
}
.contactModalButton{
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
}
.rightBtn{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:100%;
}
.contactFrame{display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding:0.3rem;
}
.contactModalFrame{display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /*padding:0.5rem;*/
  /*margin-bottom: 8px;*/
}
.copyModalFrame{display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /*padding:0.5rem;*/
  /*margin-bottom: 8px;*/
}
.contactText {
  margin-top:10px;
  font-size: clamp(8px, 3.4vw, 14px);
  font-weight: 600;
  /*margin-bottom: 30px;*/
}

.callBtn {
  height: 1.8rem;
  padding: 5px 10px;
  font-size: 0.7rem;
  border: 0;
  border-radius: 5px;
  background: #22b572;
  display: flex;
  color: #fff;
  font-family: 'Cafe24Oneprettynight';
  align-items: center;
  /*margin: 2px 0;*/
}
.copyBtn {
  height: 1.8rem;
  padding: 5px 10px;
  font-size: 0.7rem;
  border: 0;
  border-radius: 5px;
  background: #FD8E5A;
  display: inline-block;
  color: #fff;
  font-family: 'Cafe24Oneprettynight';
  text-align: center;
  /*margin: 2px 0;*/
}

.copyConfirmBtn{
  font-size: 0.8rem;
  padding: 0px;
}
a {text-decoration: none;}

.btnFrame{
  display: flex;
  justify-content: center;
}
.kakaoBtn{
  border: 0;
  background: #fce445;
  border-radius: 5px;
  font-family: 'Cafe24Oneprettynight';
  font-weight: 800;
  color: #202121;
  padding: 10px 20px;
  /*width:100%;*/
  margin:15px auto;
  margin-bottom:50px;
  text-align:center;
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
  padding: 1.5rem 1rem 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  background: #fff;
  width: 95vw;
  max-width: 500px;
}
::v-deep .modal-copy-content {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
  width: 60vw;
  max-width: 450px;
}
.modal__action {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 1rem 0 0;
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

.horizontalLine{
  width:100%;
  height:1px;
  background:#cecece;
}
.none{
  margin-top:30px;
}
</style>

<style>

</style>
