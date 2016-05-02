var express = require('express');
var app = express();
var fs = require("fs");

/* Will not need until you're serving an actual app

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});*/


// Get contents as string
var contents = fs.readFileSync('events.json', 'utf8');

// Parse string as array of JSON objects
contents = JSON.parse(contents);

// Push an object to the array
contents.push({ test: 'test'});

// Turn the array back into a string
contents = JSON.stringify(contents);

// Write it to the file
var update = fs.writeFileSync('events.json', contents);

// Now check events.json to see if it worked.
