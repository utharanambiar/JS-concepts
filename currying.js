//2 ways - Currying is a functional programming technique where a function with multiple arguments is transformed into a series of functions, each taking a single argument.

// 1: Using bind

function calculateVolume2(length, breadth, height) {
  console.log(length * breadth * height);
}

let calcVol = calculateVolume2.bind(null);
let withLen = calcVol.bind(this, 5);
let withBred = withLen.bind(this, 6);

withBred(4);

// 2: Using closures

function calculateVolume(length) {
  return function (breadth) {
    return function (height) {
      return length * breadth * height;
    };
  };
}

console.log(calculateVolume(4)(5)(6));
