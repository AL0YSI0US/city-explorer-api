'use strict';
console.log('❤️ hello aloysious. . . welcome to the back-end! ❤️');
// create handler for the weatherdata ???
// const weatherData = require('./data/weather.json'); DNN
// const { response } = require('express'); DNN

// require express ---------------------------------[ install ] : npm install express -]
const express = require('express');

// require cors ---------------------------------[ install ] : npm install cors -]
const cors = require('cors');

require('dotenv').config();

// const weatherbitIoData = require('./handlers/weather');
// const movieDatabaseData = require('./handlers/movies');
const app = express();

// makes sure the data is accessible from the React frontend 
app.use(cors());

//this is so it does not break in heroku build out
const PORT = process.env.PORT || 3001;


// actually use the .env file
// require superagent --------------------------------[ install ] : npm install superagent -]
const superagent = require('superagent');

app.get('/weather', (request, response) => {
  console.log(request.query);
  // [.query] allows you to break up a request into query parameters using an object instead of a string
  superagent.get('https://api.weatherbit.io/v2.0/forecast/daily')
    .query({
      key: process.env.WEATHERBIT_API_KEY,
      days: '10',
      units: 'I',
      // initially the coordinates were placed here
      // lat: 47.6062,
      // lon: -122.3321
      // then you change it to this:
      lat: request.query.lat,
      lon: request.query.lon
    })
    .then(weatherbitIoData => {
      console.log(weatherbitIoData.body.data);
      // was a console log now it should send data
      response.send(weatherbitIoData.body.data.map(day => new DailyWeather(day)))
    })
    .catch(error => {
      // Ta Joe 
      console.log(error.message);
    })
  })


function DailyWeather(day) {
  this.date = day.valid_date;
  this.description = day.weather.description;
  this.lowTemp = day.low_temp;
  this.hiTemp = day.max_temp; 
}

// https://api.themoviedb.org/3/search/movie?api_key=a567883dd6a7eef4719ea154597c127e&query=seattle

// app.get('/movies', (request, response) => {
//   superagent.get('https://api.themoviedb.org/3/search/movie')
//   .query({
//     api_key: process.env.MOVIE_API_KEY,
//     query: request.query.city,
//     // query: Movie images ? ? ? 
//   })
//   .then (movieDatabaseData => {
//     console.log(movieDatabaseData.body.results);
//       // .map(x => (new Movies (x))))
//   })
//   .catch(err => (err.request, err.response));
  



// most of your actual server definition goes here
// a servers job is to listen t some file path for a particular method
// listening for GET requests at the path
// take in in two arguments: the path and the response
// app.get('/weather', (request, response) => {
//   try {
// this will be where I input the weatherbitIo hyperlink ---------------------------------]
// query parameters in class 08 Demo  ------------------------------------------]
// const dailyForecasts = weatherData.data.map(day => new Forecasts(day));
// when we get the request, send a response that says returns some forecasts
// response has some methods that are very helpful such as teh send method
//     response.send(dailyForecasts);
//   } catch (error) {
//     handleErrors(error, response);
//   }
// })

// "data munging" 1.0 weatherbit
function Forecasts(day) {
  this.date = day.datetime;
  this.description = day.weather.description;
  this.lowTemp = day.low_temp;
  this.hiTemp = day.max_temp;
}

// TODO
// https://api.weatherbit.io/v2.0/forecast/daily?key=778ec281404a4684bda0e96aca0bf333&days=7&units=I&lat=47.6062&lon=-122.3321
// come back later to ensure that I am requesting the lat and long
// that was skipped early on in lab 7 [cannot be done locally]
// can be imported from 8bit though:
// [english] &lang=en
// [degrees in F] &units=I
// [optional / callback function] &callback=${}
// [populate a week] &days=7 
// [lattitude and longitude] &lat&lon&

// TODO 
// create a function to handle errors from any API call
// Send a status of 500 along with an error message to the client.
function handleErrors(err, response) {
  response.status(500).send(`Internal Error`);
}
console.log('ooooh data!!!!!');
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));

// CREATE .env on the first line do this: PORT=30002
// in the terminal....do this: npm install dotenv
