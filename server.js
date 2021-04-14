'use strict';
const express = require('express');
const cors = require('cors');
// actually use the .env file
require('dotenv').config();
const weatherData = require('./data/weather.json');
const app = express();
// makes sure the data is accessible from the React frontend 
app.use(cors());
//this is so it does not break in heroku build out
const PORT = process.env.PORT || 3001;
// most of your actual server definition goes here
// a servers job is to listen t some file path for a particular method
// listening for GET requests at the path

// take in in two arguments: the path and the response
app.get('/weather', (resuest, response) => {
  const allDailyForecasts = weather.data.map(day => new allDailyForecasts(day));
  // when we get the request, send a response that says returns some forecasts
  // response has some methods that are very helpful such as teh send method
  response.send(allDailyForecasts);
})

function DailyForecast(day) {
  this.date = day.datetime;
  this.description;
}

app.get('/weather', (request, response) => {
  response.json(weatherData);
}

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));

// CREATE .env on the first line do this: PORT=30002
// in the terminal....do this: npm install dotenv
