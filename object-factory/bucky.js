var movies = require('./movies');

var buckyMovies = movies();

buckyMovies.faveMovie = "Shawshank Redemption";

console.log("Bucky's favourite movie is: " + buckyMovies.faveMovie);
