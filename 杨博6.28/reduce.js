arr = [1, 2, 3];
const bbq = arr.reduce((sum, item) => {
  return sum + item;
});
console.log(bbq);
//////////////////////////////////////////////////
str = "aaabbc";
const res = str.split("").reduce((sum, item) => {
  if (sum[item]) {
    sum[item]++;
  } else {
    sum[item] = 1;
  }
  return sum;
}, {});

console.log(res);
