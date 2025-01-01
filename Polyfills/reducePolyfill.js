let arr = [1, 2, 3, 4];

Array.prototype.myReduce = function (cb, initialVal) {
  let acc = initialVal;
  for (let i = 0; i < this.length; i++) {
    if (acc !== undefined) {
      acc = cb.call(this, acc, this[i], i, this);
    } else {
      acc = this[i];
    }
  }
  return acc;
};

console.log(arr.myReduce((prev, curr) => prev + curr));
