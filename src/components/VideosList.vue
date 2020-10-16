<template>
  <div class="home">
    <div class="title">
      <h1>welcome to home</h1>
    </div>
    <div class="content">
      <div @click="clickTest(stream.id, stream.title)" class="loopDiv" v-for="stream in streams" :key="stream.id">
        <video vjs-big-play-centered  :src="stream.url" :poster="stream.poster" controls:disabled muted class="video-js" data-setup='{}'> <source src= video.url  type="video/webm"> </video>
        <span>{{stream.title}}</span>
    </div>
    <div v-if="myModal">
        <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-dialog">
                    <div style="background-color: #f9f9f9" class="modal-content">
                        <div class="modal-header">
                         <button @click="myModal=false" class="close">X</button>       
                        <h4 class="modal-title">Payment Options</h4>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <div class="payment-group">
                                    <div v-for="option in paymentOptions" :key="option.id">
                                        <img :src="getIcon(option.icon)">
                                        <input type="radio" :id="option.value" :value="option.value" v-model="picked"> 
                                    </div>
                                </div>
                                <label>You have selected the {{currentVideo.title}} Video</label>
                                <div class="modal-buttons-div">
                                  <button style="background-color:red"  class="modal-buttons">No Pay</button>
                                  <button style="background-color:cyan" class="modal-buttons">Pay</button>
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
import { Component, Vue } from 'vue-property-decorator';

@Component({

})
export default class VideosList extends Vue {
    paymentOptions: {id: number; value: string; title: string; icon: string}[]=[
        {id: 1, value: "mastercard", title: "MasterCard", icon: 'mastercard'},
        {id: 2, value: "paypal", title: "Paypal", icon: 'paypal'},
        {id: 3, value: "visa", title: "Visa", icon: 'visa'},
        {id: 4, value: "maestro", title: "Maestro", icon: 'maestro'},
        {id: 5, value: "skrill", title: "Skrill", icon: 'skrill'},
        {id: 6, value: "westernunion", title: "WesternUnion", icon: 'wu'},
        
    ]
    streams: { id: number; title: string; url: string; poster: string }[]= [
    {id: 1,title: "video1", url: "//vjs.zencdn.net/v/oceans.webm", poster: "https://picsum.photos/400/251"},
    {id: 2,title: "video2", url: "//vjs.zencdn.net/v/oceans.webm", poster: "https://picsum.photos/400/252"},
    {id: 3,title: "video3", url: "//vjs.zencdn.net/v/oceans.webm", poster: "https://picsum.photos/400/253"},
    {id: 4,title: "video4", url: "//vjs.zencdn.net/v/oceans.webm", poster: "https://picsum.photos/400/254"},
    {id: 5,title: "video5", url: "//vjs.zencdn.net/v/oceans.webm", poster: "https://picsum.photos/400/255"},
    {id: 6,title: "video6", url: "//vjs.zencdn.net/v/oceans.webm", poster: "https://picsum.photos/400/256"},
    {id: 7,title: "video7", url: "//vjs.zencdn.net/v/oceans.webm", poster: "https://picsum.photos/400/257"},
    {id: 8,title: "video8", url: "//vjs.zencdn.net/v/oceans.webm", poster: "https://picsum.photos/400/258"},
    {id: 9,title: "video9", url: "//vjs.zencdn.net/v/oceans.webm", poster: "https://picsum.photos/400/259"},
    {id: 10,title: "video10", url: "//vjs.zencdn.net/v/oceans.webm", poster: "https://picsum.photos/400/260"}
  ] ;
  myModal= false;
 picked="";
 currentVideo={};

getIcon(icon: string): string{
  return require('@/assets/PaymentIcons/'+ icon + '.png')
}

 clickTest(id: number, title: string){
     this.currentVideo = {id, title}
     this.myModal=true
 }
}
</script>
<style scoped>
  .home{
   
    height: 95vh;
    display: flex;
    flex-direction: column;
  }
  .title{
    margin-top: 250px;
    color: white;
    justify-content: space-around;
  }
  .content{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .loopDiv{
    display: flex;
    flex-direction: column;
    margin-bottom: 3%;
  }
  
  .loopDiv span{
    padding-top: 3%;
    color: white;
    font-weight: 700;
  }
  .video-js{
      height: 300px; 
      width: 400px
  }

.modal-mask{
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: table;
    transition: opacity 0.3s ease

}
.modal-wrapper{
    display: table-cell;
    vertical-align: middle;
}
.modal-dialog{
    display: flex;
    justify-content: space-around;
}
.modal-content{
    width: 650px;
    height: 350px;
}
.video-js .vjs-tech{ pointer-events: none; }

.modal-buttons-div{
    display: flex;
    justify-content: space-evenly;
}
.modal-buttons{
    width: 100%;
    height: 35px;
    border-style: none;
}
.payment-group{
    display: flex;
    justify-content: space-evenly;
}
</style>