var movies = require('./movies');

var emilyMovies = movies();
emilyMovies.faveMovie = "The Notebook";

console.log("Emily's favourite movie is: " + emilyMovies.faveMovie);
