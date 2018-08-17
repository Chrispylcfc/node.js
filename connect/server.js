var connect = require('connect');
var http = require('http');

var app = connect();

app.use('/profile', profile);
app.use('/forum', forum);

function profile(response, request) {
  console.log("User requested the Profile Page.");
}

function forum(response, request) {
  console.log("User requested the Forum Page.");
}

// function doFirst(request, response, next) {
//   console.log("Bacon");
//   next();
// }
//
// function doSecond(request, response, next) {
//   console.log("Tuna");
//   next();
// }
//
// app.use(doFirst);
// app.use(doSecond);

http.createServer(app).listen(8000);
console.log("Server is now running...")
