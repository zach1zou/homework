<script>
// instanceof用法
// 1、检测某个对象是不是另一个对象的实例
// 2、判断继承关系中是不是父类
// 返回 boolean 的数据类型
let arr = [1, 2, 3, 4, 5];
let obj = {
  name: "sweetGirl",
  age: 18,
  sex: "女",
};
window.onload = function () {
  var str = "javascript";
  console.log(str instanceof String); //false
  console.log(String instanceof Object); //true
  console.log(Number instanceof Number); //false
  console.log(Number instanceof Object); //true
  function fn() {
    return true;
  }
  console.log(fn instanceof Function); //true
};
console.log(arr instanceof Array); //true
console.log(arr instanceof Object); //true
console.log(obj instanceof Object); //true

export default {};
</script>