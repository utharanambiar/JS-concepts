// here take multiple promises and return array of promises if all succeed else throw error
const myPromise = (timer, val, promiseVal) => {
  return new Promise((res, rej) => {
    if (val) {
      setTimeout(() => {
        res(`Resolved ${promiseVal}`);
      }, timer);
    } else {
      rej(`REJECTED! ${promiseVal}`);
    }
  });
};

Function.prototype.myPromiseAll = function (arr) {
  const promise = new Promise((resolve, reject) => {
    let result = [],
      total = 0;
    arr.forEach((promise, index) => {
      promise
        .then((res) => {
          result[index] = res;
          total++;
          if (total === arr.length) {
            resolve(result);
          }
        })
        .catch((err) => reject(err));
    });
  });
  return promise;
};

let p1 = myPromise(3000, true, 1);
let p2 = myPromise(2000, false, 2);

Promise.myPromiseAll([p1, p2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//Promise.all takes an iterable (usually, an array of promises) and returns a new promise.
