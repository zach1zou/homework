let str = "http://www.baidu.com?name=zhangsan&age=18&sex=nan#";
let index = str.indexOf("?");
let endIndex = str.indexOf("#");
let res = str.substring(index + 1, endIndex);

res = res.split("&");
const add = {};
let res1 = res.forEach((item, index) => {
  let gg = item.split("=");
  add[gg[0]] = gg[1];
});
console.log(add);
