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
      <div
        class="commentsClass"
        v-for="comment in currentVideoComments"
        :key="comment.id"
      >
        <div class="commentHead">{{ comment.email }}:</div>
        <div class="commentBody">{{ comment.body }}</div>
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
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding-top: 120px;
  color: white;
  background-color: rgba(18, 18, 18, 1);
}
.commentsClass {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 15%;
  text-align: left;
  padding-bottom: 16px;
}
.commentHead {
  padding-bottom: 5px;
}
</style>