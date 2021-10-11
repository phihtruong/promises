/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  // readfile, passing in filepath, encoding, and a function
  // function: return the first line from file
  fs.readFile(filePath, 'utf8', function(err, content) {
    if (err) {
      callback(err);
    } else {
      var firstLine = content.split('\n');
      console.log('content here: ', firstLine);
      callback(null, firstLine[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  // request, passing in url
  request.get(url, function(err, response) {
    if (err) {
      callback(err);
    } else {
      callback(null, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
