<template>
  <div>
    <!-- 推荐歌单 -->
    <van-cell class="title" title="推荐歌单" />
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="item in RecommendList" :key="item.id">
        <van-image width="100" height="100" :src="item.picUrl" />
        <p class="music-name van-multi-ellipsis--l2">{{ item.name }}</p>
      </van-grid-item>
    </van-grid>

    <van-cell title="最佳匹配" class="title" />
    <van-cell
      :label="`${item.song.artists[0].name}-${item.name}`"
      :title="item.name"
      v-for="item in NewSongList"
      :key="item.id"
    >
      <template>
        <van-icon color="#000" name="play-circle-o" size="28" />
      </template>
    </van-cell>
  </div>
</template>

<script>
import { getRecommendListApi, getNewSongApi } from "@/apis/home";
export default {
  data() {
    return {
      RecommendList: [],
      NewSongList: [],
    };
  },
  methods: {
    async getRecommendList() {
      try {
        const res = await getRecommendListApi({ limit: 6 });
        this.RecommendList = res.data.result;
      } catch (err) {
        console.log(err);
      }
    },
    async getNewSong() {
      try {
        const res = await getNewSongApi();
        this.NewSongList = res.data.result;
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    this.getRecommendList();
    this.getNewSong();
  },
};
</script>

<style scoped>
/* 标题 */
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}
/* 推荐歌单 - 歌名 */
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
.van-cell__value {
  flex: 0 0 30px;
}
</style>
