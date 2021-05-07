const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=79364c859d9e335a7cafb425171d3808&query=${latitude},${longitude}`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to the server.", undefined);
    } else if (body.error) {
      callback("Please check the coordinates passed in the query");
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out there. It feels like ${body.current.feelslike} degrees out there.`
      );
    }
  });
};

module.exports = forecast;
