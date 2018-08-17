// File Service core modules
var fs = require('fs');

fs.writeFileSync('random.txt', "Testing is bad...");

console.log(fs.readFileSync('random.txt').toString());

// Path core modules
var path = require('path');

var websiteHome = "Desktop/Bucky//thenewboston/index.html";
var websiteAbout = "Desktop/Bucky/thenewboston/about.html";

console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));
