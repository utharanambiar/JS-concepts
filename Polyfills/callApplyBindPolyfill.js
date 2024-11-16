const myName = {
    firstName: "Uthara",
    lastName: "Nambiar",
  };

  function printName(city, country) {
    console.log(`${this.firstName} ${this.lastName}, ${city} - ${country}`);
  }
  
  Function.prototype.myCall = function (context, ...args) {
    context.myFn = this;
    context.myFn(...args);
  };
  
  Function.prototype.myApply = function (context, ...args) {
    context.myFn = this;
    context.myFn(...args[0]);
  };
  
  Function.prototype.myBind = function (context, ...args) {
    context.myFn = this;
    return function (...args1) {
      return context.myFn.apply(context, [...args, ...args1]);
    };
  };
  
  printName.myApply(myName, ["Kerala", "India"]);
  
  const funccc = printName.myBind(myName, "Palia", "India");
  
  funccc();