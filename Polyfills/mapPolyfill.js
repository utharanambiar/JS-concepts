let arr = [1, 2, 3, 4];

Array.prototype.myMap = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i], i, this));
  }
  return res;
};

let res = arr.myMap((item) => item * 2);
console.log(res);
