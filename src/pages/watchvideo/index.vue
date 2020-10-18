<template>
  <div>
    <div class="watchVideoMain">
      <div v-if="videoToPlay">
        <video
          vjs-big-play-centered
          :src="videoToPlay.url"
          muted
          controls
          class="video-js"
          data-setup="{}"
        ></video>
      </div>
      <div v-for="comment in currentVideoComments" :key="comment.id">
        {{ comment.from }}:{{ comment.text }}
      </div>
      <div class="error" v-if="errorMessage">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  getVideoById,
  SingleVideo,
  getCommentsForVideo,
  SingleComment,
} from "@/ApiCenter";
@Component({
  components: {},
})
export default class Watchvideo extends Vue {
  videoToPlay: SingleVideo | null = null;
  errorMessage: string | undefined = "";
  currentVideoComments: SingleComment[] = [];
  created() {
    this.getVideoInfo();
  }
  async getVideoInfo() {
    const response = await getVideoById(parseInt(this.$route.params.id));
    if (response) {
      this.videoToPlay = response;
      this.initializeComments();
    } else {
      this.errorMessage = "Video not found";
    }
  }
  async initializeComments() {
    if (this.videoToPlay) {
      const comments = await getCommentsForVideo(this.videoToPlay.id);
      this.currentVideoComments = comments;
    }
  }
}
</script>

<style scoped>
.watchVideoMain {
  display: flex;
  justify-content: center;
  align-content: center;
  padding-top: 120px;
  color: white;
}
</style>