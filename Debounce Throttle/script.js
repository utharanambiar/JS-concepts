const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

const updateDebounceText = debounce((text) => {
  //debounceText.textContent = text;
  incrementCounter(debounceText);
}, 1000);

const updateThrottleText = throttle((text) => {
  //throttleText.textContent = text;
  incrementCounter(throttleText);
}, 1000);

// input.addEventListener("input", (e) => {
//   defaultText.textContent = e.target.value;
//   updateDebounceText(e.target.value);
//   updateThrottleText(e.target.value);
// });

document.addEventListener("mousemove", () => {
  incrementCounter(defaultText);
  updateDebounceText();
  updateThrottleText();
});

function debounce(cb, delay) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

function throttle(cb, delay) {
  let shouldWait = false,
    waitForArgs;

  const timeoutFunc = () => {
    if (waitForArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitForArgs);
      waitForArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitForArgs = args;
      return;
    }
    cb(...args);
    shouldWait = true;
    setTimeout(timeoutFunc, delay);
  };
}

function incrementCounter(element) {
  element.textContent = (parseInt(element.innerText) || 0) + 1;
}
