<template>
  <div>
    <van-search
      shape="round"
      placeholder="请输入搜索关键词"
      v-model.trim="value"
      @input="inputFn"
    />
    <template v-if="searchList.length == 0 || value.length == 0">
      <van-cell title="热门搜索" />
      <div style="padding: 10px 16px">
        <van-tag
          style="margin-right: 10px"
          color="red"
          size="large"
          plain
          round
          type="primary"
          v-for="item in hotsTags"
          :key="item.id"
          @click="clickTitle(item.first)"
        >
          {{ item.first }}
        </van-tag>
      </div>
    </template>
    <template v-else>
      <van-cell title="最佳匹配" />

      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          v-for="item in searchList"
          :key="item.id"
          :title="item.name"
          :label="`${item.ar[0].name}-${item.name}`"
        />
      </van-list>
    </template>
  </div>
</template>
<script>
import { getHotTagsApi, searchResultApi } from "@/apis/search";
export default {
  created() {
    this.getHotTags();
  },
  data() {
    return {
      hotsTags: [],
      searchList: [],
      value: "",
      loading: false,
      finished: false,
      page: 1,
    };
  },
  methods: {
    async getHotTags() {
      try {
        const res = await getHotTagsApi();
        this.hotsTags = res.data.result.hots;
      } catch (err) {
        console.log(err);
      }
    },
    async searchResult() {
      try {
        const res = await searchResultApi({
          keywords: this.value,
          offset: (this.page - 1) * 20,
          limit: 20,
        });
        this.searchList = res.data.result.songs || [];
      } catch (err) {
        console.log(err);
      }
    },
    clickTitle(val) {
      this.value = val;
      this.searchResult();
    },
    async onLoad() {
      this.page++;
      try {
        const res = await searchResultApi({
          keywords: this.value,
          offset: (this.page - 1) * 20,
          limit: 20,
        });
        this.searchList = [...this.searchList, ...res.data.result.songs];
        this.loading = false;
      } catch (err) {
        console.log(err);
      }
    },
    inputFn() {
      if (this.value.length <= 0) {
        this.searchList = [];
        return;
      }
      this.searchResult();
    },
  },
};
</script>
<style scoped>
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}

/* 给单元格设置底部边框 */
.van-cell {
  border-bottom: 1px solid lightgray;
}
</style>
