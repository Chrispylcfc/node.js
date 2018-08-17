var Bucky = {
  printFirstName: function() {
    console.log("My name is Bucky!");
    console.log(this === Bucky); // true
  }
};

Bucky.printFirstName();

// The default calling context is global
function doSomethingWorthless() {
  console.log("\nI am Worthless!");
  console.log(this === global); // true
}

doSomethingWorthless();
