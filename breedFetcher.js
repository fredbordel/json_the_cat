const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
   
  request(`https://api.thecatapi.com/v1/breeds/search?name=${breedName}`, (error, response, body) => {
    let desc = null;
    if (!breedName || body === "[]") {
      return callback("Not a real cat...", null);
    } if (error) {
      return callback(error, null);
    }
    let data = JSON.parse(body);
    desc = data[0].description;
    return callback(null, desc);
  });
};

module.exports = { fetchBreedDescription };

