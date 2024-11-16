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

let p1 = myPromise(3000, true, 1);
let p2 = myPromise(20000, false, 2);

Promise.all([p1, p2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//Promise.all takes an iterable (usually, an array of promises) and returns a new promise.
