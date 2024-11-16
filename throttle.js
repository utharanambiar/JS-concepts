async function fetchData() {
  await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function throttle(func, limit) {
  let context = this,
    lastCall = 0;

  return function (...args) {
    let now = Date.now();
    console.log(now);
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(context, args);
    }
  };
}

const throttledFetchData = throttle(fetchData, 2000);

// Simulate rapid calls
setInterval(throttledFetchData, 500);
