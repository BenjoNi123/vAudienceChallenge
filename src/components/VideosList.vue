<template>
  <div class="home">
    <div class="title">
      <h1>Most Viewed Streams</h1>
    </div>
    <div class="content">
      <div
        @click="
          openPaymentModal(
            stream.id,
            stream.title,
            stream.url,
            stream.poster,
            stream.price
          )
        "
        class="loopDiv"
        v-for="stream in streams"
        :key="stream.id"
      >
        <video
          vjs-big-play-centered
          :src="stream.url"
          :poster="stream.poster"
          controls:disabled
          muted
          class="video-js"
          data-setup="{}"
        >
          <source src="video.url" type="video/webm" />
        </video>
        <span>{{ stream.title }}</span>
      </div>
      <div v-if="isModalOpened">
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div style="background-color: #f9f9f9" class="modal-content">
                  <div class="modal-header">
                    <button @click="isModalOpened = false" class="closeButton">
                      X
                    </button>
                    <h2 class="modal-title">Payment Options</h2>
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
                          @click="isModalOpened = false"
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
interface SingleVideo {
  id: number;
  title: string;
  url: string;
  poster: string;
  price: number;
}

interface SinglePaymentOption {
  id: number;
  value: string;
  title: string;
  icon: string;
}

interface SelectedPaymentOption {
  video: SingleVideo;
  paymentOption: string;
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
  streams: SingleVideo[] = [
    {
      id: 1,
      title: "stream1",
      url: "//vjs.zencdn.net/v/oceans.webm",
      poster: "https://picsum.photos/400/251",
      price: this.generateRandomPrice(),
    },
    {
      id: 2,
      title: "stream2",
      url: "//vjs.zencdn.net/v/oceans.webm",
      poster: "https://picsum.photos/400/252",
      price: this.generateRandomPrice(),
    },
    {
      id: 3,
      title: "stream3",
      url: "//vjs.zencdn.net/v/oceans.webm",
      poster: "https://picsum.photos/400/253",
      price: this.generateRandomPrice(),
    },
    {
      id: 4,
      title: "stream4",
      url: "//vjs.zencdn.net/v/oceans.webm",
      poster: "https://picsum.photos/400/254",
      price: this.generateRandomPrice(),
    },
    {
      id: 5,
      title: "stream5",
      url: "//vjs.zencdn.net/v/oceans.webm",
      poster: "https://picsum.photos/400/255",
      price: this.generateRandomPrice(),
    },
    {
      id: 6,
      title: "stream6",
      url: "//vjs.zencdn.net/v/oceans.webm",
      poster: "https://picsum.photos/400/256",
      price: this.generateRandomPrice(),
    },
    {
      id: 7,
      title: "stream7",
      url: "//vjs.zencdn.net/v/oceans.webm",
      poster: "https://picsum.photos/400/257",
      price: this.generateRandomPrice(),
    },
    {
      id: 8,
      title: "stream8",
      url: "//vjs.zencdn.net/v/oceans.webm",
      poster: "https://picsum.photos/400/258",
      price: this.generateRandomPrice(),
    },
    {
      id: 9,
      title: "stream9",
      url: "//vjs.zencdn.net/v/oceans.webm",
      poster: "https://picsum.photos/400/259",
      price: this.generateRandomPrice(),
    },
    {
      id: 10,
      title: "stream10",
      url: "//vjs.zencdn.net/v/oceans.webm",
      poster: "https://picsum.photos/400/260",
      price: this.generateRandomPrice(),
    },
  ];
  isModalOpened = false;
  selectedPaymentOption: string | undefined = "";
  currentVideoForModal: SingleVideo | undefined;

  getIcon(icon: string): string {
    return require("@/assets/PaymentIcons/" + icon + ".png");
  }

  generateRandomPrice() {
    return Math.ceil(Math.random() * 101);
  }

  openPaymentModal(selectedVideo: SingleVideo) {
    this.currentVideoForModal = selectedVideo;
    this.isModalOpened = true;
  }

  paymentAccept() {
    console.log(this.currentPaymentObject);

    this.isModalOpened = false;
  }
  get currentPaymentObject(): SelectedPaymentOption | undefined {
    if (this.currentVideoForModal && this.selectedPaymentOption) {
      return {
        video: this.currentVideoForModal,
        paymentOption: this.selectedPaymentOption,
      };
    }
    return undefined;
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