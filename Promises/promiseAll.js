const myPromise = (timer, val) => {
  return new Promise((res, rej) => {
    if (val) {
      setTimeout(() => {
        res("Resolved");
      }, timer);
    } else {
      rej("REJECTED!");
    }
  });
};

let p1 = myPromise(2000, true)
let p2 = myPromise(3000, false)


Promise.allSettled([p1, p2]).then((res) => console.log(res)).catch((err) => console.log(err));