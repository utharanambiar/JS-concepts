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

Promise.allSettled([p1, p2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//For example, we’d like to fetch the information about multiple users. Even if one request fails, we’re still interested in the others.
