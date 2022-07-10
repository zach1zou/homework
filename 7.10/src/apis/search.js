import request from "@/utils/request";

// 获取热门标签接口地址: /search/hot
export const getHotTagsApi = () => {
  return request({
    url: "/search/hot",
  });
};

// 搜索结果列表/cloudsearch
export const searchResultApi = (params) =>
  request({
    url: "/cloudsearch",
    params,
  });
