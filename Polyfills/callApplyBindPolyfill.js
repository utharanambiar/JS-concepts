const myName = {
  firstName: "Uthara",
  lastName: "Nambiar",
};

function printName(city, country) {
  console.log(`${this.firstName} ${this.lastName}, ${city} - ${country}`);
}

//Here this points to printName function
// takes a single argument
Function.prototype.myCall = function (context, ...args) {
  context.myFn = this;
  context.myFn(...args);
};

//takes an array of arguments
Function.prototype.myApply = function (context, ...args) {
  context.myFn = this;
  // this converts array to 2 parameters
  context.myFn(...args[0]);
};

// returns a new function
Function.prototype.myBind = function (context, ...args) {
  context.myFn = this;
  return function () {
    return context.myFn.apply(context, [...args[0]]);
  };
};

//printName.myCall(myName, "Kerala", "India");
//printName.myApply(myName, ["Kerala", "India"]);

const funccc = printName.myBind(myName, ["Kerala", "India"]);
funccc();
