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

let p1 = myPromise(300, false, 1);
let p2 = myPromise(2000, false, 2);

Promise.any([p1, p2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//whatever RESOLVES(success) first is returned, only 1 value returned
