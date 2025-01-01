let arr = [1, 2, 3, 4];

Array.prototype.myFilter = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    //first arg is this and the rest is the parameter for cb function
    if (cb.call(this, this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};

const ages = [32, 33, 16, 40];
const result = ages.myFilter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

console.log(result);
