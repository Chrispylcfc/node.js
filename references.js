var Bucky = {
  faveFood: "Pasta",
  faveMovie: "The Shawshank Redemption"
};

// A reference to Bucky (NOT A COPY)
var Person = Bucky;
Person.faveFood = "Salad";
console.log(Bucky.faveFood);

/* Equal Sign Comparison */

// Just compares values
console.log(19 == '19'); // true

// Compares both values and types
console.log(19 === '19'); // false
