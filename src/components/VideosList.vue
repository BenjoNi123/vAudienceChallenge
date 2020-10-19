<template>
  <div class="home">
    <div class="title">
      <h1>Most Viewed Streams</h1>
      <form @submit.prevent="filterVideos">
        <input v-model="filterInput" type="text" />
        <button type="submit">Filter Videos</button>
      </form>
    </div>
    <div class="content">
      <div
        @click="openPaymentModal(stream)"
        class="loopDiv"
        v-for="stream in streams"
        :key="stream.id"
      >
        <img :src="stream.poster" />
        <span>{{ stream.title }}</span>
      </div>
      <div v-if="isModalOpened">
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div style="background-color: #f9f9f9" class="modal-content">
                  <div class="modal-header">
                    <h2 class="modal-title">Payment Options</h2>
                    <div v-if="showError">
                      <b>You need to select a payment option</b>
                    </div>
                  </div>
                  <div class="modal-body">
                    <div class="form-group">
                      <div class="payment-group">
                        <div v-for="option in paymentOptions" :key="option.id">
                          <div class="imgDiv">
                            <img width="100px" :src="getIcon(option.icon)" />
                          </div>
                          <input
                            type="radio"
                            :id="option.value"
                            :value="option.value"
                            v-model="selectedPaymentOption"
                          />
                        </div>
                      </div>
                      <div class="vidInfo">
                        <span class="showVideo"
                          >You have selected:
                          <span style="color: rgb(255 85 0)">
                            {{ currentVideoForModal.title }}</span
                          ></span
                        >
                        <span class="showPrice"
                          >Price: {{ currentVideoForModal.price }}€</span
                        >
                      </div>
                      <div class="modal-buttons-div">
                        <button
                          style="background-color: red"
                          class="modal-buttons"
                          @click="noPay()"
                        >
                          No Pay
                        </button>
                        <button
                          style="background-color: cyan"
                          class="modal-buttons"
                          @click="paymentAccept()"
                        >
                          Pay
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { SingleVideo, getVideos } from "@/ApiCenter";

interface SinglePaymentOption {
  id: number;
  value: string;
  title: string;
  icon: string;
}

@Component({})
export default class VideosList extends Vue {
  paymentOptions: SinglePaymentOption[] = [
    { id: 1, value: "mastercard", title: "MasterCard", icon: "mastercard" },
    { id: 2, value: "paypal", title: "Paypal", icon: "paypal" },
    { id: 3, value: "visa", title: "Visa", icon: "visa" },
    { id: 4, value: "maestro", title: "Maestro", icon: "maestro" },
    { id: 5, value: "skrill", title: "Skrill", icon: "skrill" },
    { id: 6, value: "westernunion", title: "WesternUnion", icon: "wu" },
  ];
  isModalOpened = false;
  selectedPaymentOption: string | undefined = "";
  currentVideoForModal: SingleVideo | undefined;
  streams: SingleVideo[] = [];
  filterInput = "";
  showError = false;

  async filterVideos() {
    this.streams = await getVideos(this.filterInput);
  }
  noPay() {
    this.isModalOpened = false;
    this.selectedPaymentOption = "";
    this.showError = false;
  }
  getIcon(icon: string): string {
    return require("@/assets/PaymentIcons/" + icon + ".png");
  }

  openPaymentModal(selectedVideo: SingleVideo) {
    this.currentVideoForModal = selectedVideo;
    this.isModalOpened = true;
  }

  paymentAccept() {
    if (this.currentPaymentObject) {
      this.$router.push("/watchvideo/" + this.currentPaymentObject.video.id);
    }
    this.selectedPaymentOption = "";
    this.isModalOpened = false;
  }
  get currentPaymentObject() {
    this.showError = false;
    if (this.currentVideoForModal && this.selectedPaymentOption) {
      return {
        video: this.currentVideoForModal,
        paymentOption: this.selectedPaymentOption,
      };
    } else this.showError = true;
    return false;
  }
  async created() {
    this.streams = await getVideos();
  }
}
</script>
<style scoped>
.home {
  background-color: rgba(18, 18, 18, 1);
  height: 95vh;
  display: flex;
  flex-direction: column;
}
.title {
  margin-top: 100px;
  color: white;
  justify-content: space-around;
}
.content {
  background-color: rgba(18, 18, 18, 1);
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.loopDiv {
  display: flex;
  flex-direction: column;
  margin-bottom: 3%;
  cursor: pointer;
}

.loopDiv span {
  padding-top: 3%;
  color: white;
  font-weight: 700;
}
.video-js {
  height: 300px;
  max-width: 400px;
  min-width: 200px;
  width: 100%;
}

.modal-mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-dialog {
  display: flex;
  justify-content: space-around;
}
.modal-content {
  display: flex;
  flex-direction: column;
  min-height: 350px;
  height: 100%;
  background-color: #f9f9f9;
  opacity: 0.9;
}
.modal-header {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.modal-title {
  padding-bottom: 20px;
  border-bottom: solid 1px lightgrey;
}
.modal-body {
  display: flex;
  flex-grow: 1;
}
.video-js .vjs-tech {
  pointer-events: none;
}

.modal-buttons-div {
  display: flex;
  justify-content: space-evenly;
}
.modal-buttons {
  width: 100%;
  height: 35px;
  border-style: none;
}
.payment-group {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.closeButton {
  width: 15%;
  margin-left: 85%;
  border: none;
  background-color: red;
  border-radius: 0 0 0 8px;
}
.form-group {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.vidInfo {
  display: flex;
  padding: 0 20px;
}
.showVideo {
  display: flex;
  flex-grow: 1;
  align-items: center;
}
.showPrice {
  display: flex;
  flex-grow: 1;
  height: 40px;
  background-color: rgb(255 85 0);
  border-radius: 8px;
  align-items: center;
  justify-content: center;
}
</style>