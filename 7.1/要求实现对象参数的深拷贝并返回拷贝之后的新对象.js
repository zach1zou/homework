const deepClone = (obj) => {
  let newbbq = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (typeof obj[key] == "object") {
      newbbq[key] = deepClone(obj[key]);
    } else {
      newbbq[key] = obj[key];
    }
  }
  return newbbq;
};

// const deepClone = (obj) => {
//   let newbbq = Array.isArray(obj) ? [] : {};
//   for (let key in obj) {
//     if (typeof obj[key] == "object") {
//       newbbq[key] = deepClone(obj[key]);
//     } else {
//       newbbq[key] = obj[key];
//     }
//   }
//   return newbbq;
// };

let test = {
  name: "张三",
  content: {
    a: 1,
    b: 2,
  },
  fn: function () {
    console.log(123);
  },
  arr: [1, 2, 3],
};

let BBQ = deepClone(test);
BBQ.name = "李四";
console.log(BBQ);
console.log(test);
