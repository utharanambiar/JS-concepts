let arr = [1, 2, 3, 4];

Array.prototype.myReduce = function (cb, initialVal) {
  let acc = arguments.length === 1 ? this[0] : initialVal;
  let startIndex = arguments.length === 1 ? 1 : 0;
  for (let i = startIndex; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }
  return acc;
};

console.log(arr.reduce((acc, curr) => acc + curr, 10));

// console.log(
//   [1, 2, 3, 4].reduce(function (acc, val) {
//     return acc + val;
//   }, undefined)
// );
