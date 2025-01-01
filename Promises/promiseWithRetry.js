const myPromise = (timer, val, promiseVal) => {
  return new Promise((res, rej) => {
    if (val) {
      //setTimeout(() => {
      res(`Resolved ${promiseVal}`);
      //}, timer);
    } else {
      rej(`REJECTED! ${promiseVal}`);
    }
  });
};

let p1 = myPromise(3000, false, 1);
let p2 = myPromise(3000, true, 2);

Promise.all([
  retryPromiseWithDelay(p1, 3, 2000),
  retryPromiseWithDelay(p2, 3, 2000),
])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//For example, we’d like to fetch the information about multiple users. Even if one request fails, we’re still interested in the others.

/**
 * Util function to return a promise which is resolved in provided milliseconds
 */
function waitFor(millSeconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, millSeconds);
  });
}

async function retryPromiseWithDelay(promise, nthTry, delay) {
  try {
    let res = await promise;
    return res;
  } catch (e) {
    if (nthTry === 0) {
      return Promise.reject(e);
    }
    console.log(nthTry + " times tried");
    await waitFor(delay);
    return retryPromiseWithDelay(promise, nthTry - 1, delay);
  }
}
