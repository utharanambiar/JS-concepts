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

let p1 = myPromise(300, true, 1);
let p2 = myPromise(2000, true, 2);

Promise.race([p1, p2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//whatever SETTLES first is returned, only 1 value returned
