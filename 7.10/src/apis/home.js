import request from "@/utils/request";

// 接口地址: /personalized
export const getRecommendListApi = (params) => {
  return request({
    url: "/personalized",
    params,
  });
};

// 接口: **'/personalized/newsong'
export const getNewSongApi = (params) => {
  return request({
    url: "/personalized/newsong",
    params,
  });
};
