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

Promise.myPromiseRace = function (arr) {
  const promise = new Promise((resolve, reject) => {
    arr.forEach((promise) => {
      promise.then(resolve).catch(reject);
    });
  });
  return promise;
};

let p1 = myPromise(3000, true, 1);
let p2 = myPromise(2000, false, 2);

Promise.myPromiseRace([p1, p2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
