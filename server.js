const express = require('express');
const cors = require('cors');
// actually use the .env file
require('dotenv').config();

const weather  = require('./weather.json');

const app = express();

// maakes sure the data is accessible from the React frontend {Michelle's notes}
app.use(cors());

//this is so it does not break in heroku build
const PORT = process.env.PORT || 3001;

// most of your actual server definition goes here
// a servers job is to listen t some file path for a particular method
// listening for GET requests at the path


//take in in two arguments: the path and the response
app.get('/', (resuest, response) => {
  // when we get the request, send a response that says hello!
  // response has some methods that are very helpful such as teh send method
  response.send('hello');
});

app.get('./weather', (request, response) => {
  response.json(weather);
});

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));

// CREATE .env on the first line do this: PORT=30002
// in the terminal....do this: npm install dotenv
