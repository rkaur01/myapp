var express = require('express');
var app = express();
var fs = require('fs');

// Host your dir so you can manually check stuff
app.use(express.static(__dirname));

// Read endpoint
app.get('/api/read', function (req, res) {
  res.json(readData());
});

// Write endpoint
app.get('/api/write', function (req, res) {
  res.json(writeData(req.query));
});

// Server listener
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// Wrapper for saved file -> obj
function readData() {
  return JSON.parse(fs.readFileSync('events.json', 'utf8'));
}

// Wrapper for obj -> saved file
function writeData(update) {
  return fs.writeFileSync('events.json', JSON.stringify(update));
}
