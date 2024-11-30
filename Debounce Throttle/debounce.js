async function fetchData() {
  await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
let res = debounce(fetchData, 3000);

res();
