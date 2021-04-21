'use strict';

console.log('❤️ hello aloysious. . . welcome to the back-end! ❤️');

// require express ---------------------------------[ install ] : npm install express -]
const express = require('express');

// require cors ---------------------------------[ install ] : npm install cors -]
const cors = require('cors');

require('dotenv').config();

// const weatherbitIoData = require('./handlers/Weather.js');
// const movieInformation = require('./handlers/Movies.js');
const app = express();

// makes sure the data is accessible from the React frontend 
app.use(cors());

//this is so it does not break in heroku build out
const PORT = process.env.PORT || 3001;

//------------------------------------------------------------------------------------------------------ W E A T H E R  . D A T A -------------X
// [.query] allows you to break up a request into query parameters using an object instead of a string
// require superagent --------------------------------[ install ] : npm install superagent -]
const superagent = require('superagent');

app.get('/weather', (request, response) => {
  console.log(request.query);
  superagent.get('https://api.weatherbit.io/v2.0/forecast/daily')
    .query({
      key: process.env.WEATHERBIT_API_KEY,
      days: '10',
      units: 'I',
      // initially the coordinates were placed below
      // lat: 47.6062,
      // lon: -122.3321
      // then you change it to this JSX dribble:
      lat: request.query.lat,
      lon: request.query.lon
    })
    .then(weatherbitIoData => {
      console.log('in the weather request: ', weatherbitIoData.body.data);
      // was a console log now it should send data
      response.send(weatherbitIoData.body.data.map(day => new DailyWeather(day)))
    })
    .catch(error => {
      handleErrors(error.message);
    })
})
function DailyWeather(day) {
  this.date = day.valid_date;
  this.description = day.weather.description;
  this.lowTemp = day.low_temp;
  this.hiTemp = day.max_temp;
}
//-------------------------------------------------------------- { ASSISTED BY: TA JOE & RYAN & DANIEL }
//------------------------------------------------------------------------------------------------------ M O V I E  . D A T A -------------X
// https://api.themoviedb.org/3/search/movie?api_key=a567883dd6a7eef4719ea154597c127e&query=seattle
app.get('/movies', (request, response) => {
  console.log(request.query);
  superagent.get('https://api.themoviedb.org/3/search/movie')
  .query({
    query: request.query.location,
    api_key: process.env.MOVIE_API_KEY
    })
    .then(movieInformation => {
      console.log('in the movies request: ', movieInformation.body.results);
      response.send(movieInformation.body.results.map(movie => new Movie(movie)))
    })
    .catch(error => {
      handleErrors(error.message);
    })
})
function Movie(movie) {
  this.title = movie.title;
  this.overview = movie.overview;
  this.average_votes = movie.vote_average;
  this.total_votes = movie.vote_count;
  this.image_url = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
  this.popularity = movie.popularity;
  this.released_date = movie.release_date;
}
//-------------------------------------------------------------- { ASSISTED BY: TA CHANCE }
//---------------------------------------------------------------------------------------------------- E R R O R  . H A N D L I N G -------X
// TODO 
// create a function to handle errors from any API call
// Send a status of 500 along with an error message to the client.
function handleErrors(err, response) {
  console.log(err);
  response.status(500).send(`Internal Error`);
}
//-------------------------------------------------------------- { ASSISTED BY: TA JOE & TA KRISTIAN }
//----------------------------------------------------------------------------------------------------------------- L I S T E N I N G ------X
console.log('ooooh data!!!!!');
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
