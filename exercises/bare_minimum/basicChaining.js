/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */
// we may need to require past functions here
var { getGitHubProfileAsync } = require('./promisification.js');
var { pluckFirstLineFromFileAsync } = require('./promiseConstructor.js');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

Promise.promisifyAll(fs);

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return pluckFirstLineFromFileAsync(readFilePath)
    .then(function(user) {
      return getGitHubProfileAsync(user);
    })
    .then(function(getJson) {
      // fs.writeFile(file, data[, options], callback)
      return fs.writeFileAsync(writeFilePath, JSON.stringify(getJson));
    });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
