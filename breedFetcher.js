const request = require('request');
const arg = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?name=${arg}`, (error, response, body) => {
  if (!arg || []) {
    console.log(`Oupsi... we're not founding what you're looking for: ${error}`);
    return;
  } if (error) {
    console.log(`Oupsi... there's been an error: ${error}`);
    return;
  }
  const data = JSON.parse(body);
  const catDescription = data[0].description;
  console.log(catDescription);
});
