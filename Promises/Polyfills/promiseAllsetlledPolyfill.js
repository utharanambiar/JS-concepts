// here take multiple promises and return array of promises with success or failiure
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

Promise.myPromiseAllSetlled = function (arr) {
  const promise = new Promise((resolve) => {
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
        .catch((rej) => {
          result[index] = rej;
          total++;
          if (total === arr.length) {
            resolve(result);
          }
        });
    });
  });
  return promise;
};

let p1 = myPromise(3000, true, 1);
let p2 = myPromise(2000, true, 2);

Promise.myPromiseAllSetlled([p1, p2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
