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

Promise.myPromiseAny = function (arr) {
  let rejections = [],
    total = 0;
  const promise = new Promise((resolve, reject) => {
    arr.forEach((promise, index) => {
      promise.then(resolve).catch((err) => {
        rejections[index] = err;
        total++;
        if (total === arr.length) {
          reject(new AggregateError(rejections, "All were rejected"));
        }
      });
    });
  });
  return promise;
};

let p1 = myPromise(3000, false, 1);
let p2 = myPromise(2000, true, 2);

Promise.myPromiseAny([p1, p2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
