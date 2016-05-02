var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// Define JSON File
 var fs = require("fs");
 console.log("\n *STARTING* \n");
// Get content from file
 var contents = fs.readFileSync("events.json");
// Define to JSON type
 var jsonContent = JSON.parse(contents);
// Get Value from JSON
 console.log("Title:", contents.title);
 console.log("Start:", contents.start);
console.log("\n *EXIT* \n");
